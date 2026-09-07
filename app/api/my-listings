// pages/api/my-listings.js
import { requireVendor } from '../../lib/auth';
import { db } from '../../lib/db';

export default async function handler(req, res) {
  const auth = await requireVendor(req);
  if (auth.error) {
    return res.status(auth.status).json({ error: auth.error });
  }

  try {
    if (auth.role === 'admin') {
      // Admin sees everything
      const result = await db.query('SELECT * FROM listings');
      return res.status(200).json(result.rows);
    }

    if (auth.role === 'vendor') {
      // Vendor sees ONLY their own listings — owner_id, not vendor_id
      const result = await db.query(
        'SELECT * FROM listings WHERE owner_id = $1',
        [auth.vendor_id]
      );
      return res.status(200).json(result.rows);
    }

    return res.status(403).json({ error: 'Unknown role' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
