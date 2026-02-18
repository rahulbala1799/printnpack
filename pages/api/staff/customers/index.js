import { withAuth } from '../../../../lib/withAuth.js';
import { getRows, getRow } from '../../../../lib/database.js';

function toCustomer(r) {
  return {
    id: r.id,
    name: r.name,
    contact_name: r.contact_name || '',
    phone: r.phone || '',
    email: r.email || '',
    address: r.address || '',
    notes: r.notes || '',
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

/**
 * GET /api/staff/customers
 * List customers. Query: search (optional) - filter by name, contact_name, phone, email.
 */
async function getHandler(req, res) {
  try {
    const search = typeof req.query.search === 'string' ? req.query.search.trim() : '';
    let rows;
    if (search) {
      const term = `%${search}%`;
      rows = await getRows(
        `SELECT id, name, contact_name, phone, email, address, notes, created_at, updated_at
         FROM customers
         WHERE name ILIKE $1 OR COALESCE(contact_name, '') ILIKE $1 OR COALESCE(phone, '') ILIKE $1 OR COALESCE(email, '') ILIKE $1
         ORDER BY name
         LIMIT 100`,
        [term]
      );
    } else {
      rows = await getRows(
        `SELECT id, name, contact_name, phone, email, address, notes, created_at, updated_at
         FROM customers
         ORDER BY name
         LIMIT 200`
      );
    }
    return res.status(200).json({ customers: rows.map(toCustomer) });
  } catch (error) {
    console.error('GET /api/staff/customers:', error);
    return res.status(500).json({ error: 'Failed to fetch customers' });
  }
}

/**
 * POST /api/staff/customers
 * Create customer. Body: { name, contact_name?, phone?, email?, address?, notes? }
 */
async function postHandler(req, res) {
  try {
    const { name, contact_name, phone, email, address, notes } = req.body || {};
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'name is required' });
    }
    const row = await getRow(
      `INSERT INTO customers (name, contact_name, phone, email, address, notes, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, now())
       RETURNING id, name, contact_name, phone, email, address, notes, created_at, updated_at`,
      [
        name.trim(),
        contact_name && typeof contact_name === 'string' ? contact_name.trim() : null,
        phone && typeof phone === 'string' ? phone.trim() : null,
        email && typeof email === 'string' ? email.trim() : null,
        address && typeof address === 'string' ? address.trim() : null,
        notes && typeof notes === 'string' ? notes.trim() : null,
      ]
    );
    return res.status(201).json({ customer: toCustomer(row) });
  } catch (error) {
    console.error('POST /api/staff/customers:', error);
    return res.status(500).json({ error: 'Failed to create customer' });
  }
}

async function handler(req, res) {
  if (req.method === 'GET') return getHandler(req, res);
  if (req.method === 'POST') return postHandler(req, res);
  return res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
