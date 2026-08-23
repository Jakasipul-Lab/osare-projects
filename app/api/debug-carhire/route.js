import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const allRes = await query('SELECT name, category, location FROM vendors ORDER BY category');
    const carHireRes = await query(
      "SELECT name, category, location FROM vendors WHERE category ILIKE '%car%' OR category ILIKE '%caravan%' OR category ILIKE '%4x4%'"
    );
    const totalRes = await query('SELECT count(*) FROM vendors');

    return NextResponse.json({
      totalVendors: Number(totalRes.rows[0].count),
      carHireVendorsFound: carHireRes.rows.length,
      carHireVendors: carHireRes.rows,
      allCategories: [...new Set(allRes.rows.map(r => r.category))]
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
