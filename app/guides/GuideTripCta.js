import Link from 'next/link'

// Trip-request box + official links, shared by every country guide.
// Usage: <GuideTripCta country="Kenya" links={[{ label: '...', href: 'https://...' }]} />
export default function GuideTripCta({ country, links = [], wide = false }) {
  const msg = encodeURIComponent(`Hello OSARE, I am planning a trip to ${country}.`)

  return (
    <div className={wide ? 'mx-auto max-w-7xl px-6' : ''}>
      <section className="mb-12 rounded-3xl bg-green-900 p-8 text-white sm:p-10">
        <h2 className="text-3xl font-extrabold">Planning a trip to {country}?</h2>

        <p className="mt-4 max-w-3xl leading-7 text-green-50">
          Tell us where you want to go, your dates, group size and budget.
          We will reply with options and put you in touch with an operator.
          There is no charge for asking.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/request-a-trip?destination=${encodeURIComponent(country)}`}
            className="rounded-full bg-amber-400 px-6 py-3 font-bold text-green-950 transition hover:bg-amber-300"
          >
            Request a {country} trip
          </Link>

          <a
            href={`https://wa.me/254758378729?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>

      {links.length > 0 && (
        <section className="mb-12 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Official {country} websites</h2>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-700 hover:underline"
                >
                  {l.label} →
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-gray-500">
            Always confirm visa, park and health requirements on the official site before travelling.
          </p>
        </section>
      )}
    </div>
  )
}
