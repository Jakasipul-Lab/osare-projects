import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { isAdminRequest } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// OSARE AI: read-only business numbers. Admin login required. No writes.
export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Admin login required' }, { status: 401 });
  }
  try {
    const [totals, weekly, byVendor, byStatus, listings, recent, leadDates, visits] = await Promise.all([
      query(`SELECT
               COUNT(*)::int AS total,
               COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days')::int AS last7,
               COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days')::int AS last30,
               MAX(created_at) AS last_at
             FROM leads`),
      query(`SELECT date_trunc('week', created_at) AS week, COUNT(*)::int AS n
             FROM leads
             WHERE created_at >= NOW() - INTERVAL '12 weeks'
             GROUP BY 1 ORDER BY 1`),
      query(`SELECT COALESCE(vendor, 'unknown') AS vendor,
                    COUNT(*)::int AS total,
                    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days')::int AS last30
             FROM leads
             GROUP BY 1 ORDER BY total DESC`),
      query(`SELECT COALESCE(commission_status, 'unknown') AS status, COUNT(*)::int AS n
             FROM leads GROUP BY 1 ORDER BY n DESC`),
      query(`SELECT COALESCE(vendor, 'unknown') AS vendor,
                    COUNT(*)::int AS total,
                    COUNT(*) FILTER (WHERE published = true)::int AS published
             FROM listings
             GROUP BY 1 ORDER BY total DESC`),
      query(`SELECT code, listing_title, vendor, traveler_name, commission_status, created_at
             FROM leads ORDER BY created_at DESC LIMIT 10`),
      query(`SELECT created_at, vendor, traveler_name
             FROM leads ORDER BY created_at DESC LIMIT 1000`),
      query(`SELECT to_char(created_at AT TIME ZONE 'Europe/Berlin', 'YYYY-MM-DD') AS day,
                    COALESCE(source, '') AS source,
                    COALESCE(campaign, '') AS campaign,
                    COUNT(*)::int AS n
             FROM page_visits
             WHERE created_at >= NOW() - INTERVAL '90 days'
             GROUP BY 1, 2, 3 ORDER BY 1`).catch(() => ({ rows: [] })),
    ]);

    const t = totals.rows[0] || {};
    const lastAt = t.last_at || null;
    const daysSinceLast = lastAt
      ? Math.floor((Date.now() - new Date(lastAt).getTime()) / 86400000)
      : null;

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      leads: {
        total: t.total || 0,
        last7: t.last7 || 0,
        last30: t.last30 || 0,
        lastAt,
        daysSinceLast,
      },
      weekly: weekly.rows,
      byVendor: byVendor.rows,
      byStatus: byStatus.rows,
      listings: listings.rows,
      recent: recent.rows,
      leadDates: leadDates.rows,
      visits: visits.rows,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
