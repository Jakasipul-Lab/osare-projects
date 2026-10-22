import Link from 'next/link'

const DESTINATIONS = [
  { name: 'Kenya', tag: 'Safari, beaches & culture', href: '/guides/kenya', color: 'from-emerald-700 to-emerald-500' },
  { name: 'Tanzania', tag: 'Serengeti & Kilimanjaro', href: '/guides/tanzania', color: 'from-amber-700 to-amber-500' },
  { name: 'Uganda', tag: 'Gorillas & the Nile', href: '/guides/uganda', color: 'from-rose-700 to-rose-500' },
  { name: 'Rwanda', tag: 'Gorilla trekking', href: '/guides/rwanda', color: 'from-sky-700 to-sky-500' },
  { name: 'Zanzibar', tag: 'Island & white sand', href: '/guides/tanzania/zanzibar', color: 'from-cyan-700 to-cyan-500' },
  { name: 'Maasai Mara', tag: 'Great Migration', href: '/guides/maasai-mara', color: 'from-orange-700 to-orange-500' },
]

export default function TopDestinations() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Top Safari Destinations</h2>
      <p className="mt-1 text-slate-600">Start with our free travel guides, then pick your tour.</p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {DESTINATIONS.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className={`group flex h-32 flex-col justify-end rounded-2xl bg-gradient-to-br ${d.color} p-4 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:h-40`}
          >
            <span className="text-xl font-bold sm:text-2xl">{d.name}</span>
            <span className="text-sm text-white/90">{d.tag}</span>
            <span className="mt-1 text-xs font-semibold opacity-0 transition group-hover:opacity-100">Read the guide →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
