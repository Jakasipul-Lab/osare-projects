import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

export async function verifyAuth(req) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return null;
  
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch (e) {
    return null;
  }
}

export async function requireAdmin(req) {
  const auth = await verifyAuth(req);
  
  if (!auth || auth.role !== 'admin') {
    return { error: 'Unauthorized', status: 401 };
  }
  
  return auth;
}

export async function requireVendor(req) {
  const auth = await verifyAuth(req);
  
  if (!auth || (auth.role !== 'vendor' && auth.role !== 'admin')) {
    return { error: 'Unauthorized', status: 401 };
  }
  
  return auth;
}
