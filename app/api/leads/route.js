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
    vendorId: row.vendor_id,
    travelerName: row.traveler_name,
    travelerPhone: row.traveler_phone,
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

export async function POST(request) {
  try {
    const body = await request.json();
    const { listingId, travelerName, travelerPhone } = body;

    if (!listingId) {
      return NextResponse.json({ success: false, error: 'listingId is required' }, { status: 400 });
    }

    const listingRes = await query('SELECT * FROM listings WHERE id = $1', [listingId]);
    const listing = listingRes.rows[0];
    if (!listing) {
      return NextResponse.json({ success: false, error: 'Listing not found' }, { status: 404 });
    }

    const priceValue = Number(listing.price_value) || 0;
    const commissionRate = Number(listing.commission_rate) || 5;
    const commission = priceValue > 0 ? Math.round((priceValue * commissionRate) / 100 * 100) / 100 : 0;

    const codeRes = await query("SELECT 'OSARE' || LPAD(nextval('leads_code_seq')::text, 4, '0') AS code");
    const code = codeRes.rows[0].code;

    const insertRes = await query(
      `INSERT INTO leads (
        listing_id, listing_title, vendor, category, type,
        price_label, price_value, currency, commission, channel,
        code, commission_status, vendor_id, traveler_name, traveler_phone, created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, 'whatsapp', $10, 'unpaid', $11, $12, $13, NOW()
      ) RETURNING *`,
      [
        listing.id,
        listing.title,
        listing.vendor,
        listing.category,
        listing.type,
        listing.price_label,
        priceValue,
        listing.currency || 'USD',
        commission,
        code,
        listing.owner_id || null,
        travelerName || null,
        travelerPhone || null,
      ]
    );

    const lead = insertRes.rows[0];

    const rawPhone = listing.vendor_phone || listing.vendor_phone_alt || '254758378729';
    const cleanPhone = String(rawPhone).replace(/[^0-9]/g, '');
    const waMsg = encodeURIComponent(
      `Hello, I found your listing "${listing.title}" on EA SafariRoutes/OSARE and I would like to book. (Ref: ${code})`
    );
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${waMsg}`;

    return NextResponse.json({ success: true, whatsappUrl, lead: mapLead(lead) });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
