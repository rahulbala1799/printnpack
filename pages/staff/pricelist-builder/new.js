import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';
import PricelistProductPicker from '../../../components/staff/PricelistProductPicker';

function lineId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `line-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function formatPrice(n) {
  if (n == null || n === '' || isNaN(Number(n))) return '';
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(Number(n));
}

export default function NewPricelistPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');
  const [items, setItems] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) {
          router.replace('/staff/login');
          return;
        }
        const data = await res.json();
        if (data.user?.role !== 'staff' && data.user?.role !== 'admin') {
          router.replace('/staff/login');
          return;
        }
        setUser(data.user);
      } catch {
        router.replace('/staff/login');
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  const handleAddProduct = useCallback((product) => {
    setItems((prev) => [
      ...prev,
      {
        id: lineId(),
        product_type: product.product_type,
        product_id: product.product_id,
        product_name: product.product_name,
        unit_label: product.unit_label,
        price: '',
      },
    ]);
  }, []);

  const setItemPrice = (lineId, value) => {
    setItems((prev) => prev.map((it) => (it.id === lineId ? { ...it, price: value } : it)));
  };

  const removeItem = (lineId) => {
    setItems((prev) => prev.filter((it) => it.id !== lineId));
  };

  const handleSave = async () => {
    const name = customerName.trim();
    if (!name) {
      alert('Enter customer name');
      return;
    }
    const lines = items.map((it) => ({
      id: it.id,
      product_type: it.product_type,
      product_id: it.product_id,
      product_name: it.product_name,
      unit_label: it.unit_label,
      price: it.price === '' ? null : Number(it.price),
    }));
    setSaving(true);
    try {
      const res = await fetch('/api/staff/pricelists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          customer_name: name,
          notes: notes.trim() || null,
          status: 'draft',
          items: lines,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to create');
      }
      const data = await res.json();
      router.push(`/staff/pricelist-builder/${data.pricelist.id}`);
    } catch (e) {
      alert(e.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--canvas)' }}>
        <div style={{ width: 32, height: 32, border: '2px solid var(--g-mid)', borderTopColor: 'var(--g)', borderRadius: '50%', animation: 'staff-spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="New pricelist">
      <Head>
        <title>New pricelist — Pricelist Builder — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="staff-body">
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--ink-2)' }}>Customer name *</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="e.g. Centra Main St"
            style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 16 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--ink-2)' }}>Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Optional notes"
            rows={2}
            style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 14, resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Products & prices</span>
          <button
            type="button"
            onClick={() => setShowPicker(true)}
            style={{
              padding: '8px 14px',
              background: 'var(--g)',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            + Add product
          </button>
        </div>

        {items.length === 0 ? (
          <p style={{ color: 'var(--ink-3)', fontSize: 14, marginBottom: 16 }}>Search and add products. Unit is fixed from product; you only set the price.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
            {items.map((it) => (
              <li
                key={it.id}
                style={{
                  padding: 12,
                  marginBottom: 8,
                  background: 'var(--white)',
                  border: '1px solid var(--line)',
                  borderRadius: 10,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{it.product_name}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{it.unit_label} (locked)</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={it.price}
                      onChange={(e) => setItemPrice(it.id, e.target.value)}
                      placeholder="Price"
                      style={{ width: 90, padding: '8px 10px', borderRadius: 8, border: '1px solid var(--line)', fontSize: 14 }}
                    />
                    <button type="button" onClick={() => removeItem(it.id)} aria-label="Remove" style={{ padding: 6, background: 'none', border: 'none', color: 'var(--ink-3)' }}>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            style={{
              flex: 1,
              padding: 14,
              background: 'var(--g)',
              color: 'white',
              border: 'none',
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {saving ? 'Saving…' : 'Save as draft'}
          </button>
          <Link
            href="/staff/pricelist-builder"
            style={{
              padding: 14,
              background: 'var(--white)',
              color: 'var(--ink-2)',
              border: '1px solid var(--line)',
              borderRadius: 10,
              fontSize: 16,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Cancel
          </Link>
        </div>
      </div>

      {showPicker && (
        <PricelistProductPicker
          onSelect={handleAddProduct}
          onClose={() => setShowPicker(false)}
        />
      )}
    </StaffLayout>
  );
}
