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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

const HERO = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxBZnJpY2FuJTIwc2FmYXJpfGVufDB8fHx8MTc4MzM4MjA2Nnww&ixlib=rb-4.1.0&q=85'

const NAV = [
  { key: 'home', label: 'Home' },
  { key: 'safari', label: 'Safari Discovery' },
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
  
  const handleAction = () => {
    if (isSafari) {
      onBook(item)
    } else {
      if (item.vendorUrl) {
        window.open(item.vendorUrl, '_blank')
      } else {
        toast.info(`Contact ${item.vendor} to book.`, {
          description: "Free informational service by OSARE."
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
          <Badge className="absolute right-3 top-3 bg-emerald-100 text-emerald-700 border-0 font-black">
            FREE INFO
          </Badge>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
        <p className="mt-1 text-sm font-semibold flex items-center gap-1" style={{ color: accentColor }}>
          <ShieldCheck className="h-3.5 w-3.5" /> {isSafari ? 'Verified Vendor' : 'Operator'}: {item.vendor}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2 border-y border-slate-50 py-3">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">Official Contact</p>
            <p className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
               <Phone className="h-3 w-3" /> {item.vendorContact || 'Official Line'}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">{isSafari ? 'Primary Hub' : 'Boarding At'}</p>
            <p className="flex items-center gap-1.5 text-xs text-slate-600 font-medium line-clamp-1">
               <MapPin className="h-3 w-3" /> {item.boardingPoint || item.location}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600 line-clamp-2 leading-relaxed">{item.description}</p>

        <div className="mt-auto pt-5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900">{item.priceLabel}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isSafari ? 'Starting from' : 'Official Rate'}</span>
          </div>
          <Button 
            onClick={handleAction}
            disabled={booking === item.id}
            className="gap-2 px-6 py-5 font-bold shadow-lg"
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
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(true)
  const [booking, setBooking] = useState(null)
  
  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/listings?type=${type}&q=${q}`)
      const data = await res.json()
      let filtered = Array.isArray(data) ? data : []
      if (cat !== 'All') filtered = filtered.filter(i => i.category === cat)
      setItems(filtered)
    } catch (e) { toast.error("Search unavailable") }
    finally { setLoading(false) }
  }, [type, q, cat])

  useEffect(() => { load() }, [load])

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-black text-slate-900">{type === 'safari' ? 'Safari Discovery' : 'Local Transit Hub'}</h2>
          <p className="text-slate-500 font-medium mt-1">{items.length} verified options found in East Africa.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input 
              placeholder="Search Routes..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-10 w-full sm:w-64"
            />
          </div>
          <Select value={cat} onValueChange={setCat}>
            <SelectTrigger className="w-full sm:w-48 font-semibold">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {(type === 'safari' ? SAFARI_CATS : LOCAL_CATS).map(c => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center"><Loader2 className="h-10 w-10 animate-spin text-slate-200" /></div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(it => (
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
      <div className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={HERO} alt="Hero" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-5 py-24 md:py-40">
          <Badge className="mb-6 bg-[#f97316] text-white border-0 px-4 py-1.5 text-sm font-bold shadow-lg">Official Safari discovery Algorithm</Badge>
          <h1 className="text-5xl font-black text-white md:text-7xl tracking-tighter">
            DISCOVER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fbbf24]">EAST AFRICA</span>
          </h1>
          <p className="mt-8 text-lg font-medium text-slate-300 max-w-xl leading-relaxed">
            The ultimate B2B platform connecting global travelers with verified local operators. Direct, transparent, and fair.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button onClick={() => go('safari')} size="lg" className="bg-[#f97316] text-white hover:bg-[#ea580c] px-8 py-7 text-lg font-black shadow-xl">
              Start Discovery <Compass className="ml-2 h-5 w-5" />
            </Button>
            <Button onClick={() => go('local')} size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-7 text-lg font-black">
              Local Transit <Bus className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamMemberCard({ member, onEdit }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
            {member.image ? <img src={member.image} alt={member.name} className="h-full w-full object-cover" /> : <Users className="h-8 w-8 text-slate-400" />}
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{member.name}</h4>
            <p className="text-sm text-blue-600 font-medium">{member.role}</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 line-clamp-3 mb-4">{member.bio || 'Team member at OSARE Kisumu Headquarters.'}</p>
        <Button variant="ghost" size="sm" className="w-full gap-2 text-slate-400 hover:text-blue-600" onClick={() => onEdit(member)}>
          <UserCog className="h-4 w-4" /> Edit Profile
        </Button>
      </CardContent>
    </Card>
  )
}

function TeamEditModal({ member, onClose, onSave }) {
  const [form, setForm] = useState(member || { name: '', role: '', bio: '', image: '', email: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        onSave();
        onClose();
      } else {
        const d = await res.json();
        alert(d.error || 'Failed to save');
      }
    } catch (e) { alert('Error saving'); }
    finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <Card className="w-full max-w-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Team Profile</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}><X /></Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Full Name</Label><Input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
              <div className="space-y-2"><Label>Role</Label><Input required value={form.role} onChange={e => setForm({...form, role: e.target.value})} /></div>
            </div>
            <div className="space-y-2"><Label>Bio</Label><Textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} /></div>
            <div className="space-y-2"><Label>Image URL</Label><Input value={form.image} onChange={e => setForm({...form, image: e.target.value})} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Email</Label><Input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
              <div className="space-y-2"><Label>Phone</Label><Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
            </div>
            <div className="space-y-2"><Label>Access Password</Label><Input type="password" required value={form.password} onChange={e => setForm({...form, password: e.target.value})} /></div>
            <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Saving...' : 'Update Profile'}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function AboutView() {
  const [team, setTeam] = useState([]);
  const [editing, setEditing] = useState(null);
  
  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/team');
      const data = await res.json();
      setTeam(Array.isArray(data) ? data : []);
    } catch (e) {}
  }, []);

  useEffect(() => { load() }, [load]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">About OSARE</h1>
        <p className="mt-8 text-xl font-medium leading-relaxed text-slate-600">
          OSARE is East Africa's first dedicated B2B discovery hub for travel and transit. 
          Based in our **Kisumu Headquarters**, we are committed to making travel discovery seamless, transparent, and direct.
        </p>
      </div>

      {/* Founder Section */}
      <div className="mt-20 p-8 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
        <div className="h-32 w-32 rounded-2xl bg-white shadow-lg flex-shrink-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80" alt="Nakinson Owang'o" className="h-full w-full object-cover" />
        </div>
        <div>
          <Badge className="bg-blue-600 mb-2">Founder & CEO</Badge>
          <h2 className="text-2xl font-black text-slate-900">Nakinson Owang'o</h2>
          <p className="mt-3 text-slate-600 font-medium leading-relaxed">
            Leading the team from our Kisumu Headquarters, Nakinson founded EA SafariRoutes (OSARE) to empower local Tanzanian and Kenyan operators with direct global connections.
          </p>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-900">Our Team</h2>
          <Button variant="outline" size="sm" onClick={() => setEditing({})}>+ Add Member</Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {team.map(m => (
             <TeamMemberCard key={m.id} member={m} onEdit={setEditing} />
           ))}
           {team.length === 0 && <p className="text-slate-400">Head Office staff profiles will appear here as they join.</p>}
        </div>
      </div>

      <div className="mt-24 grid gap-12 sm:grid-cols-2 border-t border-slate-100 pt-16">
        <div>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-4">Our Mission</h3>
          <p className="text-slate-500 font-medium leading-relaxed">To empower local vendors by giving them a global platform without the burden of heavy commission fees.</p>
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-4">Our Model</h3>
          <p className="text-slate-500 font-medium leading-relaxed">We charge a flat 5% service fee per tracked lead, ensuring we only profit when our vendors grow.</p>
        </div>
      </div>

      {editing && (
        <TeamEditModal 
          member={editing.id ? editing : null} 
          onClose={() => setEditing(null)} 
          onSave={load} 
        />
      )}
    </div>
  )
}

function DashboardView() {
  const [stats, setStats] = useState({ totalLeads: 0, estRevenueUSD: 0 });
  useEffect(() => { fetch('/api/stats').then(r => r.json()).then(setStats) }, []);
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-black text-slate-900">Performance</h1>
      <div className="grid gap-6 md:grid-cols-3 mt-10">
        <Card className="bg-[#1e3a8a] text-white"><CardHeader><CardTitle>Total Leads</CardTitle></CardHeader><CardContent><p className="text-4xl font-black">{stats.totalLeads}</p></CardContent></Card>
        <Card className="bg-[#f97316] text-white"><CardHeader><CardTitle>Est. Revenue</CardTitle></CardHeader><CardContent><p className="text-4xl font-black">${stats.estRevenueUSD}</p></CardContent></Card>
      </div>
    </div>
  )
}

function VendorPortalView() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-24 text-center">
      <Building2 className="h-10 w-10 text-blue-600 mx-auto mb-10" />
      <h1 className="text-4xl font-black text-slate-900">Grow with OSARE</h1>
      <p className="mt-6 text-xl text-slate-600">Join East Africa's leading discovery platform. 5% commission on leads.</p>
      <div className="mt-10 flex justify-center gap-4">
        <Button onClick={() => window.location.href = '/onboarding'} size="lg" className="bg-blue-600 text-white font-bold">Register as Vendor</Button>
      </div>
    </div>
  )
}

function AdminView() {
  const [listings, setListings] = useState([]);
  useEffect(() => { fetch('/api/listings').then(r => r.json()).then(setListings) }, []);
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-extrabold text-center">Admin</h1>
      <div className="mt-8 grid gap-4 max-w-2xl mx-auto">
         {Array.isArray(listings) && listings.map(l => (  
           <Card key={l.id} className="p-4 flex justify-between"><div><p className="font-bold">{l.title}</p></div><Badge>{l.type}</Badge></Card>
         ))}
      </div>
    </div>
  )
}

export default function Page() {
  const [view, setView] = useState('home');
  const [params, setParams] = useState({ type: 'safari', q: '' });
  const [mobile, setMobile] = useState(false)
  const go = (type, q = '') => { setParams({ type, q }); setView('explorer'); setMobile(false); window.scrollTo(0, 0) };
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Toaster position="top-center" />
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => setView('home')} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3a8a]/5 text-[#1e3a8a]"><Compass className="h-6 w-6" /></div>
            <span className="text-xl font-black">OSARE</span>
          </button>
          <div className="hidden md:flex gap-8 items-center">
            {NAV.map((n) => (<button onClick={() => setView(n.key)} key={n.key} className="text-sm font-bold transition-colors hover:text-[#f97316]">{n.label}</button>))}
            <Button onClick={() => go('safari')} className="bg-[#1e3a8a] text-white font-bold">Discovery</Button>
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
      {view === 'vendor' && <VendorPortalView />}
      <footer className="border-t border-slate-200 bg-slate-50 py-16 mt-20 text-center">
        <p className="text-xs text-slate-400">Copyright 2026 OSARE - easafariroutes.com. Built by nakinson osare.</p>
      </footer>
    </main>
  )
}
