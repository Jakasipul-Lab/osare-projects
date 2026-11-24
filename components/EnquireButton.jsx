'use client'
import { useRef, useState } from 'react'
import { validatePhone } from '@/lib/phone'

export default function EnquireButton({ listingId }) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [month, setMonth] = useState('')
  const [travelers, setTravelers] = useState('')
  const [busy, setBusy] = useState(false)
  const [slow, setSlow] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(null)
  const lock = useRef(false)

  const start = async () => {
    if (lock.current) return
    const check = validatePhone(phone)
    if (!check.ok) {
      setError(check.error)
      return
    }
    setError('')
    lock.current = true
    setBusy(true)
    setSlow(false)
    const slowTimer = setTimeout(() => setSlow(true), 5000)
    const controller = new AbortController()
    const abortTimer = setTimeout(() => controller.abort(), 20000)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
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
      setSent({ url: data.whatsappUrl, code: (data.lead && data.lead.code) || '' })
      const w = window.open(data.whatsappUrl, '_blank')
      if (!w) window.location.href = data.whatsappUrl
    } catch (e) {
      setError(
        e && e.name === 'AbortError'
          ? 'This is taking longer than usual. Please check your connection and try again.'
          : 'Could not start the enquiry. Please try again.'
      )
    } finally {
      clearTimeout(slowTimer)
      clearTimeout(abortTimer)
      setBusy(false)
      setSlow(false)
      lock.current = false
    }
  }

  if (sent) {
    return (
      <div className="space-y-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-slate-800">
        <p className="font-semibold">Your request is saved{sent.code ? ` (${sent.code})` : ''}.</p>
        <p>WhatsApp should open now. If it did not, tap the green button below, then press Send in WhatsApp so the message reaches the operator.</p>
        <a
          href={sent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-lg bg-[#25d366] py-3 font-semibold text-white hover:bg-[#1ebe5b]"
        >
          Open WhatsApp
        </a>
      </div>
    )
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
        {busy ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" /> : null}
        {busy ? (slow ? 'Still sending, please wait…' : 'Sending your request…') : 'Enquire via WhatsApp'}
      </button>
    </div>
  )
}
