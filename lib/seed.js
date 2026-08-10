import { query } from './db.js';

export async function createTableAndSeed() {
  // 1. Ensure the table exists
  await query(`
    CREATE TABLE IF NOT EXISTS vendors (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT,
      location TEXT,
      type TEXT,
      price_value NUMERIC,
      currency TEXT DEFAULT 'USD',
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Vendors table verified/created.');
}
