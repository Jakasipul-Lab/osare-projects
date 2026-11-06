'use client'

import { useEffect, useState } from 'react'

const KEY = 'osare-ai-manual'
const EMPTY = { spend: '', views: '', clicks: '', impressions: '' }

function fmtDate(d) {
  if (!d) return '-'
  return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function Card({ label, value, note }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-extrabold text-slate-900">{value}</p>
      {note ? <p className="mt-1 text-xs text-slate-500">{note}</p> : null}
    </div>
  )
}

export default function OsareAiPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [manual, setManual] = useState(EMPTY)

  useEffect(() => {
    document.title = 'OSARE AI'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    try {
      const saved = localStorage.getItem(KEY)
      if (saved) setManual({ ...EMPTY, ...JSON.parse(saved) })
    } catch (e) {}
    fetch('/api/admin/osare-ai', { cache: 'no-store' })
      .then(async (r) => {
        const j = await r.json()
        if (!r.ok) throw new Error(j.error || 'Could not load')
        setData(j)
      })
      .catch((e) => setError(e.message))
    return () => meta.remove()
  }, [])

  function setField(name, value) {
    const next = { ...manual, [name]: value }
    setManual(next)
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch (e) {}
  }

  if (error) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-2xl font-extrabold text-slate-900">OSARE AI</h1>
        <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-slate-800">
          {error}. Log in to your OSARE admin area first, then open this page again.
        </p>
      </main>
    )
  }
  if (!data) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-slate-600">Loading numbers...</p>
      </main>
    )
  }

  const { leads, weekly, byVendor, byStatus, listings, recent } = data
  const spend = parseFloat(String(manual.spend).replace(',', '.')) || 0
  const views = parseFloat(manual.views) || 0
  const clicks = parseFloat(manual.clicks) || 0
  const impressions = parseFloat(manual.impressions) || 0
  const costPerVisit = spend > 0 && views > 0 ? spend / views : null
  const ctr = impressions > 0 ? (clicks / impressions) * 100 : null
  const maxWeek = Math.max(1, ...weekly.map((w) => w.n))

  const warnings = []
  if (leads.total === 0) warnings.push('No enquiries have been recorded yet.')
  else if (leads.daysSinceLast >= 7) warnings.push(`No enquiry for ${leads.daysSinceLast} days. Last one: ${fmtDate(leads.lastAt)}.`)
  if (leads.last7 === 0 && views >= 20) warnings.push(`${views} website visits from ads but 0 enquiries in the last 7 days. Check the landing page and the enquiry button.`)
  const leadVendors30 = new Set(byVendor.filter((v) => v.last30 > 0).map((v) => v.vendor))
  const silent = listings.filter((l) => l.published > 0 && l.vendor !== 'unknown' && !leadVendors30.has(l.vendor))
  if (silent.length) warnings.push(`Published but no enquiry in 30 days: ${silent.map((s) => s.vendor).join(', ')}.`)

  return (
    <main className="mx-auto max-w-5xl space-y-6 px-5 py-10">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">OSARE AI</h1>
        <p className="mt-1 text-sm text-slate-500">Private business dashboard. Updated {new Date(data.generatedAt).toLocaleString('en-GB')}.</p>
      </div>

      {warnings.length ? (
        <section className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
          <h2 className="font-bold text-slate-900">Needs attention</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-800">
            {warnings.map((w) => (<li key={w}>{w}</li>))}
          </ul>
        </section>
      ) : (
        <section className="rounded-xl border-2 border-green-300 bg-green-50 p-5 text-slate-800">Nothing needs attention right now.</section>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card label="Enquiries, all time" value={leads.total} note="includes your own tests" />
        <Card label="Last 7 days" value={leads.last7} />
        <Card label="Last 30 days" value={leads.last30} />
        <Card label="Days since last" value={leads.daysSinceLast === null ? '-' : leads.daysSinceLast} note={fmtDate(leads.lastAt)} />
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-slate-900">Enquiries per week (last 12 weeks)</h2>
        {weekly.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">No enquiries in the last 12 weeks.</p>
        ) : (
          <div className="mt-4 flex h-40 items-end gap-2">
            {weekly.map((w) => (
              <div key={w.week} className="flex flex-1 flex-col items-center justify-end">
                <span className="text-xs font-semibold text-slate-700">{w.n}</span>
                <div className="w-full rounded-t bg-blue-700" style={{ height: `${Math.max(6, (w.n / maxWeek) * 100)}px` }} />
                <span className="mt-1 text-[10px] text-slate-500">{fmtDate(w.week).slice(0, 6)}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-slate-900">Weekly numbers from Meta and Search Console</h2>
        <p className="mt-1 text-sm text-slate-500">Type them in once a week. They stay in this browser only.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ['spend', 'Ad spend (EUR)'],
            ['views', 'Landing page views'],
            ['clicks', 'Search clicks'],
            ['impressions', 'Search impressions'],
          ].map(([name, label]) => (
            <label key={name} className="text-sm text-slate-700">
              {label}
              <input
                inputMode="decimal"
                value={manual[name]}
                onChange={(e) => setField(name, e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </label>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-800">
          <span>Cost per visit: <strong>{costPerVisit === null ? '-' : `EUR ${costPerVisit.toFixed(2)}`}</strong></span>
          <span>Search click rate: <strong>{ctr === null ? '-' : `${ctr.toFixed(1)}%`}</strong></span>
          <span>Cost per enquiry (7 days): <strong>{spend > 0 && leads.last7 > 0 ? `EUR ${(spend / leads.last7).toFixed(2)}` : '-'}</strong></span>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-slate-900">Enquiries by vendor</h2>
          <table className="mt-3 w-full text-sm">
            <thead><tr className="text-left text-slate-500"><th className="py-1">Vendor</th><th>30 days</th><th>All</th></tr></thead>
            <tbody>
              {byVendor.map((v) => (
                <tr key={v.vendor} className="border-t border-slate-100"><td className="py-1">{v.vendor}</td><td>{v.last30}</td><td>{v.total}</td></tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-bold text-slate-900">Listings by vendor</h2>
          <table className="mt-3 w-full text-sm">
            <thead><tr className="text-left text-slate-500"><th className="py-1">Vendor</th><th>Published</th><th>All</th></tr></thead>
            <tbody>
              {listings.map((l) => (
                <tr key={l.vendor} className="border-t border-slate-100"><td className="py-1">{l.vendor}</td><td>{l.published}</td><td>{l.total}</td></tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-bold text-slate-900">Latest enquiries</h2>
        <p className="mt-1 text-xs text-slate-500">Status: {byStatus.map((s) => `${s.status} ${s.n}`).join(' · ')}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-slate-500"><th className="py-1">Code</th><th>Date</th><th>Listing</th><th>Vendor</th><th>Name</th></tr></thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.code} className="border-t border-slate-100">
                  <td className="py-1 font-mono">{r.code}</td>
                  <td>{fmtDate(r.created_at)}</td>
                  <td>{r.listing_title}</td>
                  <td>{r.vendor}</td>
                  <td>{r.traveler_name || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
