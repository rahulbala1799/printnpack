import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';
import PricelistProductPicker from '../../../components/staff/PricelistProductPicker';

function lineId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `line-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toISOString().slice(0, 10);
}

function formatPrice(n) {
  if (n == null || n === '' || isNaN(Number(n))) return '';
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(Number(n));
}

export default function PricelistDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pricelist, setPricelist] = useState(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [form, setForm] = useState({ customer_name: '', notes: '', status: 'draft', valid_from: '', valid_to: '', items: [] });

  const load = useCallback(() => {
    if (!id) return;
    fetch(`/api/staff/pricelists/${id}`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.pricelist) {
          setPricelist(d.pricelist);
          setForm({
            customer_name: d.pricelist.customer_name || '',
            notes: d.pricelist.notes || '',
            status: d.pricelist.status || 'draft',
            valid_from: formatDate(d.pricelist.valid_from),
            valid_to: formatDate(d.pricelist.valid_to),
            items: (d.pricelist.items || []).map((it) => ({ ...it, id: it.id || lineId() })),
          });
        } else {
          setPricelist(null);
        }
      })
      .catch(() => setPricelist(null))
      .finally(() => setLoading(false));
  }, [id]);

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
      }
    })();
  }, [router]);

  useEffect(() => {
    if (user && id) load();
  }, [user, id, load]);

  const handleAddProduct = useCallback((product) => {
    setForm((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: lineId(),
          product_type: product.product_type,
          product_id: product.product_id,
          product_name: product.product_name,
          unit_label: product.unit_label,
          price: '',
        },
      ],
    }));
  }, []);

  const setItemPrice = (lineId, value) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.map((it) => (it.id === lineId ? { ...it, price: value } : it)),
    }));
  };

  const removeItem = (lineId) => {
    setForm((prev) => ({ ...prev, items: prev.items.filter((it) => it.id !== lineId) }));
  };

  const handleSave = async () => {
    if (!id) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/staff/pricelists/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          customer_name: form.customer_name.trim(),
          notes: form.notes.trim() || null,
          status: form.status,
          valid_from: form.valid_from || null,
          valid_to: form.valid_to || null,
          items: form.items.map((it) => ({
            id: it.id,
            product_type: it.product_type,
            product_id: it.product_id,
            product_name: it.product_name,
            unit_label: it.unit_label,
            price: it.price === '' ? null : Number(it.price),
          })),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to update');
      }
      const data = await res.json();
      setPricelist(data.pricelist);
      setForm({
        customer_name: data.pricelist.customer_name || '',
        notes: data.pricelist.notes || '',
        status: data.pricelist.status || 'draft',
        valid_from: formatDate(data.pricelist.valid_from),
        valid_to: formatDate(data.pricelist.valid_to),
        items: (data.pricelist.items || []).map((it) => ({ ...it, id: it.id || lineId() })),
      });
      setEditing(false);
    } catch (e) {
      alert(e.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDuplicate = async () => {
    try {
      const res = await fetch('/api/staff/pricelists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ duplicate_from_id: id }),
      });
      if (!res.ok) throw new Error('Failed to duplicate');
      const data = await res.json();
      router.push(`/staff/pricelist-builder/${data.pricelist.id}`);
    } catch (e) {
      alert(e.message || 'Failed to duplicate');
    }
  };

  const handleDelete = async () => {
    if (!confirm('Delete this pricelist? This cannot be undone.')) return;
    try {
      const res = await fetch(`/api/staff/pricelists/${id}`, { method: 'DELETE', credentials: 'include' });
      if (!res.ok) throw new Error('Failed to delete');
      router.push('/staff/pricelist-builder/list');
    } catch (e) {
      alert(e.message || 'Failed to delete');
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--canvas)' }}>
        <div style={{ width: 32, height: 32, border: '2px solid var(--g-mid)', borderTopColor: 'var(--g)', borderRadius: '50%', animation: 'staff-spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  if (!pricelist) {
    return (
      <StaffLayout user={user} title="Pricelist">
        <div className="staff-body">
          <p style={{ color: 'var(--ink-3)' }}>Pricelist not found.</p>
          <Link href="/staff/pricelist-builder/list" className="staff-sec-more">← Back to list</Link>
        </div>
      </StaffLayout>
    );
  }

  return (
    <StaffLayout user={user} title={editing ? 'Edit pricelist' : 'Pricelist'}>
      <Head>
        <title>{form.customer_name || 'Pricelist'} — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="staff-body">
        {editing ? (
          <>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Customer name</label>
              <input
                type="text"
                value={form.customer_name}
                onChange={(e) => setForm((p) => ({ ...p, customer_name: e.target.value }))}
                style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 16 }}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Notes</label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                rows={2}
                style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 14 }}
              />
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                  style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 14 }}
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Valid from</label>
                <input
                  type="date"
                  value={form.valid_from}
                  onChange={(e) => setForm((p) => ({ ...p, valid_from: e.target.value }))}
                  style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 14 }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Valid to</label>
                <input
                  type="date"
                  value={form.valid_to}
                  onChange={(e) => setForm((p) => ({ ...p, valid_to: e.target.value }))}
                  style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 14 }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Items</span>
              <button type="button" onClick={() => setShowPicker(true)} style={{ padding: '8px 14px', background: 'var(--g)', color: 'white', border: 'none', borderRadius: 8, fontSize: 14 }}>
                + Add product
              </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
              {form.items.map((it) => (
                <li key={it.id} style={{ padding: 12, marginBottom: 8, background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{it.product_name}</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{it.unit_label} (locked)</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={it.price}
                        onChange={(e) => setItemPrice(it.id, e.target.value)}
                        style={{ width: 90, padding: '8px 10px', borderRadius: 8, border: '1px solid var(--line)', fontSize: 14 }}
                      />
                      <button type="button" onClick={() => removeItem(it.id)} aria-label="Remove" style={{ padding: 6, background: 'none', border: 'none', color: 'var(--ink-3)' }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12 }}>
              <button type="button" onClick={handleSave} disabled={saving} style={{ padding: 14, flex: 1, background: 'var(--g)', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 600 }}>
                {saving ? 'Saving…' : 'Save'}
              </button>
              <button type="button" onClick={() => setEditing(false)} style={{ padding: 14, background: 'var(--white)', color: 'var(--ink-2)', border: '1px solid var(--line)', borderRadius: 10, fontSize: 16 }}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-3)', textTransform: 'uppercase', marginBottom: 4 }}>Customer</div>
              <div className="staff-vc-title" style={{ marginBottom: 4 }}>{pricelist.customer_name}</div>
              {pricelist.notes && <div className="staff-vc-sub" style={{ marginTop: 4 }}>{pricelist.notes}</div>}
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, padding: '4px 10px', background: form.status === 'active' ? 'var(--g-dim)' : form.status === 'archived' ? 'var(--line-2)' : 'var(--amber-bg)', color: form.status === 'active' ? 'var(--g-text)' : form.status === 'archived' ? 'var(--ink-3)' : 'var(--amber)', borderRadius: 6, fontWeight: 600 }}>{form.status}</span>
              {pricelist.valid_from && <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>From {formatDate(pricelist.valid_from)}</span>}
              {pricelist.valid_to && <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>To {formatDate(pricelist.valid_to)}</span>}
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-3)', textTransform: 'uppercase', marginBottom: 8 }}>Items</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {(pricelist.items || []).map((it) => (
                  <li key={it.id} style={{ padding: '10px 0', borderBottom: '1px solid var(--line-2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontWeight: 500 }}>{it.product_name}</span>
                        <span style={{ fontSize: 12, color: 'var(--ink-3)', marginLeft: 6 }}>{it.unit_label}</span>
                      </div>
                      <span style={{ fontWeight: 600 }}>{formatPrice(it.price)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button type="button" onClick={() => setEditing(true)} style={{ padding: 14, background: 'var(--g)', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 600 }}>
                Edit pricelist
              </button>
              <button type="button" onClick={handleDuplicate} style={{ padding: 14, background: 'var(--white)', color: 'var(--ink-2)', border: '1px solid var(--line)', borderRadius: 10, fontSize: 16 }}>
                Duplicate pricelist
              </button>
              <button type="button" onClick={handleDelete} style={{ padding: 14, background: 'none', color: 'var(--rose)', border: '1px solid var(--rose-bd)', borderRadius: 10, fontSize: 16 }}>
                Delete pricelist
              </button>
            </div>
          </>
        )}

        <div style={{ marginTop: 24 }}>
          <Link href="/staff/pricelist-builder/list" className="staff-sec-more">← Back to list</Link>
        </div>
      </div>

      {showPicker && <PricelistProductPicker onSelect={handleAddProduct} onClose={() => setShowPicker(false)} />}
    </StaffLayout>
  );
}
