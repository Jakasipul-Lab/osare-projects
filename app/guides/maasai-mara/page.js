import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Maasai Mara Travel Guide — Safari, Great Migration, When to Go & Where to Stay | OSARE',
  description:
    'Plan a Maasai Mara safari: when to go, how to get there from Nairobi, where to stay, what to pack, the Great Migration, and how to book verified camps and operators.',
  path: '/guides/maasai-mara',
})

const FAQS = [
  {
    question: 'When is the best time to visit Maasai Mara?',
    answer:
      'June through October is the dry season with the best game viewing. For the famous river crossings during the Great Migration, aim for late July through October. Avoid March and April, when heavy rains make roads difficult.',
  },
  {
    question: 'How do I get to Maasai Mara from Nairobi?',
    answer:
      'By road, it is about 230km and roughly 5 hours on mostly paved roads to the main Sekenani Gate. By air, small planes fly from Nairobi\'s Wilson Airport directly to airstrips inside the reserve, usually in 45 minutes to an hour.',
  },
  {
    question: 'Where can I stay in Maasai Mara on a budget?',
    answer:
      'Alongside luxury tented camps and mid-range lodges, there are budget-friendly bandas, public campsites, and guesthouses run by smaller local operators — a great way to experience the Mara without luxury prices.',
  },
  {
    question: 'What should I pack for a Maasai Mara safari?',
    answer:
      'Neutral-colored clothing, warm layers for cold early-morning game drives, sun protection, binoculars, and a camera or phone with plenty of storage.',
  },
]

