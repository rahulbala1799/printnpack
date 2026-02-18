import React, { useState, useEffect, useCallback } from 'react';

const DEBOUNCE_MS = 280;

export default function PricelistProductPicker({ onSelect, onClose, open }) {
  const [tab, setTab] = useState('printed');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    if (!debouncedSearch && tab === 'plain') {
      setProducts([]);
      return;
    }
    setLoading(true);
    const base = tab === 'plain' ? '/api/staff/plain-products' : '/api/staff/printed-products';
    const q = debouncedSearch ? `?search=${encodeURIComponent(debouncedSearch)}` : (tab === 'printed' ? '?' : '');
    fetch(`${base}${q}`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : { products: [] }))
      .then((d) => setProducts(d.products || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [tab, debouncedSearch]);

  const handleSelect = useCallback(
    (p) => {
      onSelect({
        product_type: tab,
        product_id: p.id,
        product_name: p.name,
        unit_label: p.unit_label || (tab === 'plain' ? 'per case' : 'per unit'),
      });
      onClose?.();
    },
    [tab, onSelect, onClose]
  );

  return (
    <div
      className={`pl-overlay ${open ? 'open' : ''}`}
      id="pl-product-picker-overlay"
      onClick={(e) => e.target.id === 'pl-product-picker-overlay' && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-label="Add product"
    >
      <div className="pl-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="pl-sheet-handle" />
        <div className="pl-sheet-header">
          <span className="pl-sheet-title">Add product</span>
          <button type="button" className="pl-sheet-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="pl-sheet-search-wrap">
          <svg className="pl-sheet-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            type="search"
            className="pl-sheet-search"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            aria-label="Search products"
          />
        </div>
        <div className="pl-sheet-tabs">
          <button type="button" className={`pl-sheet-tab ${tab === 'printed' ? 'active' : ''}`} onClick={() => setTab('printed')}>Printed</button>
          <button type="button" className={`pl-sheet-tab ${tab === 'plain' ? 'active' : ''}`} onClick={() => setTab('plain')}>Plain Pack</button>
        </div>
        <div className="pl-sheet-list">
          {loading && <p style={{ padding: 20, color: 'var(--pl-ink3)', fontSize: 14 }}>Loading…</p>}
          {!loading && tab === 'plain' && !debouncedSearch && (
            <p style={{ padding: 20, color: 'var(--pl-ink3)', fontSize: 14 }}>Type to search plain packaging products.</p>
          )}
          {!loading && products.length === 0 && (debouncedSearch || tab === 'printed') && (
            <p style={{ padding: 20, color: 'var(--pl-ink3)', fontSize: 14 }}>No products found.</p>
          )}
          {!loading && products.length > 0 && products.map((p, i) => (
            <React.Fragment key={p.id}>
              {i > 0 && <div className="pl-sheet-item-divider" />}
              <button
                type="button"
                className="pl-sheet-item"
                onClick={() => handleSelect(p)}
              >
                <div className="pl-sheet-item-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div className="pl-sheet-item-text">
                  <div className="pl-sheet-item-name">{p.name}</div>
                  {p.category && <div className="pl-sheet-item-sub">{p.category}</div>}
                </div>
                <div className="pl-sheet-item-unit">{p.unit_label || (tab === 'plain' ? 'per case' : 'per unit')}</div>
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
