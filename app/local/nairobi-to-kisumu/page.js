import Link from 'next/link'

export const metadata = {
  title: 'Nairobi to Kisumu by Bus and Matatu: Stages, Travel Time and Tips',
  description:
    'How to travel from Nairobi to Kisumu by bus or matatu: where to board, how long it takes, how often vehicles leave, and where you arrive in Kisumu.',
    alternates: { canonical: 'https://www.easafariroutes.com/local/nairobi-to-kisumu' },
}

const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&origin=Accra+Road+Nairobi&destination=Nyamasaria+Bus+Terminus+Kisumu&travelmode=driving'

export default function NairobiToKisumuPage() {
  return (
    <main style={{ backgroundColor: '#eef2f9' }} className="min-h-screen pb-16">
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

        <p className="text-sm text-slate-500">
          This guide is free information from public sources. Stages, fares and times can change, so always check on the day with the operator or at the stage.
        </p>
      </div>
    </main>
  )
}
