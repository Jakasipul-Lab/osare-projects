// pages/api/auth/login.js

const token = jwt.sign(
  {
    user_id: user.id,
    email: user.email,
    role: user.role,
    vendor_id: user.vendor_id // ← Diese Zeile!
  },
  JWT_SECRET,
  { expiresIn: '7d' }
);
