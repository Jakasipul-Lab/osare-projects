// app/api/listings/route.js
import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { requireAdmin, requireVendor } from "@/lib/auth";

const SELECT_FIELDS = `
  id, owner_id, type, category, title, vendor, vendor_office, location,
  map_link, description, includes, price_value, currency, price_label,
  off_peak_value, off_peak_label, season, image, keywords, commission_rate
`;

function toCamel(r) {
  return {
    id: r.id,
    ownerId: r.owner_id,
    type: r.type,
    category: r.category,
    title: r.title,
    vendor: r.vendor,
    vendorOffice: r.vendor_office,
    location: r.location,
    mapLink: r.map_link,
    description: r.description,
    includes: r.includes,
    priceValue: r.price_value,
    currency: r.currency,
    priceLabel: r.price_label,
    offPeakValue: r.off_peak_value,
    offPeakLabel: r.off_peak_label,
    season: r.season,
    image: r.image,
    keywords: r.keywords,
    commissionRate: r.commission_rate,
  };
}

// GET /api/listings?type=All&q=searchterm — public
export async function GET(request) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  const search = url.searchParams.get("q");

  try {
    let sql = `SELECT ${SELECT_FIELDS} FROM listings`;
    const params = [];
    const conditions = [];

    if (type && type !== "All") {
      params.push(type);
      conditions.push(`type = $${params.length}`);
    }
    if (search) {
      params.push(`%${search.toLowerCase()}%`);
      const idx = params.length;
      conditions.push(
        `(LOWER(title) LIKE $${idx} OR LOWER(location) LIKE $${idx} OR LOWER(description) LIKE $${idx})`
      );
    }
    if (conditions.length > 0) sql += ` WHERE ${conditions.join(" AND ")}`;
    sql += ` ORDER BY id ASC`;

    const result = await query(sql, params);
    const rows = result.rows ?? result;

    return NextResponse.json(rows.map(toCamel), {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST /api/listings — admin only for now
export async function POST(request) {
  const auth = await requireVendor(request);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }
  if (auth.role !== "admin") {
    return NextResponse.json({ error: "Vendors cannot add listings yet" }, { status: 403 });
  }

  const body = await request.json();
  const {
    type, category, title, vendor, vendorOffice, location, mapLink,
    description, includes, priceValue, currency, priceLabel,
    offPeakValue, offPeakLabel, season, image, keywords, commissionRate,
  } = body;

  if (!title || title.length < 3) {
    return NextResponse.json({ error: "Title too short" }, { status: 400 });
  }
  if (!vendor || vendor.length < 2) {
    return NextResponse.json({ error: "Vendor name required" }, { status: 400 });
  }

  try {
    const result = await query(
      `INSERT INTO listings
        (type, category, title, vendor, vendor_office, location, map_link,
         description, includes, price_value, currency, price_label,
         off_peak_value, off_peak_label, season, image, keywords, commission_rate)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)
       RETURNING ${SELECT_FIELDS}`,
      [type, category, title, vendor, vendorOffice, location, mapLink,
       description, includes, priceValue, currency, priceLabel,
       offPeakValue, offPeakLabel, season, image, keywords, commissionRate]
    );
    const rows = result.rows ?? result;
    return NextResponse.json(toCamel(rows[0]), { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE /api/listings?id=123 — admin only
export async function DELETE(request) {
  const auth = await requireAdmin(request);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  try {
    await query("DELETE FROM listings WHERE id = $1", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
