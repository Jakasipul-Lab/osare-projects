import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

const base = buildMetadata({
  title: 'Kilimandscharo besteigen: Routen, beste Reisezeit, Ablauf | OSARE',
  description:
    'Kilimandscharo-Besteigung planen: Marangu, Machame, Lemosho, Rongai, Umbwe und Nordumgehung im Vergleich, beste Reisezeit, Höhenkrankheit, Leistungen und Anfrage bei Anbietern aus Moshi.',
  path: '/de/kilimandscharo',
})

export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: {
      de: 'https://www.easafariroutes.com/de/kilimandscharo',
      en: 'https://www.easafariroutes.com/guides/tanzania/kilimanjaro',
    },
  },
  openGraph: { ...base.openGraph, locale: 'de_DE' },
}

const ROUTES = [
  { name: 'Marangu', days: '5–6 Tage', edge: 'border-t-green-500', badge: 'bg-green-50 text-green-800', text: 'Die einzige Route mit Hüttenunterkunft statt Zelten. Oft die günstigste Variante, doch der kurze Zeitplan lässt weniger Zeit zur Akklimatisierung.' },
  { name: 'Machame', days: '6–7 Tage', edge: 'border-t-orange-500', badge: 'bg-orange-50 text-orange-800', text: 'Eine beliebte, landschaftlich reizvolle Route durch Regenwald und Moorland, mit der Barranco-Wand. Übernachtet wird im Zelt.' },
  { name: 'Lemosho', days: '6–8 Tage', edge: 'border-t-blue-500', badge: 'bg-blue-50 text-blue-800', text: 'Der Start liegt im Westen, anfangs ruhiger. Der längere Zeitplan hilft dem Körper, sich an die Höhe zu gewöhnen.' },
  { name: 'Rongai', days: '6–7 Tage', edge: 'border-t-teal-500', badge: 'bg-teal-50 text-teal-800', text: 'Der Aufstieg beginnt im Norden, nahe der Grenze zu Kenia. Trockener und weniger Andrang als auf anderen Routen.' },
  { name: 'Nordumgehung (Northern Circuit)', days: '8–9 Tage', edge: 'border-t-purple-500', badge: 'bg-purple-50 text-purple-800', text: 'Die längste Route, sie umrundet die Nordhänge. Gute Akklimatisierung und wenige andere Bergsteiger.' },
  { name: 'Umbwe', days: '5–6 Tage', edge: 'border-t-red-500', badge: 'bg-red-50 text-red-800', text: 'Kurz und steil. Nur für erfahrene, sehr fitte Bergwanderer geeignet.' },
]

const ALTEZZA = [
  { name: 'Machame-Route', days: '6 bis 7 Tage', note: 'Regenwald, Moorland und Barranco-Wand. Zelt.', price: 'Preis ansehen', href: '/safari/altezza-travel-kilimanjaro-machame-route-6-to-7-days-trek-e261bbc6' },
  { name: 'Lemosho-Route', days: '6 bis 8 Tage', note: 'Ruhiger Start im Westen, langer Zeitplan zur Akklimatisierung.', price: 'Preis ansehen', href: '/safari/altezza-travel-kilimanjaro-lemosho-route-6-to-8-days-trek-5964c24d' },
  { name: 'Nordumgehung', days: '8 Tage', note: 'Die längste Route, wenige andere Bergsteiger.', price: 'Ab USD 3.123', href: '/safari/altezza-travel-kilimanjaro-northern-circuit-route-8-days-trek-ce215cb1' },
  { name: 'Marangu-Route', days: '5 bis 6 Tage', note: 'Die einzige Route mit Hütten statt Zelten.', price: 'Preis ansehen', href: '/safari/altezza-travel-kilimanjaro-marangu-route-5-to-6-days-trek-f9574fd9' },
  { name: 'Rongai-Route', days: '6 bis 7 Tage', note: 'Aufstieg von Norden. Trockener und ruhiger.', price: 'Preis ansehen', href: '/safari/altezza-travel-kilimanjaro-rongai-route-6-to-7-days-trek-c99c2147' },
  { name: 'Umbwe-Route', days: '6 bis 7 Tage', note: 'Kurz und steil. Für erfahrene, fitte Bergwanderer.', price: 'Preis ansehen', href: '/safari/altezza-travel-kilimanjaro-umbwe-route-6-to-7-days-trek-68e2fbc6' },
]

