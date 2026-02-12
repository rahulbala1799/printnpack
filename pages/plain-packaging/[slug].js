"use client"
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PLAIN_PRODUCTS, getProductById, getRelatedProducts } from '../../data/plain-products';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) => `€${n.toFixed(2)}`;
const fmtTotal = (price, qty) =>
  `€${(price * qty).toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PlainPackagingDetail({ product, relatedProducts }) {
  const isTiered = product?.caseTiers && product.caseTiers.length > 0;
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [selectedBreak, setSelectedBreak] = useState(product?.qtyBreaks?.[0] || null);
  const [selectedTier, setSelectedTier] = useState(product?.caseTiers?.[0] || null);
  const [numCases, setNumCases] = useState(1);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [formOpen, setFormOpen] = useState(false);

  if (!product) {
    return (
      <Layout>
        <Head><title>Product Not Found | PrintNPack</title></Head>
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">Product not found</h1>
          <p className="text-stone-500 mb-6">This product doesn&apos;t exist or has been removed.</p>
          <Link href="/plain-packaging" className="inline-block bg-stone-800 text-white px-6 py-3 rounded-xl hover:bg-stone-900 transition-colors">
            Back to Plain Packaging
          </Link>
        </div>
      </Layout>
    );
  }

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.company.trim()) e.company = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    return e;
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Plain Packaging Quote — ${product.name} — ${form.company}`,
          message: isTiered
            ? `Company: ${form.company}\n\nProduct: ${product.name}\nCases: ${numCases} (${selectedTier?.casesLabel || '—'})\nPrice per case: €${selectedTier?.pricePerCase?.toFixed(2) ?? '—'}\nEstimated Total: €${(numCases * (selectedTier?.pricePerCase ?? 0)).toFixed(2)}\n\nNotes: ${form.notes || 'None'}`
            : `Company: ${form.company}\n\nProduct: ${product.name}\nSize: ${selectedSize}\nQuantity: ${selectedBreak?.label} units\nEstimated Total: ${fmtTotal(selectedBreak?.price, selectedBreak?.qty)}\n\nNotes: ${form.notes || 'None'}`,
          source: 'Plain Packaging Detail Page',
        }),
      });
      setQuoteSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const estimatedTotal = isTiered && selectedTier
    ? `€${(numCases * selectedTier.pricePerCase).toLocaleString('en-IE', { minimumFractionDigits: 2 })}`
    : selectedBreak ? fmtTotal(selectedBreak.price, selectedBreak.qty) : '—';
  const pricePerUnit = isTiered && selectedTier ? fmt(selectedTier.pricePerCase) + ' / case' : selectedBreak ? fmt(selectedBreak.price) : '—';

  return (
    <Layout>
      <Head>
        <title>{product.name} — Plain Packaging | PrintNPack Ireland</title>
        <meta
          name="description"
          content={`${product.description?.slice(0, 155)} Order in bulk with volume pricing. Fast delivery across Ireland.`}
        />
      </Head>

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-xs text-stone-400">
            <li><Link href="/" className="hover:text-stone-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/plain-packaging" className="hover:text-stone-600 transition-colors">Plain Packaging</Link></li>
            <li>/</li>
            <li className="text-stone-700 font-medium">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* Image */}
            <div>
              <div className="relative aspect-square bg-stone-50 rounded-2xl overflow-hidden border border-stone-200">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-stone-700 border border-stone-200 shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-5">

              {/* Title */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight mb-1">
                  {product.name}
                </h1>
                <p className="text-stone-400 text-sm">{product.material || product.qtyPerCase || ''}</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  ({ v: isTiered ? (selectedTier ? fmt(selectedTier.pricePerCase) : (product.caseTiers?.[0] ? fmt(product.caseTiers[0].pricePerCase) : '—') : (selectedBreak ? pricePerUnit : product.qtyBreaks?.[0] ? fmt(product.qtyBreaks[0].price) : '—'), l: isTiered ? 'per case' : 'from / unit' }),
                  ({ v: isTiered ? '1 case' : `${product.moq ?? '—'}+`, l: 'min. order' }),
                  ({ v: product.leadTime || 'Contact', l: 'lead time' }),
                ].map((s) => (
                  <div key={s.l} className="bg-stone-50 rounded-xl border border-stone-200 p-3 text-center">
                    <div className="text-base font-bold text-stone-900 leading-snug">{s.v}</div>
                    <div className="text-xs text-stone-400 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed">{product.description || product.tagline || ''}</p>

              {isTiered ? (
                <>
                  {/* Case tier pricing */}
                  <div>
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Price per case — by volume</p>
                    <div className="flex flex-col gap-2">
                      {product.caseTiers.map((tier) => (
                        <button
                          key={tier.casesLabel}
                          onClick={() => setSelectedTier(tier)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all ${
                            selectedTier?.casesLabel === tier.casesLabel ? 'bg-stone-800 text-white border-stone-800 shadow-sm' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                          }`}
                        >
                          <span className="font-semibold">{tier.casesLabel}</span>
                          <span className={`text-base font-bold ${selectedTier?.casesLabel === tier.casesLabel ? 'text-amber-300' : 'text-stone-900'}`}>{fmt(tier.pricePerCase)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Number of cases */}
                  <div>
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Number of cases</p>
                    <input
                      type="number"
                      min={1}
                      value={numCases}
                      onChange={(e) => setNumCases(Math.max(1, parseInt(e.target.value, 10) || 1))}
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm font-semibold text-stone-900"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Size selector */}
                  {product.sizes?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Size</p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map(size => (
                          <button key={size} onClick={() => setSelectedSize(size)} className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-all ${selectedSize === size ? 'bg-stone-800 text-white border-stone-800' : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'}`}>
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Volume pricing */}
                  {product.qtyBreaks?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Volume pricing — select quantity</p>
                      <div className="flex flex-col gap-2">
                        {product.qtyBreaks.map((b) => (
                          <button key={b.qty} onClick={() => setSelectedBreak(b)} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all ${selectedBreak?.qty === b.qty ? 'bg-stone-800 text-white border-stone-800 shadow-sm' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'}`}>
                            <span className="font-semibold">{b.label} units</span>
                            <div className="flex items-baseline gap-2">
                              <span className={`text-base font-bold ${selectedBreak?.qty === b.qty ? 'text-amber-300' : 'text-stone-900'}`}>{fmt(b.price)}</span>
                              <span className={`text-xs ${selectedBreak?.qty === b.qty ? 'text-stone-300' : 'text-stone-400'}`}>/ unit</span>
                              <span className={`text-xs font-semibold ${selectedBreak?.qty === b.qty ? 'text-stone-300' : 'text-stone-400'}`}>= {fmtTotal(b.price, b.qty)}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Selected summary */}
              {(isTiered ? selectedTier : selectedBreak) && (
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-stone-500">Your estimate</p>
                    <p className="text-xl font-bold text-stone-900">{estimatedTotal}</p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {isTiered ? `${numCases} cases × ${product.name} (${selectedTier?.casesLabel})` : `${selectedBreak?.label} × ${product.name} (${selectedSize})`}
                    </p>
                  </div>
                  <button
                    onClick={() => setFormOpen(true)}
                    className="bg-stone-800 hover:bg-stone-900 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors active:scale-[0.98]"
                  >
                    Get Quote
                  </button>
                </div>
              )}

              {/* Trust row */}
              <div className="flex flex-wrap gap-4 text-xs text-stone-400 pt-2 border-t border-stone-100">
                <span>⚡ Fast dispatch</span>
                <span>🇮🇪 Ireland-wide delivery</span>
                <span>✉ Reply within 1 business day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────────── */}
      {product.features?.length > 0 && (
        <section className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h2 className="text-xl font-bold text-stone-900 mb-7">Why choose {product.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((feat) => (
                <div key={feat} className="bg-white rounded-xl border border-stone-200 p-4 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-stone-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Specifications ────────────────────────────────────────────────────── */}
      {product.specifications?.length > 0 && (
        <section className="bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-xl font-bold text-stone-900 mb-6">Specifications</h2>
                <div className="border border-stone-200 rounded-2xl overflow-hidden">
                  {product.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center px-5 py-3.5 text-sm ${
                        i % 2 === 0 ? 'bg-stone-50' : 'bg-white'
                      }`}
                    >
                      <span className="font-semibold text-stone-700">{spec.label}</span>
                      <span className="text-stone-500 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                <h3 className="font-bold text-stone-900 mb-4 text-base">Order information</h3>
                <div className="space-y-3 text-sm text-stone-600">
                  <p>Prices shown are estimates based on standard stock. Final pricing may vary based on size and any custom requirements.</p>
                  <p>All orders are confirmed by our team before dispatch. We will contact you within 1 business day to confirm your order details.</p>
                  <p>Need a different size or quantity? Let us know in the notes field and we will do our best to accommodate.</p>
                </div>
                <button
                  onClick={() => setFormOpen(true)}
                  className="mt-5 w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 rounded-xl text-sm transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Products ──────────────────────────────────────────────────── */}
      {relatedProducts?.length > 0 && (
        <section className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-stone-900">Related products</h2>
              <Link href="/plain-packaging" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map(p => (
                <Link
                  key={p.id}
                  href={`/plain-packaging/${p.id}`}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-md transition-all group"
                >
                  <div className="relative bg-stone-50 overflow-hidden" style={{ paddingBottom: '55%' }}>
                    <Image
                      src={p.imageSrc}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-stone-700 border border-stone-200">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-stone-900 text-sm leading-snug">{p.name}</h3>
                    <p className="text-xs text-stone-400 mt-1">{p.material || p.qtyPerCase || ''}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-stone-500">From <span className="font-bold text-stone-800">{p.caseTiers?.length ? fmt(p.caseTiers[p.caseTiers.length - 1].pricePerCase) : fmt(p.qtyBreaks?.[0]?.price)}</span> {p.caseTiers?.length ? '/ case' : '/ unit'}</span>
                      <span className="text-xs text-stone-400">⏱ {p.leadTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to order {product.name}?</h2>
          <p className="text-stone-400 text-sm mb-7 max-w-md mx-auto">
            Get a same-day quote — no obligation. We supply restaurants, retailers, and hospitality businesses across Ireland.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setFormOpen(true)}
              className="bg-white hover:bg-stone-100 text-stone-900 font-bold py-3.5 px-8 rounded-xl transition-colors text-sm"
            >
              Get Free Quote
            </button>
            <a
              href="tel:+353894400155"
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-3.5 px-8 rounded-xl border border-stone-700 transition-colors text-sm"
            >
              Call +353 89 440 0155
            </a>
          </div>
        </div>
      </section>

      {/* ── Quote Form Modal ─────────────────────────────────────────────────── */}
      {formOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setFormOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">

              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
                <div>
                  <p className="font-bold text-stone-900 text-base">Request a Quote</p>
                  <p className="text-xs text-stone-400 mt-0.5">{product.name} · {isTiered ? `${numCases} cases` : `${selectedSize} · ${selectedBreak?.label} units`}</p>
                </div>
                <button
                  onClick={() => setFormOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {quoteSubmitted ? (
                /* Success state */
                <div className="flex flex-col items-center text-center px-6 py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Quote Submitted!</h3>
                  <p className="text-stone-500 text-sm max-w-xs mb-6">
                    Thanks {form.name.split(' ')[0]}! We&apos;ll review your request and get back to you within 1 business day.
                  </p>
                  <div className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-left mb-6">
                    <p className="text-xs text-stone-500 mb-1">Your order summary</p>
                    <p className="font-semibold text-stone-800 text-sm">{product.name}</p>
                    <p className="text-xs text-stone-500 mt-1">{isTiered ? `Cases: ${numCases} (${selectedTier?.casesLabel})` : `Size: ${selectedSize} · Qty: ${selectedBreak?.label} units`}</p>
                    <p className="text-base font-bold text-stone-900 mt-2">{estimatedTotal} <span className="text-xs font-normal text-stone-400">estimated</span></p>
                  </div>
                  <button
                    onClick={() => { setFormOpen(false); setQuoteSubmitted(false); }}
                    className="bg-stone-800 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-stone-900 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                  {/* Order summary banner */}
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-500">{isTiered ? `${numCases} cases × ${product.name}` : `${selectedBreak?.label} × ${product.name} (${selectedSize})`}</p>
                      <p className="text-lg font-bold text-stone-900">{estimatedTotal}</p>
                    </div>
                    <span className="text-xs text-stone-400 bg-white border border-stone-200 px-2 py-1 rounded-lg">estimate</span>
                  </div>

                  {[
                    { id: 'name',    label: 'Full Name',    type: 'text',  placeholder: 'John Murphy' },
                    { id: 'company', label: 'Company Name', type: 'text',  placeholder: 'Acme Foods Ltd' },
                    { id: 'email',   label: 'Work Email',   type: 'email', placeholder: 'john@acmefoods.ie' },
                    { id: 'phone',   label: 'Phone',        type: 'tel',   placeholder: '+353 1 234 5678' },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">
                        {f.label} <span className="text-red-400">*</span>
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id]}
                        onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                        className={`w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none transition-all ${
                          errors[f.id]
                            ? 'border-red-300 ring-2 ring-red-100'
                            : 'border-stone-200 focus:border-stone-400 focus:ring-2 focus:ring-stone-100'
                        }`}
                      />
                      {errors[f.id] && <p className="text-xs text-red-500 mt-1">{errors[f.id]}</p>}
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Notes (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Special requirements, delivery notes…"
                      value={form.notes}
                      onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                      className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-xl outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 resize-none"
                    />
                  </div>

                  <p className="text-xs text-stone-400">
                    We will contact you to confirm stock and arrange delivery. We never share your data.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-900 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
                  >
                    {submitting ? 'Sending…' : 'Submit Quote Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </>
      )}

      {/* ── Mobile sticky CTA ─────────────────────────────────────────────────── */}
      {(selectedBreak || (isTiered && selectedTier)) && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white border-t border-stone-200">
          <button
            onClick={() => setFormOpen(true)}
            className="w-full flex items-center justify-between bg-stone-800 text-white font-bold py-4 px-5 rounded-2xl active:scale-[0.98] transition-transform"
          >
            <div>
              <p className="text-xs text-stone-400 font-normal">Estimated total</p>
              <p className="text-base font-bold">{estimatedTotal}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Get Quote</span>
              <svg className="w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = PLAIN_PRODUCTS.map(p => ({ params: { slug: p.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.slug);
  if (!product) return { notFound: true };
  const relatedProducts = getRelatedProducts(params.slug);
  return { props: { product, relatedProducts } };
}
