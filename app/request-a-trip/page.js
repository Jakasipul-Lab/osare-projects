import { buildMetadata } from '@/lib/seo'
import TripRequestForm from '@/components/TripRequestForm'

export const metadata = buildMetadata({
  title: 'Request a Trip | OSARE',
  description:
    'Tell us the trip you have in mind in East Africa and we will connect you with a suitable partner. Free for travelers.',
  path: '/request-a-trip',
})

export default function RequestATripPage() {
  return (
    <div className="mx-auto max-w-xl px-5 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Request a Trip</h1>
      <p className="mt-2 text-slate-600">
        Not sure which partner to choose? Tell us what you have in mind and we will connect you with a
        suitable partner. It is free for travelers.
      </p>
      <div className="mt-8">
        <TripRequestForm />
      </div>
    </div>
  )
}
