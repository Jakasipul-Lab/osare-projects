import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

const SEED_SQL = `
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

export async function GET() {
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
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}