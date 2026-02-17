import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../../styles/staff-dashboard.css';

const navItems = [
  { href: '/staff', label: 'Home', icon: 'home' },
  { href: '/staff/outbound-sales', label: 'Log Visit', icon: 'pin' },
  { href: '/staff/pricelist-builder', label: 'Pricelist', icon: 'pricelist' },
  { href: '/staff/orders', label: 'Orders', icon: 'cart' },
  { href: '/staff/quotes', label: 'Quotes', icon: 'file' },
  { href: '/staff/products', label: 'Products', icon: 'box' },
];

const icons = {
  home: (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  ),
  pricelist: (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
};

export default function StaffLayout({ children, title = 'Staff', user }) {
  const router = useRouter();
  const [liveTime, setLiveTime] = useState('--:--');

  useEffect(() => {
    const tick = () => {
      setLiveTime(new Date().toLocaleTimeString('en-IE', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const isActive = (href) => {
    if (href === '/staff') return router.pathname === '/staff';
    return router.pathname.startsWith(href);
  };

  const initials = user?.name
    ? user.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
    : '—';

  return (
    <div className="staff-dashboard flex flex-col min-h-screen">
      <header className="staff-topbar">
        <div className="staff-topbar-logo">
          <div className="staff-logo-box">
            <svg viewBox="0 0 15 15" width="15" height="15" fill="#fff">
              <rect x="2" y="1" width="4" height="13" rx="1.2" />
              <rect x="2" y="1" width="9" height="4" rx="1.2" />
              <rect x="2" y="7" width="8" height="4" rx="1.2" />
            </svg>
          </div>
          <span className="staff-logo-wordmark">PrintNPack <sup>Staff</sup></span>
        </div>
        <div className="staff-topbar-right">
          <div className="staff-topbar-pill">
            <div className="staff-status-dot" />
            <span>{liveTime}</span>
          </div>
          <div className="staff-avatar" aria-hidden>{initials}</div>
          <button
            type="button"
            className="staff-sign-out"
            onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
              window.location.href = '/staff/login';
            }}
            aria-label="Sign out"
          >
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Out
          </button>
        </div>
      </header>

      <main className="flex-1" style={{ paddingBottom: title ? undefined : 0 }}>
        {title && title !== 'Staff' && (
          <div className="staff-body" style={{ paddingTop: 16 }}>
            <h1 className="staff-hero-name" style={{ fontSize: 20, marginBottom: 12 }}>{title}</h1>
          </div>
        )}
        {children}
      </main>

      <nav className="staff-bnav" aria-label="Staff navigation">
        <div className="staff-bnav-inner">
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`staff-bnav-item ${isActive(href) ? 'on' : ''}`}
            >
              <div className="staff-ni">{icons[icon]}</div>
              <span className="staff-nl">{label}</span>
              {href === '/staff/orders' && <span className="staff-pip" aria-hidden />}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
