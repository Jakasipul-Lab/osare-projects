import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const result = body.Body?.stkCallback;
    if (result && result.ResultCode === 0) {
       const metadata = result.CallbackMetadata.Item;
       const amount = metadata.find(i => i.Name === 'Amount')?.Value;
       const phone = metadata.find(i => i.Name === 'PhoneNumber')?.Value;
       const phoneMatch = phone.toString().slice(-9);
       await query("UPDATE vendors SET is_active = true WHERE phone LIKE '%' || $1", [phoneMatch]);
    }
    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Accepted' });
  } catch (error) {
    return NextResponse.json({ ResultCode: 1, ResultDesc: 'Error' }, { status: 500 });
  }
}