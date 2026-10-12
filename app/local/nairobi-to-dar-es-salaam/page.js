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
            <li><strong>Departures:</strong> shuttles to Arusha usually leave Nairobi in the morning, and some
