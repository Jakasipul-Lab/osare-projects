import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { auth } from '@/lib/auth'

export async function GET(request) {
  return NextResponse.json({ message: "Listings endpoint active", data: [] })
}
