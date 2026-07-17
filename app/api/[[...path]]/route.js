import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import pg from 'pg'

const { Pool } = pg

const COMMISSION_RATE = 0.05

const STATIC_DATABASE = [
  { 
    id: 'mara-001', 
    category: 'Safari Package', 
    title: 'Masai Mara 3-Day Migration Safari', 
    vendor: 'Mara Safari Lodges Ltd', 
    vendorContact: '+254 700 111 222', 
    vendorUrl: 'https://www.masaimara.com/', 
    location: 'Masai Mara National Reserve', 
    description: 'Experience the Big Five and the Great Migration. Includes game drives and luxury tented stay.', 
    priceLabel: '$350', priceValue: 350, currency: 'USD', type: 'safari', 
    image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80', 
    keywords: ['mara', 'safari', 'migration', 'masai'], 
    assets: ['4x4 Land Cruiser', 'Luxury Tents', 'Professional Guides'] 
  }, 
  { 
    id: 'kili-001', 
    category: 'Kilimanjaro Climb', 
    title: 'Mount Kilimanjaro Treks - Machame Route', 
    vendor: 'Summit Africa Treks', 
    vendorContact: '+255 700 333 444', 
    vendorUrl: 'https://www.mountkilimanjaroguide.com/', 
    location: 'Mount Kilimanjaro, Tanzania', 
    description: '7-day climb to Uhuru Peak. Certified guides and full gear included.', 
    priceLabel: '$1,450', priceValue: 1450, currency: 'USD', type: 'safari', 
    image: 'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80', 
    keywords: ['kilimanjaro', 'mountain', 'climb', 'trek', 'kili'], 
    assets: ['Camping Gear', 'Oxygen Kits', 'Expert Porters'] 
  }, 
  { 
    id: 'serena-001', 
    category: 'Hotel & Resort', 
    title: 'Serena Hotel & Resort - Luxury Beach Stay', 
    vendor: 'Serena Hotels', 
    vendorContact: '+254 700 555 666', 
    vendorUrl: 'https://www.serenahotels.com/mombasa', 
    location: 'Diani Beach, Mombasa', 
    description: '5-star beach resort with private reef access and spa.', 
    priceLabel: '$180/night', priceValue: 180, currency: 'USD', type: 'safari', 
    image: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80', 
    keywords: ['serena', 'hotel', 'resort', 'beach', 'mombasa'], 
    assets: ['Ocean View Suites', 'Spa & Wellness', 'Private Beach'] 
  }, 
  { 
    id: 'safari-park-001', 
    category: 'Hotel & Resort', 
    title: 'Safari Park Hotel - City Resort', 
    vendor: 'Safari Park', 
    vendorContact: '+254 700 777 888', 
    vendorUrl: 'https://www.safaripark-hotel.com', 
    location: 'Thika Road, Nairobi', 
    description: 'Lush gardens, cultural dinner shows, and premium city stay.', 
    priceLabel: '$150/night', priceValue: 150, currency: 'USD', type: 'safari', 
    image: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?q=80', 
    keywords: ['hotel', 'resort', 'safari park', 'nairobi'], 
    assets: ['Conference Halls', 'Themed Restaurants', 'Large Pool'] 
  }, 
  { 
    id: 'aircraft-001', 
    category: 'Light Aircraft Charter', 
    title: 'Cessna 208 Caravan - Private Safari Charter', 
    vendor: 'Safarilink Aviation', 
    vendorContact: '+254 730 888 000', 
    vendorUrl: 'https://www.flysafarilink.com', 
    location: 'Wilson Airport, Nairobi', 
    description: 'Private charter to Mara, Amboseli, and Samburu. Fast, safe, and exclusive.', 
    priceLabel: '$850/hr', priceValue: 850, currency: 'USD', type: 'safari', 
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80', 
    keywords: ['aircraft', 'charter', 'plane', 'safarilink', 'wilson'], 
    assets: ['Light Aircraft', 'Private Pilot', 'VIP Lounge'] 
  }, 
  { 
    id: 'caravan-001', 
    category: 'Car & Caravan Hire', 
    title: 'Toyota Land Cruiser - 4x4 Safari Edition', 
    vendor: 'African Spice Car Hire', 
    vendorContact: '+254 758 378 729', 
    vendorUrl: 'https://www.africanspice-safaris.com/car-hire/', 
    location: 'Nairobi / JKIA', 
    description: 'Full-time 4WD with pop-up roof and fridge. Ideal for self-drive or guided safaris.', 
    priceLabel: '$150/day', priceValue: 150, currency: 'USD', type: 'safari', 
    image: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?q=80', 
    keywords: ['car', 'hire', 'rental', '4x4', 'jeep', 'caravan'], 
    assets: ['4x4 Vehicle', 'Camping Gear', 'Fridge/Inverter'] 
  }, 
  { 
    id: 'sgr-001', 
    category: 'Train (SGR)', 
    title: 'SGR Train - Nairobi to Mombasa', 
    vendor: 'Madaraka Express', 
    vendorContact: 'info@krc.co.ke', 
    vendorUrl: 'https://metickets.krc.co.ke', 
    location: 'Nairobi to Mombasa', 
    description: 'Fast train service between capital and coast.', 
    priceLabel: 'KES 1,500', priceValue: 1500, currency: 'KES', type: 'local', 
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80', 
    keywords: ['sgr', 'train', 'nairobi', 'mombasa'], 
    assets: ['Economy Coaches', 'First Class Coaches'] 
  } 
]

