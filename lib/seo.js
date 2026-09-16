const SITE_URL = 'https://easafariroutes.com'
const SITE_NAME = 'OSARE'
const DEFAULT_OG_IMAGE = '/og-image.png'

/**
 * Builds a consistent metadata object for any page.
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

/**
 * Organization schema — describes OSARE itself as a business entity.
 * Use once, site-wide (in app/layout.js).
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Free platform connecting travelers with verified tourism operators, hotels, and transport across East Africa.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@easafariroutes.com',
      telephone: '+254758378729',
      contactType: 'customer service',
    },
    sameAs: [
      'https://x.com/osaresson',
      'https://www.facebook.com/profile.php?id=61593524609763',
      'https://www.linkedin.com/company/142404145/',
      'https://www.tiktok.com/@osaressonnakinsson',
      'https://www.threads.com/@nakinsonosareson',
    ],
  }
}

/**
 * Website schema — enables Google's sitelinks search box eligibility.
 * Use once, site-wide (in app/layout.js).
 */
export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/safari?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * FAQPage schema — pass an array of { question, answer } pairs.
 * Use on app/how-it-works/page.js.
 */
export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Product schema for an individual safari/vendor listing — the most
 * widely supported schema type for Google's price/rich-result display.
 * The vendor themselves is linked as the seller (a LocalBusiness).
 */
export function buildProductSchema(item, path) {
  const pageUrl = `${SITE_URL}${path}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.title,
    description: item.description || `${item.title} by ${item.vendor} in ${item.location}.`,
    url: pageUrl,
    ...(item.image ? { image: item.image } : {}),
    brand: {
      '@type': 'Brand',
      name: item.vendor || SITE_NAME,
    },
    ...(item.priceValue
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: item.currency || 'USD',
            price: String(item.priceValue),
            url: pageUrl,
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'LocalBusiness',
              name: item.vendor || item.title,
              ...(item.location
                ? {
                    address: {
                      '@type': 'PostalAddress',
                      addressLocality: item.location,
                    },
                  }
                : {}),
              ...(item.vendorPhone ? { telephone: item.vendorPhone } : {}),
            },
          },
        }
      : {}),
  }
}
