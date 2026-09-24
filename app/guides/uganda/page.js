import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Uganda Travel Guide — Safari, Wildlife, Gorilla Trekking & Travel Information | OSARE',
  description:
    'Practical Uganda travel information covering entry requirements, wildlife, gorilla trekking, safari destinations, transport, accommodation, costs, safety and travel planning.',
  path: '/guides/uganda',
})

export default function UgandaGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              East Africa Travel Guide
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Uganda Travel Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
              Discover Uganda's wildlife, forests, mountains, rivers, cities
              and unforgettable safari experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-3xl">
              <span title="Gorilla">🦍</span>
              <span title="Lion">🦁</span>
              <span title="Elephant">🐘</span>
              <span title="Chimpanzee">🐒</span>
              <span title="Giraffe">🦒</span>
              <span title="Zebra">🦓</span>
              <span title="Birdlife">🦅</span>
            </div>
          </div>
        </div>

        <div className="absolute -right-10 -bottom-16 hidden text-[180px] opacity-10 lg:block">
          🦍
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Information Status */}
        <div className="mb-12 rounded-2xl border border-green-200 bg-green-50 p-6">
          <p className="text-sm leading-6 text-green-900">
            <strong>Information status:</strong> This guide is being developed
            using information from relevant official and recognized tourism
            authorities. Always verify time-sensitive requirements with the
            relevant authority before travelling.
          </p>
        </div>

        {/* Quick Facts */}
        <section className="mb-14">
          <SectionHeading
            icon="🌍"
            title="Uganda at a Glance"
            description="A quick introduction to Uganda for travelers planning an East Africa trip."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon="🏛️"
              title="Capital"
              value="Kampala"
            />

            <FactCard
              icon="🌍"
              title="Region"
              value="East Africa"
            />

            <FactCard
              icon="💰"
              title="Currency"
              value="Ugandan Shilling (UGX)"
            />

            <FactCard
              icon="🗣️"
              title="Main Language"
              value="English and Kiswahili"
            />
          </div>
        </section>

        {/* Why Visit */}
        <section className="mb-14">
          <SectionHeading
            icon="🦍"
            title="Why Visit Uganda?"
            description="Uganda combines wildlife, forests, mountains, lakes, rivers and cultural experiences."
          />

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon="🦍"
              title="Gorilla Experiences"
              text="Uganda is known for its mountain gorilla experiences in the forests of southwestern Uganda."
            />

            <FeatureCard
              icon="🦁"
              title="Wildlife & Safari"
              text="Explore Uganda's national parks and discover a variety of wildlife and landscapes."
            />

            <FeatureCard
              icon="🌿"
              title="Forests & Nature"
              text="From rainforest ecosystems to lakes and rivers, Uganda offers diverse natural environments."
            />
          </div>
        </section>

        {/* Main Guide */}
        <section className="mb-14">
          <SectionHeading
            icon="🧭"
            title="Plan Your Trip to Uganda"
            description="Practical information for planning your journey."
          />

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <GuideCard
              icon="🛂"
              title="Entry & Visa"
              description="Information about passports, visas, entry requirements and travel documentation."
              color="amber"
            />

            <GuideCard
              icon="☀️"
              title="When to Visit"
              description="Seasonal travel information, weather considerations and wildlife viewing periods."
              color="green"
            />

            <GuideCard
              icon="🌦️"
              title="Weather & Climate"
              description="General climate information for Uganda's cities, wildlife areas, forests and mountains."
              color="blue"
            />

            <GuideCard
              icon="🦁"
              title="National Parks & Wildlife"
              description="Information about Uganda's national parks, wildlife areas, conservation and nature."
              color="green"
            />

            <GuideCard
              icon="📍"
              title="Major Destinations"
              description="Explore Uganda's major cities, parks, forests, lakes, rivers and tourism destinations."
              color="amber"
            />

            <GuideCard
              icon="🚙"
              title="Safari Information"
              description="Information about safari regions, wildlife experiences, parks and responsible safari travel."
              color="green"
            />

            <GuideCard
              icon="🏨"
              title="Accommodation"
              description="Information to help travelers understand accommodation options across Uganda."
              color="blue"
            />

            <GuideCard
              icon="🚌"
              title="Transport & Getting Around"
              description="Information about roads, buses, domestic flights and other ways of travelling around Uganda."
              color="amber"
            />

            <GuideCard
              icon="🚐"
              title="Local & Intercity Transport"
              description="Practical information about local transport and connections between Uganda's cities and destinations."
              color="green"
            />

            <GuideCard
              icon="💰"
              title="Money & Costs"
              description="Currency, payment methods, travel costs and practical money information."
              color="amber"
            />

            <GuideCard
              icon="🩺"
              title="Health & Safety"
              description="General travel health, safety, emergency and visitor information."
              color="red"
            />

            <GuideCard
              icon="🤝"
              title="Culture & Etiquette"
              description="Useful information about Ugandan culture, customs, languages and respectful travel."
              color="purple"
            />

            <GuideCard
              icon="👨‍👩‍👧‍👦"
              title="Travel With Children"
              description="Practical considerations for families travelling around Uganda."
              color="blue"
            />

            <GuideCard
              icon="📱"
              title="Connectivity & Internet"
              description="Information about mobile connectivity, SIM cards, internet access and communication."
              color="green"
            />

            <GuideCard
              icon="🌱"
              title="Responsible Tourism"
              description="Information about conservation, wildlife protection, communities and responsible travel."
              color="green"
            />
          </div>
        </section>

        {/* Wildlife */}
        <section className="mb-14 overflow-hidden rounded-3xl bg-green-950 text-white">
          <div className="p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Wildlife
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Uganda's Wildlife & Nature
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-green-100">
              Uganda's protected areas offer opportunities to experience
              wildlife and diverse natural landscapes. Destination information
              will be developed using verified tourism and conservation sources.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <AnimalCard animal="🦍" name="Mountain Gorillas" />
              <AnimalCard animal="🦁" name="Lions" />
              <AnimalCard animal="🐘" name="Elephants" />
              <AnimalCard animal="🐒" name="Chimpanzees" />
              <AnimalCard animal="🦒" name="Giraffes" />
              <AnimalCard animal="🦓" name="Zebras" />
              <AnimalCard animal="🦛" name="Hippos" />
              <AnimalCard animal="🦅" name="Birdlife" />
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="mb-14">
          <SectionHeading
            icon="📍"
            title="Major Uganda Destinations"
            description="Destination guides will be expanded as verified information becomes available."
          />

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <DestinationCard
              icon="🏙️"
              title="Kampala"
              description="Uganda's capital and an important starting point for many journeys."
            />

            <DestinationCard
              icon="🦍"
              title="Bwindi"
              description="Forest destination associated with mountain gorilla experiences."
            />

            <DestinationCard
              icon="🦁"
              title="Queen Elizabeth National Park"
              description="Wildlife destination with diverse landscapes and safari experiences."
            />

            <DestinationCard
              icon="🐘"
              title="Murchison Falls"
              description="A major wildlife destination known for its landscapes and powerful river falls."
            />

            <DestinationCard
              icon="🐒"
              title="Kibale"
              description="Forest destination known for primate and nature experiences."
            />

            <DestinationCard
              icon="🌊"
              title="Jinja"
              description="A destination associated with the Nile and adventure activities."
            />
          </div>
        </section>

        {/* Official Information */}
        <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📋</div>

            <div>
              <h2 className="text-2xl font-bold text-amber-950">
                Accredited / Official Tourism Information
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-amber-900">
                Country information on this page will be developed from
                relevant government authorities, official tourism organizations
                and other recognized sources. Time-sensitive information should
                always be checked against the current official source.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <SourceCard
              title="Tourism Authority"
              value="To be added"
            />

            <SourceCard
              title="Official Source"
              value="To be added"
            />

            <SourceCard
              title="Last Reviewed"
              value="To be added"
            />
          </div>
        </section>

        {/* Useful Contacts */}
        <section className="mb-12 rounded-3xl border bg-white p-8 shadow-sm">
          <SectionHeading
            icon="☎️"
            title="Useful Contacts & Official Links"
            description="Official contact information will be added after verification."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ContactCard
              title="Tourism Authority"
              value="To be added"
            />

            <ContactCard
              title="Immigration Authority"
              value="To be added"
            />

            <ContactCard
              title="Emergency Information"
              value="To be added"
            />
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8">
          <Link
            href="/guides"
            className="font-semibold text-green-700 transition hover:text-green-900 hover:underline"
          >
            ← Back to Travel Guides
          </Link>
        </section>
      </div>
    </main>
  )
}

