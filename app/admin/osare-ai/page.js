'use client'

import { useEffect, useState } from 'react'

const KEY = 'osare-ai-manual'
const EMPTY = { spend: '', views: '', clicks: '', impressions: '' }
const CKEY = 'osare-ai-campaigns'
const MKEY = 'osare-ai-marketing'
const DEFAULT_LINK = 'https://www.easafariroutes.com/safari'
const POSTS = [
  { id: 'p1', day: 'Mon', where: 'English post (US followers)', text: 'Kilimanjaro via the Lemosho Route: 10 days, 8 of them on the mountain, summit at 5,895 m. From USD 2,650 per person in a group, with a locally owned team in Moshi. Details and a free request: [link]' },
  { id: 'p2', day: 'Tue', where: 'English post (US followers)', text: 'Planning Kilimanjaro? Decide two things first: the route and the month. The drier months are January to March and June to October. Tell me your dates and I will point you to a route. easafariroutes.com/safari' },
  { id: 'g1', day: 'Tue', where: 'German post (X / Threads)', text: 'Kilimandscharo besteigen? Routen vergleichen und kostenlos bei lokalen Veranstaltern in Moshi anfragen: easafariroutes.com/de/kilimandscharo #Kilimandscharo #Tansania #Reisen' },
  { id: 'p3', day: 'Wed', where: 'English post (US followers)', text: 'What the Lemosho package includes: 2 hotel nights in Moshi, airport and gate transfers, guides, porters and cook, park and rescue fees, tents, all meals and purified water on the mountain, emergency oxygen. Not included: flights, visa, insurance, tips. [link]' },
  { id: 'p4', day: 'Thu', where: 'English post (US followers)', text: 'Looking at a Kenya safari? Browse listings from local operators for Tsavo East, Masai Mara and the coast, and send one free request. easafariroutes.com/safari' },
  { id: 'g2', day: 'Thu', where: 'German post (X / Threads)', text: 'Lemosho-Route am Kilimandscharo: 10 Tage, davon 8 am Berg, Gipfel auf 5.895 m. Ab 2.650 USD pro Person in der Gruppe. Alle Leistungen: easafariroutes.com/de/kilimandscharo #Kilimandscharo #Lemosho' },
  { id: 'p5', day: 'Fri', where: 'English post (US followers)', text: 'Kilimanjaro or a Kenya safari: which one is on your list for 2027? Tell me why and I will suggest where to start.' },
  { id: 'p6', day: 'Sat', where: 'English post (US followers)', text: 'Altitude is a common reason people miss the Kilimanjaro summit. A longer route gives your body more time to adjust, which is why Lemosho, with 8 days on the mountain, is popular. [link]' },
  { id: 'g3', day: 'Sat', where: 'German post (X / Threads)', text: 'Beste Reisezeit für den Kilimandscharo: Januar bis März und Juni bis Oktober. Was ein Paket enthalten sollte, steht hier: easafariroutes.com/de/kilimandscharo #Tansania #Wandern' },
  { id: 'p7', day: 'Sun', where: 'English post (US followers)', text: 'Directory update: easafariroutes.com now has a German-language page for Kilimanjaro travelers, and more operators are being added. Questions about a trip? Send me a message.' },
  { id: 'm1', day: 'Once', where: 'Message to Altezza (replace [Name])', text: 'Hello [Name], this is Osare, CEO of OSARE (easafariroutes.com). We are updating our East Africa directory. Your company is listed with several Kilimanjaro routes, and people searching for Altezza Travel on Google already find your page on our site. We have also built a German-language page for Kilimanjaro that includes your routes, for German travelers. Requests reach you directly by WhatsApp, and we only take a commission on confirmed bookings. Could you tell me who handles enquiries from German-speaking travelers, and confirm that your listed prices are correct? Thank you.' },
]
const IGNORE_KEY = 'osare-ai-ignore'
const DEFAULT_IGNORE = 'ema, adac, test'
const DEFAULT_CAMPAIGNS = [
  { id: 'c1', name: 'Kilimanjaro DE test (Facebook boost)', country: 'Germany', destination: 'Kilimanjaro', start: '2026-11-06', end: '2026-11-13', spend: '', views: '' },
  { id: 'c2', name: 'Kilimanjaro Routes - Traffic (old, off)', country: 'DE, UK, US, CA', destination: 'Kilimanjaro', start: '', end: '', spend: '7.76', views: '35' },
]

