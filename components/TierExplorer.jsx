'use client'
import { useEffect, useState, useCallback } from 'react'
import {
  Search, MapPin, X, Compass, Bus, Plane, Car, Hotel, Mountain,
  Binoculars, Building2, Loader2, MessageCircle, Tag
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import { toast } from 'sonner'

const SAFARI_CATS = ['All', 'Safari Package', 'Kilimanjaro Climb', 'Hotel & Resort', 'Car & Caravan Hire', 'Light Aircraft Charter', 'Sightseeing']
const LOCAL_CATS = ['All', 'Matatu / Shuttle', 'Train (SGR)', 'Taxi / Car Hire', 'Airport Transfer']

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

function ListingCard({ item, onBook, booking, onOpen }) {
  const accent = item.type === 'safari' ? '#f97316' : '#1e3a8a'
  return (
    <Card
      onClick={() => onOpen(item)}
      className="cursor-pointer overflow-hidden border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img src={item.image || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop'} alt={item.title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop' }} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
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
        <a
          href={item.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-1 flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700"
        >
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
          onClick={(e) => { e.stopPropagation(); onBook(item) }}
          disabled={booking === item.id}
          className="mt-4 w-full gap-2 bg-[#25d366] text-white hover:bg-[#1ebe5b]"
        >
          {booking === item.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
          Book via WhatsApp
        </Button>
      </CardContent>
    </Card>
  )
}

function VendorModal({ item, onClose, onBook, booking }) {
  if (!item) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
          <img src={item.image || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop'} alt={item.title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop' }} className="h-full w-full object-cover" />
          <button onClick={onClose} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
          <p className="mt-1 text-sm font-semibold" style={{ color: item.type === 'safari' ? '#f97316' : '#1e3a8a' }}>
            By {item.vendor}
          </p>
          <a href={item.mapLink} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700">
            <MapPin className="h-3 w-3" /> {item.location}
          </a>
          <p className="mt-4 text-sm text-slate-600">{item.description}</p>
          {item.includes?.length ? (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.includes.map((inc, i) => (
                <span key={i} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">{inc}</span>
              ))}
            </div>
          ) : null}
          <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
            <div>
              <p className="text-2xl font-extrabold text-emerald-600">{item.priceLabel}</p>
              {item.season ? <p className="text-[11px] text-slate-400">{item.season}</p> : null}
            </div>
            <p className="flex items-center gap-1 text-[11px] text-slate-400">
              <Building2 className="h-3 w-3" /> {item.vendorOffice}
            </p>
          </div>
          <Button
            onClick={() => onBook(item)}
            disabled={booking === item.id}
            className="mt-4 w-full gap-2 bg-[#25d366] text-white hover:bg-[#1ebe5b]"
          >
            {booking === item.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
            Book via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}

export function TierExplorer({ type }) {
  const isSafari = type === 'safari'
  const cats = isSafari ? SAFARI_CATS : LOCAL_CATS
  const accent = isSafari ? '#f97316' : '#1e3a8a'
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [booking, setBooking] = useState(null)
  const [selected, setSelected] = useState(null)
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
  useEffect(() => { load() }, [cat]) // eslint-disable-line
  useEffect(() => { load() }, []) // eslint-disable-line
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
      <div className="mx-auto max-w-4xl px-5 pt-8">
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
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">{loading ? 'Searching…' : `${items.length} option${items.length === 1 ? '' : 's'} found`}</p>
        </div>
        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-slate-400" /></div>
        ) : items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
            No matches found. Try broader terms like {isSafari ? '"safari", "beach", "hotel"' : '"train", "taxi", "matatu"'}.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => <ListingCard key={item.id} item={item} onBook={handleBook} booking={booking} onOpen={setSelected} />)}
          </div>
        )}
      </div>
      <VendorModal item={selected} onClose={() => setSelected(null)} onBook={handleBook} booking={booking} />
    </div>
  )
}
