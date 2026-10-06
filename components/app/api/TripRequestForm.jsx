'use client'
import { useState } from 'react'
import { validatePhone } from '@/lib/phone'

const inputClass =
  'w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]'

export default function TripRequestForm() {
  const [form, setForm] = useState({
    travelerName: '',
    travelerPhone: '',
    destination: '',
    travelDates: '',
    travelers: '',
    budget: '',
    message: '',
    website: '', // hidden spam trap, real visitors never fill it in
  })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [doneCode, setDoneCode] = useState('')

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.destination.trim().length < 2) {
      setError('Please tell us where you want to go.')
      return
    }
    const check = validatePhone(form.travelerPhone)
    if (!check.ok) {
      setError(check.error)
      return
    }
    setBusy(true)
    try {
      const res = await fetch('/api/trip-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, travelerPhone: check.e164 }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setError(data.error || 'Could not send your request. Please try again.')
        return
      }
      setDoneCode(data.code)
    } catch (err) {
      setError('Could not send your request. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  if (doneCode) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <h2 className="text-lg font-bold text-emerald-800">Thank you, your request is in</h2>
        <p className="mt-2 text-sm text-emerald-900">
          Your reference is <span className="font-mono font-semibold">{doneCode}</span>.
          We will get back to you on WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Where do you want to go? *</label>
        <input
          value={form.destination}
          onChange={set('destination')}
          placeholder="e.g. Maasai Mara, Zanzibar, Kilimanjaro"
          className={inputClass}
          maxLength={200}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">When?</label>
          <input
            value={form.travelDates}
            onChange={set('travelDates')}
            placeholder="e.g. mid-December, 5 to 12 Feb"
            className={inputClass}
            maxLength={100}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Number of travelers</label>
          <input
            value={form.travelers}
            onChange={set('travelers')}
            placeholder="e.g. 2"
            inputMode="numeric"
            className={inputClass}
            maxLength={3}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Budget (optional)</label>
        <input
          value={form.budget}
          onChange={set('budget')}
          placeholder="e.g. around $1,500 per person"
          className={inputClass}
          maxLength={100}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">What would you like? (optional)</label>
        <textarea
          value={form.message}
          onChange={set('message')}
          rows={4}
          placeholder="Tell us about the trip you have in mind: safari, beach, hotel, transport, anything special."
          className={inputClass}
          maxLength={2000}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your name (optional)</label>
          <input
            value={form.travelerName}
            onChange={set('travelerName')}
            placeholder="Your name"
            className={inputClass}
            maxLength={100}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Your WhatsApp number *</label>
          <input
            value={form.travelerPhone}
            onChange={set('travelerPhone')}
            placeholder="e.g. +254 712 345 678"
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
        We use your details only to follow up on this request and to connect you with a suitable partner.
      </p>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-lg bg-[#1e3a8a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1e3a8a]/90 disabled:opacity-60"
      >
        {busy ? 'Sending...' : 'Send my request'}
      </button>
    </form>
  )
}
