import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Mozambique Travel Guide — Beaches, Safari, Wildlife & Travel Information | OSARE',
  description:
    'Practical Mozambique travel information covering beaches, islands, wildlife, national parks, destinations, entry requirements, transport, accommodation, costs, safety and travel planning.',
  path: '/guides/mozambique',
})

export default function MozambiqueGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <header className="bg-gradient-to-br from-green-800 via-emerald-700 to-teal-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-200">
            Southern & East African Travel Guide
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Mozambique Travel Guide
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Explore Mozambique&apos;s Indian Ocean coastline, tropical islands,
            marine life, national parks, historic towns, culture and wildlife.
            This guide brings together practical information for planning a
            journey through Mozambique.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-4xl">
            <span>🐘</span>
            <span>🦁</span>
            <span>🐊</span>
            <span>🐢</span>
            <span>🐬</span>
            <span>🐋</span>
            <span>🦈</span>
            <span>🌴</span>
            <span>🏝️</span>
          </div>

          <div className="mt-8 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm leading-6 text-green-50">
              <strong className="text-white">Information status:</strong>{' '}
              Mozambique travel conditions, entry requirements and regional
              safety information can change. Travelers should verify
              time-sensitive information with official authorities before
              departure.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* QUICK FACTS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Quick Facts"
            title="Mozambique at a Glance"
            description="A quick introduction to the country before planning your journey."
          />

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon="🏙️"
              title="Capital"
              value="Maputo"
              color="bg-emerald-50 border-emerald-200"
            />

            <FactCard
              icon="🌍"
              title="Region"
              value="Southeastern Africa"
              color="bg-sky-50 border-sky-200"
            />

            <FactCard
              icon="💰"
              title="Currency"
              value="Mozambican Metical (MZN)"
              color="bg-amber-50 border-amber-200"
            />

            <FactCard
              icon="🗣️"
              title="Official Language"
              value="Portuguese"
              color="bg-purple-50 border-purple-200"
            />
          </div>
        </section>

        {/* WHY VISIT */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Discover Mozambique"
            title="Why Visit Mozambique?"
            description="Mozambique combines long Indian Ocean beaches, islands, marine wildlife, culture and inland safari experiences."
          />

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon="🏝️"
              title="Beaches & Islands"
              text="Discover long beaches, coral reefs, tropical islands and coastal landscapes along the Indian Ocean."
              color="from-cyan-500 to-blue-600"
            />

            <FeatureCard
              icon="🐬"
              title="Marine Wildlife"
              text="Mozambique's waters support dolphins, turtles, whales, rays, sharks and other marine species."
              color="from-teal-500 to-emerald-600"
            />

            <FeatureCard
              icon="🦁"
              title="Safari & Wildlife"
              text="National parks and protected areas provide opportunities to experience elephants, lions, hippos, buffalo and many other species."
              color="from-amber-500 to-orange-600"
            />
          </div>
        </section>

        {/* PLANNING GUIDE */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Plan Your Trip"
            title="Mozambique Travel Information"
            description="Use these sections to prepare for different parts of your journey."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              icon="🛂"
              title="Entry & Visa"
              text="Travel documents, entry requirements, electronic travel authorization and border procedures."
              color="bg-blue-50 border-blue-200"
            />

            <GuideCard
              icon="☀️"
              title="When to Visit"
              text="Seasonal conditions, coastal travel, wildlife experiences and weather considerations."
              color="bg-amber-50 border-amber-200"
            />

            <GuideCard
              icon="🌦️"
              title="Weather & Climate"
              text="Understand Mozambique's coastal, tropical and seasonal weather patterns."
              color="bg-sky-50 border-sky-200"
            />

            <GuideCard
              icon="🦁"
              title="National Parks & Wildlife"
              text="Explore protected areas, wildlife regions and safari opportunities."
              color="bg-green-50 border-green-200"
            />

            <GuideCard
              icon="📍"
              title="Major Destinations"
              text="Maputo, Vilanculos, Tofo, Pemba, Ilha de Moçambique and other destinations."
              color="bg-purple-50 border-purple-200"
            />

            <GuideCard
              icon="🚙"
              title="Safari Information"
              text="Learn about inland wildlife destinations and safari planning."
              color="bg-orange-50 border-orange-200"
            />

            <GuideCard
              icon="🏨"
              title="Accommodation"
              text="Hotels, lodges, guesthouses, island resorts, safari camps and coastal accommodation."
              color="bg-pink-50 border-pink-200"
            />

            <GuideCard
              icon="🚌"
              title="Transport & Getting Around"
              text="Domestic flights, roads, buses, boats and other ways to travel around Mozambique."
              color="bg-indigo-50 border-indigo-200"
            />

            <GuideCard
              icon="🚐"
              title="Local & Intercity Transport"
              text="Practical information about local transport and connections between destinations."
              color="bg-teal-50 border-teal-200"
            />

            <GuideCard
              icon="💳"
              title="Money & Costs"
              text="Currency, payments, budgeting and practical travel-cost considerations."
              color="bg-yellow-50 border-yellow-200"
            />

            <GuideCard
              icon="🩺"
              title="Health & Safety"
              text="General health, safety, emergency and travel-preparation information."
              color="bg-red-50 border-red-200"
            />

            <GuideCard
              icon="🤝"
              title="Culture & Etiquette"
              text="Learn about language, traditions, food, communities and respectful travel."
              color="bg-violet-50 border-violet-200"
            />

            <GuideCard
              icon="👨‍👩‍👧‍👦"
              title="Travel With Children"
              text="Planning considerations for families travelling around Mozambique."
              color="bg-lime-50 border-lime-200"
            />

            <GuideCard
              icon="📱"
              title="Connectivity & Internet"
              text="Mobile connectivity, SIM cards, internet access and communication."
              color="bg-cyan-50 border-cyan-200"
            />

            <GuideCard
              icon="🌱"
              title="Responsible Tourism"
              text="Ways travelers can support conservation, local communities and responsible tourism."
              color="bg-green-50 border-green-200"
            />
          </div>
        </section>

        {/* MARINE LIFE */}
        <section className="mb-14 rounded-3xl bg-gradient-to-br from-cyan-700 to-blue-800 p-8 text-white shadow-lg sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            Indian Ocean
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Marine & Coastal Wildlife
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-cyan-50">
            Mozambique&apos;s coastline and islands are known for coral reefs,
            beaches and marine ecosystems. Depending on the destination and
            season, travelers may encounter dolphins, sea turtles, whales,
            rays, sharks and other marine life.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnimalCard emoji="🐬" title="Dolphins" />
            <AnimalCard emoji="🐢" title="Sea Turtles" />
            <AnimalCard emoji="🐋" title="Whales" />
            <AnimalCard emoji="🦈" title="Sharks & Rays" />
          </div>
        </section>

        {/* NATIONAL PARKS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Wildlife"
            title="National Parks & Protected Areas"
            description="Mozambique offers both coastal and inland protected areas with different landscapes and wildlife experiences."
          />

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DestinationCard
              icon="🦁"
              title="Gorongosa National Park"
              text="A major wildlife destination in central Mozambique with diverse ecosystems and an ongoing conservation and restoration story."
            />

            <DestinationCard
              icon="🐘"
              title="Limpopo National Park"
              text="Part of the Great Limpopo Transfrontier Conservation Area and connected to a wider regional conservation landscape."
            />

            <DestinationCard
              icon="🏝️"
              title="Bazaruto Archipelago"
              text="A protected marine environment known for islands, coral reefs and rich marine biodiversity."
            />

            <DestinationCard
              icon="🌳"
              title="Niassa Reserve"
              text="A large protected wilderness area in northern Mozambique with important woodland and wildlife habitats."
            />

            <DestinationCard
              icon="🐊"
              title="Zinave National Park"
              text="A protected area associated with the Great Limpopo conservation landscape."
            />

            <DestinationCard
              icon="🌿"
              title="Other Protected Areas"
              text="Mozambique has additional parks, reserves and conservation areas across different provinces."
            />
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Explore"
            title="Major Mozambique Destinations"
            description="Different parts of Mozambique offer very different travel experiences."
          />

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DestinationCard
              icon="🏙️"
              title="Maputo"
              text="The national capital, with architecture, markets, restaurants, cultural attractions and access to southern coastal destinations."
            />

            <DestinationCard
              icon="🏝️"
              title="Vilanculos"
              text="A major gateway to the Bazaruto Archipelago and a popular base for coastal and marine activities."
            />

            <DestinationCard
              icon="🤿"
              title="Tofo"
              text="A coastal destination associated with beaches, diving, marine life and relaxed Indian Ocean travel."
            />

            <DestinationCard
              icon="🌊"
              title="Pemba"
              text="A northern coastal city and gateway to destinations around northern Mozambique."
            />

            <DestinationCard
              icon="🏛️"
              title="Ilha de Moçambique"
              text="A historic island with Portuguese-era architecture, cultural heritage and Indian Ocean scenery."
            />

            <DestinationCard
              icon="🌴"
              title="Bazaruto Archipelago"
              text="An island destination known for beaches, marine wildlife, diving, snorkeling and water-based experiences."
            />

            <DestinationCard
              icon="🐘"
              title="Gorongosa"
              text="A gateway for exploring Gorongosa National Park and its wildlife and conservation landscapes."
            />

            <DestinationCard
              icon="🌅"
              title="Inhambane"
              text="A historic coastal region with access to beaches, marine activities and nearby destinations."
            />

            <DestinationCard
              icon="🏖️"
              title="Ponta do Ouro"
              text="A southern coastal destination known for beaches and marine activities."
            />
          </div>
        </section>

        {/* BAZARUTO */}
        <section className="mb-14 rounded-3xl border border-blue-200 bg-blue-50 p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-4xl">🏝️</span>
            <span className="text-4xl">🐢</span>
            <span className="text-4xl">🐬</span>
            <span className="text-4xl">🤿</span>
          </div>

          <h2 className="mt-5 text-3xl font-bold text-blue-950">
            Bazaruto Archipelago
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-blue-900">
            The Bazaruto Archipelago is one of Mozambique&apos;s best-known
            island destinations. Its marine environment supports a variety of
            wildlife and provides opportunities for activities such as
            snorkeling, diving, boating and beach exploration.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-blue-800">
            Marine conditions, wildlife encounters and available activities
            vary by season and location. Travelers should use licensed local
            operators and follow conservation rules.
          </p>
        </section>

        {/* GORONGOSA */}
        <section className="mb-14 rounded-3xl border border-green-200 bg-green-50 p-8 sm:p-10">
          <div className="text-5xl">🦁 🐘 🦓</div>

          <h2 className="mt-5 text-3xl font-bold text-green-950">
            Gorongosa National Park
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-green-900">
            Gorongosa is one of Mozambique&apos;s major wildlife destinations.
            The park contains a variety of habitats and has been the focus of
            long-term wildlife conservation and restoration efforts.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-green-800">
            Wildlife viewing is naturally unpredictable. Visitors should
            follow park rules, guides and conservation instructions at all
            times.
          </p>
        </section>

        {/* CULTURE */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="People & Heritage"
            title="Culture & Etiquette"
            description="Mozambique has a diverse cultural heritage shaped by African, Portuguese, Indian Ocean and other historical influences."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <GuideCard
              icon="🗣️"
              title="Language"
              text="Portuguese is the official language, while many local languages are spoken across the country."
              color="bg-purple-50 border-purple-200"
            />

            <GuideCard
              icon="🍤"
              title="Food"
              text="Seafood, prawns, fish, coconut, spices and locally produced foods are important parts of Mozambican cuisine."
              color="bg-orange-50 border-orange-200"
            />

            <GuideCard
              icon="🎶"
              title="Music & Arts"
              text="Music, dance, crafts and artistic traditions form an important part of cultural life."
              color="bg-pink-50 border-pink-200"
            />

            <GuideCard
              icon="🤝"
              title="Respectful Travel"
              text="Ask permission before photographing people, respect local customs and support local businesses and communities."
              color="bg-green-50 border-green-200"
            />
          </div>
        </section>

        {/* WHEN TO VISIT */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Travel Planning"
            title="When to Visit Mozambique"
            description="The best period depends on where you are travelling and which activities you want to experience."
          />

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-7">
              <div className="text-4xl">🌦️</div>
              <h3 className="mt-4 text-xl font-bold text-sky-950">
                Wetter Season
              </h3>
              <p className="mt-3 leading-7 text-sky-900">
                Parts of Mozambique experience warmer and wetter conditions
                during the summer months. Tropical weather can affect roads,
                travel plans and coastal activities.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
              <div className="text-4xl">☀️</div>
              <h3 className="mt-4 text-xl font-bold text-amber-950">
                Drier Season
              </h3>
              <p className="mt-3 leading-7 text-amber-900">
                The drier months can be attractive for many safari and coastal
                trips, although conditions vary significantly between regions.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSPORT */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Getting Around"
            title="Transport in Mozambique"
            description="Mozambique is a large country, so choosing the right transport is important when connecting different destinations."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon="✈️"
              title="Domestic Flights"
              value="Useful for long distances"
              color="bg-blue-50 border-blue-200"
            />

            <FactCard
              icon="🚌"
              title="Buses"
              value="Important for intercity travel"
              color="bg-orange-50 border-orange-200"
            />

            <FactCard
              icon="🚙"
              title="Road Travel"
              value="Plan routes carefully"
              color="bg-green-50 border-green-200"
            />

            <FactCard
              icon="⛵"
              title="Boats"
              value="Important for some islands"
              color="bg-cyan-50 border-cyan-200"
            />
          </div>
        </section>

        {/* SAFETY */}
        <section className="mb-14 rounded-3xl border border-red-200 bg-red-50 p-8 sm:p-10">
          <div className="text-4xl">⚠️</div>

          <h2 className="mt-4 text-3xl font-bold text-red-950">
            Health & Safety
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-red-900">
            Travelers should check current government travel advice before
            travelling to Mozambique. Security conditions vary significantly
            between regions.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-red-900">
            Current UK government advice includes restrictions for parts of
            Cabo Delgado, Nampula and Niassa provinces because of security
            risks. These conditions can change, so travelers should verify
            their exact route before departure.
          </p>

          <p className="mt-5 text-sm leading-6 text-red-800">
            Source checked: UK Foreign, Commonwealth & Development Office
            travel advice, current September 2026.
          </p>
        </section>

        {/* RESPONSIBLE TOURISM */}
        <section className="mb-14 rounded-3xl bg-gradient-to-br from-green-700 to-emerald-800 p-8 text-white sm:p-10">
          <div className="text-5xl">🌱</div>

          <h2 className="mt-4 text-3xl font-bold">
            Responsible Tourism in Mozambique
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <ResponsibleCard
              title="Support Local Businesses"
              text="Choose local guides, restaurants, accommodation providers and community businesses where possible."
            />

            <ResponsibleCard
              title="Protect Marine Life"
              text="Follow marine conservation rules and avoid damaging coral reefs or disturbing wildlife."
            />

            <ResponsibleCard
              title="Respect Communities"
              text="Travel respectfully, learn local customs and ask permission before taking photographs."
            />
          </div>
        </section>

        {/* OFFICIAL INFORMATION */}
        <section className="mb-14 rounded-3xl border border-amber-300 bg-amber-50 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Official & Recognized Information
          </p>

          <h2 className="mt-2 text-3xl font-bold text-amber-950">
            Verify Time-Sensitive Information
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-amber-900">
            Entry requirements, visas, travel conditions, health requirements
            and regional safety information can change. Travelers should
            verify current requirements with the relevant Mozambican
            authorities and their own government travel advisory before
            departure.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <SourceCard
              title="Visit Mozambique"
              text="Tourism information covering destinations, attractions, culture, wildlife and travel experiences."
            />

            <SourceCard
              title="Mozambique Authorities"
              text="Use current government and immigration information for official entry and travel requirements."
            />

            <SourceCard
              title="Travel Safety Information"
              text="Check current government travel advice for the exact provinces and destinations included in your itinerary."
            />

            <SourceCard
              title="Last Reviewed"
              text="September 2026"
            />
          </div>
        </section>

        {/* USEFUL CONTACTS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Useful Information"
            title="Emergency & Travel Contacts"
            description="Keep important contact information available while travelling."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <ContactCard
              icon="🚨"
              title="Emergency"
              text="Emergency services: 112"
            />

            <ContactCard
              icon="🏥"
              title="Medical Assistance"
              text="For serious emergencies, contact local emergency services or the nearest medical facility."
            />

            <ContactCard
              icon="🛂"
              title="Immigration"
              text="Check current official immigration information before travelling."
            />
          </div>
        </section>

        {/* SOURCE NOTE */}
        <section className="mb-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Information Source Record
          </h2>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>
              <strong>Tourism reference:</strong> Visit Mozambique
            </p>
            <p>
              <strong>Safety reference:</strong> UK Foreign, Commonwealth &
              Development Office travel advice
            </p>
            <p>
              <strong>Last reviewed:</strong> September 2026
            </p>
            <p>
              <strong>Note:</strong> Time-sensitive requirements should always
              be verified before travel.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <section className="border-t pt-8">
          <div className="flex flex-wrap gap-5">
            <Link
              href="/guides"
              className="font-semibold text-green-700 hover:underline"
            >
              ← Back to Travel Guides
            </Link>

            <Link
              href="/guides/zimbabwe"
              className="font-semibold text-green-700 hover:underline"
            >
              ← Zimbabwe Guide
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

/* COMPONENTS */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-gray-600">
        {description}
      </p>
    </div>
  )
}

function FactCard({ icon, title, value, color }) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${color}`}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-gray-700">{value}</p>
    </div>
  )
}

function FeatureCard({ icon, title, text, color }) {
  return (
    <article
      className={`rounded-2xl bg-gradient-to-br ${color} p-7 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-white/90">{text}</p>
    </article>
  )
}

function GuideCard({ icon, title, text, color }) {
  return (
    <article
      className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${color}`}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-700">{text}</p>
    </article>
  )
}

function AnimalCard({ emoji, title }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur">
      <div className="text-5xl">{emoji}</div>
      <p className="mt-3 font-semibold">{title}</p>
    </div>
  )
}

function DestinationCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function ResponsibleCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
      <h3 className="font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-green-50">{text}</p>
    </div>
  )
}

function SourceCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-amber-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-amber-900">{text}</p>
    </div>
  )
}

function ContactCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}
