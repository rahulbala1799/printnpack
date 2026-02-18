import { withAuth } from '../../../../lib/withAuth.js';
import { getRows, getRow } from '../../../../lib/database.js';

function toPricelist(r) {
  return {
    id: r.id,
    staff_id: r.staff_id,
    customer_id: r.customer_id || null,
    customer_name: r.customer_name,
    notes: r.notes || '',
    status: r.status || 'draft',
    valid_from: r.valid_from,
    valid_to: r.valid_to,
    items: r.items || [],
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

/**
 * GET /api/staff/pricelists
 * List all pricelists for the current staff user. Query: status (optional filter).
 */
async function getHandler(req, res) {
  try {
    const { status } = req.query;
    let rows;
    if (status && ['draft', 'active', 'archived'].includes(status)) {
      rows = await getRows(
        `SELECT id, staff_id, customer_id, customer_name, notes, status, valid_from, valid_to, items, created_at, updated_at
         FROM customer_pricelists
         WHERE staff_id = $1 AND status = $2
         ORDER BY updated_at DESC`,
        [req.user.id, status]
      );
    } else {
      rows = await getRows(
        `SELECT id, staff_id, customer_id, customer_name, notes, status, valid_from, valid_to, items, created_at, updated_at
         FROM customer_pricelists
         WHERE staff_id = $1
         ORDER BY updated_at DESC`,
        [req.user.id]
      );
    }
    return res.status(200).json({ pricelists: rows.map(toPricelist) });
  } catch (error) {
    console.error('GET /api/staff/pricelists:', error);
    return res.status(500).json({ error: 'Failed to fetch pricelists' });
  }
}

/**
 * POST /api/staff/pricelists
 * Create: { customer_name, notes?, status?, valid_from?, valid_to?, items? }
 * Duplicate: { duplicate_from_id, customer_name? } — creates new draft with copied items.
 */
async function postHandler(req, res) {
  try {
    const body = req.body || {};
    const duplicateFromId = body.duplicate_from_id;

    if (duplicateFromId) {
      const source = await getRow(
        'SELECT id, customer_id, customer_name, notes, items FROM customer_pricelists WHERE id = $1 AND staff_id = $2',
        [duplicateFromId, req.user.id]
      );
      if (!source) {
        return res.status(404).json({ error: 'Pricelist not found' });
      }
      const customerName = (typeof body.customer_name === 'string' && body.customer_name.trim())
        ? body.customer_name.trim()
        : `${source.customer_name} (copy)`;
      const row = await getRow(
        `INSERT INTO customer_pricelists (staff_id, customer_id, customer_name, notes, status, items, updated_at)
         VALUES ($1, $2, $3, $4, 'draft', $5, now())
         RETURNING id, staff_id, customer_id, customer_name, notes, status, valid_from, valid_to, items, created_at, updated_at`,
        [req.user.id, source.customer_id || null, customerName, source.notes || null, JSON.stringify(source.items || [])]
      );
      return res.status(201).json({ pricelist: toPricelist(row) });
    }

    const { customer_id, customer_name, notes, status, valid_from, valid_to, items } = body;
    let finalCustomerId = customer_id || null;
    let finalCustomerName = typeof customer_name === 'string' ? customer_name.trim() : '';

    if (finalCustomerId) {
      const cust = await getRow('SELECT id, name FROM customers WHERE id = $1', [finalCustomerId]);
      if (cust) finalCustomerName = cust.name;
    }
    if (!finalCustomerName) {
      return res.status(400).json({ error: 'customer_name or customer_id (with existing customer) is required' });
    }

    const safeStatus = status && ['draft', 'active', 'archived'].includes(status) ? status : 'draft';
    const safeItems = Array.isArray(items) ? items : [];
    const row = await getRow(
      `INSERT INTO customer_pricelists (staff_id, customer_id, customer_name, notes, status, valid_from, valid_to, items, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, now())
       RETURNING id, staff_id, customer_id, customer_name, notes, status, valid_from, valid_to, items, created_at, updated_at`,
      [
        req.user.id,
        finalCustomerId,
        finalCustomerName,
        notes && typeof notes === 'string' ? notes.trim() : null,
        safeStatus,
        valid_from || null,
        valid_to || null,
        JSON.stringify(safeItems),
      ]
    );
    return res.status(201).json({ pricelist: toPricelist(row) });
  } catch (error) {
    console.error('POST /api/staff/pricelists:', error);
    return res.status(500).json({ error: 'Failed to create pricelist' });
  }
}

async function handler(req, res) {
  if (req.method === 'GET') return getHandler(req, res);
  if (req.method === 'POST') return postHandler(req, res);
  return res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
