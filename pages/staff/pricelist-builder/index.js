import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';
import '../../../styles/pricelist-builder.css';

export default function PricelistBuilderLanding() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ active: 0, draft: 0, total: 0 });

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
        if (data.user?.role === 'staff' && data.user.must_change_password) {
          router.replace('/staff/change-password');
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
    fetch('/api/staff/pricelists', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : { pricelists: [] }))
      .then((d) => {
        const list = d.pricelists || [];
        setStats({
          active: list.filter((p) => p.status === 'active').length,
          draft: list.filter((p) => p.status === 'draft').length,
          total: list.length,
        });
      })
      .catch(() => {});
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--pl-cream)' }}>
        <div style={{ width: 32, height: 32, border: '2px solid var(--pl-green-mid)', borderTopColor: 'var(--pl-green)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="">
      <Head>
        <title>Pricelist Builder — Staff — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="pl-app pl-screen">
        <div className="pl-topbar">
          <Link href="/staff" className="pl-topbar-back">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Staff
          </Link>
          <span className="pl-topbar-title">Pricelist</span>
          <div style={{ width: 50 }} />
        </div>

        <div className="pl-landing-hero">
          <div className="pl-landing-eyebrow">PrintNPack · Staff</div>
          <div className="pl-landing-headline">Customer<br /><em>Price Lists</em></div>
          <div className="pl-landing-sub">Create and manage negotiated pricing for each customer.</div>
        </div>

        <div className="pl-landing-stats">
          <div className="pl-stat-chip">
            <div className="pl-stat-chip-num green">{stats.active}</div>
            <div className="pl-stat-chip-label">Active</div>
          </div>
          <div className="pl-stat-chip">
            <div className="pl-stat-chip-num amber">{stats.draft}</div>
            <div className="pl-stat-chip-label">Draft</div>
          </div>
          <div className="pl-stat-chip">
            <div className="pl-stat-chip-num">{stats.total}</div>
            <div className="pl-stat-chip-label">Total</div>
          </div>
        </div>

        <div className="pl-landing-actions">
          <Link href="/staff/pricelist-builder/new" className="pl-action-card primary">
            <div className="pl-action-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <div className="pl-action-card-text">
              <div className="pl-action-card-title">Create new pricelist</div>
              <div className="pl-action-card-desc">New customer with negotiated product prices</div>
            </div>
            <div className="pl-action-card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </Link>

          <Link href="/staff/pricelist-builder/list" className="pl-action-card">
            <div className="pl-action-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pl-ink3)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
            </div>
            <div className="pl-action-card-text">
              <div className="pl-action-card-title">View all price lists</div>
              <div className="pl-action-card-desc">Browse, filter, and manage existing pricelists</div>
            </div>
            <div className="pl-action-card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </Link>
        </div>
      </div>
    </StaffLayout>
  );
}
