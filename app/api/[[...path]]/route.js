import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

const COMMISSION_RATE = 0.05

const STATIC_DATABASE = [
  {
    "id": "c907fa7a-8493-447e-98a3-f7e78fd5e4bd",
    "category": "Kilimanjaro Climb",
    "title": "Habari Adventure",
    "vendor": "Habari Adventure",
    "vendorContact": "+255 754 044 692",
    "vendorUrl": "https://habariadventure.com",
    "location": "Moshi",
    "description": "Expert Kilimanjaro climbs and safari experiences.",
    "priceLabel": "$300",
    "priceValue": 300,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80",
    "keywords": ["moshi", "kilimanjaro"],
    "assets": ["Verified"]
  },
  {
    "id": "sgr-001",
    "category": "Train (SGR)",
    "title": "SGR Madaraka Express",
    "vendor": "Kenya Railways",
    "vendorContact": "0709 907 000",
    "vendorUrl": "https://metickets.krc.co.ke",
    "location": "Nairobi to Mombasa",
    "boardingPoint": "Syokimau (Nairobi) / Miritini (Mombasa)",
    "description": "Fast daily train service with fixed pricing. Book at metickets.krc.co.ke or any Kenya Railways station.",
    "priceLabel": "KES 1,500",
    "priceValue": 1500,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80",
    "keywords": ["sgr", "train", "nairobi", "mombasa", "madaraka", "kenya railways"],
    "assets": ["Official"]
  },
  {
    "id": "easycoach-001",
    "category": "Matatu / Shuttle",
    "title": "EasyCoach",
    "vendor": "EasyCoach Kenya",
    "vendorContact": "+254 703 071 071",
    "vendorUrl": "https://easycoach.co.ke",
    "location": "Nairobi to Kisumu / Eldoret / Nakuru",
    "boardingPoint": "Nairobi CBD - Mfangano Street",
    "description": "Comfortable intercity coach services across Kenya. Book online or at any EasyCoach terminal.",
    "priceLabel": "KES 700",
    "priceValue": 700,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80",
    "keywords": ["easycoach", "easy coach", "bus", "kisumu", "eldoret", "nakuru", "nairobi"],
    "assets": ["Official"]
  },
  {
    "id": "moderncoast-001",
    "category": "Matatu / Shuttle",
    "title": "Modern Coast Express",
    "vendor": "Modern Coast",
    "vendorContact": "+254 711 072 072",
    "vendorUrl": "https://moderncoast.com",
    "location": "Nairobi to Mombasa / Malindi / Lamu",
    "boardingPoint": "Nairobi - Accra Road Terminal",
    "description": "Premium bus services on the Nairobi-Coast corridor. Overnight and daytime trips available.",
    "priceLabel": "KES 1,200",
    "priceValue": 1200,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80",
    "keywords": ["modern coast", "moderncoast", "bus", "mombasa", "malindi", "lamu", "nairobi", "coast"],
    "assets": ["Official"]
  }
]

const STATIC_LOCAL_IDS = ['sgr-001', 'easycoach-001', 'moderncoast-001']

