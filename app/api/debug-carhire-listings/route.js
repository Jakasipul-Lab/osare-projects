import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const allRes = await query('SELECT title, category, location FROM listings ORDER BY category');
    const carHireRes = await query(
      "SELECT title, category, location, vendor_phone FROM listings WHERE category ILIKE '%car%' OR category ILIKE '%caravan%' OR category ILIKE '%4x4%'"
    );
    const totalRes = await query('SELECT count(*) FROM listings');
    const publishedRes = await query('SELECT count(*) FROM listings WHERE published = true');

    return NextResponse.json({
      totalListings: Number(totalRes.rows[0].count),
      publishedListings: Number(publishedRes.rows[0].count),
      carHireListingsFound: carHireRes.rows.length,
      carHireListings: carHireRes.rows,
      allCategories: [...new Set(allRes.rows.map(r => r.category))]
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
