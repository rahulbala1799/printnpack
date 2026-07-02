import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '../../components/admin/AdminLayout';
import products from '../../data/products';
import {
  FiPackage, FiGrid, FiMail, FiArrowRight, FiUsers, FiUserPlus,
  FiTrendingUp, FiAlertCircle, FiCheckCircle, FiPhone, FiEye,
} from 'react-icons/fi';

const categories = [...new Set(products.map((p) => p.category))];

const quickLinks = [
  {
    href: '/admin/products',
    icon: FiPackage,
    label: 'Manage Products',
    desc: 'View and edit all products',
    color: 'bg-blue-500',
  },
  {
    href: '/admin/plain-products',
    icon: FiPackage,
    label: 'Plain Packaging',
    desc: 'View plain packaging products (from DB)',
    color: 'bg-amber-500',
  },
  {
    href: '/admin/leads',
    icon: FiUsers,
    label: 'Leads',
    desc: 'Contact & quote form pipeline',
    color: 'bg-cyan-500',
  },
  {
    href: '/admin/staff',
    icon: FiUserPlus,
    label: 'Staff',
    desc: 'Add and manage staff accounts',
    color: 'bg-emerald-500',
  },
  {
    href: '/admin/seo',
    icon: FiTrendingUp,
    label: 'SEO Automation',
    desc: 'Search Console insights & actions',
    color: 'bg-indigo-500',
  },
  {
    href: '/admin/page-views',
    icon: FiEye,
    label: 'Page Views',
    desc: 'Visitors, sessions & top pages',
    color: 'bg-blue-500',
  },
  {
    href: '/admin/phone-clicks',
    icon: FiPhone,
    label: 'Phone Clicks',
    desc: 'Track call-link taps across the site',
    color: 'bg-emerald-500',
  },
  {
    href: '/admin/email-config',
    icon: FiMail,
    label: 'Email Settings',
    desc: 'Configure Gmail & test emails',
    color: 'bg-purple-500',
  },
  {
    href: '/',
    icon: FiGrid,
    label: 'View Live Site',
    desc: 'Open the public website',
    color: 'bg-green-500',
  },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('Not authenticated');
        return res.json();
      })
      .then((data) => {
        if (data.user?.role !== 'admin') throw new Error('Not admin');
        setAllowed(true);
      })
      .catch(() => router.replace('/login'))
      .finally(() => setLoading(false));
  }, [router]);

  const totalProducts = products.length;
  const categoryCount = categories.length;
  const productsWithImages = products.filter((p) => p.images && p.images.length > 0).length;
  const productsWithPrice = products.filter((p) => p.price).length;

  if (loading || !allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <AdminLayout title="Dashboard">
      <Head>
        <title>Dashboard — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Good to see you 👋</h2>
        <p className="text-slate-500 mt-1">Here&rsquo;s an overview of your PrintNPack store.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Products', value: totalProducts, icon: FiPackage, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Categories', value: categoryCount, icon: FiGrid, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'With Images', value: productsWithImages, icon: FiCheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'With Pricing', value: productsWithPrice, icon: FiTrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className={stat.color} size={18} />
            </div>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-slate-500 text-sm mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Quick Actions</h3>
          {quickLinks.map(({ href, icon: Icon, label, desc, color }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center shrink-0`}>
                <Icon className="text-white" size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900 text-sm">{label}</p>
                <p className="text-slate-400 text-xs truncate">{desc}</p>
              </div>
              <FiArrowRight className="text-slate-300 group-hover:text-blue-500 transition-colors shrink-0" size={16} />
            </Link>
          ))}
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Products by Category</h3>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">Category</th>
                  <th className="text-right px-5 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">Products</th>
                  <th className="text-right px-5 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, i) => {
                  const count = products.filter((p) => p.category === cat).length;
                  const pct = Math.round((count / totalProducts) * 100);
                  return (
                    <tr key={cat} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <p className="font-medium text-slate-800">{cat}</p>
                            <div className="h-1 bg-slate-100 rounded-full mt-1 w-24">
                              <div
                                className="h-1 bg-blue-500 rounded-full"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className="font-semibold text-slate-900">{count}</span>
                        <span className="text-slate-400 text-xs ml-1">({pct}%)</span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <Link
                          href={`/admin/products?category=${encodeURIComponent(cat)}`}
                          className="text-blue-600 text-xs hover:underline font-medium"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {products.filter((p) => !p.price).length > 0 && (
        <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
          <FiAlertCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
          <div>
            <p className="text-amber-800 font-semibold text-sm">
              {products.filter((p) => !p.price).length} products are missing pricing information
            </p>
            <p className="text-amber-600 text-xs mt-0.5">
              Review the products list to ensure all items have prices set.{' '}
              <Link href="/admin/products" className="underline font-medium">View products →</Link>
            </p>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
