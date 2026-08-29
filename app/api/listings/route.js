import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { mapVendorRow } from '@/lib/vendorData';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const search = searchParams.get('q');
    let sql = 'SELECT * FROM listings WHERE 1=1';
    const params = [];
    if (type && type !== 'All') {
      params.push(type);
      sql += ` AND type = $${params.length}`;
    }
    if (search) {
      params.push(`%${search.toLowerCase()}%`);
      const idx = params.length;
      sql += ` AND (
        LOWER(title) LIKE $${idx} OR
        LOWER(vendor) LIKE $${idx} OR
        LOWER(location) LIKE $${idx} OR
        LOWER(description) LIKE $${idx} OR
        LOWER(category) LIKE $${idx}
      )`;
    }
    sql += ' ORDER BY created_at DESC';
    const result = await query(sql, params);
    const items = result.rows.map(mapVendorRow);
    return NextResponse.json(items, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
