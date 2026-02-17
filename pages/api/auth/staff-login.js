import { verifyPassword, signToken, setAuthCookie } from '../../../lib/auth.js';
import { getRow, query } from '../../../lib/database.js';
import { checkStaffLoginRateLimit, clearStaffLoginRateLimit } from '../../../lib/rateLimit.js';

export const config = {
  api: {
    bodyParser: { sizeLimit: '1mb' },
  },
};

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

export default async function handler(req, res) {
  if ((req.method || '').toUpperCase() === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).end();
  }

  const method = (req.headers['x-http-method-override'] || req.method || '').toUpperCase();
  if (method !== 'POST') {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  const rate = checkStaffLoginRateLimit(ip);
  if (!rate.allowed) {
    res.setHeader('Retry-After', String(rate.retryAfterSeconds));
    return res.status(429).json({
      error: 'Too many login attempts. Please try again later.',
      retryAfterSeconds: rate.retryAfterSeconds,
    });
  }

  try {
    const userIdRaw = (req.body?.user_id ?? req.body?.userId ?? '').toString().trim();
    const passwordStr = (req.body?.password ?? '').toString().trim();

    if (!userIdRaw || !passwordStr) {
      return res.status(400).json({ error: 'User ID and password are required' });
    }

    const user = await getRow(
      `SELECT id, email, login_id, password_hash, role, name, is_active, must_change_password
       FROM users WHERE role = 'staff' AND login_id = $1`,
      [userIdRaw]
    );

    if (!user) {
      return res.status(401).json({ error: 'Invalid User ID or password' });
    }

    if (!user.is_active) {
      return res.status(401).json({ error: 'Account has been deactivated' });
    }

    const isValid = await verifyPassword(passwordStr, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid User ID or password' });
    }

    clearStaffLoginRateLimit(ip);

    await query('UPDATE users SET last_login_at = now() WHERE id = $1', [user.id]);

    const token = signToken({
      id: user.id,
      role: user.role,
      login_id: user.login_id,
    });

    setAuthCookie(res, token);

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        must_change_password: !!user.must_change_password,
      },
      mustChangePassword: !!user.must_change_password,
    });
  } catch (error) {
    console.error('Staff login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
