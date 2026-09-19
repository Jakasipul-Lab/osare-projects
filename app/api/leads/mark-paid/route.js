import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const { code } = await request.json();
    if (!code) {
      return NextResponse.json({ success: false, error: 'Code is required' }, { status: 400 });
    }
    const result = await query(
      "UPDATE leads SET commission_status = 'paid' WHERE code = $1 RETURNING id, code, commission_status",
      [code]
    );
    if (result.rows.length === 0) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, lead: result.rows[0] });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
