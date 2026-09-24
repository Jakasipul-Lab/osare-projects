import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Botswana Travel Guide — Okavango Delta, Safari, Wildlife & Travel Information | OSARE',
  description:
    'Practical Botswana travel information covering the Okavango Delta, Chobe, wildlife, national parks, entry requirements, destinations, transport, accommodation, costs, safety and travel planning.',
  path: '/guides/botswana',
})

export default function BotswanaGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <header className="bg-gradient-to-br from-green-950 via-green-800 to-emerald-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Southern Africa Travel Guide
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Botswana Travel Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Discover Botswana's extraordinary wilderness, the Okavango Delta,
            Chobe River, Kalahari landscapes, wildlife, cultural heritage and
            unforgettable safari experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-4xl">
            <span>🐘</span>
            <span>🦁</span>
            <span>🦒</span>
            <span>🦓</span>
            <span>🦛</span>
            <span>🐊</span>
            <span>🛶</span>
            <span>🏜️</span>
          </div>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm leading-6 text-green-50">
              <strong className="text-white">Information status:</strong>{' '}
              This guide uses information from Botswana's official tourism
              and government sources together with recognized travel
              information. Visa requirements, health information, park rules
              and other time-sensitive requirements should always be verified
              before travelling.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* QUICK FACTS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Quick Facts"
            title="Botswana at a Glance"
            description="Essential information for travelers planning a journey through Botswana."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              emoji="🏙️"
              title="Capital"
              value="Gaborone"
              color="green"
            />

            <FactCard
              emoji="🌍"
              title="Region"
              value="Southern Africa"
              color="blue"
            />

            <FactCard
              emoji="💰"
              title="Currency"
              value="Botswana Pula (BWP)"
              color="amber"
            />

            <FactCard
              emoji="🗣️"
              title="Languages"
              value="Setswana and English"
              color="purple"
            />
          </div>
        </section>

        {/* WHY VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Discover Botswana"
            title="Why Visit Botswana?"
            description="Botswana is known for vast wilderness areas, remarkable wildlife, waterways and distinctive desert landscapes."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="🛶"
              title="Okavango Delta"
              text="Explore one of the world's great inland delta systems by mokoro, boat, walking safari and game drive."
              color="blue"
            />

            <FeatureCard
              emoji="🐘"
              title="Wildlife & Safari"
              text="Experience elephants, lions, buffalo, giraffes, hippos, predators and exceptional birdlife."
              color="green"
            />

            <FeatureCard
              emoji="🏜️"
              title="Kalahari Landscapes"
              text="Discover vast open spaces, salt pans, grasslands, wildlife and unique desert environments."
              color="amber"
            />
          </div>
        </section>

        {/* TRAVEL PLANNING */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Plan Your Journey"
            title="Botswana Travel Information"
            description="Important topics to consider before and during your trip."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              emoji="🛂"
              title="Entry & Visa"
              description="Check current visa requirements and entry formalities for your nationality."
              color="blue"
            />

            <GuideCard
              emoji="📅"
              title="When to Visit"
              description="Botswana can be visited throughout the year, with different experiences during wet and dry seasons."
              color="green"
            />

            <GuideCard
              emoji="☀️"
              title="Weather & Climate"
              description="Understand seasonal temperatures, rainfall, flooding and wildlife conditions."
              color="amber"
            />

            <GuideCard
              emoji="🐘"
              title="National Parks & Wildlife"
              description="Explore Botswana's national parks, reserves and wildlife management areas."
              color="green"
            />

            <GuideCard
              emoji="📍"
              title="Major Destinations"
              description="Discover the Okavango Delta, Chobe, Maun, Kasane, Gaborone and other destinations."
              color="purple"
            />

            <GuideCard
              emoji="🦁"
              title="Safari & Wildlife"
              description="Plan game drives, walking safaris, boat excursions, mokoro trips and other wildlife experiences."
              color="red"
            />

            <GuideCard
              emoji="🏨"
              title="Accommodation"
              description="Choose between hotels, lodges, safari camps, guesthouses and camping options."
              color="blue"
            />

            <GuideCard
              emoji="🚙"
              title="Transport & Getting Around"
              description="Understand domestic flights, road travel, transfers, car hire and safari transport."
              color="amber"
            />

            <GuideCard
              emoji="🚌"
              title="Local & Intercity Transport"
              description="Learn about public transport, taxis, buses and travel between towns."
              color="red"
            />

            <GuideCard
              emoji="💵"
              title="Money & Costs"
              description="Understand Botswana's currency, payments, accommodation and safari budgeting."
              color="purple"
            />

            <GuideCard
              emoji="🩺"
              title="Health & Safety"
              description="Check current health recommendations, safety information and emergency arrangements."
              color="red"
            />

            <GuideCard
              emoji="🤝"
              title="Culture & Etiquette"
              description="Learn about Botswana's communities, traditions, customs and respectful travel."
              color="green"
            />

            <GuideCard
              emoji="👨‍👩‍👧"
              title="Travel With Children"
              description="Consider family accommodation, activities, transfers and safari restrictions."
              color="blue"
            />

            <GuideCard
              emoji="📱"
              title="Connectivity & Internet"
              description="Plan mobile communication, internet access and connectivity during your trip."
              color="purple"
            />

            <GuideCard
              emoji="🌱"
              title="Responsible Tourism"
              description="Support conservation, local communities and responsible wildlife tourism."
              color="green"
            />
          </div>
        </section>

        {/* WILDLIFE */}
        <section className="mb-16 rounded-3xl bg-gradient-to-br from-green-950 to-emerald-800 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Wildlife & Nature
          </p>

          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Botswana's Wildlife
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            Botswana protects extensive wilderness areas containing a wide
            variety of mammals, birds, reptiles and aquatic wildlife.
            The Okavango, Chobe and Kalahari ecosystems each provide
            distinctive wildlife experiences.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnimalCard emoji="🐘" name="Elephants" />
            <AnimalCard emoji="🦁" name="Lions" />
            <AnimalCard emoji="🐃" name="Buffalo" />
            <AnimalCard emoji="🦒" name="Giraffes" />
            <AnimalCard emoji="🦓" name="Zebras" />
            <AnimalCard emoji="🦛" name="Hippos" />
            <AnimalCard emoji="🐊" name="Crocodiles" />
            <AnimalCard emoji="🐆" name="Leopards" />
          </div>
        </section>

        {/* OKAVANGO */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Botswana Icon"
            title="Okavango Delta"
            description="A vast inland delta of waterways, islands, wetlands and drylands in northern Botswana."
          />

          <div className="mt-8 rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-3xl font-extrabold">
                  The Okavango Wilderness
                </h3>

                <p className="mt-4 leading-7 text-cyan-50">
                  The Okavango Delta is a UNESCO World Heritage Site and a
                  major wilderness destination. Its waterways, lagoons,
                  floodplains, islands and surrounding drylands support
                  exceptional wildlife and birdlife.
                </p>

                <p className="mt-4 leading-7 text-cyan-50">
                  Activities can include mokoro excursions, boating, game
                  drives, walking experiences and birdwatching, depending
                  on location and season.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                    🛶 Mokoro
                  </span>

                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                    🐘 Game Viewing
                  </span>

                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                    🦅 Birdwatching
                  </span>

                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                    🚤 Boat Trips
                  </span>
                </div>
              </div>

              <div className="text-center text-7xl">
                🛶
              </div>
            </div>
          </div>
        </section>

        {/* NATIONAL PARKS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Nature & Wildlife"
            title="National Parks & Reserves"
            description="Botswana's tourism landscape includes national parks, game reserves and wildlife management areas."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DestinationCard
              emoji="🐘"
              title="Chobe National Park"
              description="A major northern wildlife destination famous for elephants, buffalo, river landscapes, birdlife and boat safaris."
              color="green"
            />

            <DestinationCard
              emoji="🌊"
              title="Moremi Game Reserve"
              description="A major wildlife area within the Okavango region, combining waterways, floodplains, woodland and dryland habitats."
              color="blue"
            />

            <DestinationCard
              emoji="🏜️"
              title="Central Kalahari Game Reserve"
              description="A vast Kalahari wilderness with open landscapes, wildlife and a strong sense of remoteness."
              color="amber"
            />

            <DestinationCard
              emoji="🦓"
              title="Makgadikgadi & Nxai Pans"
              description="Large salt-pan landscapes that can transform during rainy periods and attract wildlife and migratory birds."
              color="purple"
            />

            <DestinationCard
              emoji="🌿"
              title="Northern Tuli Game Reserve"
              description="A wildlife and wilderness area in eastern Botswana known for dramatic landscapes and safari experiences."
              color="green"
            />

            <DestinationCard
              emoji="🏞️"
              title="Kgalagadi Transfrontier Park"
              description="A transfrontier conservation area extending across Botswana and South Africa."
              color="red"
            />
          </div>
        </section>

        {/* CHOBE */}
        <section className="mb-16 rounded-3xl bg-gradient-to-br from-amber-900 via-amber-800 to-orange-700 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-200">
            Northern Botswana
          </p>

          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Chobe National Park
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-amber-50">
            Chobe is one of Botswana's major wildlife destinations. The
            Chobe River provides an important water source for wildlife,
            while the surrounding park contains floodplains, woodland,
            pans and other habitats.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MiniCard emoji="🐘" text="Elephant Viewing" />
            <MiniCard emoji="🚤" text="River Cruises" />
            <MiniCard emoji="🦁" text="Predators" />
            <MiniCard emoji="🦅" text="Bird Safaris" />
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Places to Explore"
            title="Major Botswana Destinations"
            description="Wildlife areas, towns, cultural sites and landscapes to consider when planning your trip."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <PlaceCard
              emoji="🛶"
              title="Okavango Delta"
              text="Botswana's famous inland delta and one of the country's most important wilderness destinations."
            />

            <PlaceCard
              emoji="🐘"
              title="Chobe"
              text="A major wildlife region centred around Chobe National Park and the Chobe River."
            />

            <PlaceCard
              emoji="🏙️"
              title="Gaborone"
              text="Botswana's capital and an important starting point for exploring the country."
            />

            <PlaceCard
              emoji="🦁"
              title="Maun"
              text="A major gateway for travelers heading into the Okavango Delta and surrounding safari areas."
            />

            <PlaceCard
              emoji="🌊"
              title="Kasane"
              text="A northern gateway to Chobe and a useful base for regional travel around the Zambezi area."
            />

            <PlaceCard
              emoji="🏜️"
              title="Makgadikgadi"
              text="Vast salt-pan landscapes surrounded by grasslands, wildlife areas and distinctive desert scenery."
            />

            <PlaceCard
              emoji="🌿"
              title="Central Kalahari"
              text="A huge wilderness area offering remote landscapes and wildlife experiences."
            />

            <PlaceCard
              emoji="🪨"
              title="Tsodilo Hills"
              text="An important cultural and heritage landscape in northwestern Botswana."
            />

            <PlaceCard
              emoji="🏺"
              title="Old Palapye"
              text="A significant historical and archaeological site connected with Botswana's past."
            />
          </div>
        </section>

        {/* MAKGADIKGADI */}
        <section className="mb-16 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Kalahari Landscape
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-amber-950">
            Makgadikgadi & Nxai Pans
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-amber-900">
            The Makgadikgadi landscape is one of Botswana's most distinctive
            environments. Large salt pans, grasslands, baobabs and seasonal
            water create changing landscapes throughout the year.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MiniLightCard
              emoji="🏜️"
              title="Salt Pans"
              text="Vast open landscapes shaped by ancient lake systems."
            />

            <MiniLightCard
              emoji="🦓"
              title="Seasonal Wildlife"
              text="Rainfall can transform the area and attract zebra, wildebeest and other wildlife."
            />

            <MiniLightCard
              emoji="🦩"
              title="Birdlife"
              text="Wet periods can attract large numbers of flamingos and other birds."
            />
          </div>
        </section>

        {/* CULTURE */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Culture"
            title="Botswana's Cultural Heritage"
            description="Botswana's tourism experience also includes communities, traditional knowledge, arts and heritage sites."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="🎨"
              title="Arts & Crafts"
              text="Discover indigenous crafts and contemporary artistic traditions in towns, villages and tourism areas."
              color="amber"
            />

            <FeatureCard
              emoji="🤝"
              title="Cultural Tourism"
              text="Community-based experiences provide opportunities to learn about local traditions and ways of life."
              color="green"
            />

            <FeatureCard
              emoji="🏺"
              title="Heritage Sites"
              text="Explore archaeological and cultural sites including Tsodilo Hills, Old Palapye and other heritage locations."
              color="purple"
            />
          </div>
        </section>

        {/* WHEN TO VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Seasonal Planning"
            title="When to Visit Botswana"
            description="Botswana offers different travel experiences during its wet and dry seasons."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <SeasonCard
              emoji="🌧️"
              title="Green / Wet Season"
              text="Rain transforms landscapes into greener environments. Young animals, vegetation and migratory birds can make this an interesting period for wildlife and photography."
              color="green"
            />

            <SeasonCard
              emoji="☀️"
              title="Dry Season"
              text="Water becomes concentrated around permanent rivers and other remaining water sources, which can influence wildlife viewing. The Okavango flood cycle is also an important seasonal factor."
              color="amber"
            />
          </div>
        </section>

        {/* SAFETY */}
        <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <div className="flex gap-4">
            <div className="text-4xl">⚠️</div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                Important Travel Information
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-amber-950">
                Check Current Entry, Health & Safety Advice
              </h2>

              <p className="mt-4 leading-7 text-amber-900">
                Travelers should verify current entry requirements, health
                recommendations, road conditions, wildlife safety rules and
                local travel information before departure.
              </p>

              <p className="mt-4 text-sm font-semibold text-amber-800">
                OSARE provides travel information but does not replace
                official government or professional travel advice.
              </p>
            </div>
          </div>
        </section>

        {/* OFFICIAL INFORMATION */}
        <section className="mb-16 rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Official Information
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-green-950">
            Official Tourism & Government Information
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-green-900">
            Botswana Tourism Organisation provides official tourism
            information covering destinations, parks, reserves,
            accommodation and travel information. Botswana's government
            provides official immigration and visa information.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <SourceCard
              title="Botswana Tourism Organisation"
              text="Official national tourism organisation providing information about destinations, parks, reserves, accommodation and tourism activities."
            />

            <SourceCard
              title="Government of Botswana"
              text="Official government information, including immigration and tourism visa services."
            />
          </div>
        </section>

        {/* USEFUL CONTACTS */}
        <section className="mb-12">
          <SectionHeading
            eyebrow="Useful Contacts"
            title="Travel Information Sources"
            description="Use official sources for current requirements and travel information."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ContactCard
              emoji="🏛️"
              title="Botswana Tourism Organisation"
              text="Official tourism information and destination resources."
            />

            <ContactCard
              emoji="🛂"
              title="Immigration"
              text="Government of Botswana immigration and visa services."
            />

            <ContactCard
              emoji="🦁"
              title="Wildlife Authorities"
              text="Official information concerning parks, wildlife and conservation."
            />
          </div>
        </section>

        {/* SOURCE RECORD */}
        <section className="mb-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Botswana Guide Source Record
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>
              <strong>Primary tourism source:</strong> Botswana Tourism
              Organisation
            </p>

            <p>
              <strong>Government source:</strong> Government of Botswana
            </p>

            <p>
              <strong>Visa information:</strong> Verify current requirements
              with Botswana immigration before travel.
            </p>

            <p>
              <strong>Last reviewed:</strong> September 2026
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <section className="border-t pt-8">
          <Link
            href="/guides"
            className="font-bold text-green-700 transition hover:text-green-900 hover:underline"
          >
            ← Back to Travel Guides
          </Link>
        </section>
      </div>
    </main>
  )
}

/* ---------- COMPONENTS ---------- */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-green-700">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-gray-600">
        {description}
      </p>
    </div>
  )
}

