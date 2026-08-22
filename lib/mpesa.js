import { query } from '@/lib/db';

export async function getMpesaToken() {
  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_CONSUMER_SECRET;
  const auth = Buffer.from(`${key}:${secret}`).toString('base64');

  const res = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: { Authorization: `Basic ${auth}` }
  });
  const data = await res.json();
  return data.access_token;
}

// Daraja requires the timestamp in East Africa Time (UTC+3), not UTC.
// Using toISOString() directly (UTC) can cause intermittent auth failures
// since the derived password depends on this exact value.
function getEatTimestamp() {
  const now = new Date();
  const eat = new Date(now.getTime() + 3 * 60 * 60 * 1000); // shift UTC -> EAT
  const pad = (n) => String(n).padStart(2, '0');
  return (
    eat.getUTCFullYear().toString() +
    pad(eat.getUTCMonth() + 1) +
    pad(eat.getUTCDate()) +
    pad(eat.getUTCHours()) +
    pad(eat.getUTCMinutes()) +
    pad(eat.getUTCSeconds())
  );
}

export async function initiateStkPush(phone, amount, reference, bookingId = null) {
  const token = await getMpesaToken();
  const shortCode = process.env.MPESA_BUSINESS_SHORTCODE;
  const passkey = process.env.MPESA_PASSKEY;
  const timestamp = getEatTimestamp();
  const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const formattedPhone = cleanPhone.startsWith('0') ? '254' + cleanPhone.slice(1) : cleanPhone;

  const body = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: Math.round(amount),
    PartyA: formattedPhone,
    PartyB: shortCode,
    PhoneNumber: formattedPhone,
    CallBackURL: `https://easafariroutes.com/api/mpesa/callback`,
    AccountReference: reference.slice(0, 12),
    TransactionDesc: 'OSARE Onboarding'
  };

  const res = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();

  // Record the attempt as "pending" right away, so we have a trail even if
  // the customer never completes the payment and no callback ever arrives.
  // The callback handler will find this row by checkout_request_id and
  // update it once Safaricom reports the result.
  if (data?.CheckoutRequestID) {
    try {
      await query(
        `INSERT INTO transactions
           (provider_id, booking_id, merchant_request_id, checkout_request_id,
            amount_total, phone_number, status, created_at)
         VALUES ('mpesa', $1, $2, $3, $4, $5, 'pending', now())`,
        [bookingId, data.MerchantRequestID || null, data.CheckoutRequestID, amount, formattedPhone]
      );
    } catch (e) {
      // Don't fail the payment flow just because logging the pending
      // record failed — the callback's own insert-fallback will still
      // capture the result.
    }
  }

  return data;
}
