import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Welcome to the OSARE Blog | OSARE",
  description: "Why we built OSARE, and what you can expect to find on the blog as we grow across East Africa.",
  path: '/blog/welcome-to-osare',
})

export default function WelcomePost() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <Link href="/blog" style={{ fontSize: 13, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>
        &larr; Back to Blog
      </Link>

      <p style={{ marginTop: 20, fontSize: 12, fontWeight: 700, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: 0.5 }}>
        October 2026
      </p>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginTop: 8, color: '#1e3a8a', lineHeight: 1.2 }}>
        Welcome to the OSARE Blog
      </h1>

      <img
        src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
        alt="Safari landscape in East Africa"
        style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 16, marginTop: 24 }}
      />

      <p style={{ marginTop: 28, fontSize: 17 }}>
        OSARE (East Africa Safari Routes) started with a simple idea: travelers planning a trip to Kenya,
        Tanzania or Uganda deserve a free, direct way to find trusted tourism operators, hotels and
        transport &mdash; without a middleman standing between them and the people who actually run the tours,
        the buses, and the lodges.
      </p>

      <p style={{ marginTop: 20, fontSize: 17 }}>
        Every vendor on OSARE is listed for free, and travelers never pay a booking fee. When you reach out to a
        vendor through OSARE, you book and pay them directly &mdash; we simply make the connection.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 900, marginTop: 40, color: '#1e3a8a' }}>What you&rsquo;ll find here</h2>
      <p style={{ marginTop: 16, fontSize: 17 }}>
        This blog is where we&rsquo;ll share practical travel information &mdash; destination tips, what to expect
        at the border, the best time of year to visit different parks, and updates on new vendors and regions
        joining the platform. If you&rsquo;ve already explored our{' '}
        <Link href="/guides" style={{ color: '#f97316', fontWeight: 700, textDecoration: 'underline' }}>
          Travel Guides
        </Link>
        , think of this as the place for shorter, more frequent updates alongside them.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 900, marginTop: 40, color: '#1e3a8a' }}>Thanks for reading</h2>
      <p style={{ marginTop: 16, fontSize: 17 }}>
        Whether you&rsquo;re a traveler planning your first East Africa trip, or a tourism operator curious about
        listing with us, welcome. More to come soon.
      </p>

      <div style={{ marginTop: 48, padding: 24, borderRadius: 16, background: '#eff6ff', textAlign: 'center' }}>
        <p style={{ margin: 0, fontWeight: 700, color: '#1e3a8a' }}>Ready to explore?</p>
        <Link
          href="/guides"
          style={{ display: 'inline-block', marginTop: 12, padding: '10px 24px', borderRadius: 999, background: '#1e3a8a', color: 'white', fontWeight: 700, textDecoration: 'none', fontSize: 14 }}
        >
          Browse our Travel Guides
        </Link>
      </div>
    </div>
  )
}
