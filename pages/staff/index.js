import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../components/staff/StaffLayout';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 5) return 'Late night';
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function useLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/staff/outbound-visits', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : { leads: [] }))
      .then((d) => {
        setLeads(d.leads || []);
      })
      .catch(() => setLeads([]))
      .finally(() => setLoading(false));
  }, []);
  return { leads, loading };
}

function MetricCounter({ value, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (animated.current || value === 0) return;
    const start = performance.now();
    const duration = 900;
    const startAfter = delay;

    const tick = (now) => {
      const elapsed = now - start - startAfter;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(ease * value));
      if (p < 1) requestAnimationFrame(tick);
      else {
        setDisplay(value);
        animated.current = true;
      }
    };
    requestAnimationFrame(tick);
  }, [value, delay]);

  return <span>{display}</span>;
}

export default function StaffDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { leads, loading: leadsLoading } = useLeads();

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
      <div className="staff-dashboard min-h-screen flex items-center justify-center" style={{ background: 'var(--canvas)' }}>
        <div
          style={{
            width: 32,
            height: 32,
            border: '2px solid var(--g-mid)',
            borderTopColor: 'var(--g)',
            borderRadius: '50%',
            animation: 'staff-spin 0.8s linear infinite',
          }}
          aria-hidden
        />
      </div>
    );
  }

  const now = new Date();
  const greetLine = `${DAYS[now.getDay()]} · ${getGreeting()}`;
  const heroSub = `Here's your session overview for today.`;
  const feedDate = `${now.getDate()} ${MONTHS[now.getMonth()]}`;

  const totalVisits = leads.length;
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const todayLeads = leads.filter((l) => l.updated_at >= todayStart || l.created_at >= todayStart);
  const visitsToday = todayLeads.length;

  const ordersCount = 0;
  const quotesCount = 0;

  const activityItems = leads.slice(0, 8).map((lead) => {
    const p = lead.payload || {};
    const visits = Array.isArray(p.visits) ? p.visits : [p];
    const v = visits[0] || {};
    const time = lead.updated_at || lead.created_at;
    const t = time ? new Date(time) : null;
    const timeStr = t ? t.toLocaleTimeString('en-IE', { hour: '2-digit', minute: '2-digit', hour12: false }) : '—';
    let tag = 'ft-sl';
    let tagLabel = 'Visit';
    if (v.interested === 'yes') {
      tag = 'ft-g';
      tagLabel = 'Interested';
    } else if (v.interested === 'follow-up') {
      tag = 'ft-am';
      tagLabel = 'Follow-up';
    } else if (v.leafletOrMaterialDropped) {
      tag = 'ft-am';
      tagLabel = 'Leaflet';
    }
    const detail = v.metOwnerOrKdm ? 'Met owner' : 'No owner';
    return {
      id: lead.id,
      name: lead.name,
      detail,
      timeStr,
      tag,
      tagLabel,
      icon: 'g',
    };
  });

  return (
    <StaffLayout user={user} title="">
      <Head>
        <title>PrintNPack — Staff</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className="staff-body">
        <div className="staff-hero">
          <div className="staff-hero-time">{greetLine}</div>
          <h1 className="staff-hero-name">
            Hello, <span className="staff-hi">{user?.name || 'Staff'}</span>
          </h1>
          <p className="staff-hero-sub">{heroSub}</p>
        </div>

        <div className="staff-metrics">
          <div className="staff-metric g">
            <div className="staff-metric-val">
              <MetricCounter value={totalVisits} delay={100} />
            </div>
            <div className="staff-metric-label">Visits</div>
          </div>
          <div className="staff-metric am">
            <div className="staff-metric-val">{quotesCount}</div>
            <div className="staff-metric-label">Quotes</div>
          </div>
          <div className="staff-metric bl">
            <div className="staff-metric-val">{ordersCount}</div>
            <div className="staff-metric-label">Orders</div>
          </div>
        </div>

        <div className="staff-sec-head">
          <span className="staff-sec-title">Field Sales</span>
        </div>

        <Link href="/staff/outbound-sales" className="staff-hero-action">
          <div className="staff-ha-left">
            <div className="staff-ha-tag">
              <div className="staff-ha-tag-dot" />
              Active Session
            </div>
            <div className="staff-ha-title">
              Outbound<br /><span>Sales</span>
            </div>
            <div className="staff-ha-desc">Log shop visits and feed the lead pipeline</div>
          </div>
          <div className="staff-ha-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </Link>

        <Link href="/staff/logged-visits" className="staff-visits-card">
          <div className="staff-vc-left">
            <div className="staff-vc-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--g)" strokeWidth="1.8">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1.5" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="staff-vc-title">Visit Log</div>
              <div className="staff-vc-sub">All recorded shop visits</div>
            </div>
          </div>
          <div className="staff-vc-badge">
            <span className="staff-badge">{visitsToday} today</span>
            <div className="staff-vc-arrow">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </Link>

        <div className="staff-sec-head" style={{ marginTop: 24 }}>
          <span className="staff-sec-title">Operations</span>
          <Link href="/staff" className="staff-sec-more">
            All tools
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        <div className="staff-ops-grid">
          <Link href="/staff/products" className="staff-op bl">
            <div className="staff-op-top">
              <div className="staff-op-icon bl">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="var(--blue)" strokeWidth="1.8">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <span className="staff-op-count bl">Catalogue</span>
            </div>
            <div>
              <div className="staff-op-title">Products</div>
              <div className="staff-op-sub">Main catalogue</div>
            </div>
          </Link>

          <Link href="/staff/plain-packaging" className="staff-op am">
            <div className="staff-op-top">
              <div className="staff-op-icon am">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="var(--amber)" strokeWidth="1.8">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="staff-op-count am">Stock</span>
            </div>
            <div>
              <div className="staff-op-title">Plain Pack</div>
              <div className="staff-op-sub">Packaging range</div>
            </div>
          </Link>

          <Link href="/staff/orders" className="staff-op sl">
            <div className="staff-op-top">
              <div className="staff-op-icon sl">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="var(--ink-2)" strokeWidth="1.8">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <span className="staff-op-count sl">{ordersCount}</span>
            </div>
            <div>
              <div className="staff-op-title">Orders</div>
              <div className="staff-op-sub">Customer orders</div>
            </div>
          </Link>

          <Link href="/staff/quotes" className="staff-op vi">
            <div className="staff-op-top">
              <div className="staff-op-icon vi">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="var(--violet)" strokeWidth="1.8">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="staff-op-count vi">{quotesCount}</span>
            </div>
            <div>
              <div className="staff-op-title">Quotes</div>
              <div className="staff-op-sub">Pending requests</div>
            </div>
          </Link>
        </div>

        <div className="staff-sec-head">
          <span className="staff-sec-title">Activity</span>
          <Link href="/staff/logged-visits" className="staff-sec-more">
            See all
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        <div className="staff-feed">
          <div className="staff-feed-header">
            <span className="staff-feed-title">Today&apos;s log</span>
            <span className="staff-feed-date">{feedDate}</span>
          </div>
          {activityItems.length === 0 ? (
            <div className="staff-feed-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
              <div className="staff-feed-name" style={{ color: 'var(--ink-4)' }}>No visits yet today</div>
              <div className="staff-feed-detail">Log a visit from Outbound Sales to see activity here.</div>
            </div>
          ) : (
            activityItems.map((item) => (
              <Link key={item.id} href="/staff/logged-visits" className="staff-feed-item">
                <div className={`staff-feed-icon-wrap ${item.icon}`}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="staff-feed-body">
                  <div className="staff-feed-name">{item.name}</div>
                  <div className="staff-feed-detail">Outbound visit · {item.detail}</div>
                </div>
                <div className="staff-feed-right">
                  <span className="staff-feed-time">{item.timeStr}</span>
                  <span className={`staff-feed-tag ${item.tag}`}>{item.tagLabel}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </StaffLayout>
  );
}
