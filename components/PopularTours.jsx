import Link from 'next/link'

const R2 = 'https://pub-5dd88be363aa4578af71ad764a6806b9.r2.dev'

const TOURS = [
  {
    route: 'Kilimanjaro via Lemosho',
    detail: '10 days · accommodation & transport included',
    vendor: 'Click Expedition',
    price: 'USD 2,750',
    unit: 'per person',
    image: `${R2}/Expedition-click-lemosho.jpg`,
    href: '/safari/click-expedition-kilimanjaro-climb-via-lemosho-route-10-days-accommodation-transport-included-8a80c210',
  },
  {
    route: 'Kilimanjaro via Machame',
    detail: '9 days · accommodation & transport included',
    vendor: 'Click Expedition',
    price: 'USD 2,550',
    unit: 'per person',
    image: `${R2}/Expedition-machame7days.jpg`,
    href: '/safari/click-expedition-mountain-kilimanjaro-climb-through-machame-route-9-days-all-accommodation-transport-are-included-7ea900aa',
  },
  {
    route: 'Mount Meru Climb',
    detail: '4 days trekking · accommodation & transport included',
    vendor: 'Click Expedition',
    price: 'USD 1,500',
    unit: 'per person',
    image: `${R2}/Expedition-meru.jpg`,
    href: '/safari/click-expedition-mount-meru-climb-4-days-trekking-accommodation-transport-included-76c7327b',
  },
  {
    route: 'Masai Mara Safari',
    detail: 'Kenya · Great Migration country',
    vendor: 'Oria Kenya Safaris',
    price: 'USD 1,000',
    unit: '',
    image: 'https://www.oriakenyasafaris.co.ke/images/destinations/masai%20mara.jpg',
    href: '/safari/oria-kenya-safaris-masai-mara-safari-4f231bc0',
  },
  {
    route: 'Tsavo East Safari',
    detail: 'Kenya · red elephants & wide plains',
    vendor: 'Oria Kenya Safaris',
    price: 'USD 350',
    unit: '',
    image: 'https://www.oriakenyasafaris.co.ke/images/destinations/tsavo.jpg',
    href: '/safari/oria-kenya-safaris-tsavo-east-safari-9546a7ac',
  },
  {
    route: 'Diani City Tour',
    detail: 'Kenya coast · Diani Beach',
    vendor: 'Oria Kenya Safaris',
    price: 'USD 110',
    unit: '',
    image: 'https://www.oriakenyasafaris.co.ke/images/destinations/diani.jpg',
    href: '/safari/oria-kenya-safaris-diani-city-tour-c9749b4c',
  },
]

export default function PopularTours() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Popular Safari Tours</h2>
      <p className="mt-1 text-slate-600">Real routes, real prices in USD, from our verified vendors.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOURS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={t.image}
                alt={t.route}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-emerald-600 px-3 py-1 text-base font-extrabold text-white shadow-lg">
                {t.price}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-900">{t.route}</h3>
              <p className="mt-1 text-sm text-slate-600">{t.detail}</p>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-xs text-slate-500">{t.vendor}</span>
                <span className="text-2xl font-extrabold text-emerald-700">
                  {t.price}
                  {t.unit ? <span className="ml-1 text-xs font-medium text-slate-500">{t.unit}</span> : null}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