const SEASONS = [
  { title: 'Haupttrockenzeit: Juni bis Oktober', text: 'Klarer Himmel und die meisten Besteiger am Berg. Die Nächte nahe dem Gipfel sind sehr kalt.', box: 'border-amber-300 bg-amber-50', head: 'text-amber-900' },
  { title: 'Kleine Trockenzeit: Januar bis Anfang März', text: 'Meist gutes Wetter und weniger Andrang als in der Jahresmitte. Eine beliebte Zeit für Gipfelaussichten.', box: 'border-yellow-300 bg-yellow-50', head: 'text-yellow-900' },
  { title: 'Große Regenzeit: April und Mai', text: 'Nasse Wege und wenige Besteiger. Manche Anbieter fahren dann einen reduzierten Fahrplan.', box: 'border-blue-300 bg-blue-50', head: 'text-blue-900' },
  { title: 'Kleine Regenzeit: November', text: 'Nachmittagsschauer sind häufig. Die Touren finden trotzdem statt.', box: 'border-sky-300 bg-sky-50', head: 'text-sky-900' },
]

const FAQS = [
  {
    question: 'Brauche ich für den Kilimandscharo Bergerfahrung?',
    answer:
      'Der Uhuru Peak (5.895 m) kann ohne technische Kletterkenntnisse erreicht werden. Durch die Höhe und die mehrtägige Dauer ist die Besteigung aber eine ernsthafte Trekkingtour und erfordert eine gute Grundkondition.',
  },
  {
    question: 'Kann ich den Kilimandscharo allein besteigen?',
    answer:
      'Nein. Für die Besteigung ist ein lizenzierter Bergführer erforderlich. Pakete enthalten in der Regel Führer, Träger, Koch und Verpflegung am Berg.',
  },
  {
    question: 'Welche Route eignet sich am besten?',
    answer:
      'Längere Routen wie Lemosho oder die Nordumgehung geben dem Körper mehr Zeit zur Akklimatisierung und verbessern die Chance auf den Gipfel. Marangu und Umbwe sind kürzer, bieten aber weniger Zeit zur Anpassung an die Höhe.',
  },
  {
    question: 'Was ist in einem Paket normalerweise enthalten?',
    answer:
      'Meist Parkgebühren, Camping- oder Hüttengebühren, Rettungsgebühren, Führer, Träger, Koch und Mahlzeiten, Zelte (außer auf Marangu), Transfers und Hotelnächte in Moshi oder Arusha. Bitte vor der Buchung genau bestätigen lassen, was im Preis enthalten ist.',
  },
  {
    question: 'Was ist normalerweise nicht enthalten?',
    answer:
      'Internationale Flüge, das Visum für Tansania, die Reiseversicherung, persönliche Ausrüstung und das Trinkgeld für die Mannschaft am Berg.',
  },
]

