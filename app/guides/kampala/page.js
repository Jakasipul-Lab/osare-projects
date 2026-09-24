import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Kampala Travel Guide — Uganda, Culture, Food, Transport & East Africa Travel | OSARE',
  description:
    'Explore Kampala, Uganda with practical travel information about culture, food, markets, nightlife, transport, accommodation and journeys to Entebbe, Jinja, Kenya and Rwanda.',
  path: '/guides/uganda/kampala',
})

export default function KampalaPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7] text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123d2a] via-[#176b3a] to-[#2f8f46] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-bold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🇺🇬 UGANDA
            </span>

            <span className="rounded-full bg-yellow-400 px-4 py-2 text-[#123d2a]">
              🌿 PEARL OF AFRICA
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🌍 EAST AFRICA
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-100">
                Uganda's vibrant capital
              </p>

              <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                Kampala
                <span className="block text-yellow-300">
                  Travel Guide
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
                Discover Uganda's energetic capital — a city of hills,
                markets, music, food, culture, business and connections to
                some of East Africa's most exciting destinations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/search"
                  className="rounded-2xl bg-yellow-400 px-7 py-4 font-black text-[#123d2a] shadow-xl transition hover:bg-yellow-300"
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
                  <div className="text-3xl">🌿</div>
                  <h3 className="mt-2 font-black">Green City</h3>
                  <p className="mt-1 text-sm text-green-50">
                    Hills, greenery and tropical surroundings.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🎶</div>
                  <h3 className="mt-2 font-black">Culture & Music</h3>
                  <p className="mt-1 text-sm text-green-50">
                    Music, dance, art and everyday Ugandan life.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🍌</div>
                  <h3 className="mt-2 font-black">Ugandan Food</h3>
                  <p className="mt-1 text-sm text-green-50">
                    Local dishes, markets and fresh tropical flavours.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🚌</div>
                  <h3 className="mt-2 font-black">Travel Gateway</h3>
                  <p className="mt-1 text-sm text-green-50">
                    Connect to Entebbe, Jinja, Kenya, Rwanda and beyond.
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
            className="rounded-full bg-green-50 px-5 py-2 font-semibold text-green-800 transition hover:bg-green-100"
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
            href="/guides/uganda"
            className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-800 transition hover:bg-red-100"
          >
            🇺🇬 Uganda
          </Link>

          <Link
            href="/guides/kenya"
            className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100"
          >
            🇰🇪 Kenya
          </Link>

          <Link
            href="/guides/tanzania"
            className="rounded-full bg-cyan-50 px-5 py-2 font-semibold text-cyan-800 transition hover:bg-cyan-100"
          >
            🇹🇿 Tanzania
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#fff8e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">

            <div>
              <p className="font-bold uppercase tracking-widest text-green-700">
                Welcome to Kampala
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
                Uganda's lively capital
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Kampala is a busy, colourful and energetic city spread across
                a series of hills. It is Uganda's main urban centre and an
                important starting point for travelers exploring the country.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                The city brings together markets, restaurants, historic
                places, shopping, nightlife, business districts, religious
                sites and neighbourhoods with very different personalities.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                For travelers exploring East Africa, Kampala can also become
                an important connection point between Uganda, Kenya, Rwanda
                and Tanzania.
              </p>
            </div>

            <div className="rounded-3xl bg-[#123d2a] p-8 text-white shadow-xl">
              <div className="text-5xl">🇺🇬</div>

              <h3 className="mt-5 text-2xl font-black">
                What makes Kampala special?
              </h3>

              <ul className="mt-5 space-y-4 text-green-50">
                <li>✓ Hills and green surroundings</li>
                <li>✓ Ugandan culture and history</li>
                <li>✓ Local markets</li>
                <li>✓ Food and nightlife</li>
                <li>✓ Art and music</li>
                <li>✓ Easy access to Entebbe</li>
                <li>✓ Gateway to East Africa</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="font-bold uppercase tracking-widest text-green-700">
            Why visit Kampala?
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
            A city full of energy
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Kampala is not a city you simply pass through. Give yourself
            time to experience its food, people, neighbourhoods, markets and
            culture.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🌿',
                title: 'Green Kampala',
                text: 'Discover a city surrounded by tropical greenery and rolling hills.',
                bg: 'bg-green-50',
              },
              {
                icon: '🎨',
                title: 'Culture',
                text: 'Experience Ugandan art, music, traditions and everyday life.',
                bg: 'bg-yellow-50',
              },
              {
                icon: '🍛',
                title: 'Food',
                text: 'Try local dishes, street food and fresh tropical flavours.',
                bg: 'bg-orange-50',
              },
              {
                icon: '🌙',
                title: 'Nightlife',
                text: 'Restaurants, music and entertainment keep the city active after dark.',
                bg: 'bg-red-50',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl ${item.bg} p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-black text-[#123d2a]">
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
      <section className="bg-[#eef8ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="font-bold uppercase tracking-widest text-green-700">
            Explore the city
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
            Different sides of Kampala
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: 'Central Kampala',
                icon: '🏙️',
                text: 'The busy heart of the city with shops, offices, markets and everyday urban activity.',
              },
              {
                title: 'Kololo',
                icon: '🌳',
                text: 'A greener and quieter part of Kampala with embassies, residences, hotels and restaurants.',
              },
              {
                title: 'Ntinda',
                icon: '🍽️',
                text: 'A lively area with restaurants, businesses, accommodation and local city life.',
              },
              {
                title: 'Kisementi',
                icon: '☕',
                text: 'A popular area for restaurants, cafés, shopping and social activities.',
              },
              {
                title: 'Muyenga',
                icon: '🌅',
                text: 'A hillside area known for views, restaurants and a relaxed atmosphere.',
              },
              {
                title: 'Bugolobi',
                icon: '🏢',
                text: 'A modern commercial and residential area with restaurants and businesses.',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl"
              >
                <div className="text-4xl">{area.icon}</div>

                <h3 className="mt-4 text-xl font-black text-[#123d2a]">
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

      {/* CULTURE */}
      <section className="bg-gradient-to-br from-[#fff7d6] to-[#fef3c7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div className="rounded-3xl bg-[#b91c1c] p-8 text-white shadow-xl">
              <div className="text-6xl">🎭</div>

              <h2 className="mt-5 text-3xl font-black">
                Culture & heritage
              </h2>

              <p className="mt-4 leading-7 text-red-50">
                Kampala is a meeting point for different Ugandan cultures,
                languages, traditions and communities. Exploring the city
                means experiencing much more than its buildings and roads.
              </p>
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-red-700">
                Discover Uganda
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
                Places and experiences to explore
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {[
                  {
                    title: 'Kasubi Tombs',
                    text: 'A significant cultural and historical site connected with the Buganda Kingdom.',
                  },
                  {
                    title: 'Uganda Museum',
                    text: 'Learn more about Uganda's history, cultures and heritage.',
                  },
                  {
                    title: 'Owino Market',
                    text: 'A major marketplace offering a lively view of local commerce.',
                  },
                  {
                    title: 'Craft Markets',
                    text: 'Discover handmade products, art, clothing and souvenirs.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-black text-[#123d2a]">
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
            Taste Uganda
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
            Food you should discover in Kampala
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Kampala is a great place to discover Ugandan food alongside
            flavours brought by communities from across East Africa and
            beyond.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ['🍌', 'Matoke', 'A classic Ugandan dish made from cooking bananas.'],
              ['🥜', 'Groundnut Sauce', 'A rich sauce commonly served with local dishes.'],
              ['🍢', 'Rolex', 'A popular Ugandan street food combining chapati and eggs.'],
              ['🥩', 'Grilled Meat', 'Enjoy grilled meat and local barbecue-style dishes.'],
              ['🍠', 'Cassava', 'A familiar staple prepared in different ways.'],
              ['🐟', 'Fresh Fish', 'Fish dishes are popular across Uganda.'],
              ['🥔', 'Irish Potatoes', 'Commonly served with meat, vegetables or sauces.'],
              ['☕', 'Ugandan Coffee', 'Uganda is well known for producing coffee.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-3 font-black text-[#123d2a]">
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

      {/* THINGS TO DO */}
      <section className="bg-[#123d2a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="font-bold uppercase tracking-widest text-yellow-300">
            Things to do
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Build your Kampala experience
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              ['🏛️', 'History', 'Discover Uganda's cultural and historical heritage.'],
              ['🛍️', 'Markets', 'Explore local markets and shopping areas.'],
              ['🍛', 'Food', 'Taste Ugandan food and street food.'],
              ['🎶', 'Music', 'Experience Kampala's vibrant music scene.'],
              ['🎨', 'Art', 'Discover local artists and creative spaces.'],
              ['☕', 'Cafés', 'Relax in cafés and social spaces around the city.'],
              ['🌙', 'Nightlife', 'Enjoy restaurants, entertainment and nightlife.'],
              ['📸', 'City Exploring', 'Explore Kampala's hills and neighbourhoods.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-3 font-black">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-green-50">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ENTEBBE */}
      <section className="bg-[#eef8ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-widest text-green-700">
                Kampala & Entebbe
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
                Two important places for travelers
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Many international visitors entering Uganda will encounter
                Entebbe before Kampala. The two destinations can form part of
                the same Uganda journey.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Entebbe offers a more relaxed lakeside environment, while
                Kampala provides the energy of Uganda's capital.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <div className="text-5xl">✈️</div>

              <h3 className="mt-5 text-2xl font-black text-[#123d2a]">
                Entebbe International Airport
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Travelers can plan their onward journey between the airport,
                Entebbe and Kampala before continuing to other parts of
                Uganda or East Africa.
              </p>

              <Link
                href="/search"
                className="mt-6 inline-block rounded-2xl bg-green-700 px-6 py-3 font-black text-white transition hover:bg-green-800"
              >
                Search Routes →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="font-bold uppercase tracking-widest text-green-700">
            Getting around
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
            Moving around Kampala
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Kampala has a busy transport network. Depending on your journey,
            travelers may use buses, taxis, ride services, motorcycles,
            private vehicles and other local transport options.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border-t-8 border-green-600 bg-green-50 p-7">
              <div className="text-4xl">🚌</div>

              <h3 className="mt-4 text-xl font-black text-[#123d2a]">
                Buses
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Useful for longer journeys between Kampala and other cities
                and regions.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-yellow-500 bg-yellow-50 p-7">
              <div className="text-4xl">🏍️</div>

              <h3 className="mt-4 text-xl font-black text-[#123d2a]">
                Local Transport
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Local transport options are widely used for moving around the
                city and surrounding areas.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-red-600 bg-red-50 p-7">
              <div className="text-4xl">🚗</div>

              <h3 className="mt-4 text-xl font-black text-[#123d2a]">
                Private Transport
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Private vehicles and transfers can be useful for airport
                journeys and planned trips outside the city.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-[#fff8e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="font-bold uppercase tracking-widest text-red-700">
            Continue your journey
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
            Where can you go from Kampala?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Kampala is one of the important road travel hubs connecting
            Uganda with other parts of East Africa.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              ['Kampala → Entebbe', '✈️', 'Travel toward Uganda’s international airport and Lake Victoria.'],
              ['Kampala → Jinja', '🌊', 'Continue east toward the River Nile and Jinja.'],
              ['Kampala → Nairobi', '🇰🇪', 'Connect Uganda with Kenya and its capital city.'],
              ['Kampala → Mombasa', '🌊', 'Continue toward Kenya’s Indian Ocean coast.'],
              ['Kampala → Kigali', '🇷🇼', 'Travel south toward Rwanda and its capital.'],
              ['Kampala → Tanzania', '🇹🇿', 'Continue your East African journey toward Tanzania.'],
            ].map(([route, icon, text]) => (
              <div
                key={route}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-4 font-black text-[#123d2a]">
                  {route}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#176b3a] to-[#2f8f46] p-8 text-white shadow-xl">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>
                <h3 className="text-2xl font-black">
                  Looking for transport options?
                </h3>

                <p className="mt-2 text-green-50">
                  Search East African routes through eaSafariRoutes.
                </p>
              </div>

              <Link
                href="/search"
                className="rounded-2xl bg-yellow-400 px-7 py-4 text-center font-black text-[#123d2a] transition hover:bg-yellow-300"
              >
                Search Routes →
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* UGANDA JOURNEY */}
      <section className="bg-gradient-to-br from-[#166534] to-[#15803d] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">

            <div>
              <p className="font-bold uppercase tracking-widest text-yellow-300">
                Explore Uganda
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Kampala is only the beginning
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
                Uganda offers much more than its capital. From Lake Victoria
                and Jinja to national parks, wildlife destinations and
                mountain regions, there is a larger journey waiting beyond
                Kampala.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">

                <Link
                  href="/guides/uganda"
                  className="rounded-2xl bg-white px-6 py-4 font-black text-green-800 transition hover:bg-green-50"
                >
                  🇺🇬 Uganda Guide
                </Link>

                <Link
                  href="/guides"
                  className="rounded-2xl bg-yellow-400 px-6 py-4 font-black text-[#123d2a] transition hover:bg-yellow-300"
                >
                  🌍 All Travel Guides
                </Link>

              </div>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

              <div className="text-6xl">🦍</div>

              <h3 className="mt-5 text-2xl font-black">
                Beyond the capital
              </h3>

              <p className="mt-3 leading-7 text-green-50">
                Use Kampala as a starting point for discovering more of
                Uganda and connecting with the wider East African region.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* TRIP LENGTH */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="font-bold uppercase tracking-widest text-green-700">
            Simple trip ideas
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#123d2a]">
            How long should you spend in Kampala?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border-t-8 border-green-600 bg-green-50 p-7">
              <h3 className="text-2xl font-black text-[#123d2a]">
                1 Day
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                Explore central Kampala, visit a cultural attraction, enjoy
                local food and experience the city's atmosphere.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-yellow-500 bg-yellow-50 p-7">
              <h3 className="text-2xl font-black text-[#123d2a]">
                2–3 Days
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                Add markets, neighbourhoods, restaurants, cultural sites and
                an excursion toward Entebbe or another nearby destination.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-red-600 bg-red-50 p-7">
              <h3 className="text-2xl font-black text-[#123d2a]">
                Longer Journey
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                Combine Kampala with Jinja, wildlife destinations or a
                cross-border East African journey.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-[#eef8ef]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">

          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">

            <div className="flex items-start gap-5">

              <div className="text-4xl">🛡️</div>

              <div>
                <p className="font-bold uppercase tracking-widest text-green-700">
                  Travel smart
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#123d2a]">
                  Practical safety advice
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  As in any large city, travelers should take normal
                  precautions with valuables, money and personal belongings.
                  Use reputable transport providers, stay aware of your
                  surroundings and follow local guidance.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* EAST AFRICA */}
      <section className="bg-[#123d2a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">

          <p className="font-bold uppercase tracking-[0.25em] text-yellow-300">
            East Africa
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            One city can open the door to many journeys
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Kampala connects travelers with Uganda and the wider East African
            travel network. Search your next route and discover where the
            journey can take you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/search"
              className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-[#123d2a] shadow-xl transition hover:bg-yellow-300"
            >
              🔎 Search East Africa
            </Link>

            <Link
              href="/"
              className="rounded-2xl bg-white px-8 py-4 font-black text-green-800 shadow-xl transition hover:bg-green-50"
            >
              🏠 Back to eaSafariRoutes
            </Link>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-[#0b291c] px-6 py-8 text-center text-sm text-green-100">
        <p>
          © {new Date().getFullYear()} eaSafariRoutes — East Africa Travel,
          Routes &amp; Discovery
        </p>
      </section>

    </main>
  )
}
