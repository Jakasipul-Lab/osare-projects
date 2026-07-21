import pg from 'pg';
const { Pool } = pg;

let pool;

export function getPool() {
  if (!pool) {
    const cs = (process.env.DATABASE_URL || process.env.NEON_DB_URL || '').replace(/&?channel_binding=require/gi, '');
    if (cs) {
      pool = new Pool({
        connectionString: cs,
        ssl: { rejectUnauthorized: false },
        max: 5,
        idleTimeoutMillis: 10000,
      });
    }
  }
  return pool;
}

export async function query(text, params) {
  const p = getPool();
  if (!p) return null;
  return p.query(text, params);
}