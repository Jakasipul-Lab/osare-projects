import Link from 'next/link'
import { notFound } from 'next/navigation'
import { query } from '@/lib/db'
import { mapVendorRow } from '@/lib/vendorData'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-dynamic'
export const revalidate = 0

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

async function getVendorListings(vendorSlug) {
  const result = await query('SELECT * FROM listings WHERE published = true ORDER BY created_at DESC')
  const rows = (result && result.rows ? result.rows : []).filter((r) => slugify(r.vendor) === vendorSlug)
  return rows.map(mapVendorRow)
}

export async function generateMetadata({ params }) {
  const { vendor } = await params
  const items = await getVendorListings(vendor)
  if (!items.length) return { title: 'Operator not found | OSARE' }

  const name = String(items[0].vendor || '').trim()
  const places = [...new Set(items.map((i) => String(i.location || '').split(',')[0].trim()).filter(Boolean))].slice(0, 3)

  let title = `${name} – Prices & Enquiry | OSARE`
  if (title.length > 65) title = `${name} | OSARE`

  const description = `${name}${places.length ? ` in ${places.join(', ')}` : ''}: ${items.length} offer${items.length === 1 ? '' : 's'} with prices. Send a free enquiry on OSARE, the operator confirms price and dates.`

  const meta = buildMetadata({
    title,
    description,
    path: `/vendors/${vendor}`,
    image: items[0].image,
  })
  // A vendor with only one offer would duplicate its own listing page, so keep it out of Google.
  if (items.length < 2) meta.robots = { index: false, follow: true }
  return meta
}

export default async function VendorOverviewPage({ params }) {
  const { vendor } = await params
  const items = await getVendorListings(vendor)
  if (!items.length) notFound()

  const name = String(items[0].vendor || '').trim()
  const verified = items.some((i) => i.isVerified)

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <Link href="/safari" className="text-sm text-slate-500 hover:text-slate-700">
        ← Back to Safari & Tourism
      </Link>

      <h1 className="mt-4 text-3xl font-extrabold text-slate-900">{name}</h1>
      <p className="mt-1 text-slate-600">
        {items.length} offer{items.length === 1 ? '' : 's'} on OSARE. Free request, no payment now. {name} confirms the price and dates.
      </p>
      {verified ? (
        <p className="mt-2 text-sm font-semibold text-blue-800">
          ✓ OSARE Verified ·{' '}
          <Link href="/verified" className="underline hover:text-blue-950">What does this mean?</Link>
        </p>
      ) : null}

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/safari/${item.slug}`}
              className="block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
            >
              {item.image ? (
                <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              ) : null}
              <div className="p-4">
                <p className="text-xs font-semibold text-[#f97316]">{item.category}</p>
                <h2 className="mt-1 text-base font-bold text-slate-900">{item.title}</h2>
                {item.location ? <p className="mt-1 text-sm text-slate-500">📍 {item.location}</p> : null}
                {item.priceLabel ? <p className="mt-2 text-sm font-semibold text-emerald-700">{item.priceLabel}</p> : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
