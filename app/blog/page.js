import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { query } from '@/lib/db'

export const metadata = buildMetadata({
  title: "OSARE Blog — East Africa Travel Tips & News | OSARE",
  description: "Travel tips, destination guides, and news from OSARE — connecting travelers with verified tourism operators across East Africa.",
  path: '/blog',
})

export const dynamic = 'force-dynamic'

export default async function BlogIndex() {
  const result = await query(
    'SELECT slug, title, blurb, image, created_at FROM blog_posts WHERE published = true ORDER BY created_at DESC'
  )
  const posts = result.rows

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <span style={{ display: 'inline-block', background: '#eff6ff', color: '#1e3a8a', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          OSARE BLOG
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 16, lineHeight: 1.2, color: '#1e3a8a' }}>
          Stories &amp; Tips from East Africa
        </h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 12, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
          Updates from OSARE, and practical travel writing to help you plan your trip across Kenya, Tanzania and Uganda.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            style={{ display: 'block', borderRadius: 16, overflow: 'hidden', border: '1px solid #dbeafe', textDecoration: 'none', color: 'inherit' }}
          >
            {p.image && (
              <img src={p.image} alt={p.title} style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} />
            )}
            <div style={{ padding: 18 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {new Date(p.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#1e3a8a', marginTop: 6 }}>{p.title}</h3>
              <p style={{ marginTop: 8, fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{p.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
