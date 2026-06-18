import { withAuth } from '../../../../lib/withAuth.js';
import { getRows, getRow, query } from '../../../../lib/database.js';
import { calcQuoteTotals } from '../../../../lib/invoices/line-item.js';

function mapSession(r) {
  return {
    id: r.id,
    admin_id: r.admin_id,
    customer_id: r.customer_id,
    lead_id: r.lead_id,
    document_type: r.document_type,
    status: r.status,
    quote_id: r.quote_id,
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

function mapQuote(r) {
  return {
    id: r.id,
    session_id: r.session_id,
    customer_id: r.customer_id,
    lead_id: r.lead_id,
    customer_name: r.customer_name,
    document_type: r.document_type,
    items: r.items || [],
    subtotal: Number(r.subtotal),
    vat_rate: Number(r.vat_rate),
    vat_amount: Number(r.vat_amount),
    total: Number(r.total),
    status: r.status,
    notes: r.notes,
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { type } = req.query;
      const quotes = await getRows(
        `SELECT * FROM quotes WHERE admin_id = $1 ORDER BY updated_at DESC LIMIT 100`,
        [req.user.id]
      );
      const invoices = await getRows(
        `SELECT * FROM invoices WHERE admin_id = $1 ORDER BY created_at DESC LIMIT 100`,
        [req.user.id]
      );
      let q = quotes.map(mapQuote);
      let inv = invoices.map((r) => ({
        ...r,
        subtotal: Number(r.subtotal),
        vat_amount: Number(r.vat_amount),
        total: Number(r.total),
        items: r.items || [],
      }));
      if (type === 'vat') inv = inv.filter((i) => i.document_type === 'vat');
      if (type === 'cash') inv = inv.filter((i) => i.document_type === 'cash');
      return res.status(200).json({ quotes: q, invoices: inv });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Failed to list' });
    }
  }

  if (req.method === 'POST') {
    try {
      const body = req.body || {};
      const documentType = body.document_type === 'cash' ? 'cash' : 'vat';
      const session = await getRow(
        `INSERT INTO invoice_sessions (admin_id, customer_id, lead_id, document_type, status)
         VALUES ($1, $2, $3, $4, 'active') RETURNING *`,
        [req.user.id, body.customer_id || null, body.lead_id || null, documentType]
      );
      const totals = calcQuoteTotals([], documentType);
      const quote = await getRow(
        `INSERT INTO quotes (session_id, admin_id, customer_id, lead_id, customer_name, document_type, items, subtotal, vat_rate, vat_amount, total, status)
         VALUES ($1, $2, $3, $4, $5, $6, '[]', $7, $8, $9, $10, 'draft') RETURNING *`,
        [
          session.id,
          req.user.id,
          body.customer_id || null,
          body.lead_id || null,
          body.customer_name || null,
          documentType,
          totals.subtotal,
          totals.vat_rate,
          totals.vat_amount,
          totals.total,
        ]
      );
      await query(`UPDATE invoice_sessions SET quote_id = $1, updated_at = now() WHERE id = $2`, [
        quote.id,
        session.id,
      ]);

      const welcome =
        'Hi! I can price plain packaging from the database and calculate custom printed products. Select a customer for saved pricing, choose VAT or Cash, then ask me anything — e.g. "How much for a 1.5m × 2m vinyl banner?" or "Add 2 cases of 12 inch kraft pizza boxes."';
      await query(
        `INSERT INTO invoice_session_messages (session_id, role, content) VALUES ($1, 'assistant', $2)`,
        [session.id, welcome]
      );

      return res.status(201).json({ session: mapSession({ ...session, quote_id: quote.id }), quote: mapQuote(quote) });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Failed to create session' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['admin'] });
