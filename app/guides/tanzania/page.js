import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Tanzania Travel Guide — Safari, Wildlife, Zanzibar, Transport & Travel Information | OSARE',
  description:
    'Practical Tanzania travel information covering entry requirements, safari, wildlife, destinations, Zanzibar, transport, accommodation, costs, safety and travel planning.',
  path: '/guides/tanzania',
})

export default function TanzaniaGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
          East Africa Travel Guide
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Tanzania Travel Guide
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Practical information for travelers planning a trip to Tanzania,
          including entry requirements, wildlife, safari destinations,
          Zanzibar, transport, accommodation, safety, costs and travel
          planning.
        </p>

        <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-sm text-gray-600">
          <strong>Information status:</strong> This guide is being developed
          using information from relevant official and recognized tourism
          authorities. Always verify time-sensitive requirements with the
          relevant authority before travelling.
        </div>
      </header>

      {/* Quick Facts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Tanzania at a Glance</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Capital</h3>
            <p className="mt-2 text-gray-600">Dodoma</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Region</h3>
            <p className="mt-2 text-gray-600">East Africa</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Currency</h3>
            <p className="mt-2 text-gray-600">Tanzanian Shilling (TZS)</p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Main Language</h3>
            <p className="mt-2 text-gray-600">
              Kiswahili and English
            </p>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Why Visit Tanzania?</h2>

        <p className="mt-4 max-w-4xl leading-7 text-gray-600">
          Tanzania offers a combination of wildlife, safari landscapes,
          mountains, beaches, islands and cultural experiences. Travelers can
          explore mainland destinations such as the Serengeti, Ngorongoro and
          Mount Kilimanjaro, as well as the islands and coastal destinations
          of Tanzania.
        </p>
      </section>

      {/* Main Guide Sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Plan Your Trip to Tanzania</h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <GuideSection
            title="Entry & Visa"
            description="Information about passports, visas, entry requirements and other travel documentation."
            status="Official information to be added and reviewed."
          />

          <GuideSection
            title="When to Visit"
            description="Seasonal travel information, wildlife viewing periods, weather considerations and travel planning."
            status="Country-specific information to be added."
          />

          <GuideSection
            title="Weather & Climate"
            description="General climate information for Tanzania's mainland, northern safari areas, coast and islands."
            status="Country-specific information to be developed."
          />

          <GuideSection
            title="National Parks & Wildlife"
            description="Information about Tanzania's national parks, protected areas, wildlife and conservation destinations."
            status="Official and recognized tourism information to be added."
          />

          <GuideSection
            title="Major Destinations"
            description="Explore Tanzania's major cities, safari destinations, mountain areas, coastal destinations and islands."
            status="Destination information to be developed."
          />

          <GuideSection
            title="Safari Information"
            description="Information about safari regions, wildlife experiences, national parks, reserves and responsible safari travel."
            status="Official and recognized tourism information to be added."
          />

          <GuideSection
            title="Accommodation"
            description="Information to help travelers understand accommodation options across Tanzania."
            status="Information to be developed."
          />

          <GuideSection
            title="Transport & Getting Around"
            description="Information about roads, buses, rail, domestic flights, ferries and other ways of travelling around Tanzania."
            status="Transport information to be developed."
          />

          <GuideSection
            title="Local & Intercity Transport"
            description="Practical information about local transport and connections between Tanzania's cities, towns and destinations."
            status="Transport information to be developed."
          />

          <GuideSection
            title="Money & Costs"
            description="Currency, payment methods, travel costs and practical money information for visitors."
            status="Information to be developed."
          />

          <GuideSection
            title="Health & Safety"
            description="General travel health, safety, emergency and visitor information for Tanzania."
            status="Official information to be added and reviewed."
          />

          <GuideSection
            title="Culture & Etiquette"
            description="Useful information about Tanzanian culture, customs, languages and respectful travel."
            status="Information to be developed."
          />

          <GuideSection
            title="Travel With Children"
            description="Practical considerations for families travelling around Tanzania."
            status="Information to be developed."
          />

          <GuideSection
            title="Connectivity & Internet"
            description="Information about mobile connectivity, SIM cards, internet access and communication."
            status="Information to be developed."
          />

          <GuideSection
            title="Responsible Tourism"
            description="Information about responsible wildlife viewing, conservation, communities and sustainable travel."
            status="Official and recognized guidance to be added."
          />
        </div>
      </section>

      {/* Major Destinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Major Tanzania Destinations</h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Destination guides will be added as verified information becomes
          available.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DestinationCard
            title="Serengeti"
            href="#"
            description="Safari and wildlife destination information — coming soon."
          />

          <DestinationCard
            title="Ngorongoro"
            href="#"
            description="Destination information — coming soon."
          />

          <DestinationCard
            title="Mount Kilimanjaro"
            href="#"
            description="Mountain travel information — coming soon."
          />

          <DestinationCard
            title="Arusha"
            href="#"
            description="City and safari gateway information — coming soon."
          />

          <DestinationCard
            title="Dar es Salaam"
            href="#"
            description="City and coastal travel information — coming soon."
          />

          <DestinationCard
            title="Zanzibar"
            href="/guides/tanzania/zanzibar"
            description="Island travel, beaches, culture and practical information."
          />
        </div>
      </section>

      {/* Zanzibar */}
      <section className="mb-12 rounded-xl border p-6">
        <h2 className="text-2xl font-bold">Tanzania & Zanzibar</h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Zanzibar has its own detailed travel guide within the Tanzania guide
          structure. Explore information about Zanzibar's destinations,
          transport, accommodation, culture and travel planning.
        </p>

        <div className="mt-5">
          <Link
            href="/guides/tanzania/zanzibar"
            className="font-semibold text-green-700 hover:underline"
          >
            Explore the Zanzibar Travel Guide →
          </Link>
        </div>
      </section>

      {/* Official Information */}
      <section className="mb-12 rounded-xl border bg-gray-50 p-6">
        <h2 className="text-2xl font-bold">
          Accredited / Official Tourism Information
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Country information on this page will be developed from relevant
          government authorities, official tourism organizations and other
          recognized sources. Time-sensitive information should always be
          checked against the current official source.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold">Source Record</h3>

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

      {/* Useful Contacts */}
      <section className="mb-12 rounded-xl border p-6">
        <h2 className="text-2xl font-bold">
          Useful Contacts & Official Links
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600">
          Official contact information and links will be added after they have
          been checked against current government and recognized tourism
          sources.
        </p>

        <div className="mt-6 space-y-3 text-sm text-gray-600">
          <p>
            <strong>Tourism authority:</strong> To be added
          </p>

          <p>
            <strong>Immigration authority:</strong> To be added
          </p>

          <p>
            <strong>Emergency information:</strong> To be added
          </p>
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
