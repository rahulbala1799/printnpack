import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';

export default function PricelistBuilderLanding() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--canvas)' }}>
        <div className="staff-dashboard" style={{ width: 32, height: 32, border: '2px solid var(--g-mid)', borderTopColor: 'var(--g)', borderRadius: '50%', animation: 'staff-spin 0.8s linear infinite' }} aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="Pricelist Builder">
      <Head>
        <title>Pricelist Builder — Staff — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="staff-body">
        <p className="staff-hero-sub" style={{ marginBottom: 24 }}>
          Create and manage customer-specific price lists. Use search in the product picker to find products quickly.
        </p>

        <div className="space-y-3" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link
            href="/staff/pricelist-builder/list"
            className="staff-visits-card"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, background: 'var(--white)', borderRadius: 'var(--r)', border: '1px solid var(--line)', textDecoration: 'none', color: 'inherit' }}
          >
            <div className="staff-vc-left">
              <div className="staff-vc-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--g)" strokeWidth="1.8">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1.5" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <div className="staff-vc-title">View price lists</div>
                <div className="staff-vc-sub">See all pricelists, open detail and edit</div>
              </div>
            </div>
            <div className="staff-vc-arrow">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>

          <Link
            href="/staff/pricelist-builder/new"
            className="staff-hero-action"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, background: 'var(--g)', color: 'white', borderRadius: 'var(--r)', textDecoration: 'none' }}
          >
            <div>
              <div className="staff-ha-title" style={{ color: 'white', marginBottom: 4 }}>Create new pricelist</div>
              <div className="staff-ha-desc" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13 }}>New customer and add products with negotiated prices</div>
            </div>
            <div className="staff-ha-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </StaffLayout>
  );
}
