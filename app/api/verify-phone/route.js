import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { allow, reset } from '@/lib/throttle';

export async function POST(request) {
  try {
    const { listingId, code } = await request.json();
    if (!listingId || !code) {
      return NextResponse.json({ error: 'Missing listingId or code' }, { status: 400 });
    }

    const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
    if (
      !allow(`vp-ip:${ip}`, 30, 60 * 60 * 1000) ||
      !allow(`vp:${listingId}`, 5, 10 * 60 * 1000)
    ) {
      return NextResponse.json(
        { error: 'Too many attempts. Please request a new code.' },
        { status: 429 }
      );
    }

    const res = await query(
      'SELECT phone_verification_code, phone_verification_expires FROM listings WHERE id = $1',
      [listingId]
    );
    const row = res.rows[0];

    if (!row || !row.phone_verification_code) {
      return NextResponse.json({ error: 'No verification code was sent for this listing' }, { status: 400 });
    }

    if (new Date(row.phone_verification_expires) < new Date()) {
      return NextResponse.json({ error: 'Code has expired. Please request a new one.' }, { status: 400 });
    }

    if (String(row.phone_verification_code) !== String(code)) {
      return NextResponse.json({ error: 'Incorrect code' }, { status: 400 });
    }

    // Correct and not expired: mark verified, clear the used code.
    await query(
      `UPDATE listings
       SET is_verified = true,
           phone_verification_code = NULL,
           phone_verification_expires = NULL
       WHERE id = $1`,
      [listingId]
    );
    reset(`vp:${listingId}`);

    return NextResponse.json({ success: true, verified: true });
  } catch (e) {
    return NextResponse.json({ error: 'Could not verify the code. Please try again later.' }, { status: 500 });
  }
}
