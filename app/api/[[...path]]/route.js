import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { STATIC_DATABASE, STATIC_LOCAL_IDS, mapVendorRow, getAllVendors } from '@/lib/vendorData'

const COMMISSION_RATE = 0.05

const SEARCH_ALIASES = {
  'big five': ['safari', 'safari package', 'wildlife'],
  wildlife: ['safari', 'safari package', 'game drive'],
  'game drive': ['safari', 'safari package', 'wildlife'],
  'game reserve': ['safari', 'safari package'],
  mountain: ['kilimanjaro climb', 'kilimanjaro', 'trek', 'hiking'],
  hiking: ['kilimanjaro climb', 'kilimanjaro', 'trek', 'mountain'],
  trek: ['kilimanjaro climb', 'kilimanjaro', 'hiking', 'mountain'],
  climbing: ['kilimanjaro climb', 'kilimanjaro'],
  flight: ['light aircraft charter', 'aircraft charter', 'charter'],
  'bush plane': ['light aircraft charter', 'aircraft charter', 'charter'],
  charter: ['light aircraft charter', 'aircraft charter', 'flight'],
  plane: ['light aircraft charter', 'aircraft charter', 'flight'],
  beach: ['zanzibar', 'mombasa', 'coast', 'coastal'],
  island: ['zanzibar', 'stone town'],
  bus: ['matatu', 'shuttle', 'coach'],
  coach: ['matatu', 'shuttle', 'bus'],
  lodging: ['hotel', 'resort', 'lodge'],
  accommodation: ['hotel', 'resort', 'lodge'],
  stay: ['hotel', 'resort', 'lodge'],
  cheap: ['budget', 'off-peak', 'low season'],
  budget: ['cheap', 'off-peak', 'low season'],
  '4x4': ['car & caravan hire', 'car hire', 'caravan hire', 'self-drive'],
  'land cruiser': ['car & caravan hire', 'car hire', '4x4'],
  'land rover': ['car & caravan hire', 'car hire', '4x4'],
  'self drive': ['car & caravan hire', 'car hire', 'self-drive', '4x4'],
  'self-drive': ['car & caravan hire', 'car hire', 'self drive', '4x4'],
  'rental car': ['car & caravan hire', 'car hire'],
  'rent a car': ['car & caravan hire', 'car hire'],
  jeep: ['car & caravan hire', 'car hire', '4x4'],
  'roof tent': ['car & caravan hire', 'caravan hire', 'camping'],
  'camping vehicle': ['car & caravan hire', 'caravan hire', 'camping']
}

function expandSearchTerms(term) {
  const lower = term.toLowerCase().trim()
  const expanded = new Set([lower])
  for (const [key, values] of Object.entries(SEARCH_ALIASES)) {
    if (lower === key || lower.includes(key) || key.includes(lower)) {
      values.forEach((v) => expanded.add(v))
      expanded.add(key)
    }
  }
  return Array.from(expanded)
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

      let items = await getAllVendors()

      if (type && type !== 'All') items = items.filter((it) => it.type === type)

      if (search) {
        const searchTerms = expandSearchTerms(search)
        items = items.filter((it) => {
          const haystack = [
            it.title || '',
            it.category || '',
            it.location || '',
            it.description || '',
            ...(Array.isArray(it.keywords) ? it.keywords : [])
          ]
            .join(' ')
            .toLowerCase()
          return searchTerms.some((term) => haystack.includes(term))
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
          `UPDATE listings
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

    if (route === '/leads' && method === 'GET') {
      try {
        const res = await query(`
          SELECT l.id, l.vendor_id, l.traveler_name, l.traveler_phone,
                 l.price_quoted, l.commission_amount, l.status, l.created_at,
                 v.vendor AS vendor_name, v.category, v.type, v.currency
          FROM leads l
          LEFT JOIN listings v ON v.id = l.vendor_id
          ORDER BY l.created_at DESC
          LIMIT 200
        `)
        const leads = (res?.rows || []).map((r) => ({
          id: r.id,
          listingTitle: r.vendor_name || 'Unknown listing',
          vendor: r.vendor_name || 'Unknown vendor',
          type: r.type || 'safari',
          priceLabel: r.currency === 'KES' ? `KES ${r.price_quoted}` : `$${r.price_quoted}`,
          priceValue: Number(r.price_quoted) || 0,
          currency: r.currency || 'USD',
          commission: Number(r.commission_amount) || 0,
          status: r.status
        }))
        return NextResponse.json(leads)
      } catch (e) {
        return NextResponse.json([])
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
        const vRes = await query('SELECT vendor_phone FROM listings WHERE id = $1', [listingId])
        if (vRes && vRes.rows[0] && vRes.rows[0].vendor_phone) vendorPhone = vRes.rows[0].vendor_phone
        else {
          const staticV = STATIC_DATABASE.find((v) => v.id === listingId)
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

    if (route === '/stats') {
      try {
        const vendorsRes = await query('SELECT type FROM listings')
        const totalListings = vendorsRes.rows.length
        const safariCount = vendorsRes.rows.filter((r) => r.type === 'safari').length
        const localCount = vendorsRes.rows.filter((r) => r.type === 'local').length

        const leadsRes = await query(`
          SELECT l.commission_amount, v.type, v.category
          FROM leads l
          LEFT JOIN listings v ON v.id = l.vendor_id
        `)
        const totalLeads = leadsRes.rows.length
        const estRevenueUSD = leadsRes.rows.reduce((sum, r) => sum + (Number(r.commission_amount) || 0), 0).toFixed(2)

        const leadsByType = {
          safari: leadsRes.rows.filter((r) => r.type === 'safari').length,
          local: leadsRes.rows.filter((r) => r.type === 'local').length
        }

        const categoryCounts = {}
        leadsRes.rows.forEach((r) => {
          const cat = r.category || 'Uncategorized'
          categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
        })
        const leadsByCategory = Object.entries(categoryCounts).map(([name, value]) => ({ name, value }))

        return NextResponse.json({
          totalListings,
          totalLeads,
          estRevenueUSD,
          safariCount,
          localCount,
          leadsByType,
          leadsByCategory
        })
      } catch (e) {
        return NextResponse.json({
          totalListings: 0,
          totalLeads: 0,
          estRevenueUSD: '0.00',
          safariCount: 0,
          localCount: 0,
          leadsByType: { safari: 0, local: 0 },
          leadsByCategory: []
        })
      }
    }

    if (route === '/team') {
      if (method === 'GET') {
        try {
          const res = await query('SELECT id, name, role, bio, image, email, phone FROM team_members ORDER BY created_at ASC')
          return NextResponse.json(res?.rows || [])
        } catch (e) {
          return NextResponse.json([])
        }
      }
    }

    if (route === '/vendors' && method === 'GET') {
      const items = await getAllVendors()
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
