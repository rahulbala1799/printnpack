import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';
import PricelistProductPicker from '../../../components/staff/PricelistProductPicker';
import CustomerPicker from '../../../components/staff/CustomerPicker';
import '../../../styles/pricelist-builder.css';

function lineId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `line-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toISOString().slice(0, 10);
}

function formatDateRange(from, to) {
  if (!from && !to) return '';
  if (from && to) return `${formatDate(from).slice(0, 7)} – ${formatDate(to).slice(0, 7)}`;
  if (from) return `From ${formatDate(from)}`;
  return `To ${formatDate(to)}`;
}

function formatPrice(n) {
  if (n == null || n === '' || isNaN(Number(n))) return '';
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(Number(n));
}

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?';
  return name.trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 1).toUpperCase();
}

export default function PricelistDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pricelist, setPricelist] = useState(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showProductPicker, setShowProductPicker] = useState(false);
  const [showCustomerPicker, setShowCustomerPicker] = useState(false);
  const [form, setForm] = useState({ customer_id: null, customer_name: '', notes: '', status: 'draft', valid_from: '', valid_to: '', items: [] });

  const load = useCallback(() => {
    if (!id) return;
    fetch(`/api/staff/pricelists/${id}`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.pricelist) {
          setPricelist(d.pricelist);
          setForm({
            customer_id: d.pricelist.customer_id || null,
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

  const setItemPrice = (lineIdVal, value) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.map((it) => (it.id === lineIdVal ? { ...it, price: value } : it)),
    }));
  };

  const removeItem = (lineIdVal) => {
    setForm((prev) => ({ ...prev, items: prev.items.filter((it) => it.id !== lineIdVal) }));
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
          customer_id: form.customer_id || null,
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
        customer_id: data.pricelist.customer_id || null,
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--pl-cream)' }}>
        <div style={{ width: 32, height: 32, border: '2px solid var(--pl-green-mid)', borderTopColor: 'var(--pl-green)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  if (!pricelist) {
    return (
      <StaffLayout user={user} title="Pricelist">
        <div className="pl-app pl-screen">
          <div className="pl-topbar">
            <Link href="/staff/pricelist-builder/list" className="pl-topbar-back">Back</Link>
            <span className="pl-topbar-title">Pricelist</span>
            <div style={{ width: 50 }} />
          </div>
          <div className="pl-empty-state">
            <div className="pl-empty-state-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"/></div>
            <p className="pl-empty-state-title">Pricelist not found</p>
            <p className="pl-empty-state-sub">It may have been deleted.</p>
            <Link href="/staff/pricelist-builder/list" className="pl-btn pl-btn-secondary" style={{ marginTop: 16 }}>Back to list</Link>
          </div>
        </div>
      </StaffLayout>
    );
  }

  const items = pricelist.items || [];
  const refLabel = pricelist.id ? `PL-${String(pricelist.id).slice(0, 8)}` : '';
  const updatedLabel = pricelist.updated_at ? `Updated ${new Date(pricelist.updated_at).toLocaleDateString()}` : '';

  return (
    <StaffLayout user={user} title="">
      <Head>
        <title>{form.customer_name || 'Pricelist'} — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="pl-app pl-screen">
        <div className="pl-topbar">
          <Link href="/staff/pricelist-builder/list" className="pl-topbar-back">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </Link>
          <span className="pl-topbar-title">Pricelist</span>
          {!editing ? (
            <button type="button" className="pl-topbar-action" onClick={() => setEditing(true)}>Edit</button>
          ) : (
            <div style={{ width: 50 }} />
          )}
        </div>

        {editing ? (
          <>
            <div className="pl-form-body">
              <div className="pl-form-section">
                <div className="pl-form-label">Customer <span>*</span></div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'stretch' }}>
                  <button type="button" className="pl-customer-selector" style={{ flex: 1 }} onClick={() => setShowCustomerPicker(true)}>
                    <div className={`pl-customer-selector-avatar ${form.customer_name ? 'selected' : ''}`}>{getInitials(form.customer_name)}</div>
                    <div className="pl-customer-selector-text">
                      <div className="pl-customer-selector-name">{form.customer_name || 'Select customer'}</div>
                      <div className="pl-customer-selector-hint">Tap to change customer</div>
                    </div>
                    <div className="pl-customer-selector-action">Change</div>
                  </button>
                  {form.customer_name && (
                    <button
                      type="button"
                      className="pl-customer-clear-btn"
                      onClick={() => setForm((p) => ({ ...p, customer_id: null, customer_name: '' }))}
                      aria-label="Clear customer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  )}
                </div>
              </div>
              <div className="pl-form-section">
                <div className="pl-form-label">Notes</div>
                <textarea className="pl-form-textarea" placeholder="e.g. Volume discount..." rows={3} value={form.notes} onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))} />
              </div>
              <div className="pl-form-section">
                <div className="pl-form-label">Status</div>
                <div className="pl-status-select-wrap">
                  <select value={form.status} onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}>
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
              <div className="pl-form-section">
                <div className="pl-form-label">Valid period</div>
                <div className="pl-date-row">
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--pl-ink4)', marginBottom: 6, fontWeight: 500 }}>From</div>
                    <input type="date" className="pl-form-input" value={form.valid_from} onChange={(e) => setForm((p) => ({ ...p, valid_from: e.target.value }))} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--pl-ink4)', marginBottom: 6, fontWeight: 500 }}>To</div>
                    <input type="date" className="pl-form-input" value={form.valid_to} onChange={(e) => setForm((p) => ({ ...p, valid_to: e.target.value }))} />
                  </div>
                </div>
              </div>
              <div className="pl-form-section">
                <div className="pl-form-label">Products & Prices</div>
                <div className="pl-product-lines">
                  {form.items.map((it) => (
                    <div key={it.id} className="pl-product-line">
                      <div className="pl-product-line-top">
                        <div className="pl-product-line-icon">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--pl-ink3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        </div>
                        <div className="pl-product-line-name">{it.product_name}</div>
                        <button type="button" className="pl-product-line-remove" onClick={() => removeItem(it.id)} aria-label="Remove">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                      </div>
                      <div className="pl-product-line-bottom">
                        <div className="pl-unit-badge">{it.unit_label}</div>
                        <div className="pl-price-input-wrap">
                          <input type="number" className="pl-price-input" placeholder="0.00" step="0.01" value={it.price} onChange={(e) => setItemPrice(it.id, e.target.value)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" className="pl-add-product-btn" onClick={() => setShowProductPicker(true)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Add product
                </button>
              </div>
            </div>
            <div className="pl-bottom-bar">
              <button type="button" className="pl-btn pl-btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
              <button type="button" className="pl-btn pl-btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
            </div>
          </>
        ) : (
          <>
            <div style={{ overflowY: 'auto', flex: 1 }} className="pl-pb-safe">
              <div className="pl-detail-hero">
                <div className="pl-detail-customer-row">
                  <div className="pl-detail-avatar" id="detail-avatar">{getInitials(pricelist.customer_name)}</div>
                  <div>
                    <div className="pl-detail-customer-name">{pricelist.customer_name}</div>
                    <div className="pl-detail-customer-ref">{refLabel}{updatedLabel ? ` · ${updatedLabel}` : ''}</div>
                  </div>
                </div>
                <div className="pl-detail-meta-row">
                  <span className={`pl-status-badge ${(pricelist.status || 'draft')}`}>{(pricelist.status || 'draft').charAt(0).toUpperCase() + (pricelist.status || 'draft').slice(1)}</span>
                  {(pricelist.valid_from || pricelist.valid_to) && (
                    <div className="pl-detail-meta-chip">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {formatDateRange(pricelist.valid_from, pricelist.valid_to)}
                    </div>
                  )}
                  <div className="pl-detail-meta-chip">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    {items.length} product{items.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {pricelist.notes && (
                <div className="pl-detail-notes">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--pl-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <div className="pl-detail-notes-text">{pricelist.notes}</div>
                </div>
              )}

              <div className="pl-detail-items-section">
                <div className="pl-detail-items-header">
                  <span className="pl-detail-items-title">Products & Prices</span>
                  <span className="pl-detail-items-count">{items.length} item{items.length !== 1 ? 's' : ''}</span>
                </div>
                {items.map((it) => (
                  <div key={it.id} className="pl-detail-item-row">
                    <div className="pl-detail-item-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--pl-ink3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div className="pl-detail-item-text">
                      <div className="pl-detail-item-name">{it.product_name}</div>
                      <div className="pl-detail-item-unit">{it.unit_label}</div>
                    </div>
                    <div className="pl-detail-item-price">{formatPrice(it.price)}</div>
                  </div>
                ))}
                {items.length > 0 && (
                  <div className="pl-detail-summary-row">
                    <span>{items.length} product{items.length !== 1 ? 's' : ''}</span>
                    <span className="pl-detail-summary-note">Negotiated prices</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pl-bottom-bar">
              <button type="button" className="pl-btn pl-btn-danger" onClick={handleDelete}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
              </button>
              <button type="button" className="pl-btn pl-btn-secondary" onClick={handleDuplicate}>Duplicate</button>
              <button type="button" className="pl-btn pl-btn-primary" onClick={() => setEditing(true)}>Edit</button>
            </div>
          </>
        )}
      </div>

      <CustomerPicker
        open={showCustomerPicker}
        onSelect={(c) => {
          setForm((p) => ({ ...p, customer_id: c?.id || null, customer_name: c?.name || '' }));
          setShowCustomerPicker(false);
        }}
        onClose={() => setShowCustomerPicker(false)}
      />
      <PricelistProductPicker open={showProductPicker} onSelect={handleAddProduct} onClose={() => setShowProductPicker(false)} />
    </StaffLayout>
  );
}
