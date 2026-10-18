import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import GuideTripCta from '../GuideTripCta'

export const metadata = buildMetadata({
  title: "Zambia Travel Guide — Victoria Falls, South Luangwa, Safari & Travel Information | OSARE",
  description: "Practical Zambia travel information covering Victoria Falls, South Luangwa, Lower Zambezi, Kafue, wildlife, seasons, entry requirements and trip planning.",
  path: '/guides/zambia',
})

export default function ZambiaGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <header className="bg-gradient-to-br from-green-950 via-green-800 to-emerald-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Southern Africa Travel Guide
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Zambia Travel Guide
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            {"Victoria Falls, walking safaris in South Luangwa, canoeing on the Lower Zambezi and some of Africa's least crowded wilderness."}
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
            title="Zambia at a Glance"
            description="Essential information for travellers planning a journey through Zambia."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard emoji="🏙️" title="Capital" value="Lusaka" />
            <FactCard emoji="🌍" title="Region" value="Southern Africa" />
            <FactCard emoji="💰" title="Currency" value="Zambian Kwacha (ZMW)" />
            <FactCard emoji="🗣️" title="Languages" value="English (official), Bemba, Nyanja, Tonga, Lozi and others" />
          </div>
        </section>

        {/* WHY VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Discover Zambia"
            title="Why Visit Zambia?"
            description="Highlights that bring travellers to Zambia."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              emoji="💦"
              title="Victoria Falls"
              text="Mosi-oa-Tunya, one of the largest waterfalls in the world, shared with Zimbabwe and reached from Livingstone."
              color="blue"
            />

            <FeatureCard
              emoji="🚶"
              title="Walking Safaris"
              text="South Luangwa is widely known for guided walking safaris alongside game drives."
              color="green"
            />

            <FeatureCard
              emoji="🛶"
              title="River Safaris"
              text="Canoe and boat trips on the Zambezi and Luangwa rivers bring you close to elephants and hippos."
              color="amber"
            />
          </div>
        </section>

        {/* NATIONAL PARKS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Nature & Wildlife"
            title="National Parks & Reserves"
            description="The main wildlife areas to consider when planning a Zambia safari."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <DestinationCard
              id="south-luangwa"
              emoji="🐆"
              title="South Luangwa National Park"
              description="Known for leopards, large hippo and crocodile populations along the Luangwa River, and walking safaris. Main gateway: Mfuwe."
              color="green"
            />

            <DestinationCard
              id="lower-zambezi"
              emoji="🛶"
              title="Lower Zambezi National Park"
              description="Riverside park opposite Zimbabwe's Mana Pools, visited by canoe, boat and game drive."
              color="blue"
            />

            <DestinationCard
              id="kafue"
              emoji="🌿"
              title="Kafue National Park"
              description="Zambia's largest national park, with the Busanga Plains in the north and varied wildlife."
              color="amber"
            />

            <DestinationCard
              id="liuwa-plain"
              emoji="🦓"
              title="Liuwa Plain National Park"
              description="Remote western plains with a seasonal wildebeest migration at the start of the rains."
              color="purple"
            />

            <DestinationCard
              id="kasanka"
              emoji="🦇"
              title="Kasanka National Park"
              description="Small park famous for a seasonal fruit bat gathering, usually from late October to December."
              color="red"
            />

            <DestinationCard
              id="bangweulu"
              emoji="🦩"
              title="Bangweulu Wetlands"
              description="Vast wetlands known to birdwatchers as a place to see the shoebill."
              color="green"
            />
          </div>

          <TripNudge country="Zambia" />
        </section>

        {/* DESTINATIONS */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Places to Explore"
            title="Major Zambia Destinations"
            description="Towns, lakes and landscapes to include in your route."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <PlaceCard emoji="🏙️" title="Lusaka" text="The capital and main international arrival point." />
            <PlaceCard emoji="💦" title="Livingstone" text="Town beside Victoria Falls and the base for the falls and Zambezi activities." />
            <PlaceCard emoji="🐆" title="Mfuwe" text="Gateway town and airport for South Luangwa." />
            <PlaceCard emoji="🌊" title="Lake Kariba" text="Large man-made lake on the Zimbabwe border, for boating and fishing." />
            <PlaceCard emoji="🏞️" title="Lake Tanganyika" text="Deep lake in the far north, reached via Mpulungu." />
          </div>
        </section>

        {/* WHEN TO VISIT */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Seasonal Planning"
            title="When to Visit Zambia"
            description="Zambia has a wet season and a dry season, and each suits different trips."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <SeasonCard emoji="🌧️" title="Green / Wet Season" text="November to April. Landscapes turn green and birdlife is at its best. Some remote camps close and some roads become difficult." color="green" />
            <SeasonCard emoji="☀️" title="Dry Season" text="May to October. Vegetation thins and wildlife gathers near water, which is usually the main safari season. Victoria Falls has the most water around March to May." color="amber" />
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
          country="Zambia"
          links={[
            { label: 'Zambia Tourism Agency', href: 'https://www.zambiatourism.com' },
            { label: 'Zambia Department of Immigration', href: 'https://www.zambiaimmigration.gov.zm' },
          ]}
        />

        {/* SOURCE RECORD */}
        <section className="mb-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Zambia Guide Source Record</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p><strong>Primary tourism source:</strong> Zambia Tourism Agency</p>
            <p><strong>Visa information:</strong> Verify current requirements with the Zambia Department of Immigration before travel.</p>
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
