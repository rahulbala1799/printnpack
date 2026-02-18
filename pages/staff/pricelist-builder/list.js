import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';
import '../../../styles/pricelist-builder.css';

function formatDate(d) {
  if (!d) return '—';
  const date = new Date(d);
  const now = new Date();
  const diff = now - date;
  if (diff < 86400000) return 'Today';
  if (diff < 172800000) return 'Yesterday';
  if (diff < 604800000) return `${Math.floor(diff / 86400000)} days ago`;
  if (diff < 2592000000) return `${Math.floor(diff / 604800000)} weeks ago`;
  return date.toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?';
  return name.trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
}

const avatarColors = ['var(--pl-green-light)', 'var(--pl-amber-light)', 'var(--pl-red-light)', 'var(--pl-cream2)'];
function getAvatarStyle(name) {
  const i = (name || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0) % avatarColors.length;
  return { background: avatarColors[i], color: i === 0 ? 'var(--pl-green)' : i === 1 ? 'var(--pl-amber)' : i === 2 ? 'var(--pl-red)' : 'var(--pl-ink2)' };
}

export default function PricelistListPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pricelists, setPricelists] = useState([]);
  const [filter, setFilter] = useState('');

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

  useEffect(() => {
    if (!user) return;
    const q = filter ? `?status=${encodeURIComponent(filter)}` : '';
    fetch(`/api/staff/pricelists${q}`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : { pricelists: [] }))
      .then((d) => setPricelists(d.pricelists || []))
      .catch(() => setPricelists([]));
  }, [user, filter]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#FAF8F4' }}>
        <div style={{ width: 32, height: 32, border: '2px solid #C3E4CC', borderTopColor: '#2A7A4B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  const filtered = pricelists;

  return (
    <StaffLayout user={user} title="">
      <Head>
        <title>All Pricelists — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="pl-app pl-screen">
        <div className="pl-topbar">
          <Link href="/staff/pricelist-builder" className="pl-topbar-back">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </Link>
          <span className="pl-topbar-title">All Pricelists</span>
          <Link href="/staff/pricelist-builder/new" className="pl-topbar-action">New</Link>
        </div>

        <div className="pl-list-filters">
          {['', 'active', 'draft', 'archived'].map((s) => (
            <button
              key={s || 'all'}
              type="button"
              className={`pl-filter-chip ${filter === s ? 'active' : ''}`}
              onClick={() => setFilter(s)}
            >
              {s || 'All'}
            </button>
          ))}
        </div>

        <div className="pl-list-section-label">
          {filtered.length} pricelist{filtered.length !== 1 ? 's' : ''}
        </div>

        <div className="pl-list-items">
          {filtered.length === 0 ? (
            <div className="pl-empty-state">
              <div className="pl-empty-state-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div className="pl-empty-state-title">No pricelists yet</div>
              <div className="pl-empty-state-sub">Create one from the Pricelist Builder.</div>
            </div>
          ) : (
            filtered.map((pl, i) => (
              <Link
                key={pl.id}
                href={`/staff/pricelist-builder/${pl.id}`}
                className="pl-pricelist-card"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="pl-pricelist-card-top">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="pl-card-avatar" style={getAvatarStyle(pl.customer_name)}>
                      {getInitials(pl.customer_name)}
                    </div>
                    <div>
                      <div className="pl-pricelist-card-name">{pl.customer_name}</div>
                      <div className="pl-pricelist-card-sub">Updated {formatDate(pl.updated_at)}</div>
                    </div>
                  </div>
                  <span className={`pl-status-badge ${(pl.status || 'draft').toLowerCase()}`}>
                    {(pl.status || 'draft').charAt(0).toUpperCase() + (pl.status || 'draft').slice(1)}
                  </span>
                </div>
                <div className="pl-pricelist-card-meta">
                  <div className="pl-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    {pl.items?.length || 0} product{(pl.items?.length || 0) !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="pl-pricelist-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="pl-pb-safe" />
      </div>
    </StaffLayout>
  );
}
