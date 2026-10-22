'use client'
import { useState } from 'react'
import Link from 'next/link'

const R2 = 'https://pub-5dd88be363aa4578af71ad764a6806b9.r2.dev'

const OFFERS = [
  {
    place: 'Mombasa',
    hotel: 'Azul Margarita',
    price: 'KES 59,820',
    detail: '5 nights per person sharing · full board',
    valid: 'Valid 23 Dec 2026 – 2 Jan 2027',
    image: `${R2}/Mombasa%20Festival%20offer.png`,
    href: '/safari/kameraz-of-afrika-mombasa-festive-offer-azul-margarita-51f69e37',
  },
  {
    place: 'Diani Beach',
    hotel: 'Kaskazi Beach Resort',
    price: 'KES 91,030',
    detail: '5 nights per person sharing · full board',
    valid: 'Valid 23 Dec 2026 – 3 Jan 2027',
    image: `${R2}/Diani%20Festival%20Package.png`,
    href: '/safari/kameraz-of-afrika-diani-festive-package-kaskazi-beach-resort-3504e93a',
  },
  {
    place: 'Lamu',
    hotel: 'Msafini Hotel',
    price: 'KES 74,780',
    detail: '5 nights per person sharing · full board',
    valid: 'Festive season 2026',
    image: `${R2}/Lamu%20festival.png`,
    href: '/safari/kameraz-of-afrika-lamu-festive-package-msafini-hotel-210dea84',
  },
  {
    place: 'Amboseli',
    hotel: 'Penety Resort Amboseli',
    price: 'KES 37,920',
    detail: '2 nights per person sharing · full board',
    valid: 'Valid 22 Dec 2026 – 2 Jan 2027',
    image: `${R2}/Amboseli%20Fetival%20Package.png`,
    href: '/safari/kameraz-of-afrika-amboseli-festive-package-penety-resort-amboseli-680d6fea',
  },
  {
    place: 'Mount Kenya',
    hotel: 'FK Resort & Spa',
    price: 'KES 20,460',
    detail: '2 nights per person sharing · full board',
    valid: 'Valid 23 Dec 2026 – 2 Jan 2027',
    image: `${R2}/Mount%20Kenya%20Festival.png`,
    href: '/safari/kameraz-of-afrika-mt-kenya-festive-package-fk-resort-spa-bbe44bfe',
  },
  {
    place: 'Tsavo',
    hotel: 'Kivuko Eco Resort',
    price: 'KES 34,100',
    detail: '3 days / 2 nights per person sharing',
    valid: 'Valid 22 Dec 2026 – 3 Jan 2027',
    image: `${R2}/Kameraz_of_africat_tours.png`,
    href: '/safari/kameraz-of-afrika-tsavo-festive-package-kivuko-eco-resort-d7c8a65a',
  },
]

function OfferImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-700 to-emerald-600 p-4 text-center text-xl font-extrabold text-white">
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

export default function FestiveOffers() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Festive Season Offers</h2>
      <p className="mt-1 text-slate-600">
        Local resident rates in Kenya shillings (KES) from Kameraz of Afrika, December 2026 – January 2027.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {OFFERS.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <OfferImage src={o.image} alt={o.place} />
              <div className="absolute bottom-3 right-3 rounded-xl bg-red-600 px-3 py-1 text-right text-white shadow-lg">
                <div className="text-[11px] font-medium leading-tight text-white/90">From</div>
                <div className="text-lg font-extrabold leading-tight">{o.price}</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-900">{o.place} Festive Package</h3>
              <p className="mt-1 text-sm text-slate-600">{o.hotel}</p>
              <p className="text-sm text-slate-600">{o.detail}</p>
              <p className="mt-1 text-xs font-medium text-red-700">{o.valid}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">Resident rate · KES</span>
                <span className="text-sm font-semibold text-emerald-700">View details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
