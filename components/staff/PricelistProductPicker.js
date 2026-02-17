import React, { useState, useEffect, useCallback } from 'react';

const DEBOUNCE_MS = 280;

/**
 * Product picker: search-first, debounced. Plain and Printed tabs.
 * onSelect(product) where product has product_type, product_id, product_name, unit_label. Price is set after in parent.
 */
export default function PricelistProductPicker({ onSelect, onClose }) {
  const [tab, setTab] = useState('plain');
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
      .then((d) => {
        setProducts(d.products || []);
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [tab, debouncedSearch]);

  const handleSelect = useCallback(
    (p) => {
      const product = {
        product_type: tab,
        product_id: p.id,
        product_name: p.name,
        unit_label: p.unit_label || (tab === 'plain' ? 'per case' : 'per unit'),
      };
      onSelect(product);
      onClose?.();
    },
    [tab, onSelect, onClose]
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'var(--canvas)',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <div style={{ padding: 16, borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Add product</h2>
        <button type="button" onClick={onClose} style={{ padding: 8, background: 'none', border: 'none', color: 'var(--ink-2)', fontSize: 14 }}>Cancel</button>
      </div>

      <div style={{ padding: 16 }}>
        <input
          type="search"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: 10,
            border: '1px solid var(--line)',
            fontSize: 16,
            marginBottom: 12,
          }}
          aria-label="Search products"
        />
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {['plain', 'printed'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                border: tab === t ? '2px solid var(--g)' : '1px solid var(--line)',
                background: tab === t ? 'var(--g-dim)' : 'var(--white)',
                color: tab === t ? 'var(--g-text)' : 'var(--ink-2)',
                fontSize: 14,
                fontWeight: 500,
                textTransform: 'capitalize',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 16px' }}>
        {loading && <p style={{ color: 'var(--ink-3)', fontSize: 14 }}>Loading…</p>}
        {!loading && tab === 'plain' && !debouncedSearch && (
          <p style={{ color: 'var(--ink-3)', fontSize: 14 }}>Type to search plain packaging products.</p>
        )}
        {!loading && products.length === 0 && debouncedSearch && (
          <p style={{ color: 'var(--ink-3)', fontSize: 14 }}>No products found.</p>
        )}
        {!loading && products.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {products.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(p)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: 14,
                    marginBottom: 6,
                    background: 'var(--white)',
                    border: '1px solid var(--line)',
                    borderRadius: 10,
                    cursor: 'pointer',
                    fontSize: 14,
                  }}
                >
                  <div style={{ fontWeight: 600, color: 'var(--ink)' }}>{p.name}</div>
                  {p.category && <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{p.category}</div>}
                  <div style={{ fontSize: 12, color: 'var(--g-text)', marginTop: 2 }}>{p.unit_label || (tab === 'plain' ? 'per case' : 'per unit')}</div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
