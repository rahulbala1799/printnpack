import React, { useState, useCallback } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PLAIN_PRODUCTS, CATEGORIES } from '../data/plain-products';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) => `€${n.toFixed(2)}`;
const fmtTotal = (price, qty) =>
  `€${(price * qty).toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, onAdd }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedBreak, setSelectedBreak] = useState(product.qtyBreaks[0]);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAdd({ product, size: selectedSize, qtyBreak: selectedBreak });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col hover:border-stone-300 hover:shadow-md transition-all duration-200">

      {/* Image */}
      <Link href={`/plain-packaging/${product.id}`} className="block relative bg-stone-50 overflow-hidden" style={{ paddingBottom: '55%' }}>
        <Image
          src={product.imageSrc}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          onError={() => {}}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-stone-700 border border-stone-200 shadow-sm">
            {product.category}
          </span>
        </div>
        {product.tag && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              {product.tag}
            </span>
          </div>
        )}
        {/* Lead time */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-xs px-2 py-1 rounded-full bg-white/90 text-stone-500 border border-stone-100 shadow-sm">
            ⏱ {product.leadTime}
          </span>
        </div>
      </Link>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-4">

        {/* Title */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-stone-900 text-base leading-snug">{product.name}</h3>
            <p className="text-xs text-stone-400 mt-0.5">{product.material}</p>
          </div>
          <Link
            href={`/plain-packaging/${product.id}`}
            className="flex-shrink-0 text-xs font-semibold text-stone-500 hover:text-stone-800 underline underline-offset-2 transition-colors"
          >
            Details
          </Link>
        </div>

        {/* Size selector */}
        <div>
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Size</p>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                  selectedSize === size
                    ? 'bg-stone-800 text-white border-stone-800'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Volume pricing */}
        <div>
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            Volume pricing — tap to select
          </p>
          <div className="flex flex-col gap-1.5">
            {product.qtyBreaks.map((b) => (
              <button
                key={b.qty}
                onClick={() => setSelectedBreak(b)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-sm transition-all ${
                  selectedBreak.qty === b.qty
                    ? 'bg-stone-800 text-white border-stone-800 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <span className="font-semibold">{b.label} units</span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-base font-bold ${selectedBreak.qty === b.qty ? 'text-amber-300' : 'text-stone-900'}`}>
                    {fmt(b.price)}
                  </span>
                  <span className={`text-xs ${selectedBreak.qty === b.qty ? 'text-stone-300' : 'text-stone-400'}`}>
                    / unit
                  </span>
                  <span className={`text-xs font-semibold ml-1 ${selectedBreak.qty === b.qty ? 'text-stone-300' : 'text-stone-400'}`}>
                    = {fmtTotal(b.price, b.qty)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Add to quote */}
        <button
          onClick={handleAdd}
          className={`mt-auto w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
            justAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-stone-800 hover:bg-stone-900 text-white active:scale-[0.98]'
          }`}
        >
          {justAdded ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Added to Quote
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              Add to Quote — {fmtTotal(selectedBreak.price, selectedBreak.qty)}
            </>
          )}
        </button>

      </div>
    </div>
  );
};

