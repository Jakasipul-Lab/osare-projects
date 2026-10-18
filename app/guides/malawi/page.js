import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import GuideTripCta from '../GuideTripCta'

export const metadata = buildMetadata({
  title: "Malawi Travel Guide — Lake Malawi, Liwonde, Safari & Travel Information | OSARE",
  description: "Practical Malawi travel information covering Lake Malawi, Liwonde, Majete, Nyika, Mount Mulanje, seasons, entry requirements and trip planning.",
  path: '/guides/malawi',
})

export default function MalawiGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <header className="bg-gradient-to-br from-green-950 via-green-800 to-emerald-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Southern Africa Travel Guide
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Malawi Travel Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            {"Known as the Warm Heart of Africa: Lake Malawi beaches, river safaris in Liwonde, the Nyika Plateau and Mount Mulanje."}
          </p>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm leading-6 text-green-50">
              <strong className="text-white">Information status:</strong>{' '}
              Visa requirements, park fees, health advice and other
              time-sensitive details should always be checked with official
              sources before travelling.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* QUICK FACTS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Quick Facts"
            title="Malawi at a Glance"
            description="Essential information for travellers planning a journey through Malawi."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard emoji="🏙️" title="Capital" value="Lilongwe" />
            <FactCard emoji="🌍" title="Region" value="Southern Africa" />
            <FactCard emoji="💰" title="Currency" value="Malawian Kwacha (MWK)" />
            <FactCard emoji="🗣️" title="Languages" value="English and Chichewa" />
          </div>
        </section>

        {/* WHY VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Discover Malawi"
            title="Why Visit Malawi?"
            description="Highlights that bring travellers to Malawi."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="🏝️"
              title="Lake Malawi"
              text="A long freshwater lake with beaches, islands, snorkelling and kayaking."
              color="blue"
            />

            <FeatureCard
              emoji="🐘"
              title="Safari"
              text="Liwonde and Majete offer river safaris and game drives in restored wildlife areas."
              color="green"
            />

            <FeatureCard
              emoji="⛰️"
              title="Highlands"
              text="Hiking on Mount Mulanje, the Zomba Plateau and the Nyika Plateau."
              color="amber"
            />
          </div>
        </section>

        {/* NATIONAL PARKS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Nature & Wildlife"
            title="National Parks & Reserves"
            description="The main wildlife areas to consider when planning a Malawi safari."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DestinationCard
              id="lake-malawi-np"
              emoji="🐠"
              title="Lake Malawi National Park"
              description="UNESCO World Heritage Site at Cape Maclear, known for its many species of colourful cichlid fish."
              color="blue"
            />

            <DestinationCard
              id="liwonde"
              emoji="🐘"
              title="Liwonde National Park"
              description="Park on the Shire River, visited by boat and game drive for elephants, hippos and birdlife."
              color="green"
            />

            <DestinationCard
              id="majete"
              emoji="🦁"
              title="Majete Wildlife Reserve"
              description="Reserve in the south where wildlife has been reintroduced, including the Big Five."
              color="amber"
            />

            <DestinationCard
              id="nyika"
              emoji="🌿"
              title="Nyika National Park"
              description="High grassland plateau in the north with zebra, antelope and wildflowers."
              color="purple"
            />

            <DestinationCard
              id="nkhotakota"
              emoji="🌳"
              title="Nkhotakota Wildlife Reserve"
              description="Forested reserve near the lake shore with rivers and miombo woodland."
              color="green"
            />
          </div>

          <TripNudge country="Malawi" />
        </section>

        {/* DESTINATIONS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Places to Explore"
            title="Major Malawi Destinations"
            description="Towns, lakes and landscapes to include in your route."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <PlaceCard emoji="🏙️" title="Lilongwe" text="The capital and main international arrival point." />
            <PlaceCard emoji="🏢" title="Blantyre" text="Commercial city in the south and a base for Mulanje and Majete." />
            <PlaceCard emoji="⛰️" title="Mount Mulanje" text="The highest mountain in southern-central Africa, popular for multi-day hikes." />
            <PlaceCard emoji="🌲" title="Zomba Plateau" text="Cool forested plateau with walking trails and viewpoints." />
            <PlaceCard emoji="🏝️" title="Likoma Island" text="Island in Lake Malawi with beaches and a historic cathedral." />
            <PlaceCard emoji="🎨" title="Chongoni Rock Art" text="UNESCO-listed rock art sites in central Malawi." />
          </div>
        </section>

        {/* WHEN TO VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Seasonal Planning"
            title="When to Visit Malawi"
            description="Malawi has a wet season and a dry season, and each suits different trips."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <SeasonCard emoji="🌧️" title="Green / Wet Season" text="November to April. Hot and green, with heavy rain at times. Some roads and park tracks become difficult." color="green" />
            <SeasonCard emoji="☀️" title="Dry Season" text="May to October. Cooler from May to August and hotter from September. Usually the best time for wildlife viewing and hiking." color="amber" />
          </div>
        </section>

        {/* SAFETY */}
        <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Important Travel Information
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-amber-950">
            Check Current Entry, Health & Safety Advice
          </h2>

          <p className="mt-4 leading-7 text-amber-900">
            Verify current entry requirements, malaria and vaccination advice,
            road conditions and park rules before departure.
          </p>

          <p className="mt-4 text-sm font-semibold text-amber-800">
            OSARE provides travel information but does not replace official
            government or professional travel advice.
          </p>
        </section>

        <GuideTripCta
          country="Malawi"
          links={[
            { label: 'Malawi Department of Tourism', href: 'https://www.visitmalawi.mw' },
            { label: 'Malawi Department of Immigration', href: 'https://www.immigration.gov.mw' },
          ]}
        />

        {/* SOURCE RECORD */}
        <section className="mb-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Malawi Guide Source Record</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p><strong>Primary tourism source:</strong> Malawi Department of Tourism</p>
            <p><strong>Visa information:</strong> Verify current requirements with the Malawi Department of Immigration before travel.</p>
            <p><strong>Last reviewed:</strong> October 2026</p>
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

const COLORS = {
  green: 'border-green-200 bg-green-50',
  blue: 'border-blue-200 bg-blue-50',
  amber: 'border-amber-200 bg-amber-50',
  purple: 'border-purple-200 bg-purple-50',
  red: 'border-red-200 bg-red-50',
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-green-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-gray-600">{description}</p>
    </div>
  )
}

function FactCard({ emoji, title, value }) {
  return (
    <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-4 font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{value}</p>
    </div>
  )
}

function FeatureCard({ emoji, title, text, color }) {
  return (
    <article className={`rounded-2xl border p-7 shadow-sm ${COLORS[color]}`}>
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function DestinationCard({ id, emoji, title, description, color }) {
  return (
    <article id={id} className={`scroll-mt-24 rounded-2xl border p-7 shadow-sm ${COLORS[color]}`}>
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </article>
  )
}

function PlaceCard({ emoji, title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </article>
  )
}

function SeasonCard({ emoji, title, text, color }) {
  return (
    <article className={`rounded-2xl border p-7 shadow-sm ${COLORS[color]}`}>
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function TripNudge({ country }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-green-200 bg-white p-5">
      <p className="font-semibold text-gray-900">
        Want to visit these parks? Tell us your dates and group size.
      </p>
      <Link
        href={`/request-a-trip?destination=${country}`}
        className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-green-950 transition hover:bg-amber-300"
      >
        Plan this trip
      </Link>
    </div>
  )
}
