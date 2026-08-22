import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Safaricom Daraja sends STK Push results here after a customer enters
// their M-Pesa PIN (or the request times out / is cancelled).
//
// This route does two things on a successful payment:
//  1. Records the transaction in `transactions` (for accounting/audit).
//  2. Activates the paying vendor (`vendors.is_active = true`), matched
//     by the last 9 digits of their phone number to handle formatting
//     differences (0712xxxxxx vs 254712xxxxxx vs +254712xxxxxx).

function extractMetadataValue(items, name) {
  if (!Array.isArray(items)) return null;
  const found = items.find(i => i.Name === name);
  return found ? found.Value : null;
}

function parseMpesaTimestamp(raw) {
  if (!raw) return null;
  const s = String(raw);
  if (s.length !== 14) return null;
  return `${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)} ${s.slice(8,10)}:${s.slice(10,12)}:${s.slice(12,14)}`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const callback = body?.Body?.stkCallback;

    if (!callback) {
      return NextResponse.json({ ResultCode: 0, ResultDesc: 'Accepted' });
    }

    const merchantRequestId = callback.MerchantRequestID || null;
    const checkoutRequestId = callback.CheckoutRequestID || null;
    const resultCode = typeof callback.ResultCode === 'number' ? callback.ResultCode : null;
    const resultDesc = callback.ResultDesc || null;
    const success = resultCode === 0;

    const items = callback.CallbackMetadata?.Item;
    const amount = extractMetadataValue(items, 'Amount');
    const mpesaReceiptNumber = extractMetadataValue(items, 'MpesaReceiptNumber');
    const transactionDateRaw = extractMetadataValue(items, 'TransactionDate');
    const phoneRaw = extractMetadataValue(items, 'PhoneNumber');
    const transactionDate = parseMpesaTimestamp(transactionDateRaw);
    const status = success ? 'completed' : 'failed';

    try {
      const existing = checkoutRequestId
        ? await query('SELECT id FROM transactions WHERE checkout_request_id = $1', [checkoutRequestId])
        : { rows: [] };

      if (existing.rows.length > 0) {
        await query(
          `UPDATE transactions
           SET status = $1, result_code = $2, result_desc = $3,
               mpesa_receipt_number = $4, phone_number = $5,
               transaction_date = $6, amount_total = COALESCE($7, amount_total)
           WHERE checkout_request_id = $8`,
          [status, resultCode, resultDesc, mpesaReceiptNumber, phoneRaw ? String(phoneRaw) : null,
           transactionDate, amount, checkoutRequestId]
        );
      } else {
        await query(
          `INSERT INTO transactions
             (provider_id, merchant_request_id, checkout_request_id, result_code, result_desc,
              mpesa_receipt_number, phone_number, transaction_date, amount_total, status, created_at)
           VALUES ('mpesa', $1, $2, $3, $4, $5, $6, $7, $8, $9, now())`,
          [merchantRequestId, checkoutRequestId, resultCode, resultDesc,
           mpesaReceiptNumber, phoneRaw ? String(phoneRaw) : null,
           transactionDate, amount, status]
        );
      }
    } catch (dbError) {}

    if (success && phoneRaw) {
      try {
        const phoneMatch = String(phoneRaw).slice(-9);
        await query(
          "UPDATE vendors SET is_active = true WHERE phone LIKE '%' || $1",
          [phoneMatch]
        );
      } catch (activationError) {}
    }

    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Accepted' });
  } catch (e) {
    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Accepted' });
  }
}
