const MONTHS = [
  { m: 'January', s: 'Green', temp: '32° / 22°', note: 'Hot and humid with afternoon thunderstorms. Migratory birds breeding, young animals growing fast.', crowd: 'Low' },
  { m: 'February', s: 'Green', temp: '32° / 21°', note: 'Peak of the rains. Lush scenery, baby animals and excellent birding. Wildlife can be harder to spot in thick vegetation.', crowd: 'Low' },
  { m: 'March', s: 'Green', temp: '32° / 20°', note: 'Greenery at its best as the rains ease. Good value for travellers who do not mind the heat.', crowd: 'Low' },
  { m: 'April', s: 'Transition', temp: '31° / 17°', note: 'Roads and skies drying out. Antelope breeding season begins and nights start to cool.', crowd: 'Lower' },
  { m: 'May', s: 'Dry', temp: '28° / 13°', note: 'Rains have ended and days are comfortable. Wildlife starts to gather around permanent water.', crowd: 'Rising' },
  { m: 'June', s: 'Dry', temp: '26° / 10°', note: 'Cool, sunny days and cold nights. Shrinking waterholes make game easier to find.', crowd: 'High' },
  { m: 'July', s: 'Dry', temp: '26° / 9°', note: 'Okavango Delta water levels suit boat and mokoro trips. Chobe and Moremi are in full swing.', crowd: 'Peak' },
  { m: 'August', s: 'Dry', temp: '29° / 13°', note: 'Clear skies and excellent viewing on land and water. Usually the busiest month.', crowd: 'Peak' },
  { m: 'September', s: 'Dry', temp: '33° / 17°', note: 'Hot and dry. Wildlife concentrates at the scarce water, so sightings are strong.', crowd: 'Peak' },
  { m: 'October', s: 'Dry', temp: '34° / 21°', note: 'Very hot, with sparse vegetation and strong sightings. Plan activities for early morning and late afternoon.', crowd: 'Peak, easing' },
  { m: 'November', s: 'Green', temp: '34° / 22°', note: 'First rains arrive. Migrant birds return and many young animals are born.', crowd: 'Shoulder' },
  { m: 'December', s: 'Green', temp: '33° / 21°', note: 'Afternoon thunderstorms, blooming trees and newborn animals. Green-season rates at many camps.', crowd: 'Lower' },
]

const BADGE = {
  Green: 'bg-green-100 text-green-800',
  Transition: 'bg-yellow-100 text-yellow-800',
  Dry: 'bg-amber-100 text-amber-800',
}

const TIPS = [
  { emoji: '🦁', title: 'First safari', text: 'June to October. This is the dry season, and the Botswana Tourism Organisation gives April to October as the best period for weather and game viewing.' },
  { emoji: '🛶', title: 'Okavango water activities', text: 'The flood water that reaches the Delta peaks during the dry months, roughly June to August, though the timing varies from year to year.' },
  { emoji: '🐦', title: 'Birds and baby animals', text: 'November to March, the green season. Expect lush scenery, migratory birds, fewer visitors and lower rates.' },
  { emoji: '💰', title: 'Better value', text: 'January to March, and parts of November, December and April, usually have lower camp rates than July to October.' },
]

export default function BotswanaBestTime() {
  return (
    <section className="mb-16">
      <p className="text-sm font-bold uppercase tracking-widest text-green-700">Month by Month</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Best Time to Visit Botswana, Month by Month
      </h2>
      <p className="mt-4 max-w-3xl leading-7 text-gray-700">
        Botswana has a dry season (roughly May to October), a green or rainy season (roughly November
        to March or April) and short transition periods between them. The Botswana Tourism Organisation
        describes January and February as the peak of the rains and gives April to October as the best
        months for weather and game viewing.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TIPS.map((t) => (
          <div key={t.title} className="rounded-2xl border border-green-200 bg-white p-5 shadow-sm">
            <div className="text-3xl">{t.emoji}</div>
            <h3 className="mt-2 font-bold text-gray-900">{t.title}</h3>
            <p className="mt-1 text-sm leading-6 text-gray-700">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-green-900 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Month</th>
              <th className="px-4 py-3 font-semibold">Season</th>
              <th className="px-4 py-3 font-semibold">Typical high / low (°C)</th>
              <th className="px-4 py-3 font-semibold">What to expect</th>
              <th className="px-4 py-3 font-semibold">Visitors</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MONTHS.map((r) => (
              <tr key={r.m} className="align-top">
                <td className="whitespace-nowrap px-4 py-3 font-bold text-gray-900">{r.m}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${BADGE[r.s]}`}>{r.s}</span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">{r.temp}</td>
                <td className="min-w-[260px] px-4 py-3 leading-6 text-gray-700">{r.note}</td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">{r.crowd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs leading-5 text-gray-500">
        Temperatures are typical highs and lows for Maun, the gateway to the Okavango Delta. Elsewhere
        it varies: summer shade temperatures can reach 38°C and higher, and winter nights can fall below
        freezing in the southwest. Rainfall and the timing of the Okavango flood change from year to
        year, so confirm conditions with your operator before booking. Sources: Botswana Tourism
        Organisation (botswanatourism.co.bw/climate), Wilderness and Audley Travel seasonal guides.
      </p>
    </section>
  )
}
