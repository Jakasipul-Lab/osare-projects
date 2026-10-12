import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET() {
  try {
    const result = await query(
      'SELECT name, role, quote FROM testimonials WHERE approved = true ORDER BY created_at DESC LIMIT 6'
    )
    return NextResponse.json(result.rows)
  } catch (e) {
    return NextResponse.json([], { status: 200 })
  }
}
