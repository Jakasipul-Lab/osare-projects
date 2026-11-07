import { buildMetadata } from '@/lib/seo'
import TripRequestFormDE from '@/components/TripRequestFormDE'

export const metadata = buildMetadata({
  title: 'Reise anfragen: Kilimandscharo, Safari und mehr | OSARE',
  description:
    'Nennen Sie uns Ihre Reisewünsche für Ostafrika. Wir melden uns per WhatsApp und verbinden Sie mit einem passenden Anbieter. Für Reisende kostenlos.',
  path: '/de/reiseanfrage',
})

export default async function ReiseanfragePage({ searchParams }) {
  const sp = (await searchParams) || {}
  const raw = Array.isArray(sp.destination) ? sp.destination[0] : sp.destination
  const clean = String(raw || '').slice(0, 100)
  const initialDestination = clean.toLowerCase() === 'kilimanjaro' ? 'Kilimandscharo' : clean

  return (
    <div lang="de" className="mx-auto max-w-xl px-5 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Reise anfragen</h1>
      <p className="mt-2 text-slate-600">
        Unsicher, welcher Anbieter passt? Sagen Sie uns, was Sie vorhaben. Wir melden uns
        per WhatsApp und verbinden Sie mit einem passenden Anbieter. Für Reisende ist das kostenlos.
      </p>
      <div className="mt-8">
        <TripRequestFormDE initialDestination={initialDestination} />
      </div>
    </div>
  )
}
