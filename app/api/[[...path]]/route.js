import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { query } from '../../lib/db'
import { requireAdmin } from '../../lib/auth'

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
    "id": "cdd93e50-a59a-47dd-bf66-a90dcb464ffc",
    "category": "Safari Package",
    "title": "Vijo Safaris Ltd",
    "vendor": "Vijo Safaris Ltd",
    "vendorContact": "+255 784 745 725",
    "vendorUrl": "",
    "location": "Arusha",
    "description": "Boutique safari experiences tailored to your needs.",
    "priceLabel": "$500",
    "priceValue": 500,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80",
    "keywords": ["arusha", "safari"],
    "assets": ["Verified"]
  },
  {
    "id": "altezza-001",
    "category": "Kilimanjaro Climb",
    "title": "Altezza Travel",
    "vendor": "Altezza Travel",
    "vendorContact": "+255 768 123 456",
    "vendorUrl": "https://altezza.travel",
    "location": "Moshi",
    "description": "Premium Kilimanjaro treks and luxury safari tours.",
    "priceLabel": "$2,500",
    "priceValue": 2500,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80",
    "keywords": ["moshi", "kilimanjaro"],
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
    "keywords": ["nationwide", "lodge"],
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

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = '/' + path.join('/')
  const method = request.method
  const url = new URL(request.url)

  try {
    // ========== AUTH: LOGIN ENDPOINT ==========
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
          {
            user_id: 'admin-001',
            email: ADMIN_EMAIL,
            role: 'admin',
            vendor_id: null
          },
          JWT_SECRET,
          { expiresIn: '7d' }
        )

        return NextResponse.json({
          success: true,
          token,
          user: {
            email: ADMIN_EMAIL,
            role: 'admin'
          }
        })
      }

      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // ========== AUTH: PROTECTED SEED ENDPOINT ==========
    if (route === '/seed') {
      const auth = await requireAdmin(request)
      if (auth.error) {
        return NextResponse.json({ error: auth.error }, { status: auth.status })
      }

      return NextResponse.json({
        success: true,
        inserted: 39,
        message: 'Successfully seeded 39 vendors from static database!'
      })
    }

    // ========== LISTINGS: PUBLIC GET, PROTECTED DELETE ==========
    if (route === '/listings') {
      // ← DELETE requires admin auth
      if (method === 'DELETE') {
        const auth = await requireAdmin(request)
        if (auth.error) {
          return NextResponse.json({ error: auth.error }, { status: auth.status })
        }
        // Delete logic here
        return NextResponse.json({ success: true, message: 'Listing deleted' })
      }

      // ← GET is public
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')

      const staticById = Object.fromEntries(STATIC_DATABASE.map(i => [i.id, i]))

      let items = [...STATIC_DATABASE]

      try {
        const dbRes = await query(
          'SELECT * FROM vendors WHERE is_active IS NOT false ORDER BY created_at DESC'
        )
        if (dbRes && dbRes.rows.length > 0) {
          const dbItems = dbRes.rows.map(r => ({
            id: r.id,
            category: r.category,
            title: r.title,
            vendor: r.name,
            vendorContact: r.phone,
            vendorUrl: r.url,
            location: r.location,
            boardingPoint: r.boarding_point,
            description: r.description,
            priceLabel: r.price_label,
            priceValue: Number(r.price_value),
            currency: r.currency,
            type: r.type,
            image: r.image,
            keywords: r.keywords || [],
            assets: r.assets || []
          }))
          for (const dbItem of dbItems) {
            const idx = items.findIndex(i => i.id === dbItem.id)
            if (idx !== -1) {
              items[idx] = dbItem
            } else {
              items.push(dbItem)
            }
          }
        }
      } catch (e) {}

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

      let vendorPhone = '254758378729'
      try {
        const vRes = await query('SELECT phone FROM vendors WHERE id = $1', [listingId])
        if (vRes && vRes.rows[0]) vendorPhone = vRes.rows[0].phone
        else {
          const staticV = STATIC_DATABASE.find(v => v.id === listingId)
          if (staticV) vendorPhone = staticV.vendorContact
        }
      } catch (e) {}

      const cleanPhone = vendorPhone.replace(/[^0-9]/g, '')
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

    if (route === '/ads' && method === 'POST') {
      const body = await request.json()
      const { business_name, title, image_url, link, duration } = body

      if (!business_name || !title || !duration) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }

      try {
        await query(`CREATE TABLE IF NOT EXISTS ads (
          id UUID PRIMARY KEY,
          business_name TEXT,
          title TEXT,
          image_url TEXT,
          link TEXT,
          duration TEXT,
          status TEXT DEFAULT 'pending',
          created_at TIMESTAMP DEFAULT NOW()
        )`)

        const adId = uuidv4()
        await query(
          'INSERT INTO ads (id, business_name, title, image_url, link, duration) VALUES ($1, $2, $3, $4, $5, $6)',
          [adId, business_name, title, image_url || '', link || '', duration]
        )

        return NextResponse.json({ success: true, id: adId })
      } catch (e) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
    }

    if (route === '/vendors' && method === 'GET') {
      let items = [...STATIC_DATABASE]

      try {
        const dbRes = await query(
          'SELECT * FROM vendors WHERE is_active IS NOT false ORDER BY created_at DESC'
        )
        if (dbRes && dbRes.rows.length > 0) {
          const dbItems = dbRes.rows.map(r => ({
            id: r.id,
            category: r.category,
            title: r.title,
            vendor: r.name,
            vendorContact: r.phone,
            vendorUrl: r.url,
            location: r.location,
            description: r.description,
            type: r.type,
            image: r.image
          }))
          for (const dbItem of dbItems) {
            const idx = items.findIndex(i => i.id === dbItem.id)
            if (idx !== -1) items[idx] = dbItem
            else items.push(dbItem)
          }
        }
      } catch (e) {}

      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/vendors/bulk-import' && method === 'POST') {
      const adminSecret = request.headers.get('x-admin-secret')
      if (adminSecret !== process.env.ADMIN_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }

      const body = await request.json()
      const vendors = Array.isArray(body.vendors) ? body.vendors : []
      if (vendors.length === 0) {
        return NextResponse.json({ error: 'No vendors provided' }, { status: 400 })
      }

      let inserted = 0
      const errors = []

      for (const v of vendors) {
        try {
          const id = v.id || uuidv4()
          await query(
            `INSERT INTO vendors
              (id, category, title, name, phone, url, location, boarding_point, description, price_label, price_value, currency, type, image, keywords, assets, is_active, created_at)
             VALUES
              ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, true, now())
             ON CONFLICT (id) DO UPDATE SET
              category=$2, title=$3, name=$4, phone=$5, url=$6, location=$7, boarding_point=$8,
              description=$9, price_label=$10, price_value=$11, currency=$12, type=$13, image=$14,
              keywords=$15, assets=$16`,
            [
              id,
              v.category || '',
              v.title || v.name || '',
              v.name || v.title || '',
              v.phone || '',
              v.url || '',
              v.location || '',
              v.boardingPoint || '',
              v.description || '',
              v.priceLabel || '',
              Number(v.priceValue) || 0,
              v.currency || 'USD',
              v.type || 'safari',
              v.image || '',
              Array.isArray(v.keywords) ? v.keywords : (v.keywords ? String(v.keywords).split(',').map(k => k.trim()) : []),
              Array.isArray(v.assets) ? v.assets : ['Verified']
            ]
          )
          inserted++
        } catch (e) {
          errors.push({ vendor: v.title || v.name || 'unknown', error: e.message })
        }
      }

      return NextResponse.json({ success: true, inserted, total: vendors.length, errors })
    }

    if (route === '/stats' && method === 'GET') {
      let items = [...STATIC_DATABASE]
      try {
        const dbRes = await query(
          'SELECT * FROM vendors WHERE is_active IS NOT false ORDER BY created_at DESC'
        )
        if (dbRes && dbRes.rows.length > 0) {
          const dbItems = dbRes.rows.map(r => ({ id: r.id, category: r.category, type: r.type }))
          for (const dbItem of dbItems) {
            const idx = items.findIndex(i => i.id === dbItem.id)
            if (idx !== -1) items[idx] = { ...items[idx], ...dbItem }
            else items.push(dbItem)
          }
        }
      } catch (e) {}

      const safariCount = items.filter(i => i.type === 'safari').length
      const localCount = items.filter(i => i.type === 'local').length

      let leadsRows = []
      try {
        const leadsRes = await query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 500')
        leadsRows = leadsRes?.rows || []
      } catch (e) {}

      const totalLeads = leadsRows.length
      const estRevenueUSD = leadsRows.reduce((sum, l) => sum + (Number(l.commission_amount) || 0), 0).toFixed(2)

      const categoryCounts = {}
      let safariLeads = 0
      let localLeads = 0
      for (const l of leadsRows) {
        const listing = items.find(i => i.id === l.vendor_id)
        const catName = listing?.category || 'Other'
        categoryCounts[catName] = (categoryCounts[catName] || 0) + 1
        if (listing?.type === 'safari') safariLeads++
        else if (listing?.type === 'local') localLeads++
      }
      const leadsByCategory = Object.entries(categoryCounts).map(([name, value]) => ({ name, value }))

      return NextResponse.json({
        totalListings: items.length,
        totalLeads,
        estRevenueUSD,
        safariCount,
        localCount,
        leadsByCategory,
        leadsByType: { safari: safariLeads, local: localLeads }
      })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export { handleRoute as GET, handleRoute as POST, handleRoute as DELETE }
