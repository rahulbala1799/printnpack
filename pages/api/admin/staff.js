import { withAuth } from '../../../lib/withAuth.js';
import { hashPassword } from '../../../lib/auth.js';
import { getRow, getRows, query } from '../../../lib/database.js';

export const config = {
  api: { bodyParser: { sizeLimit: '1mb' } },
};

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const staff = await getRows(
        `SELECT id, login_id, name, is_active, must_change_password, last_login_at, created_at
         FROM users WHERE role = 'staff' ORDER BY created_at DESC`
      );
      return res.status(200).json({ staff });
    } catch (error) {
      console.error('List staff error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const user_id = (req.body?.user_id ?? req.body?.login_id ?? '').toString().trim();
    const password = (req.body?.password ?? '').toString().trim();
    const name = (req.body?.name ?? '').toString().trim();

    if (!user_id || !password || !name) {
      return res.status(400).json({ error: 'user_id, password, and name are required' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const existing = await getRow(
      'SELECT id FROM users WHERE login_id = $1',
      [user_id]
    );
    if (existing) {
      return res.status(400).json({ error: 'That User ID is already in use' });
    }

    const passwordHash = await hashPassword(password);
    await query(
      `INSERT INTO users (login_id, password_hash, role, name, is_active, must_change_password, email)
       VALUES ($1, $2, 'staff', $3, true, true, NULL)
       RETURNING id, login_id, name, role, must_change_password`,
      [user_id, passwordHash, name]
    );

    return res.status(201).json({
      message: 'Staff account created. They must sign in at /staff/login and change their password on first login.',
      staff: { user_id, name, role: 'staff', must_change_password: true },
    });
  } catch (error) {
    console.error('Create staff error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default withAuth(handler, { roles: ['admin'] });
