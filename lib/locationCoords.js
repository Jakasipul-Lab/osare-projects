// A small, free, no-API-key lookup table of common East Africa place names
// to map coordinates. Used to show a general-area map (via free OpenStreetMap
// embeds) without needing Google Maps or any paid geocoding service.
//
// This intentionally only maps general place names (cities/towns/regions),
// never a specific vendor's exact business name — so it shows a traveler
// roughly where a listing is, without linking to a vendor's own Google
// Business Profile (which could let them bypass OSARE to book directly).

const LOCATION_COORDS = {
  'nairobi': { lat: -1.2921, lng: 36.8219 },
  'dar es salaam': { lat: -6.7924, lng: 39.2083 },
  'arusha': { lat: -3.3869, lng: 36.6830 },
  'mombasa': { lat: -4.0435, lng: 39.6682 },
  'zanzibar': { lat: -6.1659, lng: 39.2026 },
  'stone town': { lat: -6.1659, lng: 39.2026 },
  'kampala': { lat: 0.3476, lng: 32.5825 },
  'entebbe': { lat: 0.0512, lng: 32.4637 },
  'kisumu': { lat: -0.0917, lng: 34.7680 },
  "murang'a": { lat: -0.7839, lng: 37.1502 },
  'muranga': { lat: -0.7839, lng: 37.1502 },
  'thika': { lat: -1.0333, lng: 37.0693 },
  'nakuru': { lat: -0.3031, lng: 36.0800 },
  'moshi': { lat: -3.3349, lng: 37.3400 },
  'diani': { lat: -4.2833, lng: 39.5833 },
  'watamu': { lat: -3.3564, lng: 40.0206 },
  'lamu': { lat: -2.2717, lng: 40.9020 },
  'amboseli': { lat: -2.6527, lng: 37.2606 },
  'maasai mara': { lat: -1.4917, lng: 35.1436 },
  'masai mara': { lat: -1.4917, lng: 35.1436 },
  'serengeti': { lat: -2.3333, lng: 34.8333 },
  'ngorongoro': { lat: -3.2000, lng: 35.4833 },
}

// Fallback used when no known place name matches (roughly central East Africa).
const DEFAULT_COORDS = { lat: -1.9, lng: 34.5 }

export function getCoordsForLocation(locationText) {
  if (!locationText) return DEFAULT_COORDS
  const text = String(locationText).toLowerCase()
  for (const key of Object.keys(LOCATION_COORDS)) {
    if (text.includes(key)) return LOCATION_COORDS[key]
  }
  return DEFAULT_COORDS
}
