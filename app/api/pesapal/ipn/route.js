import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getTransactionStatus } from '@/lib/pesapal';

// Pesapal calls this URL on its own (as a GET request) whenever a payment's
// status changes, passing the tracking id and the reference we gave it
// (the lead's OSARE code). We look up the real status with Pesapal (never
// trust the notification alone) and, if paid, mark that lead's commission
// as paid automatically.
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const orderTrackingId = searchParams.get('OrderTrackingId');
    const orderMerchantReference = searchParams.get('OrderMerchantReference');
    const notificationType = searchParams.get('OrderNotificationType') || 'IPNCHANGE';

    if (!orderTrackingId) {
      return NextResponse.json({ error: 'Missing OrderTrackingId' }, { status: 400 });
    }

    const statusData = await getTransactionStatus(orderTrackingId);
    const statusDesc = statusData?.payment_status_description; // Pesapal sends "Completed" / "Failed" / "Invalid" / "Reversed"
    const success = String(statusDesc || '').toLowerCase() === 'completed';

    try {
      await query(
        `UPDATE transactions SET status = $1, result_desc = $2 WHERE checkout_request_id = $3`,
        [success ? 'completed' : String(statusDesc || 'unknown').toLowerCase(), statusDesc, orderTrackingId]
      );
    } catch (e) {
      // Logging failure shouldn't stop the lead from being marked paid below.
    }

    if (success && orderMerchantReference) {
      try {
        await query("UPDATE leads SET commission_status = 'paid' WHERE code = $1", [
          orderMerchantReference,
        ]);
      } catch (e) {
        // If this fails, the transaction is still logged above, so the
        // payment isn't lost — it just needs marking paid by hand.
      }
    }

    // Pesapal expects exactly this shape back, or it will keep retrying.
    return NextResponse.json({
      orderNotificationType: notificationType,
      orderTrackingId,
      orderMerchantReference,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
