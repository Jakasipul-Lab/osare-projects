import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { isAdminRequest } from '@/lib/auth'

export const dynamic = 'force-dynamic'

const DENIED = () => NextResponse.json({ error: 'Admin login required' }, { status: 401 })

export async function GET(request) {
  if (!isAdminRequest(request)) return DENIED()
  try {
    const result = await query(
      `SELECT id, created_at, kind, name, interest, message, status, reply, replied_at
       FROM community_posts
       ORDER BY (status = 'pending') DESC, created_at DESC
       LIMIT 200`
    )
    return NextResponse.json({ posts: result.rows })
  } catch (error) {
    return NextResponse.json({ error: 'Could not load posts' }, { status: 500 })
  }
}

export async function POST(request) {
  if (!isAdminRequest(request)) return DENIED()
  try {
    const body = await request.json()
    const id = Number(body?.id)
    const action = String(body?.action || '')
    const reply = String(body?.reply || '').trim().slice(0, 1500)
    if (!Number.isInteger(id) || id < 1) {
      return NextResponse.json({ error: 'Bad id' }, { status: 400 })
    }
    if (action === 'approve') {
      await query(`UPDATE community_posts SET status = 'approved' WHERE id = $1`, [id])
    } else if (action === 'hide') {
      await query(`UPDATE community_posts SET status = 'hidden' WHERE id = $1`, [id])
    } else if (action === 'reply' && reply.length >= 2) {
      await query(
        `UPDATE community_posts SET reply = $2, replied_at = NOW(), status = 'approved' WHERE id = $1`,
        [id, reply]
      )
    } else {
      return NextResponse.json({ error: 'Unknown action or empty reply' }, { status: 400 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Could not save' }, { status: 500 })
  }
}
