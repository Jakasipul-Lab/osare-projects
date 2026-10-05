'use client'
import { useState } from 'react'

export default function EnquireButton({ listingId }) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const start = async () => {
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 9 || digits.length > 15) {
      setError('Please enter a valid phone number, for example 2547XXXXXXXX')
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
          travelerPhone: phone.trim(),
          travelerName: name.trim() || undefined,
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
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Your phone / WhatsApp number"
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
