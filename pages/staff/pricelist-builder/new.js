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

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?';
  return name.trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 1).toUpperCase();
}

export default function NewPricelistPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [notes, setNotes] = useState('');
  const [validFrom, setValidFrom] = useState('');
  const [validTo, setValidTo] = useState('');
  const [items, setItems] = useState([]);
  const [showProductPicker, setShowProductPicker] = useState(false);
  const [showCustomerPicker, setShowCustomerPicker] = useState(false);

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
    if (!customer?.name) {
      alert('Select a customer');
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
          customer_id: customer.id || null,
          customer_name: customer.name,
          notes: notes.trim() || null,
          status: 'draft',
          valid_from: validFrom || null,
          valid_to: validTo || null,
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#FAF8F4' }}>
        <div style={{ width: 32, height: 32, border: '2px solid #C3E4CC', borderTopColor: '#2A7A4B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="">
      <Head>
        <title>New Pricelist — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="pl-app pl-screen">
        <div className="pl-topbar">
          <Link href="/staff/pricelist-builder" className="pl-topbar-back">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Cancel
          </Link>
          <span className="pl-topbar-title">New Pricelist</span>
          <div style={{ width: 50 }} />
        </div>

        <div className="pl-form-body">
          <div className="pl-form-section">
            <div className="pl-form-label">Customer <span>*</span></div>
            <button type="button" className="pl-customer-selector" onClick={() => setShowCustomerPicker(true)}>
              <div className={`pl-customer-selector-avatar ${customer ? 'selected' : ''}`}>
                {customer ? getInitials(customer.name) : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--pl-ink3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
              </div>
              <div className="pl-customer-selector-text">
                <div className="pl-customer-selector-name" style={customer ? undefined : { color: 'var(--pl-ink4)' }}>{customer ? customer.name : 'Select customer'}</div>
                <div className="pl-customer-selector-hint">{customer ? 'Tap to change customer' : 'Tap to search or add new'}</div>
              </div>
              <div className="pl-customer-selector-action">{customer ? 'Change' : 'Select'}</div>
            </button>
          </div>

          <div className="pl-form-section">
            <div className="pl-form-label">Notes</div>
            <textarea className="pl-form-textarea" placeholder="e.g. Volume discount, special terms..." rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>

          <div className="pl-form-section">
            <div className="pl-form-label">Valid period</div>
            <div className="pl-date-row">
              <div>
                <div style={{ fontSize: 11, color: 'var(--pl-ink4)', marginBottom: 6, fontWeight: 500 }}>From</div>
                <input type="date" className="pl-form-input" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--pl-ink4)', marginBottom: 6, fontWeight: 500 }}>To</div>
                <input type="date" className="pl-form-input" value={validTo} onChange={(e) => setValidTo(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="pl-form-section">
            <div className="pl-form-label">Products & Prices</div>
            <div className="pl-product-lines">
              {items.map((it) => (
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
          <Link href="/staff/pricelist-builder" className="pl-btn pl-btn-secondary">Cancel</Link>
          <button type="button" className="pl-btn pl-btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save as draft'}</button>
        </div>
      </div>

      <CustomerPicker open={showCustomerPicker} onSelect={setCustomer} onClose={() => setShowCustomerPicker(false)} />
      <PricelistProductPicker open={showProductPicker} onSelect={handleAddProduct} onClose={() => setShowProductPicker(false)} />
    </StaffLayout>
  );
}
