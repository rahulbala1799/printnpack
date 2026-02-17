import { verifyPassword, signToken, setAuthCookie } from '../../../lib/auth.js';
import { getRow, query } from '../../../lib/database.js';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default async function handler(req, res) {
  // Allow CORS preflight
  if ((req.method || '').toUpperCase() === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return res.status(200).end();
  }

  // Accept POST (case-insensitive; some proxies send "post") or X-HTTP-Method-Override: POST
  const method = (req.headers['x-http-method-override'] || req.method || '').toUpperCase();
  if (method !== 'POST') {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    return res.status(405).json({
      error: 'Method not allowed',
      received: req.method,
      hint: 'Server expects POST. If you sent POST, a proxy may be changing the method.',
    });
  }

  try {
    const emailStr = (req.body?.email ?? '').toString().toLowerCase().trim();
    const passwordStr = (req.body?.password ?? '').toString().trim();

    if (!emailStr || !passwordStr) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await getRow(
      'SELECT id, email, password_hash, role, name, is_active FROM users WHERE email = $1',
      [emailStr]
    );

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (user.role === 'staff') {
      return res.status(401).json({ error: 'Staff must sign in at the staff login page.', code: 'STAFF_USE_STAFF_LOGIN' });
    }

    // Check if account is active
    if (!user.is_active) {
      return res.status(401).json({ error: 'Account has been deactivated' });
    }

    const isValid = await verifyPassword(passwordStr, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Update last login
    await query(
      'UPDATE users SET last_login_at = now() WHERE id = $1',
      [user.id]
    );

    // Create JWT
    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    // Set cookie
    setAuthCookie(res, token);

    // Return user info (no password hash)
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
