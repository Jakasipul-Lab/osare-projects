import { NextResponse } from 'next/server';

// Temporary diagnostic route. Shows exactly what Pesapal says when we try
// to log in with your Consumer Key/Secret, instead of a generic error.
// Safe to delete once the Pesapal integration is working.
export async function GET() {
  const PESAPAL_ENV = (process.env.PESAPAL_ENV || 'sandbox').toLowerCase();
  const BASE_URL =
    PESAPAL_ENV === 'production'
      ? 'https://pay.pesapal.com/v3'
      : 'https://cybqa.pesapal.com/pesapalv3';

  const keyPresent = Boolean(process.env.PESAPAL_CONSUMER_KEY);
  const secretPresent = Boolean(process.env.PESAPAL_CONSUMER_SECRET);
  const keyLength = process.env.PESAPAL_CONSUMER_KEY?.length || 0;
  const secretLength = process.env.PESAPAL_CONSUMER_SECRET?.length || 0;

  try {
    const res = await fetch(`${BASE_URL}/api/Auth/RequestToken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    });
    const data = await res.json();
    return NextResponse.json({
      env: PESAPAL_ENV,
      baseUrl: BASE_URL,
      httpStatus: res.status,
      keyPresentInRender: keyPresent,
      secretPresentInRender: secretPresent,
      keyLength,
      secretLength,
      pesapalResponse: data,
    });
  } catch (error) {
    return NextResponse.json({
      env: PESAPAL_ENV,
      baseUrl: BASE_URL,
      keyPresentInRender: keyPresent,
      secretPresentInRender: secretPresent,
      keyLength,
      secretLength,
      fetchError: error.message,
    });
  }
}
