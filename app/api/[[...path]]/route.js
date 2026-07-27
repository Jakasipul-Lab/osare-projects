<<<<<<< Updated upstream
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import pg from 'pg'

const { Pool } = pg

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
    "boardingPoint": "Nairobi CBD â€” Mfangano Street",
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
    "boardingPoint": "Nairobi â€” Accra Road Terminal",
    "description": "Premium bus services on the Nairobiâ€“Coast corridor. Overnight and daytime trips available.",
    "priceLabel": "KES 1,200",
    "priceValue": 1200,
    "currency": "KES",
    "type": "local",
    "image": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80",
    "keywords": ["modern coast", "moderncoast", "bus", "mombasa", "malindi", "lamu", "nairobi", "coast"],
    "assets": ["Official"]
  }
]

// Static local transit IDs that must always be present in local listings
const STATIC_LOCAL_IDS = ['sgr-001', 'easycoach-001', 'moderncoast-001']

// All 39 vendors from full_seed.sql â€” used by /api/seed
const SEED_VENDORS = [
  { id: 'fd0321cc-92c6-4de4-9b68-7fe4a58fc49b', name: 'Habari Adventure', category: 'Kilimanjaro Climb', title: 'Habari Adventure', phone: '+255 754 044 692', url: 'https://habariadventure.com', location: 'Moshi', description: 'Kilimanjaro Climb', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['moshi', 'kilimanjaro climb'], assets: ['Verified Vendor'] },
  { id: 'c13c8085-5847-4856-8fbb-d8e0ce0267e6', name: 'Rojo Expedition Ltd', category: 'Safari expeditions', title: 'Rojo Expedition Ltd', phone: '+255 689 451 736', url: '', location: 'Arusha', description: 'Safari expeditions', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'safari expeditions'], assets: ['Verified Vendor'] },
  { id: '60d03e75-5e21-4d70-8f9d-bbfd101e3823', name: 'Vijo Safaris Ltd', category: 'Boutique safaris', title: 'Vijo Safaris Ltd', phone: '+255 784 745 725', url: '', location: 'Arusha', description: 'Boutique safaris', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'boutique safaris'], assets: ['Verified Vendor'] },
  { id: '01cb9174-88f8-48cf-8be6-923abb4544d8', name: 'Stephen Patrick Komolo', category: 'Personalized tours', title: 'Stephen Patrick Komolo', phone: '+255 784 478 580', url: '', location: 'Arusha', description: 'Personalized tours', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'personalized tours'], assets: ['Verified Vendor'] },
  { id: 'ca9cb0e2-134b-4339-9147-ccb42747caa6', name: 'Ilaroi Ranching Ltd', category: 'Hunting safaris', title: 'Ilaroi Ranching Ltd', phone: '+255 789 301 280', url: 'https://ilaroiranching.co.tz', location: 'Arusha', description: 'Hunting safaris', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'hunting safaris'], assets: ['Verified Vendor'] },
  { id: '8e098b35-c809-4948-ba5f-946745383063', name: 'Tanzania Horizon Safaris', category: 'Serengeti and Ngorongoro tours', title: 'Tanzania Horizon Safaris', phone: '+255 713 123 456', url: '', location: 'Arusha', description: 'Serengeti and Ngorongoro tours', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'serengeti and ngorongoro tours'], assets: ['Verified Vendor'] },
  { id: 'd85559a7-c111-4c2e-abef-450afbc57291', name: 'Altezza Travel', category: 'Kilimanjaro Climb', title: 'Altezza Travel', phone: '+255 768 123 456', url: 'https://altezza.travel', location: 'Moshi', description: 'Kilimanjaro Climb', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['moshi', 'kilimanjaro climb'], assets: ['Verified Vendor'] },
  { id: 'dfd61453-2e8f-4d10-b430-4b1544837ee9', name: 'Shidolya Tours and Safaris', category: 'Wildlife tours', title: 'Shidolya Tours and Safaris', phone: '+255 754 987 654', url: '', location: 'Arusha', description: 'Wildlife tours', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'wildlife tours'], assets: ['Verified Vendor'] },
  { id: 'd46ddc26-270d-43d5-b991-eb5acd5242b7', name: 'Good Earth Tours', category: 'Luxury safaris', title: 'Good Earth Tours', phone: '+255 784 222 333', url: '', location: 'Arusha', description: 'Luxury safaris', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'luxury safaris'], assets: ['Verified Vendor'] },
  { id: '5cd32950-e582-4504-ba7f-db3cb7536d78', name: 'Kearsleys Travel and Tours', category: 'Established operator', title: 'Kearsleys Travel and Tours', phone: '+255 22 213 9157', url: 'https://kearsleys.com', location: 'Dar es Salaam', description: 'Established operator', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'established operator'], assets: ['Verified Vendor'] },
  { id: 'a08f3a06-4f83-4731-bd79-35676a83d99d', name: 'Mtoni Cultural Tours', category: 'Maasai cultural experiences', title: 'Mtoni Cultural Tours', phone: '+255 683 670 671', url: 'https://mtonicultural.com', location: 'Monduli', description: 'Maasai cultural experiences', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['monduli', 'maasai cultural experiences'], assets: ['Verified Vendor'] },
  { id: '489c1560-2a49-4ded-9c26-fdabfc9fd5f2', name: "Ng'iresi Cultural Tourism", category: 'Village tours', title: "Ng'iresi Cultural Tourism", phone: '+255 754 111 222', url: '', location: 'Arusha', description: 'Village tours', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'village tours'], assets: ['Verified Vendor'] },
  { id: 'e9680640-c5a3-4490-898d-65d4026f6b09', name: 'Mulala Cultural Tourism', category: 'Cheese-making and village life', title: 'Mulala Cultural Tourism', phone: '+255 767 333 444', url: '', location: 'Arusha', description: 'Cheese-making and village life', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'cheese-making and village life'], assets: ['Verified Vendor'] },
  { id: 'ff858e7e-5f87-4b5e-b73d-bc98e3475872', name: 'Maasai Women Development Organization', category: 'Women-led cultural tours', title: 'Maasai Women Development Organization', phone: '+255 754 555 666', url: '', location: 'Monduli', description: 'Women-led cultural tours', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['monduli', 'women-led cultural tours'], assets: ['Verified Vendor'] },
  { id: 'a52af89e-2e5d-4487-9938-94183852c44c', name: 'Lake Eyasi Hadzabe Cultural Tours', category: 'Hunter-gatherer experiences', title: 'Lake Eyasi Hadzabe Cultural Tours', phone: '+255 713 777 888', url: '', location: 'Karatu', description: 'Hunter-gatherer experiences', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['karatu', 'hunter-gatherer experiences'], assets: ['Verified Vendor'] },
  { id: '8ce1dfc1-df5a-454b-9e55-2d2a9d0fcda9', name: 'Marera Valley Lodge', category: 'Hotel & Resort', title: 'Marera Valley Lodge', phone: '+255 754 327 142', url: 'https://mareravalley.com', location: 'Karatu', description: 'Hotel & Resort', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['karatu', 'hotel & resort'], assets: ['Verified Vendor'] },
  { id: 'b34bc459-9c6a-4c84-8cd9-76179255a9c2', name: 'Robanda Camp', category: 'Safari camp', title: 'Robanda Camp', phone: '+255 754 324 193', url: 'https://moivaro.com', location: 'Serengeti', description: 'Safari camp', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['serengeti', 'safari camp'], assets: ['Verified Vendor'] },
  { id: '5fc577c3-81fb-47f7-ab35-9b23a080c215', name: 'Serena Hotels', category: 'Hotel & Resort', title: 'Serena Hotels', phone: '+255 22 211 2416', url: 'https://serenahotels.com', location: 'Nationwide', description: 'Hotel & Resort', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['nationwide', 'hotel & resort'], assets: ['Verified Vendor'] },
  { id: '9db039db-86c3-41cd-9b58-812a17e831d0', name: 'Four Points by Sheraton', category: 'City hotel', title: 'Four Points by Sheraton', phone: '+255 27 250 8888', url: '', location: 'Arusha', description: 'City hotel', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'city hotel'], assets: ['Verified Vendor'] },
  { id: '29298b34-abb6-4e99-92f0-a2f6edf30fa6', name: 'Mount Meru Hotel', category: 'Conference and leisure', title: 'Mount Meru Hotel', phone: '+255 27 250 3355', url: '', location: 'Arusha', description: 'Conference and leisure', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'conference and leisure'], assets: ['Verified Vendor'] },
  { id: '484fe78c-c8c7-4fd0-96fb-452a0faf5010', name: 'Kibadamo Hotel Ltd', category: 'Town hotel', title: 'Kibadamo Hotel Ltd', phone: '+255 754 384 853', url: '', location: 'Njombe', description: 'Town hotel', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['gjombe', 'town hotel'], assets: ['Verified Vendor'] },
  { id: '3ee04fdb-0fe2-4a40-8a91-e0375aaf8171', name: 'Sea Cliff Hotel', category: 'Luxury coastal hotel', title: 'Sea Cliff Hotel', phone: '+255 22 260 0380', url: '', location: 'Dar es Salaam', description: 'Luxury coastal hotel', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'luxury coastal hotel'], assets: ['Verified Vendor'] },
  { id: '7af4375a-ad3a-4dfa-8a1e-47cc3cca9533', name: 'Zanzibar Serena Inn', category: 'Heritage hotel', title: 'Zanzibar Serena Inn', phone: '+255 24 223 3001', url: '', location: 'Stone Town', description: 'Heritage hotel', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['stone town', 'heritage hotel'], assets: ['Verified Vendor'] },
  { id: '61e52520-7455-47d1-b158-8a6f75a30fe2', name: 'Ngorongoro Wildlife Lodge', category: 'Hotel & Resort', title: 'Ngorongoro Wildlife Lodge', phone: '+255 27 253 7000', url: '', location: 'Karatu', description: 'Hotel & Resort', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['karatu', 'hotel & resort'], assets: ['Verified Vendor'] },
  { id: 'c726e507-974a-4ff7-a9a7-ce6f19ffec41', name: 'Lake Manyara Kilimamoja Lodge', category: 'Hotel & Resort', title: 'Lake Manyara Kilimamoja Lodge', phone: '+255 27 253 8000', url: '', location: 'Karatu', description: 'Hotel & Resort', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['karatu', 'hotel & resort'], assets: ['Verified Vendor'] },
  { id: '7d6e4073-9a06-4011-bc96-5487e9b69464', name: 'Precision Air', category: 'Airlines & Charters', title: 'Precision Air', phone: '+255 22 219 1000', url: 'https://precisionairtz.com', location: 'Dar es Salaam', description: 'Airlines & Charters', price_label: '50', price_value: 250, currency: 'USD', type: 'local', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'airlines & charters'], assets: ['Verified Vendor'] },
  { id: '3cf10f50-1320-489a-8a30-01779dc2ebb8', name: 'Auric Air Services Ltd', category: 'Airlines & Charters', title: 'Auric Air Services Ltd', phone: '+255 28 250 0880', url: 'https://auricair.com', location: 'Mwanza', description: 'Airlines & Charters', price_label: '50', price_value: 250, currency: 'USD', type: 'local', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['mwanza', 'airlines & charters'], assets: ['Verified Vendor'] },
  { id: 'bbe4fdda-87ad-45e4-8014-05fb56c3a57c', name: 'Coastal Aviation', category: 'Safari charters', title: 'Coastal Aviation', phone: '+255 22 260 0646', url: 'https://coastal.co.tz', location: 'Dar es Salaam', description: 'Safari charters', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'safari charters'], assets: ['Verified Vendor'] },
  { id: '19f39949-0da9-419f-90db-88873e1eb587', name: 'ZanAir', category: 'Airlines & Charters', title: 'ZanAir', phone: '+255 24 223 3670', url: 'https://zanair.com', location: 'Zanzibar', description: 'Airlines & Charters', price_label: '50', price_value: 250, currency: 'USD', type: 'local', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['zanzibar', 'airlines & charters'], assets: ['Verified Vendor'] },
  { id: '7870edaa-d7c5-467c-8eb5-2a8e5c126773', name: 'Regional Air Services', category: 'Safari routes', title: 'Regional Air Services', phone: '+255 27 250 2541', url: 'https://regional.co.tz', location: 'Arusha', description: 'Safari routes', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'safari routes'], assets: ['Verified Vendor'] },
  { id: '21f51928-d30d-45fb-a8fa-ee070ed75648', name: 'Vendor Consult and Co. Ltd', category: 'Travel agent', title: 'Vendor Consult and Co. Ltd', phone: '+255 767 749 816', url: '', location: 'Dar es Salaam', description: 'Travel agent', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'travel agent'], assets: ['Verified Vendor'] },
  { id: '4b371d65-2db6-4c31-8b52-dd933699b3e3', name: 'Flightlink Ltd', category: 'Airlines & Charters', title: 'Flightlink Ltd', phone: '+255 22 260 1930', url: 'https://flightlink.co.tz', location: 'Dar es Salaam', description: 'Airlines & Charters', price_label: '50', price_value: 250, currency: 'USD', type: 'local', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'airlines & charters'], assets: ['Verified Vendor'] },
  { id: '41e21d1c-52f8-47ae-ba68-caa57a09a3c1', name: 'Rickshaw Travel Group', category: 'International travel agent', title: 'Rickshaw Travel Group', phone: '+255 22 213 9157', url: 'https://rickshawtravels.com', location: 'Dar es Salaam', description: 'International travel agent', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'international travel agent'], assets: ['Verified Vendor'] },
  { id: '1b47363f-9e1f-4ee0-954c-02e2dee74dd5', name: 'World Tours and Safaris Tanzania', category: 'Travel agent', title: 'World Tours and Safaris Tanzania', phone: '+255 27 250 8888', url: '', location: 'Arusha', description: 'Travel agent', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['arusha', 'travel agent'], assets: ['Verified Vendor'] },
  { id: '42cc9179-b76c-40aa-91d9-566b0a7c9302', name: 'Tanzania Tourist Board', category: 'Official tourism promotion', title: 'Tanzania Tourist Board', phone: '+255 22 213 1160', url: 'https://tanzaniatouristboard.go.tz', location: 'Dar es Salaam', description: 'Official tourism promotion', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['dar es salaam', 'official tourism promotion'], assets: ['Verified Vendor'] },
  { id: '55f67893-acf4-4554-a8ff-f1c10dcf69a7', name: 'Zanzibar Unique Tours and Safaris', category: 'Tourism', title: 'Zanzibar Unique Tours and Safaris', phone: '+255 24 223 4567', url: '', location: 'Stone Town', description: 'Tourism', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['stone town', 'tourism'], assets: ['Verified Vendor'] },
  { id: '22b53723-28a1-476d-a7f7-26535192853c', name: 'Eco and Culture Tours Zanzibar', category: 'Tourism', title: 'Eco and Culture Tours Zanzibar', phone: '+255 24 223 7890', url: '', location: 'Stone Town', description: 'Tourism', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['stone town', 'tourism'], assets: ['Verified Vendor'] },
  { id: '3e97d8f1-06db-49d8-9732-e6c6c299b2ca', name: 'Safari Blue Ltd', category: 'Marine excursions', title: 'Safari Blue Ltd', phone: '+255 777 123 456', url: 'https://safariblue.net', location: 'Fumba, Zanzibar', description: 'Marine excursions', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['fumba, zanzibar', 'marine excursions'], assets: ['Verified Vendor'] },
  { id: 'a962f1d1-e4af-445f-8a92-a395c1995429', name: 'Zanzibar Watersports', category: 'Diving & marine tours', title: 'Zanzibar Watersports', phone: '+255 777 987 654', url: '', location: 'Nungwi', description: 'Diving & marine tours', price_label: '50', price_value: 250, currency: 'USD', type: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80', keywords: ['nungwi', 'diving & marine tours'], assets: ['Verified Vendor'] }
]

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = '/' + path.join('/')
  const method = request.method
  const url = new URL(request.url)

  try {
    if (route === '/listings') {
      const type = url.searchParams.get('type')
      const search = url.searchParams.get('q')

      // Build a lookup map for static items so DB versions can replace them by ID
      const staticById = Object.fromEntries(STATIC_DATABASE.map(i => [i.id, i]))

      // Always start with all static items as the base
      let items = [...STATIC_DATABASE]

      try {
        // Include vendors that are explicitly active OR have no is_active value set (NULL).
        // Only vendors explicitly set to is_active = false are excluded.
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
          // Merge: DB items replace static items with the same ID; new DB items are appended
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

      // Guarantee static local transit entries are always present regardless of DB state
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
        const id = uuidv4()
        await query(
          `INSERT INTO ads (id, business_name, title, image_url, link, duration, status, created_at)
           VALUES ($1, $2, $3, $4, $5, $6, 'pending', now())`,
          [id, business_name, title, image_url || null, link || null, duration]
        )
        return NextResponse.json({ success: true, id })
      } catch (e) {
        return NextResponse.json({ error: 'Failed to submit ad' }, { status: 500 })
      }
    }

    if (route === '/vendors' && method === 'GET') {
      try {
        const res = await query('SELECT * FROM vendors WHERE is_active IS NOT false ORDER BY created_at DESC')
        return NextResponse.json(res?.rows || [])
      } catch (e) {
        return NextResponse.json([])
      }
    }

    if (route === '/seed') {
      try {
        // Ensure the vendors table exists
        await query(`CDEDATE TA@¥Å FH/EXISTS vendors (
          id UUID PRIMARY KEY,
          name TEXT NOT NULL,
          category TEXT,
          title TEXT,
          phone TEXT NOT NULL,
          url TEXT,
          location TEXT,
          description TEXT,
          price_label TEXT,
          price_value NUMERIC
  ~        currency TEXT DEFAULT 'USD',
          type TEXT DEFAULT 'safari',
          image TEXT,
          keywords TEXT[],
          assets TEXT[],
          is_active BOOLEAN DEFAULT true,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAIPˆ	}))

        // Clear existing vendor rows so we start fresh
        await query('DELETE FROM vendors')

        // Insert all 39 vendors with is_active explicitly set to true
        for (const v of SEED_VENDORS) {
          await query(
            `INSERT INTO vendors
              (id, name, category, title, phone, url, location, description,
               price_label, price_value, currency, type, image, keywords, assets, is_active)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
            [
              v.id, v.name, v.category, v.title, v.phone, v.url, v.location,
              v.description, v.price_label, v.price_value, v.currency, v.type,
              v.image, v.keywords, v.assets, true
            ]
          )
        }

        const countRes = await query('SELECT COUNT(*) FROM vendors WHERE is_active = true')
        const count = parseInt(countRes.rows[0].count, 10)

        return NextResponse.json(
          { success: true, message: `Seeded ${count} vendors successfully`, count },
          { headers: { 'Access-Control-Allow-Origin': '*' } }
        )
      } catch (e) {
        return NextResponse.json({ error: 'Seed failed: ' + e.message }, { status: 500 })
      }
    }

    if (route === '/') return NextResponse.json({ message: 'OSARE B2B API Active', version: '3.5' })

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 })
  }
}