export default function MaasaiMaraGuide() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <main className="min-h-screen bg-[#fbf7f0] text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7c4a03] via-[#b5651d] to-[#e08a2b] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🇰🇪 KENYA
            </span>
            <span className="rounded-full bg-emerald-500 px-4 py-2 text-white">
              🦁 SAFARI
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
              🌍 EAST AFRICA
            </span>
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-100">
            Kenya's most famous safari destination
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Maasai Mara
            <span className="block text-emerald-300">Travel Guide</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-50 sm:text-xl">
            Rolling savannah, huge cat populations, and the Great
            Migration — one of the world's last great wildlife
            spectacles. Here's what to know before you go.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/safari"
              className="rounded-2xl bg-emerald-500 px-7 py-4 font-black text-white shadow-xl transition hover:bg-emerald-600"
            >
              🔎 Browse Safaris on OSARE
            </Link>

            <Link
              href="/guides"
              className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20"
            >
              🌍 Explore Travel Guides
            </Link>
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
            href="/safari"
            className="rounded-full bg-emerald-50 px-5 py-2 font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            🦁 Search Safaris
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
            href="/guides/kenya/nairobi"
            className="rounded-full bg-orange-50 px-5 py-2 font-semibold text-orange-800 transition hover:bg-orange-100"
          >
            🏙️ Nairobi
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
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="font-bold uppercase tracking-widest text-emerald-700">
                Welcome to Maasai Mara
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
                Kenya's most iconic wildlife reserve
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                The Maasai Mara National Reserve sits in southwestern
                Kenya, bordering Tanzania's Serengeti. Its open grassland
                supports one of the highest concentrations of wildlife
                anywhere on the continent.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                It's named after the Maasai people, who still live around
                the reserve, and the Mara River that cuts through it —
                the same river migrating wildebeest cross each year in one
                of nature's most dramatic events.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                For most travelers, the Mara is combined with Nairobi at
                the start or end of a trip, and often with a beach stay on
                the Kenyan coast or in Zanzibar afterward.
              </p>
            </div>

            <div className="rounded-3xl bg-[#7c4a03] p-8 text-white shadow-xl">
              <div className="text-5xl">🦁</div>

              <h3 className="mt-5 text-2xl font-black">
                What makes the Mara special?
              </h3>

              <ul className="mt-5 space-y-4 text-orange-50">
                <li>✓ The Great Migration river crossings</li>
                <li>✓ Some of Africa's highest lion and cheetah densities</li>
                <li>✓ Wide open savannah, easy game viewing</li>
                <li>✓ Maasai culture and community visits</li>
                <li>✓ Hot air balloon safaris at sunrise</li>
                <li>✓ Options from budget camps to luxury lodges</li>
                <li>✓ Easy 45-minute flight from Nairobi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-700">
            Why visit the Mara?
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
            A safari that lives up to the name
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Few places on earth offer this much wildlife in this little
            space — and it's easy to reach from Nairobi.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🐆',
                title: 'Big Cats',
                text: 'Some of the highest densities of lion, leopard and cheetah in Africa.',
                bg: 'bg-emerald-50',
              },
              {
                icon: '🐘',
                title: 'The Big Five',
                text: 'Lion, leopard, elephant, buffalo and (with luck) rhino, all in one reserve.',
                bg: 'bg-orange-50',
              },
              {
                icon: '🌾',
                title: 'The Great Migration',
                text: 'Over a million wildebeest and zebra cross the Mara River, usually July to October.',
                bg: 'bg-yellow-50',
              },
              {
                icon: '🎈',
                title: 'Balloon Safaris',
                text: 'Float over the plains at sunrise, followed by a bush breakfast.',
                bg: 'bg-cyan-50',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl ${item.bg} p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black text-[#7c4a03]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-[#fef3e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-700">
            Explore the reserve
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
            Different parts of the Mara ecosystem
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Maasai Mara National Reserve',
                icon: '🦓',
                text: 'The core public reserve, home to the highest wildlife concentrations and the main river crossing points.',
              },
              {
                title: 'Mara North Conservancy',
                icon: '🌳',
                text: 'A private conservancy bordering the reserve, with fewer vehicles and off-road game drives.',
              },
              {
                title: 'Naboisho Conservancy',
                icon: '🐆',
                text: 'Known for exceptional leopard and lion sightings, with a strong community-conservation model.',
              },
              {
                title: 'Mara Triangle',
                icon: '🌊',
                text: 'The western side of the reserve, managed separately, known for excellent river-crossing views.',
              },
              {
                title: 'Olare Motorogi Conservancy',
                icon: '🐾',
                text: 'A premium private conservancy with some of the highest predator densities in the Mara.',
              },
              {
                title: 'Talek & Sekenani',
                icon: '🚪',
                text: 'The main entry gates and small towns, useful hubs for camps and road access.',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl"
              >
                <div className="text-4xl">{area.icon}</div>
                <h3 className="mt-4 text-xl font-black text-[#7c4a03]">
                  {area.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-gradient-to-br from-[#fef9e7] to-[#fef3c7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-[#b45309] p-8 text-white shadow-xl">
              <div className="text-6xl">🛡️</div>
              <h2 className="mt-5 text-3xl font-black">
                The Maasai people
              </h2>
              <p className="mt-4 leading-7 text-orange-50">
                The reserve takes its name from the Maasai, a semi-nomadic
                people whose traditional grazing lands surround the Mara.
                Many communities near the reserve welcome visitors to
                learn about their culture directly.
              </p>
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-orange-700">
                Culture & community
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
                Ways to experience Maasai culture
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    title: 'Village visits',
                    text: 'Many camps arrange visits to a local Maasai village (manyatta) to see daily life and traditions.',
                  },
                  {
                    title: 'Beadwork & crafts',
                    text: "Maasai beadwork is famous across Kenya; markets near the reserve sell jewelry and crafts made locally.",
                  },
                  {
                    title: 'Traditional dance',
                    text: 'The adumu (jumping dance) is often performed for visitors as part of a cultural visit.',
                  },
                  {
                    title: 'Community conservancies',
                    text: 'Several conservancies around the Mara pay Maasai landowners directly, linking tourism to conservation.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-black text-[#7c4a03]">
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

      {/* THINGS TO DO */}
      <section className="bg-[#7c4a03] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-300">
            Things to do
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Build your own Maasai Mara safari
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['🚙', 'Game Drives', 'Morning and afternoon drives in search of the Big Five.'],
              ['🌾', 'River Crossings', "Watch the Great Migration's dramatic Mara River crossings (July–Oct)."],
              ['🎈', 'Balloon Safari', 'Rise at dawn for a hot air balloon flight over the plains.'],
              ['🏘️', 'Maasai Village Visit', "Learn about the Maasai people's traditions and daily life."],
              ['📸', 'Photography Safaris', 'Golden-hour light and huge skies make the Mara a favorite for photographers.'],
              ['🌙', 'Night Game Drives', "Some conservancies allow night drives to spot nocturnal wildlife."],
              ['🚶', 'Walking Safaris', 'Guided walks in select conservancies for a different pace and perspective.'],
              ['🍽️', 'Bush Dinners', 'Many camps offer a private dinner under the stars out on the plains.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-orange-50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="bg-[#fef3e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-emerald-700">
              Getting there
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
              Reaching the Maasai Mara
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Most visitors travel from Nairobi, either overland or by a
              short scheduled flight.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">✈️</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">
                By Air
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                The faster option — small planes fly daily from Nairobi's
                Wilson Airport directly to airstrips inside the reserve,
                usually in 45 minutes to an hour.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🚙</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">
                By Road
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                About 230km and roughly 5 hours' drive from Nairobi,
                mostly on paved roads to the main Sekenani Gate, with the
                final stretch on rougher tracks.
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

          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
            Where can you go from the Mara?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            The Maasai Mara fits naturally into a wider Kenya or East
            Africa itinerary.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Maasai Mara → Nairobi', '🏙️', 'Return to the capital by road or a short flight.'],
              ['Maasai Mara → Serengeti', '🦓', "Continue into Tanzania's Serengeti, part of the same ecosystem."],
              ['Maasai Mara → Kenyan Coast', '🏖️', 'Combine your safari with beach time in Mombasa or Diani.'],
              ['Maasai Mara → Zanzibar', '🏝️', 'Add island time in Zanzibar after your safari.'],
              ['Maasai Mara → Amboseli', '🐘', 'Continue to a second Kenyan reserve, famous for elephants and Kilimanjaro views.'],
              ['Maasai Mara → Lake Nakuru', '🦩', 'Add a stop known for flamingos and rhino sanctuaries.'],
            ].map(([route, icon, text]) => (
              <div
                key={route}
                className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-orange-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-black text-[#7c4a03]">{route}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#f97316] to-[#fb923c] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black">
                  Ready to book your safari?
                </h3>
                <p className="mt-2 text-orange-50">
                  Compare verified safari operators, camps, and stays on
                  OSARE — and message them directly, free of charge.
                </p>
              </div>

              <Link
                href="/safari"
                className="rounded-2xl bg-white px-7 py-4 text-center font-black text-orange-700 transition hover:bg-orange-50"
              >
                Browse Safaris →
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

          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
            This is where your budget really shapes the trip
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🏕️</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">
                Luxury Camps & Lodges
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Top-end comfort, often inside private conservancies with
                exclusive game viewing.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">⛺</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">
                Mid-Range Camps
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Comfortable tented camps that still deliver an authentic
                safari feel, without luxury prices.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🏠</div>
              <h3 className="mt-4 text-xl font-black text-[#7c4a03]">
                Budget-Friendly Options
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Public campsites, bandas (simple cabins), and guesthouses
                run by smaller local operators — a great way to
                experience the Mara without luxury prices.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center">
            <Link
              href="/safari"
              className="font-black text-[#7c4a03] underline underline-offset-4"
            >
              Browse verified safari operators and stays on OSARE →
            </Link>
          </p>
        </div>
      </section>

      {/* TRAVEL PLANS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-700">
            Simple trip ideas
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">
            How long should you spend in the Mara?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border-t-8 border-cyan-500 bg-cyan-50 p-7">
              <h3 className="text-2xl font-black text-[#7c4a03]">2 Days</h3>
              <p className="mt-4 leading-7 text-slate-700">
                A short safari with morning and afternoon game drives —
                enough for a good introduction to the reserve.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-orange-500 bg-orange-50 p-7">
              <h3 className="text-2xl font-black text-[#7c4a03]">
                3–4 Days
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Time to explore different areas of the ecosystem, add a
                balloon safari, and visit a Maasai village.
              </p>
            </div>

            <div className="rounded-3xl border-t-8 border-emerald-500 bg-emerald-50 p-7">
              <h3 className="text-2xl font-black text-[#7c4a03]">
                Longer Journey
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                Combine the Mara with Nairobi, the Kenyan coast, or
                Zanzibar for a fuller East Africa trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO PACK / SAFETY */}
      <section className="bg-[#fef3e7]">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">
            <div className="flex items-start gap-5">
              <div className="text-4xl">🎒</div>

              <div>
                <p className="font-bold uppercase tracking-widest text-emerald-700">
                  Travel smart
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#7c4a03]">
                  What to pack & practical advice
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Bring neutral-colored clothing, warm layers for cold
                  early-morning game drives, sun protection, binoculars,
                  and a camera or phone with plenty of storage. Costs vary
                  widely depending on accommodation type and whether you
                  book a group tour or a private safari, so it's worth
                  confirming current park and conservancy fees directly
                  with your chosen operator before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KENYA NETWORK */}
      <section className="bg-gradient-to-br from-[#064e3b] to-[#047857] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="font-bold uppercase tracking-widest text-emerald-200">
            Explore Kenya
          </p>

          <h2 className="mt-3 text-4xl font-black">
            The Mara is only one part of the journey
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
            Kenya offers safaris, beaches, cities and cultural experiences
            far beyond the Mara. Use it as one gateway into a much wider
            travel network.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/guides/kenya"
              className="rounded-2xl bg-white px-6 py-4 font-black text-emerald-800 transition hover:bg-emerald-50"
            >
              🇰🇪 Kenya Guide
            </Link>

            <Link
              href="/guides/kenya/nairobi"
              className="rounded-2xl bg-orange-400 px-6 py-4 font-black text-white transition hover:bg-orange-500"
            >
              🏙️ Nairobi
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
            Ready to plan your Maasai Mara trip?
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Compare verified operators. Book with confidence.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
            Compare verified safari operators, camps, and stays — and
            message them directly, free of charge.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/safari"
              className="rounded-2xl bg-[#7c4a03] px-8 py-4 font-black text-white shadow-xl transition hover:bg-[#5c3702]"
            >
              🦁 Browse Safaris on OSARE
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
      <section className="bg-[#7c4a03] px-6 py-8 text-center text-sm text-orange-100">
        <p>
          © {new Date().getFullYear()} eaSafariRoutes — East Africa Travel,
          Routes &amp; Discovery
        </p>
      </section>
    </main>
  )
}
