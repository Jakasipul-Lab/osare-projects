import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Lake Nakuru Travel Guide — Rhino, Wildlife, Birds & Safari | OSARE',
  description:
    'Explore Lake Nakuru National Park in Kenya: rhinos, birds, wildlife, viewpoints, the Rift Valley landscape, travel information and ways to connect with safari operators.',
  path: '/guides/kenya/lake-nakuru',
})

const WILDLIFE = [
  ['🦏', 'Black & white rhino', 'Lake Nakuru is one of Kenya’s important rhino conservation areas.'],
  ['🦒', "Rothschild's giraffe", 'Look for giraffes moving through the park’s woodland and open areas.'],
  ['🦁', 'Lion', 'The park supports lions as well as other African predators.'],
  ['🐆', 'Leopard', 'Leopards are present, although sightings are never guaranteed.'],
  ['🐃', 'Buffalo', 'Large buffalo herds can be encountered around the park.'],
  ['🦩', 'Flamingos', 'Flamingos still occur, but their numbers can change considerably with lake conditions.'],
  ['🦅', 'Birdlife', 'The park is an important birdwatching destination with about 450 recorded species.'],
  ['🐒', 'Baboons & monkeys', 'Olive baboons and other primates are part of the park’s wildlife.'],
]

const EXPERIENCES = [
  [
    '🚙',
    'Game Drives',
    'Explore the park by vehicle and look for rhino, giraffe, buffalo, lion and other wildlife.',
  ],
  [
    '🦏',
    'Rhino Watching',
    'One of the major reasons visitors come to Lake Nakuru is the opportunity to see protected black and white rhinos.',
  ],
  [
    '🦅',
    'Birdwatching',
    'Bring binoculars and watch for waterbirds, raptors, pelicans, flamingos and many other species.',
  ],
  [
    '📸',
    'Photography',
    'The lake, escarpments, woodland and wildlife create excellent opportunities for landscape and wildlife photography.',
  ],
  [
    '🌄',
    'Scenic Viewpoints',
    'Baboon Cliff, Lion Hill and other viewpoints provide memorable views across the lake and Rift Valley landscape.',
  ],
  [
    '💦',
    'Makalia Waterfalls',
    'Visit the seasonal waterfall and surrounding scenery when conditions allow.',
  ],
]

const PRACTICAL = [
  ['📍', 'Location', 'Rift Valley, Kenya'],
  ['🚗', 'From Nairobi', 'About 156 km by road'],
  ['🛣️', 'Road access', 'Main A104 corridor with access through several park gates'],
  ['✈️', 'Air access', 'Naishi Airstrip serves the park'],
  ['🐦', 'Birdlife', 'Approximately 450 bird species'],
  ['🦏', 'Wildlife focus', 'Black and white rhino, giraffe, buffalo and many other species'],
]

export default function LakeNakuruGuide() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-slate-800">

      {/* HERO */}
