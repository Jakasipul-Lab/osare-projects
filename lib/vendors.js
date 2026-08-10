import { query } from './db.js';

export async function getVendors() {
  const result = await query('SELECT * FROM vendors ORDER BY created_at DESC');
  return result.rows;
}

export async function insertVendor(v) {
  const result = await query(
    `INSERT INTO vendors (name, category, location, type, price_value, currency, description) 
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [v.name, v.category, v.location, v.type || 'safari', v.priceValue || 0, v.currency || 'USD', v.description || '']
  );
  return result.rows[0];
}
