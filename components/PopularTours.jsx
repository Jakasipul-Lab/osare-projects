'use client'
import { useState } from 'react'
import Link from 'next/link'

const R2 = 'https://pub-5dd88be363aa4578af71ad764a6806b9.r2.dev'

const TOURS = [
  {
    route: 'Kilimanjaro via Lemosho',
    detail: '10 days · accommodation & transport included',
    vendor: 'Click Expedition',
    price: 'USD 2,750',
    unit: 'per person',
    image: `${R2}/Expedition-click-lemosho.jpg`,
    href: '/safari/click-expedition-kilimanjaro-climb-via-lemosho-route-10-days-accommodation-transport-included-8a80c210',
  },
  {
    route: 'Kilimanjaro via Machame',
    detail: '9 days · accommodation & transport included',
    vendor: 'Click Expedition',
    price: 'USD 2,550',
    unit: 'per person',
    image: `${R2}/Expedition-machame7days.jpg`,
    href: '/safari/click-expedition-mountain-kilimanjaro-climb-through-machame-route-9-days-all-accommodation-transport-are-included-7ea900aa',
  },
  {
    route: 'Mount Meru Climb',
    detail: '4 days trekking · accommodation & transport included',
    vendor: 'Click Expedition',
    price: 'USD 1,500',
    unit: 'per person',
    image: `${R2}/Expedition-meru.jpg`,
    href: '/safari/click-expedition-mount-meru-climb-4-days-trekking-accommodation-transport-included-76c7327b',
  },
  {
    route: 'Masai Mara Safari',
    detail: 'Kenya · Great Migration country',
    vendor: 'Oria Kenya Safaris',
    price: 'USD 1,000',
    unit: '',
    image: 'https://www.oriakenyasafaris.co.ke/images/destinations/masai%20mara.jpg',
    href: '/safari/oria-kenya-safaris-masai-mara-safari-4f231bc0',
  },
  {
    route: 'Tsavo East Safari',
    detail: 'Kenya · red elephants & wide plains',
    vendor: 'Oria Kenya Safaris',
    price: 'USD 350',
    unit: '',
    image: 'https://www.oriakenyasafaris.co.ke/images/destinations/tsavo.jpg',
    href: '/safari/oria-kenya-safaris-tsavo-east-safari-9546a7ac',
  },
  {
    route: 'Funzi Island Tour',
    detail: '1 day · Kenya south coast',
    vendor: 'Oria Kenya Safaris',
    price: 'USD 80',
    unit: '',
    image: `${R2}/destination-fuzzi.jpg`,
    href: '/safari/oria-kenya-safaris-funzi-island-tour-4446ef6b',
  },
]

function TourImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-700 to-emerald-500 p-4 text-center text-xl font-extrabold text-white">
        {alt}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  )
}

// Vendors whose details are confirmed (they get the OSARE Verified seal).
const VERIFIED_VENDORS = new Set(['Click Expedition'])

export default function PopularTours() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Popular Safari Tours</h2>
      <p className="mt-1 text-slate-600">Real routes and real prices in USD, from our partners.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOURS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <TourImage src={t.image} alt={t.route} />
              {VERIFIED_VENDORS.has(t.vendor) ? (
                <div className="absolute left-3 top-3 origin-top-left scale-75">
                  <VerifiedBadge />
                </div>
              ) : null}
              <div className="absolute bottom-3 right-3 rounded-xl bg-emerald-600 px-3 py-1 text-right text-white shadow-lg">
                <div className="text-lg font-extrabold leading-tight">{t.price}</div>
                {t.unit ? <div className="text-[11px] font-medium leading-tight text-white/90">{t.unit}</div> : null}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-900">{t.route}</h3>
              <p className="mt-1 text-sm text-slate-600">{t.detail}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate-500">{t.vendor}</span>
                <span className="text-sm font-semibold text-emerald-700">View details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
