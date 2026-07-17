'use client'

import { useEffect, useState, useCallback } from 'react'
import {
  Search, MapPin, Menu, X, Compass, Bus, Plane, Car, Hotel, Mountain,
  Binoculars, Building2, Phone, ShieldCheck, TrendingUp, Percent, Users,
  Leaf, Sparkles, ArrowRight, Trash2, Plus, Loader2, MessageCircle, Tag, ExternalLink, Globe
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

const HERO = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxBZnJpY2FuJTIwc2FmYXJpfGVufDB8fHx8MTc4MzM4MjA2Nnww&ixlib=rb-4.1.0&q=85'
const LOCAL_HERO = 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtYXRhdHUlMjBidXN8ZW58MHx8fHwxNzgzMzgyMDc4fDA&ixlib=rb-4.1.0&q=85'

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'safari', label: 'Safari & Tourism' },
  { key: 'local', label: 'Local Transit' },
  { key: 'about', label: 'About OSARE' },
  { key: 'dashboard', label: 'Revenue Dashboard' },
  { key: 'vendor', label: 'Vendor Portal' },
  { key: 'admin', label: 'Admin' }
]

const SAFARI_CATS = ['All', 'Safari Package', 'Kilimanjaro Climb', 'Hotel & Resort', 'Car & Caravan Hire', 'Light Aircraft Charter', 'Sightseeing']
const LOCAL_CATS = ['All', 'Matatu / Shuttle', 'Train (SGR)', 'Taxi / Car Hire', 'Airport Transfer']

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
  
  return (
    <Card className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white">
      <div className="relative h-52 w-full overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        <Badge className="absolute left-3 top-3 gap-1 border-0 text-white shadow font-bold" style={{ backgroundColor: accentColor }}>
          {getCatIcon(item.category)} {item.category}
        </Badge>
        {item.offPeakLabel && (
          <Badge className="absolute right-3 top-3 gap-1 bg-emerald-600 text-white border-0 shadow">
            <Tag className="h-3 w-3" /> Off-peak {item.offPeakLabel}
          </Badge>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
            <p className="mt-1 text-sm font-semibold flex items-center gap-1" style={{ color: accentColor }}>
              <ShieldCheck className="h-3.5 w-3.5" /> Verified Vendor: {item.vendor}
            </p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 border-y border-slate-50 py-3">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">Vendor Contact</p>
            <p className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
               <Phone className="h-3 w-3" /> {item.vendorContact || 'Official Line'}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">Head Office</p>
            <p className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
               <Building2 className="h-3 w-3" /> {item.vendorOffice || 'Nairobi CBD'}
            </p>
          </div>
        </div>
        
        {item.assets && item.assets.length > 0 && (
          <div className="mt-4">
            <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-2">Available Assets</p>
            <div className="flex flex-wrap gap-1.5">
              {item.assets.map((asset, idx) => (
                <Badge key={idx} variant="outline" className="text-[10px] px-2 py-0.5 border-slate-200 bg-slate-50 text-slate-600 font-medium hover:bg-slate-100 transition-colors">
                  {asset}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <p className="mt-4 text-sm text-slate-600 line-clamp-3 italic leading-relaxed">"{item.description}"</p>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Pricing Estimate</p>
              <p className="text-2xl font-black text-emerald-600 tracking-tight">{item.priceLabel}</p>
            </div>
            {item.season && (
              <Badge variant="secondary" className="text-[10px] bg-slate-100 text-slate-500">
                {item.season}
              </Badge>
            )}
          </div>

          <Button
            onClick={() => onBook(item)}
            disabled={booking === item.id}
            className="w-full gap-2 h-12 text-base font-bold shadow-md transition-all active:scale-[0.98]"
            style={{ backgroundColor: accentColor, color: 'white' }}
          >
            {booking === item.id ? <Loader2 className="h-5 w-5 animate-spin" /> : <MessageCircle className="h-5 w-5" />}
            Check Price & Book
          </Button>
          <p className="mt-2 text-[10px] text-center text-slate-400 font-medium">
            Lead tracked via OSARE Affiliate Network (5% Vendor Fee)
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function TierExplorer({ type }) {
  const isSafari = type === 'safari'
  const cats = isSafari ? SAFARI_CATS : LOCAL_CATS
  const accentColor = isSafari ? '#f97316' : '#1e3a8a'
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
      const res = await fetch('/api/listings?' + params.toString())
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
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId: item.id, listingTitle: item.title, vendor: item.vendor })
      })
      window.location.href = '/api/out/' + item.id
    } catch (e) {
      window.location.href = '/api/out/' + item.id
    } finally {
      setBooking(null)
    }
  }

  return (
    <div>
      <div className="relative h-64 w-full overflow-hidden">
        <img src={isSafari ? HERO : LOCAL_HERO} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: isSafari ? 'linear-gradient(135deg, rgba(249,115,22,.85), rgba(30,58,138,.7))' : 'linear-gradient(135deg, rgba(30,58,138,.9), rgba(59,130,246,.75))' }} />
        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-center px-5 text-white">
          <h1 className="text-3xl font-extrabold md:text-4xl">{isSafari ? 'Tourist Assistance - East Africa' : 'Local Commute - Nairobi & Beyond'}</h1>
          <p className="mt-2 max-w-2xl text-white/90">{isSafari ? 'Safaris, Kilimanjaro climbs, hotels, car & aircraft hire - compare and book direct.' : 'Compare matatus, SGR trains, taxis & airport shuttles across Nairobi CBD and its environs.'}</p>
        </div>
      </div>

      <div className="mx-auto -mt-8 max-w-4xl px-5">
        <Card className="border-slate-200 shadow-lg">
          <CardContent className="flex flex-col gap-3 p-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && load()}
                placeholder={isSafari ? 'e.g. Mara safari, Kilimanjaro, car hire...' : 'e.g. SGR train, matatu, taxi...'}
                className="h-12 pl-10 text-base"
              />
            </div>
            <Select value={cat} onValueChange={setCat}>
              <SelectTrigger className="h-12 md:w-56"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                {cats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button onClick={load} className="h-12 gap-2 px-6 text-white" style={{ backgroundColor: accentColor }}>
              <Search className="h-4 w-4" /> Search
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">{loading ? 'Searching...' : items.length + ' options found'}</p>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-slate-400" /></div>
        ) : items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
            No matches found. Try broader terms.
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

function HomeView({ go }) {
  const [q, setQ] = useState('')
  const [tier, setTier] = useState('safari')
  return (
    <div>
      <div className="relative min-h-[560px] w-full object-cover">
        <img src={HERO} alt="hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/85 via-[#1e3a8a]/60 to-[#f97316]/70" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-24 text-center">
          <Badge className="mb-4 gap-1 border-white/30 bg-white/15 text-white backdrop-blur">
            <Sparkles className="h-3 w-3" /> Free information assistant - Book direct
          </Badge>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl text-white">
            OSARE - East Africa<br className="hidden md:block" /> Safari Routes & Transit
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Everything a tourist or local needs at their fingertips. Compare safaris, Kilimanjaro climbs, hotels, car & aircraft hire - and Nairobi transit - then book direct.
          </p>
          <div className="mt-8 w-full max-w-2xl">
            <div className="mb-3 flex justify-center gap-3">
              <button onClick={() => setTier('safari')} className={'rounded-full px-6 py-2 text-sm font-bold transition ' + (tier === 'safari' ? 'bg-[#f97316] text-white' : 'bg-white/20 text-white hover:bg-white/30')}>Tourist Assistance</button>
              <button onClick={() => setTier('local')} className={'rounded-full px-6 py-2 text-sm font-bold transition ' + (tier === 'local' ? 'bg-white text-[#1e3a8a]' : 'bg-white/20 text-white hover:bg-white/30')}>Local Commute</button>
            </div>
            <div className="flex gap-2 rounded-2xl bg-white p-2 shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && go(tier, q)}
                  placeholder={tier === 'safari' ? 'Mara migration, Kilimanjaro, Zanzibar, car hire...' : 'Nairobi to Mombasa, matatu, taxi, SGR...'}
                  className="h-12 border-0 pl-10 text-base text-slate-900 focus-visible:ring-0"
                />
              </div>
              <Button onClick={() => go(tier, q)} className="h-12 gap-2 px-6 text-white" style={{ backgroundColor: tier === 'safari' ? '#f97316' : '#1e3a8a' }}>Search <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl font-extrabold text-slate-900">Two platforms. One trusted hub.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <button onClick={() => go('safari') } className="group relative h-72 overflow-hidden rounded-2xl text-left shadow-lg">
            <img src={HERO} alt="safari" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <Badge className="mb-2 gap-1 border-0 bg-[#f97316] text-white"><Compass className="h-3 w-3" /> Tier 1</Badge>
              <h3 className="text-2xl font-bold">Safari & Tourism</h3>
              <p className="mt-1 text-sm text-white/85">Mara migration, Kilimanjaro, hotels, car & aircraft hire, sightseeing.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-300">Explore safaris <ArrowRight className="h-4 w-4" /></span>
            </div>
          </button>
          <button onClick={() => go('local') } className="group relative h-72 overflow-hidden rounded-2xl text-left shadow-lg">
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
    </div>
  )
}

function AboutView() {
  const branches = [
    { region: 'Kisumu Headquarters', name: 'Mrs Jacqueline Susan Nakinson', role: 'Officer-in-Charge', country: 'Kenya' },
    { region: 'Kenya - Nairobi', name: 'Kenneth Oketch', role: 'Branch Manager', country: 'Kenya' },
    { region: 'Uganda - Kampala', name: 'Brian Omollo', role: 'Branch Manager', country: 'Uganda' },
    { region: 'Tanzania - Dar es Salaam', name: 'Johnson Yongo', role: 'Branch Manager', country: 'Tanzania' },
    { region: 'Germany Branch', name: 'Brunnenstrasse 48', role: '34537, Bad Wildungen', country: 'Germany' }
  ]
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Badge className="gap-1 bg-[#f97316] text-white border-0"><Leaf className="h-3 w-3" /> About OSARE - EA SafariRoutes</Badge>
      <h1 className="mt-4 text-4xl font-extrabold text-slate-900">Connecting East Africa through trusted travel & logistics.</h1>
      <p className="mt-4 text-mg text-slate-600">OSARE is a regional travel access and logistics platform designed to connect users to railway, bus, and private transport systems across East Africa</p>
      <div className="mt-12 grid items-center gap-8 rounded-2xl bg-gradient-to-br from-[#1e3a8a]/5 to-[#f97316]/10 p-8 md:grid-cols-[220px_1fr]">
        <img src="https://github.com/Jakasipul-Lab.png" alt="Osare" className="h-52 w-52 rounded-2xl object-cover shadow-lg" />
        <div>
          <h3 className="text-2xl font-extrabold text-[#1b5e20]">Osare Nakinson</h3>
          <span className="mt-1 inline-block font-semibold text-[#2e7d32]">Founder & Lead Developer</span>
          <p className="mt-3 text-slate-600">Driving innovation in East African mobility through technology-first logistics and transport partnerships.</p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card><CardContent className="p-6"><Users className="h-7 w-7 text-[#1e3a8a]" /><h3 className="mt-3 font-bold">For tourists</h3><p className="mt-1 text-sm text-slate-500">Compare options with photos and prices. Visit vendor sites direct.</p></CardContent></Card>
        <Card><CardContent className="p-6"><Building2 className="h-7 w-7 text-[#1e3a8a]" /><h3 className="mt-3 font-bold">For vendors</h3><p className="mt-1 text-sm text-slate-500">Reach travellers directly. Tracked affiliate links for 5% commission.</p></CardContent></Card>
        <Card><CardContent className="p-6"><Percent className="h-7 w-7 text-emerald-600" /><h3 className="mt-3 font-bold">Our revenue</h3><p className="mt-1 text-sm text-slate-500">5% commission paid by vendors - never by the tourist.</p></CardContent></Card>
      </div>
      <div className="mt-14">
        <h2 className="text-2xl font-extrabold text-slate-900">Regional Headquarters & Branches</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <Card key={i} className="border-slate-200">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-[#2e7d32]"><MapPin className="h-4 w-4" /><span className="font-bold">{b.region}</span></div>
                <p className="mt-2 font-medium text-slate-800">{b.name}</p>
                <p className="text-sm text-slate-500">{b.role}</p>
                <Badge variant="secondary" className="mt-3">{b.country}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardView() {
  const [stats, setStats] = useState(null)
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [s, l] = await Promise.all([
        fetch('/api/stats').then(r => r.json()),
        fetch('/api/leads').then(r => r.json())
      ])
      setStats(s)
      setLeads(Array.isArray(l) ? l : [])
    } catch (e) {
      toast.error('Failed to load dashboard')
    } finally { setLoading(false) }
  }, [])
  useEffect(() => { load() }, [load])
  if (loading || !stats) return <div className="flex justify-center py-24"><Loader2 className="h-8 w-8 animate-spin text-slate-400" /></div>
  const cards = [
    { label: 'Total Listings', value: stats.totalListings, icon: <Compass className="h-5 w-5" />, color: '#1e3a8a' },
    { label: 'Click Leads', value: stats.totalLeads, icon: <MessageCircle className="h-5 w-5" />, color: '#f97316' },
    { label: 'Est. Commission', value: '$' + stats.estRevenueUSD, icon: <Percent className="h-5 w-5" />, color: '#10b981' },
    { label: 'Safari / Local', value: stats.safariCount + ' / ' + stats.localCount, icon: <Users className="h-5 w-5" />, color: '#3b82f6' }
  ]
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-center justify-between"><div><h1 className="text-3xl font-extrabold text-slate-900">Revenue Dashboard</h1><p className="text-slate-500">Track affiliate clicks and 5% commission leverage.</p></div><Button variant="outline" onClick={load}>Refresh</Button></div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Card key={i} className="border-slate-200">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{c.label}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ backgroundColor: c.color }}>{c.icon}</span>
              </div>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{c.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-8 border-slate-200">
        <CardHeader><CardTitle className="text-base">Recent affiliate clicks</CardTitle></CardHeader>
        <CardContent>
          {leads.length === 0 ? (
            <p className="py-8 text-center text-slate-400">No clicks tracked yet.</p>
          ) : (
            <Table>
              <TableHeader><TableRow><TableHead>Vendor</TableHead><TableHead>Listing</TableHead><TableHead className="text-right">Est. 5%</TableHead></TableRow></TableHeader>
              <TableBody>
                {leads.slice(0, 15).map(l => (
                  <TableRow key={l.id}>
                    <TableCell className="font-medium">{l.vendor}</TableCell>
                    <TableCell>{l.listingTitle}</TableCell>
                    <TableCell className="text-right">Tracked</TableCell>
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

function AdminView() {
  const [listings, setListings] = useState([])
  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/listings')
      const data = await res.json()
      setListings(Array.isArray(data) ? data : [])
    } catch (e) {}
  }, [])
  useEffect(() => { load() }, [load])
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 text-center">
      <h1 className="text-3xl font-extrabold text-slate-900">Admin Portal</h1>
      <p className="mt-4 text-slate-600">Inventory management is handled via the internal CMS.</p>
      <div className="mt-8 grid gap-4 max-w-2xl mx-auto">
         {listings.map(l => (
           <Card key={l.id} className="text-left">
             <CardContent className="p-4 flex justify-between items-center">
               <div><p className="font-bold">{l.title}</p><p className="text-xs text-slate-500">{l.vendor}</p></div>
               <Badge>{l.type}</Badge>
             </CardContent>
           </Card>
         ))}
      </div>
    </div>
  )
}

export default function Page() {
  const [view, setView] = useState('home')
  const [params, setParams] = useState({ type: 'safari', q: '' }); const [mobile, setMobile] = useState(false)
  const go = (type, q = '') => { setParams({ type, q }); setView('explorer'); setMobile(false); window.scrollTo(0, 0) }
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Toaster position="top-center" />
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => setView('home')} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a8a]/10 to-[#f97316]/10 text-[#1e3a8a]"><Compass className="h-6 w-6" /></div>
            <span className="text-xl font-black tracking-tighter">OSARE</span>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <button
                onClick={() => { setView(n.key); setMobile(false) }} key={n.key} className="text-sm font-bold transition-colors" style={{ color: view === n.key ? '#f97316' : '#64748b' }}>{n.label}</button>))}
            <Button onClick={() => go('safari')} size="sm" className="bg-[#1e3a8a] text-white">Explore</Button>
          </div>
          <button className="md:hidden" onClick={() => setMobile(!mobile)}>{mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </nav>
      {view === 'home' && <HomeView go={go} />}
      {view === 'explorer' && <TierExplorer type={params.type} />}
      {view === 'safari' && <TierExplorer type="safari" />}
      {view === 'local' && <TierExplorer type="local" />}
      {view === 'about' && <AboutView />}
      {view === 'dashboard' && <DashboardView />}
      {view === 'admin' && <AdminView />}
      {view === 'vendor' && <div className="py-20 text-center"><h2 className="text-2xl font-bold">Vendor Portal Coming Soon</h2></div>}
      <footer className="border-t border-slate-200 bg-slate-50 py-16 mt-20">
        <div className="mx-auto max-w-7xl px-5 text-center md:text-left">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e3a8a] text-white"><Compass className="h-5 w-5" /></div>
                <span className="text-lg font-black">OSARE</span>
              </div>
              <p className="mt-4 text-sm text-slate-500">East Africa Safari Routes & Transit Hub.</p>
            </div>
            <div><h4 className="text-sm font-bold uppercase text-slate-400">Platform</h4><ul className="mt-4 space-y-2"><li><button onClick={() => go('safari')} className="text-sm text-slate-600">Safari & Tourism</button></li><li><button onClick={() => go('local')} className="text-sm text-slate-600">Local Transit</button></li></ul></div>
            <div><h4 className="text-sm font-bold uppercase text-slate-400">Vendors</h4><ul className="mt-4 space-y-2"><li><button onClick={() => setView('vendor')} className="text-sm text-slate-600">Vendor Portal</button></li><li className="text-sm text-slate-400">Only 5% commission</li></ul></div>
            <div><h4 className="text-sm font-bold uppercase text-slate-400">Contact</h4><ul className="mt-4 space-y-2"><li className="text-sm text-slate-600">+254 758 378 729</li><li className="text-sm text-slate-600">Nairobi CBD, Kenya</li></ul></div>
          </div>
          <div className="mt-16 border-t border-slate-200 pt-8"><p className="text-xs text-slate-400">Copyright 2026 OSARE - easafariroutes.com. All rights reserved. Built by nakinson osare.</p></div>
        </div>
      </footer>
    </main>
  )
}