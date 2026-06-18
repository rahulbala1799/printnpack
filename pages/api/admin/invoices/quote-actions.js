import { withAuth } from '../../../../lib/withAuth.js';
import { getRow, getRows, query } from '../../../../lib/database.js';
import {
  loadQuotedItems,
  saveQuotedItems,
  buildLineFromQuotedItem,
  buildLinesFromSelections,
  createManualQuotedItem,
  setQuotedInvoicePrice,
} from '../../../../lib/invoices/quoted-items.js';
import { mergeLinesIntoQuote } from '../../../../lib/invoices/quote-merge.js';
import { runCalcCustom, applyQuotedToLedger } from '../../../../lib/invoices/run-calc-custom.js';
import { buildCostTableRows } from '../../../../lib/invoices/cost-table.js';
import { recalcLineTotal } from '../../../../lib/invoices/line-item.js';

async function getSessionQuote(sessionId, adminId) {
  const session = await getRow(
    `SELECT * FROM invoice_sessions WHERE id = $1 AND admin_id = $2`,
    [sessionId, adminId]
  );
  if (!session?.quote_id) return { session, quote: null };
  const quote = await getRow(`SELECT * FROM quotes WHERE id = $1`, [session.quote_id]);
  return { session, quote };
}

async function respond(session, quote, quotedItems) {
  const freshQuote = quote?.id
    ? await getRow(`SELECT * FROM quotes WHERE id = $1`, [quote.id])
    : quote;
  return {
    quote: freshQuote,
    quoted_items: quotedItems,
    cost_table: buildCostTableRows(quotedItems, freshQuote?.items || []),
  };
}

async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { session_id, action } = req.body || {};
    if (!session_id || !action) {
      return res.status(400).json({ error: 'session_id and action required' });
    }

    const { session, quote } = await getSessionQuote(session_id, req.user.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    if (!quote) return res.status(400).json({ error: 'No quote linked to session' });

    let quotedItems = await loadQuotedItems(getRow, session_id);
    const documentType = quote.document_type || 'vat';
    const purchaseVatRate = quote.vat_rate ?? 0.23;

    if (action === 'add_item') {
      const { quoted_id, index, unit_price, quantity } = req.body;
      const quoted = quotedItems.find((it) => it.id === quoted_id || it.index === index);
      if (!quoted || quoted.status === 'pending') {
        return res.status(400).json({ error: 'Item not found or not priced yet' });
      }
      const line = buildLineFromQuotedItem(quoted, {
        unit_price: unit_price ?? quoted.invoice_unit_price ?? quoted.unit_sell,
        quantity,
      });
      await mergeLinesIntoQuote(quote.id, [line]);
      const payload = await respond(session, quote, quotedItems);
      return res.status(200).json({ ok: true, added: line.name, ...payload });
    }

    if (action === 'add_all') {
      const selections = req.body.selections;
      const priced = quotedItems.filter((it) => it.status !== 'pending');
      const sels =
        selections?.length > 0
          ? selections
          : priced.map((it) => ({
              quoted_id: it.id,
              unit_price: it.invoice_unit_price ?? it.unit_sell,
              quantity: it.quantity,
            }));
      const lines = buildLinesFromSelections(quotedItems, sels);
      if (!lines.length) return res.status(400).json({ error: 'No priced items to add' });
      await mergeLinesIntoQuote(quote.id, lines);
      const payload = await respond(session, quote, quotedItems);
      return res.status(200).json({ ok: true, added: lines.length, ...payload });
    }

    if (action === 'set_invoice_price') {
      const { quoted_id, index, unit_price } = req.body;
      quotedItems = setQuotedInvoicePrice(quotedItems, { quoted_id, index, unit_price });
      quotedItems = await saveQuotedItems(query, session_id, quotedItems);
      const payload = await respond(session, quote, quotedItems);
      return res.status(200).json({ ok: true, ...payload });
    }

    if (action === 'resolve_pending') {
      const { pending_id, values = {} } = req.body;
      const pending = quotedItems.find((it) => it.id === pending_id && it.status === 'pending');
      if (!pending) return res.status(404).json({ error: 'Pending item not found' });

      const params = { ...pending.partial_params, ...values };
      if (values.num_cases != null) {
        params.num_cases = Number(values.num_cases);
        params.price_per = params.price_per || 'case';
      }
      if (values.quantity != null) {
        params.quantity = Number(values.quantity);
      }
      if (values.plain_product_id) params.plain_product_id = values.plain_product_id;
      if (values.plain_search) params.plain_search = values.plain_search;

      const out = await runCalcCustom(getRows, getRow, params, {
        document_type: documentType,
        purchase_vat_rate: purchaseVatRate,
      });
      if (out.error) return res.status(400).json({ error: out.error });

      quotedItems = applyQuotedToLedger(quotedItems, out.entry, pending_id);
      quotedItems = await saveQuotedItems(query, session_id, quotedItems);
      const payload = await respond(session, quote, quotedItems);
      return res.status(200).json({ ok: true, priced: out.entry.label, ...payload });
    }

    if (action === 'add_manual') {
      const { name, quantity, unit_price, unit_label } = req.body;
      if (!name || unit_price == null) {
        return res.status(400).json({ error: 'name and unit_price required' });
      }
      const entry = createManualQuotedItem({ name, quantity, unit_price, unit_label });
      quotedItems = [...quotedItems, entry];
      quotedItems = await saveQuotedItems(query, session_id, quotedItems);
      const line = buildLineFromQuotedItem(entry, { unit_price, quantity });
      await mergeLinesIntoQuote(quote.id, [line]);
      const payload = await respond(session, quote, quotedItems);
      return res.status(200).json({ ok: true, added: name, ...payload });
    }

    return res.status(400).json({ error: `Unknown action: ${action}` });
  } catch (e) {
    console.error('quote-actions:', e);
    return res.status(500).json({ error: e.message || 'Action failed' });
  }
}

export default withAuth(handler, { roles: ['admin'] });
