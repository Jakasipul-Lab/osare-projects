'use client'

import { useEffect, useState } from 'react'

function fmt(d) {
  try {
    return new Date(d).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
  } catch (e) {
    return ''
  }
}

export default function AdminVisitsPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  async function load() {
    setError('')
    try {
      const r = await fetch('/api/admin/visits', { cache: 'no-store' })
      const j = await r.json()
      if (!r.ok) throw new Error(j.error || 'Could not load')
      setData(j)
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    document.title = 'OSARE visits'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    load()
    return () => meta.remove()
  }, [])

  const rows = data ? data.bySource : []
  const days = data ? data.byDay : []
  const total = rows.reduce((n, r) => n + r.visits, 0)
  const requestTaps = rows.reduce((n, r) => n + (r.request_taps || 0), 0)
  const whatsappTaps = rows.reduce((n, r) => n + (r.whatsapp_taps || 0), 0)

  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <h1 className="text-2xl font-extrabold text-slate-900">Visits to the German Kilimanjaro pages</h1>
      <p className="mt-1 text-sm text-slate-600">
        Our own count, last 30 days. Bots are left out. A visit is a page load. A tap is a click on a request or WhatsApp button. Each ad link carries a tag, so you can see which ad sent the visitor.
      </p>

      <button
        onClick={load}
        className="mt-4 rounded-md bg-emerald-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        Refresh
      </button>

      {error ? (
        <p className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-800">{error}</p>
      ) : null}

      {!data && !error ? <p className="mt-6 text-slate-500">Loading…</p> : null}

      {data ? (
        <>
          <p className="mt-6 text-4xl font-extrabold text-emerald-700">
            {total} <span className="text-base font-semibold text-slate-600">visits in 30 days</span>
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Button taps: {requestTaps} on the request buttons, {whatsappTaps} on the WhatsApp buttons.
          </p>

          <h2 className="mt-8 text-lg font-bold text-slate-900">By ad tag</h2>
          {rows.length === 0 ? (
            <p className="mt-2 text-sm text-slate-500">No visits recorded yet.</p>
          ) : (
            <div className="mt-2 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-3 py-2">Page</th>
                    <th className="px-3 py-2">Source</th>
                    <th className="px-3 py-2">Campaign</th>
                    <th className="px-3 py-2 text-right">Visits</th>
                    <th className="px-3 py-2 text-right">Request taps</th>
                    <th className="px-3 py-2 text-right">WhatsApp taps</th>
                    <th className="px-3 py-2">Last visit</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className="border-t border-slate-100">
                      <td className="px-3 py-2 text-slate-700">{r.path}</td>
                      <td className="px-3 py-2">{r.source}</td>
                      <td className="px-3 py-2">{r.campaign}</td>
                      <td className="px-3 py-2 text-right font-bold">{r.visits}</td>
                      <td className="px-3 py-2 text-right">{r.request_taps}</td>
                      <td className="px-3 py-2 text-right">{r.whatsapp_taps}</td>
                      <td className="px-3 py-2 text-slate-500">{fmt(r.last_visit)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <h2 className="mt-8 text-lg font-bold text-slate-900">By day (last 14 days)</h2>
          {days.length === 0 ? (
            <p className="mt-2 text-sm text-slate-500">No visits recorded yet.</p>
          ) : (
            <ul className="mt-2 divide-y divide-slate-100 rounded-xl border border-slate-200 text-sm">
              {days.map((d) => (
                <li key={d.day} className="flex justify-between px-3 py-2">
                  <span>{d.day}</span>
                  <span className="font-bold">{d.visits}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : null}
    </div>
  )
}
