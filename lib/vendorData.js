import { query } from '@/lib/db'

// Fallback static data used only if the database is unreachable.
// Kept empty by default since real vendor data lives in the `listings` table.
export const STATIC_DATABASE = []
export const STATIC_LOCAL_IDS = new Set()

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

// Maps a raw `listings` table row (snake_case) into the camelCase shape
// used across the app, plus a URL-friendly `slug` for detail pages
// (e.g. /safari/${slug}).
export function mapVendorRow(row) {
  const baseSlug = slugify(`${row.vendor || ''}-${row.title || ''}`) || row.id
  return {
    id: row.id,
    ownerId: row.owner_id,
    type: row.type,
    category: row.category,
    title: row.title,
    vendor: row.vendor,
    vendorOffice: row.vendor_office,
    location: row.location,
    mapLink: row.map_link,
    description: row.description,
    includes: row.includes,
    priceValue: row.price_value,
    currency: row.currency,
    priceLabel: row.price_label,
    offPeakValue: row.off_peak_value,
    offPeakLabel: row.off_peak_label,
    season: row.season,
    image: row.image,
    keywords: row.keywords,
    commissionRate: row.commission_rate,
    isVerified: row.is_verified,
    priceStatus: row.price_status,
    createdAt: row.created_at,
    slug: `${baseSlug}-${String(row.id).slice(0, 8)}`
  }
}

// Fetches every vendor/listing from the database and maps it into the
// camelCase shape (with slug) used by /api/listings, /api/vendors, etc.
// Falls back to the static list above if the query fails.
export async function getAllVendors() {
  try {
    const result = await query('SELECT * FROM listings ORDER BY created_at DESC')
    if (result?.rows?.length) {
      return result.rows.map(mapVendorRow)
    }
    return STATIC_DATABASE
  } catch (e) {
    console.error('getAllVendors error:', e)
    return STATIC_DATABASE
  }
}
