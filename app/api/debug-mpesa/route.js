import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  const result = {};

  // All tables, so we can spot anything Mpesa-related by name
  try {
    const tablesRes = await query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name"
    );
    result.allTables = tablesRes.rows.map(r => r.table_name);
  } catch (e) {
    result.allTables = { error: e.message };
  }

  // Inspect the 'transactions' table specifically, if it exists
  try {
    const colsRes = await query(
      "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'transactions' ORDER BY ordinal_position"
    );
    result.transactionsColumns = colsRes.rows;
  } catch (e) {
    result.transactionsColumns = { error: e.message };
  }

  try {
    const countRes = await query('SELECT count(*) FROM transactions');
    result.transactionsCount = Number(countRes.rows[0].count);
  } catch (e) {
    result.transactionsCount = { error: e.message };
  }

  // Sample a couple of rows, if any exist, to see real shape/content
  try {
    const sampleRes = await query('SELECT * FROM transactions ORDER BY 1 DESC LIMIT 3');
    result.transactionsSample = sampleRes.rows;
  } catch (e) {
    result.transactionsSample = { error: e.message };
  }

  return NextResponse.json(result);
}
