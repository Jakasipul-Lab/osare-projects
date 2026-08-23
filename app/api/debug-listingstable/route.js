import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  const result = {};

  try {
    const countRes = await query('SELECT count(*) FROM listings');
    result.listingsCount = Number(countRes.rows[0].count);
  } catch (e) {
    result.listingsCount = { error: e.message };
  }

  try {
    const colsRes = await query(
      "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'listings' ORDER BY ordinal_position"
    );
    result.listingsColumns = colsRes.rows;
  } catch (e) {
    result.listingsColumns = { error: e.message };
  }

  try {
    const sampleRes = await query('SELECT * FROM listings ORDER BY created_at DESC LIMIT 5');
    result.listingsSample = sampleRes.rows;
  } catch (e) {
    result.listingsSample = { error: e.message };
  }

  return NextResponse.json(result);
}
