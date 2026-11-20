// Independent review pages for vendors. Only add a vendor here after opening
// the review page yourself and copying the rating and number of reviews exactly.
const REVIEWS = {
  altezzatravel: {
    site: 'SafariBookings',
    url: 'https://www.safaribookings.com/reviews/p1968',
    rating: '5.0',
    count: 85,
    checked: 'November 2026',
  },
  clickexpedition: {
    site: 'TourRadar',
    url: 'https://www.tourradar.com/o/click-expeditions',
    rating: '5.0',
    count: 408,
    checked: 'November 2026',
  },
}

export function getIndependentReviews(vendor) {
  const key = String(vendor || '').toLowerCase().replace(/[^a-z0-9]/g, '').replace(/s$/, '')
  return REVIEWS[key] || null
}
