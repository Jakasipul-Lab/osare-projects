import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Dar es Salaam Travel Guide — Beaches, Culture, Food, Transport & Tanzania Travel | OSARE',
  description:
    'Explore Dar es Salaam, Tanzania with practical information about beaches, Swahili culture, food, markets, transport, accommodation, islands, Zanzibar connections and travel across Tanzania.',
  path: '/guides/tanzania/dar-es-salaam',
})

export default function DarEsSalaamPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#063b4c] via-[#087e8b] to-[#18a6a6] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🇹🇿 TANZANIA
            </span>
            <span className="rounded-full bg-orange-400 px-4 py-2 text-white">
              🌊 INDIAN OCEAN
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🌴 EAST AFRICA
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-100">
                Coastal Tanzania
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                Dar es Salaam
                <span className="block text-orange-300">
                  Travel Guide
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50 sm:text-xl">
                Discover Tanzania's energetic coastal city — a gateway to
                beaches, islands, Swahili culture, local food, business,
                transport and unforgettable journeys across East Africa.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/search"
                  className="rounded-2xl bg-orange-400 px-7 py-4 font-bold text-white shadow-lg transition hover:bg-orange-500"
                >
                  🔎 Search East Africa
                </Link>

                <Link
                  href="/guides"
                  className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  🌍 Explore Travel Guides
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🌊</div>
                  <h3 className="mt-2 font-bold">Indian Ocean</h3>
                  <p className="mt-1 text-sm text-cyan-50">
                    Beaches, islands and coastal experiences.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🕌</div>
                  <h3 className="mt-2 font-bold">Swahili Culture</h3>
                  <p className="mt-1 text-sm text-cyan-50">
                    History, food, markets and coastal traditions.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🚌</div>
                  <h3 className="mt-2 font-bold">Travel Gateway</h3>
                  <p className="mt-1 text-sm text-cyan-50">
                    Connect to Zanzibar, safari country and East Africa.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🍛</div>
                  <h3 className="mt-2 font-bold">Coastal Food</h3>
                  <p className="mt-1 text-sm text-cyan-50">
                    Swahili flavours, seafood and street food.
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
            className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100"
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
            href="/guides/tanzania/zanzibar"
            className="rounded-full bg-blue-50 px-5 py-2 font-semibold text-blue-800 transition hover:bg-blue-100"
          >
            🏝️ Zanzibar
          </Link>

          <Link
            href="/guides/kenya"
            className="rounded-full bg-yellow-50 px-5 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-100"
          >
            🇰🇪 Kenya
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-600">
                Welcome to Dar es Salaam
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
                Where Tanzania meets the Indian Ocean
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Dar es Salaam is one of Tanzania's most important cities and
                a major gateway for travelers exploring the country's coast,
                islands, business centres and inland destinations.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                It is a city of contrasts: modern business districts sit
                alongside busy markets, historic neighbourhoods, fishing
                communities, beaches and streets filled with Swahili food and
                everyday life.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                For travelers, Dar es Salaam can be a destination itself —
                or the beginning of a much bigger East African journey.
              </p>
            </div>

            <div className="rounded-3xl bg-[#063b4c] p-8 text-white shadow-xl">
              <div className="text-5xl">🌴</div>
              <h3 className="mt-5 text-2xl font-black">
                A city worth exploring
              </h3>

              <ul className="mt-5 space-y-4 text-cyan-50">
                <li>✓ Indian Ocean beaches</li>
                <li>✓ Swahili culture and history</li>
                <li>✓ Markets and local shopping</li>
                <li>✓ Seafood and Tanzanian cuisine</li>
                <li>✓ Islands and marine experiences</li>
                <li>✓ Connections to Zanzibar</li>
                <li>✓ Connections across Tanzania</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-cyan-700">
              Why visit?
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
              Dar es Salaam has many sides
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              You can spend one day discovering the city and another day
              exploring the ocean, islands or the wider Tanzanian network.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🌊',
                title: 'Beaches',
                text: 'Relax on the coast or discover nearby islands and marine areas.',
                bg: 'bg-cyan-50',
              },
              {
                icon: '🕌',
                title: 'Culture',
                text: 'Experience Swahili history, architecture, markets and daily life.',
                bg: 'bg-orange-50',
              },
              {
                icon: '🍤',
                title: 'Food',
                text: 'Enjoy seafood, street food, Swahili dishes and Tanzanian flavours.',
                bg: 'bg-emerald-50',
              },
              {
                icon: '🚌',
                title: 'Gateway',
                text: 'Continue your journey toward Zanzibar and destinations across Tanzania.',
                bg: 'bg-blue-50',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl ${item.bg} p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black text-[#063b4c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[#eef9fa]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-cyan-700">
            Explore the city
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
            Different sides of Dar es Salaam
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'City Centre',
                icon: '🏙️',
                text: 'A central area for business, offices, shopping, historic buildings and everyday city life.',
              },
              {
                title: 'Kariakoo',
                icon: '🛍️',
                text: 'A busy commercial area where travelers can experience the energy of local markets and trade.',
              },
              {
                title: 'Kivukoni & Waterfront',
                icon: '⛵',
                text: 'A lively waterfront area with connections to boats, ferries, markets and the ocean.',
              },
              {
                title: 'Masaki & Oyster Bay',
                icon: '🌴',
                text: 'A more modern coastal side of the city with restaurants, accommodation and ocean views.',
              },
              {
                title: 'Kigamboni',
                icon: '🏖️',
                text: 'Across the water from the central city, with beaches and a more relaxed coastal atmosphere.',
              },
              {
                title: 'Msasani',
                icon: '🌅',
                text: 'A coastal district with restaurants, accommodation, local life and access to the shoreline.',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl"
              >
                <div className="text-4xl">{area.icon}</div>
                <h3 className="mt-4 text-xl font-black text-[#063b4c]">
                  {area.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEACHES & ISLANDS */}
      <section className="bg-gradient-to-br from-[#e0f7fa] to-[#fef3c7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-cyan-700">
                Ocean & islands
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
                The Indian Ocean is part of the experience
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Dar es Salaam is not only a busy city. Its coastline opens the
                door to beaches, islands, boats and marine experiences.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Travelers can explore coastal areas or arrange trips toward
                nearby islands such as Bongoyo and Mbudya.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['🏖️', 'Coco Beach', 'A popular coastal area for relaxing and enjoying the ocean atmosphere.'],
                ['🏝️', 'Bongoyo Island', 'A nearby island experience for travelers looking for a change from the city.'],
                ['🐠', 'Mbudya Island', 'An island option for beach and marine experiences.'],
                ['🌴', 'Kigamboni', 'A coastal area with beaches and a more relaxed atmosphere.'],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl bg-white/80 p-6 shadow-md"
                >
                  <div className="text-3xl">{icon}</div>
                  <h3 className="mt-3 font-black text-[#063b4c]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-[#f97316] p-8 text-white shadow-xl">
              <div className="text-6xl">🕌</div>
              <h2 className="mt-5 text-3xl font-black">
                Swahili culture
              </h2>
              <p className="mt-4 leading-7 text-orange-50">
                Dar es Salaam is deeply connected to the Swahili coast, where
                African, Arab and Indian Ocean influences have shaped food,
                language, architecture, trade and everyday life.
              </p>
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-orange-600">
                Culture & history
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
                Discover the city beyond the beaches
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    title: 'National Museum',
                    text: 'A place to learn more about Tanzanian history and heritage.',
                  },
                  {
                    title: 'Village Museum',
                    text: 'Explore traditional architecture and cultural heritage from different parts of Tanzania.',
                  },
                  {
                    title: 'Local Markets',
                    text: 'Markets provide a lively view of commerce, food and everyday Tanzanian life.',
                  },
                  {
                    title: 'Swahili Life',
                    text: 'Language, food, music and coastal traditions are part of the city experience.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-black text-[#063b4c]">
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
            Taste Tanzania
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
            Food you should discover in Dar es Salaam
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Dar es Salaam is a great place to experience Tanzanian and Swahili
            food, especially if you enjoy seafood, spices and street food.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['🍚', 'Pilau', 'A fragrant spiced rice dish.'],
              ['🍢', 'Mishkaki', 'Grilled meat skewers popular as street food.'],
              ['🐟', 'Seafood', 'Fresh coastal fish and seafood dishes.'],
              ['🥞', 'Chapati', 'A popular flatbread enjoyed across Tanzania.'],
              ['🍌', 'Plantain', 'Prepared in different ways across the region.'],
              ['🥥', 'Coconut dishes', 'A familiar flavour in Swahili coastal cooking.'],
              ['🍛', 'Ugali', 'A staple served with meat, vegetables or fish.'],
              ['☕', 'Tanzanian drinks', 'Enjoy local tea, coffee and refreshing juices.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black text-[#063b4c]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="bg-[#063b4c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-cyan-300">
            Things to do
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Build your own Dar es Salaam experience
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['🌊', 'Beach Day', 'Spend time by the Indian Ocean.'],
              ['🛍️', 'Markets', 'Explore local shopping and markets.'],
              ['🕌', 'Culture', 'Discover history and Swahili heritage.'],
              ['⛵', 'Island Trip', 'Explore nearby islands and marine areas.'],
              ['🍤', 'Food Tour', 'Taste coastal and Tanzanian cuisine.'],
              ['📸', 'City Exploring', 'Discover different neighbourhoods and city life.'],
              ['🌅', 'Sunset', 'Enjoy the changing colours of the coast.'],
              ['🚌', 'Continue Travelling', 'Use Dar as your gateway to other destinations.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cyan-50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="bg-[#eef9fa]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-cyan-700">
              Getting around
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
              Dar es Salaam is a major travel gateway
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Depending on your destination, travelers can use flights,
              buses, taxis, ride services, ferries and other local transport
              options.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">✈️</div>
              <h3 className="mt-4 text-xl font-black text-[#063b4c]">
                Airport
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Julius Nyerere International Airport connects Dar es Salaam
                with destinations in Tanzania, Africa and beyond.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🚌</div>
              <h3 className="mt-4 text-xl font-black text-[#063b4c]">
                Bus & Road
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Road travel connects Dar es Salaam with many destinations
                across Tanzania and neighbouring countries.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">⛴️</div>
              <h3 className="mt-4 text-xl font-black text-[#063b4c]">
                Ferry & Sea
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                The coast also provides important connections toward Zanzibar
                and other coastal destinations.
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

          <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
            Where can you go from Dar es Salaam?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Dar es Salaam can be the beginning of a much larger East African
            adventure.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Dar es Salaam → Zanzibar', '🏝️', 'Move from mainland Tanzania to the islands.'],
              ['Dar es Salaam → Arusha', '🦁', 'Continue toward northern Tanzania and safari country.'],
              ['Dar es Salaam → Moshi', '⛰️', 'Travel toward Mount Kilimanjaro country.'],
              ['Dar es Salaam → Mombasa', '🌊', 'Continue north along the East African coast.'],
              ['Dar es Salaam → Nairobi', '🇰🇪', 'Connect Tanzania with Kenya.'],
              ['Dar es Salaam → Southern Tanzania', '🐘', 'Explore more of Tanzania beyond the major cities.'],
            ].map(([route, icon, text]) => (
              <div
                key={route}
                className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-cyan-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-black text-[#063b4c]">{route}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
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
                  Use the eaSafariRoutes search to explore your journey across
                  East Africa.
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

      {/* ZANZIBAR CONNECTION */}
      <section className="bg-gradient-to-br from-[#0e7490] to-[#155e75] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="font-bold uppercase tracking-widest text-cyan-200">
                Mainland to islands
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Dar es Salaam and Zanzibar
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-cyan-50">
                For many travelers, Dar es Salaam and Zanzibar form part of
                the same Tanzania journey. The mainland city can be combined
                with the islands for a trip that brings together urban life,
                Swahili culture, beaches and ocean experiences.
              </p>

              <Link
                href="/guides/tanzania/zanzibar"
                className="mt-7 inline-block rounded-2xl bg-orange-400 px-7 py-4 font-black text-white transition hover:bg-orange-500"
              >
                Explore Zanzibar →
              </Link>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <div className="text-6xl">🏝️</div>
              <h3 className="mt-5 text-2xl font-black">
                Plan a mainland + island journey
              </h3>
              <p className="mt-3 leading-7 text-cyan-50">
                Dar es Salaam can be an important starting point for travelers
                combining Tanzania's mainland with Zanzibar.
              </p>
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

          <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
            Choose an area that matches your trip
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'City Centre',
                icon: '🏙️',
                text: 'Useful for business, central sightseeing and access to the heart of the city.',
              },
              {
                title: 'Masaki & Oyster Bay',
                icon: '🌴',
                text: 'A popular coastal side of the city with restaurants, accommodation and a modern atmosphere.',
              },
              {
                title: 'Kigamboni',
                icon: '🏖️',
                text: 'A choice for travelers interested in a more coastal and relaxed environment.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-black text-[#063b4c]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
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

          <h2 className="mt-3 text-4xl font-black text-[#063b4c]">
            How long should you spend in Dar es Salaam?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border-t-8 border-cyan-500 bg-cyan-50 p-7">
              <h3 className="text-2xl font-black text-[#063b4c]">
                1 Day
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Explore the city, enjoy local food, discover the waterfront
                and experience the coastal atmosphere.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-orange-500 bg-orange-50 p-7">
              <h3 className="text-2xl font-black text-[#063b4c]">
                2–3 Days
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Add beaches, markets, cultural attractions and an island or
                coastal experience.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-emerald-500 bg-emerald-50 p-7">
              <h3 className="text-2xl font-black text-[#063b4c]">
                Longer Journey
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Combine Dar es Salaam with Zanzibar, safari destinations,
                mountains or other East African cities.
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

                <h2 className="mt-2 text-3xl font-black text-[#063b4c]">
                  Practical safety advice
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  As in any major city, travelers should take normal
                  precautions with valuables, transport, money and personal
                  belongings. Use reputable transport providers, stay aware
                  of your surroundings and follow local advice.
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
            Dar es Salaam is only one part of the journey
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
            Tanzania offers beaches, islands, wildlife, mountains, cities and
            cultural experiences. Use Dar es Salaam as one gateway into a
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
              href="/guides/tanzania/zanzibar"
              className="rounded-2xl bg-orange-400 px-6 py-4 font-black text-white transition hover:bg-orange-500"
            >
              🏝️ Zanzibar
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
              className="rounded-2xl bg-[#063b4c] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#052f3d]"
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
      <section className="bg-[#063b4c] px-6 py-8 text-center text-sm text-cyan-100">
        <p>
          © {new Date().getFullYear()} eaSafariRoutes — East Africa Travel,
          Routes &amp; Discovery
        </p>
      </section>

    </main>
  )
}