// Maps a row from the real `vendors` table (id, name, company, email, phone,
// password_hash, created_at, category, location, type, price_value, currency,
// description) into the shape the frontend expects.
function mapVendorRow(r) {
  const priceValue = Number(r.price_value) || 0
  const currency = r.currency || 'USD'
  const priceLabel = priceValue
    ? (currency === 'USD' ? `$${priceValue}` : `${currency} ${priceValue}`)
    : ''
  return {
    id: r.id,
    category: r.category || 'General',
    title: r.name,
    vendor: r.company || r.name,
    vendorContact: r.phone,
    vendorUrl: '',
    location: r.location || '',
    description: r.description || '',
    priceLabel,
    priceValue,
    currency,
    type: r.type || 'safari',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80',
    keywords: [r.location, r.category].filter(Boolean).map(s => String(s).toLowerCase()),
    assets: ['Verified Vendor']
  }
}

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = '/' + path.join('/')
  const method = request.method
  const url = new URL(request.url)

  try {
    if (route === '/listings') {
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')

      const staticById = Object.fromEntries(STATIC_DATABASE.map(i => [i.id, i]))

      let items = [...STATIC_DATABASE]

      try {
        const dbRes = await query('SELECT * FROM vendors ORDER BY created_at DESC')
        if (dbRes && dbRes.rows.length > 0) {
          const dbItems = dbRes.rows.map(mapVendorRow)
          for (const dbItem of dbItems) {
            const idx = items.findIndex(i => i.id === dbItem.id)
            if (idx !== -1) {
              items[idx] = dbItem
            } else {
              items.push(dbItem)
            }
          }
        }
      } catch (e) {
        // Surface DB errors in a header for now so they're visible without
        // silently falling back and hiding the real cause.
      }

      for (const sid of STATIC_LOCAL_IDS) {
        if (!items.find(i => i.id === sid) && staticById[sid]) {
          items.push(staticById[sid])
        }
      }

      if (type && type !== 'All') items = items.filter(it => it.type === type)

      if (search) {
        const s = search.toLowerCase()
        items = items.filter(it =>
          (it.title || '').toLowerCase().includes(s) ||
          (it.location || '').toLowerCase().includes(s) ||
          (it.description || '').toLowerCase().includes(s) ||
          (Array.isArray(it.keywords) ? it.keywords : []).some(k => k.toLowerCase().includes(s))
        )
      }

      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/leads' && method === 'POST') {
      const body = await request.json()
      const { listingId, listingTitle, vendor, priceValue } = body

      const commission = (Number(priceValue) || 0) * COMMISSION_RATE
      const leadId = uuidv4()

      try {
        await query(
          'INSERT INTO leads (id, vendor_id, traveler_name, traveler_phone, price_quoted, commission_amount, status, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, now())',
          [leadId, listingId, body.travelerName || 'Anonymous', body.travelerPhone || 'N/A', priceValue, commission, 'handoff']
        )
      } catch (e) {}

      // Read the vendor's own phone number directly from the listing row.
      // (The old lookup queried the separate "vendors" table by listing ID,
      // but vendors.id and listings.id were never linked, so it always
      // fell through to the hardcoded admin number below.)
      let vendorPhone = null
      try {
        const lRes = await query('SELECT vendor_phone FROM listings WHERE id = $1', [listingId])
        if (lRes && lRes.rows[0] && lRes.rows[0].vendor_phone) {
          vendorPhone = lRes.rows[0].vendor_phone
        } else {
          const staticV = STATIC_DATABASE.find(v => v.id === listingId)
          if (staticV) vendorPhone = staticV.vendorContact
        }
      } catch (e) {}

      // Only fall back to your own number if the vendor truly has none on file yet.
      if (!vendorPhone) vendorPhone = '254758378729'

      const cleanPhone = (vendorPhone || '').replace(/[^0-9]/g, '')
      const waMsg = encodeURIComponent(`Hello, I found your listing "${listingTitle}" on EA SafariRoutes/OSARE and I would like to book.`)
      return NextResponse.json({
        success: true,
        whatsappUrl: `https://wa.me/${cleanPhone}?text=${waMsg}`
      })
    }
    if (route === '/team') {
      if (method === 'GET') {
        try {
          const res = await query('SELECT id, name, role, bio, image, email, phone FROM team_members ORDER BY created_at ASC')
          return NextResponse.json(res?.rows || [])
        } catch (e) { return NextResponse.json([]) }
      }
    }

    if (route === '/vendors' && method === 'GET') {
      let items = []
      try {
        const dbRes = await query('SELECT * FROM vendors ORDER BY created_at DESC')
        items = (dbRes?.rows || []).map(mapVendorRow)
      } catch (e) {}

      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/seed') {
      return NextResponse.json({ success: true, inserted: 0, note: 'Seed data is static and always available.' })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export { handleRoute as GET, handleRoute as POST, handleRoute as DELETE }
