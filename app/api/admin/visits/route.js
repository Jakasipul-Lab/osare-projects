import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { isAdminRequest } from '@/lib/auth'

export const dynamic = 'force-dynamic'

const DENIED = () => NextResponse.json({ error: 'Admin login required' }, { status: 401 })

export async function GET(request) {
  if (!isAdminRequest(request)) return DENIED()
  try {
    const bySource = await query(
      `SELECT path,
              COALESCE(source, '(none)') AS source,
              COALESCE(campaign, '(none)') AS campaign,
              COUNT(*)::int AS visits,
              MAX(created_at) AS last_visit
       FROM page_visits
       WHERE created_at > now() - interval '30 days'
       GROUP BY 1, 2, 3
       ORDER BY visits DESC
       LIMIT 100`
    )
    const byDay = await query(
      `SELECT to_char(created_at AT TIME ZONE 'Europe/Berlin', 'YYYY-MM-DD') AS day,
              COUNT(*)::int AS visits
       FROM page_visits
       WHERE created_at > now() - interval '14 days'
       GROUP BY 1
       ORDER BY 1 DESC`
    )
    return NextResponse.json({ bySource: bySource.rows, byDay: byDay.rows })
  } catch (error) {
    return NextResponse.json({ error: 'Could not load visits' }, { status: 500 })
  }
}
