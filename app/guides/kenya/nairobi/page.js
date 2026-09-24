import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Nairobi Travel Guide — Things to Do, Wildlife, Safari, Food & Transport | OSARE',
  description:
    'Explore Nairobi, Kenya with practical travel information covering wildlife, attractions, city areas, food, accommodation, transport, safari connections and journeys across East Africa.',
  path: '/guides/kenya/nairobi',
})

const AREAS = [
  {
    icon: '🏙️',
    title: 'Central Nairobi',
    color: 'bg-amber-100',
    border: 'border-amber-200',
    text: 'Explore the city centre, museums, markets, parks, historic buildings and Nairobi’s busy urban life.',
  },
  {
    icon: '🌆',
    title: 'Westlands',
    color: 'bg-sky-100',
    border: 'border-sky-200',
    text: 'A lively area known for hotels, restaurants, shopping, entertainment and business.',
  },
  {
    icon: '🌿',
    title: 'Kilimani',
    color: 'bg-emerald-100',
    border: 'border-emerald-200',
    text: 'A popular neighbourhood with cafés, restaurants, apartments and easy access to many parts of Nairobi.',
  },
  {
    icon: '🦒',
    title: 'Karen & Lang’ata',
    color: 'bg-orange-100',
    border: 'border-orange-200',
    text: 'A greener part of Nairobi close to wildlife attractions, museums, gardens and conservation experiences.',
  },
  {
    icon: '🌳',
    title: 'Gigiri & Runda',
    color: 'bg-lime-100',
    border: 'border-lime-200',
    text: 'Known for international organisations, diplomatic activity, hotels, restaurants and shopping.',
  },
  {
    icon: '🍛',
    title: 'Parklands',
    color: 'bg-rose-100',
    border: 'border-rose-200',
    text: 'A diverse part of Nairobi with accommodation, restaurants, food experiences and convenient city access.',
  },
]

const EXPERIENCES = [
  {
    icon: '🦁',
    title: 'Wildlife',
    text: 'Experience Nairobi National Park and discover wildlife surprisingly close to the city.',
  },
  {
    icon: '🌿',
    title: 'Nature',
    text: 'Walk through Karura Forest, discover green spaces and enjoy a different side of Nairobi.',
  },
  {
    icon: '🏛️',
    title: 'History',
    text: 'Explore museums, historic places and stories that help explain Kenya and Nairobi.',
  },
  {
    icon: '🎨',
    title: 'Culture',
    text: 'Discover Kenyan art, music, crafts, markets, food and everyday city life.',
  },
  {
    icon: '🍽️',
    title: 'Food',
    text: 'Try Kenyan dishes and explore Nairobi’s huge range of African and international restaurants.',
  },
  {
    icon: '🛍️',
    title: 'Shopping',
    text: 'Find local crafts, souvenirs, fashion, markets, shopping centres and unique Kenyan products.',
  },
  {
    icon: '☕',
    title: 'Cafés',
    text: 'Nairobi has a growing café culture, from relaxed neighbourhood cafés to modern city spaces.',
  },
  {
    icon: '🎵',
    title: 'Nightlife',
    text: 'Restaurants, live music, entertainment and nightlife give Nairobi another personality after dark.',
  },
]

const WILDLIFE = [
  {
    icon: '🦁',
    title: 'Nairobi National Park',
    text: 'A remarkable wildlife area on the edge of the capital, offering a safari experience with the city skyline nearby.',
  },
  {
    icon: '🦒',
    title: 'Giraffe Centre',
    text: 'A popular conservation and wildlife experience where visitors can learn more about giraffes.',
  },
  {
    icon: '🐘',
    title: 'Elephant Conservation',
    text: 'Nairobi is home to important wildlife conservation organisations and experiences connected with elephant rescue and rehabilitation.',
  },
  {
    icon: '🌳',
    title: 'Karura Forest',
    text: 'A large urban forest offering walking trails, waterfalls, caves and a peaceful escape from the busy city.',
  },
]

