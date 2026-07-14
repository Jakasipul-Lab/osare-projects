import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import crypto from 'crypto'
import pg from 'pg'

const { Pool } = pg

// ---------------------------------------------------------------------------
// PostgreSQL (NEON) connection (singleton) + schema init
// ---------------------------------------------------------------------------
let pool
let initPromise

function getPool() {
  if (!pool) {
    // node-postgres does not support SCRAM channel binding; strip it.
    const cs = (process.env.DATABASE_URL || '').replace(/&?channel_binding=require/gi, '')
    pool = new Pool({
      connectionString: cs,
      ssl: { rejectUnauthorized: false },
      max: 5,
      idleTimeoutMillis: 30000,
    })
  }
  return pool
}

async function initDb() {
  const p = getPool()
  await p.query(`
    CREATE TABLE IF NOT EXISTS listings (
      id UUID PRIMARY KEY,
      owner_id UUID,
      type TEXT,
      category TEXT,
      title TEXT,
      vendor TEXT,
      vendor_office TEXT,
      location TEXT,
      map_link TEXT,
      description TEXT,
      includes JSONB DEFAULT '[]'::jsonb,
      price_value NUMERIC DEFAULT 0,
      currency TEXT DEFAULT 'USD',
      price_label TEXT,
      off_peak_value NUMERIC DEFAULT 0,
      off_peak_label TEXT,
      season TEXT,
      image TEXT,
      keywords JSONB DEFAULT '[]'::jsonb,
      commission_rate INTEGER DEFAULT 5,
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
  await p.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY,
      listing_id UUID,
      listing_title TEXT,
      vendor TEXT,
      category TEXT,
      type TEXT,
      price_label TEXT,
      price_value NUMERIC DEFAULT 0,
      currency TEXT DEFAULT 'USD',
      commission NUMERIC DEFAULT 0,
      channel TEXT DEFAULT 'whatsapp',
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
  await p.query(`
    CREATE TABLE IF NOT EXISTS vendors (
      id UUID PRIMARY KEY,
      name TEXT,
      company TEXT,
      email TEXT UNIQUE,
      phone TEXT,
      password_hash TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
  await p.query(`
    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      vendor_id UUID,
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
}

async function ensureDb() {
  if (!initPromise) initPromise = initDb()
  await initPromise
}

async function q(text, params) {
  const p = getPool()
  return p.query(text, params)
}

// Business config
const WHATSAPP_PHONE = '254758378729'
const COMMISSION_RATE = 0.05 // 5% charged to vendors

// ---------------------------------------------------------------------------
// Row mappers
// ---------------------------------------------------------------------------
function rowToListing(r) {
  if (!r) return null
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
    includes: r.includes || [],
    priceValue: r.price_value != null ? Number(r.price_value) : 0,
    currency: r.currency,
    priceLabel: r.price_label,
    offPeakValue: r.off_peak_value != null ? Number(r.off_peak_value) : 0,
    offPeakLabel: r.off_peak_label,
    season: r.season,
    image: r.image,
    keywords: r.keywords || [],
    commissionRate: r.commission_rate,
    createdAt: r.created_at,
  }
}

function rowToLead(r) {
  if (!r) return null
  return {
    id: r.id,
    listingId: r.listing_id,
    listingTitle: r.listing_title,
    vendor: r.vendor,
    category: r.category,
    type: r.type,
    priceLabel: r.price_label,
    priceValue: r.price_value != null ? Number(r.price_value) : 0,
    currency: r.currency,
    commission: r.commission != null ? Number(r.commission) : 0,
    channel: r.channel,
    createdAt: r.created_at,
  }
}

function cleanVendor(r) {
  if (!r) return null
  return { id: r.id, name: r.name, company: r.company, email: r.email, phone: r.phone, createdAt: r.created_at }
}

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex')
  return `${salt}:${hash}`
}

function verifyPassword(password, stored) {
  if (!stored || !stored.includes(':')) return false
  const [salt, hash] = stored.split(':')
  const test = crypto.scryptSync(String(password), salt, 64).toString('hex')
  const a = Buffer.from(hash, 'hex')
  const b = Buffer.from(test, 'hex')
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

async function getVendorFromRequest(request) {
  const auth = request.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null
  if (!token) return null
  const s = await q('SELECT vendor_id FROM sessions WHERE token = $1', [token])
  if (!s.rows.length) return null
  const v = await q('SELECT * FROM vendors WHERE id = $1', [s.rows[0].vendor_id])
  return v.rows[0] || null
}

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// ---------------------------------------------------------------------------
// Seed Data
// ---------------------------------------------------------------------------
function seedListings() {
  const now = new Date()
  const safari = [
    { category: 'Safari Package', title: 'Masai Mara 3-Day Migration Safari', vendor: 'Mara Safari Lodges Ltd', vendorOffice: 'Utalii House, Nairobi CBD', location: 'Masai Mara National Reserve, Narok County', mapLink: 'https://maps.google.com/?q=Masai+Mara+National+Reserve', description: 'Experience the Big Five and the Great Migration. Includes game drives, park fees, transport from Nairobi and 2 nights at a tented camp with all meals.', includes: ['Park fees', 'Transport from Nairobi', '2 Nights Tented Camp', 'All Meals', 'Professional Guide'], priceValue: 350, currency: 'USD', priceLabel: '$350', offPeakValue: 280, offPeakLabel: '$280', season: 'Low season: Apr-Jun', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80', keywords: ['mara', 'safari', 'kenya', 'wildlife', 'tour', 'trip', 'holiday', 'migration', 'big five'] },
    { category: 'Safari Package', title: 'Mount Kilimanjaro Treks - 7 Days', vendor: 'Summit Africa Treks', vendorOffice: 'Moshi, Kilimanjaro Region', location: 'Mount Kilimanjaro, Tanzania', mapLink: 'https://maps.google.com/?q=Mount+Kilimanjaro', description: 'Reach Uhuru Peak (5,895m) via the scenic Machame route.', includes: ['Certified Guides & Porters', 'Camping Gear', 'Park & Rescue Fees', 'All Mountain Meals'], priceValue: 1450, currency: 'USD', priceLabel: '$1,450', offPeakValue: 1200, offPeakLabel: '$1,200', season: 'Low season: Apr-May', image: 'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80', keywords: ['kilimanjaro', 'mountain', 'climb', 'trek', 'hiking', 'peak', 'uhuru', 'tanzania'] },
    { category: 'Hotel & Resort', title: 'Serena Hotel & Resort - Beach Stay', vendor: 'Serena Hotels', vendorOffice: 'Mombasa Coast', location: 'Diani Beach, Kenya', mapLink: 'https://maps.google.com/?q=Serena+Hotel+Mombasa', description: 'Luxury beach stay with 5-star amenities.', includes: ['Breakfast', 'Pool Access', 'Private Beach'], priceValue: 180, currency: 'USD', priceLabel: '$180/night', image: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80', keywords: ['hotel', 'resort', 'serena', 'beach', 'mombasa', 'luxury'] },
    { category: 'Hotel & Resort', title: 'Safari Park Hotel - City Resort', vendor: 'Safari Park', vendorOffice: 'Thika Road, Nairobi', location: 'Nairobi, Kenya', mapLink: 'https://maps.google.com/?q=Safari+Park+Hotel', description: 'Famous city resort with lush gardens and cultural shows.', includes: ['Buffet Breakfast', 'Spa Access', 'City Tour'], priceValue: 150, currency: 'USD', priceLabel: '$150/night', image: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?q=80', keywords: ['hotel', 'resort', 'safari park', 'nairobi', 'city'] },
    { category: 'Car & Caravan Hire', title: '4x4 Land Cruiser - Kilimanjaro Transfer', vendor: 'African Spice Car Hire', vendorOffice: 'Nairobi CBD', location: 'Nairobi to Kilimanjaro', mapLink: 'https://maps.google.com/?q=Nairobi', description: 'Professional transfer from Nairobi to Kilimanjaro base.', includes: ['Driver', 'Fuel', 'Insurance'], priceValue: 250, currency: 'USD', priceLabel: '$250', image: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?q=80', keywords: ['car', 'hire', 'kilimanjaro', 'transfer', '4x4'] },
  ]
  const local = [
    { category: 'Train (SGR)', title: 'SGR Train - Nairobi to Mombasa', vendor: 'Madaraka Express', vendorOffice: 'Syokimau', location: 'Nairobi ↔ Mombasa', mapLink: 'https://maps.google.com/?q=Syokimau', description: 'Fast train service.', includes: ['Economy Seat', 'On-time'], priceValue: 1500, currency: 'KES', priceLabel: 'KES 1,500', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80', keywords: ['sgr', 'train', 'nairobi', 'mombasa'] },
    { category: 'Matatu / Shuttle', title: 'Nairobi to Kisumu Express', vendor: 'Easy Coach', vendorOffice: 'Nairobi', location: 'Nairobi to Kisumu', description: 'Reliable bus service.', includes: ['Standard Seat'], priceValue: 1600, currency: 'KES', priceLabel: 'KES 1,600', image: 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?q=80', keywords: ['bus', 'kisumu', 'nairobi'] },
  ]
  const all = [
    ...safari.map(s => ({ ...s, type: 'safari' })),
    ...local.map(l => ({ ...l, type: 'local' })),
  ]
  return all.map(item => ({ id: uuidv4(), ownerId: null, ...item, commissionRate: 5, createdAt: now }))
}

async function insertListingRow(d) {
  await q(
    `INSERT INTO listings 
      (id, owner_id, type, category, title, vendor, vendor_office, location, map_link, description, includes, price_value, currency, price_label, off_peak_value, off_peak_label, season, image, keywords, commission_rate, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb, $12, $13, $14, $15, $16, $17, $18, $19::jsonb, $20, $21)`,
    [d.id, d.ownerId, d.type, d.category, d.title, d.vendor, d.vendorOffice || '', d.location || '', d.mapLink || '', d.description || '', JSON.stringify(d.includes), d.priceValue || 0, d.currency || 'USD', d.priceLabel || '', d.offPeakValue || 0, d.offPeakLabel || '', d.season || '', d.image || '', JSON.stringify(d.keywords), d.commissionRate || 5, d.createdAt]
  )
}

function matchesQuery(item, query) {
  if (!query) return true
  const s = query.toLowerCase().trim()
  const words = s.split(/\s+/)
  const haystack = [item.title, item.vendor, item.location, item.category, item.description, ...(item.keywords || [])].join(' ').toLowerCase()
  return words.every(w => haystack.includes(w))
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const method = request.method
  const url = new URL(request.url)

  try {
    await ensureDb()

    if (route === '/' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'OSARE API Active', whatsapp: WHATSAPP_PHONE }))
    }

    if (route === '/seed' && method === 'POST') {
      await q('DELETE FROM listings')
      const docs = seedListings()
      for (const d of docs) await insertListingRow(d)
      return handleCORS(NextResponse.json({ inserted: docs.length }))
    }

    if (route === '/listings' && method === 'GET') {
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')
      const clauses = []
      const args = []
      if (type) { args.push(type); clauses.push(`type = $${args.length}`) }
      const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : ''
      const rows = (await q(`SELECT * FROM listings ${where} ORDER BY created_at DESC`, args)).rows
      let items = rows.map(rowToListing)
      if (search) items = items.filter(it => matchesQuery(it, search))
      return handleCORS(NextResponse.json(items))
    }

    if (route === '/leads' && method === 'POST') {
      const body = await request.json()
      const id = uuidv4()
      await q(
        `INSERT INTO leads (id, listing_id, listing_title, vendor, category, type, price_label, price_value, currency, commission, channel, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'whatsapp', now())`,
        [id, body.listingId, body.listingTitle, body.vendor, body.category, body.type, body.priceLabel, body.priceValue, body.currency, (body.priceValue || 0) * COMMISSION_RATE]
      )
      const msg = `Hello OSARE, I want to book: ${body.listingTitle} with ${body.vendor}. [Ref: ${id.slice(0, 8)}]`
      return handleCORS(NextResponse.json({ whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}` }))
    }

    return handleCORS(NextResponse.json({ error: `Route ${route} not found` }, { status: 404 }))
  } catch (err) {
    return handleCORS(NextResponse.json({ error: 'Internal server error', detail: String(err) }, { status: 500 }))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
