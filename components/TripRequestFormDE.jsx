'use client'
import { useState } from 'react'
import { validatePhone } from '@/lib/phone'

function todayIso() {
  const now = new Date()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${m}-${d}`
}

function prettyDate(value) {
  if (!value) return ''
  const d = new Date(`${value}T00:00:00`)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })
}

const inputClass =
  'w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]'

export default function TripRequestFormDE({ initialDestination = '' }) {
  const [form, setForm] = useState({
    travelerName: '',
    travelerPhone: '',
    destination: initialDestination,
    travelDates: '',
    travelers: '',
    budget: '',
    message: '',
    website: '', // hidden spam trap, real visitors never fill it in
  })
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [doneCode, setDoneCode] = useState('')

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.destination.trim().length < 2) {
      setError('Bitte nennen Sie uns Ihr Reiseziel.')
      return
    }
    const check = validatePhone(form.travelerPhone)
    if (!check.ok) {
      setError(check.error)
      return
    }
    // Combine the optional date pickers with the free-text "When?" note
    let range = ''
    if (dateFrom && dateTo) range = `${prettyDate(dateFrom)} bis ${prettyDate(dateTo)}`
    else if (dateFrom) range = `ab ${prettyDate(dateFrom)}`
    else if (dateTo) range = `bis ${prettyDate(dateTo)}`
    const note = form.travelDates.trim()
    const travelDates = (range && note ? `${range} (${note})` : range || note).slice(0, 100)
    // Marks the request as coming from the German form, so the owner sees it
    const message = `[Deutsches Formular] ${form.message.trim()}`.trim().slice(0, 2000)
    setBusy(true)
    try {
      const res = await fetch('/api/trip-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, message, travelDates, travelerPhone: check.e164 }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setError(data.error || 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.')
        return
      }
      setDoneCode(data.code)
    } catch (err) {
      setError('Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.')
    } finally {
      setBusy(false)
    }
  }

  if (doneCode) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <h2 className="text-lg font-bold text-emerald-800">Vielen Dank, Ihre Anfrage ist eingegangen</h2>
        <p className="mt-2 text-sm text-emerald-900">
          Ihre Referenz lautet <span className="font-mono font-semibold">{doneCode}</span>.
          Wir melden uns bei Ihnen per WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Wohin möchten Sie reisen? *</label>
        <input
          value={form.destination}
          onChange={set('destination')}
          placeholder="z. B. Kilimandscharo, Masai Mara, Sansibar"
          className={inputClass}
          maxLength={200}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Wann? (oder genaue Daten unten wählen)</label>
          <input
            value={form.travelDates}
            onChange={set('travelDates')}
            placeholder="z. B. Mitte Dezember, 5. bis 12. Februar"
            className={inputClass}
            maxLength={100}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Anzahl der Reisenden</label>
          <input
            value={form.travelers}
            onChange={set('travelers')}
            placeholder="z. B. 2"
            inputMode="numeric"
            className={inputClass}
            maxLength={3}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="trip-from-de" className="mb-1 block text-sm font-medium text-slate-700">
            Reise ab (optional)
          </label>
          <input
            id="trip-from-de"
            type="date"
            value={dateFrom}
            min={todayIso()}
            onChange={(e) => {
              setDateFrom(e.target.value)
              if (dateTo && e.target.value && dateTo < e.target.value) setDateTo(e.target.value)
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="trip-to-de" className="mb-1 block text-sm font-medium text-slate-700">
            Reise bis (optional)
          </label>
          <input
            id="trip-to-de"
            type="date"
            value={dateTo}
            min={dateFrom || todayIso()}
            onChange={(e) => setDateTo(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Budget (optional)</label>
        <input
          value={form.budget}
          onChange={set('budget')}
          placeholder="z. B. etwa 2.500 USD pro Person"
          className={inputClass}
          maxLength={100}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Was möchten Sie erleben? (optional)</label>
        <textarea
          value={form.message}
          onChange={set('message')}
          rows={4}
          placeholder="Erzählen Sie uns von Ihrer Reise: Kilimandscharo, Safari, Strand, Hotel, Transfers oder besondere Wünsche."
          className={inputClass}
          maxLength={1900}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Ihr Name (optional)</label>
          <input
            value={form.travelerName}
            onChange={set('travelerName')}
            placeholder="Ihr Name"
            className={inputClass}
            maxLength={100}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Ihre WhatsApp-Nummer *</label>
          <input
            value={form.travelerPhone}
            onChange={set('travelerPhone')}
            placeholder="mit Ländervorwahl, z. B. +49 151 2345678"
            inputMode="tel"
            className={inputClass}
          />
        </div>
      </div>

      {/* Spam trap: hidden from people, visible to bots */}
      <div style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }} aria-hidden="true">
        <label>Leave this empty</label>
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={set('website')}
        />
      </div>

      <p className="text-xs text-slate-400">
        Wir verwenden Ihre Angaben nur, um uns bei Ihnen zu melden und Sie mit einem passenden Anbieter zu verbinden.
      </p>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-lg bg-[#1e3a8a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1e3a8a]/90 disabled:opacity-60"
      >
        {busy ? 'Wird gesendet...' : 'Anfrage senden'}
      </button>
    </form>
  )
}
