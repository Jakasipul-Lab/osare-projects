import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "East Africa Visa & Entry Requirements 2026 — Kenya eTA, Tanzania & Uganda eVisa | OSARE",
  description: "Kenya now uses an eTA instead of a visa. Tanzania and Uganda issue eVisas. Which document you need, where to apply officially, and what to have ready at the border.",
  path: '/guides/visa-entry-requirements',
})

const FAQS = [
  {
    question: "Do I need a visa to visit Kenya?",
    answer: "Kenya no longer issues tourist visas. Since January 2024 most visitors need an Electronic Travel Authorisation (eTA) instead, applied for online at etakenya.go.ke before travel. Citizens of East African Community countries, and citizens of most African Union countries, are exempt. Always check your own nationality on the official portal.",
  },
  {
    question: "Do I need a visa for Tanzania and Uganda?",
    answer: "Most visitors do. Tanzania issues eVisas online at visa.immigration.go.tz, and a Tanzania visa also covers Zanzibar. Uganda issues eVisas online at visas.immigration.go.ug and should be applied for before you travel.",
  },
  {
    question: "What is the East Africa Tourist Visa?",
    answer: "A single visa for travelling between Kenya, Uganda and Rwanda, with multiple entries for up to 90 days. You apply through the official portal of the country you enter first, and enter that country first. Tanzania is not included and needs its own visa.",
  },
  {
    question: "How long before my trip should I apply?",
    answer: "At least two weeks before departure. Approval is often faster, but applying early leaves time to fix mistakes. Save or print the approval, as airlines and border officers ask for it.",
  },
  {
    question: "What documents do I need at the border?",
    answer: "A passport valid for at least six months beyond your arrival date with blank pages, your eTA or eVisa approval, a return or onward ticket, and a yellow fever vaccination certificate if you are arriving from, or have transited through, a country with yellow fever risk.",
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

function Ext({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#1e3a8a', fontWeight: 700 }}>
      {children}
    </a>
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
          Kenya, Tanzania and Uganda each have their own rules. Here is which document you need,
          where to apply officially, and what to have ready at the border.
        </p>
        <p style={{ color: '#94a3b8', fontSize: 14, marginTop: 10 }}>Last checked: November 2026</p>
      </div>

      <div style={{ marginBottom: 8 }}>
        <Link href="/guides" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Back to all guides</Link>
      </div>

      <div style={{ marginTop: 16, padding: 16, background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 12, color: '#7c2d12', fontSize: 15, lineHeight: 1.6 }}>
        <strong>Important:</strong> entry rules change. OSARE is not an official source. Always confirm
        the current rules for your passport on the official government portal before you travel, and
        never pay a third-party website for an eTA or eVisa.
      </div>

      <Section title="Kenya: Electronic Travel Authorisation (eTA)">
        <p>
          <strong>Kenya no longer issues tourist visas.</strong> Since January 2024, most visitors need an
          Electronic Travel Authorisation (eTA) instead, applied for online before departure. There is
          no eTA on arrival, so do not fly without your approval.
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 12 }}>
          <li style={{ marginBottom: 10 }}>Apply only on the official portal: <Ext href="https://etakenya.go.ke">etakenya.go.ke</Ext></li>
          <li style={{ marginBottom: 10 }}>Apply <strong>at least two weeks</strong> before you travel.</li>
          <li><strong>Exempt:</strong> citizens of East African Community countries, and citizens of most African Union countries. Check your nationality on the portal, as conditions and length of stay vary.</li>
        </ul>
      </Section>

      <Section title="Tanzania and Zanzibar: eVisa">
        <p>
          Most visitors need a visa for Tanzania. Apply online in advance on the official portal:{' '}
          <Ext href="https://visa.immigration.go.tz">visa.immigration.go.tz</Ext>. A Tanzania visa also
          covers Zanzibar. Applying online before you travel avoids long queues on arrival.
        </p>
      </Section>

      <Section title="Uganda: eVisa">
        <p>
          Most visitors need a visa for Uganda. Apply online <strong>before you travel</strong> on the
          official portal: <Ext href="https://visas.immigration.go.ug">visas.immigration.go.ug</Ext>.
          Look-alike websites charge far more for the same visa, so check the address carefully.
        </p>
      </Section>

      <Photo
        src="https://images.unsplash.com/photo-1745690720220-24e337e571c7?q=80&w=1200&auto=format&fit=crop"
        alt="Maasai man welcoming visitors in Kenya"
        caption="Beyond the paperwork: East Africa's communities are known for a genuinely warm welcome to visitors."
      />

      <Section title="The East Africa Tourist Visa">
        <p>
          Travelling between <strong>Kenya, Uganda and Rwanda</strong>? The East Africa Tourist Visa covers
          all three: multiple entries between them for up to 90 days. Apply through the official portal of
          the country you <strong>enter first</strong>, and enter that country first.{' '}
          <strong>Tanzania is not included</strong> &mdash; if your route includes the Serengeti,
          Kilimanjaro or Zanzibar, you need a separate Tanzania visa.
        </p>
      </Section>

      <Section title="What to have ready at the border">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 10 }}><strong>Passport</strong> valid for at least 6 months beyond your arrival date, with blank pages.</li>
          <li style={{ marginBottom: 10 }}><strong>Your eTA or eVisa approval</strong>, printed or saved on your phone.</li>
          <li style={{ marginBottom: 10 }}><strong>A return or onward ticket.</strong></li>
          <li><strong>Yellow fever certificate</strong> if arriving from, or having transited through, a country with yellow fever risk &mdash; officers do check this.</li>
        </ul>
      </Section>

      <Section title="Check your own government's travel advice">
        <p>Before you book, read the official travel advice from your home country. It covers safety, health and entry rules:</p>
        <ul style={{ paddingLeft: 20, marginTop: 12 }}>
          <li style={{ marginBottom: 10 }}>United Kingdom: <Ext href="https://www.gov.uk/foreign-travel-advice">gov.uk/foreign-travel-advice</Ext></li>
          <li style={{ marginBottom: 10 }}>United States: <Ext href="https://travel.state.gov">travel.state.gov</Ext></li>
          <li>Germany: <Ext href="https://www.auswaertiges-amt.de">auswaertiges-amt.de</Ext></li>
        </ul>
      </Section>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', borderTop: '1px solid #e2e8f0', paddingTop: 24 }}>
        <span />
        <Link href="/guides/health-safety" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>Next: Health &amp; Safety &rarr;</Link>
      </div>

      <div style={{ marginTop: 56, padding: 28, background: '#f0f9ff', borderRadius: 16, textAlign: 'center' }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1e3a8a' }}>Ready to plan the rest of your trip?</h3>
        <p style={{ color: '#475569', marginTop: 8 }}>
          Compare safari operators, hotels and transport &mdash; and send a free enquiry.
        </p>
        <Link href="/safari" style={{ display: 'inline-block', marginTop: 16, background: '#1e3a8a', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: 999, textDecoration: 'none' }}>
          Browse Safaris on OSARE
        </Link>
      </div>
    </div>
  )
}
