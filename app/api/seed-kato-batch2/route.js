import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

// Batch 2 — real, verified KATO Kenya members (public directory data)
const VENDORS = [
  {
    name: "Acacia Holidays Ltd",
    loc: "Nairobi",
    cat: "Established operator",
    phone: "+254 722 521 955",
    email: "info@acaciaholidays.com",
    url: "http://www.acaciaholidays.com"
  },
  {
    name: "African Adventure Specialists",
    loc: "Nairobi",
    cat: "Safari expeditions",
    phone: "+254 717 629 661",
    email: "safaris@africanadventure.co.ke",
    url: "http://www.africanadventure.co.ke"
  }
];

export async function GET() {
  const inserted = [];
  try {
    for (const v of VENDORS) {
      const id = uuidv4();
      await query(
        `INSERT INTO vendors (id, name, category, phone, email, location, type, price_value, currency, description, created_at, is_active)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, now(), true)`,
        [id, v.name, v.cat, v.phone, v.email, v.loc, 'safari', 250, 'USD', v.cat]
      );
      inserted.push(v.name);
    }
    return NextResponse.json({ success: true, inserted });
  } catch (e) {
    return NextResponse.json({ error: e.message, inserted }, { status: 500 });
  }
}
