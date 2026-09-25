import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Lake Nakuru Travel Guide — Flamingos, Rhino Sanctuary & Safari | OSARE',
  description:
    'Plan a trip to Lake Nakuru National Park: flamingos, rhino sanctuary, when to go, how to get there, and how to pair it with a Maasai Mara or Nairobi trip.',
  path: '/guides/kenya/lake-nakuru',
})

export default function LakeNakuruGuide() {
  return (
    <main className="min-h-screen bg-[#fdfaf3] text-slate-800">

      {/* HERO — split two-tone */}
      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#0f2e3c] px-6 py-20 text-white lg:px-16 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink-300">
            🇰🇪 Kenya · Rift Valley
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
            Lake Nakuru
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-cyan-50">
            A soda lake known for its pink flamingo flocks and one of
            Kenya's most successful rhino sanctuaries — compact, easy to
            reach, and packed with wildlife.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/safari" className="rounded-full bg-pink-400 px-7 py-4 font-black text-white shadow-xl transition hover:bg-pink-500">
              🔎 Browse Safaris
            </Link>
            <Link href="/guides" className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20">
              🌍 All Travel Guides
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 bg-[#0a222d]">
          <div className="flex flex-col items-center justify-center gap-2 border border-white/10 p-8 text-white">
            <div className="text-4xl">🦩</div>
            <div className="text-xs font-bold uppercase tracking-wide text-pink-200">Flamingo flocks</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border border-white/10 p-8 text-white">
            <div className="text-4xl">🦏</div>
            <div className="text-xs font-bold uppercase tracking-wide text-pink-200">Rhino sanctuary</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border border-white/10 p-8 text-white">
            <div className="text-4xl">🌊</div>
            <div className="text-xs font-bold uppercase tracking-wide text-pink-200">Rift Valley soda lake</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border border-white/10 p-8 text-white">
            <div className="text-4xl">🌲</div>
            <div className="text-xs font-bold uppercase tracking-wide text-pink-200">Euphorbia forest</div>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5 lg:px-8">
          <Link href="/" className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200">🏠 Home</Link>
          <Link href="/safari" className="rounded-full bg-pink-50 px-5 py-2 font-semibold text-pink-800 transition hover:bg-pink-100">🔎 Search Safaris</Link>
          <Link href="/guides" className="rounded-full bg-yellow-50 px-5 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-100">📚 Travel Guides</Link>
          <Link href="/guides/kenya" className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-800 transition hover:bg-red-100">🇰🇪 Kenya</Link>
          <Link href="/guides/maasai-mara" className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100">🦓 Maasai Mara</Link>
          <Link href="/guides/kenya/nairobi" className="rounded-full bg-cyan-50 px-5 py-2 font-semibold text-cyan-800 transition hover:bg-cyan-100">🏙️ Nairobi</Link>
        </div>
      </section>

      {/* INTRO — magazine columns */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <p className="text-center font-bold uppercase tracking-widest text-cyan-700">About the park</p>
          <h2 className="mt-3 text-center text-4xl font-black text-[#0f2e3c]">
            A small park with an outsized reputation
          </h2>

          <div className="mt-10 columns-1 gap-10 text-lg leading-8 text-slate-700 md:columns-2">
            <p className="mb-4 break-inside-avoid">
              Lake Nakuru National Park sits in Kenya's Rift Valley, only
              a few hours from Nairobi. Its shallow, alkaline lake has
              historically attracted enormous flocks of flamingos, turning
              its shoreline pink — though numbers shift year to year with
              water levels.
            </p>
            <p className="mb-4 break-inside-avoid">
              The park is also a fenced rhino sanctuary, home to both
              black and white rhino, making it one of the more reliable
              places in Kenya to see them. Add in Rothschild's giraffe,
              lion, leopard and a dramatic euphorbia forest, and it packs
              a lot into a small, easy-to-visit area.
            </p>
          </div>
        </div>
      </section>

      {/* WILDLIFE HIGHLIGHTS — colorful pill grid */}
      <section className="bg-[#0f2e3c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-pink-300">Wildlife highlights</p>
          <h2 className="mt-3 text-4xl font-black">What you might see</h2>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              ['🦩', 'Flamingos'],
              ['🦏', 'Black & white rhino'],
              ['🦒', "Rothschild's giraffe"],
              ['🦁', 'Lion'],
              ['🐆', 'Leopard'],
              ['🦅', 'Over 450 bird species'],
              ['🐘', 'Buffalo'],
              ['🐒', 'Baboon troops'],
            ].map(([icon, label]) => (
              <span key={label} className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold backdrop-blur">
                <span className="text-xl">{icon}</span> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO — 2-column */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-cyan-700">Things to do</p>
          <h2 className="mt-3 text-4xl font-black text-[#0f2e3c]">Make the most of a short visit</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              ['🚙', 'Game Drives', 'Half-day or full-day drives across the compact park.', '/safari'],
              ['🦏', 'Rhino Tracking', 'Look for both black and white rhino in the sanctuary.', '/safari'],
              ['🦩', 'Lakeshore Viewing', 'Scan the shoreline for flamingo flocks and pelicans.', '/safari'],
              ['🌲', 'Euphorbia Forest', 'Drive through the park\'s distinctive candelabra-tree forest.', '/safari'],
              ['📸', 'Photography', 'Dramatic light over the lake at sunrise and sunset.', '/safari'],
              ['🥾', 'Baboon Cliff Viewpoint', 'A lookout point with sweeping views over the whole lake.', '/local'],
            ].map(([icon, title, text, href]) => (
              <Link key={title} href={href} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#f3f9fa] p-6 transition hover:shadow-lg">
                <div className="text-3xl">{icon}</div>
                <div>
                  <h3 className="font-black text-[#0f2e3c]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING THERE — compact banner */}
      <section className="bg-[#f3f9fa]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-cyan-700">Getting there</p>
          <h2 className="mt-3 text-4xl font-black text-[#0f2e3c]">Reaching Lake Nakuru</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-black text-[#0f2e3c]">🚙 By Road</p>
              <p className="mt-2 leading-7 text-slate-600">
                About 160km / roughly 3 hours' drive from Nairobi on a
                paved highway — one of the more accessible parks in
                Kenya.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-black text-[#0f2e3c]">✈️ By Air</p>
              <p className="mt-2 leading-7 text-slate-600">
                A short scheduled flight connects Nairobi to an airstrip
                near the park for those short on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES + TRIP LENGTH combined */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-600">Continue your journey</p>
              <h2 className="mt-3 text-3xl font-black text-[#0f2e3c]">Where next?</h2>
              <div className="mt-6 space-y-3">
                {[
                  ['Nairobi', '🏙️', '/guides/kenya/nairobi'],
                  ['Maasai Mara', '🦓', '/guides/maasai-mara'],
                  ['Amboseli', '🐘', '/guides/kenya/amboseli'],
                  ['Kenya Guide', '🇰🇪', '/guides/kenya'],
                ].map(([title, icon, href]) => (
                  <Link key={title} href={href} className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#f3f9fa] px-5 py-4 font-bold text-[#0f2e3c] transition hover:bg-cyan-50">
                    <span>{icon} {title}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-cyan-700">How long to stay</p>
              <h2 className="mt-3 text-3xl font-black text-[#0f2e3c]">Simple trip ideas</h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-pink-50 p-5">
                  <p className="font-black text-[#0f2e3c]">Day Trip</p>
                  <p className="mt-1 text-sm text-slate-600">Easily done from Nairobi in a single day.</p>
                </div>
                <div className="rounded-xl bg-cyan-50 p-5">
                  <p className="font-black text-[#0f2e3c]">1 Night</p>
                  <p className="mt-1 text-sm text-slate-600">Time for both morning and evening game drives.</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-5">
                  <p className="font-black text-[#0f2e3c]">Add-on Stop</p>
                  <p className="mt-1 text-sm text-slate-600">Often combined en route between Nairobi and the Maasai Mara.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#f97316] to-[#fb923c] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black">Ready to book your safari?</h3>
                <p className="mt-2 text-orange-50">Compare verified operators and message them directly, free of charge.</p>
              </div>
              <Link href="/safari" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-orange-700 transition hover:bg-orange-50">Browse Safaris →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY — compact */}
      <section className="bg-[#f3f9fa]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="flex items-start gap-5 rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🛡️</div>
            <p className="leading-8 text-slate-700">
              <strong className="text-[#0f2e3c]">Practical safety advice:</strong>{' '}
              flamingo numbers vary with water levels, so check current
              conditions with your operator. Bring layers for cool
              mornings, sun protection, and binoculars for birdwatching
              along the shoreline.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-4xl font-black sm:text-5xl">See Lake Nakuru for yourself</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Compare verified safari operators, camps, and stays — and
            message them directly, free of charge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/safari" className="rounded-full bg-[#0f2e3c] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#0a212b]">🔎 Browse Safaris</Link>
            <Link href="/" className="rounded-full bg-white px-8 py-4 font-black text-orange-700 shadow-xl transition hover:bg-orange-50">🏠 Back to eaSafariRoutes</Link>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-[#0f2e3c] px-6 py-8 text-center text-sm text-cyan-100">
        <p>© {new Date().getFullYear()} eaSafariRoutes — East Africa Travel, Routes &amp; Discovery</p>
      </section>
    </main>
  )
}
