import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import GuideTripCta from '../../../GuideTripCta'

export const metadata = buildMetadata({
  title: 'Kilimanjaro Marangu Route: 8 Days, Huts, Prices and Itinerary | OSARE',
  description:
    'Marangu Route on Kilimanjaro with Click Expedition: 8 days in total, hut accommodation, acclimatisation day at Horombo. Prices from USD 2,450 per person. Typical day by day plan.',
  path: '/guides/tanzania/kilimanjaro/marangu',
})

const DAYS = [
  { d: 'Day 1', t: 'Arrival in Moshi', x: 'Airport transfer and a hotel night in Moshi. Briefing with your guide.' },
  { d: 'Day 2', t: 'Marangu Gate to Mandara Hut', x: 'Walk through the rainforest to the first hut.' },
  { d: 'Day 3', t: 'Mandara Hut to Horombo Hut', x: 'Out of the forest into moorland, with views of Kibo.' },
  { d: 'Day 4', t: 'Acclimatisation day at Horombo', x: 'A shorter walk higher up, then back to sleep at Horombo. This day helps your body adjust.' },
  { d: 'Day 5', t: 'Horombo Hut to Kibo Hut', x: 'Cross the high desert saddle. Early rest before the summit night.' },
  { d: 'Day 6', t: 'Summit night: Uhuru Peak, then down to Horombo', x: 'Start around midnight. Reach Uhuru Peak (5,895 m) at sunrise, then descend.' },
  { d: 'Day 7', t: 'Horombo Hut to Marangu Gate, then Moshi', x: 'Walk down, receive your summit certificate and return to the hotel in Moshi.' },
  { d: 'Day 8', t: 'Departure', x: 'Transfer to the airport.' },
]

export default function MaranguPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Tanzania · Kilimanjaro · Click Expedition
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Kilimanjaro Marangu Route: 8 Days with Huts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            The only Kilimanjaro route where you sleep in huts instead of tents. This 8 day package
            from Click Expedition in Moshi has 6 days on the mountain, with an acclimatisation day
            at Horombo, plus 2 hotel nights in Moshi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/request-a-trip?destination=Kilimanjaro"
              className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
            >
              Enquire about this climb
            </Link>
            <Link
              href="/kilimanjaro"
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Compare all routes
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-16 grid gap-6 md:grid-cols-2">
          <img
            src="https://pub-5dd88be363aa4578af71ad764a6806b9.r2.dev/photo2/photos2/16-summit-sign-couple.jpg"
            alt="Climbers at the Uhuru Peak sign on Kilimanjaro"
            loading="lazy"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-100 p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-800">
              Holiday offer, November 2026 to January 2027
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-500 px-4 py-2 text-2xl font-extrabold text-white">USD 2,600</span>
              <span className="text-sm font-semibold text-gray-600">per person, private</span>
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-100 px-4 py-2 text-2xl font-extrabold text-amber-900">USD 2,450</span>
              <span className="text-sm font-semibold text-gray-600">per person, joining a group</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-700">
              Prices are stated by the operator, in USD per person, for departures from November 2026
              to January 2027, subject to availability. Dates and booking are confirmed by Click
              Expedition. OSARE is a directory and passes your enquiry on.
            </p>
            <Link
              href="/request-a-trip?destination=Kilimanjaro"
              className="mt-5 inline-flex rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Enquire about this offer
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Typical day by day plan</h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            This is the usual Marangu schedule. Click Expedition confirms the exact plan, timings and
            hut stops when you enquire.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {DAYS.map((x) => (
              <li key={x.d} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-emerald-700">{x.d}</p>
                <h3 className="mt-1 text-lg font-bold text-gray-900">{x.t}</h3>
                <p className="mt-2 leading-7 text-gray-600">{x.x}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Included, according to the operator</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
              <li>Kilimanjaro National Park fees and permits</li>
              <li>Mountain hut fees</li>
              <li>English-speaking guides, assistant guides, porters and cook</li>
              <li>All meals and purified drinking water on the climb</li>
              <li>Two hotel nights in Moshi, airport transfers and transfers to the park</li>
              <li>Rescue fees, oxygen and emergency first-aid equipment</li>
              <li>Summit certificates</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Not included</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
              <li>International and domestic flights</li>
              <li>Tanzania visa fees</li>
              <li>Travel and medical insurance</li>
              <li>Personal trekking equipment and gear rental</li>
              <li>Tips for guides, porters and cook</li>
              <li>Personal expenses and extra hotel nights</li>
            </ul>
          </div>
        </section>

        <section className="mb-16 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900">Is Marangu right for you?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Marangu is the route with huts, so you sleep in a bed instead of a tent, and it uses the
            same trail up and down. This 8 day package includes an acclimatisation day at Horombo,
            which gives your body more time to adjust than the shorter 5 day version. Altitude
            sickness can affect anyone, so walk slowly, drink plenty of water and tell your guide at
            once about headache, nausea or dizziness. Check with a doctor before you climb and take
            out travel insurance that covers high-altitude trekking.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/guides/tanzania/kilimanjaro" className="font-bold text-green-700 hover:underline">
              ← Kilimanjaro climbing guide
            </Link>
            <Link href="/kilimanjaro" className="font-bold text-green-700 hover:underline">
              Compare routes and prices
            </Link>
            <Link href="/de/kilimandscharo" hrefLang="de"
