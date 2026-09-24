import { getAllVendors } from '@/lib/vendorData'

// Force this route to always run fresh (no caching) so newly added
// vendors and pages show up immediately instead of a stale build-time copy.
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap() {
  const baseUrl = 'https://www.easafariroutes.com'

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/safari`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/local`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/maasai-mara`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/visa-entry-requirements`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/health-safety`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/money-costs-tipping`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/packing-best-time`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  let vendorRoutes = []

  try {
    const vendors = await getAllVendors()

    vendorRoutes = vendors
      .filter((v) => v.type === 'safari' && v.slug)
      .map((v) => ({
        url: `${baseUrl}/safari/${v.slug}`,
        lastModified: v.createdAt ? new Date(v.createdAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
  } catch (e) {
    console.error('sitemap: failed to load vendors', e)
  }

  return [...staticRoutes, ...vendorRoutes]
}
