import Link from 'next/link'
import { getAllVendors } from '@/lib/vendorData'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export const metadata = buildMetadata({
  title: 'Kilimanjaro Climbs Compared: Routes, Days and Prices | OSARE',
  description:
    'Compare Kilimanjaro climbs from licensed Tanzanian operators: Machame, Lemosho, Marangu, Rongai, Northern Circuit and Umbwe. See days and prices from, then enquire on WhatsApp. Free to use.',
  path: '/kilimanjaro',
})

const ROUTES = [
  {
    key: 'machame',
    name: 'Machame Route',
    blurb:
      'Also called the Whiskey route. Popular for its scenery, from rainforest to alpine desert. Usually 6 or 7 days on the mountain, and the 7 day version gives better acclimatization.',
  },
  {
    key: 'lemosho',
    name: 'Lemosho Route',
    blurb:
      'Starts on the western side and crosses the Shira Plateau. Known for good acclimatization. Usually 6 to 8 days, and the longer versions suit beginners.',
  },
  {
    key: 'marangu',
    name: 'Marangu Route',
    blurb:
      'Also called the Coca-Cola route. The only route with hut accommodation, and it uses the same trail up and down. Usually 5 or 6 days, and the 6 day version is better for beginners.',
  },
  {
    key: 'rongai',
    name: 'Rongai Route',
    blurb:
      'Approaches the mountain from the north. Drier and less crowded, so it suits climbs in the rainy season. Usually 6 or 7 days.',
  },
  {
    key: 'northern',
    name: 'Northern Circuit Route',
    blurb:
      'Circles the mountain for good acclimatization and fewer crowds. Usually 8 days, with a long summit day.',
  },
  {
    key: 'umbwe',
    name: 'Umbwe Route',
    blurb:
      'The steepest and most direct route, suited to experienced trekkers. Usually 6 or 7 days.',
  },
  {
    key: 'meru',
    name: 'Mount Meru',
    blurb:
      'A shorter climb in Arusha National Park that many people use as a warm-up for Kilimanjaro, or enjoy on its own.',
  },
  {
    key: 'other',
    name: 'Other Kilimanjaro packages',
    blurb: 'Other climbs and packages from our partners. Ask the operator for the route and price.',
  },
]

function routeKey(title) {
  const t = String(title || '').toLowerCase()
  if (t.includes('northern circuit')) return 'northern'
  if (t.includes('machame')) return 'machame'
  if (t.includes('lemosho')) return 'lemosho'
  if (t.includes('marangu')) return 'marangu'
  if (t.includes('rongai')) return 'rongai'
  if (t.includes('umbwe')) return 'umbwe'
  if (t.includes('meru')) return 'meru'
  return 'other'
}

function priceNumber(item) {
  const raw = String(item.priceLabel || '').replace(/,/g, '')
  const fromLabel = /[a-z]/i.test(raw) ? 0 : Number(raw)
  const n = fromLabel || Number(item.priceValue) || 0
  return n > 1 ? n : 0
}

function priceText(item) {
  const raw = String(item.priceLabel || '').trim()
  if (/[a-z]/i.test(raw)) return raw
  const n = priceNumber(item)
  if (n > 0) return `${item.currency || 'USD'} ${n.toLocaleString('en-US')} per person`
  return 'Request a quote'
}

function daysText(title) {
  const m = String(title || '').match(/(\d+)(?:\s*to\s*(\d+))?\s*-?\s*days?/i)
  if (!m) return null
  return m[2] ? `${m[1]} to ${m[2]} days` : `${m[1]} days`
}

function isKilimanjaroItem(v) {
  if (v.type !== 'safari' || !v.slug) return false
  if (/kilimanjaro/i.test(String(v.category || ''))) return true
  return /\bmount meru\b/i.test(String(v.title || ''))
}

export default async function KilimanjaroPage() {
  let items = []
  try {
    const all = await getAllVendors()
    items = all.filter(isKilimanjaroItem)
  } catch (e) {
    items = []
  }

  const groups = ROUTES.map((r) => {
    const list = items
      .filter((v) => routeKey(v.title) === r.key)
      .sort((a, b) => {
        const pa = priceNumber(a)
        const pb = priceNumber(b)
        if (pa && pb) return pa - pb
        if (pa) return -1
        if (pb) return 1
        return 0
      })
    return { ...r, list }
  }).filter((g) => g.list.length > 0)

  const waHelp = `https://wa.me/254758378729?text=${encodeURIComponent(
    'Hello, I would like help choosing a Kilimanjaro climb.'
  )}`

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <Link href="/safari" className="text-sm text-slate-500 hover:text-slate-700">
        ← Back to Safari and Tourism
      </Link>

      <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
        Kilimanjaro Climbs Compared: Routes, Days and Prices
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Compare Kilimanjaro climbs from licensed Tanzanian operators in one place. Pick a route, see the days and the
        price from, then open the listing and enquire on WhatsApp. OSARE is free for travelers.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={waHelp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#25d366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5b]"
        >
          Not sure which route? Ask us on WhatsApp
        </a>
        <span className="text-sm text-slate-500">We reply as soon as we can.</span>
      </div>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Operators count days differently. Some count only the days on the mountain, others count the whole trip,
        including hotel nights and arrival. Prices shown are the lowest the operator advertises and often depend on
        group size. Always confirm the final price, the dates and what is included, such as park fees, with the operator.
      </div>

      {groups.length === 0 ? (
        <p className="mt-10 text-slate-600">
          Our Kilimanjaro packages are loading. Please refresh the page, or browse all listings on the{' '}
          <Link href="/safari" className="font-semibold text-[#1e3a8a] underline">
            Safari and Tourism page
          </Link>
          .
        </p>
      ) : (
        groups.map((g) => (
          <section key={g.key} className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">{g.name}</h2>
            <p className="mt-2 max-w-3xl text-slate-600">{g.blurb}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.list.map((it) => {
                const days = daysText(it.title)
                return (
                  <div
                    key={it.id}
                    className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">{it.vendor}</p>
                        <p className="text-sm text-slate-500">{days || 'Duration on request'}</p>
                      </div>
                      {it.isVerified ? (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                          OSARE Verified
                        </span>
                      ) : null}
                    </div>
                    <p className="text-lg font-bold text-[#1e3a8a]">{priceText(it)}</p>
                    <Link
                      href={`/safari/${it.slug}`}
                      className="mt-1 inline-flex items-center justify-center rounded-lg bg-[#f97316] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ea580c]"
                    >
                      View details and enquire
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        ))
      )}

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">How to choose a route</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>More days on the mountain give your body more time to adjust, and operators report higher summit rates on 7 day or longer climbs.</li>
          <li>Operators advertise late December to early March and mid June to late October as the best months to climb.</li>
          <li>Marangu uses huts, so it keeps climbers dry. Rongai approaches from the drier north, so it suits the rainy season.</li>
          <li>Larger groups usually pay less per person. A single traveler pays the highest price.</li>
          <li>Check that your operator is licensed, that guides are first aid trained, and that you have travel insurance.</li>
        </ul>
        <p className="mt-6 text-slate-600">
          Looking for a safari after your climb? Browse every listing on the{' '}
          <Link href="/safari" className="font-semibold text-[#1e3a8a] underline">
            Safari and Tourism page
          </Link>{' '}
          or read the{' '}
          <Link href="/guides/tanzania" className="font-semibold text-[#1e3a8a] underline">
            Tanzania travel guide
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
