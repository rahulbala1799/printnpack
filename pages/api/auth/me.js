import { withAuth } from '../../../lib/withAuth.js';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // User is already loaded by withAuth middleware
    const u = req.user;
    const out = {
      id: u.id,
      name: u.name,
      role: u.role,
    };
    if (u.email != null) out.email = u.email;
    if (u.must_change_password != null) out.must_change_password = !!u.must_change_password;
    return res.status(200).json({ user: out });
  } catch (error) {
    console.error('Get user error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default withAuth(handler);
