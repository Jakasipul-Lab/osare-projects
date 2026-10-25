import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import GuideTripCta from '../../GuideTripCta'

export const metadata = buildMetadata({
  title: 'Mount Kilimanjaro Climbing Guide — Routes, Best Time, What to Expect | OSARE',
  description:
    'Plan a Kilimanjaro climb: Marangu, Machame, Lemosho, Rongai and Northern Circuit routes, best months to climb, altitude, park rules, what is included, and Mount Meru.',
  path: '/guides/tanzania/kilimanjaro',
})

const ROUTES = [
  { name: 'Marangu', days: '5–6 days', text: "The only route with hut accommodation instead of tents. Often the lowest-priced option, but its short schedule gives less time to acclimatise." },
  { name: 'Machame', days: '6–7 days', text: "A popular scenic route through rainforest, moorland and the Barranco Wall. Camping throughout." },
  { name: 'Lemosho', days: '7–8 days', text: "Starts on the western side, quieter at first, with a longer schedule that helps acclimatisation." },
  { name: 'Rongai', days: '6–7 days', text: "Approaches from the north near the Kenyan border. Drier and less crowded." },
  { name: 'Northern Circuit', days: '8–9 days', text: "The longest route, circling the northern slopes. Strong acclimatisation and few other climbers." },
  { name: 'Umbwe', days: '5–6 days', text: "Short and steep. Suited only to experienced, fit trekkers." },
]

