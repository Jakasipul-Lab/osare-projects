import { NextResponse } from 'next/server';
import { randomInt } from 'crypto';
import { query } from '@/lib/db';
import { allow, reset } from '@/lib/throttle';

// Sends a 6-digit verification code to a listing's vendor_phone via
// Africa's Talking SMS API. Works in sandbox mode by default (safe,
// no real SMS sent) until AT_USERNAME is switched to your live username.

function generateCode() {
  return String(randomInt(100000, 1000000)); // 6 digits
}

export async function POST(request) {
  try {
    const { listingId } = await request.json();
    if (!listingId) {
      return NextResponse.json({ error: 'Missing listingId' }, { status: 400 });
    }

    const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
    const HOUR = 60 * 60 * 1000;
    if (
      !allow(`sv-ip:${ip}`, 10, HOUR) ||
      !allow(`sv-cool:${listingId}`, 1, 2 * 60 * 1000) ||
      !allow(`sv-hour:${listingId}`, 3, HOUR)
    ) {
      return NextResponse.json(
        { error: 'Too many code requests. Please wait a few minutes and try again.' },
        { status: 429 }
      );
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
    reset(`vp:${listingId}`); // a fresh code starts a fresh set of attempts

    // Send via Africa's Talking SMS API (sandbox or live, based on env vars)
    const AT_USERNAME = process.env.AT_USERNAME || 'sandbox';
    const AT_API_KEY = process.env.AT_API_KEY;

    if (!AT_API_KEY) {
      return NextResponse.json({ error: 'SMS service not configured (missing AT_API_KEY)' }, { status: 500 });
    }

    await fetch('https://api.sandbox.africastalking.com/version1/messaging', {
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

    return NextResponse.json({ success: true, sandbox: AT_USERNAME === 'sandbox' });
  } catch (e) {
    return NextResponse.json({ error: 'Could not send the code. Please try again later.' }, { status: 500 });
  }
}
