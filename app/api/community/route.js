import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { notifyOwner } from '@/lib/notify'

export const dynamic = 'force-dynamic'

const KINDS = ['join', 'question', 'review']
const LIMIT_PER_IP_PER_HOUR = 5
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

// Public: only posts you have approved.
export async function GET() {
  try {
    const result = await query(
      `SELECT id, created_at, kind, name, interest, message, reply
       FROM community_posts
       WHERE status = 'approved'
       ORDER BY created_at DESC
       LIMIT 50`
    )
    return NextResponse.json({ posts: result.rows })
  } catch (error) {
    return NextResponse.json({ posts: [] })
  }
}

// Public: a visitor sends a post. It is saved as "pending" and only shows after you approve it.
export async function POST(request) {
  try {
    const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
    if (tooMany(ip)) {
      return NextResponse.json({ success: false, error: 'Too many posts. Please try again later.' }, { status: 429 })
    }

    const body = await request.json()

    // Hidden field: real people leave it empty, bots fill it in.
    if (body && body.website) {
      return NextResponse.json({ success: true })
    }

    const kind = KINDS.includes(body?.kind) ? body.kind : 'question'
    const name = clean(body?.name, 60)
    const interest = clean(body?.interest, 60)
    const message = clean(body?.message, 1000)

    if (name.length < 2) {
      return NextResponse.json({ success: false, error: 'Please enter your name.' }, { status: 400 })
    }
    if (message.length < 5) {
      return NextResponse.json({ success: false, error: 'Please write a short message.' }, { status: 400 })
    }

    await query(
      `INSERT INTO community_posts (kind, name, interest, message, status)
       VALUES ($1, $2, $3, $4, 'pending')`,
      [kind, name, interest || null, message]
    )

    // Alert on Telegram. Not awaited: it must never break the post.
    notifyOwner('New community post (waiting for approval)', [
      `Type: ${kind}`,
      `Name: ${name}`,
      `Interest: ${interest || 'n/a'}`,
      `Message: ${message.slice(0, 200)}`,
    ]).catch(() => {})

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Could not save your post. Please try again.' }, { status: 500 })
  }
}