export default function KilimanjaroGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
            <header className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-900 to-orange-700 px-6 py-16 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🇹🇿 TANZANIA
            </span>
            <span className="rounded-full bg-amber-400 px-4 py-2 text-slate-900">
              🏔️ 5,895 m
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              Africa's highest mountain
            </span>
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Tanzania · Climbing Guide
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Mount Kilimanjaro Climbing Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            Africa's highest mountain at 5,895 m. Uhuru Peak can be reached
            without technical climbing skills, but altitude makes it a serious
            trek. Choosing the right route and number of days matters most.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/request-a-trip?destination=Kilimanjaro"
              className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
            >
              Request a Kilimanjaro climb
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              See climbing listings
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* QUICK FACTS */}
        <section className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Fact title="Summit" value="Uhuru Peak, 5,895 m" />
          <Fact title="Park" value="Kilimanjaro National Park (TANAPA)" />
          <Fact title="Gateway towns" value="Moshi and Arusha" />
          <Fact title="Nearest airport" value="Kilimanjaro International (JRO)" />
        </section>

        {/* ROUTES */}
        <section id="routes" className="mb-16 scroll-mt-24">
          <Heading
            eyebrow="Choose a Route"
            title="Kilimanjaro Routes"
            text="Longer routes give your body more time to adjust to altitude, which improves the chance of reaching the summit."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {ROUTES.map((r) => (
              <article key={r.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                    {r.days}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-gray-600">{r.text}</p>
              </article>
            ))}
          </div>

          <Nudge text="Not sure which route suits you? Tell us your fitness, dates and group size." />
        </section>

        {/* FEATURED CLIMBS */}
        <section className="mb-16">
          <Heading
            eyebrow="Priced climbs"
            title="Climbs You Can Book"
            text="Offered by Click Expedition from Moshi. Hotel nights, transfers, park fees, crew and meals included."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              { name: 'Marangu Route — 8 days', note: 'Sleeping huts, acclimatisation day at Horombo', href: '/guides/tanzania/kilimanjaro/marangu' },
              { name: 'Machame Route — 9 days', note: 'Camping, the most popular scenic route', href: '/guides/tanzania/kilimanjaro/machame' },
            ].map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700">{c.name}</h3>
                <p className="mt-2 leading-7 text-gray-600">{c.note}</p>
                <p className="mt-4 text-2xl font-extrabold text-gray-900">
                  USD 2,550 <span className="text-sm font-semibold text-gray-500">per person</span>
                </p>
                <p className="mt-3 text-sm font-bold text-green-700">See itinerary →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* WHEN */}
        <section className="mb-16">
          <Heading
            eyebrow="Seasonal Planning"
            title="Best Time to Climb"
            text="Kilimanjaro can be climbed all year, but the dry months are the most popular."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Main dry season: June to October" text="Clear skies and the busiest period on the mountain. Nights near the summit are very cold." />
            <Card title="Short dry season: January to early March" text="Usually good weather and fewer climbers than mid-year. A popular time for summit views." />
            <Card title="Long rains: April and May" text="Wet trails and fewer climbers. Some operators run reduced schedules." />
            <Card title="Short rains: November" text="Afternoon showers are common. Climbs still run." />
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="mb-16 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-extrabold text-gray-900">What a climb package usually includes</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Climbing Kilimanjaro requires a licensed guide. Prices vary by route,
            number of days and group size, so always confirm exactly what is
            included before booking.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Park fees, camping or hut fees and rescue fees',
              'Licensed mountain guide, assistant guides and porters',
              'Cook and meals on the mountain',
              'Tents and camping equipment (except on Marangu)',
              'Airport and hotel transfers',
              'Hotel nights in Moshi or Arusha before and after',
            ].map((t) => (
              <li key={t} className="rounded-xl bg-stone-50 px-4 py-3 text-gray-700">✓ {t}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Usually not included: international flights, Tanzania visa, travel
            insurance, personal gear and tips for the mountain crew.
          </p>
        </section>

        {/* ALTITUDE */}
        <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Health & Safety</p>
          <h2 className="mt-2 text-2xl font-extrabold text-amber-950">Altitude sickness</h2>
          <p className="mt-4 leading-7 text-amber-900">
            Altitude sickness can affect anyone, regardless of fitness. Walk
            slowly, drink plenty of water, and choose a route with enough days
            to acclimatise. Tell your guide at once about headache, nausea or
            dizziness. Descending is the main treatment.
          </p>
          <p className="mt-4 text-sm font-semibold text-amber-800">
            Check with a doctor before climbing and take out travel insurance
            that covers high-altitude trekking.
          </p>
        </section>

        {/* MERU */}
        <section id="mount-meru" className="mb-16 scroll-mt-24 rounded-3xl bg-gradient-to-br from-emerald-900 to-green-800 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Also near Arusha</p>
          <h2 className="mt-2 text-3xl font-extrabold">Mount Meru</h2>
          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            Tanzania's second-highest mountain at 4,566 m, inside Arusha
            National Park. Usually climbed in 3–4 days, often as an
            acclimatisation trek before Kilimanjaro. Walkers are accompanied
            by an armed ranger because of wildlife on the lower slopes.
          </p>
          <Link
            href="/request-a-trip?destination=Mount%20Meru"
            className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 font-bold text-green-950 transition hover:bg-amber-300"
          >
            Request a Mount Meru climb
          </Link>
        </section>

        <GuideTripCta
          country="Tanzania"
          links={[
            { label: 'Tanzania National Parks (TANAPA)', href: 'https://www.tanzaniaparks.go.tz' },
            { label: 'Tanzania e-Visa (Immigration)', href: 'https://visa.immigration.go.tz' },
            { label: 'Tanzania Tourist Board', href: 'https://www.tanzaniatourism.go.tz' },
          ]}
        />

        {/* NAVIGATION */}
        <section className="flex flex-wrap gap-5 border-t pt-8">
          <Link href="/guides/tanzania" className="font-bold text-green-700 hover:underline">
            ← Tanzania Travel Guide
          </Link>
          <Link href="/guides" className="font-bold text-green-700 hover:underline">
            All Travel Guides
          </Link>
        </section>
      </div>
    </main>
  )
}

function Heading({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-green-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-gray-600">{text}</p>
    </div>
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

function Card({ title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function Nudge({ text }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-green-200 bg-white p-5">
      <p className="font-semibold text-gray-900">{text}</p>
      <Link
        href="/request-a-trip?destination=Kilimanjaro"
        className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-green-950 transition hover:bg-amber-300"
      >
        Plan my climb
      </Link>
    </div>
  )
}
