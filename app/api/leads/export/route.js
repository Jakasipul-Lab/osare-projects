import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { isAdminRequest } from '@/lib/auth';

// Free text could start with = + - @ and be run as a formula by Excel, so it is neutralised.
function textCell(value) {
  if (value === null || value === undefined) return '';
  let s = String(value).replace(/\r?\n/g, ' ');
  if (/^[=+\-@\t]/.test(s)) s = "'" + s;
  return '"' + s.replace(/"/g, '""') + '"';
}

// Keeps the leading + so Excel does not turn the number into 2.5E+11.
function phoneCell(value) {
  if (!value) return '';
  const s = String(value).replace(/[^0-9+]/g, '');
  return '"=""' + s + '"""';
}

function dayOf(value) {
  try {
    return new Date(value).toISOString().slice(0, 10);
  } catch (e) {
    return '';
  }
}

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Admin login required' }, { status: 401 });
  }
  try {
    const result = await query('SELECT * FROM leads ORDER BY created_at ASC');
    const header = [
      'Ref', 'Enquiry date', 'Listing', 'Partner', 'Category', 'Traveler name',
      'Traveler phone', 'Currency', 'Listed price', 'System commission', 'System status', 'Channel',
    ];
    const lines = [header.join(',')];
    for (const r of result.rows) {
      const price = r.price_value !== null && r.price_value !== undefined ? Number(r.price_value) : '';
      const commission = r.commission !== null && r.commission !== undefined ? Number(r.commission) : '';
      lines.push([
        textCell(r.code),
        dayOf(r.created_at),
        textCell(r.listing_title),
        textCell(r.vendor),
        textCell(r.category),
        textCell(r.traveler_name),
        phoneCell(r.traveler_phone),
        textCell(r.currency),
        price,
        commission,
        textCell(r.commission_status),
        textCell(r.channel),
      ].join(','));
    }
    const today = new Date().toISOString().slice(0, 10);
    return new NextResponse('\uFEFF' + lines.join('\r\n'), {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="osare-leads-${today}.csv"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
