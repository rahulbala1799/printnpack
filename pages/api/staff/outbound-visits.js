import { withAuth } from '../../../lib/withAuth';
import { getRows } from '../../../lib/database';

/**
 * GET /api/staff/outbound-visits
 * Returns leads created by this staff (source = Outbound Sales Visit, payload->>'staffId' = user.id).
 */
async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = req.user;

  try {
    if (!process.env.DATABASE_URL) {
      return res.status(200).json({ leads: [] });
    }

    const rows = await getRows(
      `SELECT id, name, company, subject, message, payload, status, created_at, updated_at
       FROM leads
       WHERE source = 'Outbound Sales Visit'
         AND (payload->>'staffId')::text = $1
       ORDER BY updated_at DESC
       LIMIT 200`,
      [user.id]
    );

    const leads = rows.map((r) => ({
      id: r.id,
      name: r.name,
      company: r.company,
      subject: r.subject,
      message: r.message,
      payload: r.payload || {},
      status: r.status,
      created_at: r.created_at,
      updated_at: r.updated_at,
    }));

    res.status(200).json({ leads });
  } catch (err) {
    console.error('GET /api/staff/outbound-visits:', err);
    res.status(500).json({ error: 'Failed to fetch visits' });
  }
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
