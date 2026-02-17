import { withAuth } from '../../../../lib/withAuth.js';
import { hashPassword, verifyPassword } from '../../../../lib/auth.js';
import { getRow, query } from '../../../../lib/database.js';

export const config = {
  api: { bodyParser: { sizeLimit: '1mb' } },
};

async function handler(req, res) {
  if ((req.method || '').toUpperCase() !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const currentPassword = (req.body?.current_password ?? req.body?.currentPassword ?? '').toString().trim();
    const newPassword = (req.body?.new_password ?? req.body?.newPassword ?? '').toString().trim();

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current password and new password are required' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'New password must be at least 8 characters' });
    }

    const userWithHash = await getRow(
      'SELECT id, password_hash FROM users WHERE id = $1 AND role = $2',
      [req.user.id, 'staff']
    );

    if (!userWithHash) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    const valid = await verifyPassword(currentPassword, userWithHash.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    const newHash = await hashPassword(newPassword);
    await query(
      'UPDATE users SET password_hash = $1, must_change_password = false, updated_at = now() WHERE id = $2',
      [newHash, req.user.id]
    );

    return res.status(200).json({ success: true, message: 'Password updated. You can now use the dashboard.' });
  } catch (error) {
    console.error('Staff change-password error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default withAuth(handler, { roles: ['staff'] });
