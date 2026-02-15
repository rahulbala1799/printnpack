import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import {
  FiArrowLeft,
  FiExternalLink,
  FiPackage,
  FiTag,
  FiTrendingUp,
  FiDollarSign,
  FiBarChart2,
  FiImage,
  FiLayers,
} from 'react-icons/fi';

function formatPrice(n) {
  if (n == null || Number.isNaN(n)) return '—';
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }).format(n);
}

function marginPercent(cost, selling) {
  if (cost == null || cost <= 0 || selling == null) return null;
  const pct = ((selling - cost) / cost) * 100;
  return Math.round(pct * 10) / 10;
}

export default function AdminPlainProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

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
    if (!allowed || !id) return;
    setLoading(true);
    setError(null);
    fetch(`/api/plain-products/${encodeURIComponent(id)}`, { credentials: 'include' })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) throw new Error('Product not found');
          throw new Error('Failed to load product');
        }
        return res.json();
      })
      .then(setProduct)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [allowed, id]);

  if (loading && !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }
  if (!allowed) return null;

  const tiers = product?.caseTiers || [];
  const minSelling = tiers.length ? Math.min(...tiers.map((t) => t.pricePerCase)) : null;
  const maxSelling = tiers.length ? Math.max(...tiers.map((t) => t.pricePerCase)) : null;
  const cost = product?.costPerCase ?? null;
  const tierMargins = cost != null && cost > 0 && tiers.length
    ? tiers.map((t) => marginPercent(cost, t.pricePerCase)).filter((m) => m != null)
    : [];
  const minMargin = tierMargins.length ? Math.min(...tierMargins) : null;
  const maxMargin = tierMargins.length ? Math.max(...tierMargins) : null;

  return (
    <AdminLayout title={product ? product.name : 'Product'}>
      <Head>
        <title>{product ? `${product.name} — Plain Packaging` : 'Product'} — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/admin/plain-products" className="hover:text-blue-600 flex items-center gap-1">
          <FiArrowLeft size={14} /> Plain Packaging
        </Link>
        {product && (
          <>
            <span>/</span>
            <span className="text-slate-700 font-medium truncate max-w-[200px]" title={product.name}>
              {product.name}
            </span>
          </>
        )}
      </nav>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-sm">
          {error}
        </div>
      )}

      {!product && !error && !loading && (
        <div className="text-center py-12 text-slate-500">No product selected.</div>
      )}

      {product && (
        <div className="space-y-8">
          {/* Hero card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-80 h-64 md:h-auto md:min-h-[280px] bg-slate-700 shrink-0">
                {product.imageSrc || (product.images && product.images[0]) ? (
                  <Image
                    src={product.imageSrc || product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                    <FiImage size={48} className="mb-2 opacity-60" />
                    <span className="text-sm">No image</span>
                  </div>
                )}
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  {product.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {product.name}
                </h1>
                <p className="text-slate-400 mt-2 font-mono text-sm">ID: {product.id}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      product.is_active !== false ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-600 text-slate-300'
                    }`}
                  >
                    {product.is_active !== false ? 'Active' : 'Inactive'}
                  </span>
                  <Link
                    href={`/plain-packaging/${product.id}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={14} /> View on site
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: FiPackage,
                label: 'Qty per case',
                value: product.qtyPerCase || '—',
                sub: 'Unit size',
                color: 'bg-blue-500/10 text-blue-600',
                iconBg: 'bg-blue-500/20',
              },
              {
                icon: FiLayers,
                label: 'Price tiers',
                value: tiers.length,
                sub: 'Volume bands',
                color: 'text-purple-600',
                iconBg: 'bg-purple-500/20',
              },
              {
                icon: FiTrendingUp,
                label: 'Selling range',
                value:
                  minSelling != null && maxSelling != null
                    ? `${formatPrice(minSelling)} – ${formatPrice(maxSelling)}`
                    : '—',
                sub: 'Per case',
                color: 'text-emerald-600',
                iconBg: 'bg-emerald-500/20',
              },
              {
                icon: FiDollarSign,
                label: 'Cost price',
                value: cost != null ? formatPrice(cost) : 'Not set',
                sub: 'Per case (admin)',
                color: cost != null ? 'text-amber-600' : 'text-slate-500',
                iconBg: cost != null ? 'bg-amber-500/20' : 'bg-slate-500/20',
              },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 ${m.iconBg} rounded-xl flex items-center justify-center mb-3`}>
                  <m.icon className={m.color} size={18} />
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{m.label}</p>
                <p className="text-lg font-bold text-slate-900 mt-0.5">{m.value}</p>
                {m.sub && <p className="text-xs text-slate-400 mt-0.5">{m.sub}</p>}
              </div>
            ))}
          </div>

          {/* Pricing section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cost & summary */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FiDollarSign className="text-amber-500" size={20} />
                  Cost &amp; margin
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-600">Cost price (per case)</span>
                  <span className="text-xl font-bold text-slate-900">
                    {cost != null ? formatPrice(cost) : '—'}
                  </span>
                </div>
                {cost != null && minSelling != null && (
                  <>
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">Margin at lowest tier</p>
                      <p className="text-lg font-semibold text-emerald-600">
                        {marginPercent(cost, minSelling) != null ? `${marginPercent(cost, minSelling)}%` : '—'}
                      </p>
                    </div>
                    {minMargin != null && maxMargin != null && (
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-xs text-slate-500 mb-1">Tier margin range</p>
                        <p className="text-sm font-medium text-slate-700">
                          <span className="text-emerald-600">{minMargin}%</span> (lowest tier) – <span className="text-emerald-600">{maxMargin}%</span> (highest tier)
                        </p>
                      </div>
                    )}
                  </>
                )}
                {cost == null && (
                  <p className="text-sm text-slate-500 italic">
                    Set cost per case in the database to see margin calculations.
                  </p>
                )}
              </div>
            </div>

            {/* Selling prices table */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FiBarChart2 className="text-blue-500" size={20} />
                  Selling prices (per case)
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <th className="text-left px-6 py-3 text-slate-500 font-semibold uppercase tracking-wider">
                        Volume
                      </th>
                      <th className="text-right px-6 py-3 text-slate-500 font-semibold uppercase tracking-wider">
                        Price per case
                      </th>
                      {cost != null && (
                        <th className="text-right px-6 py-3 text-slate-500 font-semibold uppercase tracking-wider">
                          Margin
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {tiers.length === 0 ? (
                      <tr>
                        <td colSpan={cost != null ? 3 : 2} className="px-6 py-8 text-center text-slate-500">
                          No price tiers
                        </td>
                      </tr>
                    ) : (
                      tiers.map((tier, i) => {
                        const price = tier.pricePerCase;
                        const m = cost != null ? marginPercent(cost, price) : null;
                        return (
                          <tr
                            key={i}
                            className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                          >
                            <td className="px-6 py-3 font-medium text-slate-800">{tier.casesLabel || '—'}</td>
                            <td className="px-6 py-3 text-right font-semibold text-slate-900">
                              {formatPrice(price)}
                            </td>
                            {cost != null && (
                              <td className="px-6 py-3 text-right">
                                <span
                                  className={
                                    m != null && m >= 0
                                      ? 'text-emerald-600 font-medium'
                                      : 'text-slate-500'
                                  }
                                >
                                  {m != null ? `${m}%` : '—'}
                                </span>
                              </td>
                            )}
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FiTag size={20} className="text-slate-500" />
                  Description
                </h2>
              </div>
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{product.description}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
}
