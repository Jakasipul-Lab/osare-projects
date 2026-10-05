import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { password } = await request.json();
    const correct = process.env.ADMIN_PASSWORD;

    if (!correct) {
      // No password configured on the server — fail closed, not open.
      return NextResponse.json({ success: false, error: 'Admin access not configured' }, { status: 500 });
    }

    if (password === correct) {
      const secret = process.env.JWT_SECRET || 'dev-secret-change-in-production';
      const token = jwt.sign({ role: 'admin' }, secret, { expiresIn: '12h' });
      const res = NextResponse.json({ success: true });
      res.cookies.set('osare_admin', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 12,
      });
      return res;
    }
    return NextResponse.json({ success: false, error: 'Incorrect password' }, { status: 401 });
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Bad request' }, { status: 400 });
  }
}
