import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Amboseli Travel Guide — Elephants, Kilimanjaro Views & Safari | OSARE',
  description:
    'Plan a trip to Amboseli National Park: elephant herds, views of Mount Kilimanjaro, when to go, how to get there, and how to pair it with a Maasai Mara or coastal trip.',
  path: '/guides/kenya/amboseli',
})

const STATS = [
  ['🐘', '1,600+', 'Elephants roam the park'],
  ['📏', '392 km²', 'Park size'],
  ['⛰️', '5,895 m', "Kilimanjaro's peak, visible on clear days"],
  ['🚙', '4 hrs', 'Drive from Nairobi'],
]

export default function AmboseliGuide() {
  return (
    <main className="min-h-screen bg-[#faf6f0] text-slate-800">

      {/* HERO — full-bleed, centered */}
      <section className="relative overflow-hidden bg-[#1c2b1f] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a5a3f]/60 via-[#1c2b1f] to-[#1c2b1f]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-emerald-300">
            🇰🇪 Kenya · Amboseli National Park
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Amboseli
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50 sm:text-xl">
            Herds of elephant crossing dry lake beds, with the snowy cap
            of Mount Kilimanjaro rising behind them — one of Africa's
            most photographed views.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/safari" className="rounded-full bg-emerald-500 px-8 py-4 font-black text-white shadow-xl transition hover:bg-emerald-600">
              🔎 Browse Safaris
            </Link>
            <Link href="/guides" className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold backdrop-blur transition hover:bg-white/20">
              🌍 All Travel Guides
            </Link>
          </div>
        </div>

        {/* STAT STRIP */}
        <div className="relative border-t border-white/10 bg-[#16241a]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4 lg:px-8">
            {STATS.map(([icon, value, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl">{icon}</div>
                <div className="mt-2 text-2xl font-black text-emerald-300">{value}</div>
                <div className="mt-1 text-xs text-emerald-100">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5 lg:px-8">
          <Link href="/" className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200">🏠 Home</Link>
          <Link href="/safari" className="rounded-full bg-emerald-50 px-5 py-2 font-semibold text-emerald-800 transition hover:bg-emerald-100">🔎 Search Safaris</Link>
          <Link href="/guides" className="rounded-full bg-yellow-50 px-5 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-100">📚 Travel Guides</Link>
          <Link href="/guides/kenya" className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-800 transition hover:bg-red-100">🇰🇪 Kenya</Link>
          <Link href="/guides/maasai-mara" className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100">🦓 Maasai Mara</Link>
          <Link href="/guides/kenya/coast" className="rounded-full bg-cyan-50 px-5 py-2 font-semibold text-cyan-800 transition hover:bg-cyan-100">🏖️ Kenyan Coast</Link>
        </div>
      </section>

      {/* ZIG-ZAG SECTION 1 */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-emerald-700">The setting</p>
              <h2 className="mt-3 text-4xl font-black text-[#1c2b1f]">
                A dry lake basin under Africa's tallest mountain
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Amboseli sits at the foot of Mount Kilimanjaro, just across
                the border in Tanzania. The park's dried-up lake bed and
                open plains give some of the clearest, least-obstructed
                wildlife views in East Africa — and on a clear morning,
                Kilimanjaro's snow cap rises directly behind grazing
                elephants.
              </p>
            </div>
            <div className="rounded-3xl bg-[#eef4ea] p-10 text-center">
              <div className="text-7xl">🐘🏔️</div>
              <p className="mt-4 font-bold text-[#1c2b1f]">
                Best mountain views: early morning, before clouds build up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZIG-ZAG SECTION 2 (reversed) */}
      <section className="bg-[#f3f7ee]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 rounded-3xl bg-[#1c2b1f] p-10 text-center text-white lg:order-1">
              <div className="text-7xl">🐘</div>
              <p className="mt-4 font-bold text-emerald-100">
                One of Africa's best places to see large elephant herds
                up close
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-bold uppercase tracking-widest text-emerald-700">The wildlife</p>
              <h2 className="mt-3 text-4xl font-black text-[#1c2b1f]">
                Famous for its elephants
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Amboseli has been studied by elephant researchers for
                decades, and its herds are some of the most habituated
                and easiest to observe in Africa. Beyond elephants, expect
                buffalo, giraffe, zebra, hippo in the swamps, and healthy
                predator numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THINGS TO DO — horizontal scroll-style row */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-700">Things to do</p>
          <h2 className="mt-3 text-4xl font-black text-[#1c2b1f]">Make the most of your visit</h2>

          <div className="mt-10 flex gap-5 overflow-x-auto pb-4">
            {[
              ['🚙', 'Game Drives', 'Morning and afternoon drives across the plains.', '/safari'],
              ['🏔️', 'Kilimanjaro Views', 'Best seen at sunrise before clouds gather.', '/safari'],
              ['🐘', 'Elephant Watching', "Observe some of Africa's most studied herds.", '/safari'],
              ['🏘️', 'Maasai Village Visit', "Learn about local Maasai culture and traditions.", '/local'],
              ['📸', 'Photography Safaris', 'A favorite for photographers chasing that mountain backdrop.', '/safari'],
              ['🦅', 'Birdwatching', 'Over 400 recorded species around the swamps.', '/safari'],
            ].map(([icon, title, text, href]) => (
              <Link
                key={title}
                href={href}
                className="block min-w-[220px] flex-1 rounded-2xl border border-emerald-100 bg-[#f3f7ee] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black text-[#1c2b1f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING THERE + STAY — split panel */}
      <section className="bg-[#1c2b1f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-widest text-emerald-300">Getting there</p>
            <h2 className="mt-3 text-3xl font-black">Reaching Amboseli</h2>
            <div className="mt-6 space-y-4 text-emerald-50">
              <p><strong>By road:</strong> About 240km / roughly 4 hours' drive from Nairobi.</p>
              <p><strong>By air:</strong> Scheduled light-aircraft flights connect Nairobi's Wilson Airport to an airstrip inside the park, usually 30–45 minutes.</p>
            </div>
          </div>
          <div>
            <p className="font-bold uppercase tracking-widest text-emerald-300">Where to stay</p>
            <h2 className="mt-3 text-3xl font-black">Choose your view</h2>
            <div className="mt-6 space-y-4 text-emerald-50">
              <p><strong>Lodges with mountain views:</strong> Several properties are positioned specifically to frame Kilimanjaro from your room.</p>
              <p><strong>Tented camps:</strong> Mid-range and budget options closer to the park gates.</p>
            </div>
            <Link href="/safari" className="mt-6 inline-block rounded-full bg-emerald-500 px-6 py-3 font-black text-white transition hover:bg-emerald-600">
              Browse Safaris & Stays →
            </Link>
          </div>
        </div>
      </section>

      {/* TRIP LENGTH — timeline style */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <p className="text-center font-bold uppercase tracking-widest text-emerald-700">Simple trip ideas</p>
          <h2 className="mt-3 text-center text-4xl font-black text-[#1c2b1f]">
            How long should you spend in Amboseli?
          </h2>

          <div className="mt-12 space-y-8 border-l-4 border-emerald-200 pl-8">
            <div className="relative">
              <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-emerald-500" />
              <h3 className="text-xl font-black text-[#1c2b1f]">1 Day</h3>
              <p className="mt-2 text-slate-600">A day trip from Nairobi for game drives and Kilimanjaro views, if time is short.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-orange-500" />
              <h3 className="text-xl font-black text-[#1c2b1f]">2 Days</h3>
              <p className="mt-2 text-slate-600">Enough time for both morning and evening game drives, when the mountain view is clearest.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-cyan-500" />
              <h3 className="text-xl font-black text-[#1c2b1f]">Add-on to a longer safari</h3>
              <p className="mt-2 text-slate-600">Most travelers combine Amboseli with Maasai Mara, Nairobi, or the Kenyan coast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-[#f3f7ee]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">Continue your journey</p>
          <h2 className="mt-3 text-4xl font-black text-[#1c2b1f]">Where can you go from Amboseli?</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Nairobi', '🏙️', '/guides/kenya/nairobi'],
              ['Maasai Mara', '🦓', '/guides/maasai-mara'],
              ['Kenyan Coast', '🏖️', '/guides/kenya/coast'],
              ['Kenya Guide', '🇰🇪', '/guides/kenya'],
            ].map(([title, icon, href]) => (
              <Link key={title} href={href} className="block rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black text-[#1c2b1f]">{title}</h3>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#f97316] to-[#fb923c] p-8 text-white shadow-xl">
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
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="flex items-start gap-5 rounded-3xl border border-emerald-100 bg-[#f3f7ee] p-8">
            <div className="text-4xl">🛡️</div>
            <p className="leading-8 text-slate-700">
              <strong className="text-[#1c2b1f]">Practical safety advice:</strong>{' '}
              bring warm layers for cold early mornings, sun protection,
              and binoculars. Kilimanjaro's peak is often clearest at
              sunrise — plan your best photo opportunity for early game
              drives.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-4xl font-black sm:text-5xl">See Amboseli for yourself</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Compare verified safari operators, camps, and stays — and
            message them directly, free of charge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/safari" className="rounded-full bg-[#1c2b1f] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#0f1811]">🔎 Browse Safaris</Link>
            <Link href="/" className="rounded-full bg-white px-8 py-4 font-black text-orange-700 shadow-xl transition hover:bg-orange-50">🏠 Back to eaSafariRoutes</Link>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-[#1c2b1f] px-6 py-8 text-center text-sm text-emerald-100">
        <p>© {new Date().getFullYear()} eaSafariRoutes — East Africa Travel, Routes &amp; Discovery</p>
      </section>
    </main>
  )
}
