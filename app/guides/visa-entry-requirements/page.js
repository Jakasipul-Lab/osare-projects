import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "East Africa Visa & Entry Requirements 2026 — Kenya, Tanzania, Uganda | OSARE",
  description: "Everything you need to know before you fly: which countries need a visa, how the East Africa Tourist Visa works, how to apply online, and what to have ready at the border.",
  path: '/guides/visa-entry-requirements',
})

const FAQS = [
  {
    question: "Do I need a visa to visit Kenya, Tanzania or Uganda?",
    answer: "Most visitors do. Kenya, Tanzania and Uganda each issue visas on arrival or, better, online in advance as an eVisa. A handful of nationalities are visa-exempt for short stays, so always check your specific passport on the official immigration portal before you fly.",
  },
  {
    question: "What is the East Africa Tourist Visa?",
    answer: "It is a single visa that lets you travel freely between Kenya, Uganda and Rwanda on one entry, for up to 90 days. It does not currently cover Tanzania, which issues its own separate visa.",
  },
  {
    question: "How long before my trip should I apply?",
    answer: "Apply for your eVisa at least one to two weeks before departure. Approval is often faster, but border queues move quicker for travelers who already have their approval letter printed or saved on their phone.",
  },
  {
    question: "What documents do I need at the border?",
    answer: "A passport valid for at least six months beyond your travel dates, your eVisa approval or the visa fee in cash if paying on arrival, a return or onward ticket, and often proof of a yellow fever vaccination if you are arriving from or have transited a country with yellow fever risk.",
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

export default function VisaEntryGuide() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ display: 'inline-block', background: '#fff7ed', color: '#f97316', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          TRAVEL GUIDE
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 16, lineHeight: 1.2 }}>
          Visa &amp; Entry Requirements for East Africa
        </h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 12 }}>
          Kenya, Tanzania and Uganda each have their own rules, but for most travelers the paperwork
          is simple once you know which visa to get and when to apply. Here&rsquo;s the ground truth.
        </p>
      </div>

      <div style={{ marginBottom: 8 }}>
        <Link href="/guides" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Back to all guides</Link>
      </div>

      <Section title="Do you need a visa?">
        <p>
          Almost every visitor from outside East Africa needs a visa for Kenya, Tanzania and Uganda.
          A small number of nationalities are visa-exempt for short stays, so the first step is always
          checking your own passport against the official immigration portal for each country &mdash;
          rules do change.
        </p>
      </Section>

      <Section title="The East Africa Tourist Visa">
        <p>
          If you&rsquo;re planning to cross between <strong>Kenya, Uganda and Rwanda</strong>, the East Africa
          Tourist Visa is the easiest option: one visa, multiple entries between those three countries,
          valid for up to 90 days. <strong>Tanzania is not included</strong> &mdash; it issues its own
          separate visa, so if your route includes the Serengeti or Zanzibar, budget for that too.
        </p>
      </Section>

      <Photo
        src="https://images.unsplash.com/photo-1745690720220-24e337e571c7?q=80&w=1200&auto=format&fit=crop"
        alt="Maasai man welcoming visitors in Kenya"
        caption="Beyond the paperwork: East Africa's communities are known for a genuinely warm welcome to visitors."
      />

      <Section title="Applying online (eVisa)">
        <p>
          All three countries now offer online eVisa applications. Apply <strong>one to two weeks before
          you travel</strong>, using the official government portal only &mdash; there are third-party sites
          that charge extra fees for the same service. Save or print your approval letter; you&rsquo;ll be
          asked for it at check-in and again at the border.
        </p>
      </Section>

      <Section title="What to have ready at the border">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 10 }}><strong>Passport</strong> valid for at least 6 months beyond your travel dates, with blank pages.</li>
          <li style={{ marginBottom: 10 }}><strong>Your eVisa approval</strong> (or visa fee in cash if applying on arrival).</li>
          <li style={{ marginBottom: 10 }}><strong>A return or onward ticket.</strong></li>
          <li><strong>Yellow fever certificate</strong> if arriving from, or having transited through, a country with yellow fever risk &mdash; officers do check this.</li>
        </ul>
      </Section>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', borderTop: '1px solid #e2e8f0', paddingTop: 24 }}>
        <span />
        <Link href="/guides/health-safety" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>Next: Health &amp; Safety &rarr;</Link>
      </div>

      <div style={{ marginTop: 56, padding: 28, background: '#f0f9ff', borderRadius: 16, textAlign: 'center' }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1e3a8a' }}>Ready to plan the rest of your trip?</h3>
        <p style={{ color: '#475569', marginTop: 8 }}>
          Compare verified safari operators, hotels and transport &mdash; and message them directly, free of charge.
        </p>
        <Link href="/safari" style={{ display: 'inline-block', marginTop: 16, background: '#1e3a8a', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: 999, textDecoration: 'none' }}>
          Browse Safaris on OSARE
        </Link>
      </div>
    </div>
  )
}
