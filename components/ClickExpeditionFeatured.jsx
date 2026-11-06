'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop'
const ORDER = ['serengeti', 'marangu', 'machame', 'rongai', 'lemosho', 'northern', 'biking', 'meru']

function rank(title) {
  const t = String(title || '').toLowerCase()
  const i = ORDER.findIndex((k) => t.includes(k))
  return i === -1 ? ORDER.length : i
}

export default function ClickExpeditionFeatured() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/search?type=safari')
      .then((r) => r.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : []
        const mine = list
          .filter((x) => x.vendor === 'Click Expedition' && x.slug)
          .sort((a, b) => rank(a.title) - rank(b.title))
        setItems(mine)
      })
      .catch(() => {})
  }, [])

  if (!items.length) return null

  const showOffer = new Date() < new Date('2027-02-01')

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="inline-block rounded-full bg-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900">
              Featured partner
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
              Click Expedition: Kilimanjaro climbs and Tanzania safaris
            </h2>
            <p className="mt-1 max-w-2xl text-slate-600">
              Packages from a Moshi-based operator. {showOffer ? 'Black Friday, Christmas and New Year offers for departures from November 2026 to January 2027. ' : ''}
              Prices are per person, and Click Expedition confirms the final price.
            </p>
          </div>
          <Link href="/kilimanjaro" className="text-sm font-bold text-[#c2410c] hover:underline">
            See all Kilimanjaro offers →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/safari/${item.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image || FALLBACK_IMG}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG }}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#f97316] px-2.5 py-0.5 text-[11px] font-bold text-white shadow">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-3 text-sm font-bold leading-snug text-slate-900">{item.title}</h3>
                <p className="mt-auto pt-3 text-sm font-extrabold text-emerald-600">{item.priceLabel}</p>
                <span className="mt-2 text-xs font-bold text-[#c2410c]">View package and enquire →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
