const SITE_URL = 'https://easafariroutes.com'
const SITE_NAME = 'OSARE'
const DEFAULT_OG_IMAGE = '/og-image.png'

/**
 * Builds a consistent metadata object for any page.
 *
 * Usage in a page.js or layout.js:
 *
 *   import { buildMetadata } from '@/lib/seo'
 *   export const metadata = buildMetadata({
 *     title: 'About Us | OSARE East Africa Safari Vendors',
 *     description: 'Meet the OSARE team...',
 *     path: '/about',
 *   })
 */
export function buildMetadata({ title, description, path = '/', image = DEFAULT_OG_IMAGE, noIndex = false }) {
  const canonicalUrl = `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: SITE_NAME,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
