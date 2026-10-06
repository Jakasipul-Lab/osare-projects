import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { isAdminRequest } from '@/lib/auth';
import { validatePhone } from '@/lib/phone';
import { notifyOwner } from '@/lib/notify';

// Simple per-visitor limit kept in memory (fine for a single server): 5 requests per hour
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function tooMany(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

function clean(value, max) {
  if (value === null || value === undefined) return null;
  const s = String(value).trim().slice(0, max);
  return s || null;
}

function mapRow(r) {
  return {
    id: r.id,
    code: r.code,
    createdAt: r.created_at,
    travelerName: r.traveler_name,
    travelerPhone: r.traveler_phone,
    destination: r.destination,
    travelDates: r.travel_dates,
    travelers: r.travelers,
    budget: r.budget,
    message: r.message,
    status: r.status,
    notes: r.notes,
  };
}

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Admin login required' }, { status: 401 });
  }
  try {
    const result = await query('SELECT * FROM trip_requests ORDER BY created_at DESC');
    return NextResponse.json(result.rows.map(mapRow));
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
    if (tooMany(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Hidden field that real visitors never fill in; bots do. Pretend success and stop.
    if (body.website) {
      return NextResponse.json({ success: true, code: 'TRIP0000' });
    }

    const phoneCheck = validatePhone(body.travelerPhone);
    if (!phoneCheck.ok) {
      return NextResponse.json({ success: false, error: phoneCheck.error }, { status: 400 });
    }

    const destination = clean(body.destination, 200);
    if (!destination || destination.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please tell us where you want to go.' },
        { status: 400 }
      );
    }

    const name = clean(body.travelerName, 100);
    const travelDates = clean(body.travelDates, 100);
    const budget = clean(body.budget, 100);
    const message = clean(body.message, 2000);
    let travelers = parseInt(body.travelers, 10);
    if (!Number.isFinite(travelers) || travelers < 1 || travelers > 100) travelers = null;

    const codeRes = await query("SELECT 'TRIP' || LPAD(nextval('trip_code_seq')::text, 4, '0') AS code");
    const code = codeRes.rows[0].code;

    await query(
      `INSERT INTO trip_requests (
        code, traveler_name, traveler_phone, destination, travel_dates, travelers, budget, message
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [code, name, phoneCheck.e164, destination, travelDates, travelers, budget, message]
    );

    // Alert the owner on Telegram. Not awaited: it must never slow down or break the request.
    notifyOwner(`New trip request ${code}`, [
      `Destination: ${destination}`,
      `When: ${travelDates || 'not given'}`,
      `Travelers: ${travelers || 'not given'}`,
      `Budget: ${budget || 'not given'}`,
      `Name: ${name || 'no name given'}`,
      `WhatsApp: ${phoneCheck.e164}`,
      `Message: ${message || '-'}`,
    ]).catch(() => {});

    return NextResponse.json({ success: true, code });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Could not save your request. Please try again.' }, { status: 500 });
  }
}

export async function PATCH(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Admin login required' }, { status: 401 });
  }
  try {
    const { code, status, notes } = await request.json();
    const allowed = ['new', 'contacted', 'matched', 'closed'];
    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }
    if (status !== undefined && !allowed.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }
    const result = await query(
      `UPDATE trip_requests
         SET status = COALESCE($2, status), notes = COALESCE($3, notes)
       WHERE code = $1 RETURNING *`,
      [code, status ?? null, notes === undefined ? null : clean(notes, 2000)]
    );
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Request not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, request: mapRow(result.rows[0]) });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
