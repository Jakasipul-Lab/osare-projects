import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Health & Safety Guide for East Africa Safaris 2026 | OSARE",
  description: "Vaccinations, malaria prevention, food and water safety, sun protection, and how to behave safely around the Big Five on game drives.",
  path: '/guides/health-safety',
})

const FAQS = [
  {
    question: "Do I need vaccinations for East Africa?",
    answer: "Yellow fever vaccination is required by some countries if you are arriving from a risk country, and recommended generally. Hepatitis A, typhoid and routine vaccines are commonly advised. Malaria is present in most safari areas, so antimalarial medication is strongly recommended - speak to a travel clinic four to six weeks before you fly.",
  },
  {
    question: "Is the tap water safe to drink?",
    answer: "Stick to bottled or filtered water in most areas, including for brushing your teeth. Most lodges and camps provide safe drinking water as standard.",
  },
  {
    question: "How close will I get to lions, elephants and other wildlife?",
    answer: "On a guided game drive, your driver-guide keeps a safe, legal distance and knows each animal's behavior. You stay inside the vehicle at all times unless your guide explicitly says it is safe to step out, usually only at designated points.",
  },
  {
    question: "Is East Africa safe for tourists generally?",
    answer: "Millions of tourists visit safely every year. As anywhere, use common sense in cities, avoiding displaying valuables and using registered taxis or your hotel's transport at night, and always follow your guide's instructions in the wild.",
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

const BIG_FIVE = [
  { name: "Lion", img: 'https://images.unsplash.com/photo-1645817202565-ba62d937e744?q=80&w=600&auto=format&fit=crop', tip: "Never leave the vehicle near a pride, even a resting one." },
  { name: "Elephant", img: 'https://images.unsplash.com/photo-1745526180300-443ef46e6a73?q=80&w=600&auto=format&fit=crop', tip: "Give mothers with calves extra space - your guide will read the warning signs." },
  { name: "Leopard", img: 'https://images.unsplash.com/photo-1706008258219-81c95d4fd6ca?q=80&w=600&auto=format&fit=crop', tip: "Usually spotted resting in trees - stay quiet so the sighting lasts." },
  { name: "Buffalo", img: 'https://images.unsplash.com/photo-1748661383246-a1ee78b53c32?q=80&w=600&auto=format&fit=crop', tip: "Considered one of the more unpredictable of the five - always viewed from the vehicle." },
  { name: "Rhino", img: 'https://images.unsplash.com/photo-1724608587002-cdc8aad0627b?q=80&w=600&auto=format&fit=crop', tip: "Rare and closely protected - your guide keeps a respectful distance for the animal's sake as much as yours." },
]

export default function HealthSafetyGuide() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ display: 'inline-block', background: '#fff7ed', color: '#f97316', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          TRAVEL GUIDE
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 16, lineHeight: 1.2 }}>
          Health &amp; Safety on Your East Africa Trip
        </h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 12 }}>
          Practical, no-drama advice: what to sort out before you fly, and how to stay safe once
          you're on the ground, including around the animals you came to see.
        </p>
      </div>

      <div style={{ marginBottom: 8 }}>
        <Link href="/guides" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Back to all guides</Link>
      </div>

      <Section title="Vaccinations & malaria">
        <p>
          Speak to a travel clinic <strong>four to six weeks before departure</strong>. Yellow fever is
          required by some countries if arriving from a risk country, and hepatitis A, typhoid and your
          routine vaccines are commonly recommended. Malaria is present across most safari regions &mdash;
          antimalarial tablets, a mosquito repellent with DEET, and long sleeves at dusk are the standard,
          effective combination.
        </p>
      </Section>

      <Section title="Food & water">
        <p>
          Drink bottled or filtered water, including to brush your teeth, in most areas outside major hotels.
          Lodges and camps on the safari circuit provide safe drinking water as standard. Stick to freshly
          cooked, hot food and fruit you can peel yourself when eating outside your lodge.
        </p>
      </Section>

      <Section title="Sun & heat">
        <p>
          The equatorial sun is stronger than it feels, especially at altitude. High-SPF sunscreen, a hat,
          and sunglasses matter even on overcast days. Carry water on every game drive.
        </p>
      </Section>

      <Section title="Staying safe around the Big Five">
        <p>
          This is what genuinely happens on the ground: on a game drive, you stay inside the vehicle at all
          times unless your guide explicitly tells you it's safe to step out &mdash; usually only at a small
          number of designated, fenced viewpoints. Your driver-guide is trained to read each animal's
          behavior and keep a distance that's both legal and safe. Here's what you're likely to meet, and
          the one habit that keeps every sighting safe:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 20 }}>
          {BIG_FIVE.map((a) => (
            <div key={a.name} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <img src={a.img} alt={a.name} style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: 12 }}>
                <p style={{ fontWeight: 800, color: '#1e3a8a', marginBottom: 4 }}>{a.name}</p>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{a.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Travel insurance">
        <p>
          A comprehensive policy that covers medical evacuation is worth the cost &mdash; remote safari areas
          can be hours from the nearest hospital by road, and light-aircraft medevac is how serious
          emergencies are actually handled out there.
        </p>
      </Section>

      <div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', borderTop: '1px solid #e2e8f0', paddingTop: 24 }}>
        <Link href="/guides/visa-entry-requirements" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>&larr; Previous: Visa &amp; Entry Requirements</Link>
        <Link href="/guides/money-costs-tipping" style={{ fontSize: 14, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>Next: Money, Costs &amp; Tipping &rarr;</Link>
      </div>

      <div style={{ marginTop: 56, padding: 28, background: '#f0f9ff', borderRadius: 16, textAlign: 'center' }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1e3a8a' }}>Ready to book a guided safari?</h3>
        <p style={{ color: '#475569', marginTop: 8 }}>
          Every OSARE operator works with experienced, professional guides who put safety first.
        </p>
        <Link href="/safari" style={{ display: 'inline-block', marginTop: 16, background: '#1e3a8a', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: 999, textDecoration: 'none' }}>
          Browse Safaris on OSARE
        </Link>
      </div>
    </div>
  )
}