function FactCard({ emoji, title, value, color }) {
  const colors = {
    green: 'border-green-200 bg-green-50',
    blue: 'border-blue-200 bg-blue-50',
    amber: 'border-amber-200 bg-amber-50',
    purple: 'border-purple-200 bg-purple-50',
  }

  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${colors[color]}`}
    >
      <div className="text-3xl">{emoji}</div>

      <h3 className="mt-4 font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">{value}</p>
    </div>
  )
}

function FeatureCard({ emoji, title, text, color }) {
  const colors = {
    green: 'border-green-200 bg-green-50',
    blue: 'border-blue-200 bg-blue-50',
    amber: 'border-amber-200 bg-amber-50',
    purple: 'border-purple-200 bg-purple-50',
    red: 'border-red-200 bg-red-50',
  }

  return (
    <article
      className={`rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${colors[color]}`}
    >
      <div className="text-4xl">{emoji}</div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function GuideCard({ emoji, title, description, color }) {
  const colors = {
    green: 'border-green-200 hover:border-green-400',
    blue: 'border-blue-200 hover:border-blue-400',
    amber: 'border-amber-200 hover:border-amber-400',
    purple: 'border-purple-200 hover:border-purple-400',
    red: 'border-red-200 hover:border-red-400',
  }

  return (
    <article
      className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${colors[color]}`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{emoji}</div>

        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

function AnimalCard({ emoji, name }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur transition hover:bg-white/20">
      <div className="text-4xl">{emoji}</div>

      <p className="mt-3 font-semibold">{name}</p>
    </div>
  )
}