function SectionHeading({ icon, title, description }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>

        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h2>
      </div>

      <p className="mt-3 max-w-3xl leading-7 text-gray-600">
        {description}
      </p>
    </div>
  )
}

function FactCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {value}
      </p>
    </div>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {text}
      </p>
    </article>
  )
}

function GuideCard({ icon, title, description, color }) {
  const colors = {
    green: 'border-green-200 bg-green-50',
    amber: 'border-amber-200 bg-amber-50',
    blue: 'border-sky-200 bg-sky-50',
    red: 'border-red-200 bg-red-50',
    purple: 'border-purple-200 bg-purple-50',
  }

  return (
    <article
      className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        colors[color] || colors.green
      }`}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-700">
        {description}
      </p>
    </article>
  )
}

function AnimalCard({ animal, name }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-sm transition hover:bg-white/20">
      <div className="text-5xl">{animal}</div>

      <p className="mt-3 font-semibold text-white">
        {name}
      </p>
    </div>
  )
}

function DestinationCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <p className="mt-4 text-sm font-semibold text-green-700">
        Guide coming soon
      </p>
    </article>
  )
}

function SourceCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-5">
      <p className="text-sm font-semibold text-gray-600">
        {title}
      </p>

      <p className="mt-2 font-semibold text-gray-900">
        {value}
      </p>
    </div>
  )
}

function ContactCard({ title, value }) {
  return (
    <div className="rounded-2xl border p-5">
      <h3 className="font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {value}
      </p>
    </div>
  )
}
