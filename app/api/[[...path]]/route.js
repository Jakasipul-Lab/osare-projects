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

const SEED_SQL = `
CREATE TABLE IF NOT EXISTS team_members (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT,
    bio TEXT,
    image TEXT,
    email TEXT UNIQUE,
    phone TEXT,
    password TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vendors (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    title TEXT,
    phone TEXT NOT NULL,
    url TEXT,
    location TEXT,
    description TEXT,
    price_label TEXT,
    price_value NUMERIC,
    currency TEXT DEFAULT 'USD',
    type TEXT DEFAULT 'safari',
    image TEXT,
    keywords TEXT[],
    assets TEXT[],
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

DELETE FROM vendors;
`;

const VENDORS = [
  { name: "Habari Adventure", loc: "Moshi", cat: "Kilimanjaro Climb", phone: "+255 754 044 692", url: "https://habariadventure.com" },
  { name: "Rojo Expedition Ltd", loc: "Arusha", cat: "Safari expeditions", phone: "+255 689 451 736", url: "" },
  { name: "Vijo Safaris Ltd", loc: "Arusha", cat: "Boutique safaris", phone: "+255 784 745 725", url: "" },
  { name: "Stephen Patrick Komolo", loc: "Arusha", cat: "Personalized tours", phone: "+255 784 478 580", url: "" },
  { name: "Ilaroi Ranching Ltd", loc: "Arusha", cat: "Hunting safaris", phone: "+255 789 301 280", url: "https://ilaroiranching.co.tz" },
  { name: "Tanzania Horizon Safaris", loc: "Arusha", cat: "Serengeti and Ngorongoro tours", phone: "+255 713 123 456", url: "" },
  { name: "Altezza Travel", loc: "Moshi", cat: "Kilimanjaro Climb", phone: "+255 768 123 456", url: "https://altezza.travel" },
  { name: "Shidolya Tours and Safaris", loc: "Arusha", cat: "Wildlife tours", phone: "+255 754 987 654", url: "" },
  { name: "Good Earth Tours", loc: "Arusha", cat: "Luxury safaris", phone: "+255 784 222 333", url: "" },
  { name: "Kearsleys Travel and Tours", loc: "Dar es Salaam", cat: "Established operator", phone: "+255 22 213 9157", url: "https://kearsleys.com" },
  { name: "Mtoni Cultural Tours", loc: "Monduli", cat: "Cultural Tourism", phone: "+255 683 670 671", url: "https://mtonicultural.com" },
  { name: "Ng’iresi Cultural Tourism", loc: "Arusha", cat: "Village tours", phone: "+255 754 111 222", url: "" },
  { name: "Mulala Cultural Tourism", loc: "Arusha", cat: "Cheese-making and village life", phone: "+255 767 333 444", url: "" },
  { name: "Maasai Women Development Organization", loc: "Monduli", cat: "Cultural Tourism", phone: "+255 754 555 666", url: "" },
  { name: "Lake Eyasi Hadzabe Cultural Tours", loc: "Karatu", cat: "Hunter-gatherer experiences", phone: "+255 713 777 888", url: "" },
  { name: "Marera Valley Lodge", loc: "Karatu", cat: "Hotel & Resort", phone: "+255 754 327 142", url: "https://mareravalley.com" },
  { name: "Robanda Camp", loc: "Serengeti", cat: "Hotel & Resort", phone: "+255 754 324 193", url: "https://moivaro.com" },
  { name: "Serena Hotels", loc: "Nationwide", cat: "Hotel & Resort", phone: "+255 22 211 2416", url: "https://serenahotels.com" },
  { name: "Four Points by Sheraton", loc: "Arusha", cat: "City hotel", phone: "+255 27 250 8888", url: "" },
  { name: "Mount Meru Hotel", loc: "Arusha", cat: "Conference and leisure", phone: "+255 27 250 3355", url: "" },
  { name: "Kibadamo Hotel Ltd", loc: "Njombe", cat: "Town hotel", phone: "+255 754 384 853", url: "" },
  { name: "Sea Cliff Hotel", loc: "Dar es Salaam", cat: "Luxury coastal hotel", phone: "+255 22 260 0380", url: "" },
  { name: "Zanzibar Serena Inn", loc: "Stone Town", cat: "Heritage hotel", phone: "+255 24 223 3001", url: "" },
  { name: "Ngorongoro Wildlife Lodge", loc: "Karatu", cat: "Hotel & Resort", phone: "+255 27 253 7000", url: "" },
  { name: "Lake Manyara Kilimamoja Lodge", loc: "Karatu", cat: "Hotel & Resort", phone: "+255 27 253 8000", url: "" },
  { name: "Precision Air", loc: "Dar es Salaam", cat: "Airlines & Charters", phone: "+255 22 219 1000", url: "https://precisionairtz.com", type: "local" },
  { name: "Auric Air Services Ltd", loc: "Mwanza", cat: "Airlines & Charters", phone: "+255 28 250 0880", url: "https://auricair.com", type: "local" },
  { name: "Coastal Aviation", loc: "Dar es Salaam", cat: "Airlines & Charters", phone: "+255 22 260 0646", url: "https://coastal.co.tz", type: "local" },
  { name: "ZanAir", loc: "Zanzibar", cat: "Airlines & Charters", phone: "+255 24 223 3670", url: "https://zanair.com", type: "local" },
  { name: "Regional Air Services", loc: "Arusha", cat: "Safari routes", phone: "+255 27 250 2541", url: "https://regional.co.tz" },
  { name: "Vendor Consult and Co. Ltd", loc: "Dar es Salaam", cat: "Travel Agent", phone: "+255 767 749 816", url: "" },
  { name: "Flightlink Ltd", loc: "Dar es Salaam", cat: "Airlines & Charters", phone: "+255 22 260 1930", url: "https://flightlink.co.tz", type: "local" },
  { name: "Rickshaw Travel Group", loc: "Dar es Salaam", cat: "Travel Agent", phone: "+255 22 213 9157", url: "https://rickshawtravels.com" },
  { name: "World Tours and Safaris Tanzania", loc: "Arusha", cat: "Travel Agent", phone: "+255 27 250 8888", url: "" },
  { name: "Tanzania Tourist Board", loc: "Dar es Salaam", cat: "Official promotion", phone: "+255 22 213 1160", url: "https://tanzaniatouristboard.go.tz" },
  { name: "Zanzibar Unique Tours", loc: "Stone Town", cat: "Tourism", phone: "+255 24 223 4567", url: "" },
  { name: "Eco and Culture Tours", loc: "Stone Town", cat: "Tourism", phone: "+255 24 223 7890", url: "" },
  { name: "Safari Blue Ltd", loc: "Fumba", cat: "Marine excursions", phone: "+255 777 123 456", url: "https://safariblue.net" },
  { name: "Zanzibar Watersports", loc: "Nungwi", cat: "Diving & marine", phone: "+255 777 987 654", url: "" }
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

    // 4. TEAM MEMBERS
    if (route === '/team') {
      if (method === 'GET') {
        try {
          const res = await query('SELECT id, name, role, bio, image, email, phone FROM team_members ORDER BY created_at ASC');
          return NextResponse.json(res?.rows || []);
        } catch (e) { return NextResponse.json([], { status: 500 }); }
      }
      
      if (method === 'POST') {
        const data = await request.json();
        const { id, name, role, bio, image, email, phone, password } = data;
        
        if (id) {
           try {
             const check = await query('SELECT password FROM team_members WHERE id = $1', [id]);
             if (!check.rows[0] || (password && check.rows[0].password !== password)) {
               return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
             }
             await query(
               'UPDATE team_members SET name=$1, role=$2, bio=$3, image=$4, email=$5, phone=$6 WHERE id=$7',
               [name, role, bio, image, email, phone, id]
             );
             return NextResponse.json({ success: true });
           } catch (e) { return NextResponse.json({ error: e.message }, { status: 500 }); }
        } else {
           const newId = uuidv4();
           try {
             await query(
               'INSERT INTO team_members (id, name, role, bio, image, email, phone, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
               [newId, name, role, bio, image, email, phone, password || 'osare2026']
             );
             return NextResponse.json({ success: true, id: newId });
           } catch (e) { return NextResponse.json({ error: e.message }, { status: 500 }); }
        }
      }
    }

    if (route === '/seed') {
      try {
        const setup = SEED_SQL.split(';').map(s => s.trim()).filter(s => s.length > 0);
        for (const s of setup) await query(s + ';');

        for (const v of VENDORS) {
          await query(
            `INSERT INTO vendors (id, name, category, title, phone, url, location, description, price_label, price_value, currency, type, image, keywords, assets) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
            [
              uuidv4(), v.name, v.cat, v.name, v.phone, v.url, v.loc, v.cat, '$250', 250, 'USD', v.type || 'safari', 
              'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', [v.loc.toLowerCase(), v.cat.toLowerCase()], ['Verified Vendor', 'Direct Contact']
            ]
          );
        }
        return NextResponse.json({ success: true, message: `Seeded ${VENDORS.length} Vendors Successfully!` });
      } catch (e) { return NextResponse.json({ error: e.message }, { status: 500 }); }
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