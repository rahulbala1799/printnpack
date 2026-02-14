import { verifyPassword, signToken, setAuthCookie } from '../../../lib/auth.js';
import { getRow, query } from '../../../lib/database.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user by email
    const user = await getRow(
      'SELECT id, email, password_hash, role, name, is_active FROM users WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if account is active
    if (!user.is_active) {
      return res.status(401).json({ error: 'Account has been deactivated' });
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password_hash);
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
