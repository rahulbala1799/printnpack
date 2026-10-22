import { withAuth } from '../../../lib/withAuth';
import { query } from '../../../lib/database';

async function handler(req, res) {
  const token = String(req.body?.token || '').trim();

  if (req.method === 'POST') {
    if (!token || token.length > 4096) {
      res.status(400).json({ error: 'Missing token' });
      return;
    }
    await query(
      `INSERT INTO agent_push_tokens (user_id, token, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (token) DO UPDATE
         SET user_id = EXCLUDED.user_id, updated_at = NOW()`,
      [req.user.id, token]
    );
    res.status(200).json({ ok: true });
    return;
  }

  if (req.method === 'DELETE') {
    if (token) {
      await query('DELETE FROM agent_push_tokens WHERE token = $1 AND user_id = $2', [token, req.user.id]);
    } else {
      await query('DELETE FROM agent_push_tokens WHERE user_id = $1', [req.user.id]);
    }
    res.status(200).json({ ok: true });
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['admin'] });
