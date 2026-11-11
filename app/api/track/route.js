import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export const dynamic = 'force-dynamic'

const BOT = /bot|crawl|spider|facebookexternalhit|preview|headless|lighthouse|monitor/i
const LIMIT_PER_IP_PER_HOUR = 60
const hits = new Map()

function tooMany(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3600 * 1000)
  if (recent.length >= LIMIT_PER_IP_PER_HOUR) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return false
}

function clean(value, max) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, max)
}

// Public: records one page visit. No IP address, cookie or personal data is stored.
export async function POST(request) {
  try {
    const ua = request.headers.get('user-agent') || ''
    if (BOT.test(ua)) return NextResponse.json({ ok: true })

    const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
    if (tooMany(ip)) return NextResponse.json({ ok: true })

    const body = await request.json().catch(() => ({}))
    const path = clean(body.path, 200)
    if (!path.startsWith('/')) return NextResponse.json({ ok: false }, { status: 400 })

    const source = clean(body.source, 60) || null
    const campaign = clean(body.campaign, 60) || null

    await query(
      'INSERT INTO page_visits (path, source, campaign) VALUES ($1, $2, $3)',
      [path, source, campaign]
    )
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
