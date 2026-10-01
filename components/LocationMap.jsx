import { getCoordsForLocation } from '@/lib/locationCoords'

// A free, no-API-key map box using OpenStreetMap's embeddable viewer.
// Shows the general area of a listing's location, right on the page,
// instead of sending the visitor away to Google Maps.
export default function LocationMap({ location, height = 180 }) {
  const { lat, lng } = getCoordsForLocation(location)
  const delta = 0.06
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`

  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
      <iframe
        title={`Map showing ${location || 'the general area'}`}
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  )
}
