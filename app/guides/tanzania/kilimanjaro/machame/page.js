import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import GuideTripCta from '../../../GuideTripCta'

export const metadata = buildMetadata({
  title: 'Kilimanjaro Machame Route: 9 Days, Camping, Price and Itinerary | OSARE',
  description:
    'Machame Route on Kilimanjaro with Click Expedition: 9 days in total, camping, hotel nights and transfers included. USD 2,550 per person. Typical day by day plan.',
  path: '/guides/tanzania/kilimanjaro/machame',
})

const DAYS = [
  { d: 'Day 1', t: 'Arrival in Moshi', x: 'Airport transfer and a hotel night in Moshi. Briefing with your guide.' },
  { d: 'Day 2', t: 'Machame Gate to Machame Camp', x: 'Walk through the rainforest to the first camp.' },
  { d: 'Day 3', t: 'Machame Camp to Shira Camp', x: 'Climb out of the forest onto the open moorland of the Shira Plateau.' },
  { d: 'Day 4', t: 'Shira Camp to Lava Tower, then Barranco Camp', x: 'Climb high to Lava Tower, then drop to Barranco to sleep lower. This helps your body adjust.' },
  { d: 'Day 5', t: 'Barranco Wall to Karanga Camp', x: 'Scramble up the Barranco Wall, then continue to Karanga.' },
  { d: 'Day 6', t: 'Karanga Camp to Barafu Camp', x: 'A short walk to the base camp for the summit. Rest early.' },
  { d: 'Day 7', t: 'Summit night: Uhuru Peak, then down to Mweka Camp', x: 'Start around midnight. Reach Uhuru Peak (5,895 m) at sunrise, then descend to Mweka Camp.' },
  { d: 'Day 8', t: 'Mweka Camp to Mweka Gate, then Moshi', x: 'Walk down, receive your summit certificate and return to the hotel in Moshi.' },
  { d: 'Day 9', t: 'Departure', x: 'Transfer to the airport.' },
]

export default function MachamePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Tanzania · Kilimanjaro · Click Expedition
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Kilimanjaro Machame Route: 9 Days, Camping
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            The most popular scenic route on Kilimanjaro, through rainforest, moorland and the
            Barranco Wall, sleeping in tents. This 9 day package from Click Expedition in Moshi
            includes hotel nights and all transfers.
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
            src="https://pub-5dd88be363aa4578af71ad764a6806b9.r2.dev/photo2/photos2/15-tents-sunrise.jpg"
            alt="Tents at sunrise above the clouds on Kilimanjaro"
            loading="lazy"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="rounded-2xl border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-100 p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-green-800">Listed price</p>
            <p className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-green-600 px-4 py-2 text-2xl font-extrabold text-white">USD 2,550</span>
              <span className="text-sm font-semibold text-gray-600">per person</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-700">
              The price is stated by the operator, in USD per person. Dates, group size and booking
              are confirmed by Click Expedition. OSARE is a directory and passes your enquiry on.
            </p>
            <Link
              href="/request-a-trip?destination=Kilimanjaro"
              className="mt-5 inline-flex rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Enquire about this climb
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Typical day by day plan</h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            This is the usual Machame schedule. Click Expedition confirms the exact plan, timings and
            camps when you enquire.
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
            <h2 className="text-lg font-bold text-gray-900">Usually included in the package</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
              <li>Kilimanjaro National Park fees and permits</li>
              <li>Camping fees, tents and sleeping mattresses</li>
              <li>Guides, assistant guides, porters and cook</li>
              <li>Meals and purified drinking water on the climb</li>
              <li>Hotel nights in Moshi, airport transfers and transfers to the park</li>
              <li>Rescue fees and emergency first-aid equipment</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              Please ask the operator to confirm exactly what is included before you book.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Usually not included</h2>
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
          <h2 className="text-2xl font-extrabold text-gray-900">Is Machame right for you?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Machame is popular for its scenery, and the walk high to Lava Tower and back down to
            Barranco helps your body adjust to the altitude. It is a camping route and busier than
            some others. Altitude sickness can affect anyone, so walk slowly, drink plenty of water
            and tell your guide at once about headache, nausea or dizziness. Check with a doctor
            before you climb and take out travel insurance that covers high-altitude trekking.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/guides/tanzania/kilimanjaro" className="font-bold text-green-700 hover:underline">
              ← Kilimanjaro climbing guide
            </Link>
            <Link href="/kilimanjaro" className="font-bold text-green-700 hover:underline">
              Compare routes and prices
            </Link>
            <Link href="/de/kilimandscharo" hrefLang="de" className="font-bold text-green-700 hover:underline">
              Auf Deutsch lesen
            </Link>
          </div>
        </section>

        <GuideTripCta
          country="Tanzania"
          links={[
            { label: 'Tanzania National Parks (TANAPA)', href: 'https://www.tanzaniaparks.go.tz' },
            { label: 'Tanzania e-Visa (Immigration)', href: 'https://visa.immigration.go.tz' },
            { label: 'Tanzania Tourist Board', href: 'https://www.tanzaniaparks.go.tz' },
          ]}
        />
      </div>
    </main>
  )
}
