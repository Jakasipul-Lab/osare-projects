import { query } from '@/lib/db';

// Pesapal has two environments with different web addresses:
//  - sandbox (testing, fake money): cybqa.pesapal.com
//  - production (real money): pay.pesapal.com
// Set PESAPAL_ENV=production in Render when you're ready to go live.
// Leaving it unset (or set to "sandbox") keeps you safely in test mode.
const PESAPAL_ENV = (process.env.PESAPAL_ENV || 'sandbox').toLowerCase();
const BASE_URL =
  PESAPAL_ENV === 'production'
    ? 'https://pay.pesapal.com/v3'
    : 'https://cybqa.pesapal.com/pesapalv3';

// Logs in to Pesapal using your Consumer Key/Secret and gets a short-lived
// access token, needed for every other call below.
export async function getPesapalToken() {
  const res = await fetch(`${BASE_URL}/api/Auth/RequestToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      consumer_key: process.env.PESAPAL_CONSUMER_KEY,
      consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
    }),
  });
  const data = await res.json();
  if (!data?.token) {
    throw new Error(data?.error?.message || data?.message || 'Could not get a Pesapal token');
  }
  return data.token;
}

// One-time setup call: tells Pesapal which web address (your IPN URL) it
// should notify whenever a payment's status changes. Run this once (via
// /api/debug-pesapal-ipn) and save the ipn_id it returns as PESAPAL_IPN_ID
// in Render. You only need to redo this if your website's domain changes.
export async function registerIpn() {
  const token = await getPesapalToken();
  const res = await fetch(`${BASE_URL}/api/URLSetup/RegisterIPN`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      url: process.env.PESAPAL_IPN_URL,
      ipn_notification_type: 'GET',
    }),
  });
  return res.json();
}

// Asks Pesapal to create a payment request and hand back a link the vendor
// can open to pay. `reference` should be unique per payment — we use the
// lead's OSARE code (e.g. "OSARE0011"), which also lets the IPN callback
// match the payment back to the right booking automatically.
export async function submitOrderRequest({
  amount,
  currency = 'KES',
  description,
  reference,
  phone,
  email,
  firstName,
  lastName,
}) {
  const token = await getPesapalToken();
  const res = await fetch(`${BASE_URL}/api/Transactions/SubmitOrderRequest`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      id: reference,
      currency,
      amount,
      description: (description || 'OSARE commission payment').slice(0, 100),
      callback_url: 'https://easafariroutes.com/api/pesapal/ipn',
      notification_id: process.env.PESAPAL_IPN_ID,
      billing_address: {
        email_address: email || 'vendor@easafariroutes.com',
        phone_number: phone || '',
        country_code: 'KE',
        first_name: firstName || 'OSARE',
        last_name: lastName || 'Vendor',
      },
    }),
  });
  const data = await res.json();

  // Record the attempt as "pending" right away, mirroring how the M-Pesa
  // side logs an STK push before knowing the outcome.
  if (data?.order_tracking_id) {
    try {
      await query(
        `INSERT INTO transactions
           (provider_id, merchant_request_id, checkout_request_id, amount_total, phone_number, status, created_at)
         VALUES ('pesapal', $1, $2, $3, $4, 'pending', now())`,
        [reference, data.order_tracking_id, amount, phone || null]
      );
    } catch (e) {
      // Logging failure shouldn't block handing back the payment link.
    }
  }

  return data; // { order_tracking_id, merchant_reference, redirect_url } or { error }
}

// Looks up the current status of a payment by its order_tracking_id.
// payment_status_description will be one of:
// 'COMPLETED' | 'FAILED' | 'INVALID' | 'REVERSED'
export async function getTransactionStatus(orderTrackingId) {
  const token = await getPesapalToken();
  const res = await fetch(
    `${BASE_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }
  );
  return res.json();
}