export default function KilimandscharoPage() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <main lang="de" className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-900 to-orange-700 px-6 py-16 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">🇹🇿 TANSANIA</span>
            <span className="rounded-full bg-amber-400 px-4 py-2 text-slate-900">🏔️ 5.895 m</span>
            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">Afrikas höchster Berg</span>
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Tansania · Bergführer
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Kilimandscharo besteigen
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            Afrikas höchster Berg misst 5.895 m. Der Uhuru Peak lässt sich ohne
            technische Kletterkenntnisse erreichen, doch die Höhe macht die
            Besteigung zu einer ernsthaften Tour. Entscheidend sind die richtige
            Route und genügend Tage zur Akklimatisierung.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/request-a-trip?destination=Kilimanjaro"
              className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
            >
              Kilimandscharo-Tour anfragen
            </Link>
            <Link
              href="/guides/tanzania/kilimanjaro"
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              English version
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* KURZFAKTEN */}
        <section className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Fact title="Gipfel" value="Uhuru Peak, 5.895 m" />
          <Fact title="Nationalpark" value="Kilimanjaro National Park (TANAPA)" />
          <Fact title="Ausgangsorte" value="Moshi und Arusha" />
          <Fact title="Nächster Flughafen" value="Kilimanjaro International (JRO)" />
        </section>

        {/* ROUTEN */}
        <section id="routen" className="mb-16 scroll-mt-24">
          <Heading
            eyebrow="Route wählen"
            title="Die Kilimandscharo-Routen im Vergleich"
            text="Längere Routen geben dem Körper mehr Zeit, sich an die Höhe zu gewöhnen. Das verbessert die Chance, den Gipfel zu erreichen."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {ROUTES.map((r) => (
              <article key={r.name} className={`rounded-2xl border border-gray-200 border-t-4 bg-white p-6 shadow-sm ${r.edge}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${r.badge}`}>{r.days}</span>
                </div>
                <p className="mt-3 leading-7 text-gray-600">{r.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-green-200 bg-white p-5">
            <p className="font-semibold text-gray-900">
              Unsicher, welche Route passt? Nennen Sie uns Kondition, Reisedatum und Gruppengröße.
            </p>
            <Link
              href="/request-a-trip?destination=Kilimanjaro"
              className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-green-950 transition hover:bg-amber-300"
            >
              Meine Tour planen
            </Link>
          </div>
        </section>

        {/* BUCHBARE TOUREN */}
        <section className="mb-16">
          <Heading
            eyebrow="Tour mit Preis"
            title="Touren von Click Expedition"
            text="Angeboten von Click Expedition aus Moshi. Hotelnächte, Transfers, Parkgebühren, Mannschaft und Mahlzeiten sind enthalten."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              { name: 'Marangu-Route, 8 Tage', note: 'Übernachtung in Hütten, Akklimatisierungstag in Horombo', href: '/guides/tanzania/kilimanjaro/marangu' },
              { name: 'Machame-Route, 9 Tage', note: 'Zelt, die beliebteste landschaftlich reizvolle Route', href: '/guides/tanzania/kilimanjaro/machame' },
            ].map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group rounded-2xl border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700">{c.name}</h3>
                <p className="mt-2 leading-7 text-gray-700">{c.note}</p>
                <p className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-green-600 px-4 py-2 text-xl font-extrabold text-white">USD 2.550</span>
                  <span className="text-sm font-semibold text-gray-600">pro Person</span>
                </p>
                <p className="mt-3 text-sm font-bold text-green-700">Ablauf ansehen (auf Englisch) →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ALTEZZA */}
        <section className="mb-16">
          <Heading
            eyebrow="Weitere Touren"
            title="Weitere Routen mit Altezza Travel"
            text="Ein lizenzierter Anbieter aus Moshi. Öffnen Sie eine Route, sehen Sie Preis und Leistungen und senden Sie Ihre Anfrage."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ALTEZZA.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-bold text-indigo-700">{c.days}</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900 group-hover:text-indigo-700">{c.name}</h3>
                <p className="mt-2 leading-7 text-gray-700">{c.note}</p>
                <p className="mt-4">
                  <span className="rounded-full bg-indigo-600 px-4 py-2 text-base font-extrabold text-white">{c.price}</span>
                </p>
                <p className="mt-3 text-sm font-bold text-indigo-700">Route ansehen →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* REISEZEIT */}
        <section className="mb-16">
          <Heading
            eyebrow="Saisonplanung"
            title="Die beste Reisezeit"
            text="Der Kilimandscharo kann das ganze Jahr über bestiegen werden. Die Trockenzeiten sind am beliebtesten."
          />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {SEASONS.map((c) => (
              <article key={c.title} className={`rounded-2xl border p-6 shadow-sm ${c.box}`}>
                <h3 className={`text-lg font-bold ${c.head}`}>{c.title}</h3>
                <p className="mt-2 leading-7 text-gray-700">{c.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* LEISTUNGEN */}
        <section className="mb-16 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Was ein Paket normalerweise enthält</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Für die Besteigung des Kilimandscharo ist ein lizenzierter Bergführer
            erforderlich. Die Preise hängen von Route, Anzahl der Tage und
            Gruppengröße ab. Lassen Sie sich vor der Buchung genau bestätigen,
            was im Preis enthalten ist.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Parkgebühren, Camping- oder Hüttengebühren und Rettungsgebühren',
              'Lizenzierter Bergführer, Assistenzführer und Träger',
              'Koch und Mahlzeiten am Berg',
              'Zelte und Campingausrüstung (außer auf Marangu)',
              'Flughafen- und Hoteltransfers',
              'Hotelnächte in Moshi oder Arusha vor und nach der Tour',
            ].map((t) => (
              <li key={t} className="rounded-xl bg-stone-50 px-4 py-3 text-gray-700">✓ {t}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Meist nicht enthalten: internationale Flüge, das Visum für Tansania,
            die Reiseversicherung, persönliche Ausrüstung und Trinkgelder für die
            Mannschaft am Berg.
          </p>
        </section>

        {/* HOEHENKRANKHEIT */}
        <section className="mb-16 rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Gesundheit und Sicherheit</p>
          <h2 className="mt-2 text-2xl font-extrabold text-amber-950">Höhenkrankheit</h2>
          <p className="mt-4 leading-7 text-amber-900">
            Die Höhenkrankheit kann jeden treffen, unabhängig von der Fitness.
            Gehen Sie langsam, trinken Sie reichlich Wasser und wählen Sie eine
            Route mit genügend Tagen zur Akklimatisierung. Sagen Sie Ihrem
            Bergführer sofort Bescheid bei Kopfschmerzen, Übelkeit oder
            Schwindel. Der Abstieg ist die wichtigste Behandlung.
          </p>
          <p className="mt-4 text-sm font-semibold text-amber-800">
            Lassen Sie sich vor der Tour von einem Arzt beraten und schließen Sie
            eine Reiseversicherung ab, die Trekking in großer Höhe abdeckt.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <Heading
            eyebrow="Häufige Fragen"
            title="Fragen zur Kilimandscharo-Besteigung"
            text="Kurze Antworten auf die Fragen, die Reisende am häufigsten stellen."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
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
          <h2 className="text-3xl font-extrabold">Ihre Anfrage</h2>
          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            OSARE ist ein Verzeichnis. Wir leiten Ihre Anfrage an den Anbieter
            weiter. Preis, Termin und Buchung klären Sie direkt mit dem Anbieter.
            Das Anfrageformular ist auf Englisch.
          </p>
          <Link
            href="/request-a-trip?destination=Kilimanjaro"
            className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 font-bold text-green-950 transition hover:bg-amber-300"
          >
            Kilimandscharo-Tour anfragen
          </Link>
          <p className="mt-6 text-sm text-green-100">
            Offizielle Informationen:{' '}
            <a href="https://www.tanzaniaparks.go.tz" className="underline" rel="noopener noreferrer" target="_blank">Tanzania National Parks (TANAPA)</a>
            {' · '}
            <a href="https://visa.immigration.go.tz" className="underline" rel="noopener noreferrer" target="_blank">Tansania e-Visum (Einwanderungsbehörde)</a>
          </p>
        </section>

        {/* NAVIGATION */}
        <section className="flex flex-wrap gap-5 border-t pt-8">
          <Link href="/guides/tanzania/kilimanjaro" className="font-bold text-green-700 hover:underline">
            Kilimanjaro guide in English
          </Link>
          <Link href="/guides" className="font-bold text-green-700 hover:underline">
            Alle Reiseführer
          </Link>
          <Link href="/impressum" className="font-bold text-green-700 hover:underline">
            Impressum
          </Link>
        </section>
      </div>
    </main>
  )
}

function Heading({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-green-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-gray-600">{text}</p>
    </div>
  )
}

function Fact({ title, value }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-700">{title}</h3>
      <p className="mt-2 font-semibold text-gray-900">{value}</p>
    </div>
  )
}
