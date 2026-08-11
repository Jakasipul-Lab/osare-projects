import { NextResponse } from 'next/server'
import { db } from '../../lib/db'
import { auth } from '../../lib/auth'

export async function POST(request) {
  return NextResponse.json({ message: "Seed endpoint active" })
}
