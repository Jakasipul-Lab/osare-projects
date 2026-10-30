import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'What "OSARE Verified" Means | OSARE',
  description:
    'What the OSARE Verified stamp confirms about a safari or tour operator, what it does not guarantee, and how an operator can become verified.',
  path: '/verified',
})

const MEANS = [
  'The operator is a direct OSARE partner and has agreed to work with us.',
  'The operator confirmed the details shown on the listing to OSARE directly, such as the route and what is included.',
  'Enquiries from OSARE reach the operator on WhatsApp, and every enquiry carries an OSARE reference code.',
]

const NOT_MEANS = [
  'It is not an official government licence check, and it is not a guarantee of quality.',
  'It does not fix a price. Prices and availability can change, so always ask for the current price and what is included before you pay.',
  'OSARE does not take payments. You agree the booking and payment directly with the operator, so ask for the details in writing.',
]

export default function VerifiedPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-6 py-14 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Trust</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            What “OSARE Verified” means
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
            The blue OSARE Verified stamp is given only to operators we have confirmed ourselves.
            Here is exactly what it covers, and what it does not.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <section className="mb-10 rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">What the stamp confirms</h2>
          <ul className="mt-5 space-y-3">
            {MEANS.map((t) => (
              <li key={t} className="rounded-xl bg-blue-50 px-4 py-3 leading-7 text-gray-800">✓ {t}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-extrabold text-amber-950">What it does not mean</h2>
          <ul className="mt-5 space-y-3">
            {NOT_MEANS.map((t) => (
              <li key={t} className="rounded-xl bg-white px-4 py-3 leading-7 text-gray-800">{t}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">Listings without the stamp</h2>
          <p className="mt-4 leading-7 text-gray-600">
            Many operators on OSARE are listed from the information they publish themselves, for example on
            their own websites. That information is shown as it was published and may not be current. The
            stamp is added only after the operator has confirmed their details to us.
          </p>
        </section>

        <section className="mb-10 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">How an operator becomes verified</h2>
          <p className="mt-4 leading-7 text-gray-600">
            Operators can write to us and confirm their listing details. We add the stamp once we have
            their confirmation.
          </p>
          <p className="mt-4 font-semibold text-gray-900">
            <a href="mailto:info@easafariroutes.com" className="text-blue-800 underline">info@easafariroutes.com</a>
          </p>
        </section>

        <p className="text-sm text-gray-500">Last updated: October 2026</p>

        <section className="mt-8 flex flex-wrap gap-5 border-t pt-8">
          <Link href="/safari" className="font-bold text-blue-800 hover:underline">
            See operators
          </Link>
          <Link href="/how-it-works" className="font-bold text-blue-800 hover:underline">
            How OSARE works
          </Link>
        </section>
      </div>
    </main>
  )
}
