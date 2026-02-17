import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaBoxOpen, FaCubes, FaClipboardList, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

const navItems = [
  { href: '/staff', label: 'Home', icon: FaHome },
  { href: '/staff/products', label: 'Products', icon: FaBoxOpen },
  { href: '/staff/plain-packaging', label: 'Plain', icon: FaCubes },
  { href: '/staff/orders', label: 'Orders', icon: FaShoppingCart },
  { href: '/staff/quotes', label: 'Quotes', icon: FaClipboardList },
];

export default function StaffLayout({ children, title = 'Staff', user }) {
  const router = useRouter();

  const isActive = (href) => {
    if (href === '/staff') return router.pathname === '/staff';
    return router.pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Top bar: minimal, mobile-first */}
      <header
        className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-emerald-800 text-white"
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-bold text-lg truncate">PrintNPack Staff</span>
          {user?.name && (
            <span className="text-emerald-200 text-sm truncate hidden xs:inline">· {user.name}</span>
          )}
        </div>
        <button
          type="button"
          onClick={async () => {
            await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
            window.location.href = '/staff/login';
          }}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation shrink-0"
          aria-label="Log out"
        >
          <FaSignOutAlt className="text-lg" />
        </button>
      </header>

      {/* Main content: scrollable, padding for bottom nav */}
      <main
        className="flex-1 w-full max-w-2xl mx-auto px-4 py-4 pb-24"
        style={{ paddingBottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))' }}
      >
        {title && title !== 'Staff' && (
          <h1 className="text-xl font-bold text-slate-900 mb-4">{title}</h1>
        )}
        {children}
      </main>

      {/* Bottom nav: large touch targets, mobile-first */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-slate-200"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        aria-label="Staff navigation"
      >
        <div className="max-w-2xl mx-auto flex items-stretch justify-around h-14">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center flex-1 min-w-0 py-1 text-xs font-medium transition-colors touch-manipulation ${
                isActive(href)
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100'
              }`}
            >
              <Icon className="text-lg mb-0.5 shrink-0" aria-hidden />
              <span className="truncate w-full text-center px-0.5">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
