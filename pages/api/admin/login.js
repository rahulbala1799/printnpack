import crypto from 'crypto';

function makeToken(secret) {
  return crypto.createHmac('sha256', secret).update('printnpack-admin-session').digest('hex');
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  const validUser = process.env.ADMIN_USERNAME || 'admin';
  const validPass = process.env.ADMIN_PASSWORD;

  if (!validPass) {
    return res.status(500).json({ message: 'Admin credentials not configured on server.' });
  }

  if (username !== validUser || password !== validPass) {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }

  const token = makeToken(process.env.JWT_SECRET || validPass);
  const maxAge = 60 * 60 * 8; // 8 hours

  res.setHeader(
    'Set-Cookie',
    `admin_token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Strict${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`
  );

  return res.status(200).json({ ok: true });
}
