"use client"
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PLAIN_PRODUCTS, getProductById, getRelatedProducts } from '../../data/plain-products';
import PackagingIcon, { isPlaceholderImage } from '../../components/PackagingIcon';

const fmtCase = (n) => `€${Number(n).toFixed(2)}`;
const DISCOUNT = 0.95;
const discountedPrice = (p) => Math.round(p * DISCOUNT * 100) / 100;
function getTierForCases(tiers, numCases) {
  if (!tiers?.length) return null;
  for (const t of tiers) {
    const L = t.casesLabel;
    const plus = L.match(/^(\d+)\+/);
    if (plus) { if (numCases >= parseInt(plus[1], 10)) return t; continue; }
    const range = L.match(/^(\d+)-(\d+)/);
    if (range) { const min = parseInt(range[1], 10); const max = parseInt(range[2], 10); if (numCases >= min && numCases <= max) return t; }
  }
  return tiers[tiers.length - 1];
}

export default function PlainPackagingDetail({ product, relatedProducts }) {
  const [numCases, setNumCases] = useState(1);
  const selectedTier = product?.caseTiers ? getTierForCases(product.caseTiers, numCases) || product.caseTiers[0] : null;
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
          <Link href="/plain-packaging" className="inline-block bg-stone-800 text-white px-6 py-3 rounded-xl hover:bg-stone-900 transition-colors">
            Back to Plain Packaging
          </Link>
        </div>
      </Layout>
    );
  }

  const estimatedTotal = selectedTier
    ? `€${(numCases * discountedPrice(selectedTier.pricePerCase)).toFixed(2)}`
    : '—';

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
          subject: `Plain Packaging Quote — ${product.name} [${product.code}] — ${form.company}`,
          message: `Company: ${form.company}\n\nProduct: ${product.name}\nCode: ${product.code}\nQty per case: ${product.qtyPerCase}\nCases: ${numCases} (${selectedTier?.casesLabel})\nPrice per case: ${fmtCase(selectedTier ? discountedPrice(selectedTier.pricePerCase) : 0)}\nEstimated Total: ${estimatedTotal}\n\nNotes: ${form.notes || 'None'}`,
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

  return (
    <Layout>
      <Head>
        <title>{product.name} — Plain Packaging | PrintNPack Ireland</title>
        <meta name="description" content={`${product.description?.slice(0, 155)} Fast delivery across Ireland.`} />
      </Head>

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-xs text-stone-400">
            <li><Link href="/" className="hover:text-stone-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/plain-packaging" className="hover:text-stone-600 transition-colors">Plain Packaging</Link></li>
            <li>/</li>
            <li className="text-stone-700 font-medium truncate max-w-[200px]">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200">
              {isPlaceholderImage(product.imageSrc) ? (
                <PackagingIcon category={product.category} className="w-full h-full" />
              ) : (
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-stone-700 border border-stone-200 shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-5">

              {/* Title + code */}
              <div>
                <p className="text-xs text-stone-400 mb-1">Code: {product.code}</p>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  {product.name}
                </h1>
                {product.qtyPerCase && (
                  <p className="text-sm text-stone-500 mt-1">{product.qtyPerCase} per case</p>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-stone-50 rounded-xl border border-stone-200 p-3 text-center">
                  <div className="text-stone-400 text-xs line-through">
                    {selectedTier ? fmtCase(selectedTier.pricePerCase) : fmtCase(product.caseTiers[0]?.pricePerCase ?? 0)}
                  </div>
                  <div className="text-base font-bold text-stone-900 leading-snug">
                    {selectedTier ? fmtCase(discountedPrice(selectedTier.pricePerCase)) : fmtCase(product.caseTiers[0] ? discountedPrice(product.caseTiers[0].pricePerCase) : 0)}
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">from / case</div>
                </div>
                <div className="bg-stone-50 rounded-xl border border-stone-200 p-3 text-center">
                  <div className="text-base font-bold text-stone-900">1 case</div>
                  <div className="text-xs text-stone-400 mt-0.5">min. order</div>
                </div>
                <div className="bg-stone-50 rounded-xl border border-stone-200 p-3 text-center">
                  <div className="text-base font-bold text-stone-900">1–2 days</div>
                  <div className="text-xs text-stone-400 mt-0.5">response</div>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <p className="text-stone-600 text-sm leading-relaxed">{product.description}</p>
              )}

              {/* Case tier pricing — selecting a tier sets numCases so tier stays in sync */}
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  Price per case — select volume
                </p>
                <div className="flex flex-col gap-2">
                  {product.caseTiers.map((tier) => {
                    const minCases = tier.casesLabel.includes('+') ? parseInt(tier.casesLabel, 10) : parseInt(tier.casesLabel, 10);
                    return (
                      <button
                        key={tier.casesLabel}
                        onClick={() => setNumCases(minCases)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all ${
                          selectedTier?.casesLabel === tier.casesLabel
                            ? 'bg-stone-800 text-white border-stone-800 shadow-sm'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                        }`}
                      >
                        <span className="font-semibold">{tier.casesLabel}</span>
                        <span className={`text-base font-bold ${selectedTier?.casesLabel === tier.casesLabel ? 'text-amber-300' : 'text-stone-900'}`}>
                          <span className="line-through opacity-70 text-sm font-normal mr-1">{fmtCase(tier.pricePerCase)}</span>
                          {fmtCase(discountedPrice(tier.pricePerCase))}
                          <span className={`text-xs font-normal ml-1 ${selectedTier?.casesLabel === tier.casesLabel ? 'text-stone-300' : 'text-stone-400'}`}>/ case</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cases stepper */}
              <div>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Number of cases</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                    <button onClick={() => setNumCases(Math.max(1, numCases - 1))} className="px-4 py-3 text-stone-500 hover:bg-stone-50 font-bold text-lg">−</button>
                    <span className="px-4 py-3 font-semibold text-stone-900 min-w-[3rem] text-center">{numCases}</span>
                    <button onClick={() => setNumCases(numCases + 1)} className="px-4 py-3 text-stone-500 hover:bg-stone-50 font-bold text-lg">+</button>
                  </div>
                  {selectedTier && (
                    <div className="flex-1 text-right">
                      <p className="text-xs text-stone-400">Estimated total</p>
                      <p className="text-xl font-bold text-stone-900">{estimatedTotal}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              {selectedTier && (
                <button
                  onClick={() => setFormOpen(true)}
                  className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 rounded-xl text-sm transition-colors active:scale-[0.98]"
                >
                  Get Quote — {estimatedTotal}
                </button>
              )}

              {/* Trust row */}
              <div className="flex flex-wrap gap-4 text-xs text-stone-400 pt-2 border-t border-stone-100">
                <span>⚡ Fast dispatch</span>
                <span>🇮🇪 Ireland-wide delivery</span>
                <span>✉ Reply within 1–2 business days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────────────────────────────── */}
      {relatedProducts?.length > 0 && (
        <section className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-stone-900">More in {product.category}</h2>
              <Link href={`/plain-packaging?category=${encodeURIComponent(product.category)}`} className="text-xs text-stone-500 hover:text-stone-800 transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map(p => (
                <Link
                  key={p.id}
                  href={`/plain-packaging/${p.id}`}
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-md transition-all group"
                >
                  <div className="relative overflow-hidden" style={{ paddingBottom: '60%' }}>
                    {isPlaceholderImage(p.imageSrc) ? (
                      <PackagingIcon category={p.category} className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <Image
                        src={p.imageSrc}
                        alt={p.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-stone-900 text-xs leading-snug line-clamp-2">{p.name}</p>
                    <p className="text-xs text-stone-400 mt-1">{p.qtyPerCase} / case</p>
                    <p className="text-xs text-stone-500 mt-2">
                      From <span className="font-bold text-stone-800">{fmtCase(p.caseTiers[p.caseTiers.length - 1] ? discountedPrice(p.caseTiers[p.caseTiers.length - 1].pricePerCase) : 0)}</span> / case
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need a larger order or custom quote?</h2>
          <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
            Contact us directly for bulk pricing, pallet orders, or if you need a product not listed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setFormOpen(true)}
              className="bg-white hover:bg-stone-100 text-stone-900 font-bold py-3 px-8 rounded-xl transition-colors text-sm"
            >
              Get a Quote
            </button>
            <a
              href="tel:+353894400155"
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-3 px-8 rounded-xl border border-stone-700 transition-colors text-sm"
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

              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
                <div>
                  <p className="font-bold text-stone-900 text-base">Request a Quote</p>
                  <p className="text-xs text-stone-400 mt-0.5 truncate max-w-[260px]">{product.name} · {numCases} case{numCases !== 1 ? 's' : ''} · {selectedTier?.casesLabel}</p>
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
                <div className="flex flex-col items-center text-center px-6 py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Quote Submitted!</h3>
                  <p className="text-stone-500 text-sm max-w-xs mb-6">
                    Thanks {form.name.split(' ')[0]}! We&apos;ll get back to you within 1–2 business days.
                  </p>
                  <div className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-left mb-6">
                    <p className="font-semibold text-stone-800 text-sm line-clamp-2">{product.name}</p>
                    <p className="text-xs text-stone-500 mt-1">{numCases} case{numCases !== 1 ? 's' : ''} · {selectedTier?.casesLabel}</p>
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
                <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
                  {/* Summary banner */}
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-500 truncate max-w-[200px]">{numCases} case{numCases !== 1 ? 's' : ''} × {product.name}</p>
                      <p className="text-lg font-bold text-stone-900">{estimatedTotal}</p>
                    </div>
                    <span className="text-xs text-stone-400 bg-white border border-stone-200 px-2 py-1 rounded-lg flex-shrink-0">estimate</span>
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
                          errors[f.id] ? 'border-red-300 ring-2 ring-red-100' : 'border-stone-200 focus:border-stone-400 focus:ring-2 focus:ring-stone-100'
                        }`}
                      />
                      {errors[f.id] && <p className="text-xs text-red-500 mt-1">{errors[f.id]}</p>}
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">Notes (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Delivery notes, special requirements…"
                      value={form.notes}
                      onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                      className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-xl outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 resize-none"
                    />
                  </div>

                  <p className="text-xs text-stone-400">We will contact you to confirm stock and arrange delivery. We never share your data.</p>

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
      {selectedTier && (
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
  // Pre-build first 100 most-visited products; the rest build on-demand
  const paths = PLAIN_PRODUCTS.slice(0, 100).map(p => ({ params: { slug: p.id } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.slug);
  if (!product) return { notFound: true };
  const relatedProducts = getRelatedProducts(params.slug);
  return { props: { product, relatedProducts } };
}
