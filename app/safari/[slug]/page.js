import { getVendorBySlug } from '@/lib/vendorData'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = await getVendorBySlug(slug)
  if (!item) return { title: 'Listing not found | OSARE' }
  return {
    title: `${item.title} — ${item.vendor} | OSARE`,
    description: item.description?.slice(0, 160) || `${item.title} by ${item.vendor} in ${item.location}. Compare and book direct on OSARE.`,
  }
}

export default async function VendorDetailPage({ params }) {
  const { slug } = await params
  const item = await getVendorBySlug(slug)

  if (!item) notFound()

  const whatsappMsg = encodeURIComponent(
    `Hello, I found your listing "${item.title}" on EA SafariRoutes/OSARE and I would like to book.`
  )
  const whatsappPhone = (item.vendorPhone || '254758378729').replace(/[^0-9]/g, '')

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <Link href="/safari" className="text-sm text-slate-500 hover:text-slate-700">
        ← Back to Safari & Tourism
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src={item.image || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop'}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          <span className="inline-block rounded-full bg-[#f97316] px-3 py-1 text-xs font-bold text-white">
            {item.category}
          </span>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">{item.title}</h1>
          <p className="mt-1 text-lg font-semibold text-[#1e3a8a]">By {item.vendor}</p>

          {item.mapLink ? (
            
              href={item.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
            >
              📍 {item.location}
            </a>
          ) : (
            <p className="mt-1 text-sm text-slate-500">📍 {item.location}</p>
          )}

          {item.description ? (
            <p className="mt-4 text-slate-700 leading-relaxed">{item.description}</p>
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

          <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-4">
            <div>
              <p className="text-3xl font-extrabold text-emerald-600">{item.priceLabel}</p>
              {item.season ? <p className="text-sm text-slate-400">{item.season}</p> : null}
            </div>
            {item.vendorOffice ? (
              <p className="text-sm text-slate-400">{item.vendorOffice}</p>
            ) : null}
          </div>

          
            href={`https://wa.me/${whatsappPhone}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25d366] py-3 font-semibold text-white hover:bg-[#1ebe5b]"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
