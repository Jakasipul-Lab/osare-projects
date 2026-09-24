import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Nairobi Travel Guide — Things to Do, Safari, Transport & Travel Information | OSARE',
  description:
    'Explore Nairobi, Kenya with practical travel information covering wildlife, attractions, transport, accommodation, food, safety, costs and trips from Nairobi.',
  path: '/guides/nairobi',
})

export default function NairobiGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-200">
              Kenya Travel Guide
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Nairobi Travel Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
              Discover Nairobi, Kenya&apos;s vibrant capital city and one of
              East Africa&apos;s most important gateways to safari, wildlife,
              culture, business and adventure.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/search"
                className="rounded-full bg-white px-6 py-3 font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-50"
              >
                Search East Africa
              </Link>

              <Link
                href="/guides"
                className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Travel Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Welcome to Nairobi
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Nairobi is more than a starting point for a safari. It is a
              destination in its own right, combining modern city life with
              wildlife, green spaces, museums, restaurants, markets and
              neighbourhoods with different personalities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              For many international visitors, Nairobi is the first major
              stop in Kenya. From here, travellers can continue to destinations
              such as Maasai Mara, Amboseli, Naivasha, Mombasa and many other
              parts of East Africa.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              This guide is designed to help you understand Nairobi before you
              arrive, what you can do while you are there, how to move around,
              and how Nairobi connects with the wider East African travel
              network.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              Nairobi at a glance
            </h2>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-slate-900">Country</p>
                <p className="text-slate-600">Kenya</p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">Region</p>
                <p className="text-slate-600">East Africa</p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Main international airport
                </p>
                <p className="text-slate-600">
                  Jomo Kenyatta International Airport (JKIA)
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Best known for
                </p>
                <p className="text-slate-600">
                  Wildlife, culture, business, food and safari connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Why visit Nairobi?
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Nairobi gives travellers something unusual: a major African city
            where wildlife experiences can be reached without travelling far
            from the urban centre.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Wildlife',
                text: 'Experience wildlife close to the city, including the unique Nairobi National Park.',
              },
              {
                title: 'Culture',
                text: 'Discover Kenyan history, art, food, music and everyday city life.',
              },
              {
                title: 'Adventure',
                text: 'Use Nairobi as a starting point for safari and other East African adventures.',
              },
              {
                title: 'City life',
                text: 'Enjoy restaurants, shopping, entertainment, business districts and green spaces.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Things to do in Nairobi
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          You can spend a full day or several days exploring Nairobi. These
          are some of the experiences travellers commonly look for when
          planning their visit.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">
              Nairobi National Park
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              One of Nairobi&apos;s most distinctive attractions is its
              national park, where visitors can experience a safari environment
              with the city skyline nearby.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">
              Giraffe Centre
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The Giraffe Centre is a popular Nairobi wildlife attraction where
              visitors can learn about giraffes and conservation.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">
              David Sheldrick Wildlife Trust
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Wildlife conservation is an important part of Nairobi&apos;s
              tourism story. Visitors can learn more about elephant rescue,
              rehabilitation and conservation work.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">
              Nairobi National Museum
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              A useful stop for travellers interested in Kenyan history,
              culture, art, archaeology and natural heritage.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">
              Karura Forest
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Karura offers a very different side of Nairobi, with forest,
              walking trails, waterfalls and green space within the city.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">
              Markets, food and shopping
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Nairobi has a wide variety of restaurants, cafés, markets,
              shopping centres and places where visitors can experience local
              and international cuisine.
            </p>
          </article>
        </div>
      </section>

      {/* SAFARI FROM NAIROBI */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Your East Africa connection
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Start your safari from Nairobi
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Nairobi is one of the most useful starting points for exploring
              Kenya. Travellers can arrange road transport, safari vehicles,
              tours and other services depending on their destination and
              travel plans.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Popular journeys from Nairobi include trips toward the Maasai
              Mara, Amboseli, Lake Naivasha and other destinations. Nairobi can
              also be part of a larger East African journey connecting Kenya
              with Tanzania and Uganda.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/guides/maasai-mara"
                className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Explore Maasai Mara
              </Link>

              <Link
                href="/guides"
                className="rounded-full border border-emerald-700 px-6 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-100"
              >
                More East Africa Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Getting around Nairobi
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Nairobi has several ways to move around the city and connect to
          destinations outside the capital. The right option depends on your
          budget, destination, luggage and schedule.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              Airport transfers
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Travellers arriving at JKIA can arrange transport into Nairobi
              and onward to hotels or other destinations.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              City transport
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Taxis, ride-hailing services, buses, matatus and private
              transport are among the options available around the city.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              Long-distance travel
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Nairobi is a major transport hub for journeys to other Kenyan
              cities and destinations across East Africa.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="text-2xl font-bold">
            Looking for transport in East Africa?
          </h3>

          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Use eaSafariRoutes to explore available travel information and
            transport connections. The platform is designed to help travellers
            discover services across East Africa.
          </p>

          <Link
            href="/search"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Search Routes
          </Link>
        </div>
      </section>

      {/* WHERE TO STAY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Where to stay in Nairobi
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Nairobi has accommodation for different types of travellers,
            including luxury hotels, business hotels, boutique properties,
            serviced apartments, hostels and budget accommodation.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                City centre
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Convenient for travellers interested in central Nairobi,
                business and city activities.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Westlands
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                A popular area with hotels, restaurants, shopping and
                entertainment.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Karen
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Known for a greener, quieter environment and proximity to
                several attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Food and dining in Nairobi
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Nairobi&apos;s food scene reflects the city itself: diverse,
          international and strongly connected to Kenyan culture. Visitors can
          find traditional Kenyan dishes alongside Indian, Ethiopian,
          European, Middle Eastern and other international cuisines.
        </p>

        <div className="mt-8 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-100">
          <h3 className="text-xl font-bold text-slate-900">
            Foods visitors may want to try
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            Depending on where you eat, you may encounter dishes such as
            nyama choma, ugali, sukuma wiki, chapati, samosas and a wide range
            of fresh local produce.
          </p>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Practical safety information
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            As with any large city, travellers should take normal precautions
            and stay aware of their surroundings.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="leading-7 text-slate-700">
                Keep valuables secure and avoid displaying large amounts of
                cash or expensive equipment unnecessarily.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="leading-7 text-slate-700">
                Use reputable transport providers and confirm your destination
                before starting a journey.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="leading-7 text-slate-700">
                Follow current local travel advice and check conditions before
                travelling.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="leading-7 text-slate-700">
                Keep important travel documents and emergency contacts
                accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DAY TRIPS */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Day trips and journeys from Nairobi
        </h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Nairobi is an excellent base for exploring more of Kenya. Depending
          on the amount of time available, travellers can plan short excursions
          or continue into longer safari and coastal journeys.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            'Maasai Mara',
            'Amboseli',
            'Lake Naivasha',
            'Mombasa and the Coast',
          ].map((destination) => (
            <div
              key={destination}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="font-bold text-slate-900">{destination}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Plan your route from Nairobi and explore more of Kenya.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EAST AFRICA */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Explore beyond Nairobi
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your journey can continue across East Africa
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Nairobi can be the beginning of a much bigger journey. From
              Kenya, travellers can continue toward Tanzania, Uganda and other
              East African destinations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/guides/kenya"
                className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Kenya Travel Guide
              </Link>

              <Link
                href="/guides/tanzania"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Tanzania Travel Guide
              </Link>

              <Link
                href="/guides"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                All Travel Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to explore Nairobi?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            Start with Nairobi, discover Kenya, and continue your journey
            across East Africa with eaSafariRoutes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/search"
              className="rounded-full bg-emerald-700 px-7 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Search eaSafariRoutes
            </Link>

            <Link
              href="/guides"
              className="rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Explore More Guides
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            www.easafariroutes.com
          </p>
        </div>
      </section>
    </main>
  )
}
