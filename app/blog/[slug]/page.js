import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/seo'
import { query } from '@/lib/db'

export const dynamic = 'force-dynamic'

async function getPost(slug) {
  const result = await query(
    'SELECT slug, title, blurb, body, image, created_at FROM blog_posts WHERE slug = $1 AND published = true',
    [slug]
  )
  return result.rows[0] || null
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  if (!post) return {}
  return buildMetadata({
    title: `${post.title} | OSARE`,
    description: post.blurb || post.title,
    path: `/blog/${post.slug}`,
  })
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const paragraphs = post.body.split('\n\n')

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <Link href="/blog" style={{ fontSize: 13, fontWeight: 700, color: '#1e3a8a', textDecoration: 'none' }}>
        &larr; Back to Blog
      </Link>

      <p style={{ marginTop: 20, fontSize: 12, fontWeight: 700, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: 0.5 }}>
        {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginTop: 8, color: '#1e3a8a', lineHeight: 1.2 }}>
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 16, marginTop: 24 }}
        />
      )}

      {paragraphs.map((para, i) => (
        <p key={i} style={{ marginTop: i === 0 ? 28 : 20, fontSize: 17 }}>{para}</p>
      ))}

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
