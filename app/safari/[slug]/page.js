import { getVendorBySlug } from '@/lib/vendorData'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'
export const revalidate = 0

import Link from 'next/link'
import { AdSense } from '@/components/AdSense'
import LocationMap from '@/components/LocationMap'
import EnquireButton from '@/components/EnquireButton'
import { buildMetadata, buildProductSchema } from '@/lib/seo'
export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = await getVendorBySlug(slug)
  if (!item) return { title: 'Listing not found | OSARE' }
  return buildMetadata({
    title: `${item.title} — ${item.vendor} | OSARE`,
    description: item.description?.replace(/\*\*/g, '').slice(0, 160) || `${item.title} by ${item.vendor} in ${item.location}. Compare and book direct on OSARE.`,
    path: `/safari/${item.slug}`,
    image: item.image,
  })
}
export default async function VendorDetailPage({ params }) {
  const { slug } = await params
  const item = await getVendorBySlug(slug)

  if (!item) notFound()

  const pageUrl = `https://www.easafariroutes.com/safari/${item.slug}`

  // Build JSON-LD structured data from the same `item` object already
  // powering the visible page — no extra data fetching required.
   const jsonLd = buildProductSchema(item, `/safari/${item.slug}`)
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <AdSense />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/safari" className="text-sm text-slate-500 hover:text-slate-700">
        ← Back to Safari & Tourism
      </Link>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
        <p className="text-sm font-semibold text-emerald-900">
          Free request, no payment now. {item.vendor} confirms the price and dates.
        </p>
        <a
          href="#enquire"
          className="rounded-full bg-[#1e3a8a] px-5 py-2 text-sm font-bold text-white hover:bg-blue-900"
        >
          Request this tour ↓
        </a>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                     {item.image ? (
          <div className="w-full bg-slate-50">
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto block h-auto max-h-[1100px] w-full object-contain"
            />
          </div>
        ) : null}

        <div className="p-6">
          <span className="inline-block rounded-full bg-[#f97316] px-3 py-1 text-xs font-bold text-white">
            {item.category}
          </span>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">{item.title}</h1>
          <p className="mt-1 text-lg font-semibold text-[#1e3a8a]">By {item.vendor}</p>
                    {item.isVerified ? (
            <p className="mt-2 text-sm font-semibold text-blue-800">
              ✓ OSARE Verified ·{' '}
              <Link href="/verified" className="underline hover:text-blue-950">What does this mean?</Link>
            </p>
          ) : null}

          <p className="mt-1 text-sm text-slate-500">📍 {item.location}</p>
<LocationMap location={item.location} />

          {item.description ? (
            <p className="mt-4 text-slate-700 leading-relaxed">{String(item.description).replace(/\*\*/g, '')}</p>
          ) : null}

          {Array.isArray(item.includes) && item.includes.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.includes.map((inc, i) => (
                <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {inc}
                </span>
              ))}
            </div>
          ) : null}

          {item.slug === 'altezza-travel-kilimanjaro-climbs-safaris-altezza-travel-4db1c3e7' ? (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-lg font-bold text-slate-900">Altezza Travel Kilimanjaro routes</h2>
              <p className="mt-1 text-sm text-slate-600">Open a route to see its days, what is included and to send a free request.</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  ['Machame route', '6 to 7 days', 'altezza-travel-kilimanjaro-machame-route-6-to-7-days-trek-e261bbc6'],
                  ['Lemosho route', '6 to 8 days', 'altezza-travel-kilimanjaro-lemosho-route-6-to-8-days-trek-5964c24d'],
                  ['Marangu route', '5 to 6 days', 'altezza-travel-kilimanjaro-marangu-route-5-to-6-days-trek-f9574fd9'],
                  ['Rongai route', '6 to 7 days', 'altezza-travel-kilimanjaro-rongai-route-6-to-7-days-trek-c99c2147'],
                  ['Umbwe route', '6 to 7 days', 'altezza-travel-kilimanjaro-umbwe-route-6-to-7-days-trek-68e2fbc6'],
                  ['Northern Circuit', '8 days', 'altezza-travel-kilimanjaro-northern-circuit-route-8-days-trek-ce215cb1'],
                ].map(([name, days, slug]) => (
                  <li key={slug}>
                    <Link href={`/safari/${slug}`} className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-[#1e3a8a] hover:bg-blue-50">
                      {name} <span className="font-normal text-slate-500">· {days}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-4">
            <div>
              {(() => {
                const label = String(item.priceLabel || '')
                const i = label.indexOf(' for ')
                if (i > 0 && i < 30) {
                  return (
                    <>
                      <p className="text-3xl font-extrabold text-emerald-600">{label.slice(0, i)}</p>
                      <p className="mt-1 text-sm font-medium text-slate-600">{label.slice(i + 1)}</p>
                    </>
                  )
                }
                return <p className="text-3xl font-extrabold text-emerald-600">{label}</p>
              })()}
              {item.season ? <p className="text-sm text-slate-400">{item.season}</p> : null}
            </div>
            {item.vendorOffice ? (
              <p className="text-sm text-slate-400">{item.vendorOffice}</p>
            ) : null}
          </div>

          <div id="enquire" className="mt-6 scroll-mt-24"><EnquireButton listingId={item.id} /></div>
        </div>
      </div>
    </div>
  )
}
