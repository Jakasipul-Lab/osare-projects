import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import pg from 'pg'

const { Pool } = pg

const STATIC_DATABASE = [
  { category: 'Safari Package', title: 'Masai Mara 3-Day Migration Safari', vendor: 'Mara Safari Lodges Ltd', location: 'Masai Mara National Reserve', description: 'Experience the Big Five and the Great Migration. Includes game drives and luxury tented stay.', priceLabel: '$350', priceValue: 350, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80', keywords: ['mara', 'safari', 'migration', 'masai'] },
  { category: 'Safari Package', title: 'Mount Kilimanjaro Treks - Machame Route', vendor: 'Summit Africa Treks', location: 'Mount Kilimanjaro, Tanzania', description: '7-day climb to Uhuru Peak. Certified guides and full gear included.', priceLabel: '$1,450', priceValue: 1450, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80', keywords: ['kilimanjaro', 'mountain', 'climb', 'trek', 'kili'] },
  { category: 'Hotel & Resort', title: 'Serena Hotel & Resort - Luxury Beach Stay', vendor: 'Serena Hotels', location: 'Diani Beach, Mombasa', description: '5-star beach resort with private reef access and spa.', priceLabel: '$180/night', priceValue: 180, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80', keywords: ['serena', 'hotel', 'resort', 'beach', 'mombasa'] },
  { category: 'Hotel & Resort', title: 'Safari Park Hotel - City Resort', vendor: 'Safari Park', location: 'Thika Road, Nairobi', description: 'Lush gardens, cultural dinner shows, and premium city stay.', priceLabel: '$150/night', priceValue: 150, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?q=80', keywords: ['hotel', 'resort', 'safari park', 'nairobi'] },
  { category: 'Hotel & Resort', title: 'Mara Hotel & Resort', vendor: 'Mara Leisure', location: 'Masai Mara', description: 'Luxury lodge inside the reserve.', priceLabel: '$200/night', priceValue: 200, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80', keywords: ['hotel', 'mara', 'resort', 'masai'] },
  { category: 'Car & Caravan Hire', title: '4x4 Land Cruiser - Mara & Kilimanjaro', vendor: 'African Spice Car Hire', location: 'Nairobi / JKIA', description: 'Safari-ready vehicle with pop-up roof for viewing.', priceLabel: '$120/day', priceValue: 120, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?q=80', keywords: ['car', 'hire', 'rental', '4x4', 'jeep'] },
  { category: 'Train (SGR)', title: 'SGR Train - Nairobi to Mombasa', vendor: 'Madaraka Express', location: 'Nairobi ↔ Mombasa', description: 'Fast train service between capital and coast.', priceLabel: 'KES 1,500', priceValue: 1500, currency: 'KES', type: 'local', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80', keywords: ['sgr', 'train', 'nairobi', 'mombasa'] },
  { category: 'Matatu / Shuttle', title: 'Nairobi CBD Express', vendor: 'Kenya Sacco', location: 'Nairobi CBD', description: 'Frequent commuter shuttle across estates.', priceLabel: 'KES 100', priceValue: 100, currency: 'KES', type: 'local', image: 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?q=80', keywords: ['bus', 'matatu', 'nairobi', 'cbd'] },
  { category: 'Matatu / Shuttle', title: 'Mombasa City Shuttle', vendor: 'Coast Sacco', location: 'Mombasa CBD', description: 'Local transit within Mombasa.', priceLabel: 'KES 50', priceValue: 50, currency: 'KES', type: 'local', image: 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?q=80', keywords: ['bus', 'matatu', 'mombasa'] },
];

let pool
function getPool() {
  if (!pool) {
    const cs = (process.env.DATABASE_URL || process.env.NEON_DB_URL || '').replace(/&?channel_binding=require/gi, '')
    if (cs) { pool = new Pool({ connectionString: cs, ssl: { rejectUnauthorized: false }, max: 2, idleTimeoutMillis: 10000 }) }
  }
  return pool
}

function matchesQuery(item, query) {
  if (!query) return true
  const s = query.toLowerCase().trim()
  const words = s.split(/[\s/]+/)
  const haystack = [item.title, item.vendor, item.location, item.category, item.description, ...(item.keywords || [])].join(' ').toLowerCase()
  return words.every(w => haystack.includes(w))
}

const WHATSAPP_PHONE = '254758378729'

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const url = new URL(request.url)

  try {
    const p = getPool()
    if (p && route === '/listings') {
      try {
        const type = url.searchParams.get('type')
        const search = url.searchParams.get('q')
        const rows = (await p.query(`SELECT * FROM listings ORDER BY created_at DESC`)).rows
        let items = rows.map(r => ({ ...r, priceValue: Number(r.price_value), includes: r.includes || [], keywords: r.keywords || [] }))
        if (type && type !== 'All') items = items.filter(it => it.type === type)
        if (search) items = items.filter(it => matchesQuery(it, search))
        if (items.length === 0) {
           items = STATIC_DATABASE.filter(it => (!type || type === 'All' || it.type === type) && (!search || matchesQuery(it, search)))
        }
        return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
      } catch (e) { console.error(e) }
    }

    if (route === '/listings') {
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')
      let items = STATIC_DATABASE.filter(it => (!type || type === 'All' || it.type === type) && (!search || matchesQuery(it, search)))
      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/leads') {
      const body = await request.json()
      const msg = `Hello OSARE, I want to book: ${body.listingTitle} with ${body.vendor}.`
      return NextResponse.json({ whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}` }, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    return NextResponse.json({ message: 'OSARE API Ready' }, { headers: { 'Access-Control-Allow-Origin': '*' } })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 })
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const OPTIONS = async () => NextResponse.json({}, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' } })
