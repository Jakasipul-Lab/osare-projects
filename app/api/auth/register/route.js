// File location: app/api/auth/register/route.js
import { neon } from '@neondatabase/serverless'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const sql = neon(process.env.DATABASE_URL)
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production'

export async function POST(req) {
  const { name, company, email, phone, password, agreementAccepted } = await req.json()

  if (!email || !password) {
    return Response.json({ error: 'Email and password are required' }, { status: 400 })
  }
  if (!agreementAccepted) {
    return Response.json({ error: 'You must accept the commission agreement' }, { status: 400 })
  }

  const passwordHash = await bcrypt.hash(password, 10)

  try {
    const [vendor] = await sql`
      INSERT INTO vendors (name, company, email, phone, password_hash, agreement_accepted, agreement_accepted_at)
      VALUES (${name || ''}, ${company || ''}, ${email}, ${phone || ''}, ${passwordHash}, true, now())
      RETURNING id, name, company, email, phone
    `
    const token = jwt.sign(
      { id: vendor.id, vendor_id: vendor.id, email: vendor.email, role: 'vendor' },
      JWT_SECRET,
      { expiresIn: '30d' }
    )
    return Response.json({ token, vendor }, { status: 201 })
  } catch (e) {
    if (String(e).includes('duplicate key')) {
      return Response.json({ error: 'An account with this email already exists' }, { status: 409 })
    }
    return Response.json({ error: 'Could not create account' }, { status: 500 })
  }
}
