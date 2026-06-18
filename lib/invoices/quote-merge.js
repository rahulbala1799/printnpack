import { getRow } from '../database.js';
import { calcQuoteTotals, recalcLineTotal } from './line-item.js';

export async function mergeLinesIntoQuote(quoteId, lines, replace = false) {
  const q = await getRow(`SELECT * FROM quotes WHERE id = $1`, [quoteId]);
  let items = replace ? [] : [...(q.items || [])];
  for (const line of lines) {
    const n = recalcLineTotal(line);
    const idx = items.findIndex((i) => i.id === n.id);
    if (idx >= 0) items[idx] = n;
    else items.push(n);
  }
  const totals = calcQuoteTotals(items, q.document_type, q.vat_rate);
  return getRow(
    `UPDATE quotes SET items = $1, subtotal = $2, vat_amount = $3, total = $4, updated_at = now() WHERE id = $5 RETURNING *`,
    [JSON.stringify(items), totals.subtotal, totals.vat_amount, totals.total, q.id]
  );
}
