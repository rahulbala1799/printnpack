import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';

function formatDate(d) {
  if (!d) return '—';
  const date = new Date(d);
  return date.toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric' });
}

function statusBadge(status) {
  const s = (status || 'draft').toLowerCase();
  const style = s === 'active' ? { background: 'var(--g-dim)', color: 'var(--g-text)' } : s === 'archived' ? { background: 'var(--line-2)', color: 'var(--ink-3)' } : { background: 'var(--amber-bg)', color: 'var(--amber)' };
  return <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 6, ...style }}>{s}</span>;
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--canvas)' }}>
        <div style={{ width: 32, height: 32, border: '2px solid var(--g-mid)', borderTopColor: 'var(--g)', borderRadius: '50%', animation: 'staff-spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="Price lists">
      <Head>
        <title>Price lists — Pricelist Builder — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="staff-body">
        <div style={{ marginBottom: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['', 'draft', 'active', 'archived'].map((s) => (
            <button
              key={s || 'all'}
              type="button"
              onClick={() => setFilter(s)}
              style={{
                padding: '6px 12px',
                borderRadius: 8,
                border: filter === s ? '2px solid var(--g)' : '1px solid var(--line)',
                background: filter === s ? 'var(--g-dim)' : 'var(--white)',
                color: filter === s ? 'var(--g-text)' : 'var(--ink-2)',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {s || 'All'}
            </button>
          ))}
        </div>

        {pricelists.length === 0 ? (
          <p style={{ color: 'var(--ink-3)', marginTop: 16 }}>No pricelists yet. Create one from the Pricelist Builder.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {pricelists.map((pl) => (
              <li key={pl.id} style={{ marginBottom: 8 }}>
                <Link
                  href={`/staff/pricelist-builder/${pl.id}`}
                  style={{
                    display: 'block',
                    padding: 16,
                    background: 'var(--white)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--r)',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <div className="staff-vc-title" style={{ marginBottom: 4 }}>{pl.customer_name}</div>
                      <div className="staff-vc-sub">{pl.items?.length || 0} items · updated {formatDate(pl.updated_at)}</div>
                    </div>
                    {statusBadge(pl.status)}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div style={{ marginTop: 24 }}>
          <Link href="/staff/pricelist-builder" className="staff-sec-more" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            ← Back to Pricelist Builder
          </Link>
        </div>
      </div>
    </StaffLayout>
  );
}
