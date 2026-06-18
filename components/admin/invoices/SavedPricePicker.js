import React, { useEffect, useState } from 'react';

function formatPrice(n) {
  return `€${Number(n || 0).toFixed(2)}`;
}

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function SavedPricePicker({ open, onClose, customerId, customerName, onApply, applying }) {
  const [catalog, setCatalog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('latest');
  const [selected, setSelected] = useState(new Set());
  const [priceChoice, setPriceChoice] = useState({});

  useEffect(() => {
    if (!open || !customerId) return;
    setLoading(true);
    setMode('latest');
    setSelected(new Set());
    setPriceChoice({});
    fetch(`/api/admin/invoices/customer-prices?customer_id=${encodeURIComponent(customerId)}`, {
      credentials: 'include',
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setCatalog(d))
      .catch(() => setCatalog(null))
      .finally(() => setLoading(false));
  }, [open, customerId]);

  if (!open) return null;

  const products = catalog?.products || [];

  const toggleProduct = (matchKey) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(matchKey)) next.delete(matchKey);
      else next.add(matchKey);
      return next;
    });
  };

  const handleApply = () => {
    if (mode === 'latest') {
      onApply({ mode: 'latest' });
      return;
    }
    const match_keys = Array.from(selected);
    const selections = match_keys.map((match_key) => {
      const product = products.find((p) => p.match_key === match_key);
      const priceIdx = priceChoice[match_key] ?? 0;
      const price = product?.prices?.[priceIdx]?.unit_price ?? product?.latest_unit_price;
      return { match_key, unit_price: price };
    });
    onApply({ mode: 'selection', match_keys, selections });
  };

  const canApply =
    mode === 'latest'
      ? products.length > 0
      : selected.size > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-label="Saved prices"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[85vh] flex flex-col">
        <div className="p-4 border-b border-slate-100 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-900">Saved prices</h3>
            <p className="text-sm text-slate-500 mt-0.5">{customerName || 'Customer'}</p>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none" aria-label="Close">
            ×
          </button>
        </div>

        <div className="p-4 border-b border-slate-50 flex gap-2">
          <button
            type="button"
            onClick={() => setMode('latest')}
            className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium ${
              mode === 'latest' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Apply all latest
          </button>
          <button
            type="button"
            onClick={() => setMode('selection')}
            className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium ${
              mode === 'selection' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            Pick products
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {loading && <p className="text-sm text-slate-400">Loading saved prices…</p>}
          {!loading && !products.length && (
            <p className="text-sm text-slate-500">No saved prices yet. Finalize a quote for this customer to build history.</p>
          )}
          {!loading && mode === 'latest' && products.length > 0 && (
            <p className="text-sm text-slate-600">
              Apply {products.length} product{products.length === 1 ? '' : 's'} at their most recent saved unit prices.
            </p>
          )}
          {!loading && mode === 'selection' && products.map((p) => (
            <label
              key={p.match_key}
              className={`flex items-start gap-3 p-3 rounded-xl border mb-2 cursor-pointer ${
                selected.has(p.match_key) ? 'border-blue-400 bg-blue-50/50' : 'border-slate-100'
              }`}
            >
              <input
                type="checkbox"
                className="mt-1"
                checked={selected.has(p.match_key)}
                onChange={() => toggleProduct(p.match_key)}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-900 truncate">{p.name}</div>
                <div className="text-xs text-slate-500">{p.category}</div>
                {p.prices?.length > 1 ? (
                  <select
                    className="mt-2 text-xs border border-slate-200 rounded-lg px-2 py-1 w-full"
                    value={priceChoice[p.match_key] ?? 0}
                    onChange={(e) =>
                      setPriceChoice((prev) => ({ ...prev, [p.match_key]: Number(e.target.value) }))
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.prices.map((pr, i) => (
                      <option key={i} value={i}>
                        {formatPrice(pr.unit_price)} — {pr.source} ({formatDate(pr.saved_at)})
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="text-xs text-slate-600 mt-1">{formatPrice(p.latest_unit_price)}</div>
                )}
              </div>
            </label>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-700"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!canApply || applying}
            onClick={handleApply}
            className="flex-1 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 text-white disabled:opacity-50"
          >
            {applying ? 'Applying…' : 'Apply to quote'}
          </button>
        </div>
      </div>
    </div>
  );
}
