import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

const COMMISSION_RATE = 0.05;

const STATIC_DATABASE = [
  {
    "id": "habari-001",
    "category": "Kilimanjaro Climb",
    "title": "Habari Adventure - Kilimanjaro Climbs",
    "vendor": "Habari Adventure",
    "vendorContact": "+255754044692",
    "vendorUrl": "https://habariadventure.com",
    "location": "Moshi",
    "description": "Expert Kilimanjaro climbs and safari experiences from Moshi.",
    "priceLabel": "$2,200",
    "priceValue": 2200,    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1589553460732-588140292BB9?q=80",
    "keywords": ["moshi", "kilimanjaro"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "rojo-001",
    "category": "Safari Package",
    "title": "Rojo Expedition - Safari Expeditions",
    "vendor": "Rojo Expedition Ltd",
    "vendorContact": "+255689451736",
    "vendorUrl": "",
    "location": "Arusha",
    "description": "Professional safari expeditions across Tanzania's northern circuit.",
    "priceLabel": "$450",
    "priceValue": 450,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80",
    "keywords": ["arusha", "safari"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "vijo-001",
    "category": "Safari Package",
    "title": "Vijo Safaris - Boutique Safaris",
    "vendor": "Vijo Safaris Ltd",
    "vendorContact": "+255784745725",
    "vendorUrl": "",
    "location": "Arusha",
    "description": "Boutique safari experiences tailored to your needs.",
    "priceLabel": "$500",
    "priceValue": 500,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80",
    "keywords": ["arusha", "boutique"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "altezza-001",
    "category": "Kilimanjaro Climb",
    "title": "Altezza Travel - Mountain Treks",
    "vendor": "Altezza Travel",
    "vendorContact": "+255768123456",
    "vendorUrl": "https://altezza.travel",
    "location": "Moshi",
    "description": "Premium Kilimanjaro climbs and luxury safari tours.",
    "priceLabel": "$2,500",
    "priceValue": 2500,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80",
    "keywords": ["moshi", "luxury"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "mtoni-001",
    "category": "Cultural Tourism",
    "title": "Mtoni Cultural Tours - Maasai Experience",
    "vendor": "Mtoni Cultural Tours",
    "vendorContact": "+255683670671",
    "vendorUrl": "https://mtonicultural.com",
    "location": "Monduli",
    "description": "Authentic Maasai cultural experiences and village tours.",
    "priceLabel": "$80",
    "priceValue": 80,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80",
    "keywords": ["monduli", "maasai"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "marera-001",
    "category": "Hotel & Resort",
    "title": "Marera Valley Lodge - Safari Stay",
    "vendor": "Marera Valley Lodge",
    "vendorContact": "+255754327142",
    "vendorUrl": "https://mareravalley.com",
    "location": "Karatu",
    "description": "Luxury lodge in the heart of Karatu, perfect for safari stops.",
    "priceLabel": "$180/night",
    "priceValue": 180,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?q=80",
    "keywords": ["karatu", "lodge"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "robanda-001",
    "category": "Hotel & Resort",
    "title": "Robanda Camp - Serengeti Tents",
    "vendor": "Robanda Camp",
    "vendorContact": "+255754324193",
    "vendorUrl": "https://moivaro.com",
    "location": "Serengeti",
    "description": "Authentic safari camp located at the edge of Serengeti.",
    "priceLabel": "$220/night",
    "priceValue": 220,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80",
    "keywords": ["serengeti", "camp"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "seacliff-001",
    "category": "Hotel & Resort",
    "title": "Sea Cliff Hotel - Coastal Luxury",
    "vendor": "Sea Cliff Hotel",
    "vendorContact": "+255222600380",
    "vendorUrl": "https://seacliffhotel.com",
    "location": "Dar es Salaam",
    "description": "Luxury coastal hotel overlooking the Indian Ocean.",
    "priceLabel": "$250/night",
    "priceValue": 250,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80",
    "keywords": ["dar es salaam", "ocean"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "precision-001",
    "category": "Airlines & Charters",
    "title": "Precision Air - Domestic Flights",
    "vendor": "Precision Air",
    "vendorContact": "+255222191000",
    "vendorUrl": "https://precisionairtz.com",
    "location": "Dar es Salaam",
    "description": "Leading domestic airline connecting major Tanzanian cities.",
    "priceLabel": "$120",
    "priceValue": 120,
    "currency": "USD",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80",
    "keywords": ["flights", "domestic"],
    "assets": ["Verified", "Direct Contact"]
  },
  {
    "id": "coastal-001",
    "category": "Airlines & Charters",
    "title": "Coastal Aviation - Safari Charters",
    "vendor": "Coastal Aviation",
    "vendorContact": "+255222600646",
    "vendorUrl": "https://coastal.co.tz",
    "location": "Dar es Salaam",
    "description": "The flying safari company, connecting all national parks.",
    "priceLabel": "$350",
    "priceValue": 350,
    "currency": "USD",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80",
    "keywords": ["charter", "safari"],
    "assets": ["Verified", "Direct Contact"]
  }
];

function matchesQuery(item, queryStr) {
  if (!queryStr) return true;
  const s = queryStr.toLowerCase().trim();
  const words = s.split(/[\s/]+/);
  const haystack = [item.title, item.vendor, item.location, item.category, item.description, ...(item.keywords || [])].join(' ').toLowerCase();
  return words.every(w => haystack.includes(w));
}

async function handleRoute(request, { params }) {
  const { path = [] } = await params;
  const route = '/' + path.join('/');
  const method = request.method;
  const url = new URL(request.url);

  try {
    if (route === '/listings') {
      const type = url.searchParams.get('type');
      const search = url.searchParams.get('q');
      let items = [];
      
      try {
        const dbRes = await query('SELECT * FROM vendors WHERE is_active = true ORDER BY created_at DESC');
        if (dbRes && dbRes.rows.length > 0) {
          items = dbRes.rows.map(r => ({
            id: r.id,
            category: r.category,
            title: r.title,
            vendor: r.name,
            vendorContact: r.phone,
            vendorUrl: r.url,
            location: r.location,
            description: r.description,
            priceLabel: r.price_label,
            priceValue: Number(r.price_value),
            currency: r.currency,
            type: r.type,
            image: r.image,
            keywords: r.keywords || [],
            assets: r.assets || []
          }));
        }
      } catch (e) {}

      if (items.length === 0) items = STATIC_DATABASE;
      if (type && type !== 'All') items = items.filter(it => it.type === type);
      if (search) items = items.filter(it => matchesQuery(it, search));
      
      return NextResponse.json(items, { headers: { 'Access-Control-Allow-Origin': '*' } });
    }

    if (route === '/leads' && method === 'POST') {
      const body = await request.json();
      const { listingId, listingTitle, vendor, priceValue } = body;
      const commission = (Number(priceValue) || 0) * COMMISSION_RATE;
      const leadId = uuidv4();

      try {
        await query(
          'INSERT INTO leads (id, vendor_id, traveler_name, traveler_phone, price_quoted, commission_amount, status, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, now())',
          [leadId, listingId, body.travelerName || 'Anonymous', body.travelerPhone || 'N/A', priceValue, commission, 'handoff']
        );
      } catch (e) {}

      let vendorPhone = '254758378729';
      try {
        const vRes = await query('SELECT phone FROM vendors WHERE id = $1', [listingId]);
        if (vRes && vRes.rows[0]) vendorPhone = vRes.rows[0].phone;
        else {
           const staticV = STATIC_DATABASE.find(v => v.id === listingId);
           if (staticV) vendorPhone = staticV.vendorContact;
        }
      } catch (e) {}

      const cleanPhone = vendorPhone.replace(/[^0-9]/g, '');
      const waMsg = encodeURIComponent(`Hello, I found your listing "${listingTitle}" on EA SafariRoutes/OSARE and I would like to book.`);
      
      return NextResponse.json({ 
        success: true, 
        whatsappUrl: `https://wa.me/${cleanPhone}?text=${waMsg}` 
      });
    }

    if (route === '/onboarding' && method === 'POST') {
      const v = await request.json();
      const id = uuidv4();
      try {
        await query(
          `INSERT INTO vendors (id, name, category, title, phone, url, location, description, price_label, price_value, currency, type, image, keywords, assets, is_active) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, true)`,
          [id, v.name, v.category, v.title, v.phone, v.url, v.location, v.description, v.priceLabel, v.priceValue, v.currency || 'USD', v.type || 'safari', v.image, v.keywords || [], v.assets || []]
        );
        return NextResponse.json({ success: true, vendorId: id });
      } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
      }
    }

    if (route === '/stats') {
      let stats = { totalListings: STATIC_DATABASE.length, totalLeads: 0, estRevenueUSD: 0 };
      try {
        const lRes = await query('SELECT count(*) as count FROM leads');
        if (lRes) stats.totalLeads = parseInt(lRes.rows[0].count);
        stats.estRevenueUSD = (stats.totalLeads * 15).toFixed(2);
      } catch (e) {}
      return NextResponse.json(stats);
    }

    if (route === '/') return NextResponse.json({ message: 'OSARE B2B API Active', version: '3.1' });

    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}

export const GET = handleRoute;
export const POST = handleRoute;
export const OPTIONS = async () => NextResponse.json({}, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' } });