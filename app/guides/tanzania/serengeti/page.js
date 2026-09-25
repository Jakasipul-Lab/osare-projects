import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Serengeti Travel Guide — Great Migration, Safari & When to Go | OSARE',
  description:
    'Plan a Serengeti safari: when to go, how to get there, where to stay, the Great Migration, and how to connect it with a Maasai Mara or Zanzibar trip.',
  path: '/guides/tanzania/serengeti',
})

export default function SerengetiGuide() {
  return (
    <main className="min-h-screen bg-[#fbf7f0] text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7c4a03] via-[#b5651d] to-[#e08a2b] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">🇹🇿 TANZANIA</span>
            <span className="rounded-full bg-emerald-500 px-4 py-2 text-white">🦁 SAFARI</span>
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">🌍 EAST AFRICA</span>
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-100">
            Tanzania's most famous national park
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Serengeti
            <span className="block text-emerald-300">Travel Guide</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-50 sm:text-xl">
            Endless plains, enormous herds, and the beating heart of the
            Great Migration — the Serengeti is what most people picture
            when they imagine an African safari.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/safari" className="rounded-2xl bg-emerald-500 px-7 py-4 font-black text-white shadow-xl transition hover:bg-emerald-600">
              🔎 Browse Safaris on OSARE
            </Link>
            <Link href="/guides" className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20">
              🌍 Explore Travel Guides
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5 lg:px-8">
          <Link href="/" className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200">🏠 Home</Link>
          <Link href="/safari" className="rounded-full bg-emerald-50 px-5 py-2 font-semibold text-emerald-800 transition hover:bg-emerald-100">🦁 Search Safaris</Link>
          <Link href="/guides" className="rounded-full bg-yellow-50 px-5 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-100">📚 Travel Guides</Link>
          <Link href="/guides/tanzania" className="rounded-full bg-cyan-50 px-5 py-2 font-semibold text-cyan-800 transition hover:bg-cyan-100">🇹🇿 Tanzania</Link>
          <Link href="/guides/maasai-mara" className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-800 transition hover:bg-red-100">🦓 Maasai Mara</Link>
          <Link href="/guides/tanzania/zanzibar" className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100">🏝️ Zanzibar</Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="font-bold uppercase tracking-widest text-emerald-700">Welcome to the Serengeti</p>
              <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">An ocean of grass, full of life</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                The Serengeti National Park stretches across northern
                Tanzania, forming one continuous ecosystem with Kenya's
                Maasai Mara just across the border. Its name comes from
                the Maasai word "siringet," meaning endless plains.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                It's most famous for the Great Migration — over a million
                wildebeest and zebra moving in a giant circular route
                through the park each year, chased by some of Africa's
                highest predator numbers.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Many travelers combine the Serengeti with the Ngorongoro
                Crater, Tanzania's northern circuit, or continue into
                Kenya via the Maasai Mara.
              </p>
            </div>

            <div className="rounded-3xl bg-[#7c4a03] p-8 text-white shadow-xl">
              <div className="text-5xl">🦁</div>
              <h3 className="mt-5 text-2xl font-black">What makes the Serengeti special?</h3>
              <ul className="mt-5 space-y-4 text-orange-50">
                <li>✓ The Great Migration, all year somewhere in the park</li>
                <li>✓ Some of Africa's densest lion populations</li>
                <li>✓ Enormous, uncrowded open plains</li>
                <li>✓ Hot air balloon safaris at sunrise</li>
                <li>✓ Combines naturally with Ngorongoro Crater</li>
                <li>✓ Connects directly to the Maasai Mara ecosystem</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-700">Why visit the Serengeti?</p>
          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">The classic safari, done right</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🐆', title: 'Big Cats', text: 'Lion, leopard and cheetah all thrive across the open plains.', bg: 'bg-emerald-50' },
              { icon: '🌾', title: 'The Great Migration', text: 'Over a million wildebeest and zebra moving through the ecosystem year-round.', bg: 'bg-orange-50' },
              { icon: '🎈', title: 'Balloon Safaris', text: 'Float above the plains at sunrise, followed by a bush breakfast.', bg: 'bg-yellow-50' },
              { icon: '🏔️', title: 'Ngorongoro Crater', text: "A short drive away — one of Africa's greatest wildlife-viewing sites in its own right.", bg: 'bg-cyan-50' },
            ].map((item) => (
              <div key={item.title} className={`rounded-3xl ${item.bg} p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}>
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black text-[#7c4a03]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[#fef3e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-700">Explore the park</p>
          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">Different regions of the Serengeti</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Seronera Valley', icon: '🌳', text: 'The central region, known for reliable year-round game viewing and river-fed woodland.' },
              { title: 'Northern Serengeti', icon: '🌊', text: 'Home to the famous Mara River crossings, usually July through October.' },
              { title: 'Western Corridor', icon: '🐊', text: 'Follows the Grumeti River, known for its own smaller river crossings, usually May–July.' },
              { title: 'Southern Plains', icon: '🐘', text: 'Calving season grounds, where huge herds gather roughly December through March.' },
              { title: 'Ngorongoro Crater', icon: '🏔️', text: 'A short drive from the Serengeti, a collapsed volcanic caldera packed with wildlife.' },
              { title: 'Ndutu Area', icon: '🦓', text: 'Straddling the Serengeti and Ngorongoro, prime for the migration calving season.' },
            ].map((area) => (
              <div key={area.title} className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl">
                <div className="text-4xl">{area.icon}</div>
                <h3 className="mt-4 text-xl font-black text-[#7c4a03]">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="bg-[#7c4a03] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-300">Things to do</p>
          <h2 className="mt-3 text-4xl font-black">Build your own Serengeti safari</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['🚙', 'Game Drives', 'Morning and afternoon drives across the plains.', '/safari'],
              ['🌾', 'River Crossings', 'Watch the Great Migration cross the Mara or Grumeti rivers.', '/safari'],
              ['🎈', 'Balloon Safari', 'Rise at dawn for a hot air balloon flight over the plains.', '/safari'],
              ['🏔️', 'Ngorongoro Day Trip', 'Add a day trip into the nearby crater.', '/safari'],
              ['📸', 'Photography Safaris', 'Wide-open landscapes and huge skies, ideal for photography.', '/safari'],
              ['🌙', 'Night Game Drives', 'Selected areas allow night drives to spot nocturnal wildlife.', '/safari'],
              ['🚶', 'Walking Safaris', 'Guided walks in select areas for a different pace and perspective.', '/safari'],
              ['🍽️', 'Bush Dinners', 'Many camps offer a private dinner under the stars.', '/safari'],
            ].map(([icon, title, text, href]) => (
              <Link key={title} href={href} className="block rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-orange-50">{text}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-emerald-300">Find safaris →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="bg-[#fef3e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-emerald-700">Getting there</p>
            <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">Reaching the Serengeti</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Most visitors fly into Tanzania via Kilimanjaro International
              Airport, then continue by road or a short domestic flight.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">✈️</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">By Air</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Scheduled light-aircraft flights connect Arusha and
                Kilimanjaro Airport directly to airstrips inside the
                Serengeti, usually in 1 to 2 hours.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🚙</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">By Road</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A longer overland route from Arusha, usually 6–8 hours,
                often broken up with a stop at Ngorongoro Crater along
                the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">Continue your journey</p>
          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">Where can you go from the Serengeti?</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Serengeti → Maasai Mara', '🦓', 'Cross into Kenya and continue the same migration ecosystem.', '/guides/maasai-mara'],
              ['Serengeti → Ngorongoro', '🏔️', 'Visit the nearby crater, part of the same safari circuit.', '/guides/tanzania'],
              ['Serengeti → Zanzibar', '🏝️', 'Add island time after your safari.', '/guides/tanzania/zanzibar'],
              ['Serengeti → Arusha', '🏙️', 'Return to Tanzania\'s main safari gateway town.', '/guides/tanzania'],
              ['Serengeti → Dar es Salaam', '🌊', "Continue to Tanzania's largest city and coast.", '/guides/tanzania/dar-es-salaam'],
              ['Serengeti → Nairobi', '🇰🇪', 'Connect Tanzania with Kenya.', '/guides/kenya'],
            ].map(([route, icon, text, href]) => (
              <Link key={route} href={href} className="block rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-orange-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-black text-[#7c4a03]">{route}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#f97316] to-[#fb923c] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black">Ready to book your safari?</h3>
                <p className="mt-2 text-orange-50">Compare verified safari operators, camps, and stays on OSARE — and message them directly, free of charge.</p>
              </div>
              <Link href="/safari" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-orange-700 transition hover:bg-orange-50">Browse Safaris →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION */}
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">Where to stay</p>
          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">Choose a camp that matches your trip</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🏕️</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">Luxury Camps & Lodges</h3>
              <p className="mt-3 leading-7 text-slate-600">Top-end comfort, often positioned to follow the migration seasonally.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">⛺</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">Mid-Range Camps</h3>
              <p className="mt-3 leading-7 text-slate-600">Comfortable tented camps with an authentic safari feel.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🏠</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">Budget-Friendly Options</h3>
              <p className="mt-3 leading-7 text-slate-600">Public campsites and smaller local operators for a lower-cost safari.</p>
            </div>
          </div>

          <p className="mt-8 text-center">
            <Link href="/safari" className="font-black text-[#7c4a03] underline underline-offset-4">Browse verified safari operators and stays on OSARE →</Link>
          </p>
        </div>
      </section>

      {/* TRAVEL PLANS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-700">Simple trip ideas</p>
          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">How long should you spend in the Serengeti?</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border-t-8 border-cyan-500 bg-cyan-50 p-7">
              <h3 className="text-2xl font-black text-[#7c4a03]">2 Days</h3>
              <p className="mt-4 leading-7 text-slate-700">A short introduction with morning and afternoon game drives.</p>
            </div>
            <div className="rounded-3xl border-t-8 border-orange-500 bg-orange-50 p-7">
              <h3 className="text-2xl font-black text-[#7c4a03]">3–5 Days</h3>
              <p className="mt-4 leading-7 text-slate-700">Time to explore different regions and add Ngorongoro Crater.</p>
            </div>
            <div className="rounded-3xl border-t-8 border-emerald-500 bg-emerald-50 p-7">
              <h3 className="text-2xl font-black text-[#7c4a03]">Longer Journey</h3>
              <p className="mt-4 leading-7 text-slate-700">Combine the Serengeti with Zanzibar or cross into Kenya's Maasai Mara.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-[#fef3e7]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
            <div className="flex items-start gap-5">
              <div className="text-4xl">🛡️</div>
              <div>
                <p className="font-bold uppercase tracking-widest text-emerald-700">Travel smart</p>
                <h2 className="mt-2 text-3xl font-black text-[#7c4a03]">Practical safety advice</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Bring neutral-colored clothing, warm layers for cold
                  early-morning game drives, sun protection, binoculars,
                  and a camera or phone with plenty of storage. Always
                  follow your guide's instructions around wildlife, and
                  confirm park fees and permit costs with your operator
                  before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TANZANIA NETWORK */}
      <section className="bg-gradient-to-br from-[#064e3b] to-[#047857] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-200">Explore Tanzania</p>
          <h2 className="mt-3 text-4xl font-black">The Serengeti is only one part of the journey</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
            Tanzania offers wildlife, beaches, islands and cultural
            experiences far beyond the Serengeti. Use it as one gateway
            into a much wider travel network.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/guides/tanzania" className="rounded-2xl bg-white px-6 py-4 font-black text-emerald-800 transition hover:bg-emerald-50">🇹🇿 Tanzania Guide</Link>
            <Link href="/guides/tanzania/zanzibar" className="rounded-2xl bg-orange-400 px-6 py-4 font-black text-white transition hover:bg-orange-500">🏝️ Zanzibar</Link>
            <Link href="/guides" className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black backdrop-blur transition hover:bg-white/20">🌍 All Travel Guides</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-50">Ready to plan your Serengeti trip?</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Compare verified operators. Book with confidence.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Compare verified safari operators, camps, and stays — and
            message them directly, free of charge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/safari" className="rounded-2xl bg-[#7c4a03] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#5c3702]">🦁 Browse Safaris on OSARE</Link>
            <Link href="/" className="rounded-2xl bg-white px-8 py-4 font-black text-orange-700 shadow-xl transition hover:bg-orange-50">🏠 Back to eaSafariRoutes</Link>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-[#7c4a03] px-6 py-8 text-center text-sm text-orange-100">
        <p>© {new Date().getFullYear()} eaSafariRoutes — East Africa Travel, Routes &amp; Discovery</p>
      </section>
    </main>
  )
}
