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
    "priceValue": 2200,
    "currency": "USD",
    "type": "safari",
    "image": "https://images.unsplash.com/photo-1589553460732-588140292BB9?q=80",
    "keywords": ["moshi", "kilimanjaro"],
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
    "id": "sgr-001",
    "category": "Train (SGR)",
    "title": "SGR Train - Nairobi to Mombasa",
    "vendor": "Madaraka Express",
    "vendorContact": "info@krc.co.ke",
    "vendorUrl": "https://metickets.krc.co.ke",
    "location": "Nairobi to Mombasa",
    "description": "Fast train service between capital and coast.",
    "priceLabel": "KES 1,500",
    "priceValue": 1500,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80",
    "keywords": ["sgr", "train", "nairobi", "mombasa"],
    "assets": ["Economy Coaches", "First Class Coaches"]
  },
  {
    "id": "easy-001",
    "category": "Matatu / Shuttle",
    "title": "EasyCoach - Intercity Bus Service",
    "vendor": "EasyCoach Ltd",
    "vendorContact": "+254 738 200 301",
    "vendorUrl": "https://www.easycoach.co.ke",
    "location": "Nairobi / Kisumu / Western",
    "description": "Premium bus service with scheduled departures across Kenya.",
    "priceLabel": "KES 1,400",
    "priceValue": 1400,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80",
    "keywords": ["bus", "easycoach", "kisumu", "western"],
    "assets": ["Scheduled", "Fixed Price"]
  },
  {
    "id": "modern-001",
    "category": "Matatu / Shuttle",
    "title": "Modern Coast - Coastal & Regional",
    "vendor": "Modern Coast",
    "vendorContact": "+254 709 916 000",
    "vendorUrl": "https://www.moderncoast.co.ke",
    "location": "Nairobi / Mombasa / Kampala",
    "description": "Luxury bus travel connecting East African cities.",
    "priceLabel": "KES 1,600",
    "priceValue": 1600,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80",
    "keywords": ["bus", "modern coast", "mombasa", "kampala"],
    "assets": ["Luxury", "AirCon"]
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
             await query('UPDATE team_members SET name=$1, role=$2, bio=$3, image=$4, email=$5, phone=$6 WHERE id=$7', [name, role, bio, image, email, phone, id]);
             return NextResponse.json({ success: true });
           } catch (e) { return NextResponse.json({ error: e.message }, { status: 500 }); }
        } else {
           const newId = uuidv4();
           try {
             await query('INSERT INTO team_members (id, name, role, bio, image, email, phone, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [newId, name, role, bio, image, email, phone, password || 'osare2026']);
             return NextResponse.json({ success: true, id: newId });
           } catch (e) { return NextResponse.json({ error: e.message }, { status: 500 }); }
        }
      }
    }

    if (route === '/stats') {
       let stats = { totalLeads: 0, estRevenueUSD: 0 };
       try {
         const lRes = await query('SELECT count(*) as count FROM leads');
         if (lRes) stats.totalLeads = parseInt(lRes.rows[0].count);
         stats.estRevenueUSD = (stats.totalLeads * 15).toFixed(2);
       } catch (e) {}
       return NextResponse.json(stats);
    }

    if (route === '/seed') {
       return NextResponse.json({ success: true, message: 'API Ready' });
    }

    if (route === '/') return NextResponse.json({ message: 'OSARE B2B API Active', version: '3.3' });

    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}

export const GET = handleRoute;
export const POST = handleRoute;
export const OPTIONS = async () => NextResponse.json({}, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' } });