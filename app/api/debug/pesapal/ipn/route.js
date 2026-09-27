import { NextResponse } from 'next/server';
import { registerIpn } from '@/lib/pesapal';

// One-time setup helper. Visit this URL once in your browser after adding
// PESAPAL_CONSUMER_KEY, PESAPAL_CONSUMER_SECRET and PESAPAL_IPN_URL to
// Render: it registers your IPN URL with Pesapal and gives back an
// "ipn_id" (looks like a long code). Copy that value into a new Render
// environment variable called PESAPAL_IPN_ID, then this route is no
// longer needed.
export async function GET() {
  try {
    const result = await registerIpn();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
