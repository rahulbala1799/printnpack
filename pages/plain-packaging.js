import React, { useState, useCallback, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// ─── Placeholder product catalogue ────────────────────────────────────────────
const PLAIN_PRODUCTS = [
  {
    id: 'plain-pizza-boxes',
    name: 'Plain Pizza Boxes',
    tagline: 'Single-wall corrugated, food-safe',
    category: 'Boxes',
    imageSrc: '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    material: 'Corrugated cardboard — B-flute, food-safe',
    moq: 500,
    sizes: ['7"', '9"', '10"', '12"', '14"'],
    qtyBreaks: [
      { qty: 500,   label: '500',  price: 0.65 },
      { qty: 1000,  label: '1,000', price: 0.52 },
      { qty: 2500,  label: '2,500', price: 0.40 },
      { qty: 5000,  label: '5,000', price: 0.32 },
    ],
    leadTime: '5–7 days',
    tag: '#1 seller',
  },
  {
    id: 'plain-brown-kraft-bags',
    name: 'Plain Brown Kraft Bags',
    tagline: 'Twisted handle, sturdy kraft paper',
    category: 'Bags',
    imageSrc: '/images/paper-bags/PAPER_BAG_1.jpg',
    material: '90gsm recycled kraft — twisted paper handle',
    moq: 500,
    sizes: ['Small', 'Medium', 'Large', 'XL'],
    qtyBreaks: [
      { qty: 500,   label: '500',  price: 0.28 },
      { qty: 1000,  label: '1,000', price: 0.22 },
      { qty: 2500,  label: '2,500', price: 0.16 },
      { qty: 5000,  label: '5,000', price: 0.12 },
    ],
    leadTime: '5–7 days',
    tag: 'Eco-friendly',
  },
  {
    id: 'plain-white-carrier-bags',
    name: 'Plain White Carrier Bags',
    tagline: 'Flat handle, bright white glossy',
    category: 'Bags',
    imageSrc: '/images/paper-bags/PAPER_BAG_1.jpg',
    material: '120gsm coated paper — flat handle',
    moq: 500,
    sizes: ['Small', 'Medium', 'Large', 'XL'],
    qtyBreaks: [
      { qty: 500,   label: '500',  price: 0.35 },
      { qty: 1000,  label: '1,000', price: 0.28 },
      { qty: 2500,  label: '2,500', price: 0.20 },
      { qty: 5000,  label: '5,000', price: 0.16 },
    ],
    leadTime: '5–7 days',
    tag: null,
  },
  {
    id: 'plain-white-napkins',
    name: 'Plain White Napkins',
    tagline: '2-ply, soft-fold, catering grade',
    category: 'Napkins',
    imageSrc: '/images/napkins/NAPKIN_1.jpg',
    material: '2-ply virgin tissue — quarter-fold',
    moq: 1000,
    sizes: ['33×33cm', '40×40cm'],
    qtyBreaks: [
      { qty: 1000,  label: '1,000',  price: 0.08 },
      { qty: 2500,  label: '2,500',  price: 0.06 },
      { qty: 5000,  label: '5,000',  price: 0.04 },
      { qty: 10000, label: '10,000', price: 0.03 },
    ],
    leadTime: '3–5 days',
    tag: 'Fast dispatch',
  },
  {
    id: 'plain-corrugated-mailers',
    name: 'Plain Corrugated Mailer Boxes',
    tagline: 'Self-lock, no tape required',
    category: 'Mailers',
    imageSrc: '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    material: 'E-flute corrugated board — plain brown',
    moq: 250,
    sizes: ['A5', 'A4', 'A3', 'Custom'],
    qtyBreaks: [
      { qty: 250,   label: '250',  price: 0.95 },
      { qty: 500,   label: '500',  price: 0.75 },
      { qty: 1000,  label: '1,000', price: 0.60 },
      { qty: 2500,  label: '2,500', price: 0.45 },
    ],
    leadTime: '7–10 days',
    tag: null,
  },
  {
    id: 'plain-sos-grab-bags',
    name: 'Plain SOS Grab Bags',
    tagline: 'Square-bottom, ideal for takeaway',
    category: 'Bags',
    imageSrc: '/images/paper-bags/PAPER_BAG_1.jpg',
    material: '80gsm kraft — SOS square-bottom',
    moq: 500,
    sizes: ['Small', 'Medium', 'Large'],
    qtyBreaks: [
      { qty: 500,   label: '500',  price: 0.32 },
      { qty: 1000,  label: '1,000', price: 0.25 },
      { qty: 2500,  label: '2,500', price: 0.18 },
      { qty: 5000,  label: '5,000', price: 0.14 },
    ],
    leadTime: '5–7 days',
    tag: 'Takeaway favourite',
  },
  {
    id: 'plain-flat-paper-bags',
    name: 'Plain Flat Paper Bags',
    tagline: 'Gusseted, ideal for bakeries & delis',
    category: 'Bags',
    imageSrc: '/images/paper-bags/PAPER_BAG_1.jpg',
    material: '60gsm greaseproof-lined kraft',
    moq: 500,
    sizes: ['Small', 'Medium', 'Large'],
    qtyBreaks: [
      { qty: 500,   label: '500',  price: 0.20 },
      { qty: 1000,  label: '1,000', price: 0.16 },
      { qty: 2500,  label: '2,500', price: 0.12 },
      { qty: 5000,  label: '5,000', price: 0.09 },
    ],
    leadTime: '5–7 days',
    tag: null,
  },
];

const CATEGORIES = ['All', 'Boxes', 'Bags', 'Napkins', 'Mailers'];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) => `€${n.toFixed(2)}`;
const fmtTotal = (price, qty) => {
  const t = price * qty;
  return `€${t.toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, onAdd, addedId }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedBreak, setSelectedBreak] = useState(product.qtyBreaks[0]);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAdd({ product, size: selectedSize, qtyBreak: selectedBreak });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const itemKey = `${product.id}::${selectedSize}::${selectedBreak.qty}`;
  const alreadyInQuote = addedId === itemKey;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 group">
      {/* Image */}
      <div className="relative bg-gray-50 overflow-hidden" style={{ paddingBottom: '58%' }}>
        <div className="absolute inset-0">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-103 transition-transform duration-500"
            onError={() => {}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-sm uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Tag badge */}
        {product.tag && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500 text-white shadow-sm">
              {product.tag}
            </span>
          </div>
        )}

        {/* Lead time */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-white/90 text-gray-700 backdrop-blur-sm">
            <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {product.leadTime}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        {/* Title */}
        <div>
          <h3 className="font-bold text-gray-900 text-base leading-snug">{product.name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">{product.material}</p>
        </div>

        {/* Size selector */}
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Size</div>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
                  selectedSize === size
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Qty / Price breaks */}
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            Volume Pricing
            <span className="text-orange-500 font-bold text-xs normal-case tracking-normal">— select qty</span>
          </div>
          <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-gray-200">
            {/* Header row */}
            {product.qtyBreaks.map((b, i) => (
              <div
                key={`h-${i}`}
                className={`text-center text-xs font-bold py-1.5 border-b transition-colors ${
                  selectedBreak.qty === b.qty
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-gray-50 text-gray-500 border-gray-200'
                } ${i > 0 ? 'border-l border-gray-200' : ''}`}
              >
                {b.label}
              </div>
            ))}
            {/* Price row (clickable) */}
            {product.qtyBreaks.map((b, i) => (
              <button
                key={`p-${i}`}
                onClick={() => setSelectedBreak(b)}
                className={`text-center text-xs font-semibold py-2 transition-all cursor-pointer ${
                  selectedBreak.qty === b.qty
                    ? 'bg-orange-50 text-orange-700 font-bold'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${i > 0 ? 'border-l border-gray-200' : ''}`}
              >
                {fmt(b.price)}
                <span className="block text-gray-400 font-normal" style={{ fontSize: '9px' }}>/ unit</span>
              </button>
            ))}
          </div>
        </div>

        {/* Estimate row */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-xs text-gray-500">
            Est. total for <span className="font-semibold text-gray-800">{selectedBreak.label} units</span>
          </div>
          <div className="text-sm font-extrabold text-orange-600">
            {fmtTotal(selectedBreak.price, selectedBreak.qty)}
          </div>
        </div>

        {/* Add to quote */}
        <button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
            justAdded
              ? 'bg-green-500 text-white scale-95'
              : 'bg-orange-500 hover:bg-orange-600 text-white active:scale-95 shadow-sm shadow-orange-200'
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
              Add to Quote
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
    e.preventDefault();
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
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] bg-white flex flex-col shadow-2xl animate-slide-in-right">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-950 text-white flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm">Quote Builder</div>
              <div className="text-xs text-gray-400">{items.length} item{items.length !== 1 ? 's' : ''}</div>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-gray-300 hover:text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step progress (only show in review/form) */}
        {step !== 'success' && (
          <div className="flex border-b border-gray-100 flex-shrink-0">
            {['review', 'form'].map((s, i) => (
              <div
                key={s}
                className={`flex-1 py-2.5 text-center text-xs font-bold uppercase tracking-wider transition-colors ${
                  step === s
                    ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50'
                    : step === 'form' && s === 'review'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-400 bg-white'
                }`}
              >
                {i + 1}. {s === 'review' ? 'Review Items' : 'Your Details'}
                {step === 'form' && s === 'review' && (
                  <svg className="inline w-3.5 h-3.5 ml-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">

          {/* STEP 1: Review Items */}
          {step === 'review' && (
            <div className="p-4 flex flex-col gap-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-700 text-sm">Your quote is empty</p>
                  <p className="text-gray-400 text-xs mt-1">Select a product, size &amp; quantity then click &ldquo;Add to Quote&rdquo;</p>
                </div>
              ) : (
                items.map((item, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                    {/* Item header */}
                    <div className="flex items-start gap-3 p-3">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 relative">
                        <Image src={item.product.imageSrc} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 text-sm leading-tight truncate">{item.product.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">Size: <span className="font-semibold text-gray-700">{item.size}</span></div>
                      </div>
                      <button
                        onClick={() => onRemove(idx)}
                        className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        aria-label="Remove"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Qty selector inline */}
                    <div className="px-3 pb-3">
                      <div className="text-xs text-gray-400 mb-1.5 font-medium">Adjust quantity:</div>
                      <div className="grid grid-cols-4 overflow-hidden rounded-xl border border-gray-200">
                        {item.product.qtyBreaks.map((b, bi) => (
                          <button
                            key={bi}
                            onClick={() => onUpdateQty(idx, b)}
                            className={`text-center py-2 transition-all ${
                              item.qtyBreak.qty === b.qty
                                ? 'bg-orange-500 text-white font-bold'
                                : 'bg-white text-gray-600 hover:bg-orange-50 text-xs'
                            } ${bi > 0 ? 'border-l border-gray-200' : ''}`}
                          >
                            <div className="text-xs font-bold leading-tight">{b.label}</div>
                            <div className={`font-semibold leading-tight ${item.qtyBreak.qty === b.qty ? 'text-orange-100 text-xs' : 'text-gray-500 text-xs'}`}>
                              {fmt(b.price)}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Line total */}
                    <div className="flex items-center justify-between px-3 py-2 bg-orange-50 border-t border-orange-100">
                      <span className="text-xs text-gray-500">{item.qtyBreak.label} units @ {fmt(item.qtyBreak.price)}</span>
                      <span className="font-extrabold text-orange-600 text-sm">{fmtTotal(item.qtyBreak.price, item.qtyBreak.qty)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* STEP 2: Contact form */}
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3">
                <div className="text-xs font-semibold text-orange-700 mb-0.5">Your quote summary</div>
                <div className="text-xs text-orange-600">{items.length} product{items.length !== 1 ? 's' : ''} · Est. total{' '}
                  <span className="font-extrabold">€{total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}</span>
                </div>
              </div>

              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Murphy' },
                { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Foods Ltd' },
                { id: 'email', label: 'Work Email', type: 'email', placeholder: 'john@acmefoods.ie' },
                { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+353 1 234 5678' },
              ].map(f => (
                <div key={f.id}>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    {f.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                    className={`w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none transition-all ${
                      errors[f.id]
                        ? 'border-red-400 ring-2 ring-red-100 bg-red-50'
                        : 'border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white'
                    }`}
                  />
                  {errors[f.id] && <p className="text-xs text-red-500 mt-1">{errors[f.id]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Delivery requirements, artwork notes, special requests…"
                  value={form.notes}
                  onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white resize-none"
                />
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                By submitting, you agree we may contact you regarding this quote. We never share your data.
              </p>
            </form>
          )}

          {/* STEP 3: Success */}
          {step === 'success' && (
            <div className="flex flex-col items-center justify-center text-center px-6 py-16">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Quote Submitted!</h3>
              <p className="text-gray-500 text-sm max-w-xs mb-6">
                Thanks {form.name.split(' ')[0]}! Our team will review your quote and get back to you within 1 business day.
              </p>
              <div className="w-full space-y-2">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs bg-gray-50 rounded-xl px-3 py-2">
                    <span className="font-medium text-gray-700">{item.product.name} ({item.size})</span>
                    <span className="font-bold text-orange-600">{fmtTotal(item.qtyBreak.price, item.qtyBreak.qty)}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between text-sm bg-orange-50 rounded-xl px-3 py-2.5 border border-orange-100">
                  <span className="font-bold text-gray-800">Estimated Total</span>
                  <span className="font-extrabold text-orange-600">€{total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-6 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        {step !== 'success' && items.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-white flex-shrink-0">
            {/* Total estimate */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500 font-medium">Estimated total</span>
              <span className="text-lg font-extrabold text-orange-600">
                €{total.toLocaleString('en-IE', { minimumFractionDigits: 0 })}
              </span>
            </div>

            {step === 'review' && (
              <button
                onClick={() => setStep('form')}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm shadow-orange-200 text-sm"
              >
                Proceed to Request Quote
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
                  className="flex-shrink-0 flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 font-semibold text-sm hover:border-gray-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>Submit Quote Request</>
                  )}
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
  const [lastAddedKey, setLastAddedKey] = useState(null);
  const [flashCount, setFlashCount] = useState(0);

  const handleAdd = useCallback(({ product, size, qtyBreak }) => {
    const key = `${product.id}::${size}::${qtyBreak.qty}`;
    setLastAddedKey(key);
    setQuoteItems(prev => {
      const existing = prev.findIndex(
        it => it.product.id === product.id && it.size === size && it.qtyBreak.qty === qtyBreak.qty
      );
      if (existing >= 0) {
        // Already in quote — just flash
        return prev;
      }
      return [...prev, { product, size, qtyBreak }];
    });
    setFlashCount(c => c + 1);
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

  // Category counts
  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? PLAIN_PRODUCTS.length : PLAIN_PRODUCTS.filter(p => p.category === cat).length;
    return acc;
  }, {});

  const totalQty = quoteItems.reduce((s, it) => s + it.qtyBreak.qty, 0);
  const totalEst = quoteItems.reduce((s, it) => s + it.qtyBreak.price * it.qtyBreak.qty, 0);

  return (
    <Layout>
      <Head>
        <title>Plain Packaging — Unbranded B2B Stock | PrintNPack Ireland</title>
        <meta
          name="description"
          content="Order plain, unbranded packaging in bulk. Boxes, bags, napkins and mailers. Volume pricing, fast 5–7 day delivery across Ireland."
        />
      </Head>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-64 bg-amber-400 rounded-full opacity-5 blur-3xl" />
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            <Link href="/products" className="hover:text-orange-400 transition-colors">Products</Link>
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            <span className="text-gray-300">Plain Packaging</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                No branding required
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-3">
                Plain Packaging
                <span className="block text-orange-400 text-3xl sm:text-4xl mt-1">In Bulk. Fast.</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
                Quality plain stock for food service, retail &amp; hospitality. No artwork needed — select your size, choose your volume, add to quote.
              </p>
            </div>

            {/* How it works */}
            <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[220px]">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">How it works</div>
              {[
                { n: '1', t: 'Select size & qty' },
                { n: '2', t: 'Add to quote' },
                { n: '3', t: 'Submit — we call you' },
              ].map(s => (
                <div key={s.n} className="flex items-center gap-2.5 mb-2 last:mb-0">
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                    {s.n}
                  </div>
                  <span className="text-sm text-gray-200 font-medium">{s.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-6 sm:gap-10">
            {[
              { v: `${PLAIN_PRODUCTS.length}`, l: 'Products in stock' },
              { v: 'From €0.03', l: 'per unit' },
              { v: '5–7 day', l: 'delivery' },
              { v: 'MOQ 250', l: 'minimum order' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-xl font-extrabold text-orange-400">{s.v}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky category filter + Quote FAB ───────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl transition-all border ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
                <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold ${
                  activeCategory === cat ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {counts[cat]}
                </span>
              </button>
            ))}
          </div>

          {/* Quote button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`flex-shrink-0 relative flex items-center gap-2 py-2 px-4 rounded-xl font-bold text-xs transition-all ${
              quoteItems.length > 0
                ? 'bg-orange-500 text-white shadow-md shadow-orange-200 hover:bg-orange-600'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="hidden sm:inline">Quote</span>
            {quoteItems.length > 0 && (
              <span className={`${flashCount > 0 ? '' : ''} absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-900 text-white text-xs font-extrabold rounded-full flex items-center justify-center border-2 border-white`}>
                {quoteItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── Products grid ────────────────────────────────────────────────── */}
      <main className="bg-gray-50 min-h-screen pb-32 md:pb-16">
        <div className="container mx-auto px-4 py-8">

          {/* Count row */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">{filtered.length}</span> products
              {activeCategory !== 'All' && <span> in <span className="font-semibold text-orange-600">{activeCategory}</span></span>}
            </p>
            <p className="text-xs text-gray-400 hidden sm:block">
              Click a price tier to select quantity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handleAdd}
                addedId={lastAddedKey}
              />
            ))}
          </div>

          {/* Empty */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-sm">No products in this category yet.</p>
            </div>
          )}
        </div>
      </main>

      {/* ── Mobile sticky quote bar ──────────────────────────────────────── */}
      {quoteItems.length > 0 && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white border-t border-gray-200 shadow-2xl safe-area-bottom">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full flex items-center justify-between bg-orange-500 text-white font-bold py-4 px-5 rounded-2xl shadow-lg shadow-orange-300/50 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-sm font-extrabold">{quoteItems.length}</span>
              </div>
              <span className="text-sm">View Quote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-xs text-orange-200 font-normal">Est. total</div>
                <div className="text-base font-extrabold leading-none">
                  €{totalEst.toLocaleString('en-IE', { minimumFractionDigits: 0 })}
                </div>
              </div>
              <svg className="w-5 h-5 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      )}

      {/* ── Quote Drawer ─────────────────────────────────────────────────── */}
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
