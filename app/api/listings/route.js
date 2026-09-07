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

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.title || !body.vendor) {
      return NextResponse.json(
        { success: false, error: 'Title and vendor are required' },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO listings (
        type, category, title, vendor, vendor_office, location, map_link,
        description, includes, price_value, currency, price_label,
        off_peak_value, off_peak_label, season, image, keywords,
        is_verified, price_status, created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,
        $13, $14, $15, $16, $17, $18, $19, NOW()
      )
      RETURNING *
    `;
    const params = [
      body.type || 'safari',
      body.category || null,
      body.title,
      body.vendor,
      body.vendorOffice || null,
      body.location || null,
      body.mapLink || null,
      body.description || null,
      body.includes || null,
      body.priceValue ? Number(body.priceValue) : null,
      body.currency || 'USD',
      body.priceLabel || null,
      body.offPeakValue ? Number(body.offPeakValue) : null,
      body.offPeakLabel || null,
      body.season || null,
      body.image || null,
      body.keywords || null,
      body.isVerified ?? true,
      body.priceStatus || 'confirmed',
    ];

    const result = await query(sql, params);
    const created = mapVendorRow(result.rows[0]);

    return NextResponse.json(
      { success: true, listing: created },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
