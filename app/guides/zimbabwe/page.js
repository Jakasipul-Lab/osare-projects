import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Zimbabwe Travel Guide — Victoria Falls, Safari, Wildlife & Travel Information | OSARE',
  description:
    'Practical Zimbabwe travel information covering Victoria Falls, national parks, wildlife, entry requirements, destinations, transport, accommodation, costs, safety and travel planning.',
  path: '/guides/zimbabwe',
})

export default function ZimbabweGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <header className="bg-gradient-to-br from-green-950 via-green-800 to-emerald-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Southern Africa Travel Guide
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Zimbabwe Travel Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Explore Zimbabwe's spectacular waterfalls, national parks,
            wildlife, ancient landscapes, rivers, lakes and rich cultural
            heritage. This guide brings together practical information for
            travelers planning a journey through Zimbabwe.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-4xl">
            <span>🐘</span>
            <span>🦁</span>
            <span>🦒</span>
            <span>🦓</span>
            <span>🦛</span>
            <span>🐊</span>
            <span>💦</span>
          </div>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm leading-6 text-green-50">
              <strong className="text-white">Information status:</strong>{' '}
              This guide provides practical travel information using
              recognized tourism and travel-information sources. Entry
              requirements, health information, security conditions, park
              rules and other time-sensitive requirements should always be
              verified before travelling.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* QUICK FACTS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Quick Facts"
            title="Zimbabwe at a Glance"
            description="Essential information for travelers planning a trip to Zimbabwe."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              emoji="🏙️"
              title="Capital"
              value="Harare"
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
              value="Zimbabwean currency and other accepted currencies"
              color="amber"
            />

            <FactCard
              emoji="🗣️"
              title="Languages"
              value="English, Shona, Ndebele and other local languages"
              color="purple"
            />
          </div>
        </section>

        {/* WHY VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Discover Zimbabwe"
            title="Why Visit Zimbabwe?"
            description="Zimbabwe combines major waterfalls, exceptional wildlife areas, dramatic landscapes and important cultural heritage."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="💦"
              title="Victoria Falls"
              text="Experience one of Africa's most famous natural attractions on the Zambezi River."
              color="blue"
            />

            <FeatureCard
              emoji="🐘"
              title="Wildlife & Safari"
              text="Explore national parks and conservation areas with elephants, lions, buffalo, hippos, crocodiles and many other species."
              color="green"
            />

            <FeatureCard
              emoji="🏛️"
              title="History & Heritage"
              text="Discover Great Zimbabwe, ancient stone architecture, cultural traditions and historic landscapes."
              color="amber"
            />
          </div>
        </section>

        {/* TRAVEL PLANNING */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Plan Your Journey"
            title="Zimbabwe Travel Information"
            description="Important topics to consider before and during your trip."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              emoji="🛂"
              title="Entry & Visa"
              description="Check passport, visa and entry requirements before travelling to Zimbabwe."
              color="blue"
            />

            <GuideCard
              emoji="📅"
              title="When to Visit"
              description="Understand Zimbabwe's seasons and how they affect wildlife, waterfalls and travel conditions."
              color="green"
            />

            <GuideCard
              emoji="☀️"
              title="Weather & Climate"
              description="Learn about seasonal rainfall, temperatures and regional climate differences."
              color="amber"
            />

            <GuideCard
              emoji="🐘"
              title="National Parks & Wildlife"
              description="Explore Zimbabwe's major parks, reserves and wildlife areas."
              color="green"
            />

            <GuideCard
              emoji="📍"
              title="Major Destinations"
              description="Discover Victoria Falls, Harare, Bulawayo, Hwange, Great Zimbabwe and more."
              color="purple"
            />

            <GuideCard
              emoji="🦁"
              title="Safari & Wildlife"
              description="Plan wildlife experiences in some of Zimbabwe's major conservation areas."
              color="red"
            />

            <GuideCard
              emoji="🏨"
              title="Accommodation"
              description="Explore hotels, lodges, camps, guesthouses and safari accommodation."
              color="blue"
            />

            <GuideCard
              emoji="🚗"
              title="Transport & Getting Around"
              description="Understand driving, transfers, domestic flights and other travel options."
              color="amber"
            />

            <GuideCard
              emoji="🚌"
              title="Local & Intercity Transport"
              description="Information about buses, taxis, transfers and movement between destinations."
              color="red"
            />

            <GuideCard
              emoji="💵"
              title="Money & Costs"
              description="Plan your budget, payments, accommodation and safari expenses."
              color="purple"
            />

            <GuideCard
              emoji="🩺"
              title="Health & Safety"
              description="Review current health, safety and emergency information before travelling."
              color="red"
            />

            <GuideCard
              emoji="🤝"
              title="Culture & Etiquette"
              description="Learn about Zimbabwean culture, customs, traditions and respectful travel."
              color="green"
            />

            <GuideCard
              emoji="👨‍👩‍👧"
              title="Travel With Children"
              description="Consider family-friendly accommodation, activities and transport."
              color="blue"
            />

            <GuideCard
              emoji="📱"
              title="Connectivity & Internet"
              description="Plan mobile communication, internet access and connectivity while travelling."
              color="purple"
            />

            <GuideCard
              emoji="🌱"
              title="Responsible Tourism"
              description="Travel responsibly and help protect Zimbabwe's wildlife, communities and heritage."
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
            Zimbabwe's Wildlife
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            Zimbabwe has extensive wildlife areas and diverse ecosystems,
            from the Zambezi River and Victoria Falls region to Hwange,
            Mana Pools and the southern Matobo landscapes.
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

        {/* NATIONAL PARKS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Nature & Wildlife"
            title="National Parks & Wildlife Areas"
            description="Zimbabwe offers several major wildlife and conservation destinations."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DestinationCard
              emoji="🐘"
              title="Hwange National Park"
              description="Zimbabwe's largest national park and an important wildlife destination, particularly known for large elephant populations."
              color="green"
            />

            <DestinationCard
              emoji="🌊"
              title="Mana Pools National Park"
              description="A spectacular Zambezi Valley wilderness known for wildlife, river landscapes and exceptional safari experiences."
              color="blue"
            />

            <DestinationCard
              emoji="🦏"
              title="Matobo National Park"
              description="A dramatic landscape of granite formations, wildlife and important cultural and archaeological heritage."
              color="purple"
            />

            <DestinationCard
              emoji="🌿"
              title="Gonarezhou National Park"
              description="A vast wilderness area in southeastern Zimbabwe known for elephants, baobabs and remote landscapes."
              color="amber"
            />
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Places to Explore"
            title="Major Zimbabwe Destinations"
            description="Cities, waterfalls, wildlife areas and cultural attractions to consider when planning your journey."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <PlaceCard
              emoji="💦"
              title="Victoria Falls"
              text="The country's most famous tourism destination and gateway to the Zambezi River and Victoria Falls."
            />

            <PlaceCard
              emoji="🏙️"
              title="Harare"
              text="Zimbabwe's capital and an important starting point for cultural, business and national travel."
            />

            <PlaceCard
              emoji="🏛️"
              title="Great Zimbabwe"
              text="A remarkable archaeological and cultural site associated with the historic Great Zimbabwe civilization."
            />

            <PlaceCard
              emoji="🐘"
              title="Hwange"
              text="Gateway to Hwange National Park and one of Zimbabwe's major safari regions."
            />

            <PlaceCard
              emoji="🪨"
              title="Matobo"
              text="Known for dramatic granite landscapes, wildlife, caves and important heritage sites."
            />

            <PlaceCard
              emoji="🌊"
              title="Lake Kariba"
              text="A huge reservoir on the Zambezi with fishing, boating, wildlife and lakeside experiences."
            />

            <PlaceCard
              emoji="🌿"
              title="Mana Pools"
              text="A remote Zambezi wilderness destination renowned for wildlife and river scenery."
            />

            <PlaceCard
              emoji="🏙️"
              title="Bulawayo"
              text="Zimbabwe's second-largest city and an important cultural and historical center."
            />

            <PlaceCard
              emoji="🌳"
              title="Gonarezhou"
              text="A large wilderness area offering remote safari experiences and spectacular southeastern landscapes."
            />
          </div>
        </section>

        {/* VICTORIA FALLS */}
        <section className="mb-16 rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-100">
                Zimbabwe Icon
              </p>

              <h2 className="mt-2 text-3xl font-extrabold">
                Victoria Falls
              </h2>

              <p className="mt-4 leading-7 text-cyan-50">
                Victoria Falls is one of Zimbabwe's most internationally
                recognized attractions. The falls lie on the Zambezi River
                and form part of the shared natural landscape between
                Zimbabwe and Zambia.
              </p>

              <p className="mt-4 leading-7 text-cyan-50">
                Visitors can combine the falls with wildlife, river
                activities, adventure experiences and nearby safari
                destinations.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-6 text-center backdrop-blur">
              <div className="text-6xl">💦</div>

              <p className="mt-3 font-bold">
                Victoria Falls
              </p>

              <p className="text-sm text-cyan-100">
                Zambezi River
              </p>
            </div>
          </div>
        </section>

        {/* GREAT ZIMBABWE */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Heritage"
            title="Great Zimbabwe"
            description="One of Zimbabwe's most important archaeological and cultural heritage sites."
          />

          <div className="mt-8 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-amber-950">
                  Ancient Stone Architecture
                </h3>

                <p className="mt-4 leading-7 text-amber-900">
                  Great Zimbabwe is an important archaeological site
                  featuring monumental dry-stone architecture. It provides
                  visitors with an opportunity to learn about the history
                  and heritage of the civilizations that developed in the
                  region.
                </p>

                <p className="mt-4 leading-7 text-amber-900">
                  The site is located near Masvingo in southeastern
                  Zimbabwe.
                </p>
              </div>

              <div className="text-center text-7xl">
                🏛️
              </div>
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Culture"
            title="Zimbabwe's Cultural Heritage"
            description="Zimbabwe offers cultural experiences alongside its wildlife and natural attractions."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="🎨"
              title="Arts & Crafts"
              text="Discover stone sculpture, basketry, textiles, traditional arts and contemporary Zimbabwean creativity."
              color="amber"
            />

            <FeatureCard
              emoji="🥁"
              title="Music & Dance"
              text="Traditional music, dance and cultural performances are important parts of Zimbabwe's heritage."
              color="purple"
            />

            <FeatureCard
              emoji="🏛️"
              title="History & Heritage"
              text="Explore archaeological sites, museums, historic cities and cultural landscapes."
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
                Check Current Safety & Entry Advice
              </h2>

              <p className="mt-4 leading-7 text-amber-900">
                Travelers should check current government travel advice,
                entry requirements, health recommendations and local
                conditions before departure. Requirements can change and
                may differ depending on nationality, destination and
                planned activities.
              </p>

              <p className="mt-4 text-sm font-semibold text-amber-800">
                OSARE provides travel information but does not replace
                official government travel advice.
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
            Official Tourism Information
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-green-900">
            Zimbabwe's national tourism authority provides information
            about destinations, attractions, accommodation, activities
            and tourism services. Travelers should verify time-sensitive
            requirements with the appropriate official authority.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <SourceCard
              title="Zimbabwe Tourism Authority"
              text="National tourism organization responsible for promoting and supporting tourism in Zimbabwe."
            />

            <SourceCard
              title="Zimbabwe Parks and Wildlife Management Authority"
              text="Official authority responsible for Zimbabwe's national parks and wildlife management."
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
              title="Tourism Authority"
              text="Zimbabwe Tourism Authority"
            />

            <ContactCard
              emoji="🦁"
              title="Parks Authority"
              text="Zimbabwe Parks and Wildlife Management Authority"
            />

            <ContactCard
              emoji="🛂"
              title="Immigration"
              text="Zimbabwe immigration authorities for current entry requirements"
            />
          </div>
        </section>

        {/* SOURCE RECORD */}
        <section className="mb-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Zimbabwe Guide Source Record
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>
              <strong>Tourism information:</strong> Zimbabwe Tourism Authority
            </p>

            <p>
              <strong>Wildlife information:</strong> Zimbabwe Parks and
              Wildlife Management Authority
            </p>

            <p>
              <strong>Travel requirements:</strong> Verify current
              requirements with the relevant official authority before travel.
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
