import { withAuth } from '../../../../lib/withAuth.js';
import { getRows, getRow, query } from '../../../../lib/database.js';

async function handler(req, res) {
  if (req.method === 'GET') {
    const rows = await getRows(
      `SELECT id, family, rule_key, label, rule_data, is_active, sort_order, updated_at
       FROM pricing_rules ORDER BY family, sort_order`
    );
    return res.status(200).json({ rules: rows });
  }

  if (req.method === 'PATCH') {
    const { id, rule_data, label, is_active } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id required' });
    const row = await getRow(
      `UPDATE pricing_rules SET
        rule_data = COALESCE($1, rule_data),
        label = COALESCE($2, label),
        is_active = COALESCE($3, is_active),
        updated_at = now()
       WHERE id = $4 RETURNING *`,
      [rule_data ? JSON.stringify(rule_data) : null, label, is_active, id]
    );
    return res.status(200).json({ rule: row });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['admin'] });
