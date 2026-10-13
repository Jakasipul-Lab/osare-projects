import Link from 'next/link'

export const metadata = {
  title: 'Nairobi to Dar es Salaam by Bus via Arusha: Border, Travel Time and Tips',
  description:
    'How to travel from Nairobi to Dar es Salaam by bus through Arusha and the Namanga border: travel time, documents, where you arrive, and what to check before you go.',
}

const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&origin=Nairobi+Kenya&destination=Ubungo+Bus+Terminal+Dar+es+Salaam&waypoints=Arusha+Tanzania&travelmode=driving'

export default function NairobiToDarEsSalaamPage() {
  return (
    <main style={{ backgroundColor: '#eef2f9' }} className="min-h-screen pb-16">
      <section
        className="px-5 py-12 text-white"
        style={{ background: 'linear-gradient(135deg, #172a69, #1e3a8a)' }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Local Commute · Route guide</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Nairobi to Dar es Salaam by bus, via Arusha</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            The border crossing at Namanga, how long each part takes, which documents you need, and where you arrive.
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
            <li><strong>Nairobi to Arusha:</strong> about 6 to 6.5 hours by shuttle, including the border crossing.</li>
            <li><strong>Nairobi to Dar es Salaam:</strong> about 15 hours by bus, depending on border traffic and road conditions.</li>
            <li><strong>Border:</strong> Namanga One-Stop Border Post, between Kenya and Tanzania.</li>
            <li><strong>Departures:</strong> shuttles to Arusha usually leave Nairobi in the morning, and some companies also run an early afternoon departure. Ask the company for the exact time.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Step 1: Nairobi to Arusha</h2>
          <p className="mt-3 text-slate-700">
            Shuttles and buses leave Nairobi city centre and also collect passengers at Jomo Kenyatta International Airport. Impala Shuttle is one company that runs this leg. The shuttle makes a rest stop about two hours into the drive and reaches Namanga a few hours later. Passengers are dropped at a central transport point or at the company office in Arusha.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">The border at Namanga</h2>
          <p className="mt-3 text-slate-700">
            At Namanga everyone gets off the bus with all their belongings to clear Kenyan departure and Tanzanian arrival. Crossing usually takes 30 to 45 minutes and can take up to an hour at busy times. Operators do not let passengers cross without valid documents.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>A valid passport (some travellers can use a national ID).</li>
            <li>A Tanzania visa. An e-visa can be applied for online before you travel.</li>
            <li>A Yellow Fever vaccination certificate, if it is required for you.</li>
          </ul>
          <p className="mt-3 text-slate-700">
            Vendors will approach you at the border. You can politely decline.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Step 2: Arusha to Dar es Salaam</h2>
          <p className="mt-3 text-slate-700">
            From Arusha, long-distance buses continue to Dar es Salaam. The whole trip from Nairobi to Dar es Salaam takes about 15 hours. Ask your company whether you change buses in Arusha or stay on the same one.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Arriving in Dar es Salaam</h2>
          <p className="mt-3 text-slate-700">
            Long-distance buses arrive at a bus terminal in Dar es Salaam. Ubungo is one of the main ones. Ask the operator which terminal your bus uses, then continue by taxi, ride-hailing or local transport.
          </p>
        </section>

        <p className="text-sm text-slate-500">
          This guide is free information from public sources. Border rules, stages, fares and times can change, so always check on the day with the operator.
        </p>
      </div>
    </main>
  )
}