let pool
async function query(text, params) {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL
    if (connectionString) {
      pool = new Pool({
        connectionString,
        ssl: { rejectUnauthorized: false }
      })
    }
  }
  if (!pool) return null
  return pool.query(text, params)
}

export const GET = handleRoute
export const POST = handleRoute
export const OPTIONS = async () => NextResponse.json({}, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' } })
=======
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'
import crypto from 'crypto'
import pg from 'pg'

const { Pool } = pg

// ---------------------------------------------------------------------------
// PostgreSQL (NEON) connection (singleton) + schema init
// ---------------------------------------------------------------------------
let pool
let initPromise

function getPool() {
  if (!pool) {
    // node-postgres does not support SCRAM channel binding; strip it.
    const cs = (process.env.DATABASE_URL || '').replace(/&?channel_binding=require/gi, '')
    pool = new Pool({
      connectionString: cs,
      ssl: { rejectUnauthorized: false },
      max: 5,
      idleTimeoutMillis: 30000,
    })
  }
  return pool
}

async function initDb() {
  const p = getPool()
  await p.query(`
    CREATE TABLE IF NOT EXISTS listings (
      id UUID PRIMARY KEY,
      owner_id UUID,
      type TEXT,
      category TEXT,
      title TEXT,
      vendor TEXT,
      vendor_office TEXT,
      location TEXT,
      map_link TEXT,
      description TEXT,
      includes JSONB DEFAULT '[]'::jsonb,
      price_value NUMERIC DEFAULT 0,
      currency TEXT DEFAULT 'USD',
      price_label TEXT,
      off_peak_value NUMERIC DEFAULT 0,
      off_peak_label TEXT,
      season TEXT,
      image TEXT,
      keywords JSONB DEFAULT '[]'::jsonb,
      commission_rate INTEGER DEFAULT 5,
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
  await p.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY,
      listing_id UUID,
      listing_title TEXT,
      vendor TEXT,
      category TEXT,
      type TEXT,
      price_label TEXT,
      price_value NUMERIC DEFAULT 0,
      currency TEXT DEFAULT 'USD',
      commission NUMERIC DEFAULT 0,
      channel TEXT DEFAULT 'whatsapp',
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
  await p.query(`
    CREATE TABLE IF NOT EXISTS vendors (
      id UUID PRIMARY KEY,
      name TEXT,
      company TEXT,
      email TEXT UNIQUE,
      phone TEXT,
      password_hash TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
  await p.query(`
    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      vendor_id UUID,
      created_at TIMESTAMPTZ DEFAULT now()
    )`)
}

async function ensureDb() {
  if (!initPromise) initPromise = initDb()
  await initPromise
}

async function q(text, params) {
  const p = getPool()
  return p.query(text, params)
}

// Business config
const WHATSAPP_PHONE = '254758378729'
const COMMISSION_RATE = 0.05 // 5% charged to vendors

// ---------------------------------------------------------------------------
// Row mappers (snake_case -> camelCase, numeric -> Number)
// ---------------------------------------------------------------------------
function rowToListing(r) {
  if (!r) return null
  return {
    id: r.id,
    ownerId: r.owner_id,
    type: r.type,
    category: r.category,
    title: r.title,
    vendor: r.vendor,
    vendorOffice: r.vendor_office,
    location: r.location,
    mapLink: r.map_link,
    description: r.description,
    includes: r.includes || [],
    priceValue: r.price_value != null ? Number(r.price_value) : 0,
    currency: r.currency,
    priceLabel: r.price_label,
    offPeakValue: r.off_peak_value != null ? Number(r.off_peak_value) : 0,
    offPeakLabel: r.off_peak_label,
    season: r.season,
    image: r.image,
    keywords: r.keywords || [],
    commissionRate: r.commission_rate,
    createdAt: r.created_at,
  }
}

function rowToLead(r) {
  if (!r) return null
  return {
    id: r.id,
    listingId: r.listing_id,
    listingTitle: r.listing_title,
    vendor: r.vendor,
    category: r.category,
    type: r.type,
    priceLabel: r.price_label,
    priceValue: r.price_value != null ? Number(r.price_value) : 0,
    currency: r.currency,
    commission: r.commission != null ? Number(r.commission) : 0,
    channel: r.channel,
    createdAt: r.created_at,
  }
}

function cleanVendor(r) {
  if (!r) return null
  return { id: r.id, name: r.name, company: r.company, email: r.email, phone: r.phone, createdAt: r.created_at }
}

// ---------------------------------------------------------------------------
// Vendor auth helpers
// ---------------------------------------------------------------------------
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex')
  return `${salt}:${hash}`
}

function verifyPassword(password, stored) {
  if (!stored || !stored.includes(':')) return false
  const [salt, hash] = stored.split(':')
  const test = crypto.scryptSync(String(password), salt, 64).toString('hex')
  const a = Buffer.from(hash, 'hex')
  const b = Buffer.from(test, 'hex')
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

async function getVendorFromRequest(request) {
  const auth = request.headers.get('authorization') || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null
  if (!token) return null
  const s = await q('SELECT vendor_id FROM sessions WHERE token = $1', [token])
  if (!s.rows.length) return null
  const v = await q('SELECT * FROM vendors WHERE id = $1', [s.rows[0].vendor_id])
  return v.rows[0] || null
}

// ---------------------------------------------------------------------------
// CORS helpers
// ---------------------------------------------------------------------------
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------
function seedListings() {
  const now = new Date()
  const safari = [
    { category: 'Safari Package', title: 'Masai Mara 3-Day Migration Safari', vendor: 'Mara Safari Lodges Ltd', vendorOffice: 'Utalii House, Nairobi CBD', location: 'Masai Mara National Reserve, Narok County', mapLink: 'https://maps.google.com/?q=Masai+Mara+National+Reserve', description: 'Experience the Big Five and the Great Migration. Includes game drives, park fees, transport from Nairobi and 2 nights at a tented camp with all meals.', includes: ['Park fees', 'Transport from Nairobi', '2 Nights Tented Camp', 'All Meals', 'Professional Guide'], priceValue: 350, currency: 'USD', priceLabel: '$350', offPeakValue: 280, offPeakLabel: '$280', season: 'Low season: Apr-Jun', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxNYXNhaSUyME1hcmF8ZW58MHx8fHwxNzgzMzgyMDcyfDA&ixlib=rb-4.1.0&q=85', keywords: ['mara', 'safari', 'kenya', 'wildlife', 'tour', 'trip', 'holiday', 'migration', 'big five'] },
    { category: 'Safari Package', title: 'Serengeti Great Migration Safari', vendor: 'Wild Trails Tanzania', vendorOffice: 'Arusha Town Centre, Tanzania', location: 'Serengeti National Park, Tanzania', mapLink: 'https://maps.google.com/?q=Serengeti+National+Park', description: 'Witness the Great Wildebeest Migration. 4 days, 3 nights lodge stay with unlimited game drives and expert guides.', includes: ['Park fees', '3 Nights Lodge', 'All Meals', 'Unlimited Game Drives'], priceValue: 750, currency: 'USD', priceLabel: '$750', offPeakValue: 620, offPeakLabel: '$620', season: 'Low season: Mar-May', image: 'https://images.unsplash.com/photo-1597877774402-d04cad0b7596?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxTZXJlbmdldGklMjB3aWxkbGlmZXxlbnwwfHx8fDE3ODMzODIwNzN8MA&ixlib=rb-4.1.0&q=85', keywords: ['serengeti', 'migration', 'wildlife', 'tanzania', 'tour', 'safari'] },
    { category: 'Kilimanjaro Climb', title: 'Kilimanjaro Machame Route 7-Day Climb', vendor: 'Summit Africa Treks', vendorOffice: 'Moshi, Kilimanjaro Region', location: 'Mount Kilimanjaro, Tanzania', mapLink: 'https://maps.google.com/?q=Mount+Kilimanjaro', description: 'Reach Uhuru Peak (5,895m) via the scenic Machame route. Includes certified mountain guides, porters, camping gear, park fees and all meals on the mountain.', includes: ['Certified Guides & Porters', 'Camping Gear', 'Park & Rescue Fees', 'All Mountain Meals', 'Airport Transfer'], priceValue: 1450, currency: 'USD', priceLabel: '$1,450', offPeakValue: 1200, offPeakLabel: '$1,200', season: 'Low season: Apr-May', image: 'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxLaWxpbWFuamFyb3xlbnwwfHx8fDE3ODMzODIwNjZ8MA&ixlib=rb-4.1.0&q=85', keywords: ['kilimanjaro', 'mountain', 'climb', 'trek', 'hiking', 'peak', 'uhuru', 'tanzania'] },
    { category: 'Safari Package', title: 'Amboseli Elephants & Kilimanjaro Views 2-Day', vendor: 'Tusker Safaris', vendorOffice: 'Kimathi Street, Nairobi CBD', location: 'Amboseli National Park, Kajiado County', mapLink: 'https://maps.google.com/?q=Amboseli+National+Park', description: 'Get up close to large elephant herds with Mount Kilimanjaro as your backdrop. Includes transport, park fees and lodge accommodation.', includes: ['Park fees', 'Transport', '1 Night Lodge', 'Meals', 'Guide'], priceValue: 290, currency: 'USD', priceLabel: '$290', offPeakValue: 240, offPeakLabel: '$240', season: 'Low season: Apr-Jun', image: 'https://images.unsplash.com/photo-1631646109206-4b5616964f84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxLaWxpbWFuamFyb3xlbnwwfHx8fDE3ODMzODIwNjZ8MA&ixlib=rb-4.1.0&q=85', keywords: ['amboseli', 'elephant', 'kilimanjaro', 'safari', 'kenya', 'wildlife'] },
    { category: 'Hotel & Resort', title: 'Zanzibar Beach Resort - 4 Days', vendor: 'Blue Ocean Resort', vendorOffice: 'Nungwi, Zanzibar', location: 'Nungwi Beach, Zanzibar, Tanzania', mapLink: 'https://maps.google.com/?q=Nungwi+Beach+Zanzibar', description: 'Relax on white sand beaches. 3 nights in a beachfront resort with breakfast, airport transfers and a sunset dhow cruise.', includes: ['3 Nights Beachfront Room', 'Breakfast', 'Airport Transfers', 'Sunset Dhow Cruise'], priceValue: 490, currency: 'USD', priceLabel: '$490', offPeakValue: 390, offPeakLabel: '$390', season: 'Low season: Apr-Jun', image: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwzfHxaYW56aWJhciUyMGJlYWNofGVufDB8fHx8MTc4MzM4MjA2Nnww&ixlib=rb-4.1.0&q=85', keywords: ['zanzibar', 'beach', 'tanzania', 'holiday', 'island', 'vacation', 'resort', 'hotel'] },
    { category: 'Hotel & Resort', title: 'Diani Beach Luxury Lodge', vendor: 'Coral Coast Resorts', vendorOffice: 'Diani Beach Road, Kwale County', location: 'Diani Beach, Kenyan Coast', mapLink: 'https://maps.google.com/?q=Diani+Beach+Kenya', description: 'Oceanfront luxury lodge with pool, spa and reef access. Rate is per night including breakfast.', includes: ['Ocean-view Room', 'Breakfast', 'Pool & Spa', 'Reef Access'], priceValue: 180, currency: 'USD', priceLabel: '$180/night', offPeakValue: 140, offPeakLabel: '$140/night', season: 'Low season: May-Jun', image: 'https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHw0fHxzYWZhcmklMjBsb2RnZXxlbnwwfHx8fDE3ODMzODIwNzh8MA&ixlib=rb-4.1.0&q=85', keywords: ['diani', 'beach', 'hotel', 'lodge', 'resort', 'coast', 'kenya', 'luxury'] },
    { category: 'Car & Caravan Hire', title: '4x4 Land Cruiser Safari Car Hire', vendor: 'Nairobi Auto Rentals', vendorOffice: 'Mombasa Road, Nairobi', location: 'Pickup: Nairobi / JKIA Airport', mapLink: 'https://maps.google.com/?q=Jomo+Kenyatta+International+Airport', description: 'Fully equipped 4x4 Land Cruiser with pop-up roof, ideal for self-drive safaris. Rate per day, unlimited mileage.', includes: ['Pop-up Roof', 'Unlimited Mileage', 'Insurance', '24/7 Support'], priceValue: 120, currency: 'USD', priceLabel: '$120/day', offPeakValue: 95, offPeakLabel: '$95/day', season: 'Low season rates', image: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxzYWZhcmklMjBqZWVwfGVufDB8fHx8MTc4MzM4MjA3M3ww&ixlib=rb-4.1.0&q=85', keywords: ['car', 'hire', 'rental', '4x4', 'land cruiser', 'self drive', 'vehicle', 'jeep'] },
    { category: 'Car & Caravan Hire', title: 'Group Caravan / Overland Truck Hire', vendor: 'East Overland Co', vendorOffice: 'Karen, Nairobi', location: 'Pickup: Nairobi', mapLink: 'https://maps.google.com/?q=Karen+Nairobi', description: 'Overland truck / caravan for group sightseeing tours (up to 18 people). Includes driver and camping setup.', includes: ['Seats up to 18', 'Driver Included', 'Camping Setup', 'Cooler & Storage'], priceValue: 600, currency: 'USD', priceLabel: '$600/day', offPeakValue: 480, offPeakLabel: '$480/day', season: 'Group discounts', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxBZnJpY2FuJTIwc2FmYXJpfGVufDB8fHx8MTc4MzM4MjA2Nnww&ixlib=rb-4.1.0&q=85', keywords: ['caravan', 'overland', 'truck', 'group', 'bus', 'hire', 'sightseeing'] },
    { category: 'Light Aircraft Charter', title: 'Light Aircraft Charter (Nairobi - Mara)', vendor: 'Savanna Wings Aviation', vendorOffice: 'Wilson Airport, Nairobi', location: 'Wilson Airport to Masai Mara Airstrips', mapLink: 'https://maps.google.com/?q=Wilson+Airport+Nairobi', description: 'Skip the road trip. Scheduled and charter light aircraft flights from Wilson Airport to the Mara. Price per seat, one way.', includes: ['Per Seat One-Way', '15kg Luggage', 'Scenic Flight', 'Airstrip Transfer'], priceValue: 260, currency: 'USD', priceLabel: '$260/seat', offPeakValue: 210, offPeakLabel: '$210/seat', season: 'Low season fares', image: 'https://images.unsplash.com/photo-1586063029643-fd87377743ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxsaWdodCUyMGFpcmNyYWZ0fGVufDB8fHx8MTc4MzM4MjA3OXww&ixlib=rb-4.1.0&q=85', keywords: ['aircraft', 'plane', 'flight', 'charter', 'fly', 'aviation', 'wilson', 'mara'] },
    { category: 'Sightseeing', title: 'Nairobi City & Giraffe Centre Sightseeing Tour', vendor: 'City Explorers', vendorOffice: 'Moi Avenue, Nairobi CBD', location: 'Nairobi National Park, Giraffe Centre & City Tour', mapLink: 'https://maps.google.com/?q=Giraffe+Centre+Nairobi', description: 'Half-day guided city tour including Nairobi National Park, Giraffe Centre and the Karen Blixen Museum.', includes: ['Transport', 'Entry Fees', 'Guide', 'Bottled Water'], priceValue: 75, currency: 'USD', priceLabel: '$75', offPeakValue: 60, offPeakLabel: '$60', season: 'Daily departures', image: 'https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxNYXNhaSUyME1hcmF8ZW58MHx8fHwxNzgzMzgyMDcyfDA&ixlib=rb-4.1.0&q=85', keywords: ['nairobi', 'city', 'tour', 'sightseeing', 'giraffe', 'day trip', 'museum'] },
  ]

  const local = [
    { category: 'Matatu / Shuttle', title: 'Local Shuttle & Matatu Transport', vendor: 'Kenya Mwananchi Sacco', vendorOffice: 'Tom Mboya Street, Nairobi CBD', location: 'Daily routes across Nairobi & towns', mapLink: 'https://maps.google.com/?q=Nairobi+CBD', description: 'Daily shuttle & matatu transport across cities and towns. Frequent departures throughout the day.', includes: ['Frequent Departures', 'Seated', 'Affordable'], priceValue: 1200, currency: 'KES', priceLabel: 'KES 1,200', offPeakValue: 1000, offPeakLabel: 'KES 1,000', season: 'Off-peak fares', image: 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtYXRhdHUlMjBidXN8ZW58MHx8fHwxNzgzMzgyMDc4fDA&ixlib=rb-4.1.0&q=85', keywords: ['bus', 'matatu', 'transport', 'travel', 'ride', 'shuttle', 'commute'] },
    { category: 'Train (SGR)', title: 'SGR Train Transport (Nairobi \u2194 Mombasa)', vendor: 'Madaraka Express', vendorOffice: 'Syokimau Terminus, Nairobi', location: 'Nairobi \u2194 Mombasa railway', mapLink: 'https://maps.google.com/?q=Syokimau+SGR+Station', description: 'Fast, comfortable Standard Gauge Railway service between Nairobi and Mombasa. Book economy or first class.', includes: ['Economy / First Class', 'Reserved Seat', 'On-time', 'Scenic Route'], priceValue: 1500, currency: 'KES', priceLabel: 'KES 1,500', offPeakValue: 1000, offPeakLabel: 'KES 1,000', season: 'Economy fare', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxBZnJpY2FuJTIwc2FmYXJpfGVufDB8fHx8MTc4MzM4MjA2Nnww&ixlib=rb-4.1.0&q=85', keywords: ['train', 'sgr', 'rail', 'mombasa', 'nairobi', 'madaraka'] },
    { category: 'Taxi / Car Hire', title: 'Taxi & Car Hire', vendor: 'CBD Cabs Kenya', vendorOffice: 'Kenyatta Avenue, Nairobi CBD', location: 'Nairobi CBD & environs', mapLink: 'https://maps.google.com/?q=Kenyatta+Avenue+Nairobi', description: 'Affordable ride and car hire services within Nairobi CBD and its environs. Metered and fixed-rate options.', includes: ['Metered / Fixed Rate', 'Airport Runs', 'Daily Hire'], priceValue: 8000, currency: 'KES', priceLabel: 'KES 8,000/day', offPeakValue: 6500, offPeakLabel: 'KES 6,500/day', season: 'Daily hire rate', image: 'https://images.unsplash.com/photo-1709402606682-400133d92ab2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxzYWZhcmklMjBqZWVwfGVufDB8fHx8MTc4MzM4MjA3M3ww&ixlib=rb-4.1.0&q=85', keywords: ['taxi', 'car', 'hire', 'vehicle', 'uber', 'cab', 'ride'] },
    { category: 'Matatu / Shuttle', title: 'Nairobi CBD Commuter Matatu (Sacco)', vendor: 'Embassava Sacco', vendorOffice: 'Ambassadeur Stage, CBD', location: 'CBD to Eastlands, Westlands, Rongai routes', mapLink: 'https://maps.google.com/?q=Ambassadeur+Nairobi', description: 'Everyday commuter matatu service to and from Nairobi CBD. Peak and off-peak fares apply.', includes: ['CBD Estates', 'Peak / Off-peak Fares', 'High Frequency'], priceValue: 100, currency: 'KES', priceLabel: 'KES 100', offPeakValue: 70, offPeakLabel: 'KES 70', season: 'Off-peak fare', image: 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtYXRhdHUlMjBidXN8ZW58MHx8fHwxNzgzMzgyMDc4fDA&ixlib=rb-4.1.0&q=85', keywords: ['matatu', 'commuter', 'cbd', 'nairobi', 'eastlands', 'westlands', 'rongai', 'work'] },
    { category: 'Airport Transfer', title: 'Airport Shuttle (JKIA \u2194 CBD)', vendor: 'JKIA Shuttle Services', vendorOffice: 'JKIA Terminal 1A', location: 'JKIA Airport \u2194 Nairobi CBD', mapLink: 'https://maps.google.com/?q=Jomo+Kenyatta+International+Airport', description: 'Reliable shuttle between JKIA airport and the CBD. Fixed fare, meet & greet available.', includes: ['Fixed Fare', 'Meet & Greet', 'Luggage Space'], priceValue: 1500, currency: 'KES', priceLabel: 'KES 1,500', offPeakValue: 1200, offPeakLabel: 'KES 1,200', season: 'Shared shuttle', image: 'https://images.unsplash.com/photo-1586063029643-fd87377743ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxsaWdodCUyMGFpcmNyYWZ0fGVufDB8fHx8MTc4MzM4MjA3OXww&ixlib=rb-4.1.0&q=85', keywords: ['airport', 'jkia', 'shuttle', 'transfer', 'cbd', 'nairobi'] },
  ]

  const all = [
    ...safari.map((s) => ({ ...s, type: 'safari' })),
    ...local.map((l) => ({ ...l, type: 'local' })),
  ]

  return all.map((item) => ({ id: uuidv4(), ownerId: null, ...item, commissionRate: 5, createdAt: now }))
}

async function insertListingRow(d) {
  await q(
    `INSERT INTO listings
      (id, owner_id, type, category, title, vendor, vendor_office, location, map_link, description,
       includes, price_value, currency, price_label, off_peak_value, off_peak_label, season, image, keywords, commission_rate, created_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11::jsonb,$12,$13,$14,$15,$16,$17,$18,$19::jsonb,$20,$21)`,
    [
      d.id, d.ownerId || null, d.type, d.category, d.title, d.vendor, d.vendorOffice || '', d.location || '',
      d.mapLink || '', d.description || '', JSON.stringify(d.includes || []), d.priceValue || 0, d.currency || 'USD',
      d.priceLabel || '', d.offPeakValue || 0, d.offPeakLabel || '', d.season || '', d.image || '',
      JSON.stringify(d.keywords || []), d.commissionRate || 5, d.createdAt || new Date(),
    ]
  )
}

// Smart keyword matcher (applied in JS after SQL filter)
function matchesQuery(item, query) {
  if (!query) return true
  const s = query.toLowerCase().trim()
  const words = s.split(/\s+/)
  const haystack = [item.title, item.vendor, item.location, item.category, item.description, ...(item.keywords || [])].join(' ').toLowerCase()
  if (haystack.includes(s)) return true
  return words.some((w) => w.length > 1 && haystack.includes(w))
}

// Column map for updates
const LISTING_COLS = {
  ownerId: 'owner_id', type: 'type', category: 'category', title: 'title', vendor: 'vendor',
  vendorOffice: 'vendor_office', location: 'location', mapLink: 'map_link', description: 'description',
  includes: 'includes', priceValue: 'price_value', currency: 'currency', priceLabel: 'price_label',
  offPeakValue: 'off_peak_value', offPeakLabel: 'off_peak_label', season: 'season', image: 'image',
  keywords: 'keywords', commissionRate: 'commission_rate',
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const method = request.method
  const url = new URL(request.url)

  try {
    await ensureDb()

    // Health
    if ((route === '/' || route === '/root') && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'OSARE API running (PostgreSQL/NEON)', whatsapp: WHATSAPP_PHONE }))
    }

    // Seed sample data
    if (route === '/seed' && method === 'POST') {
      await q('DELETE FROM listings')
      const docs = seedListings()
      await Promise.all(docs.map(insertListingRow))
      return handleCORS(NextResponse.json({ inserted: docs.length }))
    }

    // ---------------- Vendor auth ----------------
    if (route === '/auth/register' && method === 'POST') {
      const body = await request.json()
      if (!body.email || !body.password) {
        return handleCORS(NextResponse.json({ error: 'email and password are required' }, { status: 400 }))
      }
      const email = String(body.email).toLowerCase().trim()
      const existing = await q('SELECT id FROM vendors WHERE email = $1', [email])
      if (existing.rows.length) {
        return handleCORS(NextResponse.json({ error: 'Email already registered' }, { status: 409 }))
      }
      const id = uuidv4()
      const row = (await q(
        `INSERT INTO vendors (id, name, company, email, phone, password_hash, created_at)
         VALUES ($1,$2,$3,$4,$5,$6, now()) RETURNING *`,
        [id, body.name || '', body.company || '', email, body.phone || '', hashPassword(body.password)]
      )).rows[0]
      const token = uuidv4()
      await q('INSERT INTO sessions (token, vendor_id, created_at) VALUES ($1,$2, now())', [token, id])
      return handleCORS(NextResponse.json({ token, vendor: cleanVendor(row) }))
    }

    if (route === '/auth/login' && method === 'POST') {
      const body = await request.json()
      const email = String(body.email || '').toLowerCase().trim()
      const row = (await q('SELECT * FROM vendors WHERE email = $1', [email])).rows[0]
      if (!row || !verifyPassword(body.password || '', row.password_hash)) {
        return handleCORS(NextResponse.json({ error: 'Invalid email or password' }, { status: 401 }))
      }
      const token = uuidv4()
      await q('INSERT INTO sessions (token, vendor_id, created_at) VALUES ($1,$2, now())', [token, row.id])
      return handleCORS(NextResponse.json({ token, vendor: cleanVendor(row) }))
    }

    if (route === '/auth/me' && method === 'GET') {
      const vendor = await getVendorFromRequest(request)
      if (!vendor) return handleCORS(NextResponse.json({ error: 'Unauthorized' }, { status: 401 }))
      return handleCORS(NextResponse.json({ vendor: cleanVendor(vendor) }))
    }

    // Vendor's own listings
    if (route === '/my-listings' && method === 'GET') {
      const vendor = await getVendorFromRequest(request)
      if (!vendor) return handleCORS(NextResponse.json({ error: 'Unauthorized' }, { status: 401 }))
      const rows = (await q('SELECT * FROM listings WHERE owner_id = $1 ORDER BY created_at DESC', [vendor.id])).rows
      return handleCORS(NextResponse.json(rows.map(rowToListing)))
    }

    // Vendor revenue stats
    if (route === '/my-stats' && method === 'GET') {
      const vendor = await getVendorFromRequest(request)
      if (!vendor) return handleCORS(NextResponse.json({ error: 'Unauthorized' }, { status: 401 }))
      const myListings = (await q('SELECT id FROM listings WHERE owner_id = $1', [vendor.id])).rows
      const ids = myListings.map((r) => r.id)
      let leadRows = []
      if (ids.length) {
        leadRows = (await q('SELECT * FROM leads WHERE listing_id = ANY($1::uuid[]) ORDER BY created_at DESC', [ids])).rows
      }
      const leads = leadRows.map(rowToLead)
      let commissionOwedUSD = 0
      for (const l of leads) {
        const usd = l.currency === 'KES' ? l.priceValue / 150 : l.priceValue
        commissionOwedUSD += usd * COMMISSION_RATE
      }
      return handleCORS(NextResponse.json({
        listings: myListings.length,
        leads: leads.length,
        commissionOwedUSD: Math.round(commissionOwedUSD * 100) / 100,
        recentLeads: leads.slice(0, 20),
      }))
    }

    // ---------------- Listings ----------------
    if (route === '/listings' && method === 'GET') {
      const type = url.searchParams.get('type')
      const category = url.searchParams.get('category')
      const search = url.searchParams.get('q')

      const clauses = []
      const args = []
      if (type) { args.push(type); clauses.push(`type = $${args.length}`) }
      if (category && category !== 'All') { args.push(category); clauses.push(`category = $${args.length}`) }
      const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : ''
      const rows = (await q(`SELECT * FROM listings ${where} ORDER BY created_at DESC LIMIT 500`, args)).rows
      let items = rows.map(rowToListing)
      if (search) items = items.filter((it) => matchesQuery(it, search))
      return handleCORS(NextResponse.json(items))
    }

    if (route === '/listings' && method === 'POST') {
      const body = await request.json()
      if (!body.title || !body.type) {
        return handleCORS(NextResponse.json({ error: 'title and type are required' }, { status: 400 }))
      }
      const vendorAuth = await getVendorFromRequest(request)
      const doc = {
        id: uuidv4(),
        ownerId: vendorAuth ? vendorAuth.id : (body.ownerId || null),
        type: body.type,
        category: body.category || 'General',
        title: body.title,
        vendor: body.vendor || vendorAuth?.company || vendorAuth?.name || 'Unknown Vendor',
        vendorOffice: body.vendorOffice || '',
        location: body.location || '',
        mapLink: body.mapLink || '',
        description: body.description || '',
        includes: Array.isArray(body.includes) ? body.includes : (body.includes ? String(body.includes).split(',').map((s) => s.trim()).filter(Boolean) : []),
        priceValue: Number(body.priceValue) || 0,
        currency: body.currency || 'USD',
        priceLabel: body.priceLabel || '',
        offPeakValue: Number(body.offPeakValue) || 0,
        offPeakLabel: body.offPeakLabel || '',
        season: body.season || '',
        image: body.image || 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800',
        keywords: Array.isArray(body.keywords) ? body.keywords : (body.keywords ? String(body.keywords).split(',').map((s) => s.trim()).filter(Boolean) : []),
        commissionRate: 5,
        createdAt: new Date(),
      }
      await insertListingRow(doc)
      return handleCORS(NextResponse.json(doc))
    }

    // Update listing - /listings/:id
    if (path[0] === 'listings' && path[1] && method === 'PUT') {
      const id = path[1]
      const body = await request.json()
      const sets = []
      const args = []
      for (const [k, v] of Object.entries(body)) {
        const col = LISTING_COLS[k]
        if (!col) continue
        if (k === 'includes' || k === 'keywords') {
          const arr = Array.isArray(v) ? v : String(v).split(',').map((s) => s.trim()).filter(Boolean)
          args.push(JSON.stringify(arr))
          sets.push(`${col} = $${args.length}::jsonb`)
        } else {
          args.push(v)
          sets.push(`${col} = $${args.length}`)
        }
      }
      if (!sets.length) {
        return handleCORS(NextResponse.json({ error: 'No valid fields to update' }, { status: 400 }))
      }
      args.push(id)
      const rows = (await q(`UPDATE listings SET ${sets.join(', ')} WHERE id = $${args.length} RETURNING *`, args)).rows
      if (!rows.length) return handleCORS(NextResponse.json({ error: 'Not found' }, { status: 404 }))
      return handleCORS(NextResponse.json(rowToListing(rows[0])))
    }

    // Delete listing - /listings/:id
    if (path[0] === 'listings' && path[1] && method === 'DELETE') {
      const id = path[1]
      await q('DELETE FROM listings WHERE id = $1', [id])
      return handleCORS(NextResponse.json({ deleted: true, id }))
    }

    // ---------------- Leads ----------------
    if (route === '/leads' && method === 'POST') {
      const body = await request.json()
      let listing = null
      if (body.listingId) {
        listing = (await q('SELECT * FROM listings WHERE id = $1', [body.listingId])).rows[0] || null
      }
      const title = listing?.title || body.title || 'a listing'
      const priceLabel = listing?.price_label || body.priceLabel || ''
      const priceValue = listing ? Number(listing.price_value) : (Number(body.priceValue) || 0)
      const currency = listing?.currency || body.currency || 'USD'
      const vendor = listing?.vendor || body.vendor || ''
      const category = listing?.category || body.category || ''
      const type = listing?.type || body.type || ''
      const commission = Math.round(priceValue * COMMISSION_RATE * 100) / 100

      const id = uuidv4()
      await q(
        `INSERT INTO leads (id, listing_id, listing_title, vendor, category, type, price_label, price_value, currency, commission, channel, created_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,'whatsapp', now())`,
        [id, body.listingId || null, title, vendor, category, type, priceLabel, priceValue, currency, commission]
      )
      const message = `Hello OSARE, I'd like to book: ${title}${priceLabel ? ' (' + priceLabel + ')' : ''}${vendor ? ' with ' + vendor : ''}. [Ref: ${id.slice(0, 8)}]`
      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
      return handleCORS(NextResponse.json({
        id, listingId: body.listingId || null, listingTitle: title, vendor, category, type,
        priceLabel, priceValue, currency, commission, channel: 'whatsapp', whatsappUrl,
      }))
    }

    if (route === '/leads' && method === 'GET') {
      const rows = (await q('SELECT * FROM leads ORDER BY created_at DESC LIMIT 500')).rows
      return handleCORS(NextResponse.json(rows.map(rowToLead)))
    }

    // ---------------- Dashboard stats ----------------
    if (route === '/stats' && method === 'GET') {
      const listingRows = (await q('SELECT type FROM listings')).rows
      const leadRows = (await q('SELECT * FROM leads')).rows
      const leads = leadRows.map(rowToLead)

      const totalListings = listingRows.length
      const safariCount = listingRows.filter((l) => l.type === 'safari').length
      const localCount = listingRows.filter((l) => l.type === 'local').length
      const totalLeads = leads.length

      let estRevenueUSD = 0
      const leadsByCategory = {}
      const leadsByType = { safari: 0, local: 0 }
      for (const l of leads) {
        const usd = l.currency === 'KES' ? l.priceValue / 150 : l.priceValue
        estRevenueUSD += usd * COMMISSION_RATE
        leadsByCategory[l.category || 'Other'] = (leadsByCategory[l.category || 'Other'] || 0) + 1
        if (l.type === 'safari') leadsByType.safari += 1
        else if (l.type === 'local') leadsByType.local += 1
      }

      return handleCORS(NextResponse.json({
        totalListings, safariCount, localCount, totalLeads,
        estRevenueUSD: Math.round(estRevenueUSD * 100) / 100,
        commissionRate: 5,
        leadsByCategory: Object.entries(leadsByCategory).map(([name, value]) => ({ name, value })),
        leadsByType,
      }))
    }

    return handleCORS(NextResponse.json({ error: `Route ${route} not found` }, { status: 404 }))
  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json({ error: 'Internal server error', detail: String(error) }, { status: 500 }))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute
>>>>>>> Stashed changes
