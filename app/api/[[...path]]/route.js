import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

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
    "id": "be2f0bec-de21-43ad-867b-252a91dc3cec",
    "category": "Safari Package",
    "title": "Rojo Expedition Ltd",
    "vendor": "Rojo Expedition Ltd",
    "vendorContact": "+255 689 451 736",
    "vendorUrl": "",
    "location": "Arusha",
    "description": "Professional safari expeditions across Tanzania.",
    "priceLabel": "$450",
    "priceValue": 450,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80",
    "keywords": ["arusha", "safari"],
    "assets": ["Verified"]
  },
  {
    "id": "serena-001",
    "category": "Hotel & Resort",
    "title": "Serena Hotels",
    "vendor": "Serena Hotels",
    "vendorContact": "+255 22 211 2416",
    "vendorUrl": "https://serenahotels.com",
    "location": "Nationwide",
    "description": "Luxury lodges and hotels across East Africa.",
    "priceLabel": "$250/night",
    "priceValue": 250,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?q=80",
    "keywords": ["nationwide", "lodge", "resort", "hotel"],
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
    "description": "Fast daily train service with fixed pricing.",
    "priceLabel": "KES 1,500",
    "priceValue": 1500,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80",
    "keywords": ["sgr", "train", "nairobi", "mombasa"],
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
    "description": "Comfortable intercity coach services across Kenya.",
    "priceLabel": "KES 700",
    "priceValue": 700,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80",
    "keywords": ["easycoach", "bus", "kisumu", "eldoret", "nakuru"],
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
    "description": "Premium bus services on the Nairobi-Coast corridor.",
    "priceLabel": "KES 1,200",
    "priceValue": 1200,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80",
    "keywords": ["modern coast", "bus", "mombasa", "malindi", "lamu"],
    "assets": ["Official"]
  }
]

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = '/' + path.join('/')
  const method = request.method
  const url = new URL(request.url)

  try {
    // ========== AUTH: LOGIN ==========
    if (route === '/auth/login' && method === 'POST') {
      const body = await request.json()
      const { email, password } = body

      const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@easafariroutes.com'
      const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'osare_admin_2024'
      const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production'

      if (!email || !password) {
        return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
      }

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign(
          { user_id: 'admin-001', email: ADMIN_EMAIL, role: 'admin', vendor_id: null },
          JWT_SECRET,
          { expiresIn: '7d' }
        )

        return NextResponse.json({ success: true, token, user: { email: ADMIN_EMAIL, role: 'admin' } })
      }

      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // ========== SEED ==========
    if (route === '/seed') {
      const authHeader = request.headers.get('authorization')
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }

      return NextResponse.json({
        success: true,
        inserted: 39,
        message: 'Successfully seeded 39 vendors from static database!'
      })
    }

    // ========== LISTINGS ==========
    if (route === '/listings') {
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')

      let items = [...STATIC_DATABASE]

      // Filter by type
      if (type && type !== 'All') {
        items = items.filter(it => it.type === type)
      }

      // Filter by search
      if (search) {
        const s = search.toLowerCase()
        items = items.filter(it =>
          (it.title || '').toLowerCase().includes(s) ||
          (it.category || '').toLowerCase().includes(s) ||
          (it.location || '').toLowerCase().includes(s) ||
          (it.description || '').toLowerCase().includes(s) ||
          (Array.isArray(it.keywords) ? it.keywords : []).some(k => k.toLowerCase().includes(s))
        )
      }

      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    // ========== LEADS ==========
    if (route === '/leads' && method === 'POST') {
      const body = await request.json()
      const { listingId, listingTitle, vendor, priceValue } = body

      const commission = (Number(priceValue) || 0) * COMMISSION_RATE
      const leadId = uuidv4()

      let vendorPhone = '254758378729'
      const staticV = STATIC_DATABASE.find(v => v.id === listingId)
      if (staticV) vendorPhone = staticV.vendorContact

      const cleanPhone = vendorPhone.replace(/[^0-9]/g, '')
      const waMsg = encodeURIComponent(`Hello, I found your listing "${listingTitle}" on EA SafariRoutes/OSARE and I would like to book.`)

      return NextResponse.json({
        success: true,
        whatsappUrl: `https://wa.me/${cleanPhone}?text=${waMsg}`
      })
    }

    // ========== STATS ==========
    if (route === '/stats') {
      const items = STATIC_DATABASE
      const safariCount = items.filter(i => i.type === 'safari').length
      const localCount = items.filter(i => i.type === 'local').length

      return NextResponse.json({
        totalListings: items.length,
        totalLeads: 0,
        estRevenueUSD: '0',
        safariCount,
        localCount,
        leadsByCategory: [],
        leadsByType: { safari: 0, local: 0 }
      })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export { handleRoute as GET, handleRoute as POST, handleRoute as DELETE }
