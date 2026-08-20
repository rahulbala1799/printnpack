import { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/admin/AdminLayout';
import allProducts from '../../../data/products';
import {
  FiSearch, FiFilter, FiPackage, FiExternalLink,
  FiImage, FiTag, FiDollarSign, FiChevronDown,
} from 'react-icons/fi';

const categories = ['All', ...new Set(allProducts.map((p) => p.category))];

const categoryColors = {
  'Food Packaging':        'bg-orange-100 text-orange-700',
  'Retail Packaging':      'bg-blue-100 text-blue-700',
  'Eco-Friendly Packaging':'bg-green-100 text-green-700',
  'Hospitality Products':  'bg-purple-100 text-purple-700',
  'Wide Format':           'bg-cyan-100 text-cyan-700',
  'Stickers & Labels':     'bg-pink-100 text-pink-700',
  'Leaflets':              'bg-indigo-100 text-indigo-700',
  'Branded Items':         'bg-pink-100 text-pink-700',
  'Ultra Light':           'bg-slate-100 text-slate-600',
  'Light':                 'bg-slate-100 text-slate-600',
  'Medium':                'bg-amber-100 text-amber-700',
  'Heavy':                 'bg-red-100 text-red-700',
  'Premium':               'bg-yellow-100 text-yellow-700',
  'Ultra Premium':         'bg-yellow-200 text-yellow-800',
};

export default function AdminProducts() {
  const router = useRouter();
  const initialCategory = router.query.category || 'All';

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [sortBy, setSortBy] = useState('name'); // 'name' | 'category' | 'images'

  const filtered = useMemo(() => {
    let list = allProducts;
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.id?.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'name') list = [...list].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    if (sortBy === 'category') list = [...list].sort((a, b) => (a.category || '').localeCompare(b.category || ''));
    if (sortBy === 'images') list = [...list].sort((a, b) => (b.images?.length || 0) - (a.images?.length || 0));
    return list;
  }, [search, selectedCategory, sortBy]);

  const stats = useMemo(() => ({
    total: filtered.length,
    withImages: filtered.filter((p) => p.images?.length > 0).length,
    withPrice: filtered.filter((p) => p.price).length,
    noImages: filtered.filter((p) => !p.images?.length).length,
  }), [filtered]);

  return (
    <AdminLayout title="Products">
      <Head>
        <title>Products — PrintNPack Admin</title>
        <meta name="robots" content="noindex" />
      </Head>

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-slate-500 text-sm">
            Showing <span className="font-semibold text-slate-900">{stats.total}</span> of{' '}
            <span className="font-semibold text-slate-900">{allProducts.length}</span> products
          </p>
        </div>
        {/* View toggle */}
        <div className="flex items-center gap-2">
          <div className="bg-white border border-slate-200 rounded-xl p-1 flex gap-1">
            {['grid', 'table'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  viewMode === mode
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { icon: FiPackage,    label: 'Products',    value: stats.total,      color: 'text-blue-600',  bg: 'bg-blue-50'  },
          { icon: FiImage,     label: 'With Images', value: stats.withImages, color: 'text-green-600', bg: 'bg-green-50' },
          { icon: FiDollarSign,label: 'With Price',  value: stats.withPrice,  color: 'text-amber-600', bg: 'bg-amber-50' },
          { icon: FiTag,       label: 'No Images',   value: stats.noImages,   color: 'text-red-500',   bg: 'bg-red-50'   },
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

      {/* Search + filters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products by name, ID, or category…"
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-blue-400 cursor-pointer"
            >
              <option value="name">Sort: Name A–Z</option>
              <option value="category">Sort: Category</option>
              <option value="images">Sort: Most Images</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors border ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className={`ml-1.5 ${selectedCategory === cat ? 'opacity-70' : 'text-slate-400'}`}>
                  {allProducts.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID VIEW ── */}
      {viewMode === 'grid' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => {
            const thumb = product.imageSrc || product.images?.[0];
            const catColor = categoryColors[product.category] || 'bg-slate-100 text-slate-600';
            return (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all group"
              >
                {/* Image */}
                <div className="relative h-44 bg-slate-100">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                      <FiImage size={28} />
                      <p className="text-xs mt-1">No image</p>
                    </div>
                  )}
                  {/* Image count badge */}
                  {product.images?.length > 0 && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                      {product.images.length} photo{product.images.length !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColor}`}>
                    {product.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mt-2 leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  {product.price && (
                    <p className="text-xs text-slate-500 mt-1">{product.price}</p>
                  )}
                  {product.moq && (
                    <p className="text-xs text-slate-400">MOQ: {product.moq.toLocaleString()} units</p>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                    <Link
                      href={product.url || `/products/${product.id}`}
                      target="_blank"
                      className="flex items-center gap-1 text-xs text-blue-600 font-medium hover:underline"
                    >
                      <FiExternalLink size={11} />
                      View live
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── TABLE VIEW ── */}
      {viewMode === 'table' && (
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">MOQ</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Images</th>
                  <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((product) => {
                  const thumb = product.imageSrc || product.images?.[0];
                  const catColor = categoryColors[product.category] || 'bg-slate-100 text-slate-600';
                  return (
                    <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden shrink-0 relative">
                            {thumb ? (
                              <Image
                                src={thumb}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FiImage className="text-slate-300" size={14} />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 leading-tight line-clamp-1">{product.name}</p>
                            <p className="text-xs text-slate-400 font-mono">{product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColor}`}>
                          {product.category}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-slate-700 text-xs">
                        {product.price || <span className="text-slate-300">—</span>}
                      </td>
                      <td className="px-5 py-3 text-slate-700 text-xs">
                        {product.moq ? `${product.moq.toLocaleString()} units` : <span className="text-slate-300">—</span>}
                      </td>
                      <td className="px-5 py-3">
                        <span className={`text-xs font-semibold ${product.images?.length ? 'text-green-600' : 'text-red-400'}`}>
                          {product.images?.length || 0}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <Link
                          href={product.url || `/products/${product.id}`}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium hover:underline"
                        >
                          View <FiExternalLink size={10} />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <FiPackage className="mx-auto text-slate-300 mb-3" size={32} />
              <p className="text-slate-500 font-medium">No products match your search</p>
              <button
                onClick={() => { setSearch(''); setSelectedCategory('All'); }}
                className="text-blue-600 text-sm mt-2 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}

      {filtered.length === 0 && viewMode === 'grid' && (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl">
          <FiPackage className="mx-auto text-slate-300 mb-3" size={32} />
          <p className="text-slate-500 font-medium">No products match your search</p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory('All'); }}
            className="text-blue-600 text-sm mt-2 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </AdminLayout>
  );
}
