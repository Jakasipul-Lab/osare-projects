import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Zanzibar Travel Guide — Beaches, Stone Town, Spices & Islands | OSARE',
  description:
    'Explore Zanzibar, Tanzania with practical travel information about Stone Town, beaches, spice tours, food, culture, getting there from Dar es Salaam and where to stay.',
  path: '/guides/tanzania/zanzibar',
})

export default function ZanzibarPage() {
  return (
    <main className="min-h-screen bg-[#f5fbfb] text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c4a6e] via-[#0891b2] to-[#22c3d4] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🇹🇿 TANZANIA
            </span>
            <span className="rounded-full bg-orange-400 px-4 py-2 text-white">
              🏝️ SPICE ISLAND
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🌊 INDIAN OCEAN
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-100">
                Tanzania's island paradise
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                Zanzibar
                <span className="block text-orange-300">Travel Guide</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50 sm:text-xl">
                White-sand beaches, turquoise water, the winding streets of
                Stone Town, and centuries of Swahili, Arab and Persian
                history all come together on this small island off the
                Tanzanian coast.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/search"
                  className="rounded-2xl bg-orange-400 px-7 py-4 font-black text-white shadow-xl transition hover:bg-orange-500"
                >
                  🔎 Search East Africa
                </Link>

                <Link
                  href="/guides"
                  className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20"
                >
                  🌍 Explore Travel Guides
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🏖️</div>
                  <h3 className="mt-2 font-black">Beaches</h3>
                  <p className="mt-1 text-sm text-cyan-50">
                    Powder-white sand and calm, warm water.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🕌</div>
                  <h3 className="mt-2 font-black">Stone Town</h3>
                  <p className="mt-1 text-sm text-cyan-50">
                    A UNESCO World Heritage old town of narrow streets and carved doors.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🌶️</div>
                  <h3 className="mt-2 font-black">Spices</h3>
                  <p className="mt-1 text-sm text-cyan-50">
                    Cloves, cinnamon and nutmeg grown across the island.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200"
          >
            🏠 Home
          </Link>

          <Link
            href="/search"
            className="rounded-full bg-cyan-50 px-5 py-2 font-semibold text-cyan-800 transition hover:bg-cyan-100"
          >
            🔎 Search
          </Link>

          <Link
            href="/guides"
            className="rounded-full bg-yellow-50 px-5 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-100"
          >
            📚 Travel Guides
          </Link>

          <Link
            href="/guides/tanzania"
            className="rounded-full bg-emerald-50 px-5 py-2 font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            🇹🇿 Tanzania
          </Link>

          <Link
            href="/guides/tanzania/dar-es-salaam"
            className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100"
          >
            🏙️ Dar es Salaam
          </Link>

          <Link
            href="/guides/kenya"
            className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-800 transition hover:bg-red-100"
          >
            🇰🇪 Kenya
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#fff8e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="font-bold uppercase tracking-widest text-cyan-700">
                Welcome to Zanzibar
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
                An island shaped by trade and the sea
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Zanzibar is an archipelago off the coast of mainland
                Tanzania, made up of Unguja (the main island most people
                mean by "Zanzibar") and Pemba to the north.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                For centuries it sat at the crossroads of African, Arab,
                Persian and Indian trade routes, and that history is still
                visible today in Stone Town's architecture, its food, and
                the languages spoken on the island.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                For most travelers, Zanzibar is combined with a mainland
                safari or with Dar es Salaam — beaches and island life after
                (or before) time spent inland.
              </p>
            </div>

            <div className="rounded-3xl bg-[#0c4a6e] p-8 text-white shadow-xl">
              <div className="text-5xl">🇹🇿</div>

              <h3 className="mt-5 text-2xl font-black">
                What makes Zanzibar special?
              </h3>

              <ul className="mt-5 space-y-4 text-cyan-50">
                <li>✓ White-sand beaches and warm ocean</li>
                <li>✓ Stone Town's UNESCO-listed old city</li>
                <li>✓ Spice farms and spice tours</li>
                <li>✓ Swahili, Arab and Persian history</li>
                <li>✓ Snorkeling and diving reefs</li>
                <li>✓ Easy connection to Dar es Salaam</li>
                <li>✓ A relaxed pace after a mainland safari</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-cyan-700">
            Why visit Zanzibar?
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
            An island for slowing down
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Whether you come for the beaches, the history, or both, Zanzibar
            rewards travelers who give themselves a few unhurried days.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🏖️',
                title: 'Beach Life',
                text: 'Calm, warm, shallow water and some of East Africa\'s best beaches.',
                bg: 'bg-cyan-50',
              },
              {
                icon: '🕌',
                title: 'Stone Town',
                text: 'Narrow alleys, carved doors, markets and centuries of history.',
                bg: 'bg-yellow-50',
              },
              {
                icon: '🌶️',
                title: 'Spice Tours',
                text: 'Walk through farms growing cloves, vanilla, cinnamon and more.',
                bg: 'bg-orange-50',
              },
              {
                icon: '🤿',
                title: 'Snorkeling & Diving',
                text: 'Coral reefs and marine life just offshore.',
                bg: 'bg-emerald-50',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl ${item.bg} p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black text-[#0c4a6e]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[#eef9fa]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-cyan-700">
            Explore the island
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
            Different sides of Zanzibar
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Stone Town',
                icon: '🏛️',
                text: 'The historic heart of Zanzibar, with markets, museums, restaurants and the old fort.',
              },
              {
                title: 'Nungwi',
                icon: '🌅',
                text: 'A popular beach area in the north known for nightlife, diving and sunset views.',
              },
              {
                title: 'Kendwa',
                icon: '🏖️',
                text: 'Wide beaches close to Nungwi, popular for full-moon parties and swimming.',
              },
              {
                title: 'Paje',
                icon: '🪁',
                text: 'A beach town on the east coast known for kitesurfing and a laid-back atmosphere.',
              },
              {
                title: 'Jambiani',
                icon: '🐚',
                text: 'A quieter east coast fishing village with long stretches of beach.',
              },
              {
                title: 'Jozani Forest',
                icon: '🐒',
                text: 'Home to the red colobus monkey and a mangrove boardwalk, inland from the coast.',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl"
              >
                <div className="text-4xl">{area.icon}</div>
                <h3 className="mt-4 text-xl font-black text-[#0c4a6e]">
                  {area.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE & HISTORY */}
      <section className="bg-gradient-to-br from-[#fff7d6] to-[#fef3c7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-[#b45309] p-8 text-white shadow-xl">
              <div className="text-6xl">📜</div>
              <h2 className="mt-5 text-3xl font-black">
                Centuries of history
              </h2>
              <p className="mt-4 leading-7 text-orange-50">
                Zanzibar was once a powerful sultanate and a major trading
                post for spices, ivory and, for a darker period of its
                history, the slave trade. That layered past shaped the mix
                of cultures still visible on the island today.
              </p>
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-orange-700">
                Discover the past
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
                Places and experiences to explore
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    title: "House of Wonders",
                    text: 'A landmark building in Stone Town reflecting the island\'s sultanate history.',
                  },
                  {
                    title: 'Old Slave Market',
                    text: "A memorial and museum documenting Zanzibar's role in the East African slave trade.",
                  },
                  {
                    title: 'Old Fort',
                    text: 'A historic fortification near the seafront, now used for markets and events.',
                  },
                  {
                    title: "Forodhani Gardens",
                    text: 'A seafront park known for its evening food market.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-black text-[#0c4a6e]">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">
            Taste Zanzibar
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
            Food you should discover on the island
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Zanzibari food blends African, Arab, Indian and Persian
            influences, built around fresh seafood and locally grown spices.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['🍕', 'Zanzibar Pizza', 'A popular street-food snack sold in Stone Town and Forodhani Gardens.'],
              ['🐟', 'Seafood', 'Fresh fish, octopus, prawns and lobster from the surrounding ocean.'],
              ['🍛', 'Biryani & Pilau', 'Spiced rice dishes reflecting the island\'s Indian and Arab influences.'],
              ['🌶️', 'Local Spices', 'Cloves, cinnamon, nutmeg and vanilla flavour much of the local cooking.'],
              ['🥥', 'Coconut Dishes', 'Coconut milk and cream appear in many Swahili coastal recipes.'],
              ['🍢', 'Mishkaki', 'Grilled meat skewers, a common street-food choice.'],
              ['🍌', 'Urojo (Zanzibar Mix)', 'A tangy street-food soup unique to the island.'],
              ['☕', 'Spiced Tea & Coffee', 'Tea and coffee flavoured with local spices.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black text-[#0c4a6e]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="bg-[#0c4a6e] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-300">
            Things to do
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Build your own Zanzibar experience
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['🏖️', 'Beach Day', 'Relax by the Indian Ocean on white sand.'],
              ['🕌', 'Stone Town Walk', 'Wander the old town\'s alleys and markets.'],
              ['🌶️', 'Spice Tour', 'Visit a working spice farm outside town.'],
              ['🤿', 'Snorkeling', 'Explore coral reefs and marine life.'],
              ['⛵', 'Sunset Dhow Cruise', 'Sail a traditional wooden boat at sunset.'],
              ['🏝️', 'Prison Island', 'Visit giant tortoises just offshore from Stone Town.'],
              ['🐒', 'Jozani Forest', 'See red colobus monkeys in their natural habitat.'],
              ['🪁', 'Kitesurfing', 'Try the wind and waves off the east coast at Paje.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cyan-50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="bg-[#eef9fa]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-cyan-700">
              Getting there
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
              Reaching Zanzibar
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Zanzibar is most commonly reached from Dar es Salaam, either by
              air or by sea, or with a direct international flight.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">✈️</div>
              <h3 className="mt-4 text-xl font-black text-[#0c4a6e]">
                By Air
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Abeid Amani Karume International Airport takes short flights
                from Dar es Salaam (around 20 minutes) as well as direct
                international flights from several countries.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">⛴️</div>
              <h3 className="mt-4 text-xl font-black text-[#0c4a6e]">
                By Ferry
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                High-speed ferries run between Dar es Salaam and Stone Town,
                taking roughly 1.5 to 2 hours depending on the operator and
                conditions.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🚕</div>
              <h3 className="mt-4 text-xl font-black text-[#0c4a6e]">
                Getting Around
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Taxis, private transfers and tour operators are the easiest
                way to reach beach areas from Stone Town or the airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">
            Continue your journey
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
            Where can you go from Zanzibar?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Zanzibar pairs naturally with a wider Tanzania or East Africa
            itinerary.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Zanzibar → Dar es Salaam', '🏙️', 'Return to the mainland by ferry or short flight.'],
              ['Zanzibar → Arusha', '🦁', 'Connect toward northern Tanzania and safari country.'],
              ['Zanzibar → Pemba', '🏝️', 'Visit the quieter sister island to the north.'],
              ['Zanzibar → Moshi', '⛰️', 'Continue toward Mount Kilimanjaro country.'],
              ['Zanzibar → Mombasa', '🌊', 'Continue north along the East African coast.'],
              ['Zanzibar → Nairobi', '🇰🇪', 'Connect Tanzania with Kenya.'],
            ].map(([route, icon, text]) => (
              <div
                key={route}
                className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-cyan-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-black text-[#0c4a6e]">{route}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#f97316] to-[#fb923c] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black">
                  Looking for transport or travel options?
                </h3>
                <p className="mt-2 text-orange-50">
                  Use the eaSafariRoutes search to explore your journey
                  across East Africa.
                </p>
              </div>

              <Link
                href="/search"
                className="rounded-2xl bg-white px-7 py-4 text-center font-black text-orange-700 transition hover:bg-orange-50"
              >
                Search Routes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION */}
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-orange-600">
            Where to stay
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
            Choose an area that matches your trip
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Stone Town',
                icon: '🏛️',
                text: 'Best for history, culture, restaurants and easy access to the ferry and airport.',
              },
              {
                title: 'North Coast (Nungwi & Kendwa)',
                icon: '🌅',
                text: 'Popular for nightlife, diving, and calm swimming beaches.',
              },
              {
                title: 'East Coast (Paje & Jambiani)',
                icon: '🪁',
                text: 'A choice for a quieter, more laid-back beach stay, or kitesurfing.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-black text-[#0c4a6e]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL PLANS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-cyan-700">
            Simple trip ideas
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#0c4a6e]">
            How long should you spend in Zanzibar?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border-t-8 border-cyan-500 bg-cyan-50 p-7">
              <h3 className="text-2xl font-black text-[#0c4a6e]">1–2 Days</h3>
              <p className="mt-4 leading-7 text-slate-700">
                A short stop to explore Stone Town and get a taste of the
                beaches nearby.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-orange-500 bg-orange-50 p-7">
              <h3 className="text-2xl font-black text-[#0c4a6e]">3–5 Days</h3>
              <p className="mt-4 leading-7 text-slate-700">
                Combine Stone Town with proper beach time on the north or
                east coast, plus a spice tour.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-emerald-500 bg-emerald-50 p-7">
              <h3 className="text-2xl font-black text-[#0c4a6e]">
                Longer Journey
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Combine Zanzibar with Dar es Salaam, a mainland safari, or
                Mount Kilimanjaro for a fuller Tanzania trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-[#eef9fa]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
            <div className="flex items-start gap-5">
              <div className="text-4xl">🛡️</div>

              <div>
                <p className="font-bold uppercase tracking-widest text-cyan-700">
                  Travel smart
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#0c4a6e]">
                  Practical safety advice
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Zanzibar is a predominantly Muslim island, so modest
                  dress is appreciated away from the beach, especially in
                  Stone Town. Use sun protection, stay hydrated, use
                  reputable tour operators for water activities, and take
                  normal precautions with valuables, same as any popular
                  travel destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TANZANIA NETWORK */}
      <section className="bg-gradient-to-br from-[#064e3b] to-[#047857] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-200">
            Explore Tanzania
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Zanzibar is only one part of the journey
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
            Tanzania offers beaches, islands, wildlife, mountains, cities
            and cultural experiences. Use Zanzibar as one gateway into a
            much wider travel network.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/guides/tanzania"
              className="rounded-2xl bg-white px-6 py-4 font-black text-emerald-800 transition hover:bg-emerald-50"
            >
              🇹🇿 Tanzania Guide
            </Link>

            <Link
              href="/guides/tanzania/dar-es-salaam"
              className="rounded-2xl bg-orange-400 px-6 py-4 font-black text-white transition hover:bg-orange-500"
            >
              🏙️ Dar es Salaam
            </Link>

            <Link
              href="/guides"
              className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black backdrop-blur transition hover:bg-white/20"
            >
              🌍 All Travel Guides
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-50">
            Your East Africa journey starts here
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Find your route. Find your destination. Find your adventure.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Explore travel information and search routes across East Africa
            with eaSafariRoutes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/search"
              className="rounded-2xl bg-[#0c4a6e] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#083a56]"
            >
              🔎 Search East Africa
            </Link>

            <Link
              href="/"
              className="rounded-2xl bg-white px-8 py-4 font-black text-orange-700 shadow-xl transition hover:bg-orange-50"
            >
              🏠 Back to eaSafariRoutes
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-[#0c4a6e] px-6 py-8 text-center text-sm text-cyan-100">
        <p>
          © {new Date().getFullYear()} eaSafariRoutes — East Africa Travel,
          Routes &amp; Discovery
        </p>
      </section>

    </main>
  )
}
