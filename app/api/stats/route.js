import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const [listingsCount, typeCounts, leadsCount, leadsByType, leadsByCategory, revenueByCurrency, recentLeadsRes] =
      await Promise.all([
        query('SELECT COUNT(*) FROM listings'),
        query("SELECT type, COUNT(*) FROM listings GROUP BY type"),
        query('SELECT COUNT(*) FROM leads'),
        query("SELECT type, COUNT(*) FROM leads GROUP BY type"),
        query("SELECT category, COUNT(*) AS value FROM leads GROUP BY category ORDER BY value DESC LIMIT 8"),
        query("SELECT currency, COALESCE(SUM(commission), 0) AS total FROM leads GROUP BY currency"),
        query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 10'),
      ]);

    const typeMap = Object.fromEntries(typeCounts.rows.map((r) => [r.type, Number(r.count)]));
    const leadTypeMap = Object.fromEntries(leadsByType.rows.map((r) => [r.type, Number(r.count)]));
    const revenueMap = Object.fromEntries(
      revenueByCurrency.rows.map((r) => [r.currency, Number(r.total) || 0])
    );

    const stats = {
      totalListings: Number(listingsCount.rows[0].count),
      totalLeads: Number(leadsCount.rows[0].count),
      estRevenueUSD: revenueMap.USD || 0,
      estRevenueKES: revenueMap.KES || 0,
      safariCount: typeMap.safari || 0,
      localCount: typeMap.local || 0,
      leadsByType: {
        safari: leadTypeMap.safari || 0,
        local: leadTypeMap.local || 0,
      },
      leadsByCategory: leadsByCategory.rows.map((r) => ({ name: r.category, value: Number(r.value) })),
      recentLeads: recentLeadsRes.rows.map((row) => ({
        id: row.id,
        listingTitle: row.listing_title,
        vendor: row.vendor,
        priceLabel: row.price_label,
        priceValue: row.price_value !== null ? Number(row.price_value) : null,
        currency: row.currency,
        commission: row.commission !== null ? Number(row.commission) : null,
        code: row.code,
        commissionStatus: row.commission_status,
      })),
    };

    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
