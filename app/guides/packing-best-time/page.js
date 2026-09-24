import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "What to Pack for an East Africa Safari & Best Time to Visit 2026 | OSARE",
  description: "A practical safari packing list, what colors to wear and avoid, camera gear tips, and a month-by-month guide to the best time to visit East Africa.",
  path: '/guides/packing-best-time',
})

const FAQS = [
  {
    question: "What clothing colors should I wear on safari?",
    answer: "Neutral tones, such as khaki, olive, tan and brown, blend in and don't attract tsetse flies the way dark blue and black can. Avoid pure white, which shows dust, and bright colors, which can startle wildlife.",
  },
  {
    question: "What is the single most important item to pack?",
    answer: "Binoculars. Even the best guide can't put a distant leopard right in front of you - your own binoculars turn a distant shape into an unforgettable close look.",
  },
  {
    question: "When is the best time to visit East Africa?",
    answer: "June through October is the classic dry season across most of the region, with the best game viewing and, from around August, the dramatic Mara River crossings. November to May is greener, quieter and often cheaper, with excellent birdwatching, but comes with some rain.",
  },
  {
    question: "Do I need special camera gear?",
    answer: "A phone camera captures plenty, but if you have a camera with a zoom or telephoto lens of 200mm or more, bring it, since a lot of the best sightings are at a respectful, safe distance. Extra batteries and memory cards matter more than any single lens.",
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

export default function PackingBestTimeGuide() {
  const faqSchema = buildFAQSchema(FAQS)

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span style={{ display: 'inline-block', background: '#fff7ed', color: '#f97316', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          TRAVEL GUIDE
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 16, lineHeight: 1.2 }}>
          What to Pack &amp; When to Go
        </h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 12 }}>
          A real, ground-tested packing list, and a month-by-month look at when East Africa is at its best.
        </p>
      </div>

      <Section title="Packing list essentials">
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 10 }}><strong>Binoculars</strong> &mdash; the single most useful item you'll pack.</li>
          <li style={{ marginBottom: 10 }}><strong>Neutral-colored clothing</strong> &mdash; khaki, olive, tan; avoid bright colors and pure white.</li>
          <li style={{ marginBottom: 10 }}><strong>Warm layers</strong> &mdash; early morning game drives are cold, even near the equator.</li>
          <li style={{ marginBottom: 10 }}><strong>Sun protection</strong> &mdash; high-SPF sunscreen, a hat, sunglasses.</li>
          <li style={{ marginBottom: 10 }}><strong>Insect repellent</strong> with DEET, for dusk and evening.</li>
          <li><strong>A camera or phone with extra storage</strong> &mdash; and a spare battery or power bank; charging points can be limited at remote camps.</li>
        </ul>
      </Section>

      <Section title="Camera & gear tips">
        <p>
          Your phone will capture plenty, but a camera with a 200mm-plus zoom lens makes a real difference &mdash;
          many sightings are, and should be, at a respectful distance. Bring more memory cards and
          batteries than you think you'll need; there's rarely a shop nearby once you're out on the plains.
        </p>
      </Section>

      <Photo
        src="https://images.unsplash.com/photo-1757777598981-2a589811168d?q=80&w=1200&auto=format&fit=crop"
        alt="Acacia tree silhouetted against an East African sunset"
        caption="The light changes fast at dawn and dusk on the savannah - game drives are timed around exactly this."
      />

      <Section title="Best time to visit, month by month">
        <p>
          <strong>June&ndash;October (dry season):</strong> The classic safari window. Easier wildlife viewing
          as animals gather near water, and from around August, the dramatic Mara River crossings.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>November&ndash;May (green season):</strong> Lusher landscapes, fewer crowds, often lower
          prices, and excellent birdwatching &mdash; come with flexibility for occasional rain, heaviest in March
          and April.
        </p>
      </Section>

      <div style={{ marginTop: 56, padding: 28, background: '#f0f9ff', borderRadius: 16, textAlign: 'center' }}>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1e3a8a' }}>Ready to plan your dates?</h3>
        <p style={{ color: '#475569', marginTop: 8 }}>
          Compare verified operators and message them directly about the season that suits you.
        </p>
        <Link href="/safari" style={{ display: 'inline-block', marginTop: 16, background: '#1e3a8a', color: 'white', fontWeight: 700, padding: '12px 28px', borderRadius: 999, textDecoration: 'none' }}>
          Browse Safaris on OSARE
        </Link>
      </div>
    </div>
  )
}
