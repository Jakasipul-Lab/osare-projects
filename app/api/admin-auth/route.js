import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { password } = await request.json();
    const correct = process.env.ADMIN_PASSWORD;

    if (!correct) {
      // No password configured on the server — fail closed, not open.
      return NextResponse.json({ success: false, error: 'Admin access not configured' }, { status: 500 });
    }

    if (password === correct) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false, error: 'Incorrect password' }, { status: 401 });
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Bad request' }, { status: 400 });
  }
}
