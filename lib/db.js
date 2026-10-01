import { Pool } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('DATABASE_URL is not set');
}

const pool = new Pool({ connectionString });

export async function query(text, params = [], _retriesLeft = 2) {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    if (_retriesLeft > 0) {
      console.error('Database query error, retrying:', error.message);
      await new Promise((r) => setTimeout(r, 400));
      return query(text, params, _retriesLeft - 1);
    }
    console.error('Database query error (giving up after retries):', error);
    return { rows: [] };
  }
}
