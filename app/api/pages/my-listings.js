// pages/api/my-listings.js

import { requireVendor } from '../../lib/auth';
import { db } from '../../lib/db';

export default async function handler(req, res) {
  const auth = await requireVendor(req);
  if (auth.error) {
    return res.status(auth.status).json({ error: auth.error });
  }

  if (auth.role === 'admin') {
    // Admin sieht alles
    const listings = await db.query('SELECT * FROM listings');
    return res.status(200).json(listings);
  }

  // ✅ Vendor sieht NUR seine eigenen Listings
  if (auth.role === 'vendor') {
    const listings = await db.query(
      'SELECT * FROM listings WHERE vendor_id = $1',
      [auth.vendor_id] // Kommt aus dem JWT-Token
    );
    return res.status(200).json(listings);
  }

  return res.status(403).json({ error: 'Unknown role' });
}
