'use client'
import { useState } from 'react'
import { validatePhone } from '@/lib/phone'

export default function EnquireButton({ listingId }) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [month, setMonth] = useState('')
  const [travelers, setTravelers] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const start = async () => {
    const check = validatePhone(phone)
    if (!check.ok) {
      setError(check.error)
      return
    }
    setError('')
    setBusy(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          listingId,
          travelerPhone: check.e164,
          travelerName: name.trim() || undefined,
          travelMonth: month || undefined,
          travelers: travelers.trim() || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.whatsappUrl) {
        setError(data.error || 'Could not start the enquiry. Please try again.')
        return
      }
      const w = window.open(data.whatsappUrl, '_blank')
      if (!w) window.location.href = data.whatsappUrl
    } catch (e) {
      setError('Could not start the enquiry. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (optional)"
        className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
      />
      <div className="grid grid-cols-2 gap-3">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
        >
          <option value="">Month of travel (optional)</option>
          {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <input
          value={travelers}
          onChange={(e) => setTravelers(e.target.value.replace(/[^0-9]/g, '').slice(0, 2))}
          placeholder="Travelers (optional)"
          inputMode="numeric"
          className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
        />
      </div>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Your WhatsApp number, e.g. +254 712 345 678"
        inputMode="tel"
        className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
      />
      <p className="text-xs text-slate-400">So we can confirm your enquiry and follow up if needed.</p>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button
        onClick={start}
        disabled={busy}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25d366] py-3 font-semibold text-white hover:bg-[#1ebe5b] disabled:opacity-60"
      >
        {busy ? 'Opening WhatsApp…' : 'Enquire via WhatsApp'}
      </button>
    </div>
  )
}
