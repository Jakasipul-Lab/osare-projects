import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import crypto from 'crypto'
import pg from 'pg'

const { Pool } = pg

let pool
let initPromise

function getPool() {
  if (!pool) {
    const cs = (process.env.DATABASE_URL || process.env.NEON_DB_URL || '').replace(/&?channel_binding=require/gi, '')
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
  try {
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
    
    const countRes = await p.query('SELECT COUNT(*) FROM listings')
    if (parseInt(countRes.rows[0].count) === 0) {
      const docs = seedListings()
      for (const d of docs) {
        await p.query(
          `INSERT INTO listings 
            (id, owner_id, type, category, title, vendor, vendor_office, location, map_link, description, includes, price_value, currency, price_label, off_peak_value, off_peak_label, season, image, keywords, commission_rate, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb, $12, $13, $14, $15, $16, $17, $18, $19::jsonb, $20, $21)`,
          [d.id, d.ownerId, d.type, d.category, d.title, d.vendor, d.vendorOffice || '', d.location || '', d.mapLink || '', d.description || '', JSON.stringify(d.includes), d.priceValue || 0, d.currency || 'USD', d.priceLabel || '', d.offPeakValue || 0, d.offPeakLabel || '', d.season || '', d.image || '', JSON.stringify(d.keywords), d.commissionRate || 5, d.createdAt]
        )
      }
    }
  } catch (err) {
    console.error('initDb failed:', err)
    throw err
  }
}

async function ensureDb() {
  if (!initPromise) initPromise = initDb()
  await initPromise
}

function seedListings() {
  const now = new Date()
  const safari = [
    { category: 'Safari Package', title: 'Masai Mara 3-Day Migration Safari', vendor: 'Mara Safari Lodges Ltd', location: 'Masai Mara, Narok County', description: 'Experience the Big Five and the Great Migration.', includes: ['Park fees', 'Transport', 'Meals'], priceValue: 350, currency: 'USD', priceLabel: '$350', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80', keywords: ['mara', 'safari', 'migration', 'masai'] },
    { category: 'Kilimanjaro Climb', title: 'Mount Kilimanjaro Treks - Machame Route', vendor: 'Summit Africa Treks', location: 'Mount Kilimanjaro, Tanzania', description: '7-day climb to Uhuru Peak.', includes: ['Guides', 'Camping'], priceValue: 1450, currency: 'USD', priceLabel: '$1,450', image: 'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80', keywords: ['kilimanjaro', 'mountain', 'climb', 'trek'] },
    { category: 'Hotel & Resort', title: 'Serena Hotel & Resort - Luxury Beach Stay', vendor: 'Serena Hotels', location: 'Diani Beach, Kenya', description: 'Premium beach resort.', includes: ['Breakfast', 'Spa'], priceValue: 180, currency: 'USD', priceLabel: '$180/night', image: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80', keywords: ['serena', 'hotel', 'resort', 'beach', 'mombasa'] },
    { category: 'Hotel & Resort', title: 'Safari Park Hotel - City Resort', vendor: 'Safari Park', location: 'Nairobi, Kenya', description: 'City resort with lush gardens.', includes: ['Dinner Show', 'Pool'], priceValue: 150, currency: 'USD', priceLabel: '$150/night', image: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?q=80', keywords: ['hotel', 'resort', 'safari park', 'nairobi'] },
  ]
  const local = [
    { category: 'Train (SGR)', title: 'SGR Train - Nairobi to Mombasa', vendor: 'Madaraka Express', location: 'Nairobi ↔ Mombasa', description: 'Fast train service.', priceValue: 1500, currency: 'KES', priceLabel: 'KES 1,500', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80', keywords: ['sgr', 'train', 'nairobi', 'mombasa'] },
  ]
  const all = [
    ...safari.map(s => ({ ...s, type: 'safari' })),
    ...local.map(l => ({ ...l, type: 'local' })),
  ]
  return all.map(item => ({ id: uuidv4(), ownerId: null, ...item, commissionRate: 5, createdAt: now }))
}

function matchesQuery(item, query) {
  if (!query) return true
  const s = query.toLowerCase().trim()
  const words = s.split(/[\s/]+/)
  const haystack = [item.title, item.vendor, item.location, item.category, item.description, ...(item.keywords || [])].join(' ').toLowerCase()
  return words.every(w => haystack.includes(w))
}

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const method = request.method
  const url = new URL(request.url)

  try {
    await ensureDb()

    if (route === '/' && method === 'GET') {
      return NextResponse.json({ message: 'OSARE API Ready' }, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/listings' && method === 'GET') {
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')
      const clauses = []
      const args = []
      if (type && type !== 'All') { args.push(type); clauses.push(`type = $${args.length}`) }
      const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : ''
      const rows = (await pool.query(`SELECT * FROM listings ${where} ORDER BY created_at DESC`, args)).rows
      let items = rows.map(r => ({
        ...r,
        priceValue: Number(r.price_value),
        includes: r.includes || [],
        keywords: r.keywords || []
      }))
      if (search) items = items.filter(it => matchesQuery(it, search))
      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/seed' && method === 'POST') {
      await pool.query('DELETE FROM listings')
      const docs = seedListings()
      for (const d of docs) {
        await pool.query(
          `INSERT INTO listings 
            (id, owner_id, type, category, title, vendor, vendor_office, location, map_link, description, includes, price_value, currency, price_label, off_peak_value, off_peak_label, season, image, keywords, commission_rate, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::jsonb, $12, $13, $14, $15, $16, $17, $18, $19::jsonb, $20, $21)`,
          [d.id, d.ownerId, d.type, d.category, d.title, d.vendor, d.vendorOffice || '', d.location || '', d.mapLink || '', d.description || '', JSON.stringify(d.includes), d.priceValue || 0, d.currency || 'USD', d.priceLabel || '', d.offPeakValue || 0, d.offPeakLabel || '', d.season || '', d.image || '', JSON.stringify(d.keywords), d.commissionRate || 5, d.createdAt]
        )
      }
      return NextResponse.json({ inserted: docs.length }, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    return NextResponse.json({ error: 'Route not found' }, { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } })
  } catch (err) {
    return NextResponse.json({ error: 'Database Connection Error', detail: String(err) }, { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } })
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
