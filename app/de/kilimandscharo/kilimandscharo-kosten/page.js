import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({
    title: 'Kilimandscharo Kosten: Was kostet die Besteigung? | OSARE',
    description:
      'Was kostet eine Kilimandscharo-Besteigung? Veröffentlichte Preise von Anbietern aus Moshi, was im Preis steckt, was extra kommt und wie Sie Angebote vergleichen.',
        path: '/de/kilimandscharo/kilimandscharo-kosten',
  }),
}

const PRICES = [
  { vendor: 'Click Expedition', route: 'Marangu', days: '8 Tage', price: 'USD 2.550' },
  { vendor: 'Click Expedition', route: 'Machame', days: '9 Tage', price: 'USD 2.550' },
  { vendor: 'Click Expedition', route: 'Rongai', days: '9 Tage', price: 'USD 2.475' },
  { vendor: 'Click Expedition', route: 'Lemosho', days: '10 Tage', price: 'USD 2.750' },
  { vendor: 'Click Expedition', route: 'Nordumgehung', days: '10 Tage', price: 'USD 2.783' },
  { vendor: 'Altezza Travel', route: 'Nordumgehung', days: '8 Tage', price: 'ab USD 3.123' },
]

const DRIVERS = [
  { t: 'Route und Anzahl der Tage', d: 'Längere Routen kosten mehr, weil Mannschaft, Verpflegung und Parkgebühren für jeden Tag anfallen. Dafür geben sie dem Körper mehr Zeit zur Akklimatisierung.' },
  { t: 'Gruppengröße', d: 'Bei kleinen Gruppen verteilen sich die festen Kosten auf weniger Personen. Fragen Sie, für welche Gruppengröße ein Preis gilt.' },
  { t: 'Enthaltene Leistungen', d: 'Hotelnächte vor und nach der Tour, Flughafentransfers und Ausrüstung können im Preis stecken oder extra kosten. Nur Angebote mit gleichen Leistungen lassen sich vergleichen.' },
  { t: 'Parkgebühren', d: 'Die Gebühren des Nationalparks gehören zu jeder Besteigung. Seriöse Anbieter nennen sie im Angebot und erklären, ob sie im Preis enthalten sind.' },
  { t: 'Mannschaft und Anbieter', d: 'Führer, Träger und Koch müssen bezahlt werden. Fragen Sie, wie der Anbieter seine Träger bezahlt und ausrüstet.' },
  { t: 'Zeitpunkt', d: 'Manche Anbieter rechnen je nach Saison oder Termin unterschiedlich. Lassen Sie sich den Preis für Ihren Wunschtermin bestätigen.' },
]

const EXTRAS = [
  'Internationale Flüge nach Tansania',
  'Visum für Tansania',
  'Reiseversicherung mit Abdeckung für Trekking in großer Höhe',
  'Persönliche Ausrüstung oder Miete vor Ort',
  'Trinkgelder für die Mannschaft am Berg',
  'Zusätzliche Hotelnächte, falls nicht im Paket',
  'Reisemedizinische Beratung und Impfungen',
]

const FAQS = [
  {
    question: 'Was kostet eine Kilimandscharo-Besteigung?',
    answer:
      'Die bei OSARE von Anbietern veröffentlichten Preise für Kilimandscharo-Touren liegen im Oktober 2026 zwischen USD 2.475 und USD 3.123 pro Person, je nach Route, Dauer und Anbieter. Der Anbieter bestätigt den endgültigen Preis für Ihren Termin und Ihre Gruppengröße.',
  },
  {
    question: 'Warum sind die Preise so unterschiedlich?',
    answer:
      'Preise hängen von Route, Anzahl der Tage, Gruppengröße, den enthaltenen Leistungen und vom Anbieter ab. Vergleichen Sie deshalb nur Angebote, die dieselben Leistungen enthalten.',
  },
  {
    question: 'Was ist im Preis normalerweise nicht enthalten?',
    answer:
      'Meist nicht enthalten sind internationale Flüge, das Visum für Tansania, die Reiseversicherung, persönliche Ausrüstung und Trinkgelder für die Mannschaft. Lassen Sie sich das schriftlich bestätigen.',
  },
  {
    question: 'Sind sehr günstige Angebote ein Problem?',
    answer:
      'Sehr niedrige Preise sollten Sie hinterfragen. Fragen Sie nach der Lizenz des Anbieters, nach der Bezahlung der Träger und nach der Sicherheitsausrüstung, bevor Sie buchen.',
  },
  {
    question: 'Kann ich über OSARE direkt bezahlen?',
    answer:
      'Nein. OSARE ist ein Verzeichnis und leitet Ihre Anfrage an den Anbieter weiter. Preis, Termin und Zahlung klären Sie direkt mit dem Anbieter.',
  },
]

