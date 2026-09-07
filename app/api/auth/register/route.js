// File location: app/api/my-listings/route.js
import { query } from '@/lib/db'
import { requireVendor } from '@/lib/auth'

export async function GET(request) {
  const auth = await requireVendor(request)
  if (auth.error) {
    return Response.json({ error: auth.error }, { status: auth.status })
  }

  try {
    if (auth.role === 'admin') {
      const result = await query('SELECT * FROM listings')
      return Response.json(result.rows)
    }

    // Vendor sees ONLY their own listings
    const result = await query(
      'SELECT * FROM listings WHERE owner_id = $1',
      [auth.vendor_id]
    )
    return Response.json(result.rows)
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}
