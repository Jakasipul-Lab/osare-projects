import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const res = await query('SELECT name, category, image FROM vendors ORDER BY created_at DESC LIMIT 15');
    const distinctImages = await query('SELECT image, count(*) FROM vendors GROUP BY image ORDER BY count(*) DESC');

    return NextResponse.json({
      recentVendors: res.rows,
      imageDistribution: distinctImages.rows
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
