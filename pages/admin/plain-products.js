import React, { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AdminLayout from '../../components/admin/AdminLayout';
import {
  FiPackage, FiSearch, FiExternalLink, FiImage, FiTag, FiRefreshCw,
} from 'react-icons/fi';

export default function AdminPlainProducts() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  useEffect(() => {
    if (!allowed) return;
    setLoading(true);
    setError(null);
    fetch('/api/plain-products', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load products');
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setCategories(['All', ...(data.categories || []).sort()]);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [allowed]);

  const filtered = useMemo(() => {
    let list = products;
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.id?.toLowerCase().includes(q) ||
          p.qtyPerCase?.toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }, [products, search, selectedCategory]);

  const stats = useMemo(
    () => ({
      total: products.length,
      withImages: products.filter((p) => p.imageSrc || (p.images && p.images.length > 0)).length,
      categories: categories.length - 1,
    }),
    [products, categories]
  );

  if (loading && !products.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!allowed) return null;

  return (
    <AdminLayout title="Plain Packaging">
      <Head>
        <title>Plain Packaging — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Plain packaging products</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            Synced from site data (DB mirror). Run <code className="bg-slate-100 px-1 rounded text-xs">npm run sync-plain-products</code> to refresh.
          </p>
        </div>
        <Link
          href="/plain-packaging"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          <FiExternalLink size={14} />
          View on site
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { icon: FiPackage, label: 'Products', value: stats.total, color: 'text-blue-600', bg: 'bg-blue-50' },
          { icon: FiImage, label: 'With image', value: stats.withImages, color: 'text-green-600', bg: 'bg-green-50' },
          { icon: FiTag, label: 'Categories', value: stats.categories, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
            <div className={`w-8 h-8 ${s.bg} rounded-lg flex items-center justify-center shrink-0`}>
              <s.icon className={s.color} size={14} />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 leading-none">{s.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, ID, category, qty…"
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-blue-400 cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All categories' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto max-h-[60vh] overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 sticky top-0 z-10">
              <tr className="border-b border-slate-200">
                <th className="text-left px-4 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider w-20">Image</th>
                <th className="text-left px-4 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider w-24">ID</th>
                <th className="text-left px-4 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">Name</th>
                <th className="text-left px-4 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider">Category</th>
                <th className="text-left px-4 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider w-28">Qty / case</th>
                <th className="text-left px-4 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider w-24">Tiers</th>
                <th className="text-right px-4 py-3 text-slate-500 font-semibold text-xs uppercase tracking-wider w-20">View</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                    {products.length === 0 ? (
                      loading ? (
                        <span className="inline-flex items-center gap-2">
                          <FiRefreshCw className="animate-spin" size={16} /> Loading…
                        </span>
                      ) : (
                        'No products in the database. Run the sync script.'
                      )
                    ) : (
                      'No products match your filters.'
                    )}
                  </td>
                </tr>
              ) : (
                filtered.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="px-4 py-2">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden relative shrink-0">
                        {p.imageSrc || (p.images && p.images[0]) ? (
                          <Image
                            src={p.imageSrc || p.images[0]}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                            <FiImage size={16} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-2 font-mono text-xs text-slate-600">{p.id}</td>
                    <td className="px-4 py-2 font-medium text-slate-900 max-w-xs truncate" title={p.name}>
                      <Link href={`/admin/plain-products/${p.id}`} className="hover:text-blue-600 hover:underline">
                        {p.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-slate-600">{p.category}</td>
                    <td className="px-4 py-2 text-slate-600">{p.qtyPerCase || '—'}</td>
                    <td className="px-4 py-2 text-slate-500">
                      {Array.isArray(p.caseTiers) ? p.caseTiers.length : 0} tiers
                    </td>
                    <td className="px-4 py-2 text-right space-x-2">
                      <Link
                        href={`/admin/plain-products/${p.id}`}
                        className="text-blue-600 hover:underline inline-flex items-center gap-1 text-xs"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/plain-packaging/${p.id}`}
                        target="_blank"
                        className="text-slate-500 hover:text-blue-600 hover:underline inline-flex items-center gap-1 text-xs"
                      >
                        <FiExternalLink size={12} /> Site
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {filtered.length > 0 && (
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
            Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' || search ? ` (filtered from ${products.length})` : ''}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
