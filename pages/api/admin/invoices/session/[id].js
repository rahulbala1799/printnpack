import { withAuth } from '../../../../../lib/withAuth.js';
import { getRow, getRows } from '../../../../../lib/database.js';

function mapSession(r) {
  return {
    id: r.id,
    admin_id: r.admin_id,
    customer_id: r.customer_id,
    lead_id: r.lead_id,
    document_type: r.document_type,
    status: r.status,
    quote_id: r.quote_id,
    quoted_items: r.quoted_items || [],
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
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing session id' });

  try {
    const session = await getRow(
      `SELECT * FROM invoice_sessions WHERE id = $1 AND admin_id = $2`,
      [id, req.user.id]
    );
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const quote = session.quote_id
      ? await getRow(`SELECT * FROM quotes WHERE id = $1`, [session.quote_id])
      : null;

    let messages;
    try {
      messages = await getRows(
        `SELECT role, content, metadata, created_at FROM invoice_session_messages
         WHERE session_id = $1 AND role IN ('user', 'assistant')
         ORDER BY created_at ASC`,
        [id]
      );
    } catch {
      messages = await getRows(
        `SELECT role, content, created_at FROM invoice_session_messages
         WHERE session_id = $1 AND role IN ('user', 'assistant')
         ORDER BY created_at ASC`,
        [id]
      );
    }

    return res.status(200).json({
      session: mapSession(session),
      quote: quote ? mapQuote(quote) : null,
      quoted_items: session.quoted_items || [],
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
        metadata: m.metadata || {},
        created_at: m.created_at,
      })),
    });
  } catch (e) {
    console.error('GET session:', e);
    return res.status(500).json({ error: 'Failed to load session' });
  }
}

export default withAuth(handler, { roles: ['admin'] });
