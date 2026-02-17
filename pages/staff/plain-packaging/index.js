import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';

function formatPrice(n) {
  if (n == null || typeof n !== 'number') return '';
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(n);
}

export default function StaffPlainPackagingPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

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
    const q = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    fetch(`/api/staff/plain-products${q}`, { credentials: 'include' })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setProducts(data.products || []);
        if (data.categories && data.categories.length) setCategories(data.categories);
      })
      .catch(() => setProducts([]));
  }, [user, category]);

  const filtered = products.filter((p) => {
    if (!search.trim()) return true;
    const s = search.toLowerCase();
    return [p.name, p.category, p.description].some((v) => typeof v === 'string' && v.toLowerCase().includes(s));
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="Plain Packaging">
      <Head>
        <title>Plain Packaging — Staff — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="space-y-4">
        <p className="text-slate-500 text-sm">Selling prices by case tier. Cost prices are not shown.</p>
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500"
          aria-label="Search plain packaging"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-emerald-500"
          aria-label="Filter by category"
        >
          <option value="All">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <p className="text-slate-500 text-sm">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

        <ul className="space-y-3 pb-4">
          {filtered.map((p) => {
            const tiers = p.caseTiers || [];
            const minPrice = tiers.length ? Math.min(...tiers.map((t) => t.pricePerCase ?? 0)) : null;
            return (
              <li
                key={p.id}
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-slate-100 shrink-0 overflow-hidden">
                    {p.imageSrc ? (
                      <Image
                        src={p.imageSrc}
                        alt=""
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">No image</div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900">{p.name}</p>
                    <p className="text-slate-500 text-sm">{p.category}</p>
                    {p.qtyPerCase && <p className="text-slate-600 text-xs mt-0.5">{p.qtyPerCase} per case</p>}
                    {minPrice != null && (
                      <p className="text-emerald-600 text-sm mt-1">From {formatPrice(minPrice)}/case</p>
                    )}
                  </div>
                </div>
                {tiers.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-xs font-medium text-slate-500 mb-1">Price tiers</p>
                    <div className="flex flex-wrap gap-2">
                      {tiers.map((t, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 bg-slate-100 rounded text-xs text-slate-700"
                        >
                          {t.casesLabel}: {formatPrice(t.pricePerCase)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </StaffLayout>
  );
}
