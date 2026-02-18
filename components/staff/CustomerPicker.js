import React, { useState, useEffect, useCallback } from 'react';

const DEBOUNCE_MS = 280;

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?';
  return name.trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 1).toUpperCase();
}

export default function CustomerPicker({ onSelect, onClose, open }) {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showNewForm, setShowNewForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newContact, setNewContact] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    const q = debouncedSearch ? `?search=${encodeURIComponent(debouncedSearch)}` : '';
    fetch(`/api/staff/customers${q}`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : { customers: [] }))
      .then((d) => setCustomers(d.customers || []))
      .catch(() => setCustomers([]))
      .finally(() => setLoading(false));
  }, [open, debouncedSearch]);

  const handleSelect = useCallback(
    (c) => {
      onSelect({ id: c.id, name: c.name });
      onClose?.();
    },
    [onSelect, onClose]
  );

  const handleCreateNew = async () => {
    const name = newName.trim();
    if (!name) {
      alert('Enter customer name');
      return;
    }
    setCreating(true);
    try {
      const res = await fetch('/api/staff/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          name,
          contact_name: newContact.trim() || null,
          phone: newPhone.trim() || null,
          email: newEmail.trim() || null,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to create customer');
      }
      const data = await res.json();
      handleSelect(data.customer);
    } catch (e) {
      alert(e.message || 'Failed to create');
    } finally {
      setCreating(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="pl-overlay open"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-label="Select customer"
    >
      <div className="pl-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="pl-sheet-handle" />
        <div className="pl-sheet-header">
          <span className="pl-sheet-title">Select customer</span>
          <button type="button" className="pl-sheet-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="pl-sheet-search-wrap">
          <svg className="pl-sheet-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            type="search"
            className="pl-sheet-search"
            placeholder="Search customers…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            aria-label="Search customers"
          />
        </div>
        <div className="pl-sheet-list">
          {showNewForm ? (
            <div style={{ padding: 20 }}>
              <p style={{ marginBottom: 12, fontSize: 14, color: 'var(--pl-ink2)' }}>New customer</p>
              <div style={{ marginBottom: 12 }}>
                <label className="pl-form-label">Name *</label>
                <input type="text" className="pl-form-input" placeholder="Business name" value={newName} onChange={(e) => setNewName(e.target.value)} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label className="pl-form-label">Contact name</label>
                <input type="text" className="pl-form-input" placeholder="Optional" value={newContact} onChange={(e) => setNewContact(e.target.value)} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label className="pl-form-label">Phone</label>
                <input type="tel" className="pl-form-input" placeholder="Optional" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="pl-form-label">Email</label>
                <input type="email" className="pl-form-input" placeholder="Optional" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="button" className="pl-btn pl-btn-primary" onClick={handleCreateNew} disabled={creating || !newName.trim()}>
                  {creating ? 'Creating…' : 'Create & select'}
                </button>
                <button type="button" className="pl-btn pl-btn-secondary" onClick={() => setShowNewForm(false)}>Back</button>
              </div>
            </div>
          ) : (
            <>
              {loading && <p style={{ padding: 20, color: 'var(--pl-ink3)', fontSize: 14 }}>Loading…</p>}
              {!loading && customers.length === 0 && !debouncedSearch && (
                <p style={{ padding: 20, color: 'var(--pl-ink3)', fontSize: 14 }}>Type to search or add a new customer below.</p>
              )}
              {!loading && customers.length === 0 && debouncedSearch && (
                <p style={{ padding: 20, color: 'var(--pl-ink3)', fontSize: 14 }}>No customers found. Add one below.</p>
              )}
              {!loading && customers.map((c, i) => (
                <React.Fragment key={c.id}>
                  {i > 0 && <div className="pl-sheet-item-divider" />}
                  <button type="button" className="pl-sheet-item" onClick={() => handleSelect(c)}>
                    <div className="pl-sheet-item-icon" style={{ background: 'var(--pl-green-light)', color: 'var(--pl-green)', fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 16 }}>
                      {getInitials(c.name)}
                    </div>
                    <div className="pl-sheet-item-text">
                      <div className="pl-sheet-item-name">{c.name}</div>
                      {(c.contact_name || c.phone || c.email) && (
                        <div className="pl-sheet-item-sub">{[c.contact_name, c.phone, c.email].filter(Boolean).join(' · ')}</div>
                      )}
                    </div>
                  </button>
                </React.Fragment>
              ))}
              <div className="pl-sheet-item-divider" />
              <button type="button" className="pl-sheet-item" onClick={() => setShowNewForm(true)} style={{ opacity: 0.9 }}>
                <div className="pl-sheet-item-icon" style={{ background: 'var(--pl-cream2)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--pl-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                </div>
                <div className="pl-sheet-item-text">
                  <div className="pl-sheet-item-name" style={{ color: 'var(--pl-green)' }}>+ Add new customer</div>
                  <div className="pl-sheet-item-sub">Create a new customer record</div>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
