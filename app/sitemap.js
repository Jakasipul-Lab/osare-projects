import { getAllVendors } from '@/lib/vendorData'

export default async function sitemap() {
  const baseUrl = 'https://easafariroutes.com'

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/safari`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/local`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
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
