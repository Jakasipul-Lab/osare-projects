import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Sends a 6-digit verification code to a listing's vendor_phone via
// Africa's Talking SMS API. Works in sandbox mode by default (safe,
// no real SMS sent) until AT_USERNAME is switched to your live username.

function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000)); // 6 digits
}

export async function POST(request) {
  try {
    const { listingId } = await request.json();
    if (!listingId) {
      return NextResponse.json({ error: 'Missing listingId' }, { status: 400 });
    }

    const res = await query('SELECT vendor_phone FROM listings WHERE id = $1', [listingId]);
    if (!res.rows[0] || !res.rows[0].vendor_phone) {
      return NextResponse.json({ error: 'No phone number on file for this listing' }, { status: 400 });
    }

    const phone = res.rows[0].vendor_phone;
    const code = generateCode();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await query(
      'UPDATE listings SET phone_verification_code = $1, phone_verification_expires = $2 WHERE id = $3',
      [code, expires, listingId]
    );

    // Send via Africa's Talking SMS API (sandbox or live, based on env vars)
    const AT_USERNAME = process.env.AT_USERNAME || 'sandbox';
    const AT_API_KEY = process.env.AT_API_KEY;

    if (!AT_API_KEY) {
      return NextResponse.json({ error: 'SMS service not configured (missing AT_API_KEY)' }, { status: 500 });
    }

    const smsRes = await fetch('https://api.sandbox.africastalking.com/version1/messaging', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'apiKey': AT_API_KEY,
      },
      body: new URLSearchParams({
        username: AT_USERNAME,
        to: phone,
        message: `Your OSARE verification code is: ${code}. It expires in 10 minutes.`,
      }),
    });

    const smsData = await smsRes.json();

    return NextResponse.json({ success: true, sandbox: AT_USERNAME === 'sandbox', smsResult: smsData });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
