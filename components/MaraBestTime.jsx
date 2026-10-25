import Link from 'next/link'

const MONTHS = [
  { m: 'January', s: 'Green', note: 'Mostly mild with short afternoon showers. Good birding and few visitors. The wildebeest calving happens in the southern Serengeti (Tanzania), while the Mara keeps its resident wildlife all year.', crowd: 'Low' },
  { m: 'February', s: 'Green', note: 'Many newborn animals, and big cats hunting are easier to see. Quieter sightings, including in the private conservancies around the reserve.', crowd: 'Low' },
  { m: 'March', s: 'Rains', note: 'Afternoon thundershowers can flood roads, and some camps begin closing for the low season.', crowd: 'Low' },
  { m: 'April', s: 'Long rains', note: 'Usually the wettest month. Roads can be difficult and some lodges close for maintenance.', crowd: 'Lowest' },
  { m: 'May', s: 'Long rains', note: 'Still wet, and the rain is hard to predict. Cooler conditions begin and last until about September. Camp rates are low.', crowd: 'Low' },
  { m: 'June', s: 'Dry', note: 'The long rains end and the busy season starts. Much drier and the coolest time of year. Vegetation is lush, and most migration herds have not yet reached the Mara.', crowd: 'Rising' },
  { m: 'July', s: 'Dry', note: 'The driest month, with warm days and cold nights and mornings. Wildebeest begin arriving and river crossings can start. Excellent for the Big Five, but prices rise and sightings can be crowded.', crowd: 'Peak' },
  { m: 'August', s: 'Dry', note: 'Dry, with cold nights. Popular for the migration and the Mara River crossings. Crossings cannot be predicted: herds may wait for weeks, or cross several times in one day.', crowd: 'Peak' },
  { m: 'September', s: 'Dry', note: 'Hot days and cold nights. The migration is in full swing and the herds are mostly concentrated in the Mara, with strong predator sightings.', crowd: 'Peak' },
  { m: 'October', s: 'Dry', note: 'One of the hottest months. Most herds are still in and around the Mara, then begin moving back south toward the Serengeti.', crowd: 'Peak, easing' },
  { m: 'November', s: 'Short rains', note: 'Short afternoon bursts followed by clear skies. The herds largely leave the Mara for the southern Serengeti. Lower rates and fewer visitors.', crowd: 'Low' },
  { m: 'December', s: 'Green', note: 'Less busy early in the month, but the reserve can be busy over the festive period, so book early.', crowd: 'Busy at festive time' },
]

const BADGE = {
  Dry: 'bg-amber-100 text-amber-800',
  Green: 'bg-emerald-100 text-emerald-800',
  Rains: 'bg-sky-100 text-sky-800',
  'Long rains': 'bg-sky-100 text-sky-800',
  'Short rains': 'bg-cyan-100 text-cyan-800',
}

const TIPS = [
  { emoji: '🦁', title: 'Best game viewing', text: 'July to October, the dry season, when animals gather near water and the Big Five are easiest to find.' },
  { emoji: '🌾', title: 'Mara River crossings', text: 'Roughly July to October, with August and September the usual peak. No crossing can be guaranteed, so allow several days.' },
  { emoji: '💰', title: 'Quieter and better value', text: 'January to March, and November. Fewer visitors, lower rates, green scenery and newborn animals.' },
  { emoji: '🌧️', title: 'Hardest months', text: 'April and May, the long rains. Roads can be difficult and some lodges close, so check before booking.' },
]

export default function MaraBestTime() {
  return (
    <section id="best-time" className="bg-amber-50/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="font-bold uppercase tracking-widest text-emerald-700">Month by month</p>
        <h2 className="mt-3 text-4xl font-black text-[#7c4a03]">Best Time to Visit the Maasai Mara</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          The Mara has wildlife all year. The dry season runs roughly June to October, with long rains around
          April and May and short rains in November. The Great Migration herds spend most of the year in the
          Serengeti in Tanzania and are in the Mara for only part of it, so the month you choose changes what you see.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIPS.map((t) => (
            <div key={t.title} className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
              <div className="text-3xl">{t.emoji}</div>
              <h3 className="mt-3 text-lg font-black text-[#7c4a03]">{t.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto rounded-3xl border border-amber-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#7c4a03] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Month</th>
                <th className="px-4 py-3 font-semibold">Season</th>
                <th className="px-4 py-3 font-semibold">What to expect</th>
                <th className="px-4 py-3 font-semibold">Visitors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {MONTHS.map((r) => (
                <tr key={r.m} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 font-bold text-slate-900">{r.m}</td>
                  <td className="px-4 py-3">
                    <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ${BADGE[r.s]}`}>{r.s}</span>
                  </td>
                  <td className="min-w-[280px] px-4 py-3 leading-6 text-slate-700">{r.note}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-700">{r.crowd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          Timing of rains and herd movements changes from year to year, and nothing in the wild can be guaranteed.
          Confirm conditions with your operator before booking. Sources: Asilia Africa, Go2Africa and Duma Explorer seasonal guides.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[#7c4a03] p-6 text-white">
          <p className="max-w-xl text-lg font-bold">Tell us your month and we will help you plan your Mara trip.</p>
          <Link
            href="/request-a-trip?destination=Maasai%20Mara"
            className="rounded-full bg-white px-6 py-3 font-bold text-[#7c4a03] hover:bg-amber-100"
          >
            Request a trip
          </Link>
        </div>
      </div>
    </section>
  )
}
