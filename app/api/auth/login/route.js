// File location: app/api/auth/login/route.js
import { neon } from '@neondatabase/serverless'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const sql = neon(process.env.DATABASE_URL)

export async function POST(req) {
  const { email, password } = await req.json()
  if (!email || !password) {
    return Response.json({ error: 'Email and password are required' }, { status: 400 })
  }

  const [vendor] = await sql`SELECT * FROM vendors WHERE email = ${email}`
  if (!vendor) {
    return Response.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  const valid = await bcrypt.compare(password, vendor.password_hash)
  if (!valid) {
    return Response.json({ error: 'Invalid email or password' }, { status: 401 })
  }

  const token = jwt.sign({ id: vendor.id, email: vendor.email }, process.env.JWT_SECRET, { expiresIn: '30d' })
  const { password_hash, ...safeVendor } = vendor
  return Response.json({ token, vendor: safeVendor })
}
