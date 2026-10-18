import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import GuideTripCta from '../../GuideTripCta'

export const metadata = buildMetadata({
  title: 'Ruma National Park (Lambwe Valley) — Roan Antelope, Homa Bay, Kenya | OSARE',
  description: "Ruma National Park in the Lambwe Valley, Homa Bay County: Kenya's only home of the roan antelope, with Rothschild's giraffe, oribi and Lake Victoria nearby. When to go, getting there and where to stay.",
  path: '/guides/kenya/ruma-national-park',
})

const WILDLIFE = [
  ["Roan antelope", "Ruma is the only place in Kenya where roan antelope live. The park was created largely to protect them."],
  ["Rothschild’s giraffe", "An endangered giraffe subspecies, brought to Ruma to build a new population."],
  ["Oribi", "A small, rare antelope of open grassland, seen more easily here than in most Kenyan parks."],
  ["Jackson’s hartebeest", "A western Kenya hartebeest found on the valley grasslands."],
  ["Topi and Bohor reedbuck", "Grazers of the open plains and wetter valley floor."],
  ["Buffalo, leopard and hyena", "Present in the park, though leopard sightings are not common."],
]

const NEARBY = [
  ["Homa Bay town", "County headquarters on the Lake Victoria shore and the usual base for visiting Ruma."],
  ["Rusinga Island", "Lake Victoria island linked to Mbita by a causeway, known for fossil sites and fishing villages."],
  ["Mfangano Island", "Island reached by boat from Mbita, with ancient rock art sites."],
  ["Thimlich Ohinga", "UNESCO World Heritage dry-stone settlement in neighbouring Migori County."],
]

export default function RumaNationalParkPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-br from-green-950 via-green-800 to-emerald-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Kenya Travel Guide · Homa Bay County
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Ruma National Park
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            A quiet savannah park in the Lambwe Valley near Lake Victoria, formerly
            the Lambwe Valley Game Reserve. It is the only place in Kenya to see
            roan antelope, and you may have the plains almost to yourself.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Fact title="Location" value="Lambwe Valley, Homa Bay County" />
          <Fact title="Managed by" value="Kenya Wildlife Service" />
          <Fact title="Known for" value="Roan antelope, Rothschild’s giraffe" />
          <Fact title="Nearest town" value="Homa Bay" />
        </section>

        <section className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">Wildlife</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">What You Can See</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WILDLIFE.map(([t, x]) => (
              <article key={t} className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{t}</h3>
                <p className="mt-2 leading-7 text-gray-600">{x}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-7 text-gray-600">
            Ruma is also good for birdwatching, with grassland and wetland species
            across the valley.
          </p>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
            <h3 className="text-xl font-bold text-gray-900">When to go</h3>
            <p className="mt-3 leading-7 text-gray-700">
              The drier months, roughly December to March and June to September, are
              easiest. In heavy rain the black cotton soil makes park tracks
              difficult, so a 4x4 is strongly advised.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-7">
            <h3 className="text-xl font-bold text-gray-900">Getting there</h3>
            <p className="mt-3 leading-7 text-gray-700">
              By road from Kisumu or Homa Bay. Most visitors combine Ruma with a
              night in Homa Bay or Mbita and a day on Lake Victoria. Ask us for a
              driver and vehicle.
            </p>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">Where to stay</h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            Kenya Wildlife Service runs self-catering accommodation and campsites in
            the park. Hotels are available in Homa Bay and Mbita. Check current
            options and park entry fees with KWS before you travel.
          </p>
          <a
            href="https://reservations.kws.go.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-bold text-green-700 hover:underline"
          >
            KWS reservations →
          </a>
        </section>

        <section className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">Combine with</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Nearby Places</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {NEARBY.map(([t, x]) => (
              <article key={t} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{t}</h3>
                <p className="mt-2 leading-7 text-gray-600">{x}</p>
              </article>
            ))}
          </div>
        </section>

        <GuideTripCta
          country="Kenya"
          links={[
            { label: 'Kenya Wildlife Service', href: 'https://www.kws.go.ke' },
            { label: 'KWS reservations', href: 'https://reservations.kws.go.ke' },
            { label: 'Magical Kenya (Kenya Tourism Board)', href: 'https://www.magicalkenya.com' },
          ]}
        />

        <section className="flex flex-wrap gap-6 border-t pt-8">
          <Link href="/guides/kenya" className="font-bold text-green-700 hover:underline">← Kenya Travel Guide</Link>
          <Link href="/guides" className="font-bold text-green-700 hover:underline">All Travel Guides</Link>
        </section>
      </div>
    </main>
  )
}

function Fact({ title, value }) {
  return (
    <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <p className="mt-2 font-bold text-gray-900">{value}</p>
    </div>
  )
}
