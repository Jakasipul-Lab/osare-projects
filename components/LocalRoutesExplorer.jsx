'use client'
import { useEffect, useState, useCallback } from 'react'
import { Search, MapPin, MessageCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const LOCAL_HERO = 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtYXRhdHUlMjBidXN8ZW58MHx8fHwxNzgzMzgyMDc4fDA&ixlib=rb-4.1.0&q=85'

const SUGGESTIONS = ['Nairobi', 'Mombasa', 'Kampala', 'Kitui', 'Thika', 'Nanyuki', 'Kajiado']

function waLink(route) {
  const text = `Hello ${route.operator}, I found you on easafariroutes.com. I would like information about the ${route.from} to ${route.to} bus.`
  return `https://wa.me/${route.whatsapp}?text=${encodeURIComponent(text)}`
}

function RouteCard({ route }) {
  return (
    <Card className="flex flex-col border-slate-200">
      <CardContent className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-slate-900">{route.operator}</h3>
          {route.confirmed ? (
            <Badge className="shrink-0 border-0 bg-emerald-600 text-white">Confirmed</Badge>
          ) : (
            <Badge className="shrink-0 border-0 bg-amber-100 text-amber-800">Details not yet confirmed</Badge>
          )}
        </div>
        <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-[#1e3a8a]">
          <MapPin className="h-4 w-4" /> {route.from} → {route.to}
        </p>
        {route.departureInfo ? <p className="mt-1 text-sm text-slate-600">{route.departureInfo}</p> : null}
        {route.boardingPoint ? (
          <p className="mt-1 text-sm text-slate-600">
            Boarding point: {route.boardingPoint}
            {route.landmark ? ` (near ${route.landmark})` : ''}
          </p>
        ) : null}
        {route.fareLabel ? <p className="mt-1 text-sm text-slate-600">Fare: {route.fareLabel}</p> : null}
        {route.bookingMethod ? <p className="mt-3 text-xs text-slate-500">{route.bookingMethod}</p> : null}
        <div className="mt-4 flex flex-col gap-2">
          {route.whatsapp ? (
            <a
              href={waLink(route)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1ebe5b]"
            >
              <MessageCircle className="h-4 w-4" /> Enquire via WhatsApp
            </a>
          ) : (
            <p className="rounded-md bg-slate-100 px-3 py-2 text-center text-sm text-slate-500">
              No contact number yet
            </p>
          )}
          {route.website ? (
            <a
              href={route.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium text-[#1e3a8a] hover:underline"
            >
              Visit their website
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}

export function LocalRoutesExplorer() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [routes, setRoutes] = useState([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  const load = useCallback(async (f, t) => {
    setLoading(true)
    setFailed(false)
    try {
      const params = new URLSearchParams()
      if (f.trim()) params.set('from', f.trim())
      if (t.trim()) params.set('to', t.trim())
      const res = await fetch(`/api/local-routes?${params.toString()}`)
      if (!res.ok) throw new Error('Bad response')
      const data = await res.json()
      setRoutes(Array.isArray(data) ? data : [])
    } catch (e) {
      setRoutes([])
      setFailed(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load('', '')
  }, [load])

  const search = () => load(from, to)

  const pickSuggestion = (town) => {
    if (!from.trim()) {
      setFrom(town)
      load(town, to)
    } else {
      setTo(town)
      load(from, town)
    }
  }

  const clearSearch = () => {
    setFrom('')
    setTo('')
    load('', '')
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="relative h-64 w-full overflow-hidden">
        <img src={LOCAL_HERO} alt="banner" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(30,58,138,.9), rgba(59,130,246,.75))' }}
        />
        <div className="absolute inset-0 mx-auto flex max-w-5xl flex-col justify-center px-5 text-white">
          <h1 className="text-3xl font-extrabold md:text-4xl">Local Commute — Buses &amp; Matatus</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Find daily buses between cities and towns. See the operator and message them directly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="mx-auto -mt-8 max-w-4xl px-5">
        <Card className="border-slate-200 shadow-lg">
          <CardContent className="p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  id="route-from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && search()}
                  placeholder="From (e.g. Nairobi)"
                  className="h-12 pl-10 text-base"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  id="route-to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && search()}
                  placeholder="To (e.g. Mombasa)"
                  className="h-12 pl-10 text-base"
                />
              </div>
              <Button onClick={search} className="h-12 px-6 text-white" style={{ backgroundColor: '#1e3a8a' }}>
                Search
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400">Try:</span>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => pickSuggestion(s)}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
                >
                  {s}
                </button>
              ))}
              {from || to ? (
                <button onClick={clearSearch} className="ml-auto text-xs font-medium text-[#1e3a8a] hover:underline">
                  Clear search
                </button>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-5">
        <p className="mb-5 text-sm text-slate-500">
          {loading ? 'Searching…' : `${routes.length} bus route${routes.length === 1 ? '' : 's'} found`}
        </p>
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
          </div>
        ) : failed ? (
          <div className="rounded-xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
            The routes could not be loaded. Please try again in a moment.
          </div>
        ) : routes.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
            No buses found for this route yet. We add operators one by one. Try a single town, such as Nairobi.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <RouteCard key={r.id} route={r} />
            ))}
          </div>
        )}
        <p className="mt-8 text-sm text-slate-500">
          Fares and departure times are confirmed directly with the operator.
        </p>
      </div>
    </div>
  )
}
