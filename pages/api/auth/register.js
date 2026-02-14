import { hashPassword, signToken, setAuthCookie } from '../../../lib/auth.js';
import { query } from '../../../lib/database.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, name, phone, company } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password, and name are required' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    // Check if email already exists
    const existingUser = await query(
      'SELECT id FROM users WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user (always as 'customer' role for public registration)
    const result = await query(
      `INSERT INTO users (email, password_hash, role, name, phone, company, is_active)
       VALUES ($1, $2, 'customer', $3, $4, $5, true)
       RETURNING id, email, role, name`,
      [email.toLowerCase().trim(), passwordHash, name, phone || null, company || null]
    );

    const user = result.rows[0];

    // Create JWT
    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    // Set cookie
    setAuthCookie(res, token);

    // Return user info
    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
