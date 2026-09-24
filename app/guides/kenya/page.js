import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Kenya Travel Guide — Safari, Destinations, Transport, Beaches & Travel Information | OSARE',
  description:
    'Explore Kenya with practical travel information covering Nairobi, Maasai Mara, Amboseli, Tsavo, the Kenya Coast, safari, wildlife, transport, accommodation, money, safety and trip planning.',
  path: '/guides/kenya',
})

export default function KenyaGuidePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              East Africa Travel Guide
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Kenya Travel Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
              Discover Kenya — from Nairobi and the Maasai Mara to Amboseli,
              Tsavo and the Indian Ocean coast. Find destinations, safari
              information, transport options, practical travel advice and
              ways to plan your journey across Kenya.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/search"
                className="rounded-xl bg-amber-400 px-6 py-3 text-center font-bold text-green-950 shadow-lg transition hover:bg-amber-300"
              >
                Search Travel Routes
              </Link>

              <Link
                href="/vendors"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Travel Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FactCard
            title="Capital"
            value="Nairobi"
            icon="🏙️"
          />

          <FactCard
            title="Region"
            value="East Africa"
            icon="🌍"
          />

          <FactCard
            title="Currency"
            value="Kenyan Shilling (KES)"
            icon="💰"
          />

          <FactCard
            title="Languages"
            value="English & Kiswahili"
            icon="🗣️"
          />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl bg-amber-50 p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-green-800">
            Welcome to Kenya
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-950">
            One country, many ways to travel
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-700">
            Kenya offers much more than safari. Travelers can combine wildlife
            experiences with cities, mountains, lakes, cultural experiences,
            beaches and journeys by road, rail or air. Use this guide to
            understand the country before choosing where to go and how to
            travel between destinations.
          </p>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Explore Kenya
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Popular destinations
            </h2>
          </div>

          <Link
            href="/guides"
            className="font-semibold text-green-700 hover:text-green-900"
          >
            View all travel guides →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <DestinationCard
            title="Maasai Mara"
            href="/guides/maasai-mara"
            description="Wildlife, safari planning, migration information and practical travel advice."
            icon="🦁"
            active
          />

          <DestinationCard
            title="Nairobi"
            href="/guides/nairobi"
            description="Kenya's capital, international gateway and starting point for many journeys."
            icon="🏙️"
          />

          <DestinationCard
            title="Amboseli"
            href="/guides/amboseli"
            description="Wildlife, open plains and views toward Mount Kilimanjaro."
            icon="🐘"
          />

          <DestinationCard
            title="Tsavo"
            href="/guides/tsavo"
            description="One of Kenya's major safari regions with extensive wilderness areas."
            icon="🌿"
          />

          <DestinationCard
            title="Lake Nakuru"
            href="/guides/lake-nakuru"
            description="Wildlife, landscapes and an important stop within Kenya's safari circuit."
            icon="🦒"
          />

          <DestinationCard
            title="Kenya Coast"
            href="/guides/kenya-coast"
            description="Mombasa, Diani, Watamu, Malindi and the Indian Ocean coast."
            icon="🌊"
          />
        </div>
      </section>

      {/* TRAVEL PLANNING */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Plan your journey
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-950">
              Kenya travel information
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Before you travel, understand the practical details that can
              affect your journey. These guides are designed to help travelers
              make informed decisions before contacting a travel provider.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              title="Entry Requirements & eTA"
              description="Travel documents, entry requirements and electronic travel authorization information."
              href="/guides/visa-entry-requirements"
              icon="🛂"
            />

            <GuideCard
              title="When to Visit Kenya"
              description="Understand seasons, weather, wildlife experiences and different travel periods."
              href="/guides/packing-best-time"
              icon="☀️"
            />

            <GuideCard
              title="Transport & Getting Around"
              description="Explore buses, trains, domestic flights, road travel and other transport options."
              href="/search"
              icon="🚌"
            />

            <GuideCard
              title="Accommodation"
              description="Understand hotels, lodges, camps, guesthouses and other accommodation options."
              href="/vendors"
              icon="🏨"
            />

            <GuideCard
              title="Money, Costs & Payments"
              description="Learn about currency, payments, budgeting and practical money considerations."
              href="/guides/money-costs-tipping"
              icon="💳"
            />

            <GuideCard
              title="Health & Safety"
              description="General travel health, safety and emergency information for visitors."
              href="/guides/health-safety"
              icon="🛡️"
            />

            <GuideCard
              title="Culture & Etiquette"
              description="Learn about Kenyan culture, languages, customs and respectful travel."
              href="/guides/culture-etiquette"
              icon="🤝"
            />

            <GuideCard
              title="Connectivity & Internet"
              description="Mobile networks, SIM cards, internet access and staying connected."
              href="/guides/connectivity"
              icon="📱"
            />

            <GuideCard
              title="Packing for Kenya"
              description="Practical things to consider when preparing for different Kenyan destinations."
              href="/guides/packing-best-time"
              icon="🎒"
            />
          </div>
        </div>
      </section>

      {/* TRANSPORT SEARCH */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-amber-100 to-green-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-wider text-green-800">
                Travel across Kenya
              </p>

              <h2 className="mt-2 text-3xl font-bold text-green-950">
                How are you getting there?
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                Searching for a journey between Kenyan destinations? Use
                eaSafariRoutes to explore available route and transport
                information.
              </p>

              <Link
                href="/search"
                className="mt-7 inline-block rounded-xl bg-green-900 px-6 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Search a Route →
              </Link>
            </div>

            <div className="flex items-center justify-center bg-green-900 p-10 text-center text-white">
              <div>
                <div className="text-6xl">🚌 🚆 ✈️ 🚐</div>

                <p className="mt-5 text-xl font-semibold">
                  Nairobi → Mombasa
                </p>

                <p className="mt-2 text-green-100">
                  Compare available ways to travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFARI */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl bg-green-950 p-8 text-white lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
                Kenya Safari
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Start planning your safari
              </h2>

              <p className="mt-5 leading-8 text-green-100">
                Kenya is one of East Africa's major wildlife destinations.
                Explore safari regions, understand travel logistics and then
                connect with tourism businesses offering services in the
                destination you want to visit.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/guides/maasai-mara"
                  className="rounded-xl bg-amber-400 px-6 py-3 text-center font-bold text-green-950 hover:bg-amber-300"
                >
                  Explore Maasai Mara
                </Link>

                <Link
                  href="/vendors"
                  className="rounded-xl border border-white/30 px-6 py-3 text-center font-semibold hover:bg-white/10"
                >
                  Find Travel Providers
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-8">
              <div className="grid grid-cols-2 gap-4">
                <MiniCard text="Wildlife" icon="🦁" />
                <MiniCard text="Safari" icon="🚙" />
                <MiniCard text="Beaches" icon="🌴" />
                <MiniCard text="Culture" icon="🪘" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USEFUL GUIDES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-3xl font-bold">
          More Kenya travel information
        </h2>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            title="Packing & Best Time"
            href="/guides/packing-best-time"
          />
        </div>
      </section>

      {/* VENDORS / MONETIZATION */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Explore local services
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-950">
              Planning your Kenya trip?
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Once you know where you want to go, discover tourism businesses,
              accommodation, transport and other travel services available for
              your journey.
            </p>

            <Link
              href="/vendors"
              className="mt-7 inline-block rounded-xl bg-green-900 px-7 py-3 font-bold text-white hover:bg-green-800"
            >
              Explore Kenya Travel Services
            </Link>
          </div>
        </div>
      </section>

      {/* INFORMATION STATUS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-950">
            Information & source record
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-gray-700">
            Travel requirements and other time-sensitive information can
            change. Information should be reviewed against the relevant
            government authorities, official tourism organizations and other
            recognized sources before travel.
          </p>

          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold text-green-900">Country</p>
              <p className="mt-1 text-gray-600">Kenya</p>
            </div>

            <div>
              <p className="font-semibold text-green-900">
                Information status
              </p>
              <p className="mt-1 text-gray-600">
                Continuously reviewed
              </p>
            </div>

            <div>
              <p className="font-semibold text-green-900">
                Travel advice
              </p>
              <p className="mt-1 text-gray-600">
                Check official sources before travelling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <Link
          href="/guides"
          className="font-semibold text-green-700 hover:text-green-900"
        >
          ← Back to East Africa Travel Guides
        </Link>
      </section>
    </main>
  )
}

/* --------------------------------
   COMPONENTS
-------------------------------- */
function FactCard({ title, value, icon }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-2xl">{icon}</div>

      <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h3>

      <p className="mt-1 font-bold text-green-950">
        {value}
      </p>
    </div>
  )
}

function DestinationCard({
  title,
  href,
  description,
  icon,
  active = false,
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <span className="text-4xl">{icon}</span>

        {active && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
            Explore
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-bold text-green-950 group-hover:text-green-700">
        {title}
      </h3>

      <p className="mt-2 leading-6 text-gray-600">
        {description}
      </p>

      <p className="mt-4 font-semibold text-green-700">
        Explore destination →
      </p>
    </Link>
  )
}

function GuideCard({ title, description, href, icon }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-lg font-bold text-green-950 group-hover:text-green-700">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {description}
      </p>

      <p className="mt-4 text-sm font-bold text-green-700">
        Learn more →
      </p>
    </Link>
  )
}

function MiniCard({ text, icon }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 text-center">
      <div className="text-3xl">{icon}</div>

      <p className="mt-2 font-semibold">
        {text}
      </p>
    </div>
  )
}

function LinkCard({ title, href }) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-gray-200 bg-white p-5 font-semibold shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
    >
      {title}
    </Link>
  )
}
