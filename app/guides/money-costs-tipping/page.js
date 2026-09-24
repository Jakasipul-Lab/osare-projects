import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Money, Costs & Tipping in East Africa 2026 - A Traveler's Guide | OSARE",
  description: "What currency to carry, how mobile money like M-Pesa works, typical safari and daily costs, and how much to tip guides, drivers and lodge staff.",
  path: '/guides/money-costs-tipping',
})

const FAQS = [
  {
    question: "Should I carry US dollars or local currency?",
    answer: "Both. US dollars, post-2009 bills with no marks or tears, are widely accepted for park fees, safari packages and hotel bills. Carry local currency, such as Kenyan, Tanzanian or Ugandan Shillings, for markets, tips, and small daily purchases.",
  },
  {
    question: "What is M-Pesa and do I need it?",
    answer: "M-Pesa is mobile money used across Kenya, with similar systems in Tanzania and Uganda, for everything from taxi fares to market stalls. You do not need it as a tourist, but many vendors and drivers prefer it, and it is easy to set up with a local SIM if you are staying a while.",
  },
  {
    question: "How much should I tip on safari?",
    answer: "A common guideline is USD 10 to 20 per day for your driver-guide, and USD 5 to 10 per day split among lodge and camp staff, paid in cash at the end of your stay or trip. Check whether your operator's price already includes a service charge.",
  },
  {
    question: "Is bargaining expected at markets?",
    answer: "Yes, at open markets and curio stalls, polite, good-natured bargaining is normal and expected. In shops with fixed price tags, prices are usually final.",
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

function Photo({ src, alt, caption }) {
  return (
    <div style={{ margin: '28px 0' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 16, display: 'block' }} />
      {caption ? <p style={{ marginTop: 10, fontSize: 14, color: '#64748b', textAlign: 'center' }}>{caption}</p> : null}
    </div>
  )
}

export default function MoneyCostsGuide() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ display: 'inline-block', background: '#fff7ed', color: '#f97316', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          TRAVEL GUIDE
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 16, lineHeight: 1.2 }}>
          Money, Costs &amp; Tipping in East Africa
        </h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 12 }}>
          What to carry, what things actually cost, and how tipping really works on the ground &mdash;
          not the guidebook version, the everyday one.
        </p>
      </div>

      <div style={{ marginBottom: 8 }}>
        <Link href="/guides" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Back to all guides</Link>
      </div>

      <Section title="Currency to carry">
        <p>
          Bring a mix. <strong>US dollars</strong> (2009 or newer bills, no marks, tears or stains &mdash; older
          or damaged notes are often refused) cover park entry fees, safari packages and hotel bills.
          <strong> Local currency</strong> &mdash; Kenyan, Tanzanian or Ugandan Shillings &mdash; is what you'll
          actually use day to day: markets, tips, street food, small taxis.
        </p>
      </Section>

      <Section title="Mobile money">
        <p>
          In Kenya especially, M-Pesa (mobile money sent by phone) is how most everyday transactions
          happen, from a market stall to a matatu fare. As a short-term visitor you don't need it, but if
          you're staying longer, a local SIM with mobile money set up makes daily life noticeably easier,
          and many small vendors genuinely prefer it over cash.
        </p>
      </Section>

      <Photo
        src="https://images.unsplash.com/photo-1747774999070-ef45a60c9d00?q=80&w=1200&auto=format&fit=crop"
        alt="A local market stall in East Africa"
        caption="Local markets are where the real price talk happens - friendly, unhurried, and part of the experience."
      />

      <Section title="What things cost">
        <p>
          Costs vary hugely by style of trip: a budget group safari, a mid-range lodge safari, and a
          private luxury camp can differ several times over in daily price. Park and conservancy fees are
          charged separately by most operators and vary by park and season. Always confirm what's included
          &mdash; park fees, meals, transport &mdash; directly with your chosen operator before booking.
        </p>
      </Section>

      <Section title="Tipping guide">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 10 }}><strong>Driver-guide:</strong> around USD 10&ndash;20 per day, paid in cash at the end of the trip.</li>
          <li style={{ marginBottom: 10 }}><strong>Lodge/camp staff:</strong> around USD 5&ndash;10 per day, often pooled into a shared staff box.</li>
          <li><strong>Porters, waitstaff:</strong> small cash tips are appreciated but not obligatory &mdash; check if a service charge is already added to your bill.</li>
        </ul>
      </Section>

      <Section title="Bargaining etiquette">
        <p>
          At open markets and curio stalls, a friendly back-and-forth on price is completely normal and
          expected &mdash; it's part of the interaction, not a confrontation. In supermarkets or shops with
          printed price tags, prices are fixed. Either way, a warm greeting first goes a long way.
        </p>
      </Section>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', borderTop: '1px solid #e2e8f0', paddingTop: 24 }}>
        <Link href="/guides/health-safety" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Previous: Health &amp; Safety</Link>
        <Link href="/guides/packing-best-time" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>Next: What to Pack &amp; Best Time &rarr;</Link>
      </div>

      <div style={{ marginTop: 56, padding: 28, background: '#f0f9ff', borderRadius: 16, textAlign: 'center' }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1e3a8a' }}>Ready to compare real prices?</h3>
        <p style={{ color: '#475569', marginTop: 8 }}>
          See upfront pricing from verified operators and message them directly, free of charge.
        </p>
        <Link href="/safari" style={{ display: 'inline-block', marginTop: 16, background: '#1e3a8a', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: 999, textDecoration: 'none' }}>
          Browse Safaris on OSARE
        </Link>
      </div>
    </div>
  )
}
