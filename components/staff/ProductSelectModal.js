'use client';

import React, { useState, useMemo } from 'react';

/**
 * Modal for staff to select products (Plain or Printed) when logging an outbound visit.
 * Shows a filtered list with checkboxes; selection is optional and stored on the lead.
 */
export default function ProductSelectModal({ open, onClose, title, products = [], selectedIds = [], onChange }) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
    );
  }, [products, search]);

  const toggle = (id) => {
    const next = selectedIds.includes(id)
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];
    onChange(next);
  };

  const selectAll = () => {
    const ids = filtered.map((p) => p.id);
    const merged = [...new Set([...selectedIds, ...ids])];
    onChange(merged);
  };

  const clearAll = () => {
    const filteredIds = new Set(filtered.map((p) => p.id));
    onChange(selectedIds.filter((id) => !filteredIds.has(id)));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-lg max-h-[85vh] flex flex-col bg-white rounded-t-2xl sm:rounded-2xl shadow-xl border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
          <h2 id="product-modal-title" className="text-lg font-bold text-slate-900">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="px-4 py-2 border-b border-slate-100">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            aria-label="Search products"
          />
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={selectAll}
              className="text-xs font-medium text-emerald-600 hover:underline"
            >
              Select all in list
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="text-xs font-medium text-slate-500 hover:underline"
            >
              Clear selection
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 px-4 py-2">
          <p className="text-slate-500 text-sm mb-2">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''} (optional — leave empty if not needed)
          </p>
          <ul className="space-y-1 pb-4">
            {filtered.map((p) => (
              <li key={p.id}>
                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer touch-manipulation">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(p.id)}
                    onChange={() => toggle(p.id)}
                    className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="font-medium text-slate-900">{p.name}</span>
                  {p.category && (
                    <span className="text-slate-500 text-sm ml-auto shrink-0">{p.category}</span>
                  )}
                </label>
              </li>
            ))}
          </ul>
          {filtered.length === 0 && (
            <p className="text-slate-500 text-sm py-4">No products match your search.</p>
          )}
        </div>

        <div className="px-4 py-3 border-t border-slate-200 bg-slate-50 rounded-b-2xl sm:rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 active:bg-emerald-800"
          >
            Done ({selectedIds.length} selected)
          </button>
        </div>
      </div>
    </div>
  );
}
