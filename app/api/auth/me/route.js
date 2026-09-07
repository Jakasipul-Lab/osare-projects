// File location: app/api/auth/me/route.js
import { neon } from '@neondatabase/serverless'
import jwt from 'jsonwebtoken'

const sql = neon(process.env.DATABASE_URL)

export async function GET(req) {
  const auth = req.headers.get('authorization') || ''
  const token = auth.replace('Bearer ', '')
  if (!token) return Response.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const [vendor] = await sql`
      SELECT id, name, company, email, phone FROM vendors WHERE id = ${decoded.id}
    `
    if (!vendor) return Response.json({ error: 'Not found' }, { status: 404 })
    return Response.json({ vendor })
  } catch (e) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
