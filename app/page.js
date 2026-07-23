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
  { key: 'safari', label: 'Safari Discovery' },
  { key: 'local', label: 'Local Transit' },
  { key: 'about', label: 'About OSARE' }
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
    desc: 'Every listing is manually verified. Book direct with confidence — no hidden middlemen.'
  },
  {
    icon: <Leaf className="h-7 w-7 text-emerald-500" />,
    title: 'Free Local Info',
    desc: 'Local commuter routes, boarding points and official prices — free forever, no booking needed.'
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

function TierExplorer({ type }) {
  const [items, setItems] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [booking, setBooking] = useState(null)
  const [activeCat, setActiveCat] = useState('All')
  const [search, setSearch] = useState('')

  const cats = type === 'safari' ? SAFARI_CATS : LOCAL_CATS

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/listings?type=${type}`)
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (e) { toast.error("Search unavailable") }
    finally { setLoading(false) }
  }, [type])

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
            Free informational service — find routes, prices and where to board. No booking or payment required.
          </p>
        )}
      </div>

      {/* Search bar */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={type === 'safari' ? 'Search destinations, operators…' : 'Search routes, services…'}
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
                onClick={() => go('safari')}
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
          {VALUE_CARDS.map((vc, i) => (
            <Card key={i} className="border-slate-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col gap-3">
                <div>{vc.icon}</div>
                <h3 className="text-lg font-black text-slate-900">{vc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{vc.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function AboutView() {
  const branches = [
    { region: 'Kisumu Headquarters', name: 'Mrs Jacqueline Susan Nakinson', role: 'Officer-in-Charge', address: 'Kisumu City, Kenya', country: 'Kenya' },
    { region: 'Kenya - Nairobi', name: 'Kenneth Oketch', role: 'Branch Manager', country: 'Kenya' },
    { region: 'Uganda - Kampala', name: 'Brian Omollo', role: 'Branch Manager', country: 'Uganda' },
    { region: 'Tanzania - Dar es Salaam', name: 'Johnson Yongo', role: 'Branch Manager', country: 'Tanzania' },
    { region: 'Germany Branch', name: 'Brunnenstrasse 48', role: '34537, Bad Wildungen', country: 'Germany' }
  ]
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="text-4xl font-black text-slate-900 tracking-tight">About OSARE</h1>
      <p className="mt-8 text-xl font-medium leading-relaxed text-slate-600">
        OSARE is East Africa's first dedicated B2B discovery hub for travel and transit. 
        Based in our **Kisumu Headquarters**, we are committed to making travel discovery seamless, transparent, and direct.
      </p>

      {/* RESTORED FOUNDER & HQ PROFILE */}
      <div className="mt-20 p-8 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
        <div className="h-32 w-32 rounded-2xl bg-white shadow-lg flex-shrink-0 overflow-hidden">
          <img src="https://github.com/Jakasipul-Lab.png" alt="Osare Nakinson" className="h-full w-full object-cover" />
        </div>
        <div>
          <Badge className="bg-blue-600 mb-2 text-white border-0">Founder & CEO</Badge>
          <h2 className="text-2xl font-black text-slate-900">Osare Nakinson</h2>
          <p className="mt-4 text-slate-600 font-medium leading-relaxed">
            Leading OSARE from our **Kisumu Headquarters**, we are committed to direct, transparent travel discovery across East Africa.
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

export default function Page() {
  const [view, setView] = useState('home');
  const [params, setParams] = useState({ type: 'safari' });
  const go = (type) => { setParams({ type }); setView('explorer'); window.scrollTo(0, 0) };
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Toaster position="top-center" />
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => setView('home')} className="flex items-center gap-2"><Compass className="h-6 w-6 text-[#1e3a8a]" /><span className="text-xl font-black">OSARE</span></button>
          <div className="hidden md:flex gap-8 items-center">
            {NAV.map((n) => (<button onClick={() => setView(n.key)} key={n.key} className="text-sm font-bold transition-colors hover:text-[#f97316]">{n.label}</button>))}
            <Button onClick={() => go('safari')} className="bg-[#1e3a8a] text-white font-bold">Discovery</Button>
          </div>
        </div>
      </nav>
      {view === 'home' && <HomeView go={go} />}
      {view === 'explorer' && <TierExplorer type={params.type} />}
      {view === 'safari' && <TierExplorer type="safari" />}
      {view === 'local' && <TierExplorer type="local" />}
      {view === 'about' && <AboutView />}
      <footer className="border-t border-slate-200 bg-slate-50 py-16 mt-20">
        <div className="mx-auto max-w-7xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">Copyright 2026 OSARE - easafariroutes.com. Built by nakinson osare.</p>
          <div className="flex gap-6">
            <a href="/vendor-portal" className="text-xs font-bold text-slate-500 hover:text-[#1e3a8a] transition-colors">Vendor Portal</a>
            <a href="/admin" className="text-xs font-bold text-slate-500 hover:text-[#1e3a8a] transition-colors">Admin</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
