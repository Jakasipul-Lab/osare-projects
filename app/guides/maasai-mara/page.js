import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Maasai Mara Travel Guide 2026 — Best Time, How to Get There & Where to Stay | OSARE',
  description: 'Planning a Maasai Mara safari? Here is when to go, how to get there from Nairobi, where to stay (from budget bandas to luxury camps), what to pack, and what it costs.',
  path: '/guides/maasai-mara',
})

const FAQS = [
  {
    question: 'When is the best time to visit Maasai Mara?',
    answer: 'June through October is the dry season with the best game viewing. For the famous river crossings during the Great Migration, aim for late July through October. Avoid March and April, when heavy rains make roads difficult.',
  },
  {
    question: 'How do I get to Maasai Mara from Nairobi?',
    answer: 'By road, it is about 230km and roughly 5 hours on mostly paved roads to the main Sekenani Gate. By air, small planes fly from Nairobi’s Wilson Airport directly to airstrips inside the reserve, usually in 45 minutes to an hour.',
  },
  {
    question: 'Where can I stay in Maasai Mara on a budget?',
    answer: 'Alongside luxury tented camps and mid-range lodges, there are budget-friendly bandas, public campsites, and guesthouses run by smaller local operators — a great way to experience the Mara without luxury prices.',
  },
  {
    question: 'What should I pack for a Maasai Mara safari?',
    answer: 'Neutral-colored clothing, warm layers for cold early-morning game drives, sun protection, binoculars, and a camera or phone with plenty of storage.',
  },
]

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1e3a8a' }}>{title}</h2>
      <div style={{ marginTop: 12, color: '#334155', lineHeight: 1.8 }}>{children}</div>
    </div>
  )
}

export default function MasaiMaraGuide() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ display: 'inline-block', background: '#fff7ed', color: '#f97316', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          TRAVEL GUIDE
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 16, lineHeight: 1.2 }}>
          Maasai Mara: The Complete Guide for First-Time Visitors
        </h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 12 }}>
          Kenya&rsquo;s most famous safari destination &mdash; rolling savannah, huge cat populations, and the
          Great Migration, one of the world&rsquo;s last great wildlife spectacles. Here&rsquo;s what to know
          before you go.
        </p>
      </div>

      <div style={{ marginBottom: 8 }}>
        <Link href="/guides" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Back to all guides</Link>
      </div>

      <Section title="When to Go">
        <p>
          The best months are <strong>June through October</strong> &mdash; dry season, easier wildlife viewing,
          and animals gathering near water. If you want to see the famous river crossings during the Great
          Migration, aim for <strong>late July through October</strong>.
        </p>
        <p style={{ marginTop: 12 }}>
          Avoid <strong>March and April</strong> &mdash; heavy rains make roads difficult. November through May
          is greener, quieter, and cheaper, with excellent birdwatching, but come with flexibility for
          occasional rain.
        </p>
      </Section>

      <Section title="Getting There">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>By road:</strong> About 230km / roughly 5 hours&rsquo; drive from Nairobi, mostly on paved
            roads to the main Sekenani Gate.
          </li>
          <li>
            <strong>By air:</strong> The faster option &mdash; small planes fly from Nairobi&rsquo;s Wilson
            Airport directly to airstrips inside the reserve, usually in 45 minutes to an hour.
          </li>
        </ul>
      </Section>

      <Section title="Where to Stay">
        <p>This is where your budget really shapes the trip:</p>
        <ul style={{ paddingLeft: 20, marginTop: 12 }}>
          <li style={{ marginBottom: 10 }}><strong>Luxury tented camps &amp; lodges</strong> &mdash; top-end comfort, often inside private conservancies.</li>
          <li style={{ marginBottom: 10 }}><strong>Mid-range camps</strong> &mdash; comfortable, still an authentic safari feel.</li>
          <li><strong>Budget-friendly options</strong> &mdash; public campsites, bandas (simple cabins), and guesthouses run by smaller local operators, a great way to experience the Mara without luxury prices.</li>
        </ul>
        <p style={{ marginTop: 16 }}>
          <Link href="/safari" style={{ color: '#1e3a8a', fontWeight: 700, textDecoration: 'underline' }}>
            Browse verified safari operators and stays on OSARE &rarr;
          </Link>
        </p>
      </Section>

      <Section title="What to Pack">
        <p>
          Neutral-colored clothing, warm layers for early morning game drives (it gets cold before sunrise), sun
          protection, binoculars, and a good camera or phone with extra storage.
        </p>
      </Section>

      <Section title="What It Costs">
        <p>
          Costs vary widely depending on accommodation type and whether you book a group tour or a private
          safari &mdash; from budget-friendly shared trips to premium private camps. Park and conservancy fees
          also vary by area, so it&rsquo;s worth confirming current rates directly with your chosen operator
          before booking.
        </p>
      </Section>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', borderTop: '1px solid #e2e8f0', paddingTop: 24 }}>
        <Link href="/guides/packing-best-time" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Previous: What to Pack &amp; Best Time</Link>
        <Link href="/guides" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>Back to all guides &rarr;</Link>
      </div>

      <div style={{ marginTop: 56, padding: 28, background: '#f0f9ff', borderRadius: 16, textAlign: 'center' }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1e3a8a' }}>Ready to plan your Maasai Mara trip?</h3>
        <p style={{ color: '#475569', marginTop: 8 }}>
          Compare verified safari operators, camps, and stays &mdash; and message them directly, free of charge.
        </p>
        <Link
          href="/safari"
          style={{ display: 'inline-block', marginTop: 16, background: '#1e3a8a', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: 999, textDecoration: 'none' }}
        >
          Browse Safaris on OSARE
        </Link>
      </div>
    </div>
  )
}
