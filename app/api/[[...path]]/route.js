import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

const COMMISSION_RATE = 0.05;

const STATIC_DATABASE = [
  {
    "id": "c907fa7a-8493-447e-98a3-f7e78fd5e4bd",
    "category": "Kilimanjaro Climb",
    "title": "Habari Adventure",
    "vendor": "Habari Adventure",
    "vendorContact": "+255754044692",
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
    "vendorContact": "+255689451736",
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
    "vendorContact": "+255784745725",
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
    "id": "28ad3912-eb98-4b92-9f7c-654ad41d1ab2",
    "category": "Kilimanjaro Climb",
    "title": "Altezza Travel",
    "vendor": "Altezza Travel",
    "vendorContact": "+255768123456",
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
    "id": "d2efae5e-34be-4bbd-ac40-bcc600831906",
    "category": "Hotel & Resort",
    "title": "Serena Hotels",
    "vendor": "Serena Hotels",
    "vendorContact": "+255222112416",
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
    "id": "95e87f59-4717-4a71-9914-f29d31d2163a",
    "category": "Airlines & Charters",
    "title": "Precision Air",
    "vendor": "Precision Air",
    "vendorContact": "+255222191000",
    "vendorUrl": "https://precisionairtz.com",
    "location": "Dar es Salaam",
    "description": "Leading domestic airline in Tanzania.",
    "priceLabel": "$120",
    "priceValue": 120,
    "currency": "USD",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80",
    "keywords": ["dar", "flights"],
    "assets": ["Verified"]
  },
  {
    "id": "051b0212-2ae8-4b2c-aee6-7827f2aed88b",
    "category": "Airlines & Charters",
    "title": "Coastal Aviation",
    "vendor": "Coastal Aviation",
    "vendorContact": "+255222600646",
    "vendorUrl": "https://coastal.co.tz",
    "location": "Dar es Salaam",
    "description": "Safari charters and scheduled flights to parks.",
    "priceLabel": "$350",
    "priceValue": 350,
    "currency": "USD",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80",
    "keywords": ["dar", "safari"],
    "assets": ["Verified"]
  },
  {
    "id": "6ab9fdec-3214-49cd-9ce9-27325b9eef31",
    "category": "Tourism",
    "title": "Zanzibar Unique Tours",
    "vendor": "Zanzibar Unique Tours",
    "vendorContact": "+255242234567",
    "vendorUrl": "",
    "location": "Stone Town",
    "description": "Unique historical and cultural tours in Zanzibar.",
    "priceLabel": "$80",
    "priceValue": 80,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80",
    "keywords": ["zanzibar", "tours"],
    "assets": ["Verified"]
  },
  {
    "id": "b9adf9e6-60c7-47fd-88e9-8b6cade3e662",
    "category": "Coastal Activity",
    "title": "Safari Blue Ltd",
    "vendor": "Safari Blue Ltd",
    "vendorContact": "+255777123456",
    "vendorUrl": "https://safariblue.net",
    "location": "Fumba, Zanzibar",
    "description": "Marine excursions and traditional dhow trips.",
    "priceLabel": "$150",
    "priceValue": 150,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80",
    "keywords": ["zanzibar", "marine"],
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
    "keywords": ["sgr", "train"],
    "assets": ["Official"]
  }
];

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
            id: r.id, category: r.category, title: r.title, vendor: r.name,
            vendorContact: r.phone, vendorUrl: r.url, location: r.location,
            boardingPoint: r.boarding_point, description: r.description,
            priceLabel: r.price_label, priceValue: Number(r.price_value),
            currency: r.currency, type: r.type, image: r.image,
            keywords: r.keywords || [], assets: r.assets || []
          }));
        }
      } catch (e) {}

      if (items.length === 0) items = STATIC_DATABASE;
      if (type && type !== 'All') items = items.filter(it => it.type === type);
      if (search) {
         const s = search.toLowerCase();
         items = items.filter(it => it.title.toLowerCase().includes(s) || it.location.toLowerCase().includes(s));
      }
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
      return NextResponse.json({ success: true, whatsappUrl: `https://wa.me/${cleanPhone}?text=${waMsg}` });
    }

    if (route === '/team') {
      if (method === 'GET') {
        try {
          const res = await query('SELECT id, name, role, bio, image, email, phone FROM team_members ORDER BY created_at ASC');
          return NextResponse.json(res?.rows || []);
        } catch (e) { return NextResponse.json([]); }
      }
    }

    if (route === '/') return NextResponse.json({ message: 'OSARE B2B API Active', version: '3.5' });
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}

export const GET = handleRoute;
export const POST = handleRoute;
export const OPTIONS = async () => NextResponse.json({}, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' } });