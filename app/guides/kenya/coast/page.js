import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Kenyan Coast Travel Guide — Mombasa, Diani, Watamu & Lamu | OSARE',
  description:
    "Plan a trip to Kenya's coast: Mombasa, Diani Beach, Watamu and Lamu — when to go, how to get there, beaches, culture, food, and how to pair it with a safari.",
  path: '/guides/kenya/coast',
})

export default function KenyanCoastGuide() {
  return (
    <main className="min-h-screen bg-[#f4faf9] text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e4d5c] via-[#1a8fa3] to-[#38bdc7] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">🇰🇪 KENYA</span>
            <span className="rounded-full bg-orange-400 px-4 py-2 text-white">🏖️ COAST</span>
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">🌊 INDIAN OCEAN</span>
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-teal-100">
            Beaches, Swahili culture & island escapes
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            The Kenyan Coast
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-teal-50 sm:text-xl">
            From the historic streets of Mombasa's Old Town to the white
            sands of Diani, the marine parks of Watamu, and the
            car-free island of Lamu — Kenya's coastline is where a
            safari trip goes to unwind.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/safari" className="rounded-2xl bg-orange-400 px-7 py-4 font-black text-white shadow-xl transition hover:bg-orange-500">
              🔎 Search East Africa
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
          <Link href="/safari" className="rounded-full bg-teal-50 px-5 py-2 font-semibold text-teal-800 transition hover:bg-teal-100">🔎 Search</Link>
          <Link href="/guides" className="rounded-full bg-yellow-50 px-5 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-100">📚 Travel Guides</Link>
          <Link href="/guides/kenya" className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-800 transition hover:bg-red-100">🇰🇪 Kenya</Link>
          <Link href="/guides/maasai-mara" className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100">🦓 Maasai Mara</Link>
          <Link href="/guides/tanzania/zanzibar" className="rounded-full bg-cyan-50 px-5 py-2 font-semibold text-cyan-800 transition hover:bg-cyan-100">🏝️ Zanzibar</Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-teal-700">Welcome to the coast</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black text-[#0e4d5c]">
            Where Swahili culture meets the Indian Ocean
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Kenya's coastline runs roughly 500km along the Indian Ocean,
            shaped by centuries of Swahili, Arab, Portuguese and Indian
            influence. It's a common second stop after a safari — warm
            water, historic towns, and a slower pace.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🏖️', title: 'Beaches', text: 'Long white-sand beaches from Diani to Watamu.' },
              { icon: '🕌', title: 'Swahili History', text: "Mombasa's Old Town and Lamu's UNESCO-listed streets." },
              { icon: '🐠', title: 'Marine Parks', text: 'Snorkeling and diving reefs at Watamu and Diani.' },
              { icon: '🌴', title: 'Island Life', text: 'Car-free Lamu Island for a slower, older pace of life.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-[#f0f9fa] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black text-[#0e4d5c]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[#eef8f8]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-teal-700">Explore the coast</p>
          <h2 className="mt-3 text-4xl font-black text-[#0e4d5c]">Pick your stretch of coastline</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Mombasa', icon: '🏙️', text: "Kenya's second city and coastal gateway, with historic Fort Jesus and Old Town." },
              { title: 'Diani Beach', icon: '🏖️', text: 'A long, popular white-sand beach south of Mombasa, with reef diving and watersports.' },
              { title: 'Watamu', icon: '🐢', text: 'A quieter beach town north of Mombasa, known for its marine national park and turtles.' },
              { title: 'Lamu Island', icon: '🕌', text: 'A car-free, UNESCO-listed Swahili town — donkeys and dhows instead of traffic.' },
            ].map((area) => (
              <div key={area.title} className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl">
                <div className="text-4xl">{area.icon}</div>
                <h3 className="mt-4 text-xl font-black text-[#0e4d5c]">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="bg-[#0e4d5c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-300">Things to do</p>
          <h2 className="mt-3 text-4xl font-black">Build your own coastal escape</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['🏖️', 'Beach Day', 'Relax on Diani or Watamu\'s white sand.', '/safari'],
              ['🤿', 'Snorkeling & Diving', 'Explore Watamu Marine Park or Diani\'s reef.', '/safari'],
              ['⛵', 'Dhow Sailing', 'Sail a traditional wooden boat at sunset.', '/local'],
              ['🏛️', 'Old Town Walk', "Explore Mombasa's historic Old Town and Fort Jesus.", '/local'],
              ['🕌', 'Lamu Island Trip', 'Wander car-free streets and Swahili architecture.', '/local'],
              ['🐢', 'Turtle Watching', 'See nesting sea turtles around Watamu.', '/local'],
              ['🍤', 'Coastal Food Tour', 'Try Swahili dishes built around seafood and coconut.', '/local'],
              ['🚌', 'Continue Travelling', 'Combine the coast with a safari or island trip.', '/safari'],
            ].map(([icon, title, text, href]) => (
              <Link key={title} href={href} className="block rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-teal-50">{text}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-orange-300">
                  {href === '/local' ? 'Find local experiences →' : 'Find listings →'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="bg-[#eef8f8]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-teal-700">Getting there</p>
            <h2 className="mt-3 text-4xl font-black text-[#0e4d5c]">Reaching the coast</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">✈️</div>
              <h3 className="mt-4 text-xl font-black text-[#0e4d5c]">By Air</h3>
              <p className="mt-3 leading-7 text-slate-600">Moi International Airport (Mombasa) has direct flights from Nairobi and several international routes; smaller airstrips serve Diani, Watamu and Lamu.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🚌</div>
              <h3 className="mt-4 text-xl font-black text-[#0e4d5c]">By Road</h3>
              <p className="mt-3 leading-7 text-slate-600">About 480km / roughly 7–8 hours by road from Nairobi to Mombasa on a paved highway.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🚆</div>
              <h3 className="mt-4 text-xl font-black text-[#0e4d5c]">By Train</h3>
              <p className="mt-3 leading-7 text-slate-600">The Madaraka Express runs daily between Nairobi and Mombasa, a comfortable alternative to the road.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">Continue your journey</p>
          <h2 className="mt-3 text-4xl font-black text-[#0e4d5c]">Where can you go from the coast?</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Coast → Nairobi', '🏙️', 'Return inland by road, rail or a short flight.', '/guides/kenya/nairobi'],
              ['Coast → Maasai Mara', '🦓', 'Combine beach time with a classic safari.', '/guides/maasai-mara'],
              ['Coast → Zanzibar', '🏝️', 'Continue island-hopping into Tanzania.', '/guides/tanzania/zanzibar'],
              ['Coast → Amboseli', '🐘', 'Add a second Kenyan reserve, famous for elephants.', '/guides/kenya/amboseli'],
              ['Coast → Dar es Salaam', '🌊', 'Continue south along the East African coast.', '/guides/tanzania/dar-es-salaam'],
              ['Coast → Kenya Guide', '🇰🇪', 'See the full picture of travel in Kenya.', '/guides/kenya'],
            ].map(([route, icon, text, href]) => (
              <Link key={route} href={href} className="block rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-teal-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-black text-[#0e4d5c]">{route}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#f97316] to-[#fb923c] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black">Looking for transport or stays?</h3>
                <p className="mt-2 text-orange-50">Use the eaSafariRoutes search to explore your journey across East Africa.</p>
              </div>
              <Link href="/safari" className="rounded-2xl bg-white px-7 py-4 text-center font-black text-orange-700 transition hover:bg-orange-50">Search Routes →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION */}
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">Where to stay</p>
          <h2 className="mt-3 text-4xl font-black text-[#0e4d5c]">Choose your stretch of coast</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🏙️</div>
              <h3 className="mt-4 text-xl font-black text-[#0e4d5c]">Mombasa</h3>
              <p className="mt-3 leading-7 text-slate-600">Best for history, city life and easy transport connections.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🏖️</div>
              <h3 className="mt-4 text-xl font-black text-[#0e4d5c]">Diani & Watamu</h3>
              <p className="mt-3 leading-7 text-slate-600">Best for beach resorts, diving and a relaxed holiday pace.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🕌</div>
              <h3 className="mt-4 text-xl font-black text-[#0e4d5c]">Lamu</h3>
              <p className="mt-3 leading-7 text-slate-600">Best for a quieter, more cultural and historic stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL PLANS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-teal-700">Simple trip ideas</p>
          <h2 className="mt-3 text-4xl font-black text-[#0e4d5c]">How long should you spend on the coast?</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border-t-8 border-cyan-500 bg-cyan-50 p-7">
              <h3 className="text-2xl font-black text-[#0e4d5c]">2–3 Days</h3>
              <p className="mt-4 leading-7 text-slate-700">A short beach break in Diani or Watamu after a safari.</p>
            </div>
            <div className="rounded-3xl border-t-8 border-orange-500 bg-orange-50 p-7">
              <h3 className="text-2xl font-black text-[#0e4d5c]">4–6 Days</h3>
              <p className="mt-4 leading-7 text-slate-700">Combine Mombasa's history with beach time and a Lamu side trip.</p>
            </div>
            <div className="rounded-3xl border-t-8 border-emerald-500 bg-emerald-50 p-7">
              <h3 className="text-2xl font-black text-[#0e4d5c]">Longer Journey</h3>
              <p className="mt-4 leading-7 text-slate-700">Combine the coast with Maasai Mara, Amboseli or Zanzibar for a fuller East Africa trip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-[#eef8f8]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
            <div className="flex items-start gap-5">
              <div className="text-4xl">🛡️</div>
              <div>
                <p className="font-bold uppercase tracking-widest text-teal-700">Travel smart</p>
                <h2 className="mt-2 text-3xl font-black text-[#0e4d5c]">Practical safety advice</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Kenya's coast has a strong Muslim influence, so modest
                  dress is appreciated away from the beach, especially in
                  Old Town and Lamu. Use sun protection, stay hydrated,
                  and book snorkeling or diving trips through reputable
                  operators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KENYA NETWORK */}
      <section className="bg-gradient-to-br from-[#7c4a03] to-[#b5651d] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-200">Explore Kenya</p>
          <h2 className="mt-3 text-4xl font-black">The coast is only one part of the journey</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-orange-50">
            Kenya offers safaris, mountains, cities and coastline. Use the
            coast as one gateway into a much wider travel network.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/guides/kenya" className="rounded-2xl bg-white px-6 py-4 font-black text-orange-800 transition hover:bg-orange-50">🇰🇪 Kenya Guide</Link>
            <Link href="/guides/maasai-mara" className="rounded-2xl bg-teal-500 px-6 py-4 font-black text-white transition hover:bg-teal-600">🦓 Maasai Mara</Link>
            <Link href="/guides" className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black backdrop-blur transition hover:bg-white/20">🌍 All Travel Guides</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-50">Your East Africa journey starts here</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Find your route. Find your destination. Find your adventure.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Explore travel information and search routes across East
            Africa with eaSafariRoutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/safari" className="rounded-2xl bg-[#0e4d5c] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#0a3945]">🔎 Search East Africa</Link>
            <Link href="/" className="rounded-2xl bg-white px-8 py-4 font-black text-orange-700 shadow-xl transition hover:bg-orange-50">🏠 Back to eaSafariRoutes</Link>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-[#0e4d5c] px-6 py-8 text-center text-sm text-teal-100">
        <p>© {new Date().getFullYear()} eaSafariRoutes — East Africa Travel, Routes &amp; Discovery</p>
      </section>
    </main>
  )
}