const ROUTES = [
  {
    icon: '🦁',
    destination: 'Nairobi → Maasai Mara',
    text: 'Continue from Kenya’s capital toward one of East Africa’s best-known safari regions.',
  },
  {
    icon: '🐘',
    destination: 'Nairobi → Amboseli',
    text: 'Travel south toward Amboseli and its famous views of Mount Kilimanjaro.',
  },
  {
    icon: '🌊',
    destination: 'Nairobi → Mombasa',
    text: 'Leave the capital for Kenya’s Indian Ocean coast, beaches and Swahili culture.',
  },
  {
    icon: '🦩',
    destination: 'Nairobi → Lake Naivasha',
    text: 'Head into the Great Rift Valley for lakes, landscapes and nature experiences.',
  },
  {
    icon: '🚌',
    destination: 'Nairobi → Kampala',
    text: 'Continue west into Uganda and discover another part of the East African network.',
  },
  {
    icon: '🌴',
    destination: 'Nairobi → Tanzania',
    text: 'Connect your Kenyan journey with Tanzania, safari destinations and Zanzibar.',
  },
]

export default function NairobiGuidePage() {
  return (
    <main className="min-h-screen bg-amber-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-800 to-amber-700 text-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-5xl">

            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-green-950">
                🇰🇪 KENYA
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                EAST AFRICA
              </span>

              <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">
                🦁 SAFARI GATEWAY
              </span>
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Nairobi
              <span className="block text-yellow-300">
                Travel Guide
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-green-50 md:text-2xl md:leading-10">
              Discover the city where modern African life meets wildlife,
              culture, food, business and adventure — and where your journey
              across East Africa can begin.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/search"
                className="rounded-full bg-yellow-400 px-7 py-4 font-bold text-green-950 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
              >
                🔎 Search East Africa
              </Link>

              <Link
                href="/guides"
                className="rounded-full border-2 border-white/50 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                🌍 Explore Travel Guides
              </Link>
            </div>
          </div>

          {/* HERO HIGHLIGHTS */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-md">
              <div className="text-3xl">🦁</div>
              <p className="mt-2 font-bold">Wildlife</p>
              <p className="mt-1 text-sm text-green-100">
                Safari close to the city
              </p>
            </div>

            <div className="rounded-3xl bg-yellow-400 p-5 text-green-950 shadow-lg">
              <div className="text-3xl">🌍</div>
              <p className="mt-2 font-bold">East Africa</p>
              <p className="mt-1 text-sm">
                A major regional gateway
              </p>
            </div>

            <div className="rounded-3xl bg-orange-500 p-5 text-white shadow-lg">
              <div className="text-3xl">🍛</div>
              <p className="mt-2 font-bold">Food & Culture</p>
              <p className="mt-1 text-sm text-orange-50">
                Kenyan life and flavours
              </p>
            </div>

            <div className="rounded-3xl bg-sky-500 p-5 text-white shadow-lg">
              <div className="text-3xl">🚌</div>
              <p className="mt-2 font-bold">Transport</p>
              <p className="mt-1 text-sm text-sky-50">
                Connect to many destinations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-orange-100">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">

            <div>
              <p className="font-bold uppercase tracking-widest text-orange-700">
                Welcome to Nairobi
              </p>

              <h2 className="mt-3 text-4xl font-black text-green-950 md:text-5xl">
                Nairobi is more than a stopover.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Nairobi is one of East Africa’s most important cities and a
                fascinating destination in its own right. It combines a modern
                capital, busy business districts, restaurants, markets,
                museums, green spaces and wildlife experiences.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                For many travellers, Nairobi is also the beginning of a much
                larger East African journey. From here you can continue toward
                safari destinations, the Kenyan coast, Uganda, Tanzania and
                Zanzibar.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                This guide helps you understand where to go, what to see,
                where different parts of Nairobi are located, how to move
                around and how to continue your journey.
              </p>
            </div>

            <div className="rounded-3xl bg-green-950 p-8 text-white shadow-xl">
              <div className="text-5xl">📍</div>

              <h2 className="mt-5 text-2xl font-black">
                Nairobi at a glance
              </h2>

              <div className="mt-7 space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm font-semibold text-yellow-300">
                    COUNTRY
                  </p>
                  <p className="mt-1 font-bold">Kenya 🇰🇪</p>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm font-semibold text-yellow-300">
                    REGION
                  </p>
                  <p className="mt-1 font-bold">East Africa</p>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <p className="text-sm font-semibold text-yellow-300">
                    INTERNATIONAL AIRPORT
                  </p>
                  <p className="mt-1 font-bold">
                    Jomo Kenyatta International Airport
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-yellow-300">
                    KNOWN FOR
                  </p>
                  <p className="mt-1 font-bold">
                    Wildlife • Culture • Business • Food • Safari
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY NAIROBI */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-emerald-700">
              Discover the city
            </p>

            <h2 className="mt-3 text-4xl font-black text-green-950">
              Why visit Nairobi?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nairobi gives travellers a combination that is difficult to find
              elsewhere: a major African city surrounded by nature, culture
              and access to some of the region’s most famous travel routes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-green-100 p-7 ring-1 ring-green-200">
              <div className="text-4xl">🦁</div>
              <h3 className="mt-5 text-2xl font-black text-green-950">
                Wildlife
              </h3>
              <p className="mt-3 leading-7 text-green-900">
                See wildlife and conservation attractions without leaving the
                Nairobi area.
              </p>
            </div>

            <div className="rounded-3xl bg-yellow-100 p-7 ring-1 ring-yellow-200">
              <div className="text-4xl">🏛️</div>
              <h3 className="mt-5 text-2xl font-black text-yellow-950">
                Culture
              </h3>
              <p className="mt-3 leading-7 text-yellow-900">
                Discover Kenyan history, art, food, music, crafts and everyday
                city life.
              </p>
            </div>

            <div className="rounded-3xl bg-orange-100 p-7 ring-1 ring-orange-200">
              <div className="text-4xl">🍛</div>
              <h3 className="mt-5 text-2xl font-black text-orange-950">
                Food
              </h3>
              <p className="mt-3 leading-7 text-orange-900">
                Explore Kenyan flavours alongside a huge variety of
                international cuisines.
              </p>
            </div>

            <div className="rounded-3xl bg-sky-100 p-7 ring-1 ring-sky-200">
              <div className="text-4xl">🌍</div>
              <h3 className="mt-5 text-2xl font-black text-sky-950">
                Adventure
              </h3>
              <p className="mt-3 leading-7 text-sky-900">
                Use Nairobi as a launch point for Kenya and wider East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="font-bold uppercase tracking-widest text-yellow-300">
            Know Nairobi
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Different parts of Nairobi
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-100">
            Nairobi is a large and diverse city. Different neighbourhoods
            offer different experiences, accommodation styles, restaurants
            and reasons for visiting.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <article
                key={area.title}
                className={`rounded-3xl ${area.color} ${area.border} border p-7 text-slate-900 shadow-lg transition hover:-translate-y-1`}
              >
                <div className="text-4xl">{area.icon}</div>

                <h3 className="mt-5 text-2xl font-black">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WILDLIFE */}
      <section className="bg-emerald-100">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">

            <div>
              <span className="inline-block rounded-full bg-green-900 px-4 py-2 text-sm font-bold text-yellow-300">
                🦁 WILDLIFE IN THE CITY
              </span>

              <h2 className="mt-5 text-4xl font-black text-green-950 md:text-5xl">
                Nairobi’s wild side
              </h2>

              <p className="mt-5 text-lg leading-8 text-green-900">
                One of Nairobi’s most unusual features is the way wildlife and
                city life exist so close together.
              </p>

              <p className="mt-5 leading-8 text-green-900">
                Visitors can combine a city stay with wildlife, conservation
                and nature experiences before continuing to another part of
                Kenya.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {WILDLIFE.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-white p-7 shadow-lg ring-1 ring-green-200"
                >
                  <div className="text-4xl">{item.icon}</div>

                  <h3 className="mt-4 text-xl font-black text-green-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="font-bold uppercase tracking-widest text-orange-700">
            Plan your time
          </p>

          <h2 className="mt-3 text-4xl font-black text-green-950">
            Things to do in Nairobi
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you have a few hours or several days, Nairobi offers many
            different ways to experience the city.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-orange-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 text-xl font-black text-green-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="font-bold uppercase tracking-widest text-emerald-700">
            Build your trip
          </p>

          <h2 className="mt-3 text-4xl font-black text-green-950">
            Nairobi in 1, 2 or 3 days
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <article className="rounded-3xl bg-sky-100 p-8 ring-1 ring-sky-200">
              <div className="text-4xl">☀️</div>

              <h3 className="mt-5 text-2xl font-black text-sky-950">
                1 Day
              </h3>

              <p className="mt-4 leading-7 text-sky-900">
                Combine one major wildlife or cultural attraction with a meal,
                city experience and time to discover part of Nairobi.
              </p>
            </article>

            <article className="rounded-3xl bg-yellow-100 p-8 ring-1 ring-yellow-200">
              <div className="text-4xl">🌅</div>

              <h3 className="mt-5 text-2xl font-black text-yellow-950">
                2 Days
              </h3>

              <p className="mt-4 leading-7 text-yellow-900">
                Add wildlife, culture, food and one of Nairobi’s distinctive
                neighbourhoods to create a more complete city visit.
              </p>
            </article>

            <article className="rounded-3xl bg-orange-100 p-8 ring-1 ring-orange-200">
              <div className="text-4xl">🌍</div>

              <h3 className="mt-5 text-2xl font-black text-orange-950">
                3 Days
              </h3>

              <p className="mt-4 leading-7 text-orange-900">
                Give yourself time for several attractions and begin planning
                your next journey beyond Nairobi.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="bg-sky-100">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-sky-700">
              Move around & move onward
            </p>

            <h2 className="mt-3 text-4xl font-black text-green-950">
              Getting around Nairobi
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Nairobi is a major transport hub. Travellers can choose between
              different local and long-distance transport options depending on
              their journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-7 shadow-lg">
              <div className="text-4xl">✈️</div>
              <h3 className="mt-4 text-2xl font-black text-green-950">
                Airport transfers
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Travellers arriving through JKIA can arrange transport into
                Nairobi or continue onward to another destination.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-lg">
              <div className="text-4xl">🚕</div>
              <h3 className="mt-4 text-2xl font-black text-green-950">
                City transport
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Depending on the journey, travellers can use taxis,
                ride-hailing, buses, matatus or private transport.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-lg">
              <div className="text-4xl">🚌</div>
              <h3 className="mt-4 text-2xl font-black text-green-950">
                Long-distance travel
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Nairobi connects travellers with cities, safari destinations
                and other countries across East Africa.
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-3xl bg-green-950 p-8 text-white shadow-xl md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

              <div>
                <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-green-950">
                  🚌 eaSafariRoutes SEARCH
                </span>

                <h3 className="mt-5 text-3xl font-black">
                  Looking for a route?
                </h3>

                <p className="mt-4 max-w-3xl leading-8 text-green-100">
                  Search travel information and connections across East
                  Africa. Nairobi can be your starting point for discovering
                  what comes next.
                </p>
              </div>

              <Link
                href="/search"
                className="rounded-full bg-yellow-400 px-7 py-4 text-center font-black text-green-950 transition hover:bg-yellow-300 hover:scale-105"
              >
                🔎 Search Routes
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="bg-amber-100">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-widest text-orange-700">
                Taste Nairobi
              </p>

              <h2 className="mt-3 text-4xl font-black text-green-950">
                Food and dining
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Nairobi’s food scene reflects the diversity of the city.
                Visitors can experience Kenyan dishes alongside Indian,
                Ethiopian, Middle Eastern, European and other international
                cuisines.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="text-5xl">🍛</div>

              <h3 className="mt-5 text-2xl font-black text-green-950">
                Foods visitors may want to try
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Depending on where you eat, you may encounter nyama choma,
                ugali, sukuma wiki, chapati, samosas and many other Kenyan
                dishes and ingredients.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Nyama Choma',
                  'Ugali',
                  'Sukuma Wiki',
                  'Chapati',
                  'Samosas',
                ].map((food) => (
                  <span
                    key={food}
                    className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-900"
                  >
                    {food}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHERE TO STAY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="font-bold uppercase tracking-widest text-emerald-700">
            Accommodation
          </p>

          <h2 className="mt-3 text-4xl font-black text-green-950">
            Where to stay in Nairobi
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Nairobi has accommodation for many types of travellers, from
            luxury and business hotels to boutique properties, serviced
            apartments, hostels and budget accommodation.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-green-100 p-7 ring-1 ring-green-200">
              <div className="text-4xl">🏙️</div>
              <h3 className="mt-4 text-2xl font-black text-green-950">
                City Centre
              </h3>
              <p className="mt-3 leading-7 text-green-900">
                Convenient for central Nairobi, business activities, city
                attractions and transport connections.
              </p>
            </div>

            <div className="rounded-3xl bg-sky-100 p-7 ring-1 ring-sky-200">
              <div className="text-4xl">🌆</div>
              <h3 className="mt-4 text-2xl font-black text-sky-950">
                Westlands
              </h3>
              <p className="mt-3 leading-7 text-sky-900">
                A lively area with hotels, restaurants, shopping and
                entertainment.
              </p>
            </div>

            <div className="rounded-3xl bg-orange-100 p-7 ring-1 ring-orange-200">
              <div className="text-4xl">🌿</div>
              <h3 className="mt-4 text-2xl font-black text-orange-950">
                Karen
              </h3>
              <p className="mt-3 leading-7 text-orange-900">
                A greener area with access to wildlife, conservation and
                several Nairobi attractions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-red-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-red-700">
              Travel smart
            </p>

            <h2 className="mt-3 text-4xl font-black text-green-950">
              Practical safety information
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Nairobi is a large and busy city. Travellers should use sensible
              precautions and check current local travel advice before their
              journey.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              'Keep valuables secure and avoid displaying large amounts of cash unnecessarily.',
              'Use reputable transport providers and confirm your destination before travelling.',
              'Stay aware of your surroundings, particularly in crowded areas.',
              'Keep important travel documents and emergency contacts accessible.',
            ].map((tip, index) => (
              <div
                key={tip}
                className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-red-100"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-black text-white">
                  {index + 1}
                </div>

                <p className="leading-7 text-slate-700">
                  {tip}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

          <p className="font-bold uppercase tracking-widest text-yellow-300">
            Continue your journey
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Where can you go from Nairobi?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-100">
            Nairobi is not only a destination. It is one of the places where
            travellers can connect different parts of East Africa.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((route) => (
              <div
                key={route.destination}
                className="rounded-3xl bg-white/10 p-7 backdrop-blur-sm transition hover:bg-white/15"
              >
                <div className="text-4xl">{route.icon}</div>

                <h3 className="mt-4 text-xl font-black text-yellow-300">
                  {route.destination}
                </h3>

                <p className="mt-3 leading-7 text-green-100">
                  {route.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/search"
              className="rounded-full bg-yellow-400 px-7 py-4 font-black text-green-950 transition hover:bg-yellow-300"
            >
              🔎 Search Your Route
            </Link>

            <Link
              href="/guides/maasai-mara"
              className="rounded-full border-2 border-yellow-400 px-7 py-4 font-black text-yellow-300 transition hover:bg-yellow-400 hover:text-green-950"
            >
              🦁 Maasai Mara Guide
            </Link>
          </div>

        </div>
      </section>

      {/* EAST AFRICA */}
      <section className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400">
        <div className="mx-auto max-w-7xl px-6 py-16 text-green-950 md:py-20">

          <div className="max-w-4xl">

            <span className="rounded-full bg-green-950 px-5 py-2 text-sm font-black text-yellow-300">
              🌍 BEYOND NAIROBI
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Your East African journey can continue.
            </h2>

            <p className="mt-5 text-lg leading-8">
              Start in Nairobi and discover more of Kenya, then continue into
              Tanzania, Uganda and other destinations across East Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/guides/kenya"
                className="rounded-full bg-green-950 px-6 py-3 font-bold text-white transition hover:bg-green-900"
              >
                🇰🇪 Kenya Guide
              </Link>

              <Link
                href="/guides/tanzania"
                className="rounded-full bg-white px-6 py-3 font-bold text-green-950 transition hover:bg-slate-100"
              >
                🇹🇿 Tanzania Guide
              </Link>

              <Link
                href="/guides"
                className="rounded-full border-2 border-green-950 px-6 py-3 font-bold text-green-950 transition hover:bg-green-950 hover:text-white"
              >
                🌍 All Guides
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <div className="mx-auto max-w-3xl">

            <div className="text-6xl">🌍</div>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Nairobi is only the beginning.
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-100">
              Discover Nairobi, find your route, connect with East Africa and
              continue your adventure.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/search"
                className="rounded-full bg-yellow-400 px-8 py-4 font-black text-green-950 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
              >
                🔎 Search eaSafariRoutes
              </Link>

              <Link
                href="/guides"
                className="rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Explore More Guides
              </Link>
            </div>

            <p className="mt-10 font-semibold text-yellow-300">
              www.easafariroutes.com
            </p>

          </div>
        </div>
      </section>

    </main>
  )
}