let pool
function getPool() {
  if (!pool) {
    const cs = (process.env.DATABASE_URL || process.env.NEON_DB_URL || '').replace(/&?channel_binding=require/gi, '')
    if (cs) {
      pool = new Pool({ connectionString: cs, ssl: { rejectUnauthorized: false }, max: 2, idleTimeoutMillis: 10000 })
    }
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

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = '/' + path.join('/')
  const method = request.method
  const url = new URL(request.url)

  try {
    const p = getPool()

    if (route === '/listings') {
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')
      let items = []
      if (p) {
        try {
          const rows = (await p.query('SELECT * FROM listings ORDER BY created_at DESC')).rows
          items = rows.map(r => ({ 
            ...r, 
            priceValue: Number(r.price_value), 
            includes: r.includes || [], 
            keywords: r.keywords || [],
            vendorUrl: r.vendor_url, 
            vendorContact: r.vendor_contact, 
            assets: r.assets || [] 
          }))
        } catch (e) {}
      }
      if (items.length === 0) items = STATIC_DATABASE
      if (type && type !== 'All') items = items.filter(it => it.type === type)
      if (search) items = items.filter(it => matchesQuery(it, search))
      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/leads' && method === 'POST') {
      const body = await request.json()
      const listingId = body.listingId
      
      let target = STATIC_DATABASE.find(it => it.id === listingId)
      if (!target && p) {
        try {
          const dbRes = await p.query('SELECT * FROM listings WHERE id = $1', [listingId])
          if (dbRes.rows[0]) {
            target = dbRes.rows[0]
            target.vendorContact = target.vendor_contact
          }
        } catch (e) {}
      }

      if (p) {
        try {
          await p.query(
            'INSERT INTO leads (id, listing_id, listing_title, vendor, commission_rate, created_at) VALUES ($1, $2, $3, $4, $5, now())',
            [uuidv4(), body.listingId, body.listingTitle || 'Click', body.vendor || 'Unknown', COMMISSION_RATE]
          )
        } catch (e) {}
      }

      // Generate WhatsApp URL for Vendor
      const vendorPhone = (target?.vendorContact || '254758378729').replace(/[^0-9]/g, '')
      const waMsg = encodeURIComponent(`Hello, I found your listing "${body.listingTitle}" on EA SafariRoutes/OSARE and I would like to inquire about booking.`);
      const whatsappUrl = `https://wa.me/${vendorPhone}?text=${waMsg}`

      return NextResponse.json({ success: true, whatsappUrl })
    }

    if (route === '/stats') {
      let stats = { totalListings: STATIC_DATABASE.length, totalLeads: 0, estRevenueUSD: 0, safariCount: STATIC_DATABASE.filter(i=>i.type==='safari').length, localCount: STATIC_DATABASE.filter(i=>i.type==='local').length }
      if (p) {
        try {
          const lRes = await p.query('SELECT count(*) as count FROM leads')
          stats.totalLeads = parseInt(lRes.rows[0].count)
          stats.estRevenueUSD = (stats.totalLeads * 10).toFixed(2)
        } catch (e) {}
      }
      return NextResponse.json(stats)
    }

    if (route === '/') {
      return NextResponse.json({ message: 'OSARE API Active', version: '2.1' })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 } )
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const OPTIONS = async () => NextResponse.json({}, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' } })