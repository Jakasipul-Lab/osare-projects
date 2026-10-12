'use client'
import { useEffect, useState, useCallback } from 'react'
import { Search, MapPin, MessageCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const LOCAL_HERO = 'https://images.unsplash.com/photo-1770283553885-bad1d6f7acd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxtYXRhdHUlMjBidXN8ZW58MHx8fHwxNzgzMzgyMDc4fDA&ixlib=rb-4.1.0&q=85'

const BUS_FALLBACK = LOCAL_HERO

const SUGGESTIONS = ['Nairobi', 'Mombasa', 'Kisumu', 'Kampala', 'Kitui', 'Nanyuki', 'Kajiado']

function formatDate(value) {
  if (!value) return ''
  const d = new Date(`${value}T00:00:00`)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function waLink(route, trip) {
  const tripFrom = trip.from || route.from
  const tripTo = trip.to || route.to
  const day = formatDate(trip.date)
  const people = `${trip.passengers} passenger${trip.passengers === 1 ? '' : 's'}`
  const text = day
    ? `Hello ${route.operator}, I found you on easafariroutes.com. I would like to travel from ${tripFrom} to ${tripTo} on ${day}, ${people}. Is a seat available, and what is the fare?`
    : `Hello ${route.operator}, I found you on easafariroutes.com. I would like information about the ${tripFrom} to ${tripTo} bus for ${people}.`
  return `https://wa.me/${route.whatsapp}?text=${encodeURIComponent(text)}`
}

function RouteCard({ route, trip }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden bg-slate-200">
        <img
          src={route.image || BUS_FALLBACK}
          alt={route.operator}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: '#1e3a8a' }} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-slate-900">{route.operator}</h3>
          {route.confirmed ? (
            <Badge className="shrink-0 border-0 bg-emerald-600 text-white">Confirmed</Badge>
          ) : null}
        </div>
        <p className="mt-3 flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-[#1e3a8a]">
          <MapPin className="h-4 w-4 shrink-0" /> {route.from} → {route.to}
        </p>
        {route.departureInfo ? <p className="mt-3 text-sm text-slate-700">{route.departureInfo}</p> : null}
        {route.boardingPoint ? (
          <p className="mt-1 text-sm text-slate-600">
            Boarding point: {route.boardingPoint}
            {route.landmark ? ` (near ${route.landmark})` : ''}
          </p>
        ) : null}
        {route.fareLabel ? <p className="mt-1 text-sm text-slate-600">Fare: {route.fareLabel}</p> : null}
        {route.bookingMethod ? <p className="mt-3 text-xs text-slate-500">{route.bookingMethod}</p> : null}
        <div className="mt-auto flex flex-col gap-2 pt-4">
          {route.whatsapp ? (
            <a
              href={waLink(route, trip)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5b]"
            >
              <MessageCircle className="h-4 w-4" /> Request this trip on WhatsApp
            </a>
          ) : (
            <p className="rounded-md bg-slate-100 px-3 py-2.5 text-center text-sm text-slate-500">
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
      </div>
    </div>
  )
}

export function LocalRoutesExplorer() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [minDate, setMinDate] = useState('')
  const [searched, setSearched] = useState({ from: '', to: '' })
  const [routes, setRoutes] = useState([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  const load = useCallback(async (f, t) => {
    setLoading(true)
    setFailed(false)
    setSearched({ from: f.trim(), to: t.trim() })
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
    const now = new Date()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    setMinDate(`${now.getFullYear()}-${month}-${day}`)
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

  const trip = { from: searched.from && searched.to ? searched.from : '', to: searched.from && searched.to ? searched.to : '', date, passengers }

  return (
    <div className="min-h-screen pb-16" style={{ backgroundColor: '#eef2f9' }}>
      <div className="relative w-full overflow-hidden">
        <img src={LOCAL_HERO} alt="banner" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(23,42,105,.94), rgba(30,58,138,.88))' }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-12 text-white">
          <h1 className="text-3xl font-extrabold md:text-4xl">Local Commute — Buses &amp; Matatus</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Plan your trip: choose where you travel from and to, and the day. See the buses on that route and send your request to the operator on WhatsApp.
          </p>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm md:p-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_1.3fr_1fr_1fr_auto] md:items-end">
              <div>
                <label htmlFor="route-from" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/80">
                  From
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="route-from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && search()}
                    placeholder="e.g. Nairobi"
                    className="h-12 border-0 bg-white pl-10 text-base text-slate-900"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="route-to" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/80">
                  To
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="route-to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && search()}
                    placeholder="e.g. Mombasa"
                    className="h-12 border-0 bg-white pl-10 text-base text-slate-900"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="route-date" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/80">
                  Travel date
                </label>
                <Input
                  id="route-date"
                  type="date"
                  value={date}
                  min={minDate || undefined}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-12 border-0 bg-white text-base text-slate-900"
                />
              </div>
              <div>
                <label htmlFor="route-passengers" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/80">
                  Passengers
                </label>
                <select
                  id="route-passengers"
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="h-12 w-full rounded-md border-0 bg-white px-3 text-base text-slate-900"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'passenger' : 'passengers'}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                onClick={search}
                className="h-12 w-full px-8 font-semibold text-white md:w-auto"
                style={{ backgroundColor: '#f59e0b' }}
              >
                Search buses
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-white/70">Try:</span>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => pickSuggestion(s)}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20"
                >
                  {s}
                </button>
              ))}
              {from || to ? (
                <button onClick={clearSearch} className="ml-auto text-xs font-medium text-white underline hover:text-white/80">
                  Clear search
                </button>
              ) : null}
            </div>
            <p className="mt-3 text-xs text-white/70">
              Your date and number of passengers are added to the WhatsApp message. The operator confirms seats and fares.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-5">
        <p className="mb-5 text-sm font-medium text-slate-600">
          {loading ? 'Searching…' : `${routes.length} bus route${routes.length === 1 ? '' : 's'} found`}
        </p>
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
          </div>
        ) : failed ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-20 text-center text-slate-500">
            The routes could not be loaded. Please try again in a moment.
          </div>
        ) : routes.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-20 text-center text-slate-500">
            No buses found for this route yet. We add operators one by one. Try a single town, such as Nairobi.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <RouteCard key={r.id} route={r} trip={trip} />
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
