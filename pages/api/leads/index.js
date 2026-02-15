import { getRows } from '../../../lib/database';
import { withAuth } from '../../../lib/withAuth';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { status, source } = req.query;
    let sql = 'SELECT id, source, name, email, phone, company, subject, message, payload, status, notes, created_at, updated_at FROM leads WHERE 1=1';
    const params = [];
    let i = 1;
    if (status && status !== 'all') {
      sql += ` AND status = $${i}`;
      params.push(status);
      i++;
    }
    if (source) {
      sql += ` AND source = $${i}`;
      params.push(source);
      i++;
    }
    sql += ' ORDER BY created_at DESC LIMIT 500';
    const rows = await getRows(sql, params);
    const leads = rows.map((r) => ({
      id: r.id,
      source: r.source,
      name: r.name,
      email: r.email,
      phone: r.phone,
      company: r.company,
      subject: r.subject,
      message: r.message,
      payload: r.payload || {},
      status: r.status,
      notes: r.notes,
      created_at: r.created_at,
      updated_at: r.updated_at,
    }));
    res.status(200).json({ leads });
  } catch (error) {
    console.error('GET /api/leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
}

export default withAuth(handler, { roles: ['admin', 'staff'] });
