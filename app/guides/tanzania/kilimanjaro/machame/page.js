import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import GuideTripCta from '../../../GuideTripCta'

export const metadata = buildMetadata({
  title: "Machame Route Kilimanjaro — 9-Day Climb, Camps, Itinerary & Price | OSARE",
  description: "The Machame route up Kilimanjaro, the most popular camping route. 9-day climb from Moshi via Shira, Lava Tower, Barranco and Barafu: typical itinerary, what is included and price.",
  path: '/guides/tanzania/kilimanjaro/machame',
})

// Price from the OSARE admin listing (Click Expedition), 18 Oct 2026
const PRICE = 'USD 2,550'

const DAYS = [
  ["Day 1", "Arrive in Moshi", "Airport transfer to your hotel, then a briefing and equipment check."],
  ["Day 2", "Machame Gate to Machame Camp", "Register at the gate and climb through rainforest to about 2,835 m."],
  ["Day 3", "Machame Camp to Shira Camp", "Out of the forest onto the Shira Plateau, about 3,750 m."],
  ["Day 4", "Shira to Lava Tower to Barranco", "Climb to about 4,630 m at Lava Tower, then descend to sleep at Barranco, about 3,960 m."],
  ["Day 5", "Barranco to Karanga Camp", "Scramble up the Barranco Wall and continue to Karanga, about 3,995 m."],
  ["Day 6", "Karanga to Barafu Camp", "A short climb to base camp, about 4,673 m. Early rest before summit night."],
  ["Day 7", "Summit night, down to Mweka", "Start around midnight, reach Stella Point and Uhuru Peak, then descend to Mweka Camp."],
  ["Day 8", "Mweka Gate to Moshi", "Descend through forest to the gate and drive back to Moshi."],
  ["Day 9", "Departure", "Airport transfer, or continue to a safari or Zanzibar."],
]

export default function MachameRoutePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero
        eyebrow="Kilimanjaro · Tanzania"
        title="Machame Route"
        text={"Kilimanjaro’s most popular route. Steeper and more varied than Marangu, camping every night, and climbing high then sleeping lower to help acclimatisation."}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Fact title="Package length" value="9 days, 7 on the mountain" />
          <Fact title="Start" value="Machame Gate, about 1,800 m" />
          <Fact title="Sleeping" value="Tents at each camp" />
          <Fact title="Summit" value="Uhuru Peak, 5,895 m" />
        </section>

        <section className="mb-16">
          <PriceBox
            operator="Click Expedition"
            title="Machame Route — 9 days"
            price={PRICE}
            href="/request-a-trip?destination=Kilimanjaro%20-%20Machame%20Route%20%E2%80%94%209%20days"
          />
        </section>

        <section className="mb-16">
          <Heading eyebrow="Is this route for you?" title="Who Machame Suits" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-white p-7">
              <h3 className="text-lg font-bold text-gray-900">Good for</h3>
              <ul className="mt-3 space-y-2 leading-7 text-gray-700">
                <li>• Fit walkers who want the most scenic route</li>
                <li>• Good acclimatisation over seven days</li>
                <li>• Different paths up and down</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-7">
              <h3 className="text-lg font-bold text-gray-900">Consider first</h3>
              <ul className="mt-3 space-y-2 leading-7 text-gray-700">
                <li>• Camping in tents throughout</li>
                <li>• The Barranco Wall needs some scrambling</li>
                <li>• Busy in the peak months</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Heading
            eyebrow="Itinerary"
            title="Day by Day"
            text={"A typical seven days on the mountain, with a hotel night in Moshi before and after. Confirm the exact camps with Click Expedition when you enquire."}
          />
          <Days days={DAYS} />
        </section>

        <section className="mb-16">
          <Heading eyebrow="What you pay for" title="Included in the Price" />
          <Included />
          <p className="mt-6 text-sm leading-6 text-gray-500">
            Not stated by the operator: international flights, visa, travel insurance
            and tips for the mountain crew. Confirm these when you enquire.
          </p>
        </section>

        <GuideTripCta
          country="Tanzania"
          links={[
            { label: 'Tanzania National Parks (TANAPA)', href: 'https://www.tanzaniaparks.go.tz' },
            { label: 'Tanzania e-Visa (Immigration)', href: 'https://visa.immigration.go.tz' },
          ]}
        />

        <section className="flex flex-wrap gap-6 border-t pt-8">
          <Link href="/guides/tanzania/kilimanjaro" className="font-bold text-green-700 hover:underline">← Mount Kilimanjaro Climbing Guide</Link>
          <Link href="/guides/tanzania/kilimanjaro/marangu" className="font-bold text-green-700 hover:underline">Marangu Route →</Link>
        </section>
      </div>
    </main>
  )
}

function Hero({ eyebrow, title, text }) {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-800 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">{eyebrow}</p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">{text}</p>
      </div>
    </header>
  )
}

function Fact({ title, value }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-700">{title}</h3>
      <p className="mt-2 font-semibold text-gray-900">{value}</p>
    </div>
  )
}

function Heading({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-green-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 max-w-3xl leading-7 text-gray-600">{text}</p>}
    </div>
  )
}

function Days({ days }) {
  return (
    <ol className="mt-6 space-y-4">
      {days.map(([d, place, t]) => (
        <li key={d} className="grid gap-2 rounded-2xl border border-gray-200 bg-white p-5 sm:grid-cols-[6rem_1fr]">
          <span className="font-bold text-green-700">{d}</span>
          <div>
            <p className="font-bold text-gray-900">{place}</p>
            <p className="mt-1 leading-7 text-gray-600">{t}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function PriceBox({ operator, title, price, href }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-green-200 bg-green-50 p-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-green-700">Offered by {operator}</p>
        <p className="mt-2 text-2xl font-extrabold text-gray-900">{title}</p>
      </div>
      <div className="text-right">
        <p className="text-3xl font-extrabold text-gray-900">{price}</p>
        <p className="text-sm text-gray-500">per person</p>
        <Link href={href} className="mt-3 inline-block rounded-full bg-amber-400 px-6 py-3 font-bold text-green-950 transition hover:bg-amber-300">
          Request this climb
        </Link>
      </div>
    </div>
  )
}

function Included() {
  const items = [
    'Two hotel nights in Moshi, before and after the climb',
    'All meals on the mountain; vegetarian, vegan, halal and kosher on request',
    'Park fees',
    'Guides, porters and cook, including their salaries',
    'All transfers between Moshi and the mountain',
    'Emergency oxygen and sleeping mattress',
  ]
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="rounded-xl bg-white px-4 py-3 text-gray-700">✓ {i}</li>
      ))}
    </ul>
  )
}
