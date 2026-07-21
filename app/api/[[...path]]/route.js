import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

const COMMISSION_RATE = 0.05;

const STATIC_DATABASE = [
  { 
    id: 'mara-001', 
    category: 'Safari Package', 
    title: 'Masai Mara 3-Day Migration Safari', 
    vendor: 'Mara Safari Lodges Ltd', 
    vendorContact: '+254758378729', 
    vendorUrl: 'https://www.masaimara.com/', 
    location: 'Masai Mara National Reserve', 
    description: 'Experience the Big Five and the Great Migration.', 
    priceLabel: '$350', priceValue: 350, currency: 'USD', type: 'safari', 
    image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80', 
    keywords: ['mara', 'safari'], 
    assets: ['4x4 Land Cruiser', 'Luxury Tents'] 
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

    if (route === '/') return NextResponse.json({ message: 'OSARE B2B API Active', version: '3.0' });

    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}

export const GET = handleRoute;
export const POST = handleRoute;
export const OPTIONS = async () => NextResponse.json({}, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' } });