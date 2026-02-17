import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaBoxOpen, FaCubes, FaClipboardList, FaShoppingCart, FaMapMarkerAlt, FaListUl } from 'react-icons/fa';
import StaffLayout from '../../components/staff/StaffLayout';

export default function StaffDashboard() {
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
        if (data.user.role !== 'staff' && data.user.role !== 'admin') {
          router.replace('/staff/login');
          return;
        }
        if (data.user.role === 'staff' && data.user.must_change_password) {
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" aria-hidden />
      </div>
    );
  }

  const cards = [
    { href: '/staff/outbound-sales', icon: FaMapMarkerAlt, label: 'Outbound Sales', desc: 'Log a shop visit', color: 'bg-emerald-600' },
    { href: '/staff/logged-visits', icon: FaListUl, label: 'Logged Visits', desc: 'View visits you’ve logged', color: 'bg-teal-600' },
    { href: '/staff/products', icon: FaBoxOpen, label: 'Products', desc: 'Main product catalogue', color: 'bg-blue-500' },
    { href: '/staff/plain-packaging', icon: FaCubes, label: 'Plain Packaging', desc: 'Plain packaging product list', color: 'bg-amber-500' },
    { href: '/staff/orders', icon: FaShoppingCart, label: 'Orders', desc: 'Manage customer orders', color: 'bg-slate-600' },
    { href: '/staff/quotes', icon: FaClipboardList, label: 'Quotes', desc: 'Process quote requests', color: 'bg-emerald-700' },
  ];

  return (
    <StaffLayout user={user} title="">
      <Head>
        <title>Staff Dashboard — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="space-y-3">
        <p className="text-slate-600 text-sm">Welcome, {user?.name}. Choose an option below.</p>
        <div className="grid grid-cols-1 gap-3">
          {cards.map(({ href, icon: Icon, label, desc, color }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md active:bg-slate-50 transition-all touch-manipulation min-h-[72px]"
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                <Icon className="text-white text-xl" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900">{label}</p>
                <p className="text-slate-500 text-sm truncate">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </StaffLayout>
  );
}
