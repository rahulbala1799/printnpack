import { withAuth } from '../../../../lib/withAuth.js';
import { getRow, getRows, query } from '../../../../lib/database.js';

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
 * GET /api/staff/pricelists/[id]
 */
async function getHandler(req, res) {
  try {
    const row = await getRow(
      `SELECT id, staff_id, customer_id, customer_name, notes, status, valid_from, valid_to, items, created_at, updated_at
       FROM customer_pricelists
       WHERE id = $1 AND staff_id = $2`,
      [req.query.id, req.user.id]
    );
    if (!row) {
      return res.status(404).json({ error: 'Pricelist not found' });
    }
    return res.status(200).json({ pricelist: toPricelist(row) });
  } catch (error) {
    console.error('GET /api/staff/pricelists/[id]:', error);
    return res.status(500).json({ error: 'Failed to fetch pricelist' });
  }
}

/**
 * PATCH /api/staff/pricelists/[id]
 * Body: { customer_name?, notes?, status?, valid_from?, valid_to?, items? }
 * When setting status to 'active': auto-archive any other active pricelist for same customer (Option A).
 */
async function patchHandler(req, res) {
  try {
    const id = req.query.id;
    const current = await getRow(
      'SELECT id, staff_id, customer_id, customer_name, status FROM customer_pricelists WHERE id = $1 AND staff_id = $2',
      [id, req.user.id]
    );
    if (!current) {
      return res.status(404).json({ error: 'Pricelist not found' });
    }

    const { customer_id, customer_name, notes, status, valid_from, valid_to, items } = req.body || {};
    const updates = [];
    const params = [];
    let p = 1;

    if (customer_id !== undefined) {
      updates.push(`customer_id = $${p++}`);
      params.push(customer_id || null);
      if (customer_id) {
        const cust = await getRow('SELECT name FROM customers WHERE id = $1', [customer_id]);
        if (cust) {
          updates.push(`customer_name = $${p++}`);
          params.push(cust.name);
        }
      }
    }
    if (typeof customer_name === 'string') {
      updates.push(`customer_name = $${p++}`);
      params.push(customer_name.trim());
    }
    if (notes !== undefined) {
      updates.push(`notes = $${p++}`);
      params.push(typeof notes === 'string' ? notes.trim() : null);
    }
    if (status && ['draft', 'active', 'archived'].includes(status)) {
      updates.push(`status = $${p++}`);
      params.push(status);
      if (status === 'active') {
        const effectiveCustomerId = customer_id !== undefined ? (customer_id || null) : current.customer_id;
        let effectiveCustomerName = current.customer_name;
        if (typeof customer_name === 'string' && customer_name.trim()) effectiveCustomerName = customer_name.trim();
        else if (effectiveCustomerId) {
          const cust = await getRow('SELECT name FROM customers WHERE id = $1', [effectiveCustomerId]);
          if (cust) effectiveCustomerName = cust.name;
        }
        if (effectiveCustomerId) {
          await query(
            `UPDATE customer_pricelists SET status = 'archived', updated_at = now()
             WHERE staff_id = $1 AND customer_id = $2 AND status = 'active' AND id != $3`,
            [req.user.id, effectiveCustomerId, id]
          );
        } else {
          await query(
            `UPDATE customer_pricelists SET status = 'archived', updated_at = now()
             WHERE staff_id = $1 AND customer_id IS NULL AND customer_name = $2 AND status = 'active' AND id != $3`,
            [req.user.id, effectiveCustomerName, id]
          );
        }
      }
    }
    if (valid_from !== undefined) {
      updates.push(`valid_from = $${p++}`);
      params.push(valid_from || null);
    }
    if (valid_to !== undefined) {
      updates.push(`valid_to = $${p++}`);
      params.push(valid_to || null);
    }
    if (Array.isArray(items)) {
      updates.push(`items = $${p++}`);
      params.push(JSON.stringify(items));
    }

    if (updates.length === 0) {
      const row = await getRow(
        'SELECT id, staff_id, customer_name, notes, status, valid_from, valid_to, items, created_at, updated_at FROM customer_pricelists WHERE id = $1',
        [id]
      );
      return res.status(200).json({ pricelist: toPricelist(row) });
    }

    updates.push('updated_at = now()');
    params.push(id);
    const row = await getRow(
      `UPDATE customer_pricelists SET ${updates.join(', ')}
       WHERE id = $${p} AND staff_id = $${p + 1}
       RETURNING id, staff_id, customer_name, notes, status, valid_from, valid_to, items, created_at, updated_at`,
      [...params, req.user.id]
    );
    if (!row) {
      return res.status(404).json({ error: 'Pricelist not found' });
    }
    return res.status(200).json({ pricelist: toPricelist(row) });
  } catch (error) {
    console.error('PATCH /api/staff/pricelists/[id]:', error);
    return res.status(500).json({ error: 'Failed to update pricelist' });
  }
}

/**
 * DELETE /api/staff/pricelists/[id]
 */
async function deleteHandler(req, res) {
  try {
    const result = await query(
      'DELETE FROM customer_pricelists WHERE id = $1 AND staff_id = $2 RETURNING id',
      [req.query.id, req.user.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Pricelist not found' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('DELETE /api/staff/pricelists/[id]:', error);
    return res.status(500).json({ error: 'Failed to delete pricelist' });
  }
}

async function handler(req, res) {
  if (req.method === 'GET') return getHandler(req, res);
  if (req.method === 'PATCH') return patchHandler(req, res);
  if (req.method === 'DELETE') return deleteHandler(req, res);
  return res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
