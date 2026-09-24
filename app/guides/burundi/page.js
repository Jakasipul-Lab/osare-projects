import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Burundi Travel Guide — Wildlife, Lake Tanganyika, Culture & Travel Information | OSARE',
  description:
    'Practical Burundi travel information covering entry requirements, wildlife, national parks, Lake Tanganyika, destinations, transport, accommodation, costs, safety and travel planning.',
  path: '/guides/burundi',
})

export default function BurundiGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <header className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            East Africa Travel Guide
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Burundi Travel Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Discover Burundi's green hills, tropical forests, wildlife,
            Lake Tanganyika, cultural traditions and scenic landscapes.
            This guide brings together practical information to help
            travelers plan a journey through the heart of Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-4xl">
            <span>🦛</span>
            <span>🐒</span>
            <span>🐘</span>
            <span>🦅</span>
            <span>🌳</span>
            <span>🏞️</span>
            <span>🌊</span>
          </div>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm leading-6 text-green-50">
              <strong className="text-white">Information status:</strong>{' '}
              This guide uses information from Burundi's official tourism
              authorities and other recognized travel-information sources.
              Entry rules, health information, security conditions and other
              time-sensitive requirements should always be checked before
              travelling.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* QUICK FACTS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Quick Facts"
            title="Burundi at a Glance"
            description="Essential information for travelers discovering Burundi."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              emoji="🏙️"
              title="Capital"
              value="Gitega"
              color="green"
            />
            <FactCard
              emoji="🌍"
              title="Region"
              value="Great Lakes / East-Central Africa"
              color="blue"
            />
            <FactCard
              emoji="💰"
              title="Currency"
              value="Burundian Franc (BIF)"
              color="amber"
            />
            <FactCard
              emoji="🗣️"
              title="Languages"
              value="Kirundi, French and English"
              color="purple"
            />
          </div>
        </section>

        {/* WHY VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Discover Burundi"
            title="Why Visit Burundi?"
            description="Burundi combines lakeside scenery, forests, wildlife, cultural experiences and spectacular landscapes."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="🌊"
              title="Lake Tanganyika"
              text="Enjoy the lakeside environment, beaches, boating and water-based activities along one of Africa's great lakes."
              color="blue"
            />

            <FeatureCard
              emoji="🌳"
              title="Forests & Wildlife"
              text="Explore protected landscapes including Kibira, Ruvubu and Rusizi, with forests, wetlands, birds and wildlife."
              color="green"
            />

            <FeatureCard
              emoji="🥁"
              title="Culture & Tradition"
              text="Experience Burundi's traditional drumming, crafts, history and cultural heritage."
              color="amber"
            />
          </div>
        </section>

        {/* TRAVEL PLANNING */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Plan Your Journey"
            title="Burundi Travel Information"
            description="Important topics to consider before and during your trip."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              emoji="🛂"
              title="Entry & Visa"
              description="Check passport, visa and entry requirements before travelling."
              color="blue"
            />

            <GuideCard
              emoji="📅"
              title="When to Visit"
              description="Understand Burundi's dry and rainy seasons when planning your journey."
              color="green"
            />

            <GuideCard
              emoji="☀️"
              title="Weather & Climate"
              description="Climate varies with altitude, from the Lake Tanganyika lowlands to the higher plateaus."
              color="amber"
            />

            <GuideCard
              emoji="🦛"
              title="National Parks & Wildlife"
              description="Explore Burundi's protected areas, forests, wetlands and wildlife."
              color="red"
            />

            <GuideCard
              emoji="📍"
              title="Major Destinations"
              description="Discover Bujumbura, Gitega, Lake Tanganyika and other destinations."
              color="purple"
            />

            <GuideCard
              emoji="🚙"
              title="Safari & Wildlife"
              description="Learn about wildlife experiences and guided excursions in protected areas."
              color="green"
            />

            <GuideCard
              emoji="🏨"
              title="Accommodation"
              description="Hotels, guesthouses, furnished accommodation and lakeside properties."
              color="blue"
            />

            <GuideCard
              emoji="🚌"
              title="Transport & Getting Around"
              description="Understand roads, local transport and intercity travel options."
              color="amber"
            />

            <GuideCard
              emoji="🚐"
              title="Local & Intercity Transport"
              description="Explore practical ways to move between towns and destinations."
              color="red"
            />

            <GuideCard
              emoji="💵"
              title="Money & Costs"
              description="Currency, payments and practical budgeting information."
              color="purple"
            />

            <GuideCard
              emoji="🩺"
              title="Health & Safety"
              description="Review current health, security and emergency information before travelling."
              color="red"
            />

            <GuideCard
              emoji="🤝"
              title="Culture & Etiquette"
              description="Learn about respectful interaction, local traditions and cultural experiences."
              color="green"
            />

            <GuideCard
              emoji="👨‍👩‍👧"
              title="Travel With Children"
              description="Consider transport, accommodation, activities and family travel planning."
              color="blue"
            />

            <GuideCard
              emoji="📱"
              title="Connectivity & Internet"
              description="Plan communication, mobile connectivity and internet access."
              color="purple"
            />

            <GuideCard
              emoji="🌱"
              title="Responsible Tourism"
              description="Travel respectfully and help protect Burundi's natural and cultural heritage."
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
            Explore Burundi's Natural World
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            Burundi's protected landscapes include rainforest, savannah,
            wetlands and lakeside environments supporting a variety of
            wildlife and bird species.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnimalCard emoji="🦛" name="Hippopotamus" />
            <AnimalCard emoji="🐒" name="Primates" />
            <AnimalCard emoji="🐃" name="Buffalo" />
            <AnimalCard emoji="🦅" name="Birdlife" />
            <AnimalCard emoji="🐘" name="Elephants" />
            <AnimalCard emoji="🦌" name="Antelopes" />
            <AnimalCard emoji="🐊" name="Crocodiles" />
            <AnimalCard emoji="🦎" name="Reptiles" />
          </div>
        </section>

        {/* NATIONAL PARKS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Nature & Wildlife"
            title="National Parks & Protected Areas"
            description="Burundi's official tourism information highlights several important protected areas."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DestinationCard
              emoji="🌳"
              title="Kibira National Park"
              description="A large montane rainforest along the Congo-Nile range, known for primates, birds, forest scenery and hiking experiences."
              color="green"
            />

            <DestinationCard
              emoji="🦛"
              title="Ruvubu National Park"
              description="Burundi's largest protected ecosystem, with savannah landscapes and wildlife including buffalo, antelopes, monkeys and hippos."
              color="amber"
            />

            <DestinationCard
              emoji="🌿"
              title="Rusizi National Park"
              description="A wetland and delta environment near Bujumbura known for hippos, birds and distinctive vegetation."
              color="blue"
            />

            <DestinationCard
              emoji="🌴"
              title="Kigwena Forest Reserve"
              description="A forest reserve near Lake Tanganyika with scenic landscapes and the Mugara hot springs."
              color="purple"
            />
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Places to Explore"
            title="Major Burundi Destinations"
            description="Cities, lakes, cultural sites and natural attractions to include in your travel planning."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <PlaceCard
              emoji="🌊"
              title="Bujumbura"
              text="Lakeside city and gateway to Lake Tanganyika, beaches, cultural sites and nearby nature."
            />

            <PlaceCard
              emoji="🏛️"
              title="Gitega"
              text="Burundi's political capital and an important center for culture, history and heritage."
            />

            <PlaceCard
              emoji="🌊"
              title="Lake Tanganyika"
              text="A major Great Lakes destination offering beaches, boating, swimming and lakeside experiences."
            />

            <PlaceCard
              emoji="🥁"
              title="Gishora"
              text="Known for Burundi's traditional drumming heritage and cultural experiences."
            />

            <PlaceCard
              emoji="🌿"
              title="Teza"
              text="A scenic tea-growing area close to Kibira's forest landscapes."
            />

            <PlaceCard
              emoji="💦"
              title="Karera Waterfalls"
              text="A spectacular waterfall area in southeastern Burundi surrounded by forest and natural scenery."
            />

            <PlaceCard
              emoji="⛰️"
              title="Nyakazu"
              text="A dramatic landscape associated with the Nyakazu or German Fault and surrounding natural attractions."
            />

            <PlaceCard
              emoji="🏞️"
              title="Source of the Nile"
              text="A historic attraction associated with the southernmost source of the Nile at Gasumo."
            />

            <PlaceCard
              emoji="🏺"
              title="Cultural & Historical Sites"
              text="Explore museums, monuments and places connected with Burundi's history and traditions."
            />
          </div>
        </section>

        {/* LAKE TANGANYIKA */}
        <section className="mb-16 rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-100">
                Lake Experience
              </p>

              <h2 className="mt-2 text-3xl font-extrabold">
                Lake Tanganyika
              </h2>

              <p className="mt-4 leading-7 text-cyan-50">
                Burundi's Lake Tanganyika shoreline provides opportunities
                for swimming, boating, sailing and relaxing on the lakeside.
                The official Burundi tourism authority highlights the lake
                as one of the country's important leisure attractions.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-6 text-center backdrop-blur">
              <div className="text-5xl">🌊</div>
              <p className="mt-3 font-bold">Lake Tanganyika</p>
              <p className="text-sm text-cyan-100">
                Lakeside travel & recreation
              </p>
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Culture"
            title="Burundi's Cultural Heritage"
            description="Culture is an important part of the country's tourism experience."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="🥁"
              title="Traditional Drumming"
              text="Burundi's drumming traditions are an important cultural attraction, including the renowned drummers of Gishora."
              color="amber"
            />

            <FeatureCard
              emoji="🎨"
              title="Arts & Crafts"
              text="Discover traditional crafts, pottery, basketry and other forms of local cultural expression."
              color="purple"
            />

            <FeatureCard
              emoji="🏛️"
              title="History & Heritage"
              text="Museums, monuments and historical sites provide opportunities to learn about Burundi's past."
              color="blue"
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
                Check Current Safety Advice Before Travelling
              </h2>

              <p className="mt-4 leading-7 text-amber-900">
                Security conditions can vary by area. Current foreign-travel
                advice includes restrictions concerning some parts of
                Burundi, including areas around the Kibira region and parts
                of the border area with the Democratic Republic of the Congo.
                Travelers should check current government travel advice,
                local authorities and their insurance conditions before
                visiting specific destinations.
              </p>

              <p className="mt-4 text-sm font-semibold text-amber-800">
                OSARE does not replace official government travel advice.
              </p>
            </div>
          </div>
        </section>

        {/* OFFICIAL INFORMATION */}
        <section className="mb-16 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Official Information
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-amber-950">
            Accredited & Official Tourism Information
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-amber-900">
            Burundi's official tourism authority provides information about
            national parks, attractions, accommodation, geography and
            tourism activities. Time-sensitive travel requirements should
            always be checked against the latest official information.
          </p>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-bold text-gray-900">
              National Tourism Office of Burundi
            </p>

            <p className="mt-2 text-gray-600">
              Rohero 1, Avenue des Euphorbes numéro 2
              <br />
              Bujumbura, Burundi
            </p>

            <p className="mt-3 text-gray-600">
              Phone: +257 22 22 20 23
            </p>

            <p className="text-gray-600">
              Email: info@tourisme.gov.bi
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Official tourism source: tourisme.gov.bi
            </p>
          </div>
        </section>

        {/* SOURCE RECORD */}
        <section className="mb-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Burundi Guide Source Record
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>
              <strong>Primary tourism source:</strong> National Tourism Office
              of Burundi
            </p>

            <p>
              <strong>Official tourism website:</strong> tourisme.gov.bi
            </p>

            <p>
              <strong>Safety information:</strong> Travelers should consult
              current government travel advice before departure.
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
