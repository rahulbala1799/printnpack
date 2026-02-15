import { getRow, query } from '../../../lib/database';
import { withAuth } from '../../../lib/withAuth';

function toLead(r) {
  if (!r) return null;
  return {
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
  };
}

async function getHandler(req, res) {
  const { id } = req.query;
  const row = await getRow(
    'SELECT id, source, name, email, phone, company, subject, message, payload, status, notes, created_at, updated_at FROM leads WHERE id = $1',
    [id]
  );
  const lead = toLead(row);
  if (!lead) return res.status(404).json({ error: 'Lead not found' });
  res.status(200).json(lead);
}

async function patchHandler(req, res) {
  const { id } = req.query;
  const { status, notes } = req.body || {};
  const updates = [];
  const params = [];
  let i = 1;
  if (status !== undefined) {
    const allowed = ['new', 'contacted', 'qualified', 'quote_sent', 'won', 'lost'];
    if (!allowed.includes(status)) return res.status(400).json({ error: 'Invalid status' });
    updates.push(`status = $${i}`);
    params.push(status);
    i++;
  }
  if (notes !== undefined) {
    updates.push(`notes = $${i}`);
    params.push(notes);
    i++;
  }
  if (updates.length === 0) return res.status(400).json({ error: 'No updates provided' });
  params.push(id);
  updates.push(`updated_at = now()`);
  await query(
    `UPDATE leads SET ${updates.join(', ')} WHERE id = $${i}`,
    params
  );
  const row = await getRow(
    'SELECT id, source, name, email, phone, company, subject, message, payload, status, notes, created_at, updated_at FROM leads WHERE id = $1',
    [id]
  );
  res.status(200).json(toLead(row));
}

async function handler(req, res) {
  if (req.method === 'GET') return getHandler(req, res);
  if (req.method === 'PATCH') return patchHandler(req, res);
  return res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['admin', 'staff'] });
