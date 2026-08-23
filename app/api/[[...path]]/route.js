import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

const COMMISSION_RATE = 0.05

const SEARCH_ALIASES = {
  'big five': ['safari', 'safari package', 'wildlife'],
  'wildlife': ['safari', 'safari package', 'game drive'],
  'game drive': ['safari', 'safari package', 'wildlife'],
  'game reserve': ['safari', 'safari package'],
  'mountain': ['kilimanjaro climb', 'kilimanjaro', 'trek', 'hiking'],
  'hiking': ['kilimanjaro climb', 'kilimanjaro', 'trek', 'mountain'],
  'trek': ['kilimanjaro climb', 'kilimanjaro', 'hiking', 'mountain'],
  'climbing': ['kilimanjaro climb', 'kilimanjaro'],
  'flight': ['light aircraft charter', 'aircraft charter', 'charter'],
  'bush plane': ['light aircraft charter', 'aircraft charter', 'charter'],
  'charter': ['light aircraft charter', 'aircraft charter', 'flight'],
  'plane': ['light aircraft charter', 'aircraft charter', 'flight'],
  'beach': ['zanzibar', 'mombasa', 'coast', 'coastal'],
  'island': ['zanzibar', 'stone town'],
  'bus': ['matatu', 'shuttle', 'coach'],
  'coach': ['matatu', 'shuttle', 'bus'],
  'lodging': ['hotel', 'resort', 'lodge'],
  'accommodation': ['hotel', 'resort', 'lodge'],
  'stay': ['hotel', 'resort', 'lodge'],
  'cheap': ['budget', 'off-peak', 'low season'],
  'budget': ['cheap', 'off-peak', 'low season'],
  '4x4': ['car & caravan hire', 'car hire', 'caravan hire', 'self-drive'],
  'land cruiser': ['car & caravan hire', 'car hire', '4x4'],
  'land rover': ['car & caravan hire', 'car hire', '4x4'],
  'self drive': ['car & caravan hire', 'car hire', 'self-drive', '4x4'],
  'self-drive': ['car & caravan hire', 'car hire', 'self drive', '4x4'],
  'rental car': ['car & caravan hire', 'car hire'],
  'rent a car': ['car & caravan hire', 'car hire'],
  'jeep': ['car & caravan hire', 'car hire', '4x4'],
  'roof tent': ['car & caravan hire', 'caravan hire', 'camping'],
  'camping vehicle': ['car & caravan hire', 'caravan hire', 'camping'],
}

function expandSearchTerms(term) {
  const lower = term.toLowerCase().trim()
  const expanded = new Set([lower])
  for (const [key, values] of Object.entries(SEARCH_ALIASES)) {
    if (lower === key || lower.includes(key) || key.includes(lower)) {
      values.forEach(v => expanded.add(v))
      expanded.add(key)
    }
  }
  return Array.from(expanded)
}

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

// Multiple photos per category, so even many "Safari Package" vendors
// (the majority on a safari platform) don't all show the same image.
// A vendor's own id picks a consistent photo from the pool deterministically,
// so the same vendor always shows the same photo across visits.
const PLACEHOLDER_POOLS = {
  hotel: [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
  ],
  aircraft: [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
  ],
  train: [
    'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop',
  ],
  transit: [
    'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
  ],
  cultural: [
    'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=800&auto=format&fit=crop',
  ],
  marine: [
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
  ],
  // 4x4 / safari vehicle hire — a distinct need from generic "safari
  // package" photos: tourists searching this want to see the actual
  // vehicle (pop-top Land Cruiser, self-drive 4x4, camping rig), not a
  // sunset silhouette.
  carHire: [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
  ],
  // The big bucket — most listings on a safari platform land here, so it
  // needs the most variety to avoid repetition.
  safari: [
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470114716159-e389f8712fda?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop',
  ],
}

function pickPlaceholderImage(category, seedKey) {
  const c = (category || '').toLowerCase()
  let pool = PLACEHOLDER_POOLS.safari
  if (c.includes('hotel') || c.includes('resort') || c.includes('lodge')) pool = PLACEHOLDER_POOLS.hotel
  else if (c.includes('aircraft') || c.includes('flight') || c.includes('charter')) pool = PLACEHOLDER_POOLS.aircraft
  else if (c.includes('train') || c.includes('sgr')) pool = PLACEHOLDER_POOLS.train
  else if (c.includes('matatu') || c.includes('shuttle') || c.includes('taxi') || c.includes('bus') || c.includes('transfer')) pool = PLACEHOLDER_POOLS.transit
  else if (c.includes('cultural') || c.includes('village')) pool = PLACEHOLDER_POOLS.cultural
  else if (c.includes('marine') || c.includes('diving') || c.includes('watersports') || c.includes('beach')) pool = PLACEHOLDER_POOLS.marine
  else if (c.includes('car hire') || c.includes('caravan') || c.includes('4x4') || c.includes('self-drive') || c.includes('self drive') || c.includes('rental')) pool = PLACEHOLDER_POOLS.carHire

  // Pick deterministically from the pool using the vendor's own id/name,
  // so it's stable across reloads but varies from vendor to vendor.
  const s = String(seedKey || '')
  let hash = 0
  for (let i = 0; i < s.length; i++) hash = (hash * 31 + s.charCodeAt(i)) >>> 0
  return pool[hash % pool.length]
}

// Maps a row from the real `vendors` table into the shape the frontend expects.
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
    image: r.image || pickPlaceholderImage(r.category, r.id || r.name),
    keywords: [r.location, r.category].filter(Boolean).map(s => String(s).toLowerCase()),
    assets: ['Verified Vendor'],
    isVerified: r.is_verified === true,
    vendorPrice: r.vendor_price !== null && r.vendor_price !== undefined ? Number(r.vendor_price) : null,
    platformPrice: r.platform_price !== null && r.platform_price !== undefined ? Number(r.platform_price) : priceValue,
    priceStatus: r.price_status || 'PENDING'
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
      } catch (e) {}

      for (const sid of STATIC_LOCAL_IDS) {
        if (!items.find(i => i.id === sid) && staticById[sid]) {
          items.push(staticById[sid])
        }
      }

      if (type && type !== 'All') items = items.filter(it => it.type === type)

      if (search) {
        const searchTerms = expandSearchTerms(search)
        items = items.filter(it => {
          const haystack = [
            it.title || '',
            it.category || '',
            it.location || '',
            it.description || '',
            ...(Array.isArray(it.keywords) ? it.keywords : [])
          ].join(' ').toLowerCase()
          return searchTerms.some(term => haystack.includes(term))
        })
      }

      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    if (route === '/verify-vendor' && method === 'POST') {
      const body = await request.json()
      const { id, isVerified, vendorPrice, priceStatus, image } = body

      if (!id) {
        return NextResponse.json({ error: 'Missing vendor id' }, { status: 400 })
      }

      try {
        await query(
          `UPDATE vendors
           SET is_verified = COALESCE($2, is_verified),
               vendor_price = COALESCE($3, vendor_price),
               price_status = COALESCE($4, price_status),
               image = COALESCE($5, image)
           WHERE id = $1`,
          [id, isVerified ?? null, vendorPrice ?? null, priceStatus ?? null, image ?? null]
        )
        return NextResponse.json({ success: true })
      } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 })
      }
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
