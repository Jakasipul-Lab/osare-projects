import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Rwanda Travel Guide — Gorilla Trekking, Safari, Wildlife & Travel Information | OSARE',
  description:
    'Practical Rwanda travel information covering entry requirements, gorilla trekking, wildlife, national parks, destinations, transport, accommodation, costs, safety and travel planning.',
  path: '/guides/rwanda',
})

export default function RwandaGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              East Africa Travel Guide
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Rwanda Travel Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
              Explore Rwanda's hills, forests, wildlife, national parks,
              culture, lakes and unforgettable gorilla experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-3xl">
              <span title="Mountain Gorilla">🦍</span>
              <span title="Lion">🦁</span>
              <span title="Elephant">🐘</span>
              <span title="Chimpanzee">🐒</span>
              <span title="Giraffe">🦒</span>
              <span title="Zebra">🦓</span>
              <span title="Birdlife">🦅</span>
            </div>
          </div>
        </div>

        <div className="absolute -right-8 -bottom-16 hidden text-[190px] opacity-10 lg:block">
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
            title="Rwanda at a Glance"
            description="A quick introduction to Rwanda for travelers planning an East Africa journey."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon="🏛️"
              title="Capital"
              value="Kigali"
            />

            <FactCard
              icon="🌍"
              title="Region"
              value="East Africa"
            />

            <FactCard
              icon="💰"
              title="Currency"
              value="Rwandan Franc (RWF)"
            />

            <FactCard
              icon="🗣️"
              title="Languages"
              value="Kinyarwanda, English and French"
            />
          </div>
        </section>

        {/* Why Visit Rwanda */}
        <section className="mb-14">
          <SectionHeading
            icon="🇷🇼"
            title="Why Visit Rwanda?"
            description="Rwanda combines wildlife, mountain forests, lakes, culture, adventure and distinctive landscapes."
          />

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon="🦍"
              title="Gorilla Experiences"
              text="Volcanoes National Park is one of Rwanda's best-known destinations for mountain gorilla tracking."
            />

            <FeatureCard
              icon="🦁"
              title="Safari & Wildlife"
              text="Akagera National Park offers savannah, wetlands, lakes and a range of wildlife experiences."
            />

            <FeatureCard
              icon="🌿"
              title="Rainforests & Primates"
              text="Nyungwe and other forest areas offer opportunities to experience primates, birds and rich biodiversity."
            />
          </div>
        </section>

        {/* Planning Sections */}
        <section className="mb-14">
          <SectionHeading
            icon="🧭"
            title="Plan Your Trip to Rwanda"
            description="Practical information for planning a Rwanda journey."
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
              description="General climate information for Kigali, the national parks, mountains, forests and Lake Kivu."
              color="blue"
            />

            <GuideCard
              icon="🦍"
              title="National Parks & Wildlife"
              description="Information about Rwanda's national parks, protected areas, wildlife and conservation."
              color="green"
            />

            <GuideCard
              icon="📍"
              title="Major Destinations"
              description="Explore Kigali, Volcanoes, Akagera, Nyungwe, Lake Kivu and other destinations."
              color="amber"
            />

            <GuideCard
              icon="🚙"
              title="Safari Information"
              description="Information about safari regions, wildlife experiences, parks and responsible safari travel."
              color="green"
            />

            <GuideCard
              icon="🦍"
              title="Gorilla Trekking"
              description="Practical information about gorilla experiences, preparation, responsible visitor behaviour and official guidance."
              color="purple"
            />

            <GuideCard
              icon="🏨"
              title="Accommodation"
              description="Information to help travelers understand accommodation options across Rwanda."
              color="blue"
            />

            <GuideCard
              icon="🚌"
              title="Transport & Getting Around"
              description="Information about roads, local transport, driving, buses and other ways of travelling around Rwanda."
              color="amber"
            />

            <GuideCard
              icon="🚐"
              title="Local & Intercity Transport"
              description="Practical information about connections between Kigali, towns, parks and other destinations."
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
              description="Useful information about Rwandan culture, customs, languages and respectful travel."
              color="purple"
            />

            <GuideCard
              icon="👨‍👩‍👧‍👦"
              title="Travel With Children"
              description="Practical considerations for families travelling around Rwanda."
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
              Wildlife & Nature
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Rwanda's Wildlife
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-green-100">
              Rwanda's official tourism information highlights mountain
              gorillas, chimpanzees, golden monkeys, lions, rhinos, elephants,
              primates and extensive birdlife across its protected areas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <AnimalCard animal="🦍" name="Mountain Gorillas" />
              <AnimalCard animal="🦁" name="Lions" />
              <AnimalCard animal="🐘" name="Elephants" />
              <AnimalCard animal="🦏" name="Rhinos" />
              <AnimalCard animal="🐒" name="Chimpanzees" />
              <AnimalCard animal="🐵" name="Golden Monkeys" />
              <AnimalCard animal="🦒" name="Giraffes" />
              <AnimalCard animal="🦅" name="Birdlife" />
            </div>
          </div>
        </section>

        {/* National Parks */}
        <section className="mb-14">
          <SectionHeading
            icon="🌳"
            title="Rwanda's National Parks"
            description="The official Visit Rwanda tourism site currently identifies four national parks."
          />

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <DestinationCard
              icon="🦍"
              title="Volcanoes National Park"
              description="Mountain gorillas, golden monkeys, volcanic landscapes and mountain activities."
            />

            <DestinationCard
              icon="🦁"
              title="Akagera National Park"
              description="Savannah, wetlands, lakes and wildlife safari experiences in eastern Rwanda."
            />

            <DestinationCard
              icon="🐒"
              title="Nyungwe National Park"
              description="Ancient rainforest, chimpanzees, other primates, birds and forest experiences."
            />

            <DestinationCard
              icon="🌿"
              title="Gishwati-Mukura National Park"
              description="Forest landscapes with primates, birds and community-oriented nature experiences."
            />
          </div>
        </section>

        {/* Major Destinations */}
        <section className="mb-14">
          <SectionHeading
            icon="📍"
            title="Major Rwanda Destinations"
            description="Destination guides will be expanded as verified information becomes available."
          />

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <DestinationCard
              icon="🏙️"
              title="Kigali"
              description="Rwanda's capital and an important starting point for exploring the country."
            />

            <DestinationCard
              icon="🦍"
              title="Musanze"
              description="A major base for exploring Volcanoes National Park and the Virunga region."
            />

            <DestinationCard
              icon="🌊"
              title="Lake Kivu"
              description="A scenic lake destination offering relaxation, hiking, cycling and water-based activities."
            />

            <DestinationCard
              icon="🏛️"
              title="Huye"
              description="A cultural and academic centre with museums and heritage attractions."
            />

            <DestinationCard
              icon="👑"
              title="Nyanza"
              description="A destination associated with Rwanda's royal heritage and the King's Palace."
            />

            <DestinationCard
              icon="🏖️"
              title="Rubavu"
              description="A Lake Kivu waterfront destination near the western border."
            />
          </div>
        </section>

        {/* Gorilla Section */}
        <section className="mb-14 overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-green-50 p-8 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="text-7xl">🦍</div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-purple-700">
                Rwanda Wildlife Experience
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Gorilla Trekking
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-gray-700">
                Gorilla trekking in Rwanda is carefully managed and takes place
                in the Volcanoes National Park area. Travelers should always
                check current permit requirements, age rules, health guidance,
                visitor regulations and official booking information before
                planning a trek.
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-800">
                Official information should be checked before booking.
              </p>
            </div>
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
              value="Rwanda Development Board / Visit Rwanda"
            />

            <SourceCard
              title="Official Tourism Source"
              value="Visit Rwanda"
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
            description="Official contact information and links will be added after verification."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ContactCard
              title="Tourism Authority"
              value="Rwanda Development Board / Visit Rwanda"
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

        {/* Source Note */}
        <section className="mb-12 rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm leading-6 text-gray-600">
            <strong>Source note:</strong> Rwanda destination and wildlife
            information on this guide is being developed with reference to
            official Visit Rwanda tourism information. Details that can change,
            including entry requirements, permits, prices and travel
            regulations, should be checked against the current official source.
          </p>
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