// ─── Quote Drawer ─────────────────────────────────────────────────────────────
const QuoteDrawer = ({ items, onClose, onRemove, onUpdateQty }) => {
  const [step, setStep] = useState('review'); // review | form | success
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState({});

  const total = items.reduce((s, it) => s + it.qtyBreak.price * it.qtyBreak.qty, 0);

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
      const lines = items.map(it =>
        `• ${it.product.name} | Size: ${it.size} | Qty: ${it.qtyBreak.label} | Est: ${fmtTotal(it.qtyBreak.price, it.qtyBreak.qty)}`
      ).join('\n');
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Plain Packaging Quote — ${form.company}`,
          message: `Company: ${form.company}\n\nQuote Items:\n${lines}\n\nEstimated Total: €${total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}\n\nNotes: ${form.notes || 'None'}`,
          source: 'Plain Packaging Quote Builder',
        }),
      });
      setStep('success');
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[400px] bg-white flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 flex-shrink-0">
          <div>
            <div className="font-bold text-stone-900 text-base">
              {step === 'success' ? 'Quote Sent!' : 'Your Quote'}
            </div>
            {step !== 'success' && (
              <div className="text-xs text-stone-400 mt-0.5">
                {items.length} item{items.length !== 1 ? 's' : ''} · Est.{' '}
                <span className="font-semibold text-stone-700">
                  €{total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step tabs */}
        {step !== 'success' && (
          <div className="flex border-b border-stone-100 flex-shrink-0">
            {[
              { key: 'review', label: 'Items' },
              { key: 'form',   label: 'Your Details' },
            ].map((s, i) => (
              <div
                key={s.key}
                className={`flex-1 py-2.5 text-center text-xs font-semibold transition-colors ${
                  step === s.key
                    ? 'text-stone-900 border-b-2 border-stone-900'
                    : step === 'form' && s.key === 'review'
                    ? 'text-emerald-600'
                    : 'text-stone-400'
                }`}
              >
                {i + 1}. {s.label}
                {step === 'form' && s.key === 'review' && ' ✓'}
              </div>
            ))}
          </div>
        )}

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">

          {/* STEP 1: Review */}
          {step === 'review' && (
            <div className="p-4 flex flex-col gap-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="font-semibold text-stone-700 text-sm">Quote is empty</p>
                  <p className="text-stone-400 text-xs mt-1.5 max-w-[200px]">Pick a product, choose your size and quantity, then tap Add to Quote</p>
                </div>
              ) : (
                items.map((item, idx) => (
                  <div key={idx} className="border border-stone-200 rounded-xl overflow-hidden">
                    {/* Item row */}
                    <div className="flex items-start gap-3 p-3">
                      <div className="w-12 h-12 rounded-xl bg-stone-100 overflow-hidden flex-shrink-0 relative">
                        <Image src={item.product.imageSrc} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-stone-900 text-sm truncate">{item.product.name}</p>
                        <p className="text-xs text-stone-400 mt-0.5">Size: <span className="text-stone-600 font-medium">{item.size}</span></p>
                      </div>
                      <button
                        onClick={() => onRemove(idx)}
                        className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-stone-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Qty adjuster */}
                    <div className="px-3 pb-3">
                      <p className="text-xs text-stone-400 mb-1.5">Adjust quantity:</p>
                      <div className="flex flex-col gap-1">
                        {item.product.qtyBreaks.map((b, bi) => (
                          <button
                            key={bi}
                            onClick={() => onUpdateQty(idx, b)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg border text-xs transition-all ${
                              item.qtyBreak.qty === b.qty
                                ? 'bg-stone-800 text-white border-stone-800'
                                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                            }`}
                          >
                            <span className="font-semibold">{b.label} units</span>
                            <div className="flex items-baseline gap-1">
                              <span className={`font-bold ${item.qtyBreak.qty === b.qty ? 'text-amber-300' : 'text-stone-900'}`}>
                                {fmt(b.price)}
                              </span>
                              <span className={item.qtyBreak.qty === b.qty ? 'text-stone-400' : 'text-stone-400'}>
                                / unit = {fmtTotal(b.price, b.qty)}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* STEP 2: Contact form */}
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
              {/* Summary banner */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
                <p className="text-xs text-stone-500 mb-0.5">{items.length} product{items.length !== 1 ? 's' : ''}</p>
                <p className="text-lg font-bold text-stone-900">
                  €{total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}
                  <span className="text-sm font-normal text-stone-400 ml-1">estimated total</span>
                </p>
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
                  placeholder="Delivery requirements, special requests…"
                  value={form.notes}
                  onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-xl outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 resize-none"
                />
              </div>

              <p className="text-xs text-stone-400 leading-relaxed">
                We will contact you to confirm stock and arrange delivery. We never share your data.
              </p>
            </form>
          )}

          {/* STEP 3: Success */}
          {step === 'success' && (
            <div className="flex flex-col items-center justify-center text-center px-6 py-14">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Quote Submitted!</h3>
              <p className="text-stone-500 text-sm max-w-xs mb-6">
                Thanks {form.name.split(' ')[0]}! We will review your quote and get back to you within 1 business day.
              </p>
              <div className="w-full space-y-1.5">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs bg-stone-50 rounded-xl px-3 py-2">
                    <span className="text-stone-600">{item.product.name} ({item.size})</span>
                    <span className="font-bold text-stone-900">{fmtTotal(item.qtyBreak.price, item.qtyBreak.qty)}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between text-sm bg-stone-100 rounded-xl px-3 py-2.5">
                  <span className="font-bold text-stone-800">Total (estimate)</span>
                  <span className="font-bold text-stone-900">€{total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-6 bg-stone-800 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-stone-900 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {step !== 'success' && items.length > 0 && (
          <div className="p-4 border-t border-stone-100 bg-white flex-shrink-0">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-stone-500">Estimated total</span>
              <span className="text-xl font-bold text-stone-900">
                €{total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}
              </span>
            </div>

            {step === 'review' && (
              <button
                onClick={() => setStep('form')}
                className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
              >
                Continue — Enter your details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            )}

            {step === 'form' && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep('review')}
                  className="flex-shrink-0 flex items-center justify-center px-4 py-3 border-2 border-stone-200 rounded-xl text-stone-600 font-semibold text-sm hover:border-stone-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-900 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  {submitting ? 'Sending…' : 'Submit Quote Request'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PlainPackagingPage() {
  const [quoteItems, setQuoteItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleAdd = useCallback(({ product, size, qtyBreak }) => {
    setQuoteItems(prev => {
      const existing = prev.findIndex(
        it => it.product.id === product.id && it.size === size && it.qtyBreak.qty === qtyBreak.qty
      );
      if (existing >= 0) return prev;
      return [...prev, { product, size, qtyBreak }];
    });
  }, []);

  const handleRemove = useCallback((idx) => {
    setQuoteItems(prev => prev.filter((_, i) => i !== idx));
  }, []);

  const handleUpdateQty = useCallback((idx, newBreak) => {
    setQuoteItems(prev => prev.map((it, i) => i === idx ? { ...it, qtyBreak: newBreak } : it));
  }, []);

  const filtered = activeCategory === 'All'
    ? PLAIN_PRODUCTS
    : PLAIN_PRODUCTS.filter(p => p.category === activeCategory);

  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? PLAIN_PRODUCTS.length : PLAIN_PRODUCTS.filter(p => p.category === cat).length;
    return acc;
  }, {});

  const totalEst = quoteItems.reduce((s, it) => s + it.qtyBreak.price * it.qtyBreak.qty, 0);

  return (
    <Layout>
      <Head>
        <title>Plain Packaging — Unbranded B2B Stock | PrintNPack Ireland</title>
        <meta
          name="description"
          content="Order plain, unbranded packaging in bulk. Boxes, bags, napkins and mailers. Volume pricing, fast delivery across Ireland."
        />
      </Head>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-10 md:py-14">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6">
            <Link href="/" className="hover:text-stone-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-stone-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-stone-700">Plain Packaging</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Text */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider bg-amber-50 border border-amber-200 inline-block px-3 py-1 rounded-full mb-4">
                No branding required
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-3">
                Plain Packaging,<br />
                <span className="text-stone-500 font-normal">ready to order in bulk</span>
              </h1>
              <p className="text-stone-500 text-base leading-relaxed">
                Quality plain stock for food service, retail and hospitality. Select your product, pick a size, choose your volume and we will get back to you same day.
              </p>

              {/* Key stats */}
              <div className="mt-6 flex flex-wrap gap-6">
                {[
                  { v: `${PLAIN_PRODUCTS.length} products`, l: 'in stock' },
                  { v: 'From €0.03', l: 'per unit' },
                  { v: '3–7 day', l: 'delivery' },
                  { v: 'MOQ 250', l: 'minimum order' },
                ].map(s => (
                  <div key={s.l} className="flex flex-col">
                    <span className="text-base font-bold text-stone-800">{s.v}</span>
                    <span className="text-xs text-stone-400">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div className="flex-shrink-0 bg-white border border-stone-200 rounded-2xl p-5 min-w-[200px]">
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">How it works</p>
              {[
                { n: '1', t: 'Choose your product' },
                { n: '2', t: 'Select size & quantity' },
                { n: '3', t: 'Add to quote' },
                { n: '4', t: 'Submit — we call you' },
              ].map(s => (
                <div key={s.n} className="flex items-center gap-3 mb-3 last:mb-0">
                  <div className="w-6 h-6 rounded-full bg-stone-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {s.n}
                  </div>
                  <span className="text-sm text-stone-700">{s.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky bar: category filter + quote button ────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all ${
                  activeCategory === cat
                    ? 'bg-stone-800 text-white border-stone-800'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                }`}
              >
                {cat} <span className={`ml-1 ${activeCategory === cat ? 'text-stone-300' : 'text-stone-400'}`}>({counts[cat]})</span>
              </button>
            ))}
          </div>

          {/* Quote button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`flex-shrink-0 relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs transition-all border ${
              quoteItems.length > 0
                ? 'bg-stone-800 text-white border-stone-800 shadow-sm'
                : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="hidden sm:inline">Quote</span>
            {quoteItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {quoteItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── Product grid ─────────────────────────────────────────────────────── */}
      <main className="bg-stone-50 min-h-screen pb-32 md:pb-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-stone-500 mb-5">
            Showing <span className="font-semibold text-stone-800">{filtered.length}</span> products
            {activeCategory !== 'All' && <> in <span className="font-semibold text-stone-800">{activeCategory}</span></>}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handleAdd}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-400 text-sm">No products in this category yet.</p>
            </div>
          )}
        </div>
      </main>

      {/* ── Mobile sticky quote bar ───────────────────────────────────────────── */}
      {quoteItems.length > 0 && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white border-t border-stone-200">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full flex items-center justify-between bg-stone-800 text-white font-bold py-4 px-5 rounded-2xl active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center text-sm font-bold">
                {quoteItems.length}
              </div>
              <span className="text-sm">View Quote</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold">
                €{totalEst.toLocaleString('en-IE', { minimumFractionDigits: 0 })}
              </span>
              <svg className="w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      )}

      {/* ── Quote Drawer ──────────────────────────────────────────────────────── */}
      {drawerOpen && (
        <QuoteDrawer
          items={quoteItems}
          onClose={() => setDrawerOpen(false)}
          onRemove={handleRemove}
          onUpdateQty={handleUpdateQty}
        />
      )}
    </Layout>
  );
}
