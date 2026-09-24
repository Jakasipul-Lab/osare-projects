import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Kenya Travel Guide — Safari, Travel, Transport & Practical Information | OSARE',
  description:
    'Practical Kenya travel information covering entry requirements, destinations, wildlife, transport, accommodation, safety, costs and travel planning.',
  path: '/guides/kenya',
})

export default function KenyaGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
          East Africa Travel Guide
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Kenya Travel Guide
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Practical information for travelers planning a trip to Kenya,
          including entry requirements, destinations, wildlife, transport,
          accommodation, safety, costs and travel planning.
        </p>

        <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-sm text-gray-600">
          <strong>Information status:</strong> This guide is being developed
          using information from relevant official and recognized tourism
          authorities. Always verify time-sensitive requirements with the
          relevant authority before travelling.
        </div>
      </header>

      {/* Quick facts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Kenya at a Glance</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Capital</h3>
            <p className="mt-2 text-gray-600">Nairobi</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Region</h3>
            <p className="mt-2 text-gray-600">East Africa</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Currency</h3>
            <p className="mt-2 text-gray-600">Kenyan Shilling (KES)</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Main Language</h3>
            <p className="mt-2 text-gray-600">
              English and Kiswahili
            </p>
          </div>
        </div>
      </section>

      {/* Main guide sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Plan Your Trip to Kenya</h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <GuideSection
            title="Entry Requirements & eTA"
            description="Information about entry requirements, travel documents, electronic travel authorization and entry procedures."
            status="Official information to be added and reviewed."
          />

          <GuideSection
            title="When to Visit Kenya"
            description="Seasonal information, weather patterns, wildlife viewing periods and travel considerations."
            status="Country-specific information to be added."
          />

          <GuideSection
            title="Kenya Destinations"
            description="Explore Kenya's major cities, national parks, reserves, beaches and other travel destinations."
            status="Destination information to be developed."
          />

          <GuideSection
            title="Safari & Wildlife"
            description="Information about Kenya's safari regions, wildlife experiences, conservation areas and responsible tourism."
            status="Official and recognized tourism information to be added."
          />

          <GuideSection
            title="Transport & Getting Around"
            description="Information about roads, buses, trains, domestic flights and other ways of travelling around Kenya."
            status="Transport information to be developed."
          />

          <GuideSection
            title="Accommodation"
            description="Information to help travelers understand accommodation options across Kenya."
            status="Information to be developed."
          />

          <GuideSection
            title="Money, Costs & Payments"
            description="Currency, payment methods, typical travel costs and practical money information."
            status="Information to be developed."
          />

          <GuideSection
            title="Health & Safety"
            description="General travel health, safety and emergency information for visitors to Kenya."
            status="Official information to be added and reviewed."
          />

          <GuideSection
            title="Culture & Etiquette"
            description="Useful information about Kenyan culture, customs, languages and respectful travel."
            status="Information to be developed."
          />

          <GuideSection
            title="Connectivity & Internet"
            description="Practical information about mobile connectivity, SIM cards, internet access and communication."
            status="Information to be developed."
          />
        </div>
      </section>

      {/* Kenya destinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Kenya Destinations</h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Destination guides will be added as verified information becomes
          available.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DestinationCard
            title="Maasai Mara"
            href="/guides/maasai-mara"
            description="Safari, wildlife, travel planning and practical information."
          />

          <DestinationCard
            title="Nairobi"
            href="#"
            description="City travel information — coming soon."
          />

          <DestinationCard
            title="Amboseli"
            href="#"
            description="Destination information — coming soon."
          />

          <DestinationCard
            title="Tsavo"
            href="#"
            description="Destination information — coming soon."
          />

          <DestinationCard
            title="Kenya Coast"
            href="#"
            description="Coastal travel information — coming soon."
          />
        </div>
      </section>

      {/* Existing general guides */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Useful Travel Guides</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <LinkCard
            title="Visa & Entry Requirements"
            href="/guides/visa-entry-requirements"
          />

          <LinkCard
            title="Health & Safety"
            href="/guides/health-safety"
          />

          <LinkCard
            title="Money, Costs & Tipping"
            href="/guides/money-costs-tipping"
          />

          <LinkCard
            title="Packing & Best Time to Travel"
            href="/guides/packing-best-time"
          />
        </div>
      </section>

      {/* Official information */}
      <section className="mb-12 rounded-xl border bg-gray-50 p-6">
        <h2 className="text-2xl font-bold">
          Official & Accredited Information
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Country information on this page will be developed from relevant
          government authorities, official tourism organizations and other
          recognized sources. Time-sensitive information should always be
          checked against the current official source.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold">Source record</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>
              <strong>Authority:</strong> To be added
            </p>
            <p>
              <strong>Official source:</strong> To be added
            </p>
            <p>
              <strong>Last reviewed:</strong> To be added
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t pt-8">
        <Link
          href="/guides"
          className="font-semibold text-green-700 hover:underline"
        >
          ← Back to Travel Guides
        </Link>
      </section>
    </main>
  )
}

function GuideSection({ title, description, status }) {
  return (
    <article className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

      <p className="mt-4 text-sm text-gray-500">
        {status}
      </p>
    </article>
  )
}

function DestinationCard({ title, href, description }) {
  const isActive = href !== '#'

  if (!isActive) {
    return (
      <div className="rounded-xl border p-5">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          {description}
        </p>
      </div>
    )
  }

  return (
    <Link
      href={href}
      className="block rounded-xl border p-5 transition hover:shadow-md"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>
    </Link>
  )
}

function LinkCard({ title, href }) {
  return (
    <Link
      href={href}
      className="block rounded-xl border p-5 font-semibold transition hover:shadow-md"
    >
      {title}
    </Link>
  )
}