function DestinationCard({ emoji, title, description, color }) {
  const colors = {
    green: 'border-green-200 bg-green-50',
    blue: 'border-blue-200 bg-blue-50',
    amber: 'border-amber-200 bg-amber-50',
    purple: 'border-purple-200 bg-purple-50',
    red: 'border-red-200 bg-red-50',
  }

  return (
    <article
      className={`rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${colors[color]}`}
    >
      <div className="text-4xl">{emoji}</div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </article>
  )
}

function PlaceCard({ emoji, title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-3xl">{emoji}</div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </article>
  )
}

function MiniCard({ emoji, text }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
      <div className="text-3xl">{emoji}</div>
      <p className="mt-3 text-sm font-semibold">{text}</p>
    </div>
  )
}

function MiniLightCard({ emoji, title, text }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="text-3xl">{emoji}</div>

      <h3 className="mt-4 font-bold text-amber-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-amber-900">{text}</p>
    </div>
  )
}

function SeasonCard({ emoji, title, text, color }) {
  const colors = {
    green: 'border-green-200 bg-green-50',
    amber: 'border-amber-200 bg-amber-50',
  }

  return (
    <article className={`rounded-2xl border p-7 shadow-sm ${colors[color]}`}>
      <div className="text-4xl">{emoji}</div>

      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function SourceCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}

function ContactCard({ emoji, title, text }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-3xl">{emoji}</div>

      <h3 className="mt-4 font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}
