import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  FiGrid, FiPackage, FiMail, FiSettings, FiLogOut,
  FiMenu, FiX, FiChevronRight, FiFileText, FiUsers, FiUserPlus, FiFileMinus, FiTrendingUp, FiPhone,
} from 'react-icons/fi';

const navItems = [
  { href: '/admin',               label: 'Dashboard',       icon: FiGrid },
  { href: '/admin/leads',         label: 'Leads',           icon: FiUsers },
  { href: '/admin/invoices',      label: 'Invoices',        icon: FiFileMinus },
  { href: '/admin/staff',         label: 'Staff',           icon: FiUserPlus },
  { href: '/admin/products',     label: 'Products',        icon: FiPackage },
  { href: '/admin/plain-products', label: 'Plain Packaging', icon: FiPackage },
  { href: '/admin/seo',          label: 'SEO Automation',  icon: FiTrendingUp },
  { href: '/admin/phone-clicks', label: 'Phone Clicks',    icon: FiPhone },
  { href: '/admin/blog',          label: 'Blog Posts',       icon: FiFileText },
  { href: '/admin/email-config',  label: 'Email',           icon: FiMail },
  { href: '/admin/settings',      label: 'Settings',        icon: FiSettings },
];

export default function AdminLayout({ children, title = 'Admin' }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminUser, setAdminUser] = useState('Admin');

  useEffect(() => {
    // HttpOnly cookie is not visible to JS — use /api/auth/me (cookie is sent automatically)
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => data.user?.name && setAdminUser(data.user.name))
      .catch(() => router.replace('/login'));
  }, [router]);

  const handleSignOut = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.replace('/login');
  };

  const isActive = (href) => {
    if (href === '/admin') return router.pathname === '/admin';
    return router.pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">

      {/* ── Mobile overlay ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-700/50">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-extrabold text-sm">P</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">PrintNPack</p>
            <p className="text-slate-400 text-xs mt-0.5">Admin Panel</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider px-3 mb-3">
            Navigation
          </p>
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(href)
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon size={16} />
              {label}
              {isActive(href) && <FiChevronRight size={14} className="ml-auto" />}
            </Link>
          ))}
        </nav>

        {/* Sign out */}
        <div className="px-3 py-4 border-t border-slate-700/50">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold truncate">{adminUser}</p>
              <p className="text-slate-500 text-xs">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-900/20 transition-colors"
          >
            <FiLogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 shrink-0">
          <button
            className="lg:hidden p-1 text-slate-500 hover:text-slate-900"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-slate-900 leading-none">{title}</h1>
            <nav className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
              <Link href="/admin" className="hover:text-slate-600">Admin</Link>
              {title !== 'Dashboard' && (
                <>
                  <span>/</span>
                  <span className="text-slate-600">{title}</span>
                </>
              )}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs text-slate-500 hover:text-blue-600 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              View site →
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
