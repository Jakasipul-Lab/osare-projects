'use client'
import { useEffect, useState, useCallback } from 'react'
import {
  Search, MapPin, Menu, X, Compass, Bus, Plane, Car, Hotel, Mountain,
  Binoculars, Building2, Phone, ShieldCheck, TrendingUp, Percent, Users,
  Leaf, Sparkles, ArrowRight, Trash2, Plus, Loader2, MessageCircle, Tag, ExternalLink, Globe, UserCog
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
const HERO = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxBZnJpY2FuJTIwc2FmYXJpfGVufDB8fHx8MTc4MzM4MjA2Nnww&ixlib=rb-4.1.0&q=85'
const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'safari', label: 'Safari' },
  { key: 'local', label: 'Local' },
  { key: 'vendors', label: 'Vendors', href: '/vendors' },
  { key: 'advertise', label: 'Advertise', href: '/advertise' },
  { key: 'about', label: 'About' }
]
const SAFARI_CATS = ['All', 'Safari Package', 'Kilimanjaro Climb', 'Hotel & Resort', 'Car & Caravan Hire', 'Light Aircraft Charter', 'Sightseeing']
const LOCAL_CATS = ['All', 'Matatu / Shuttle', 'Train (SGR)', 'Taxi / Car Hire', 'Airport Transfer']
const QUICK_DISCOVERY = [
  { label: 'Masai Mara', query: 'Mara' },
  { label: 'Kilimanjaro', query: 'Kilimanjaro' },
  { label: 'SGR Train', query: 'Train' },
  { label: 'Luxury Hotels', query: 'Hotel' },
  { label: '4x4 Hire', query: 'Car' },
  { label: 'Air Charters', query: 'Aircraft' }
]
const VALUE_CARDS = [
  {
    icon: <TrendingUp className="h-7 w-7 text-[#f97316]" />,
    title: 'Discovery Engine',
    desc: 'Search 39+ verified tour operators and transit providers across East Africa in one place.'
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-[#1e3a8a]" />,
    title: 'Verified Vendors',
    desc: 'Every listing is manually verified. Book direct with confidence \u2014 no hidden middlemen.'
  },
  {
    icon: <Leaf className="h-7 w-7 text-emerald-500" />,
    title: 'Free Local Info',
    desc: 'Local commuter routes, boarding points and official prices \u2014 free forever, no booking needed.'
  }
]
function getCatIcon(cat) {
  if (/kilimanjaro/i.test(cat)) return <Mountain className="h-4 w-4" />
  if (/hotel|resort/i.test(cat)) return <Hotel className="h-4 w-4" />
  if (/car|caravan/i.test(cat)) return <Car className="h-4 w-4" />
  if (/aircraft/i.test(cat)) return <Plane className="h-4 w-4" />
  if (/sightseeing/i.test(cat)) return <Binoculars className="h-4 w-4" />
  if (/train/i.test(cat)) return <Bus className="h-4 w-4" />
  if (/taxi/i.test(cat)) return <Car className="h-4 w-4" />
  if (/matatu|shuttle/i.test(cat)) return <Bus className="h-4 w-4" />
  if (/airport/i.test(cat)) return <Plane className="h-4 w-4" />
  return <Compass className="h-4 w-4" />
}
function ListingCard({ item, onBook, booking }) {
  const isSafari = item.type === 'safari'
  const accentColor = isSafari ? '#f97316' : '#1e3a8a'
  
  const handleAction = () => {
    if (isSafari) {
      onBook(item)
    } else {
      if (item.vendorUrl) {
        window.open(item.vendorUrl, '_blank')
      } else {
        toast.info(`Contact ${item.vendor} at ${item.vendorContact} to book.`, {
          description: "This is a free informational service."
        })
      }
    }
  }
  return (
    <Card className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white">
      <div className="relative h-52 w-full overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        <Badge className="absolute left-3 top-3 gap-1 border-0 text-white shadow font-bold" style={{ backgroundColor: accentColor }}>
          {getCatIcon(item.category)} {item.category}
        </Badge>
        {!isSafari && (
          <Badge className="absolute right-3 top-3 bg-emerald-100 text-emerald-700 border-0 font-bold">
            Free Info
          </Badge>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
        <p className="mt-1 text-sm font-semibold flex items-center gap-1" style={{ color: accentColor }}>
          <ShieldCheck className="h-3.5 w-3.5" /> {isSafari ? 'Verified Vendor' : 'Transit Operator'}: {item.vendor}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 border-y border-slate-50 py-3">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-500">Contact</p>
            <p className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
               <Phone className="h-3 w-3" /> {item.vendorContact || 'Check Official Site'}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-500">{isSafari ? 'Primary Hub' : 'Boarding At'}</p>
            <p className="flex items-center gap-1.5 text-xs text-slate-600 font-medium line-clamp-1">
               <MapPin className="h-3 w-3" /> {item.boardingPoint || item.location}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600 line-clamp-2 leading-relaxed">{item.description}</p>
        <div className="mt-auto pt-5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900">{item.priceLabel}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isSafari ? 'Starting from' : 'Official Price'}</span>
          </div>
          <Button 
            onClick={handleAction}
            disabled={booking === item.id}
            className="gap-2 px-6 py-5 font-bold shadow-lg transition-all active:scale-95"
            style={{ backgroundColor: accentColor }}
          >
            {booking === item.id ? <Loader2 className="h-4 w-4 animate-spin" /> : (isSafari ? <MessageCircle className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />)}
            {isSafari ? 'Book Now' : 'Check Site'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
function TierExplorer({ type, q = "" }) {
  const [items, setItems] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [booking, setBooking] = useState(null)
  const [activeCat, setActiveCat] = useState('All')
  const [search, setSearch] = useState(q)
  const cats = type === 'safari' ? SAFARI_CATS : LOCAL_CATS
  // Sync local search state when the q prop changes (e.g. chip click from HomeView)
  useEffect(() => { setSearch(q) }, [q])
  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/listings?type=${type}${q ? `&q=${encodeURIComponent(q)}` : ''}`)
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (e) { toast.error("Search unavailable") }
    finally { setLoading(false) }
  }, [type, q])
  useEffect(() => { load() }, [load])
  useEffect(() => {
    let f = items
    if (activeCat !== 'All') f = f.filter(it => it.category === activeCat)
    if (search) {
      const s = search.toLowerCase()
      f = f.filter(it =>
        
        it.title.toLowerCase().includes(s) ||
(it.location || '').toLowerCase().includes(s) ||
(it.description || '').toLowerCase().includes(s)
)
    }
    setFiltered(f)
  }, [items, activeCat, search])
  const handleBook = async (item) => {
    setBooking(item.id)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId: item.id, listingTitle: item.title, vendor: item.vendor, priceValue: item.priceValue })
      })
      const data = await res.json()
      if (data.whatsappUrl) window.open(data.whatsappUrl, '_blank')
    } catch (e) { toast.error("Booking service offline") }
    finally { setBooking(null) }
  }
  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900">
          {type === 'safari' ? 'Safari Discovery' : 'Local Transit Hub'}
        </h2>
        {type === 'local' && (
          <p className="mt-2 text-sm font-bold text-emerald-600 flex items-center gap-1.5">
            <Leaf className="h-4 w-4" />
            Free informational service \u2014 find routes, prices and where to board. No booking or payment required.
          </p>
        )}
      </div>
      {/* Search bar */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={type === 'safari' ? 'Search destinations, operators\u2026' : 'Search routes, services\u2026'}
          className="pl-9 bg-slate-50 border-slate-200"
        />
      </div>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {cats.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold transition-all border ${
              activeCat === cat
                ? (type === 'safari'
                    ? 'bg-[#f97316] text-white border-[#f97316]'
                    : 'bg-[#1e3a8a] text-white border-[#1e3a8a]')
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
            }`}
          >
            {cat !== 'All' && getCatIcon(cat)} {cat}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-slate-200" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-lg">No results found.</p>
          <button
            onClick={() => { setActiveCat('All'); setSearch('') }}
            className="mt-4 text-sm font-bold text-blue-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(it => (
            <ListingCard key={it.id} item={it} onBook={handleBook} booking={booking} />
          ))}
        </div>
      )}
    </div>
  )
}
function HomeView({ go }) {
  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={HERO} alt="Hero" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-5 py-24 md:py-40 text-white">
          <h1 className="text-5xl font-black md:text-7xl tracking-tighter">
            DISCOVER EAST AFRICA
          </h1>
          <p className="mt-8 text-lg font-medium text-slate-300 max-w-xl leading-relaxed">
            Ultimate B2B platform connecting global travelers with verified local operators.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Button onClick={() => go('safari')} size="lg" className="bg-[#f97316] hover:bg-[#ea580c] px-8 py-7 text-lg font-black">
              Start Discovery
            </Button>
            <Button onClick={() => go('local')} size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-7 text-lg font-black">
              Local Transit
            </Button>
          </div>
          {/* Quick Discovery chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {QUICK_DISCOVERY.map(q => (
              <button
                key={q.label}
                onClick={() => go('safari', q.query)}
                className="bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full backdrop-blur-sm transition-all"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Value Cards */}
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {VALUE_CARDS.map((vc, i) => {
            const handleCardClick = () => {
              if (vc.title === 'Free Local Info') go('local')
              else go('safari')
            }
            return (
              <Card
                key={i}
                onClick={handleCardClick}
                className="border-slate-100 hover:shadow-lg transition-all cursor-pointer active:scale-[0.98]"
              >
                <CardContent className="p-6 flex flex-col gap-3">
                  <div>{vc.icon}</div>
                  <h3 className="text-lg font-black text-slate-900">{vc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{vc.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      {/* Advertise Here Banner */}
      <div className="mx-auto max-w-7xl px-5 pb-8">
        <div className="w-full rounded-2xl bg-gradient-to-r from-[#1e3a8a] to-[#f97316] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-black">Want to feature your business?</h3>
            <p className="mt-2 text-lg font-medium text-white/90">Advertise on OSARE and reach thousands of travelers.</p>
          </div>
          <a
            href="/advertise"
            className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] font-black px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-slate-100 transition-all active:scale-95 whitespace-nowrap"
          >
            <Sparkles className="h-5 w-5" /> Post Your Ad
          </a>
        </div>
      </div>
    </div>
  )
}
function AboutView() {
  const branches = [
    { region: 'Kisumu Headquarters', name: 'Mss Jacqueline Susan Nakinson', role: 'Officer-in-Charge', address: 'Kisumu City, Kenya', country: 'Kenya' },
    { region: 'Kenya - Nairobi', name: 'Kenneth Oketch', role: 'Branch Manager', country: 'Kenya' },
    { region: 'Uganda - Kampala', name: 'Brian Omollo', role: 'Branch Manager', country: 'Uganda' },
    { region: 'Tanzania - Dar es Salaam', name: 'Johnson Yongo', role: 'Branch Manager', country: 'Tanzania' },
    { region: 'Germany Branch', name: 'Brunnenstraße 48', role: '34537, Bad Wildungen', country: 'Germany' },
  ];

  return (
    <main>
      {/* content */}
    </main>
  );
}

// ----------------------------------------------------------------------
// AboutView sits safely at the very bottom, completely outside of Page()
// ----------------------------------------------------------------------
function AboutView() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="text-4xl font-black text-slate-900 tracking-tight">About OSARE</h1>
      <p className="mt-8 text-xl font-medium leading-relaxed text-slate-600">
        OSARE is a regional travel access and logistics platform designed to connect users to railway, bus, and private transport systems across East Africa.
      </p>
      <p className="mt-4 text-xl font-medium leading-relaxed text-slate-600">
        The platform acts as a structured routing gateway, allowing users to access existing transport systems through a unified entry point while enabling tracking, analysis, and scalable business integration.
      </p>

      {/* FOUNDER & HQ PROFILE */}
      <div className="mt-20 p-8 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
        <div className="h-32 w-32 rounded-2xl bg-white shadow-lg flex-shrink-0 overflow-hidden">
          <img src="https://github.com/Jakasipul-Lab.png" alt="Osare Nakinson" className="h-full w-full object-cover" />
        </div>
        <div>
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">Founder & Lead Developer</span>
          <h2 className="text-2xl font-black text-slate-900">Osare Nakinson</h2>
          <p className="mt-4 text-slate-600 font-medium leading-relaxed">
            Driving innovation in East African mobility through technology-first logistics and strategic transport partnerships.
          </p>
      </div>
    </div>
  
      <div className="mt-24">
        <h2 className="text-2xl font-black text-slate-900">Regional Branches</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <Card key={i} className="border-slate-200">
              <CardContent className="p-5">
                <p className="text-xs font-bold text-blue-600 uppercase mb-1">{b.region}</p>
                <h4 className="font-bold">{b.name}</h4>
                <p className="text-sm text-slate-500">{b.role}</p>
                {b.address && <p className="text-xs text-slate-400 mt-0.5">{b.address}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-24 grid gap-12 sm:grid-cols-2 border-t border-slate-100 pt-16">
        <div>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-4">Our Mission</h3>
          <p className="text-slate-500 font-medium leading-relaxed">Empower local vendors with a global platform and fair commission fees.</p>
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-4">Contact Info</h3>
          <p className="text-slate-500 font-medium">Kisumu Headquarters, Kenya<br/>+254 758 378 729</p>
        </div>
      </div>
    </div>
  )
}
  const [view, setView] = useState('home');
  const [params, setParams] = useState({ type: 'safari' });
  const go = (type, q = "") => { setParams({ type, q }); setView(type); window.scrollTo(0, 0) };
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Toaster position="top-center" />
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => setView('home')} className="flex items-center gap-2"><Compass className="h-6 w-6 text-[#1e3a8a]" /><span className="text-xl font-black">OSARE</span></button>
          <div className="hidden md:flex gap-8 items-center">
            {NAV.map((n) => (
              n.href
                ? <a href={n.href} key={n.key} className="text-sm font-bold transition-colors hover:text-[#f97316]">{n.label}</a>
                : <button onClick={() => setView(n.key)} key={n.key} className="text-sm font-bold transition-colors hover:text-[#f97316]">{n.label}</button>
            ))}
           import React, { useState, useEffect, useCallback } from 'react'
import { Mountain, Hotel, Car, Plane, Binoculars, Bus, Compass } from 'lucide-react'

// ==========================================
// CONSTANTS & HELPERS
// ==========================================
const HERO =
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=srgb&fm=jpg&q=85";

const LOCAL_HERO =
  "https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?crop=entropy&cs=srgb&fm=jpg&q=85";

git add .
git commit -m "Fix stray JSX tag before NAV constant"
git push origin main
  { key: 'safari', label: 'Safari' },
  { key: 'local', label: 'Local Transit' },
  { key: 'about', label: 'About' },
  { key: 'vendor', label: 'Vendor Portal' },
];

const SAFARI_CATS = ['All', 'Safari Package', 'Kilimanjaro Climb', 'Hotel & Resort', 'Car & Caravan Hire', 'Light Aircraft Charter', 'Sightseeing'];
const LOCAL_CATS = ['All', 'Matatu / Shuttle', 'Train (SGR)', 'Taxi / Car Hire', 'Airport Transfer'];
const CHART_COLORS = ['#f97316', '#1e3a8a', '#3b82f6', '#10b981', '#eab308', '#8b5cf6', '#ef4444'];

const catIcon = (cat) => {
  if (/kilimanjaro/i.test(cat)) return <Mountain className="h-4 w-4" />;
  if (/hotel|resort/i.test(cat)) return <Hotel className="h-4 w-4" />;
  if (/car|caravan/i.test(cat)) return <Car className="h-4 w-4" />;
  if (/aircraft/i.test(cat)) return <Plane className="h-4 w-4" />;
  if (/sightseeing/i.test(cat)) return <Binoculars className="h-4 w-4" />;
  if (/train/i.test(cat)) return <Bus className="h-4 w-4" />;
  if (/taxi/i.test(cat)) return <Car className="h-4 w-4" />;
  if (/matatu|shuttle/i.test(cat)) return <Bus className="h-4 w-4" />;
  if (/airport/i.test(cat)) return <Plane className="h-4 w-4" />;
  return <Compass className="h-4 w-4" />;
};

// ---------------------------------------------------------------------------
// Sub-Components Placeholders (Ensure these are defined in your file)
// ---------------------------------------------------------------------------
const HomeView = ({ go }) => <div className="p-8 text-center">Home View Content</div>;
const TierExplorer = ({ type, q }) => <div className="p-8 text-center">Explorer View: {type}</div>;
const AboutView = () => <div className="p-8 text-center">About View Content</div>;

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function Page() {
  const [view, setView] = useState('home');
  const [params, setParams] = useState({ type: 'safari', q: '' });

  const go = (targetView, newParams = {}) => {
    setView(targetView);
    setParams(prev => ({ ...prev, ...newParams }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => go('home')}>
              <Mountain className="h-6 w-6 text-[#1e3a8a]" />
              <span className="font-bold text-lg text-slate-900">OSARE Safaries</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => go('safari')} className="bg-[#1e3a8a] text-white font-bold px-4 py-2 rounded-lg text-sm">
                Discovery
              </button>
            </div>
          </div>
        </nav>

        {/* Dynamic Views */}
        {view === 'home' && <HomeView go={go} />}
        {view === 'explorer' && <TierExplorer type={params.type} />}
        {view === 'safari' && <TierExplorer type="safari" q={params.q} />}
        {view === 'local' && <TierExplorer type="local" q={params.q} />}
        {view === 'about' && <AboutView />}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-16 mt-20">
        <div className="mx-auto max-w-7xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">Copyright 2026 OSARE - easafariroutes.com. Built by nakinson osare.</p>
          <div className="flex gap-6">
            <a href="/vendor-portal" className="text-xs font-bold text-slate-500 hover:text-[#1e3a8a] transition-colors">Vendor Portal</a>
            <a href="/admin" className="text-xs font-bold text-slate-500 hover:text-[#1e3a8a] transition-colors">Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
// ==========================================
// 2. CONSTANTS & HELPERS
// ==========================================
const HERO =
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=srgb&fm=jpg&q=85";

const LOCAL_HERO =
  "https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?crop=entropy&cs=srgb&fm=jpg&q=85";

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'safari', label: 'Safari' },
  { key: 'local', label: 'Local Transit' },
  { key: 'about', label: 'About' },
  { key: 'vendor', label: 'Vendor Portal' },
];

const SAFARI_CATS = ['All', 'Safari Package', 'Kilimanjaro Climb', 'Hotel & Resort', 'Car & Caravan Hire', 'Light Aircraft Charter', 'Sightseeing']
const LOCAL_CATS = ['All', 'Matatu / Shuttle', 'Train (SGR)', 'Taxi / Car Hire', 'Airport Transfer']
const CHART_COLORS = ['#f97316', '#1e3a8a', '#3b82f6', '#10b981', '#eab308', '#8b5cf6', '#ef4444']

const catIcon = (cat) => {
  if (/kilimanjaro/i.test(cat)) return <Mountain className="h-4 w-4" />
  if (/hotel|resort/i.test(cat)) return <Hotel className="h-4 w-4" />
  if (/car|caravan/i.test(cat)) return <Car className="h-4 w-4" />
  if (/aircraft/i.test(cat)) return <Plane className="h-4 w-4" />
  if (/sightseeing/i.test(cat)) return <Binoculars className="h-4 w-4" />
  if (/train/i.test(cat)) return <Bus className="h-4 w-4" />
  if (/taxi/i.test(cat)) return <Car className="h-4 w-4" />
  if (/matatu|shuttle/i.test(cat)) return <Bus className="h-4 w-4" />
  if (/airport/i.test(cat)) return <Plane className="h-4 w-4" />
  return <Compass className="h-4 w-4" />
}

// ---------------------------------------------------------------------------
// Sub-Components
// ---------------------------------------------------------------------------
function ListingCard({ item, onBook, booking }) {
  const accent = item.type === 'safari' ? '#f97316' : '#1e3a8a'
  return (
    <Card className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-52 w-full overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        <Badge className="absolute left-3 top-3 gap-1 border-0 text-white shadow" style={{ backgroundColor: accent }}>
          {catIcon(item.category)} {item.category}
        </Badge>
        {item.offPeakLabel ? (
          <Badge className="absolute right-3 top-3 gap-1 bg-emerald-600 text-white border-0 shadow">
            <Tag className="h-3 w-3" /> Off-peak {item.offPeakLabel}
          </Badge>
        ) : null}
      </div>
      <CardContent className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
        <p className="mt-1 text-sm font-semibold" style={{ color: accent }}>By {item.vendor}</p>
        <a href={item.mapLink} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700">
          <MapPin className="h-3 w-3" /> {item.location}
        </a>
        <p className="mt-3 text-sm text-slate-600 line-clamp-3">{item.description}</p>
        {item.includes?.length ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.includes.slice(0, 4).map((inc, i) => (
              <span key={i} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">{inc}</span>
            ))}
          </div>
        ) : null}
        <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-3">
          <div>
            <p className="text-2xl font-extrabold text-emerald-600">{item.priceLabel}</p>
            {item.season ? <p className="text-[11px] text-slate-400">{item.season}</p> : null}
          </div>
          <p className="flex items-center gap-1 text-[11px] text-slate-400"><Building2 className="h-3 w-3" /> {item.vendorOffice}</p>
        </div>
        <Button
          onClick={() => onBook(item)}
          disabled={booking === item.id}
          className="mt-4 w-full gap-2 bg-[#25d366] text-white hover:bg-[#1ebe5b]"
        >
          {booking === item.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
          Book via WhatsApp
        </Button>
      </CardContent>
    </Card>
  )
}// ---------------------------------------------------------------------------
// Search + results section (shared by Safari & Local)
// ---------------------------------------------------------------------------
function TierExplorer({ type }) {
  const isSafari = type === 'safari'
  const cats = isSafari ? SAFARI_CATS : LOCAL_CATS
  const accent = isSafari ? '#f97316' : '#1e3a8a'
  
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [booking, setBooking] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ type })
      if (q) params.set('q', q)
      if (cat && cat !== 'All') params.set('category', cat)
      const res = await fetch(`/api/listings?${params.toString()}`)
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (e) {
      toast.error('Failed to load listings')
    } finally {
      setLoading(false)
    }
  }, [type, q, cat])

  useEffect(() => {
    load()
  }, [load])

  const handleBook = async (item) => {
    setBooking(item.id)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId: item.id })
      })
      const data = await res.json()
      toast.success('Opening WhatsApp to complete your booking...')
      window.open(data.whatsappUrl, '_blank')
    } catch (e) {
      toast.error('Could not start booking')
    } finally {
      setBooking(null)
    }
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative h-64 w-full overflow-hidden">
        <img src={isSafari ? HERO : LOCAL_HERO} alt="banner" className="h-full w-full object-cover" />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: isSafari 
              ? 'linear-gradient(135deg, rgba(249,115,22,.85), rgba(30,58,138,.7))' 
              : 'linear-gradient(135deg, rgba(30,58,138,.9), rgba(59,130,246,.75))' 
          }} 
        />
        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-center px-5 text-white">
          <h1 className="text-3xl font-extrabold md:text-4xl">
            {isSafari ? 'Tourist Assistance — East Africa' : 'Local Commute — Nairobi & Beyond'}
          </h1>
          <p className="mt-2 max-w-2xl text-white/90">
            {isSafari 
              ? 'Safaris, Kilimanjaro climbs, hotels, car & aircraft hire — compare and book instantly.' 
              : 'Compare matatus, SGR trains, taxis & airport shuttles across Nairobi CBD and its environs.'}
          </p>
        </div>
      </div>

      {/* Search bar */}
      <div className="mx-auto -mt-8 max-w-4xl px-5">
        <Card className="border-slate-200 shadow-lg">
          <CardContent className="flex flex-col gap-3 p-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && load()}
                placeholder={isSafari ? 'e.g. Mara safari, Kilimanjaro, car hire, Zanzibar...' : 'e.g. SGR train, matatu, taxi, airport...'}
                className="h-12 pl-10 text-base"
              />
            </div>
            <Select value={cat} onValueChange={setCat}>
              <SelectTrigger className="h-12 md:w-56"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                {cats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button onClick={load} className="h-12 gap-2 px-6 text-white" style={{ backgroundColor: accent }}>
              <Search className="h-4 w-4" /> Search
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {loading ? 'Searching…' : `${items.length} option${items.length === 1 ? '' : 's'} found`}
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
            No matches found. Try broader terms like {isSafari ? '"safari", "beach", "hotel"' : '"train", "taxi", "matatu"'}.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => <ListingCard key={item.id} item={item} onBook={handleBook} booking={booking} />)}
          </div>
        )}
      </div>
    </div>
  )
}
// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------
function Home({ go }) {
  const [q, setQ] = useState('')
  const [tier, setTier] = useState('safari')

  const search = () => {
    go(tier, q)
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative min-h-[560px] w-full overflow-hidden">
        <img src={HERO} alt="hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/85 via-[#1e3a8a]/60 to-[#f97316]/70" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center text-white">
          <Badge className="mb-4 gap-1 border-white/30 bg-white/15 text-white backdrop-blur">
            <Sparkles className="h-3 w-3" /> Free information assistant • Book direct
          </Badge>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            OSARE — East Africa<br className="hidden md:block" /> Safari Routes & Transit
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Everything a tourist or local needs at their fingertips. Compare safaris, Kilimanjaro climbs, hotels, car & aircraft hire — and Nairobi transit — then book direct. What you see is what you get.
          </p>
          {/* Tier toggle + search */}
          <div className="mt-8 w-full max-w-2xl">
            <div className="mb-3 flex justify-center gap-3">
              <button 
                onClick={() => setTier('safari')} 
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${tier === 'safari' ? 'bg-[#f97316] text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                Tourist Assistance
              </button>
              <button 
                onClick={() => setTier('local')} 
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${tier === 'local' ? 'bg-white text-[#1e3a8a]' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                Local Commute
              </button>
            </div>
            <div className="flex gap-2 rounded-2xl bg-white p-2 shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && search()}
                  placeholder={tier === 'safari' ? 'Mara migration, Kilimanjaro, Zanzibar, car hire…' : 'Nairobi to Mombasa, matatu, taxi, SGR…'}
                  className="h-12 border-0 pl-10 text-base text-slate-900 focus-visible:ring-0"
                />
              </div>
              <Button onClick={search} className="h-12 gap-2 px-6 text-white" style={{ backgroundColor: tier === 'safari' ? '#f97316' : '#1e3a8a' }}>
                Search <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Two tiers */}
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl font-extrabold text-slate-900">Two platforms. One trusted hub.</h2>
        <p className="mt-2 text-center text-slate-500">Choose your journey.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <button onClick={() => go('safari')} className="group relative h-72 overflow-hidden rounded-2xl text-left shadow-lg">
            <img src={HERO} alt="safari" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <Badge className="mb-2 gap-1 border-0 bg-[#f97316] text-white"><Compass className="h-3 w-3" /> Tier 1</Badge>
              <h3 className="text-2xl font-bold">Safari & Tourism</h3>
              <p className="mt-1 text-sm text-white/85">Mara migration, Kilimanjaro, hotels, car & aircraft hire, sightseeing.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-300">Explore safaris <ArrowRight className="h-4 w-4" /></span>
            </div>
          </button>
          <button onClick={() => go('local')} className="group relative h-72 overflow-hidden rounded-2xl text-left shadow-lg">
            <img src={LOCAL_HERO} alt="local" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <Badge className="mb-2 gap-1 border-0 bg-[#1e3a8a] text-white"><Bus className="h-3 w-3" /> Tier 2</Badge>
              <h3 className="text-2xl font-bold">Local Commute</h3>
              <p className="mt-1 text-sm text-white/85">Nairobi CBD transit: matatus, SGR trains, taxis & airport shuttles.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-300">Find transit <ArrowRight className="h-4 w-4" /></span>
            </div>
          </button>
        </div>
      </div>

      {/* Value props */}
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">Why OSARE</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: <ShieldCheck className="h-6 w-6" />, t: 'Trusted vendors', d: 'Verified operators with office & location shown.' },
              { icon: <Percent className="h-6 w-6" />, t: 'Free for tourists', d: 'You pay nothing extra. Vendors pay us 5%, not you.' },
              { icon: <TrendingUp className="h-6 w-6" />, t: 'Off-peak prices', d: 'Low-season deals surfaced automatically.' },
              { icon: <MessageCircle className="h-6 w-6" />, t: 'Book on WhatsApp', d: 'One tap to reach the vendor and confirm.' },
            ].map((f, i) => (
              <Card key={i} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">{f.icon}</div>
                  <h3 className="mt-4 font-bold text-slate-900">{f.t}</h3>
                  <p className="mt-1 text-sm text-slate-500">{f.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
function About() {
  const branches = [
    { region: 'Kisumu Headquarters', name: 'Mrs Jacqueline Susan Nakinson', role: 'Officer-in-Charge', country: 'Kenya' },
    { region: 'Kenya — Nairobi', name: 'Kenneth Oketch', role: 'Branch Manager', country: 'Kenya' },
    { region: 'Uganda — Kampala', name: 'Brian Omollo', role: 'Branch Manager', country: 'Uganda' },
    { region: 'Tanzania — Dar es Salaam', name: 'Johnson Yongo', role: 'Branch Manager', country: 'Tanzania' },
    { region: 'Germany Branch', name: 'Brunnenstraße 48', role: '34537, Bad Wildungen', country: 'Germany' },
  ]
  
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Badge className="gap-1 bg-[#f97316] text-white border-0">
        <Leaf className="h-3 w-3" /> About OSARE — EA SafariRoutes
      </Badge>
      <h1 className="mt-4 text-4xl font-extrabold text-slate-900">
        Connecting East Africa through trusted travel &amp; logistics.
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        OSARE is a regional travel access and logistics platform designed to connect users to railway, bus, and private transport systems across East Africa. It also serves tourists with safaris, Kilimanjaro climbs, hotels, car &amp; aircraft hire and sightseeing.
      </p>
      <p className="mt-3 text-lg text-slate-600">
        The platform acts as a structured routing gateway, allowing users to access existing transport systems through a unified entry point while enabling tracking, analysis, and scalable business integration. Our goal: put reliable, trustworthy information at everyone's fingertips.
      </p>
      
      {/* Leadership */}
      <div className="mt-12 grid items-center gap-8 rounded-2xl bg-gradient-to-br from-[#1e3a8a]/5 to-[#f97316]/10 p-8 md:grid-cols-[220px_1fr]">
        <img
          src="https://github.com/Jakasipul-Lab.png"
          alt="Osare Nakinson"
          className="h-52 w-52 rounded-2xl object-cover shadow-lg"
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=440' }}
        />
        <div>
          <h3 className="text-2xl font-extrabold text-[#1b5e20]">Osare Nakinson</h3>
          <span className="mt-1 inline-block font-semibold text-[#2e7d32]">Founder &amp; Lead Developer</span>
          <p className="mt-3 text-slate-600">
            Driving innovation in East African mobility through technology-first logistics and strategic transport partnerships.
          </p>
        </div>
      </div>
      
      {/* Value / revenue model */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <Users className="h-7 w-7 text-[#1e3a8a]" />
            <h3 className="mt-3 font-bold">For tourists</h3>
            <p className="mt-1 text-sm text-slate-500">Compare options with photos, prices and off-peak deals. Book direct via WhatsApp or online.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <Building2 className="h-7 w-7 text-[#1e3a8a]" />
            <h3 className="mt-3 font-bold">For vendors</h3>
            <p className="mt-1 text-sm text-slate-500">Reach travellers directly. We charge a simple 5% on confirmed bookings.</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <Percent className="h-7 w-7 text-emerald-600" />
            <h3 className="mt-3 font-bold">Our revenue</h3>
            <p className="mt-1 text-sm text-slate-500">5% commission paid by vendors — never by the tourist. Fair and transparent.</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Branches */}
      <div className="mt-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Regional Headquarters &amp; Branches</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <Card key={i} className="border-slate-200">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-[#2e7d32]">
                  <MapPin className="h-4 w-4" />
                  <span className="font-bold">{b.region}</span>
                </div>
                <p className="mt-2 font-medium text-slate-800">{b.name}</p>
                <p className="text-sm text-slate-500">{b.role}</p>
                <Badge variant="secondary" className="mt-3 bg-slate-100 text-slate-600">{b.country}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Contact */}
      <Card className="mt-12 border-slate-200 bg-slate-50">
        <CardContent className="p-6">
          <h3 className="font-bold text-slate-900">Contact &amp; booking</h3>
          <p className="mt-2 flex items-center gap-2 text-slate-600"><Phone className="h-4 w-4 text-[#25d366]" /> WhatsApp bookings: +254 758 378 729</p>
          <p className="mt-1 flex items-center gap-2 text-slate-600"><MapPin className="h-4 w-4 text-[#1e3a8a]" /> Kisumu HQ • Nairobi • Kampala • Dar es Salaam • Bad Wildungen</p>
          <p className="mt-1 flex items-center gap-2 text-slate-600"><Compass className="h-4 w-4 text-[#f97316]" /> www.easafariroutes.com</p>
        </CardContent>
      </Card>
      <p className="mt-10 text-center text-sm text-slate-400">© 2026 OSARE — EA SafariRoutes. All rights reserved.</p>
    </div>
  )
}
// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------
function Dashboard() {
  const [stats, setStats] = useState(null)
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const [s, l] = await Promise.all([
        fetch('/api/stats').then((r) => r.json()),
        fetch('/api/leads').then((r) => r.json()),
      ])
      setStats(s)
      setLeads(Array.isArray(l) ? l : [])
    } catch (e) {
      toast.error('Failed to load dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  if (loading || !stats) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    )
  }

  const cards = [
    { label: 'Total Listings', value: stats?.totalListings ?? 0, icon: <Compass className="h-5 w-5" />, color: '#1e3a8a' },
    { label: 'Booking Leads', value: stats?.totalLeads ?? 0, icon: <MessageCircle className="h-5 w-5" />, color: '#f97316' },
    { label: 'Est. Commission (5%)', value: `$${stats?.estRevenueUSD ?? 0}`, icon: <Percent className="h-5 w-5" />, color: '#10b981' },
    { label: 'Safari / Local', value: `${stats?.safariCount ?? 0} / ${stats?.localCount ?? 0}`, icon: <Users className="h-5 w-5" />, color: '#3b82f6' },
  ]

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Vendor Revenue Dashboard</h1>
          <p className="text-slate-500">Track booking leads and estimated 5% commission revenue.</p>
        </div>
        <Button variant="outline" onClick={load}>Refresh</Button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Card key={i} className="border-slate-200">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{c.label}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ backgroundColor: c.color }}>
                  {c.icon}
                </span>
              </div>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{c.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="border-slate-200">
          <CardHeader><CardTitle className="text-base">Leads by category</CardTitle></CardHeader>
          <CardContent className="h-72">
            {stats?.leadsByCategory?.length ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.leadsByCategory}>
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" height={60} />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {stats.leadsByCategory.map((e, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : <EmptyChart />}
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader><CardTitle className="text-base">Safari vs Local leads</CardTitle></CardHeader>
          <CardContent className="h-72">
            {stats?.leadsByType ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Safari', value: stats.leadsByType.safari || 0 },
                      { name: 'Local', value: stats.leadsByType.local || 0 }
                    ]}
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={90} 
                    label
                  >
                    <Cell fill="#f97316" />
                    <Cell fill="#1e3a8a" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : <EmptyChart />}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 border-slate-200">
        <CardHeader><CardTitle className="text-base">Recent booking leads</CardTitle></CardHeader>
        <CardContent>
          {leads.length === 0 ? (
            <p className="py-8 text-center text-slate-400">No booking leads yet. Book a listing to see it here.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Listing</TableHead>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Est. 5%</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.slice(0, 15).map((l) => (
                  <TableRow key={l.id}>
                    <TableCell className="font-medium">{l.listingTitle}</TableCell>
                    <TableCell className="text-slate-500">{l.vendor}</TableCell>
                    <TableCell>{l.priceLabel}</TableCell>
                    <TableCell className="text-right font-semibold text-emerald-600">
                      {l.currency === 'KES' ? `KES ${Math.round(l.priceValue * 0.05)}` : `$${l.commission}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function EmptyChart() {
  return <div className="flex h-full items-center justify-center text-sm text-slate-400">No lead data yet</div>
}
// ---------------------------------------------------------------------------
// Admin Component
// ---------------------------------------------------------------------------
const EMPTY_FORM = {
  type: 'safari',
  category: 'Safari Package',
  title: '',
  vendor: '',
  vendorOffice: '',
  location: '',
  mapLink: '',
  description: '',
  includes: '',
  priceValue: '',
  currency: 'USD',
  priceLabel: '',
  offPeakValue: '',
  offPeakLabel: '',
  season: '',
  image: '',
  keywords: ''
}

function Admin() {
  const [listings, setListings] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [seeding, setSeeding] = useState(false)

  const load = async () => {
    try {
      const data = await fetch('/api/listings').then((r) => r.json())
      setListings(Array.isArray(data) ? data : [])
    } catch (e) {
      toast.error('Failed to load listings')
    }
  }

  useEffect(() => { load() }, [])

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async () => {
    if (!form.title.trim()) {
      toast.error('Title is required')
      return
    }

    setSaving(true)
    try {
      // Clean and sanitize payload before submitting
      const payload = {
        ...form,
        priceValue: form.priceValue ? Number(form.priceValue) : 0,
        offPeakValue: form.offPeakValue ? Number(form.offPeakValue) : 0,
        includes: typeof form.includes === 'string' 
          ? form.includes.split(',').map((s) => s.trim()).filter(Boolean)
          : form.includes,
        keywords: typeof form.keywords === 'string'
          ? form.keywords.split(',').map((s) => s.trim()).filter(Boolean)
          : form.keywords
      }

      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Request failed')

      toast.success('Listing added')
      setForm(EMPTY_FORM)
      load()
    } catch (e) {
      toast.error('Failed to add listing')
    } finally {
      setSaving(false)
    }
  }

  const remove = async (id) => {
    try {
      const res = await fetch(`/api/listings/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Delete failed')
      toast.success('Listing removed')
      load()
    } catch (e) {
      toast.error('Failed to remove listing')
    }
  }

  const seed = async () => {
    setSeeding(true)
    try {
      const res = await fetch('/api/seed', { method: 'POST' })
      const data = await res.json()
      toast.success(`Seeded ${data.inserted ?? 0} sample listings`)
      load()
    } catch (e) {
      toast.error('Seed failed')
    } finally {
      setSeeding(false)
    }
  }

  const availableCategories = (form.type === 'safari' ? SAFARI_CATS : LOCAL_CATS)
    ?.filter((c) => c !== 'All') || []

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Admin — Manage Listings</h1>
          <p className="text-slate-500">Add vendor listings for the Safari or Local tiers.</p>
        </div>
        <Button variant="outline" onClick={seed} disabled={seeding} className="gap-2">
          {seeding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Reset & load sample data
        </Button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        {/* Form Card */}
        <Card className="border-slate-200 lg:col-span-2">
          <CardHeader><CardTitle className="text-base">Add a listing</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Tier</Label>
                <Select 
                  value={form.type} 
                  onValueChange={(v) => { 
                    const catList = (v === 'safari' ? SAFARI_CATS : LOCAL_CATS).filter((c) => c !== 'All')
                    set('type', v)
                    set('category', catList[0] || '')
                  }}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="safari">Safari / Tourism</SelectItem>
                    <SelectItem value="local">Local Transit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Category</Label>
                <Select value={form.category} onValueChange={(v) => set('category', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {availableCategories.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Field label="Title" v={form.title} on={(v) => set('title', v)} />
            <Field label="Vendor" v={form.vendor} on={(v) => set('vendor', v)} />
            <Field label="Vendor office" v={form.vendorOffice} on={(v) => set('vendorOffice', v)} />
            <Field label="Location" v={form.location} on={(v) => set('location', v)} />
            <Field label="Map link" v={form.mapLink} on={(v) => set('mapLink', v)} />

            <div>
              <Label className="text-xs">Description</Label>
              <Textarea 
                value={form.description} 
                onChange={(e) => set('description', e.target.value)} 
                rows={3} 
              />
            </div>

            <Field label="Includes (comma separated)" v={form.includes} on={(v) => set('includes', v)} />

            <div className="grid grid-cols-2 gap-3">
              <Field label="Price value (number)" v={form.priceValue} on={(v) => set('priceValue', v)} />
              <div>
                <Label className="text-xs">Currency</Label>
                <Select value={form.currency} onValueChange={(v) => set('currency', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="KES">KES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Price label" v={form.priceLabel} on={(v) => set('priceLabel', v)} ph="$350" />
              <Field label="Off-peak label" v={form.offPeakLabel} on={(v) => set('offPeakLabel', v)} ph="$280" />
            </div>

            <Field label="Season note" v={form.season} on={(v) => set('season', v)} ph="Low season: Apr-Jun" />
            <Field label="Image URL" v={form.image} on={(v) => set('image', v)} />
            <Field label="Keywords (comma separated)" v={form.keywords} on={(v) => set('keywords', v)} />

            <Button 
              onClick={submit} 
              disabled={saving} 
              className="w-full gap-2 bg-[#1e3a8a] text-white hover:bg-[#1e40af]"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />} Add listing
            </Button>
          </CardContent>
        </Card>

        {/* Listings Table Card */}
        <Card className="border-slate-200 lg:col-span-3">
          <CardHeader><CardTitle className="text-base">All listings ({listings.length})</CardTitle></CardHeader>
          <CardContent>
            <div className="max-h-[640px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {listings.map((l) => (
                    <TableRow key={l.id}>
                      <TableCell>
                        <p className="font-medium">{l.title}</p>
                        <p className="text-xs text-slate-400">{l.vendor}</p>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="secondary" 
                          className={l.type === 'safari' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}
                        >
                          {l.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{l.priceLabel}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          onClick={() => remove(l.id)} 
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {listings.length === 0 && (
                <p className="py-10 text-center text-slate-400">
                  No listings yet. Click "Reset & load sample data".
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Field({ label, v, on, ph }) {
  return (
    <div>
      <Label className="text-xs">{label}</Label>
      <Input value={v} onChange={(e) => on(e.target.value)} placeholder={ph} />
    </div>
  )
}// ---------------------------------------------------------------------------
// Vendor Portal (login / register + self-service listings & revenue)
// ---------------------------------------------------------------------------
function VendorAuth({ onAuth }) {
  const [mode, setMode] = useState('login')
  const [f, setF] = useState({ name: '', company: '', email: '', phone: '', password: '' })
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setF((s) => ({ ...s, [k]: v }))

  const submit = async () => {
    if (!f.email || !f.password) {
      toast.error('Email and password are required')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`/api/auth/${mode === 'login' ? 'login' : 'register'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f)
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error || 'Failed')
        return
      }
      toast.success(mode === 'login' ? 'Welcome back!' : 'Account created!')
      onAuth(data.token, data.vendor)
    } catch (e) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-5 py-16">
      <div className="mb-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-white">
          <Building2 className="h-7 w-7" />
        </span>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">Vendor Portal</h1>
        <p className="text-sm text-slate-500">List your services and track your bookings. We only charge 5% on bookings.</p>
      </div>
      <Card className="border-slate-200">
        <CardContent className="p-6">
          <Tabs value={mode} onValueChange={setMode}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-4 space-y-3">
              <Field label="Email" v={f.email} on={(v) => set('email', v)} ph="you@company.com" />
              <div>
                <Label className="text-xs">Password</Label>
                <Input type="password" value={f.password} onChange={(e) => set('password', e.target.value)} />
              </div>
            </TabsContent>
            <TabsContent value="register" className="mt-4 space-y-3">
              <Field label="Your name" v={f.name} on={(v) => set('name', v)} />
              <Field label="Company / operator name" v={f.company} on={(v) => set('company', v)} />
              <Field label="Email" v={f.email} on={(v) => set('email', v)} ph="you@company.com" />
              <Field label="Phone (WhatsApp)" v={f.phone} on={(v) => set('phone', v)} ph="2547..." />
              <div>
                <Label className="text-xs">Password</Label>
                <Input type="password" value={f.password} onChange={(e) => set('password', e.target.value)} />
              </div>
            </TabsContent>
            <Button onClick={submit} disabled={loading} className="mt-4 w-full gap-2 bg-[#1e3a8a] text-white hover:bg-[#1e40af]">
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {mode === 'login' ? 'Login' : 'Create vendor account'}
            </Button>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function VendorPortal({ token, vendor, onAuth, onLogout }) {
  const [listings, setListings] = useState([])
  const [stats, setStats] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  const authHeaders = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  const load = useCallback(async () => {
    if (!token) return
    try {
      const [l, s] = await Promise.all([
        fetch('/api/my-listings', { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json()),
        fetch('/api/my-stats', { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json()),
      ])
      setListings(Array.isArray(l) ? l : [])
      setStats(s && !s.error ? s : null)
    } catch (e) { /* ignore */ }
  }, [token])

  useEffect(() => { if (vendor) load() }, [vendor, load])

  if (!vendor) return <VendorAuth onAuth={onAuth} />

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const cats = (form.type === 'safari' ? SAFARI_CATS : LOCAL_CATS).filter((c) => c !== 'All')

  const submit = async () => {
    if (!form.title.trim()) { toast.error('Title is required'); return }
    setSaving(true)

    const payload = {
      ...form,
      priceValue: form.priceValue ? Number(form.priceValue) : 0,
      offPeakValue: form.offPeakValue ? Number(form.offPeakValue) : 0,
      includes: typeof form.includes === 'string' ? form.includes.split(',').map((s) => s.trim()).filter(Boolean) : form.includes,
      keywords: typeof form.keywords === 'string' ? form.keywords.split(',').map((s) => s.trim()).filter(Boolean) : form.keywords,
    }

    try {
      const res = await fetch('/api/listings', { method: 'POST', headers: authHeaders, body: JSON.stringify(payload) })
      if (!res.ok) { toast.error('Failed to add listing'); return }
      toast.success('Listing published')
      setForm(EMPTY_FORM)
      load()
    } catch (e) { toast.error('Failed to add listing') }
    finally { setSaving(false) }
  }

  const remove = async (id) => {
    try {
      await fetch(`/api/listings/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      toast.success('Listing removed')
      load()
    } catch (e) {
      toast.error('Failed to remove listing')
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Welcome, {vendor.company || vendor.name || vendor.email}</h1>
          <p className="text-slate-500">Manage your listings and track booking leads.</p>
        </div>
        <Button variant="outline" onClick={onLogout}>Log out</Button>
      </div>

      {/* Stat cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <StatCard label="My Listings" value={stats?.listings ?? listings.length} icon={<Compass className="h-5 w-5" />} color="#1e3a8a" />
        <StatCard label="Booking Leads" value={stats?.leads ?? 0} icon={<MessageCircle className="h-5 w-5" />} color="#f97316" />
        <StatCard label="Commission Owed (5%)" value={`$${stats?.commissionOwedUSD ?? 0}`} icon={<Percent className="h-5 w-5" />} color="#10b981" />
      </div>

      <Tabs defaultValue="listings" className="mt-8">
        <TabsList>
          <TabsTrigger value="listings">My Listings</TabsTrigger>
          <TabsTrigger value="add">Add Listing</TabsTrigger>
          <TabsTrigger value="leads">My Leads</TabsTrigger>
        </TabsList>
        <TabsContent value="listings" className="mt-5">
          <Card className="border-slate-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Title</TableHead><TableHead>Tier</TableHead><TableHead>Price</TableHead><TableHead className="w-[50px]"></TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {listings.map((l) => (
                    <TableRow key={l.id}>
                      <TableCell className="font-medium">{l.title}</TableCell>
                      <TableCell><Badge variant="secondary" className={l.type === 'safari' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}>{l.type}</Badge></TableCell>
                      <TableCell>{l.priceLabel}</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost" onClick={() => remove(l.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {listings.length === 0 && <p className="py-10 text-center text-slate-400">No listings yet. Use the "Add Listing" tab.</p>}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add" className="mt-5">
          <Card className="border-slate-200">
            <CardContent className="grid gap-3 p-6 md:grid-cols-2">
              <div>
                <Label className="text-xs">Tier</Label>
                <Select 
                  value={form.type} 
                  onValueChange={(v) => { 
                    const availableCats = (v === 'safari' ? SAFARI_CATS : LOCAL_CATS).filter((c) => c !== 'All')
                    set('type', v)
                    set('category', availableCats[0] || '')
                  }}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="safari">Safari / Tourism</SelectItem><SelectItem value="local">Local Transit</SelectItem></SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Category</Label>
                <Select value={form.category} onValueChange={(v) => set('category', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{cats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <Field label="Title" v={form.title} on={(v) => set('title', v)} />
              <Field label="Location" v={form.location} on={(v) => set('location', v)} />
              <Field label="Map link" v={form.mapLink} on={(v) => set('mapLink', v)} />
              <Field label="Vendor office" v={form.vendorOffice} on={(v) => set('vendorOffice', v)} />
              <div className="md:col-span-2">
                <Label className="text-xs">Description</Label>
                <Textarea value={form.description} onChange={(e) => set('description', e.target.value)} rows={3} />
              </div>
              <Field label="Includes (comma separated)" v={form.includes} on={(v) => set('includes', v)} />
              <Field label="Keywords (comma separated)" v={form.keywords} on={(v) => set('keywords', v)} />
              <Field label="Price value (number)" v={form.priceValue} on={(v) => set('priceValue', v)} />
              <div>
                <Label className="text-xs">Currency</Label>
                <Select value={form.currency} onValueChange={(v) => set('currency', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="USD">USD ($)</SelectItem><SelectItem value="KES">KES</SelectItem></SelectContent>
                </Select>
              </div>
              <Field label="Price label" v={form.priceLabel} on={(v) => set('priceLabel', v)} ph="$350" />
              <Field label="Off-peak label" v={form.offPeakLabel} on={(v) => set('offPeakLabel', v)} ph="$280" />
              <Field label="Season note" v={form.season} on={(v) => set('season', v)} />
              <Field label="Image URL" v={form.image} on={(v) => set('image', v)} />
              <div className="md:col-span-2">
                <Button onClick={submit} disabled={saving} className="w-full gap-2 bg-[#f97316] text-white hover:bg-[#ea6c0f]">
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />} Publish listing
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leads" className="mt-5">
          <Card className="border-slate-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Listing</TableHead><TableHead>Price</TableHead><TableHead className="text-right">Est. 5%</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {(stats?.recentLeads || []).map((l) => (
                    <TableRow key={l.id}>
                      <TableCell className="font-medium">{l.listingTitle}</TableCell>
                      <TableCell>{l.priceLabel}</TableCell>
                      <TableCell className="text-right font-semibold text-emerald-600">
                        {l.currency === 'KES' ? `KES ${Math.round(l.priceValue * 0.05)}` : `$${l.commission}`}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {(!stats?.recentLeads || stats.recentLeads.length === 0) && <p className="py-10 text-center text-slate-400">No booking leads yet.</p>}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatCard({ label, value, icon, color }) {
  return (
    <Card className="border-slate-200">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">{label}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ backgroundColor: color }}>
            {icon}
          </span>
        </div>
        <p className="mt-3 text-3xl font-extrabold text-slate-900">{value}</p>
      </CardContent>
    </Card>
  )
}
  return (
    <div className="mx-auto max-w-md px-5 py-16">
      <div className="mb-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-white"><Building2 className="h-7 w-7" /></span>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">Vendor Portal</h1>
        <p className="text-sm text-slate-500">List your services and track your bookings. We only charge 5% on bookings.</p>
      </div>
      <Card className="border-slate-200">
        <CardContent className="p-6">
          <Tabs value={mode} onValueChange={setMode}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-4 space-y-3">
              <Field label="Email" v={f.email} on={(v) => set('email', v)} ph="you@company.com" />
              <div>
                <Label className="text-xs">Password</Label>
                <Input type="password" value={f.password} onChange={(e) => set('password', e.target.value)} />
              </div>
            </TabsContent>
            <TabsContent value="register" className="mt-4 space-y-3">
              <Field label="Your name" v={f.name} on={(v) => set('name', v)} />
              <Field label="Company / operator name" v={f.company} on={(v) => set('company', v)} />
              <Field label="Email" v={f.email} on={(v) => set('email', v)} ph="you@company.com" />
              <Field label="Phone (WhatsApp)" v={f.phone} on={(v) => set('phone', v)} ph="2547..." />
              <div>
                <Label className="text-xs">Password</Label>
                <Input type="password" value={f.password} onChange={(e) => set('password', e.target.value)} />
              </div>
            </TabsContent>
            <Button onClick={submit} disabled={loading} className="mt-4 w-full gap-2 bg-[#1e3a8a] text-white hover:bg-[#1e40af]">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {mode === 'login' ? 'Login' : 'Create vendor account'}
            </Button>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
function VendorPortal({ token, vendor, onAuth, onLogout }) {
  const [listings, setListings] = useState([])
  const [stats, setStats] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const authHeaders = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  const load = useCallback(async () => {
    if (!token) return
    try {
      const [l, s] = await Promise.all([
        fetch('/api/my-listings', { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json()),
        fetch('/api/my-stats', { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json()),
      ])
      setListings(Array.isArray(l) ? l : [])
      setStats(s && !s.error ? s : null)
    } catch (e) { /* ignore */ }
  }, [token])
  useEffect(() => { if (vendor) load() }, [vendor, load])
  if (!vendor) return <VendorAuth onAuth={onAuth} />
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const cats = form.type === 'safari' ? SAFARI_CATS.filter((c) => c !== 'All') : LOCAL_CATS.filter((c) => c !== 'All')
  const submit = async () => {
    if (!form.title) { toast.error('Title is required'); return }
    setSaving(true)
    try {
      const res = await fetch('/api/listings', { method: 'POST', headers: authHeaders, body: JSON.stringify(form) })
      if (!res.ok) { toast.error('Failed to add listing'); return }
      toast.success('Listing published')
      setForm(EMPTY_FORM)
      load()
    } catch (e) { toast.error('Failed to add listing') }
    finally { setSaving(false) }
  }
  const remove = async (id) => {
    await fetch(`/api/listings/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
    toast.success('Listing removed')
    load()
  }
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Welcome, {vendor.company || vendor.name || vendor.email}</h1>
          <p className="text-slate-500">Manage your listings and track booking leads.</p>
        </div>
        <Button variant="outline" onClick={onLogout}>Log out</Button>
      </div>
      {/* Stat cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <StatCard label="My Listings" value={stats?.listings ?? listings.length} icon={<Compass className="h-5 w-5" />} color="#1e3a8a" />
        <StatCard label="Booking Leads" value={stats?.leads ?? 0} icon={<MessageCircle className="h-5 w-5" />} color="#f97316" />
        <StatCard label="Commission Owed (5%)" value={`$${stats?.commissionOwedUSD ?? 0}`} icon={<Percent className="h-5 w-5" />} color="#10b981" />
      </div>
      <Tabs defaultValue="listings" className="mt-8">
        <TabsList>
          <TabsTrigger value="listings">My Listings</TabsTrigger>
          <TabsTrigger value="add">Add Listing</TabsTrigger>
          <TabsTrigger value="leads">My Leads</TabsTrigger>
        </TabsList>
        <TabsContent value="listings" className="mt-5">
          <Card className="border-slate-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Title</TableHead><TableHead>Tier</TableHead><TableHead>Price</TableHead><TableHead></TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {listings.map((l) => (
                    <TableRow key={l.id}>
                      <TableCell className="font-medium">{l.title}</TableCell>
                      <TableCell><Badge variant="secondary" className={l.type === 'safari' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}>{l.type}</Badge></TableCell>
                      <TableCell>{l.priceLabel}</TableCell>
                      <TableCell className="text-right"><Button size="icon" variant="ghost" onClick={() => remove(l.id)} className="text-red-500 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {listings.length === 0 && <p className="py-10 text-center text-slate-400">No listings yet. Use the "Add Listing" tab.</p>}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add" className="mt-5">
          <Card className="border-slate-200">
            <CardContent className="grid gap-3 p-6 md:grid-cols-2">
              <div>
                <Label className="text-xs">Tier</Label>
                <Select value={form.type} onValueChange={(v) => { set('type', v); set('category', (v === 'safari' ? SAFARI_CATS : LOCAL_CATS)[1]) }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="safari">Safari / Tourism</SelectItem><SelectItem value="local">Local Transit</SelectItem></SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Category</Label>
                <Select value={form.category} onValueChange={(v) => set('category', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{cats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <Field label="Title" v={form.title} on={(v) => set('title', v)} />
              <Field label="Location" v={form.location} on={(v) => set('location', v)} />
              <Field label="Map link" v={form.mapLink} on={(v) => set('mapLink', v)} />
              <Field label="Vendor office" v={form.vendorOffice} on={(v) => set('vendorOffice', v)} />
              <div className="md:col-span-2">
                <Label className="text-xs">Description</Label>
                <Textarea value={form.description} onChange={(e) => set('description', e.target.value)} rows={3} />
              </div>
              <Field label="Includes (comma separated)" v={form.includes} on={(v) => set('includes', v)} />
              <Field label="Keywords (comma separated)" v={form.keywords} on={(v) => set('keywords', v)} />
              <Field label="Price value (number)" v={form.priceValue} on={(v) => set('priceValue', v)} />
              <div>
                <Label className="text-xs">Currency</Label>
                <Select value={form.currency} onValueChange={(v) => set('currency', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="USD">USD ($)</SelectItem><SelectItem value="KES">KES</SelectItem></SelectContent>
                </Select>
              </div>
              <Field label="Price label" v={form.priceLabel} on={(v) => set('priceLabel', v)} ph="$350" />
              <Field label="Off-peak label" v={form.offPeakLabel} on={(v) => set('offPeakLabel', v)} ph="$280" />
              <Field label="Season note" v={form.season} on={(v) => set('season', v)} />
              <Field label="Image URL" v={form.image} on={(v) => set('image', v)} />
              <div className="md:col-span-2">
                <Button onClick={submit} disabled={saving} className="w-full gap-2 bg-[#f97316] text-white hover:bg-[#ea6c0f]">
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />} Publish listing
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leads" className="mt-5">
          <Card className="border-slate-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Listing</TableHead><TableHead>Price</TableHead><TableHead className="text-right">Est. 5%</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {(stats?.recentLeads || []).map((l) => (
                    <TableRow key={l.id}>
                      <TableCell className="font-medium">{l.listingTitle}</TableCell>
                      <TableCell>{l.priceLabel}</TableCell>
                      <TableCell className="text-right font-semibold text-emerald-600">{l.currency === 'KES' ? `KES ${Math.round(l.priceValue * 0.05)}` : `$${l.commission}`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {(!stats?.recentLeads || stats.recentLeads.length === 0) && <p className="py-10 text-center text-slate-400">No booking leads yet.</p>}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
function StatCard({ label, value, icon, color }) {
  return (
    <Card className="border-slate-200">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">{label}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ backgroundColor: color }}>{icon}</span>
        </div>
        <p className="mt-3 text-3xl font-extrabold text-slate-900">{value}</p>
      </CardContent>
    </Card>
  )
}
// ---------------------------------------------------------------------------
// Root App
// ---------------------------------------------------------------------------
  const [view, setView] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pendingQuery, setPendingQuery] = useState('')
  const [token, setToken] = useState(null)
  const [vendor, setVendor] = useState(null)
  // Seed on first load if empty
  useEffect(() => {
    fetch('/api/listings').then((r) => r.json()).then((data) => {
      if (!Array.isArray(data) || data.length === 0) {
        fetch('/api/seed', { method: 'POST' })
      }
    }).catch(() => {})
  }, [])
  // Restore vendor session
  useEffect(() => {
    const t = typeof window !== 'undefined' ? localStorage.getItem('osare_token') : null
    if (t) {
      setToken(t)
      fetch('/api/auth/me', { headers: { Authorization: `Bearer ${t}` } })
        .then((r) => r.ok ? r.json() : null)
        .then((d) => { if (d?.vendor) setVendor(d.vendor); else { localStorage.removeItem('osare_token'); setToken(null) } })
        .catch(() => {})
    }
  }, [])
  const onAuth = (t, v) => {
    setToken(t); setVendor(v)
    if (typeof window !== 'undefined') localStorage.setItem('osare_token', t)
  }
  const onLogout = () => {
    setToken(null); setVendor(null)
    if (typeof window !== 'undefined') localStorage.removeItem('osare_token')
    toast.success('Logged out')
  }
  const go = (v, query = '') => {
    setPendingQuery(query)
    setView(v)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-white"><Compass className="h-5 w-5" /></span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">OSARE</span>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <button
                key={n.key}
                onClick={() => go(n.key)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${view === n.key ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button onClick={() => go('safari')} className="gap-2 bg-[#f97316] text-white hover:bg-[#ea6c0f]">
              Explore <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen((o) => !o)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            {NAV.map((n) => (
              <button key={n.key} onClick={() => go(n.key)} className={`block w-full px-5 py-3 text-left text-sm font-medium ${view === n.key ? 'bg-slate-100 text-slate-900' : 'text-slate-600'}`}>
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>
      {/* Views */}
      {view === 'home' && <Home go={go} />}
      {view === 'safari' && <TierExplorer type="safari" key={'safari' + pendingQuery} />}
      {view === 'local' && <TierExplorer type="local" key={'local' + pendingQuery} />}
      {view === 'about' && <About />}
      {view === 'dashboard' && <Dashboard />}
      {view === 'vendor' && <VendorPortal token={token} vendor={vendor} onAuth={onAuth} onLogout={onLogout} />}
      {view === 'admin' && <Admin />}
      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 py-10 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-white"><Compass className="h-4 w-4" /></span>
              <span className="text-lg font-extrabold text-white">OSARE</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">East Africa Safari Routes & Transit Hub. Free information for tourists & locals.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button onClick={() => go('safari')} className="hover:text-white">Safari & Tourism</button></li>
              <li><button onClick={() => go('local')} className="hover:text-white">Local Commute</button></li>
              <li><button onClick={() => go('about')} className="hover:text-white">About</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Vendors</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button onClick={() => go('admin')} className="hover:text-white">Add a listing</button></li>
              <li><button onClick={() => go('dashboard')} className="hover:text-white">Revenue dashboard</button></li>
              <li className="text-slate-400">Only 5% on bookings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#25d366]" /> +254 758 378 729</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nairobi CBD, Kenya</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">© 2025 OSARE — easafariroutes.com. All rights reserved.</p>
      </footer>
    </div>
  )
}
