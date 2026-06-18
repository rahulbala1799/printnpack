import React, { useState } from 'react';
import PriceBreakdownCard from './ChatBreakdown';

function eur(n) {
  if (n == null) return '—';
  const v = Number(n);
  if (v > 0 && v < 1) return `${Math.round(v * 100)}¢`;
  return `€${v.toFixed(2)}`;
}

function PendingForm({ row, onSubmit, busy }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries((row.needs || []).map((n) => [n.key, '']))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(row.id, values);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 space-y-2 bg-amber-50/80 rounded-lg p-2.5 border border-amber-100">
      <p className="text-[11px] text-amber-900">{row.message}</p>
      {(row.needs || []).map((field) => (
        <label key={field.key} className="block text-[11px]">
          <span className="text-amber-800 font-medium">{field.label}</span>
          <input
            type={field.type === 'number' ? 'number' : 'text'}
            className="mt-0.5 w-full border border-amber-200 rounded-lg px-2 py-1.5 text-xs bg-white"
            placeholder={field.placeholder || ''}
            value={values[field.key] ?? ''}
            onChange={(e) => setValues((v) => ({ ...v, [field.key]: e.target.value }))}
            required={field.required !== false}
          />
        </label>
      ))}
      <button
        type="submit"
        disabled={busy}
        className="text-[11px] font-medium bg-amber-700 text-white px-3 py-1.5 rounded-lg disabled:opacity-50"
      >
        Calculate cost
      </button>
    </form>
  );
}

export default function QuoteCostTable({
  rows,
  documentType,
  onAddItem,
  onAddAll,
  onResolvePending,
  onSetInvoicePrice,
  busy,
}) {
  const [expanded, setExpanded] = useState({});
  const [editingPrice, setEditingPrice] = useState({});

  if (!rows?.length) return null;

  const pricedCount = rows.filter((r) => r.status === 'priced').length;

  const commitPriceEdit = (row) => {
    const raw = editingPrice[row.id];
    if (raw === undefined || raw === '') return;
    const num = parseFloat(String(raw).replace(/[€¢]/g, '').replace(',', '.'));
    if (Number.isNaN(num)) return;
    const unitPrice = num > 1 && num < 100 && !String(raw).includes('.') ? num / 100 : num;
    onSetInvoicePrice?.(row.id, unitPrice);
    setEditingPrice((s) => {
      const next = { ...s };
      delete next[row.id];
      return next;
    });
  };

  return (
    <div className="mx-4 mb-3 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-3 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-slate-900">Cost table</p>
          <p className="text-[10px] text-slate-500">
            {documentType === 'cash' ? 'Cash quote' : 'VAT invoice'} · {pricedCount} priced
            {rows.some((r) => r.status === 'needs_info') ? ' · some need info' : ''}
          </p>
        </div>
        {pricedCount > 0 && (
          <button
            type="button"
            disabled={busy}
            onClick={onAddAll}
            className="text-[11px] font-semibold bg-slate-900 text-white px-3 py-1.5 rounded-lg disabled:opacity-50 shrink-0"
          >
            Add all to quote
          </button>
        )}
      </div>

      <div className="divide-y divide-slate-100">
        {rows.map((row) => (
          <div key={row.id} className="px-3 py-2.5">
            <div className="flex items-start gap-2">
              <span className="text-[10px] font-bold text-slate-400 w-5 pt-0.5">#{row.index}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-900 leading-snug">{row.label}</p>
                {row.subtitle && (
                  <p className="text-[10px] text-slate-500 truncate">{row.subtitle}</p>
                )}

                {row.status === 'needs_info' ? (
                  <p className="text-[11px] text-amber-700 mt-1">Needs info — cost not calculated</p>
                ) : (
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mt-1 text-[11px]">
                    <span>
                      <span className="text-slate-500">Cost </span>
                      <span className="font-semibold text-slate-900 tabular-nums">
                        {eur(row.unit_cost)}
                      </span>
                      <span className="text-slate-500"> {row.unit_label}</span>
                    </span>
                    {row.unit_sell != null && row.unit_sell !== row.unit_cost && (
                      <span>
                        <span className="text-slate-500">Sell </span>
                        <span className="tabular-nums text-slate-700">{eur(row.unit_sell)}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <span className="text-slate-500">Invoice </span>
                      <input
                        type="text"
                        className="w-16 border border-slate-200 rounded px-1.5 py-0.5 text-xs tabular-nums"
                        placeholder={eur(row.invoice_unit_price ?? row.unit_sell)}
                        value={
                          editingPrice[row.id] ??
                          (row.invoice_unit_price != null ? eur(row.invoice_unit_price) : '')
                        }
                        onChange={(e) =>
                          setEditingPrice((s) => ({ ...s, [row.id]: e.target.value }))
                        }
                        onBlur={() => commitPriceEdit(row)}
                        onKeyDown={(e) => e.key === 'Enter' && commitPriceEdit(row)}
                      />
                    </span>
                  </div>
                )}

                {row.status === 'needs_info' && (
                  <PendingForm row={row} onSubmit={onResolvePending} busy={busy} />
                )}
              </div>

              {row.status === 'priced' && (
                <div className="flex flex-col gap-1 shrink-0">
                  {row.breakdown_structured && (
                    <button
                      type="button"
                      className="text-[10px] text-blue-600 font-medium hover:underline"
                      onClick={() =>
                        setExpanded((s) => ({ ...s, [row.id]: !s[row.id] }))
                      }
                    >
                      {expanded[row.id] ? 'Hide' : 'Breakdown'}
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={busy || row.on_quote}
                    onClick={() => onAddItem(row.id)}
                    className="text-[10px] font-medium px-2 py-1 rounded-md border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
                  >
                    {row.on_quote ? 'On quote' : 'Add to quote'}
                  </button>
                </div>
              )}
            </div>

            {expanded[row.id] && row.breakdown_structured && (
              <div className="mt-2 ml-5">
                <PriceBreakdownCard breakdown={row.breakdown_structured} compact />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
