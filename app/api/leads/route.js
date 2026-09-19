import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

function mapLead(row) {
  return {
    id: row.id,
    listingId: row.listing_id,
    listingTitle: row.listing_title,
    vendor: row.vendor,
    category: row.category,
    type: row.type,
    priceLabel: row.price_label,
    priceValue: row.price_value !== null ? Number(row.price_value) : null,
    currency: row.currency,
    commission: row.commission !== null ? Number(row.commission) : null,
    channel: row.channel,
    createdAt: row.created_at,
    code: row.code,
    commissionStatus: row.commission_status,
  };
}

export async function GET() {
  try {
    const result = await query('SELECT * FROM leads ORDER BY created_at DESC');
    return NextResponse.json(result.rows.map(mapLead));
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
