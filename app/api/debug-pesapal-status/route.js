import { NextResponse } from 'next/server';
import { getTransactionStatus } from '@/lib/pesapal';

// Temporary diagnostic route. Visit as:
// /api/debug-pesapal-status?id=THE_ORDER_TRACKING_ID
// Shows Pesapal's real, current status for a specific payment attempt.
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Add ?id=THE_ORDER_TRACKING_ID to the URL' }, { status: 400 });
    }
    const data = await getTransactionStatus(id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
