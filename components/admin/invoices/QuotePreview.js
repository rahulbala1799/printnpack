import { formatQtySize, calcQuoteTotals, recalcLineTotal } from '../../../lib/invoices/line-item';
import { formatBreakdownForFamily } from '../../../lib/pricing/breakdown-format';

function LineBreakdown({ line }) {
  if (!line.pricing_breakdown) return null;
  const text = formatBreakdownForFamily(
    line.pricing_family || 'vinyl_banner',
    {
      breakdown: line.pricing_breakdown,
      unit_price: line.unit_price,
      line_total: line.line_total,
      suggested_name: line.name,
      size_spec: line.size_spec,
    },
    line
  );
  return (
    <details className="mt-1">
      <summary className="text-[10px] text-blue-600 cursor-pointer select-none">View cost breakdown</summary>
      <pre className="text-[10px] text-slate-500 whitespace-pre-wrap mt-1 font-mono leading-relaxed bg-slate-50 rounded p-2">
        {text}
      </pre>
    </details>
  );
}

export default function QuotePreview({
  quote,
  onUpdate,
  onFinalize,
  onConvert,
  saving,
}) {
  if (!quote) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 text-slate-500 text-sm">
        Start a quote to see line items here.
      </div>
    );
  }

  const items = quote.items || [];
  const isCash = quote.document_type === 'cash';

  const updateItems = (next) => {
    const totals = calcQuoteTotals(next, quote.document_type, quote.vat_rate);
    onUpdate({ items: next, ...totals });
  };

  const updateItem = (idx, field, value) => {
    const next = items.map((line, i) => {
      if (i !== idx) return line;
      const u = { ...line, [field]: value };
      return recalcLineTotal(u);
    });
    updateItems(next);
  };

  const removeItem = (idx) => {
    updateItems(items.filter((_, i) => i !== idx));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 flex flex-col h-full min-h-[500px]">
      <div className="p-4 border-b border-slate-100">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Quote preview</p>
        <p className="text-sm text-slate-600 mt-1">{quote.customer_name || 'No customer'}</p>
        <textarea
          className="mt-2 w-full border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-600 resize-none"
          rows={2}
          placeholder="Notes (optional)"
          defaultValue={quote.notes || ''}
          onBlur={(e) => onUpdate({ notes: e.target.value })}
        />
      </div>

      <div className="flex-1 overflow-auto p-4">
        {items.length === 0 ? (
          <p className="text-slate-400 text-sm">No lines yet — ask the AI to add products.</p>
        ) : (
          <table className="w-full text-xs">
            <thead>
              <tr className="text-slate-500 text-left">
                <th className="pb-2">Description</th>
                <th className="pb-2">Category</th>
                <th className="pb-2">Qty</th>
                <th className="pb-2 text-right">Unit €</th>
                <th className="pb-2 text-right">Amount</th>
                <th className="pb-2 w-6" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {items.map((line, idx) => (
                <tr key={line.id || idx}>
                  <td className="py-2 pr-2">
                    <input
                      className="w-full border border-slate-200 rounded px-1 py-0.5 text-xs disabled:bg-slate-50"
                      value={line.name || ''}
                      disabled={line.product_type === 'plain'}
                      onChange={(e) => updateItem(idx, 'name', e.target.value)}
                    />
                    {line.price_source === 'saved' && (
                      <span className="text-[10px] text-amber-600">saved price</span>
                    )}
                    <LineBreakdown line={line} />
                  </td>
                  <td className="py-2 pr-2 text-slate-600">{line.category}</td>
                  <td className="py-2 pr-2">
                    <input
                      type="number"
                      min="0"
                      step={line.unit === 'cases' ? 1 : 0.01}
                      className="w-14 border border-slate-200 rounded px-1 py-0.5 text-xs"
                      value={line.quantity}
                      onChange={(e) => updateItem(idx, 'quantity', parseFloat(e.target.value) || 0)}
                    />
                    {line.size_spec && (
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[80px]" title={line.size_spec}>
                        {line.size_spec}
                      </div>
                    )}
                  </td>
                  <td className="py-2 text-right">
                    <input
                      type="number"
                      step="0.01"
                      className="w-16 border border-slate-200 rounded px-1 py-0.5 text-xs text-right"
                      value={line.unit_price}
                      onChange={(e) => updateItem(idx, 'unit_price', parseFloat(e.target.value) || 0)}
                    />
                  </td>
                  <td className="py-2 text-right text-slate-700 font-medium">
                    €{Number(line.line_total || 0).toFixed(2)}
                  </td>
                  <td className="py-2 text-right">
                    <button
                      type="button"
                      onClick={() => removeItem(idx)}
                      className="text-slate-300 hover:text-red-500 text-sm"
                      aria-label="Remove line"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="p-4 border-t border-slate-100 space-y-1 text-sm">
        {!isCash && (
          <>
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>€{Number(quote.subtotal || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>VAT 23%</span>
              <span>€{Number(quote.vat_amount || 0).toFixed(2)}</span>
            </div>
          </>
        )}
        <div className="flex justify-between font-bold text-slate-900 pt-1">
          <span>Total</span>
          <span>€{Number(quote.total || 0).toFixed(2)}</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-3">
          <button
            type="button"
            disabled={saving}
            onClick={onFinalize}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium"
          >
            Finalize quote
          </button>
          <button
            type="button"
            disabled={saving || !items.length}
            onClick={onConvert}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium"
          >
            {isCash ? 'Generate cash summary' : 'Convert to invoice'}
          </button>
        </div>
      </div>
    </div>
  );
}