function num(v) {
  return parseFloat(String(v).replace(',', '.')) || 0
}

function localDay(d) {
  return new Date(d).toLocaleDateString('en-CA')
}

function CField({ label, value, onChange, type = 'text', className = '' }) {
  return (
    <label className={`text-sm text-slate-700 ${className}`}>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
      />
    </label>
  )
}

function fmtDate(d) {
  if (!d) return '-'
  return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

function Card({ label, value, note, accent = 'border-blue-600' }) {
  return (
    <div className={`rounded-xl border border-slate-200 border-t-4 ${accent} bg-white p-4 shadow-md`}>
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
  const [campaigns, setCampaigns] = useState(DEFAULT_CAMPAIGNS)
  const [ignore, setIgnore] = useState(DEFAULT_IGNORE)
  const [mk, setMk] = useState({ link: DEFAULT_LINK, done: {} })
  const [copied, setCopied] = useState('')

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
    try {
      const savedC = localStorage.getItem(CKEY)
      if (savedC) {
        const parsed = JSON.parse(savedC)
        if (Array.isArray(parsed)) setCampaigns(parsed)
      }
      const savedI = localStorage.getItem(IGNORE_KEY)
      if (savedI !== null) setIgnore(savedI)
    } catch (e) {}
    try {
      const savedM = localStorage.getItem(MKEY)
      if (savedM) {
        const m = JSON.parse(savedM)
        setMk({ link: m.link || DEFAULT_LINK, done: m.done || {} })
      }
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

  function saveCampaigns(next) {
    setCampaigns(next)
    try {
      localStorage.setItem(CKEY, JSON.stringify(next))
    } catch (e) {}
  }

  function updateCampaign(id, field, value) {
    saveCampaigns(campaigns.map((c) => (c.id === id ? { ...c, [field]: value } : c)))
  }

  function addCampaign() {
    saveCampaigns([
      ...campaigns,
      { id: `c${Date.now()}`, name: '', country: '', destination: '', start: '', end: '', spend: '', views: '' },
    ])
  }

  function removeCampaign(id) {
    saveCampaigns(campaigns.filter((c) => c.id !== id))
  }

  function saveMk(next) {
    setMk(next)
    try {
      localStorage.setItem(MKEY, JSON.stringify(next))
    } catch (e) {}
  }

  function postText(p) {
    return p.text.split('[link]').join(mk.link || DEFAULT_LINK)
  }

  async function copyPost(p) {
    const text = postText(p)
    try {
      await navigator.clipboard.writeText(text)
    } catch (e) {
      try {
        const ta = document.createElement('textarea')
        ta.value = text
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        ta.remove()
      } catch (e2) {}
    }
    setCopied(p.id)
    setTimeout(() => setCopied(''), 1500)
  }

  function toggleDone(id) {
    saveMk({ ...mk, done: { ...mk.done, [id]: !mk.done[id] } })
  }

  function changeIgnore(value) {
    setIgnore(value)
    try {
      localStorage.setItem(IGNORE_KEY, value)
    } catch (e) {}
  }

  if (error) {
    return (
      <main className="mx-auto min-h-screen max-w-3xl bg-blue-50 px-5 py-16">
        <h1 className="text-2xl font-extrabold text-slate-900">OSARE AI</h1>
        <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-slate-800">
          {error}. Log in to your OSARE admin area first, then open this page again.
        </p>
      </main>
    )
  }
  if (!data) {
    return (
      <main className="mx-auto min-h-screen max-w-3xl bg-blue-50 px-5 py-16">
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

  const hasLeadDates = Array.isArray(data.leadDates)
  const ignoreList = ignore.split(',').map((x) => x.trim().toLowerCase()).filter(Boolean)
  const leadList = (data.leadDates || []).filter(
    (l) => !ignoreList.includes(String(l.traveler_name || '').trim().toLowerCase())
  )
  function campaignStats(c) {
    const s = num(c.spend)
    const v = num(c.views)
    const enq =
      hasLeadDates && c.start && c.end
        ? leadList.filter((l) => {
            const d = localDay(l.created_at)
            return d >= c.start && d <= c.end
          }).length
        : null
    return {
      cpv: s > 0 && v > 0 ? s / v : null,
      enq,
      cpe: s > 0 && enq ? s / enq : null,
    }
  }

  const warnings = []
  if (leads.total === 0) warnings.push('No enquiries have been recorded yet.')
  else if (leads.daysSinceLast >= 7) warnings.push(`No enquiry for ${leads.daysSinceLast} days. Last one: ${fmtDate(leads.lastAt)}.`)
  if (leads.last7 === 0 && views >= 20) warnings.push(`${views} website visits from ads but 0 enquiries in the last 7 days. Check the landing page and the enquiry button.`)
  const leadVendors30 = new Set(byVendor.filter((v) => v.last30 > 0).map((v) => v.vendor))
  const silent = listings.filter((l) => l.published > 0 && l.vendor !== 'unknown' && !leadVendors30.has(l.vendor))
   if (silent.length) warnings.push(`${silent.length} of ${listings.filter((l) => l.published > 0 && l.vendor !== 'unknown').length} vendors with published listings had no enquiry in 30 days. The ones with the most listings: ${silent.slice(0, 6).map((s) => `${s.vendor} (${s.published})`).join(', ')}.`)

  return (
    <div className="min-h-screen bg-blue-50">
    <main className="mx-auto max-w-5xl space-y-6 px-5 py-10">
      <div className="rounded-2xl bg-blue-900 p-6 shadow-md">
        <h1 className="text-3xl font-extrabold text-white">OSARE AI</h1>
        <p className="mt-1 text-sm text-blue-100">Private business dashboard. Updated {new Date(data.generatedAt).toLocaleString('en-GB')}.</p>
      </div>

      {warnings.length ? (
        <section className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
          <h2 className="text-lg font-bold text-blue-900">Needs attention</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-800">
            {warnings.map((w) => (<li key={w}>{w}</li>))}
          </ul>
        </section>
      ) : (
        <section className="rounded-xl border-2 border-green-300 bg-green-50 p-5 text-slate-800">Nothing needs attention right now.</section>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card accent="border-blue-600" label="Enquiries, all time" value={leads.total} note="includes your own tests" />
        <Card accent="border-emerald-600" label="Last 7 days" value={leads.last7} />
        <Card accent="border-amber-500" label="Last 30 days" value={leads.last30} />
        <Card accent="border-purple-600" label="Days since last" value={leads.daysSinceLast === null ? '-' : leads.daysSinceLast} note={fmtDate(leads.lastAt)} />
      </div>

      <section className="rounded-xl border border-slate-200 border-l-8 border-orange-500 bg-white p-5 shadow-md">
        <h2 className="text-lg font-bold text-blue-900">Marketing: posts to copy</h2>
        <p className="mt-1 text-sm text-slate-500">
          Press Copy, paste it where you post, tick Done. {POSTS.filter((p) => mk.done[p.id]).length} of {POSTS.length} done. Saved in this browser only.
        </p>
        <label className="mt-3 block text-sm text-slate-700">
          Link for the Lemosho posts (open the listing, copy the address from the top bar, paste it here once)
          <input
            value={mk.link}
            onChange={(e) => saveMk({ ...mk, link: e.target.value })}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
        <div className="mt-4 space-y-3">
          {POSTS.map((p) => (
            <div key={p.id} className={`rounded-lg border p-3 ${mk.done[p.id] ? 'border-green-300 bg-green-50' : 'border-slate-200'}`}>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="rounded bg-blue-900 px-2 py-0.5 text-white">{p.day}</span>
                <span className="text-slate-600">{p.where}</span>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-sm text-slate-800">{postText(p)}</p>
              <div className="mt-3 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => copyPost(p)}
                  className="rounded-md bg-orange-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-orange-600"
                >
                  {copied === p.id ? 'Copied' : 'Copy'}
                </button>
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" checked={!!mk.done[p.id]} onChange={() => toggleDone(p.id)} />
                  Done
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 border-l-8 border-blue-600 bg-white p-5 shadow-md">
        <h2 className="text-lg font-bold text-blue-900">Enquiries per week (last 12 weeks)</h2>
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

      <section className="rounded-xl border border-slate-200 border-l-8 border-amber-500 bg-white p-5 shadow-md">
        <h2 className="text-lg font-bold text-blue-900">Weekly numbers from Meta and Search Console</h2>
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

      <section className="rounded-xl border border-slate-200 border-l-8 border-emerald-600 bg-white p-5 shadow-md">
        <h2 className="text-lg font-bold text-blue-900">Campaigns</h2>
        <p className="mt-1 text-sm text-slate-500">
          One card per campaign. Enquiries are the ones that arrived between the start and end date. This is an estimate, not proof that the ad caused them. Saved in this browser only.
        </p>
        <label className="mt-3 block text-sm text-slate-700">
          Ignore these names (your own tests), separated by commas
          <input
            value={ignore}
            onChange={(e) => changeIgnore(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>
        <div className="mt-4 space-y-4">
          {campaigns.map((c) => {
            const st = campaignStats(c)
            return (
              <div key={c.id} className="rounded-lg border border-slate-200 p-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <CField className="col-span-2" label="Campaign name" value={c.name} onChange={(v) => updateCampaign(c.id, 'name', v)} />
                  <CField label="Target country" value={c.country} onChange={(v) => updateCampaign(c.id, 'country', v)} />
                  <CField label="Destination" value={c.destination} onChange={(v) => updateCampaign(c.id, 'destination', v)} />
                  <CField label="Start date" type="date" value={c.start} onChange={(v) => updateCampaign(c.id, 'start', v)} />
                  <CField label="End date" type="date" value={c.end} onChange={(v) => updateCampaign(c.id, 'end', v)} />
                  <CField label="Spend (EUR)" value={c.spend} onChange={(v) => updateCampaign(c.id, 'spend', v)} />
                  <CField label="Landing page visits" value={c.views} onChange={(v) => updateCampaign(c.id, 'views', v)} />
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-slate-800">
                  <span>Cost per visit: <strong>{st.cpv === null ? '-' : `EUR ${st.cpv.toFixed(2)}`}</strong></span>
                  <span>Enquiries in period: <strong>{st.enq === null ? '-' : st.enq}</strong></span>
                  <span>Cost per enquiry: <strong>{st.cpe === null ? '-' : `EUR ${st.cpe.toFixed(2)}`}</strong></span>
                  <button
                    type="button"
                    onClick={() => removeCampaign(c.id)}
                    className="ml-auto text-xs font-semibold text-red-700 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <button
          type="button"
          onClick={addCampaign}
          className="mt-4 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Add campaign
        </button>
        {!hasLeadDates ? (
          <p className="mt-3 text-xs text-amber-700">Enquiry counts need the updated data route. They will appear after it is deployed.</p>
        ) : null}
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-200 border-l-8 border-indigo-600 bg-white p-5 shadow-md">
          <h2 className="text-lg font-bold text-blue-900">Enquiries by vendor</h2>
          <table className="mt-3 w-full text-sm">
            <thead><tr className="text-left text-slate-500"><th className="py-1">Vendor</th><th>30 days</th><th>All</th></tr></thead>
            <tbody>
              {byVendor.map((v) => (
                <tr key={v.vendor} className="border-t border-slate-100"><td className="py-1">{v.vendor}</td><td>{v.last30}</td><td>{v.total}</td></tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="rounded-xl border border-slate-200 border-l-8 border-teal-600 bg-white p-5 shadow-md">
          <h2 className="text-lg font-bold text-blue-900">Listings by vendor</h2>
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

      <section className="rounded-xl border border-slate-200 border-l-8 border-slate-700 bg-white p-5 shadow-md">
        <h2 className="text-lg font-bold text-blue-900">Latest enquiries</h2>
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
    </div>
  )
}
