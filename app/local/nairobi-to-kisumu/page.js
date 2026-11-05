import Link from 'next/link'
import { buildFAQSchema } from '@/lib/seo'

export const metadata = {
  title: 'Nairobi to Kisumu Bus Fare, Travel Time and Where to Board',
  description:
    'Nairobi to Kisumu by bus or matatu: typical bus fares, travel time of about 6 to 8 hours, where to board in Nairobi, and where you arrive in Kisumu.',
    alternates: { canonical: 'https://www.easafariroutes.com/local/nairobi-to-kisumu' },
}

const FAQS = [
  {
    question: 'How much is the bus from Nairobi to Kisumu?',
    answer:
      'Easy Coach reported KES 1,900 from Nairobi to Kisumu from 20 April 2026, and ENA Coach reported KES 1,700 from Kisumu to Nairobi via Ahero in a notice of 15 July 2026. Fares change with fuel prices and busy travel periods, so confirm the price with the company when you book.',
  },
  {
    question: 'How long does the journey from Nairobi to Kisumu take?',
    answer: 'About 6 to 8 hours by road.',
  },
  {
    question: 'Where do I board in Nairobi?',
    answer: 'Buses and matatus for Kisumu leave from the Accra Road area and the Kenya Bus terminus.',
  },
  {
    question: 'Is there a timetable for matatus?',
    answer: 'No. Matatus on this route leave when the vehicle is full. Ask at the stage and agree the price before you board.',
  },
  {
    question: 'Where do matatus from Nairobi stop in Kisumu?',
    answer: 'Matatus from Nairobi are directed to the Nyamasaria Bus Terminus on the edge of the city. From there you can continue by boda boda, taxi or local matatu.',
  },
  {
    question: 'Is there a train from Nairobi to Kisumu?',
    answer: 'Kenya Railways has run a weekly passenger train between Nairobi and Kisumu, leaving in the evening and arriving the next morning. Days and times change, so check with Kenya Railways first.',
  },
]

const WA_URL = `https://wa.me/254758378729?text=${encodeURIComponent('Hello, I need help with a bus from Nairobi to Kisumu.')}`

const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&origin=Accra+Road+Nairobi&destination=Nyamasaria+Bus+Terminus+Kisumu&travelmode=driving'

export default function NairobiToKisumuPage() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <main style={{ backgroundColor: '#eef2f9' }} className="min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        className="px-5 py-12 text-white"
        style={{ background: 'linear-gradient(135deg, #172a69, #1e3a8a)' }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Local Commute · Route guide</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Nairobi to Kisumu by bus and matatu</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Where to board in Nairobi, how long the journey takes, how often vehicles leave, and where you arrive in Kisumu.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: '#f59e0b' }}
            >
              See the route on Google Maps
            </a>
            <Link
              href="/local"
              className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Find buses on this route
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-4xl space-y-6 px-5">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">At a glance</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li><strong>Journey time:</strong> about 6 to 8 hours by road.</li>
            <li><strong>Leaving Nairobi:</strong> the Accra Road area and the Kenya Bus terminus.</li>
            <li><strong>Arriving in Kisumu:</strong> long-distance buses stop at the bus station in town. Matatus from Nairobi were directed to the Nyamasaria Bus Terminus, outside the town centre.</li>
            <li><strong>How often:</strong> several companies run this route and vehicles leave often. Matatus leave when they are full, so there is no fixed timetable.</li>
          </ul>
        </section>

        <section className="rounded-xl border-2 border-amber-300 bg-amber-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Typical bus fares</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li><strong>Easy Coach, Nairobi to Kisumu:</strong> KES 1,900 (from 20 April 2026).</li>
            <li><strong>ENA Coach, Kisumu to Nairobi via Ahero:</strong> KES 1,700 (notice of 15 July 2026).</li>
            <li><strong>Matatu:</strong> no published fare. It depends on the day and how busy it is, so ask at the stage and agree the price before you board.</li>
          </ul>
          <p className="mt-4 rounded-lg bg-white p-4 text-sm text-slate-700">
            <strong>Fares change.</strong> Bus companies adjust their prices when fuel prices change, and fares can rise in busy travel periods such as Christmas. Treat these figures as a guide, and confirm the price with the company when you book.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Figures as reported by Kenyans.co.ke on{' '}
            <a href="https://www.kenyans.co.ke/news/122699-easy-coach-announces-new-bus-fares-after-fuel-hike" target="_blank" rel="noopener noreferrer" className="underline">18 April 2026</a>
            {' '}and{' '}
            <a href="https://www.kenyans.co.ke/news/125312-ena-coach-announces-fares-various-routes-after-epras-fuel-price-review" target="_blank" rel="noopener noreferrer" className="underline">16 July 2026</a>. Last checked October 2026.
          </p>
        </section>
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">By bus</h2>
          <p className="mt-3 text-slate-700">
            Several bus companies serve Nairobi and Kisumu, including Easy Coach, Modern Coast, Guardian Coach, Greenline, Mash Poa and Mozaico. Departures are frequent. Ask the company for the exact time and the fare for your date, and agree the seat before you pay.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">By matatu</h2>
          <p className="mt-3 text-slate-700">
            Matatus on this route leave when the vehicle is full, so there is no timetable. Fares are paid to the conductor or driver. Fares change, so ask at the stage before you board and agree the price first.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">By train</h2>
          <p className="mt-3 text-slate-700">
            Kenya Railways has run a weekly passenger train between Nairobi and Kisumu, leaving in the evening and arriving the next morning. Days and times change, so check with Kenya Railways before you plan around it.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Arriving in Kisumu</h2>
          <p className="mt-3 text-slate-700">
            Since 2021, matatus from Nairobi, Kisii, Homa Bay, Migori and Kericho have been directed to the Nyamasaria Bus Terminus on the edge of the city, and matatus are not allowed into the town centre. From the terminus you can continue by boda boda, taxi or local matatu.
          </p>
        </section>

        <section className="rounded-xl border-2 border-green-300 bg-green-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Need help with this trip?</h2>
          <p className="mt-3 text-slate-700">
            Tell us your date and how many of you are travelling, and we will point you to bus companies on this route. It is free.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: '#25d366' }}
            >
              Ask us on WhatsApp
            </a>
            <Link
              href="/local"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              See other local routes
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-5">
            {FAQS.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-slate-900">{f.question}</h3>
                <p className="mt-1 text-slate-700">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-sm text-slate-500">
          This guide is free information from public sources. Stages, fares and times can change, so always check on the day with the operator or at the stage.
        </p>
      </div>
    </main>
  )
}
