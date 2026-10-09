import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

function clean(value) {
  return String(value || '').trim().slice(0, 60);
}

function likePattern(term) {
  return `%${term.replace(/[\\%_]/g, '\\$&')}%`;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const terms = [
      clean(searchParams.get('from')),
      clean(searchParams.get('to')),
      clean(searchParams.get('q')),
    ].filter(Boolean);

    const haystack =
      "(operator || ' ' || from_city || ' ' || to_city || ' ' || COALESCE(departure_info, ''))";
    const params = [];
    const conditions = ['published = true'];
    for (const term of terms) {
      params.push(likePattern(term));
      conditions.push(`${haystack} ILIKE $${params.length}`);
    }

    const result = await query(
      `SELECT id, operator, from_city, to_city, boarding_point, landmark, departure_info,
              fare_label, whatsapp, website, booking_method, confirmed
       FROM local_routes
       WHERE ${conditions.join(' AND ')}
       ORDER BY confirmed DESC, operator ASC
       LIMIT 100`,
      params
    );

    const routes = result.rows.map((row) => ({
      id: row.id,
      operator: row.operator,
      from: row.from_city,
      to: row.to_city,
      boardingPoint: row.boarding_point,
      landmark: row.landmark,
      departureInfo: row.departure_info,
      fareLabel: row.fare_label,
      whatsapp: row.whatsapp,
      website: row.website,
      bookingMethod: row.booking_method,
      confirmed: row.confirmed,
    }));

    return NextResponse.json(routes);
  } catch (error) {
    return NextResponse.json({ error: 'Could not load routes' }, { status: 500 });
  }
}