export default function KilimandscharoKostenPage() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <main lang="de" className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-900 to-orange-700 px-6 py-16 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Kosten · Tansania
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Kilimandscharo besteigen: Was kostet das?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            Die Kosten hängen von Route, Dauer, Gruppengröße und Leistungen ab. Hier sehen Sie
            veröffentlichte Preise von Anbietern aus Moshi, was im Preis steckt, was extra kommt
            und worauf Sie beim Vergleich achten sollten.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/request-a-trip?destination=Kilimanjaro"
              className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
            >
              Kilimandscharo-Tour anfragen
            </Link>
            <Link
              href="/de/kilimandscharo"
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Routen im Überblick
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* KURZANTWORT */}
        <section className="mb-12 rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Kurz gesagt</p>
          <p className="mt-3 text-xl font-bold leading-8 text-emerald-950">
            Die bei OSARE veröffentlichten Preise für Kilimandscharo-Touren liegen derzeit
            zwischen USD 2.475 und USD 3.123 pro Person.
          </p>
          <p className="mt-3 leading-7 text-emerald-900">
            Das sind die Preise, die die Anbieter selbst nennen. Der endgültige Preis hängt von Ihrem
            Termin, der Gruppengröße und den Leistungen ab und wird vom Anbieter bestätigt.
          </p>
        </section>

        {/* PREISTABELLE */}
        <section className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">Beispiele</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Veröffentlichte Preise, Stand Oktober 2026</h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            Preise in US-Dollar pro Person, so wie die Anbieter sie veröffentlichen. Die Touren
            unterscheiden sich in Dauer und Leistungen. Fragen Sie vor der Buchung nach dem
            vollständigen Leistungsumfang.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[520px] text-left">
              <thead className="bg-stone-100 text-sm font-bold uppercase tracking-wide text-gray-600">
                <tr>
                  <th className="px-5 py-3">Anbieter</th>
                  <th className="px-5 py-3">Route</th>
                  <th className="px-5 py-3">Dauer</th>
                  <th className="px-5 py-3">Preis pro Person</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((p) => (
                  <tr key={`${p.vendor}-${p.route}-${p.days}`} className="border-t border-gray-100">
                    <td className="px-5 py-4 font-semibold text-gray-900">{p.vendor}</td>
                    <td className="px-5 py-4 text-gray-700">{p.route}</td>
                    <td className="px-5 py-4 text-gray-700">{p.days}</td>
                    <td className="px-5 py-4 font-extrabold text-emerald-700">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bei Click Expedition sind laut Anbieter Hotelnächte, Transfers, Parkgebühren, Mannschaft
            und Mahlzeiten enthalten. Die genauen Leistungen der anderen Angebote bestätigt der
            jeweilige Anbieter.
          </p>
        </section>

        {/* EINFLUSSFAKTOREN */}
        <section className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">Preisfaktoren</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Wovon der Preis abhängt</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {DRIVERS.map((x) => (
              <article key={x.t} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">{x.t}</h3>
                <p className="mt-2 leading-7 text-gray-600">{x.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ZUSATZKOSTEN */}
        <section className="mb-16 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Was zusätzlich kosten kann</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Planen Sie diese Posten neben dem Tourpreis ein. Welche davon im Paket stecken,
            unterscheidet sich je nach Anbieter.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {EXTRAS.map((t) => (
              <li key={t} className="rounded-xl bg-stone-50 px-4 py-3 text-gray-700">• {t}</li>
            ))}
          </ul>
        </section>

        {/* GUENSTIGE ANGEBOTE */}
        <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-extrabold text-amber-950">Sehr günstige Angebote hinterfragen</h2>
          <p className="mt-4 leading-7 text-amber-900">
            Ein auffallend niedriger Preis kann bedeuten, dass an Sicherheit, Verpflegung oder an der
            Bezahlung der Träger gespart wird. Fragen Sie nach der Lizenz des Anbieters, nach der
            Bezahlung und Ausrüstung der Träger, nach der Gruppengröße und nach der Sicherheitsausrüstung.
            Lassen Sie sich Preis und Leistungen schriftlich geben.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">Häufige Fragen</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Fragen zu den Kosten</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {FAQS.map((f) => (
              <article key={f.question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{f.question}</h3>
                <p className="mt-2 leading-7 text-gray-600">{f.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ANFRAGE */}
        <section className="mb-16 rounded-3xl bg-gradient-to-br from-emerald-900 to-green-800 p-8 text-white sm:p-10">
          <h2 className="text-3xl font-extrabold">Preis für Ihren Termin anfragen</h2>
          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            OSARE ist ein Verzeichnis. Wir leiten Ihre Anfrage an den Anbieter weiter, und der
            Anbieter nennt Ihnen Preis und Leistungen für Ihren Termin. Das Anfrageformular ist
            auf Englisch.
          </p>
          <Link
            href="/request-a-trip?destination=Kilimanjaro"
            className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 font-bold text-green-950 transition hover:bg-amber-300"
          >
            Kilimandscharo-Tour anfragen
          </Link>
        </section>

        <section className="flex flex-wrap gap-5 border-t pt-8">
          <Link href="/de/kilimandscharo" className="font-bold text-green-700 hover:underline">
            Kilimandscharo: Routen, Reisezeit, Ablauf
          </Link>
          <Link href="/guides/tanzania/kilimanjaro" className="font-bold text-green-700 hover:underline">
            Kilimanjaro guide in English
          </Link>
          <Link href="/impressum" className="font-bold text-green-700 hover:underline">
            Impressum
          </Link>
        </section>
      </div>
    </main>
  )
}
