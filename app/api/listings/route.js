import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { mapVendorRow } from '@/lib/vendorData';
import { verifyAuth } from '@/lib/auth';

const FREE_LISTING_LIMIT = 2;

function toJsonbArray(value) {
  if (!value) return null;
  if (Array.isArray(value)) return JSON.stringify(value);
  const arr = String(value).split(',').map((s) => s.trim()).filter(Boolean);
  return arr.length ? JSON.stringify(arr) : null;
}

async function checkWebsite(url) {
  if (!url) return null;
  try {
    const target = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(target, { method: 'GET', signal: controller.signal, redirect: 'follow' });
    clearTimeout(timeout);
    return res.ok ? 'reachable' : 'unreachable';
  } catch (e) {
    return 'unreachable';
  }
}

function buildWordConditions(words, params) {
  return words.map((word) => {
    params.push(`%${word}%`);
    const idx = params.length;
    return `(
      LOWER(title) LIKE $${idx} OR
      LOWER(vendor) LIKE $${idx} OR
      LOWER(location) LIKE $${idx} OR
      LOWER(description) LIKE $${idx} OR
      LOWER(category) LIKE $${idx}
    )`;
  });
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const search = searchParams.get('q');
    const category = searchParams.get('category');

    let baseSql = 'SELECT * FROM listings WHERE 1=1';
    const baseParams = [];
    if (type && type !== 'All') {
      baseParams.push(type);
      baseSql += ` AND type = $${baseParams.length}`;
    }
    if (category && category !== 'All') {
      baseParams.push(category);
      baseSql += ` AND category = $${baseParams.length}`;
    }

    let result;

    if (search) {
      const stopWords = new Set(['to', 'from', 'and', 'the', 'a', 'in', 'at']);
      const searchWords = search
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 1 && !stopWords.has(w));

      if (searchWords.length > 0) {
        // First try: every word must appear (most precise)
        const andParams = [...baseParams];
        const andConditions = buildWordConditions(searchWords, andParams);
        const andSql = `${baseSql} AND (${andConditions.join(' AND ')}) ORDER BY created_at DESC`;
        result = await query(andSql, andParams);

        // Fallback: if that found nothing, match ANY word instead of ALL of them
        if (result.rows.length === 0) {
          const orParams = [...baseParams];
          const orConditions = buildWordConditions(searchWords, orParams);
          const orSql = `${baseSql} AND (${orConditions.join(' OR ')}) ORDER BY created_at DESC`;
          result = await query(orSql, orParams);
        }
      } else {
        // search term was only stopwords/too short — ignore it
        result = await query(`${baseSql} ORDER BY created_at DESC`, baseParams);
      }
    } else {
      result = await query(`${baseSql} ORDER BY created_at DESC`, baseParams);
    }

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

    let ownerId = null;
    let vendorName = body.vendor || null;

    const auth = await verifyAuth(request);
    if (auth && auth.role === 'vendor' && auth.vendor_id) {
      ownerId = auth.vendor_id;
      const vRes = await query('SELECT name, company, is_premium FROM vendors WHERE id = $1', [auth.vendor_id]);
      const v = vRes.rows[0];
      if (!vendorName) vendorName = v?.company || v?.name || null;

      // Enforce free listing limit — admins (no ownerId) are never limited.
      if (!v?.is_premium) {
        const countRes = await query('SELECT COUNT(*) FROM listings WHERE owner_id = $1', [ownerId]);
        const currentCount = Number(countRes.rows[0].count);
        if (currentCount >= FREE_LISTING_LIMIT) {
          return NextResponse.json(
            {
              success: false,
              error: `Free plan allows ${FREE_LISTING_LIMIT} listings. To add more, upgrade to a Partner account — contact OSARE for pricing.`,
              limitReached: true,
            },
            { status: 403 }
          );
        }
      }
    }

    if (!body.title || !vendorName) {
      return NextResponse.json(
        { success: false, error: 'Title and vendor are required' },
        { status: 400 }
      );
    }

    const websiteCheck = await checkWebsite(body.vendorWebsite);

    const sql = `
      INSERT INTO listings (
        type, category, title, vendor, vendor_office, location, map_link,
        description, includes, price_value, currency, price_label,
        off_peak_value, off_peak_label, season, image, keywords,
        is_verified, price_status, owner_id, vendor_website, website_check, created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10, $11, $12,
        $13, $14, $15, $16, $17::jsonb, $18, $19, $20, $21, $22, NOW()
      )
      RETURNING *
    `;
    const params = [
      body.type || 'safari',
      body.category || null,
      body.title,
      vendorName,
      body.vendorOffice || null,
      body.location || null,
      body.mapLink || null,
      body.description || null,
      toJsonbArray(body.includes),
      body.priceValue ? Number(body.priceValue) : null,
      body.currency || 'USD',
      body.priceLabel || null,
      body.offPeakValue ? Number(body.offPeakValue) : null,
      body.offPeakLabel || null,
      body.season || null,
      body.image || null,
      toJsonbArray(body.keywords),
      body.isVerified ?? (ownerId ? false : true),
      body.priceStatus || 'confirmed',
      ownerId,
      body.vendorWebsite || null,
      websiteCheck,
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
