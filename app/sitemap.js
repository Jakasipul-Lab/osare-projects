import { getAllVendors } from '@/lib/vendorData'

// Cache this route for 1 hour instead of hitting the database on every
// single request. New vendors show up within an hour instead of instantly,
// but this keeps the sitemap fast and reliable even if the database is
// briefly slow to respond (e.g. Neon free-tier waking from idle).
export const revalidate = 3600

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
    { url: `${baseUrl}/guides/kenya`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/kenya/nairobi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/tanzania`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/tanzania/dar-es-salaam`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/uganda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/uganda/kampala`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/rwanda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/botswana`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/zimbabwe`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/mozambique`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/burundi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/kenya/amboseli`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/kenya/coast`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/kenya/lake-nakuru`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/tanzania/serengeti`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/guides/tanzania/zanzibar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
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
