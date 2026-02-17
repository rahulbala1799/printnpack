import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import StaffLayout from '../../../components/staff/StaffLayout';
import products from '../../../data/products';

export default function StaffProductsPage({ products: initialProducts }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(initialProducts.map((p) => p.category))].filter(Boolean);

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

  const filtered = initialProducts.filter((p) => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch =
      !search.trim() ||
      [p.name, p.category, p.description].some(
        (s) => typeof s === 'string' && s.toLowerCase().includes(search.toLowerCase())
      );
    return matchCat && matchSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="Products">
      <Head>
        <title>Products — Staff — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="space-y-4">
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-label="Search products"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-emerald-500"
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <p className="text-slate-500 text-sm">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

        <ul className="space-y-3 pb-4">
          {filtered.map((p) => (
            <li key={p.id}>
              <Link
                href={p.url || `/products/${p.id}`}
                className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md active:bg-slate-50 transition-all touch-manipulation"
              >
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
                  <p className="font-semibold text-slate-900 truncate">{p.name}</p>
                  <p className="text-slate-500 text-sm">{p.category}</p>
                  {p.price && <p className="text-emerald-600 text-sm mt-0.5">{p.price}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StaffLayout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      products: products || [],
    },
  };
}
