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

  const vendor = String(item.vendor || '').trim()
  const place = String(item.location || '').split(',')[0].trim()
  const category = String(item.category || '').trim()

  const escapedVendor = vendor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  let offer = String(item.title || '').trim()
  if (vendor) offer = offer.replace(new RegExp(escapedVendor, 'ig'), ' ')
  offer = offer.replace(/\s+/g, ' ').replace(/^[\s\-–—:|,·]+|[\s\-–—:|,·]+$/g, '').trim()
  if (!offer) offer = `${category || 'Safari & Travel'}${place ? ` in ${place}` : ''}`

  let title = `${vendor}: ${offer} – Prices & Enquiry`
  if (title.length > 65) title = `${vendor}: ${offer} | OSARE`
  if (title.length > 65) title = `${vendor}: ${offer}`

  const cleanDescription = String(item.description || '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim()
  let description
  if (cleanDescription) {
    let text = cleanDescription
    if (text.length > 120) {
      text = text.slice(0, 120)
      text = text.slice(0, text.lastIndexOf(' ')).replace(/[\s,;:\-–—]+$/, '') + '…'
    }
    description = `${text} Free enquiry on OSARE, no payment now.`
  } else {
    description = `${vendor}${place ? ` in ${place}` : ''}: ${offer}. Send a free enquiry on OSARE, the operator confirms price and dates.`
  }

  return buildMetadata({
    title,
    description,
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
            <p className="mt-4 text-slate-700 leading-relaxed">{String(item.description).replace(/\*\*/g,