<section className="relative min-h-[620px] overflow-hidden text-white">
  {/* Lake Nakuru flamingo photo */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/lake-nakuru-flamingos.jpg')",
    }}
  />

  {/* Soft teal overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#075866]/85 via-[#087f83]/50 to-[#55b89c]/20" />

  {/* Soft homepage-style color glow */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-300 blur-3xl" />
    <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-pink-300 blur-3xl" />
  </div>

  <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:px-8 lg:py-28">
    <div className="max-w-4xl">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-200">
        🇰🇪 Kenya · Great Rift Valley
      </p>

      <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
        Lake Nakuru
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-teal-50 sm:text-xl">
        Wildlife, rhinos, birds and dramatic Rift Valley scenery —
        all in one compact national park close to Nakuru city.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/safari"
          className="rounded-full bg-yellow-300 px-7 py-4 font-black text-[#174b45] shadow-xl transition hover:bg-yellow-200"
        >
          🔎 Find Safari Operators
        </Link>

        <Link
          href="/guides/kenya"
          className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20"
        >
        🇰🇪 Explore Kenya
        </Link>
      </div>
    </div>
  </div>

  {/* HERO HIGHLIGHTS */}
  <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {[
      ['🦏', 'Rhino country'],
      ['🦅', 'Birdwatching'],
      ['🌊', 'Rift Valley lake'],
      ['🌄', 'Scenic viewpoints'],
    ].map(([icon, label]) => (
      <div
        key={label}
        className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur"
      >
        <div className="text-3xl">{icon}</div>
        <p className="mt-3 font-black">{label}</p>
      </div>
    ))}
  </div>
</div>
</section>

{/* NAVIGATION */}
<section className="border-b border-slate-200 bg-white">
  <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5 lg:px-8">
    <Link
      href="/"
      className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200"
    >

            🏠 Home
          </Link>

          <Link
            href="/safari"
            className="rounded-full bg-teal-50 px-5 py-2 font-semibold text-teal-800 transition hover:bg-teal-100"
          >
            🔎 Search Safaris
          </Link>

          <Link
            href="/guides"
            className="rounded-full bg-yellow-50 px-5 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-100"
          >
            📚 Travel Guides
          </Link>

          <Link
            href="/guides/kenya"
            className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-800 transition hover:bg-red-100"
          >
            🇰🇪 Kenya
          </Link>

          <Link
            href="/guides/maasai-mara"
            className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100"
          >
            🦓 Maasai Mara
          </Link>

          <Link
            href="/guides/kenya/nairobi"
            className="rounded-full bg-cyan-50 px-5 py-2 font-semibold text-cyan-800 transition hover:bg-cyan-100"
          >
            🏙️ Nairobi
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

            <div>
              <p className="font-black uppercase tracking-[0.2em] text-teal-700">
                Welcome to Lake Nakuru
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight text-[#114b52] sm:text-5xl">
                A compact safari destination with a lot to discover
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Lake Nakuru National Park lies in Kenya's Great Rift Valley
                  and combines a shallow semi-alkaline lake with grasslands,
                  woodland, rocky areas and escarpments.
                </p>

                <p>
                  The park is particularly important for rhino conservation
                  and is also a rewarding destination for birdwatchers and
                  photographers. Kenya Wildlife Service describes it as a
                  successful sanctuary for both black and white rhinos.
                </p>

                <p>
                  Flamingos are part of Lake Nakuru's story, but today's
                  visitor should not assume that the shoreline will always
                  be covered in huge pink flocks. Lake conditions have
                  changed over time and flamingo numbers can vary greatly.
                </p>
              </div>

              <div className="mt-7">
                <a
                  href="https://kws.go.ke/park/lake-nakuru-national-park/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900"
                >
                  Check the latest information from Kenya Wildlife Service →
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-yellow-100 via-pink-50 to-teal-50 p-8 shadow-sm">
              <div className="text-6xl">🦏</div>

              <h3 className="mt-5 text-2xl font-black text-[#114b52]">
                Why Lake Nakuru?
              </h3>

              <ul className="mt-5 space-y-4 text-slate-700">
                <li>✓ Important black and white rhino sanctuary</li>
                <li>✓ Excellent birdwatching opportunities</li>
                <li>✓ Easy addition to a Kenya safari circuit</li>
                <li>✓ Dramatic Rift Valley scenery</li>
                <li>✓ Close enough for a Nairobi-based trip</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WILDLIFE */}
      <section className="bg-[#eef9f5]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-black uppercase tracking-[0.2em] text-teal-700">
            Wildlife
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#114b52] sm:text-5xl">
            What could you see?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Lake Nakuru may be smaller than some of Kenya's famous safari
            destinations, but its different habitats support a surprisingly
            varied range of wildlife.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WILDLIFE.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{icon}</div>

                <h3 className="mt-4 font-black text-[#114b52]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAMINGO REALITY */}
      <section className="bg-gradient-to-r from-pink-50 via-white to-cyan-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.2fr_1fr]">
              <div className="text-6xl">🦩</div>

              <div>
                <p className="font-black uppercase tracking-[0.2em] text-pink-600">
                  A changing lake
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#114b52]">
                  Flamingos are part of the story — but conditions matter
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Lake Nakuru became famous around the world for its enormous
                  flamingo concentrations. However, Kenya Wildlife Service
                  reports that changing lake conditions have affected the
                  food source and distribution of Lesser Flamingos.
                </p>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  That means visitors should come for the complete Lake
                  Nakuru experience — wildlife, rhinos, birds, scenery and
                  the lake itself — rather than expecting a guaranteed
                  flamingo spectacle.
                </p>

                <a
                  href="https://kws.go.ke/kenyas-flamingos-are-moving-heres-what-our-latest-census-found/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block font-bold text-pink-700 underline underline-offset-4"
                >
                  Read the latest KWS flamingo update →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-black uppercase tracking-[0.2em] text-orange-600">
            Experiences
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#114b52] sm:text-5xl">
            Things to do around Lake Nakuru
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-100 bg-[#fffaf2] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{icon}</div>

                <h3 className="mt-5 text-xl font-black text-[#114b52]">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-[#114b52] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-black uppercase tracking-[0.2em] text-yellow-300">
            Quick facts
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Lake Nakuru at a glance
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICAL.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <div className="text-3xl">{icon}</div>

                <p className="mt-4 text-sm font-black uppercase tracking-wide text-teal-100">
                  {title}
                </p>

                <p className="mt-2 font-bold text-white">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="bg-[#fffaf2]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="font-black uppercase tracking-[0.2em] text-teal-700">
                Getting there
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#114b52]">
                Reaching Lake Nakuru
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Lake Nakuru National Park is relatively accessible from
                Nairobi and can fit naturally into a longer Kenya safari.
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-black text-[#114b52]">
                    🚙 By road
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Kenya Wildlife Service places the park about 156 km
                    north-west of Nairobi along the main A104 road. Access
                    is available through Lanet Gate, Nderit Gate and the
                    Main Gate near Nakuru city.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-black text-[#114b52]">
                    ✈️ By air
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Naishi Airstrip, next to Naishi Guest House, serves the
                    park for visitors arriving by air.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan-100 via-teal-50 to-yellow-100 p-8 lg:p-10">
              <div className="text-5xl">🗺️</div>

              <h3 className="mt-5 text-2xl font-black text-[#114b52]">
                Make Lake Nakuru part of a bigger journey
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                Many travelers combine Lake Nakuru with other destinations
                in Kenya. Your route can be built around the time you have,
                the wildlife you want to see and the transport information
                available.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/guides/kenya/nairobi"
                  className="flex items-center justify-between rounded-xl bg-white px-5 py-4 font-bold text-[#114b52] shadow-sm transition hover:bg-teal-50"
                >
                  🏙️ Nairobi
                  <span>→</span>
                </Link>

                <Link
                  href="/guides/maasai-mara"
                  className="flex items-center justify-between rounded-xl bg-white px-5 py-4 font-bold text-[#114b52] shadow-sm transition hover:bg-orange-50"
                >
                  🦓 Maasai Mara
                  <span>→</span>
                </Link>

                <Link
                  href="/guides/kenya"
                  className="flex items-center justify-between rounded-xl bg-white px-5 py-4 font-bold text-[#114b52] shadow-sm transition hover:bg-yellow-50"
                >
                  🇰🇪 Kenya Travel Guide
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW LONG */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-black uppercase tracking-[0.2em] text-orange-600">
            Planning your visit
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#114b52]">
            How could Lake Nakuru fit into your trip?
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-pink-50 p-7">
              <div className="text-4xl">☀️</div>
              <h3 className="mt-5 text-xl font-black text-[#114b52]">
                Day visit
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                A useful option for travelers based in or passing through
                the Nairobi–Nakuru corridor.
              </p>
            </div>

            <div className="rounded-3xl bg-cyan-50 p-7">
              <div className="text-4xl">🌅</div>
              <h3 className="mt-5 text-xl font-black text-[#114b52]">
                Overnight stay
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Staying nearby gives you more time for wildlife viewing,
                scenery and different times of day.
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-7">
              <div className="text-4xl">🧭</div>
              <h3 className="mt-5 text-xl font-black text-[#114b52]">
                Safari circuit
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Combine Lake Nakuru with Nairobi, Maasai Mara or other
                Kenyan destinations depending on your route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL TIPS */}
      <section className="bg-[#eef9f5]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
              <div className="text-5xl">🎒</div>

              <div>
                <p className="font-black uppercase tracking-[0.2em] text-teal-700">
                  Visitor tips
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#114b52]">
                  What should you bring?
                </h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Binoculars',
                    'Camera',
                    'Sun protection',
                    'Insect repellent',
                    'Comfortable clothing',
                    'Drinking water',
                    'Light layers for cooler mornings',
                    'Basic first-aid supplies',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#f3f9fa] px-4 py-3 font-semibold text-slate-700"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-6 text-slate-500">
                  Always check current park conditions, entry information
                  and official visitor guidance before travelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFARI CONNECTION */}
      <section className="bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#facc15] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
          <p className="font-black uppercase tracking-[0.25em] text-orange-50">
            Your next adventure
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Looking for a safari operator?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Explore safari information on eaSafariRoutes and find operators
            you can contact directly. Compare your options, ask questions
            and make your own arrangements with the vendor.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/safari"
              className="rounded-full bg-[#114b52] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#0c3e43]"
            >
              🔎 Find Safari Operators
            </Link>

            <Link
              href="/"
              className="rounded-full bg-white px-8 py-4 font-black text-orange-700 shadow-xl transition hover:bg-orange-50"
            >
              🏠 Back to eaSafariRoutes
            </Link>
          </div>
        </div>
      </section>

      {/* OFFICIAL INFORMATION */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Official information
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            Park conditions, entry requirements, fees, conservation
            information and visitor rules can change. For the latest
            official information, consult Kenya Wildlife Service before
            travelling.
          </p>

          <a
            href="https://kws.go.ke/park/lake-nakuru-national-park/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-teal-50 px-6 py-3 font-bold text-teal-800 transition hover:bg-teal-100"
          >
            Kenya Wildlife Service — Lake Nakuru National Park →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-[#114b52] px-6 py-8 text-center text-sm text-teal-100">
        <p>
          © {new Date().getFullYear()} eaSafariRoutes — East Africa Travel,
          Routes &amp; Discovery
        </p>

        <p className="mt-2">
          Find Africa. Find Adventure.
        </p>
      </section>
    </main>
  )
}

