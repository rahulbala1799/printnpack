/**
 * Cost table rows for quote session UI — compact pricing summary (not full breakdown).
 */

export function formatCostDisplay(amount) {
  if (amount == null || Number.isNaN(Number(amount))) return '—';
  const v = Number(amount);
  if (v > 0 && v < 1) {
    const cents = Math.round(v * 100);
    return `${cents}¢`;
  }
  return `€${v.toFixed(2)}`;
}

export function isPendingItem(item) {
  return item?.status === 'pending';
}

export function isPricedItem(item) {
  return item && item.status !== 'pending';
}

export function buildCostTableRows(quotedItems = [], quoteItems = []) {
  const onQuoteIds = new Set(
    (quoteItems || []).map((li) => li.quoted_item_id).filter(Boolean)
  );

  return (quotedItems || [])
    .map((it) => {
      if (isPendingItem(it)) {
        return {
          id: it.id,
          index: it.index,
          label: it.label,
          subtitle: it.subtitle || null,
          status: 'needs_info',
          needs: it.needs || [],
          partial_params: it.partial_params || {},
          message: it.message || 'More details needed to calculate cost',
          on_quote: false,
        };
      }

      const sell = it.invoice_unit_price ?? it.unit_sell;
      return {
        id: it.id,
        index: it.index,
          label: it.label,
          subtitle: it.subtitle || null,
          status: 'priced',
          unit_cost: it.unit_cost,
          unit_sell: it.unit_sell,
          invoice_unit_price: it.invoice_unit_price ?? null,
          display_price: sell,
          unit_label: it.unit_label || 'per unit',
          quantity: it.quantity,
          line_total: it.line_total,
          breakdown_structured: it.breakdown_structured || null,
          on_quote: onQuoteIds.has(it.id),
          family: it.family,
      };
    })
    .sort((a, b) => (a.index || 0) - (b.index || 0));
}

export function costTableSummaryText(rows) {
  if (!rows?.length) return '';
  return rows
    .map((r) => {
      if (r.status === 'needs_info') {
        return `${r.label} — needs info`;
      }
      const price = formatCostDisplay(r.unit_cost);
      const sell = r.invoice_unit_price != null ? formatCostDisplay(r.invoice_unit_price) : null;
      const sellNote = sell && sell !== price ? ` (invoice ${sell})` : '';
      return `${r.label} — cost ${price} ${r.unit_label}${sellNote}`;
    })
    .join('\n');
}
