"use client"
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PLAIN_PRODUCTS, CATEGORIES } from '../data/plain-products';
import PackagingIcon, { isPlaceholderImage } from '../components/PackagingIcon';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) => `€${Number(n).toFixed(2)}`;

// Price buckets for filter
const PRICE_RANGES = [
  { label: 'Any price',  min: 0,   max: Infinity },
  { label: 'Under €20', min: 0,   max: 20 },
  { label: '€20 – €50', min: 20,  max: 50 },
  { label: '€50 – €100',min: 50,  max: 100 },
  { label: 'Over €100', min: 100, max: Infinity },
];

const SORT_OPTIONS = [
  { value: 'default',   label: 'Default' },
  { value: 'name_az',   label: 'Name A → Z' },
  { value: 'name_za',   label: 'Name Z → A' },
  { value: 'price_asc', label: 'Price: Low → High' },
  { value: 'price_desc',label: 'Price: High → Low' },
];

// ─── Filter Panel (reused for sidebar + mobile sheet) ─────────────────────────
const FilterPanel = ({ categories, activeCategory, setActiveCategory, priceRange, setPriceRange, sort, setSort, onClose, isMobile }) => (
  <div className={`flex flex-col gap-6 ${isMobile ? 'p-5' : ''}`}>
    {isMobile && (
      <div className="flex items-center justify-between pb-4 border-b border-stone-100">
        <p className="font-bold text-stone-900 text-base">Filters & Sort</p>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    )}

    {/* Sort */}
    <div>
      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Sort by</p>
      <div className="flex flex-col gap-1">
        {SORT_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => setSort(opt.value)}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-left transition-all ${
              sort === opt.value ? 'bg-stone-900 text-white font-semibold' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            {sort === opt.value && <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
            {sort !== opt.value && <span className="w-3.5 h-3.5 flex-shrink-0"/>}
            {opt.label}
          </button>
        ))}
      </div>
    </div>

    {/* Price range */}
    <div>
      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Price per case</p>
      <div className="flex flex-col gap-1">
        {PRICE_RANGES.map(r => (
          <button
            key={r.label}
            onClick={() => setPriceRange(r)}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-left transition-all ${
              priceRange.label === r.label ? 'bg-stone-900 text-white font-semibold' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            {priceRange.label === r.label && <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
            {priceRange.label !== r.label && <span className="w-3.5 h-3.5 flex-shrink-0"/>}
            {r.label}
          </button>
        ))}
      </div>
    </div>

    {/* Category */}
    <div>
      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Category</p>
      <div className="flex flex-col gap-0.5 max-h-72 overflow-y-auto pr-1">
        <button
          onClick={() => setActiveCategory('All')}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-left transition-all ${
            activeCategory === 'All' ? 'bg-stone-900 text-white font-semibold' : 'text-stone-700 hover:bg-stone-100'
          }`}
        >
          {activeCategory === 'All' && <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
          {activeCategory !== 'All' && <span className="w-3.5 h-3.5 flex-shrink-0"/>}
          All categories
        </button>
        {categories.filter(c => c !== 'All').map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); if(isMobile) onClose(); }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-left transition-all ${
              activeCategory === cat ? 'bg-stone-900 text-white font-semibold' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            {activeCategory === cat && <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
            {activeCategory !== cat && <span className="w-3.5 h-3.5 flex-shrink-0"/>}
            {cat}
          </button>
        ))}
      </div>
    </div>

    {isMobile && (
      <button onClick={onClose} className="w-full bg-stone-900 text-white font-bold py-3.5 rounded-xl text-sm mt-2">
        Apply Filters
      </button>
    )}
  </div>
);

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard = ({ product, onAdd, inQuote }) => {
  const [selectedTier, setSelectedTier] = useState(product.caseTiers[0]);
  const [numCases, setNumCases] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [tiersOpen, setTiersOpen] = useState(false);

  const lineTotal = selectedTier ? numCases * selectedTier.pricePerCase : 0;

  const handleAdd = () => {
    onAdd({ product, tier: selectedTier, numCases });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className={`bg-white rounded-xl border flex flex-col transition-all duration-200 hover:shadow-md ${inQuote ? 'border-amber-300 ring-2 ring-amber-100' : 'border-stone-200 hover:border-stone-300'}`}>

      {/* Image / Icon */}
      <Link href={`/plain-packaging/${product.id}`} className="block relative rounded-t-xl overflow-hidden flex-shrink-0" style={{ paddingBottom: '48%' }}>
        {isPlaceholderImage(product.imageSrc) ? (
          <PackagingIcon
            category={product.category}
            className="absolute inset-0 w-full h-full hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Image src={product.imageSrc} alt={product.name} fill className="object-contain p-3 hover:scale-105 transition-transform duration-500" />
        )}
        {inQuote && (
          <div className="absolute top-2 right-2 z-10 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
          </div>
        )}
      </Link>

      {/* Body */}
      <div className="p-3 flex-1 flex flex-col gap-2.5">

        {/* Category chip + code */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md font-medium flex-shrink-0 truncate max-w-[120px]">{product.category}</span>
          <span className="text-xs text-stone-400 flex-shrink-0">#{product.code}</span>
        </div>

        {/* Name */}
        <div className="flex items-start justify-between gap-1.5">
          <h3 className="font-semibold text-stone-900 text-sm leading-snug line-clamp-2 flex-1">{product.name}</h3>
          <Link href={`/plain-packaging/${product.id}`} className="flex-shrink-0 text-stone-300 hover:text-stone-600 transition-colors mt-0.5" title="Full details">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </Link>
        </div>

        {product.qtyPerCase && (
          <p className="text-xs text-stone-400">{product.qtyPerCase} per case</p>
        )}

        {/* Tier picker — collapsed button / expanded list */}
        <div className="flex-1 flex flex-col justify-end gap-2">
          <div>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Volume pricing</p>
            {!tiersOpen ? (
              <button
                onClick={() => setTiersOpen(true)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-stone-900 text-white text-xs"
              >
                <span className="font-semibold">{selectedTier.casesLabel}</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-amber-300">{fmt(selectedTier.pricePerCase)}<span className="text-stone-400 font-normal">/case</span></span>
                  <svg className="w-3 h-3 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
                </div>
              </button>
            ) : (
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                {product.caseTiers.map((tier, i) => (
                  <button
                    key={tier.casesLabel}
                    onClick={() => { setSelectedTier(tier); setTiersOpen(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors border-b last:border-b-0 border-stone-100 ${
                      selectedTier.casesLabel === tier.casesLabel
                        ? 'bg-stone-900 text-white'
                        : 'bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span className="font-semibold">{tier.casesLabel}</span>
                    <span className={`font-bold ${selectedTier.casesLabel === tier.casesLabel ? 'text-amber-300' : 'text-stone-900'}`}>
                      {fmt(tier.pricePerCase)}<span className="font-normal opacity-60">/case</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cases stepper + Add to Quote */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden flex-shrink-0">
              <button onClick={() => setNumCases(Math.max(1, numCases - 1))} className="w-7 h-8 flex items-center justify-center text-stone-400 hover:bg-stone-50 font-bold text-sm">−</button>
              <span className="w-8 text-center text-sm font-semibold text-stone-900">{numCases}</span>
              <button onClick={() => setNumCases(numCases + 1)} className="w-7 h-8 flex items-center justify-center text-stone-400 hover:bg-stone-50 font-bold text-sm">+</button>
            </div>
            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-1 h-8 rounded-lg text-xs font-bold transition-all ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-900 hover:bg-black text-white active:scale-[0.97]'
              }`}
            >
              {justAdded ? (
                <><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>Added</>
              ) : (
                <><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>Add · {fmt(lineTotal)}</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Quote Line Item ──────────────────────────────────────────────────────────
const QuoteLineItem = ({ item, idx, onRemove, onUpdateTier, onUpdateCases }) => {
  const lineTotal = item.tier.pricePerCase * item.numCases;
  return (
    <tr className="border-b border-stone-100 last:border-0">
      {/* Product */}
      <td className="py-3 pr-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg border border-stone-100 overflow-hidden flex-shrink-0 relative">
            {isPlaceholderImage(item.product.imageSrc) ? (
              <PackagingIcon category={item.product.category} className="w-full h-full" />
            ) : (
              <Image src={item.product.imageSrc} alt="" fill className="object-contain p-1" />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-stone-900 leading-snug line-clamp-2">{item.product.name}</p>
            <p className="text-xs text-stone-400">#{item.product.code} · {item.product.qtyPerCase}</p>
          </div>
        </div>
      </td>
      {/* Volume tier */}
      <td className="py-3 pr-3">
        <select
          value={item.tier.casesLabel}
          onChange={e => {
            const t = item.product.caseTiers.find(t => t.casesLabel === e.target.value);
            if (t) onUpdateTier(idx, t);
          }}
          className="text-xs border border-stone-200 rounded-lg px-2 py-1.5 bg-white text-stone-700 outline-none focus:border-stone-400 w-full min-w-[100px]"
        >
          {item.product.caseTiers.map(t => (
            <option key={t.casesLabel} value={t.casesLabel}>{t.casesLabel} — {fmt(t.pricePerCase)}</option>
          ))}
        </select>
      </td>
      {/* Cases */}
      <td className="py-3 pr-3">
        <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden w-20">
          <button onClick={() => onUpdateCases(idx, Math.max(1, item.numCases - 1))} className="w-6 h-7 flex items-center justify-center text-stone-400 hover:bg-stone-50 font-bold text-xs">−</button>
          <span className="flex-1 text-center text-xs font-semibold text-stone-900">{item.numCases}</span>
          <button onClick={() => onUpdateCases(idx, item.numCases + 1)} className="w-6 h-7 flex items-center justify-center text-stone-400 hover:bg-stone-50 font-bold text-xs">+</button>
        </div>
      </td>
      {/* Unit */}
      <td className="py-3 pr-3 text-right">
        <span className="text-xs font-semibold text-stone-700">{fmt(item.tier.pricePerCase)}</span>
      </td>
      {/* Total */}
      <td className="py-3 pr-2 text-right">
        <span className="text-xs font-bold text-stone-900">{fmt(lineTotal)}</span>
      </td>
      {/* Remove */}
      <td className="py-3 pl-1">
        <button onClick={() => onRemove(idx)} className="w-6 h-6 flex items-center justify-center text-stone-300 hover:text-red-500 transition-colors rounded-full hover:bg-red-50">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </td>
    </tr>
  );
};

// ─── Quote Drawer ─────────────────────────────────────────────────────────────
const QuoteDrawer = ({ items, onClose, onRemove, onUpdateTier, onUpdateCases }) => {
  const [step, setStep] = useState('quote');
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState({});

  const subtotal = items.reduce((s, it) => s + it.tier.pricePerCase * it.numCases, 0);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    // company is optional
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    return e;
  };

  const handleSubmit = async (ev) => {
    if (ev && ev.preventDefault) ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      const lines = items.map(it =>
        `${it.product.name} [${it.product.code}] | ${it.product.qtyPerCase}/case | ${it.numCases} cases @ ${it.tier.casesLabel} | ${fmt(it.tier.pricePerCase)}/case = ${fmt(it.tier.pricePerCase * it.numCases)}`
      ).join('\n');
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Plain Packaging Quote${form.company ? ` — ${form.company}` : ''} (${items.length} line${items.length !== 1 ? 's' : ''})`,
          message: `Name: ${form.name}${form.company ? `\nCompany: ${form.company}` : ''}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nQuote Lines:\n${lines}\n\nSubtotal (estimate): ${fmt(subtotal)}\n\nNotes: ${form.notes || 'None'}`,
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
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[560px] bg-white flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 flex-shrink-0 bg-white">
          <div>
            <h2 className="font-bold text-stone-900 text-base">
              {step === 'success' ? 'Quote Submitted' : step === 'contact' ? 'Your Details' : 'Quote Summary'}
            </h2>
            {step !== 'success' && (
              <p className="text-xs text-stone-400 mt-0.5">
                {items.length} line{items.length !== 1 ? 's' : ''} · Est. <span className="font-semibold text-stone-700">{fmt(subtotal)}</span>
              </p>
            )}
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Steps */}
        {step !== 'success' && (
          <div className="flex border-b border-stone-100 flex-shrink-0 bg-white">
            {[{ k:'quote', l:'Quote Lines' }, { k:'contact', l:'Contact Details' }].map((s, i) => (
              <div key={s.k} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors border-b-2 ${
                step === s.k ? 'border-stone-900 text-stone-900' : step === 'contact' && s.k === 'quote' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-stone-400'
              }`}>
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  step === s.k ? 'bg-stone-900 text-white' : step === 'contact' && s.k === 'quote' ? 'bg-emerald-500 text-white' : 'bg-stone-100 text-stone-400'
                }`}>
                  {step === 'contact' && s.k === 'quote' ? '✓' : i + 1}
                </span>
                {s.l}
              </div>
            ))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto">

          {/* ── Step 1: Quote table ─────────────────────────────────────── */}
          {step === 'quote' && (
            <div className="p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                  </div>
                  <p className="font-semibold text-stone-700 text-sm">No items yet</p>
                  <p className="text-stone-400 text-xs mt-1">Browse products and tap Add to Quote</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="pb-2 text-xs font-bold text-stone-500 uppercase tracking-wide pr-3">Product</th>
                        <th className="pb-2 text-xs font-bold text-stone-500 uppercase tracking-wide pr-3">Tier</th>
                        <th className="pb-2 text-xs font-bold text-stone-500 uppercase tracking-wide pr-3">Cases</th>
                        <th className="pb-2 text-xs font-bold text-stone-500 uppercase tracking-wide pr-3 text-right">Unit</th>
                        <th className="pb-2 text-xs font-bold text-stone-500 uppercase tracking-wide pr-2 text-right">Total</th>
                        <th className="pb-2 w-6"/>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, idx) => (
                        <QuoteLineItem
                          key={idx}
                          item={item}
                          idx={idx}
                          onRemove={onRemove}
                          onUpdateTier={onUpdateTier}
                          onUpdateCases={onUpdateCases}
                        />
                      ))}
                    </tbody>
                  </table>

                  {/* Subtotal row */}
                  <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-400">Estimated subtotal</p>
                      <p className="text-xs text-stone-400">Final price confirmed on order</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-stone-900">{fmt(subtotal)}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Step 2: Contact form ──────────────────────────────────────── */}
          {step === 'contact' && (
            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">

              {/* Quote mini-summary */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-stone-500">{items.length} product{items.length !== 1 ? 's' : ''} · {items.reduce((s, i) => s + i.numCases, 0)} total cases</p>
                    <p className="text-lg font-bold text-stone-900 mt-0.5">{fmt(subtotal)} <span className="text-sm font-normal text-stone-400">est.</span></p>
                  </div>
                  <button type="button" onClick={() => setStep('quote')} className="text-xs text-stone-500 underline hover:text-stone-800">Edit items</button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-600 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="John Murphy" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))}
                    className={`w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none transition-all ${errors.name ? 'border-red-300 ring-2 ring-red-100' : 'border-stone-200 focus:border-stone-400 focus:ring-2 focus:ring-stone-100'}`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Company (optional) */}
                <div>
                  <label className="block text-xs font-bold text-stone-600 mb-1.5">
                    Company Name
                    <span className="ml-1.5 text-stone-400 font-normal">(optional)</span>
                  </label>
                  <input type="text" placeholder="Acme Foods Ltd" value={form.company} onChange={e => setForm(p => ({...p, company: e.target.value}))}
                    className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-xl outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 transition-all"
                  />
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-600 mb-1.5">Phone <span className="text-red-400">*</span></label>
                    <input type="tel" placeholder="+353 1 234 5678" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))}
                      className={`w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none transition-all ${errors.phone ? 'border-red-300 ring-2 ring-red-100' : 'border-stone-200 focus:border-stone-400 focus:ring-2 focus:ring-stone-100'}`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-600 mb-1.5">Email <span className="text-red-400">*</span></label>
                    <input type="email" placeholder="john@acmefoods.ie" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))}
                      className={`w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none transition-all ${errors.email ? 'border-red-300 ring-2 ring-red-100' : 'border-stone-200 focus:border-stone-400 focus:ring-2 focus:ring-stone-100'}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-stone-600 mb-1.5">Notes <span className="text-stone-400 font-normal">(optional)</span></label>
                  <textarea rows={3} placeholder="Delivery requirements, special requests, preferred delivery date…"
                    value={form.notes} onChange={e => setForm(p => ({...p, notes: e.target.value}))}
                    className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-xl outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 resize-none transition-all"
                  />
                </div>
              </div>

              <p className="text-xs text-stone-400">We will contact you to confirm stock and arrange delivery. We never share your data with third parties.</p>
            </form>
          )}

          {/* ── Step 3: Success ───────────────────────────────────────────── */}
          {step === 'success' && (
            <div className="flex flex-col items-center text-center px-6 py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-1.5">Quote Submitted!</h3>
              <p className="text-stone-500 text-sm max-w-xs mb-6">
                Thanks{form.name ? ` ${form.name.split(' ')[0]}` : ''}! We&apos;ll review your quote and respond within 1–2 business days.
              </p>

              {/* Line summary */}
              <div className="w-full text-left bg-stone-50 border border-stone-200 rounded-xl overflow-hidden mb-6">
                <div className="px-4 py-2.5 border-b border-stone-200 flex items-center justify-between">
                  <p className="text-xs font-bold text-stone-600">{items.length} line{items.length !== 1 ? 's' : ''}</p>
                  {form.company && <p className="text-xs text-stone-500">{form.company}</p>}
                </div>
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 last:border-0">
                    <div className="min-w-0 flex-1 mr-3">
                      <p className="text-xs font-semibold text-stone-800 truncate">{item.product.name}</p>
                      <p className="text-xs text-stone-400">{item.numCases} case{item.numCases !== 1 ? 's' : ''} · {item.tier.casesLabel}</p>
                    </div>
                    <p className="text-xs font-bold text-stone-900 flex-shrink-0">{fmt(item.tier.pricePerCase * item.numCases)}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between px-4 py-3 bg-stone-100">
                  <p className="text-sm font-bold text-stone-800">Subtotal</p>
                  <p className="text-sm font-bold text-stone-900">{fmt(subtotal)}</p>
                </div>
              </div>

              <button onClick={onClose} className="bg-stone-900 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-black transition-colors">
                Continue Browsing
              </button>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        {step !== 'success' && items.length > 0 && (
          <div className="p-4 border-t border-stone-100 bg-white flex-shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-stone-400">{items.length} line{items.length !== 1 ? 's' : ''} · {items.reduce((s,i) => s + i.numCases, 0)} cases</p>
                <p className="text-lg font-bold text-stone-900">{fmt(subtotal)}</p>
              </div>
              {step === 'quote' && (
                <button onClick={() => setStep('contact')} className="flex items-center gap-2 bg-stone-900 hover:bg-black text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm">
                  Next — Your Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </button>
              )}
              {step === 'contact' && (
                <div className="flex gap-2">
                  <button type="button" onClick={() => setStep('quote')} className="flex items-center justify-center w-11 h-11 border-2 border-stone-200 rounded-xl text-stone-600 hover:border-stone-300 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
                  </button>
                  <button onClick={handleSubmit} disabled={submitting} className="flex items-center gap-2 bg-stone-900 hover:bg-black disabled:opacity-60 text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm">
                    {submitting ? 'Sending…' : 'Submit Quote'}
                  </button>
                </div>
              )}
            </div>
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
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0]);
  const [sort, setSort] = useState('default');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const [visibleCategoryCount, setVisibleCategoryCount] = useState(4);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const handleAdd = useCallback(({ product, tier, numCases }) => {
    setQuoteItems(prev => {
      const i = prev.findIndex(it => it.product.id === product.id && it.tier.casesLabel === tier.casesLabel);
      if (i >= 0) return prev;
      return [...prev, { product, tier, numCases }];
    });
    setDrawerOpen(true);
  }, []);

  const handleRemove = useCallback((idx) => setQuoteItems(prev => prev.filter((_, i) => i !== idx)), []);
  const handleUpdateTier = useCallback((idx, t) => setQuoteItems(prev => prev.map((it, i) => i === idx ? {...it, tier: t} : it)), []);
  const handleUpdateCases = useCallback((idx, n) => setQuoteItems(prev => prev.map((it, i) => i === idx ? {...it, numCases: n} : it)), []);

  // Active filter count for badge
  const activeFilterCount = [
    activeCategory !== 'All',
    priceRange.label !== 'Any price',
    sort !== 'default',
  ].filter(Boolean).length;

  const filtered = useMemo(() => {
    let list = PLAIN_PRODUCTS;

    // Category
    if (activeCategory !== 'All') list = list.filter(p => p.category === activeCategory);

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.code?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q)
      );
    }

    // Price range (by lowest case tier)
    if (priceRange.min > 0 || priceRange.max !== Infinity) {
      list = list.filter(p => {
        const lowestTier = p.caseTiers.reduce((min, t) => t.pricePerCase < min ? t.pricePerCase : min, Infinity);
        return lowestTier >= priceRange.min && lowestTier < priceRange.max;
      });
    }

    // Sort
    if (sort === 'name_az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'name_za') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    else if (sort === 'price_asc') list = [...list].sort((a, b) => (a.caseTiers[0]?.pricePerCase ?? 0) - (b.caseTiers[0]?.pricePerCase ?? 0));
    else if (sort === 'price_desc') list = [...list].sort((a, b) => (b.caseTiers[0]?.pricePerCase ?? 0) - (a.caseTiers[0]?.pricePerCase ?? 0));

    return list;
  }, [activeCategory, search, priceRange, sort]);

  const quoteIds = useMemo(() => new Set(quoteItems.map(it => it.product.id)), [quoteItems]);
  const totalEst = quoteItems.reduce((s, it) => s + it.tier.pricePerCase * it.numCases, 0);

  // Category counts for browse section
  const categoryCounts = useMemo(() => {
    const c = {};
    PLAIN_PRODUCTS.forEach(p => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, []);

  const categoriesWithCount = useMemo(() =>
    CATEGORIES.filter(c => c !== 'All')
      .map(cat => ({ name: cat, count: categoryCounts[cat] || 0 }))
      .sort((a, b) => b.count - a.count),
    [categoryCounts]
  );

  const clearAllFilters = () => {
    setActiveCategory('All');
    setPriceRange(PRICE_RANGES[0]);
    setSort('default');
    setSearch('');
    setCurrentPage(1);
  };

  // Reset to page 1 whenever filters/search/sort change
  const handleCategoryChange = (c) => { setActiveCategory(c); setCurrentPage(1); };
  const handlePriceChange = (r) => { setPriceRange(r); setCurrentPage(1); };
  const handleSortChange = (s) => { setSort(s); setCurrentPage(1); };
  const handleSearchChange = (v) => { setSearch(v); setCurrentPage(1); };

  const PER_PAGE_OPTIONS = [30, 50, 100, 200, 'All'];
  const totalFiltered = filtered.length;
  const effectivePerPage = perPage === 'All' ? totalFiltered : perPage;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / effectivePerPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * effectivePerPage, safePage * effectivePerPage);

  // Page window for pagination bar (max 7 buttons)
  const pageWindow = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const delta = 2;
    const left = Math.max(2, safePage - delta);
    const right = Math.min(totalPages - 1, safePage + delta);
    const pages = [1];
    if (left > 2) pages.push('…');
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push('…');
    pages.push(totalPages);
    return pages;
  }, [totalPages, safePage]);

  return (
    <Layout>
      <Head>
        <title>Plain Packaging — Wholesale Catering Supplies | PrintNPack Ireland</title>
        <meta name="description" content="841 plain unbranded packaging products. Napkins, bags, boxes, cups and more. Tiered case pricing, fast delivery across Ireland." />
      </Head>

      {/* ── Page header ───────────────────────────────────────────────────────── */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-4">
            <Link href="/" className="hover:text-stone-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-700 font-medium">Plain Packaging</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold text-stone-900">Plain Packaging</h1>
              <p className="text-sm text-stone-500 mt-1">841 products · 57 categories · 4-tier volume pricing</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg font-semibold">B2B Wholesale</span>
              <span className="text-xs bg-stone-100 border border-stone-200 text-stone-600 px-3 py-1.5 rounded-lg font-semibold">No min. order</span>
              <span className="text-xs bg-stone-100 border border-stone-200 text-stone-600 px-3 py-1.5 rounded-lg font-semibold">Ireland delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Browse by category: 4 visible, then "Show 4 more" (max 12), then "View all" → modal ── */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-stone-900">Browse by category</h2>
              <p className="text-xs text-stone-500 mt-0.5 truncate">{categoriesWithCount.length} categories</p>
            </div>
            {activeCategory !== 'All' && (
              <button
                onClick={() => handleCategoryChange('All')}
                className="text-xs font-semibold text-stone-500 hover:text-stone-900 underline underline-offset-2 flex-shrink-0"
              >
                Show all
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {/* All */}
            <button
              onClick={() => handleCategoryChange('All')}
              className={`flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all duration-200 ${
                activeCategory === 'All'
                  ? 'border-stone-900 bg-stone-900 text-white shadow-md ring-2 ring-stone-300 ring-offset-1'
                  : 'border-stone-200 bg-stone-50/50 hover:border-stone-400 hover:shadow-sm hover:bg-stone-100/80'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-1.5 ${activeCategory === 'All' ? 'bg-white/20' : 'bg-stone-200'}`}>
                <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </div>
              <span className="text-xs font-semibold leading-tight">All</span>
              <span className={`text-[10px] mt-0.5 ${activeCategory === 'All' ? 'text-stone-300' : 'text-stone-400'}`}>{PLAIN_PRODUCTS.length}</span>
            </button>
            {categoriesWithCount.slice(0, Math.min(visibleCategoryCount, 12)).map(({ name, count }) => (
              <button
                key={name}
                onClick={() => handleCategoryChange(name)}
                className={`flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all duration-200 ${
                  activeCategory === name
                    ? 'border-stone-900 bg-stone-900 text-white shadow-md ring-2 ring-stone-300 ring-offset-1'
                    : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-sm hover:bg-stone-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-1.5 overflow-hidden flex-shrink-0 ${activeCategory === name ? 'bg-white/20' : 'bg-stone-100'}`}>
                  <PackagingIcon category={name} className="w-full h-full min-w-[40px] min-h-[40px]" />
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-2">{name}</span>
                <span className={`text-[10px] mt-0.5 ${activeCategory === name ? 'text-stone-300' : 'text-stone-400'}`}>{count}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {visibleCategoryCount < 12 && visibleCategoryCount < categoriesWithCount.length ? (
              <button
                onClick={() => setVisibleCategoryCount(prev => Math.min(prev + 4, 12))}
                className="text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg transition-colors"
              >
                Show 4 more
              </button>
            ) : null}
            {categoriesWithCount.length > 12 && (
              <button
                onClick={() => setCategoryModalOpen(true)}
                className="text-xs font-semibold text-stone-700 bg-stone-200 hover:bg-stone-300 px-3 py-1.5 rounded-lg transition-colors"
              >
                View all {categoriesWithCount.length} categories
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Category picker modal (all 57) ─────────────────────────────────────── */}
      {categoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setCategoryModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-stone-200">
              <h3 className="text-lg font-bold text-stone-900">Choose category</h3>
              <button onClick={() => setCategoryModalOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="overflow-y-auto p-3 flex-1 min-h-0">
              <button
                onClick={() => { handleCategoryChange('All'); setCategoryModalOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors mb-1 ${
                  activeCategory === 'All' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'
                }`}
              >
                <span className="font-semibold text-sm">All</span>
                <span className={`text-xs ml-auto ${activeCategory === 'All' ? 'text-stone-300' : 'text-stone-400'}`}>{PLAIN_PRODUCTS.length} products</span>
              </button>
              {categoriesWithCount.map(({ name, count }) => (
                <button
                  key={name}
                  onClick={() => { handleCategoryChange(name); setCategoryModalOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                    activeCategory === name ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100">
                    <PackagingIcon category={name} className="w-full h-full min-w-[32px] min-h-[32px]" />
                  </div>
                  <span className="font-medium text-sm flex-1 truncate">{name}</span>
                  <span className={`text-xs flex-shrink-0 ${activeCategory === name ? 'text-stone-300' : 'text-stone-400'}`}>{count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Sticky top bar: search + filter trigger + quote ────────────────────── */}
      <div className="sticky top-0 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-2">

          {/* Search */}
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name, code, or category…"
              value={search}
              onChange={e => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-stone-200 rounded-xl outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-100 bg-stone-50 transition-all"
            />
            {search && (
              <button onClick={() => handleSearchChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
          </div>

          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className={`relative lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex-shrink-0 ${
              activeFilterCount > 0 ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/></svg>
            Filters
            {activeFilterCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 min-w-[1.1rem] bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center px-0.5">{activeFilterCount}</span>
            )}
          </button>

          {/* Quote button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex-shrink-0 ${
              quoteItems.length > 0 ? 'bg-stone-900 text-white border-stone-900 shadow-sm' : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            <span>Quote</span>
            {quoteItems.length > 0 && (
              <span className="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[1.1rem] text-center">{quoteItems.length}</span>
            )}
          </button>
        </div>

        {/* Quick category chips: top categories always visible when sticky */}
        <div className="border-t border-stone-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-medium text-stone-400 flex-shrink-0">Quick:</span>
            <button
              onClick={() => handleCategoryChange('All')}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'All' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All
            </button>
            {categoriesWithCount.slice(0, 10).map(({ name, count }) => (
              <button
                key={name}
                onClick={() => handleCategoryChange(name)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  activeCategory === name ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {name} <span className="opacity-70">({count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active filter chips row */}
        {activeFilterCount > 0 && (
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-2 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-stone-400">Active:</span>
            {activeCategory !== 'All' && (
              <button onClick={() => handleCategoryChange('All')} className="flex items-center gap-1 text-xs bg-stone-900 text-white px-2.5 py-1 rounded-lg font-semibold hover:bg-black transition-colors">
                {activeCategory} <svg className="w-2.5 h-2.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
            {priceRange.label !== 'Any price' && (
              <button onClick={() => handlePriceChange(PRICE_RANGES[0])} className="flex items-center gap-1 text-xs bg-stone-900 text-white px-2.5 py-1 rounded-lg font-semibold hover:bg-black transition-colors">
                {priceRange.label} <svg className="w-2.5 h-2.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
            {sort !== 'default' && (
              <button onClick={() => handleSortChange('default')} className="flex items-center gap-1 text-xs bg-stone-900 text-white px-2.5 py-1 rounded-lg font-semibold hover:bg-black transition-colors">
                {SORT_OPTIONS.find(o => o.value === sort)?.label} <svg className="w-2.5 h-2.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            )}
            <button onClick={clearAllFilters} className="text-xs text-stone-500 underline underline-offset-2 hover:text-stone-900 transition-colors">Clear all</button>
          </div>
        )}
      </div>

      {/* ── Main layout: sidebar + grid ────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 flex gap-6 items-start">

        {/* ── Desktop sidebar ────────────────────────────────────────────────── */}
        <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-[88px]">
          <div className="bg-white border border-stone-200 rounded-2xl p-4">
            <FilterPanel
              categories={CATEGORIES}
              activeCategory={activeCategory}
              setActiveCategory={handleCategoryChange}
              priceRange={priceRange}
              setPriceRange={handlePriceChange}
              sort={sort}
              setSort={handleSortChange}
              isMobile={false}
            />
          </div>
        </aside>

        {/* ── Product grid ────────────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Result count + sort + per-page */}
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <p className="text-xs text-stone-500">
              <span className="font-semibold text-stone-800">{totalFiltered.toLocaleString()}</span> product{totalFiltered !== 1 ? 's' : ''}
              {activeCategory !== 'All' && <> in <span className="font-medium">{activeCategory}</span></>}
              {perPage !== 'All' && totalPages > 1 && (
                <> · page <span className="font-medium">{safePage}</span> of <span className="font-medium">{totalPages}</span></>
              )}
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-stone-400 hidden sm:inline">Sort:</span>
              <select
                value={sort}
                onChange={e => handleSortChange(e.target.value)}
                className="text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 bg-white text-stone-700 outline-none focus:border-stone-400 transition-colors"
              >
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <span className="text-xs text-stone-400 hidden sm:inline">Show:</span>
              <select
                value={perPage}
                onChange={e => { setPerPage(e.target.value === 'All' ? 'All' : Number(e.target.value)); setCurrentPage(1); }}
                className="text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 bg-white text-stone-700 outline-none focus:border-stone-400 transition-colors"
              >
                {PER_PAGE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {totalFiltered === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
              <p className="text-stone-400 text-sm mb-2">No products found</p>
              <button onClick={clearAllFilters} className="text-xs text-stone-500 underline hover:text-stone-900">Clear all filters</button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {paginated.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={handleAdd}
                    inQuote={quoteIds.has(product.id)}
                  />
                ))}
              </div>

              {/* Pagination bar */}
              {perPage !== 'All' && totalPages > 1 && (
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Info */}
                  <p className="text-xs text-stone-400 order-2 sm:order-1">
                    Showing {((safePage - 1) * effectivePerPage) + 1}–{Math.min(safePage * effectivePerPage, totalFiltered)} of {totalFiltered.toLocaleString()}
                  </p>

                  {/* Page buttons */}
                  <div className="flex items-center gap-1 order-1 sm:order-2">
                    {/* Prev */}
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={safePage === 1}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:border-stone-400 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/></svg>
                    </button>

                    {pageWindow.map((pg, i) =>
                      pg === '…' ? (
                        <span key={`ellipsis-${i}`} className="w-8 h-8 flex items-center justify-center text-stone-400 text-xs">…</span>
                      ) : (
                        <button
                          key={pg}
                          onClick={() => setCurrentPage(pg)}
                          className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold transition-all ${
                            safePage === pg
                              ? 'bg-stone-900 text-white border border-stone-900'
                              : 'border border-stone-200 text-stone-600 hover:border-stone-400 hover:bg-stone-50'
                          }`}
                        >
                          {pg}
                        </button>
                      )
                    )}

                    {/* Next */}
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={safePage === totalPages}
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:border-stone-400 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* ── Mobile filter sheet ────────────────────────────────────────────────── */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto lg:hidden">
            <div className="w-10 h-1 bg-stone-200 rounded-full mx-auto mt-3 mb-2" />
            <FilterPanel
              categories={CATEGORIES}
              activeCategory={activeCategory}
              setActiveCategory={handleCategoryChange}
              priceRange={priceRange}
              setPriceRange={handlePriceChange}
              sort={sort}
              setSort={handleSortChange}
              onClose={() => setMobileFiltersOpen(false)}
              isMobile
            />
          </div>
        </>
      )}

      {/* ── Mobile sticky quote bar ────────────────────────────────────────────── */}
      {quoteItems.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white border-t border-stone-200">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full flex items-center justify-between bg-stone-900 text-white font-bold py-3.5 px-5 rounded-2xl active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center text-sm font-bold flex-shrink-0">{quoteItems.length}</div>
              <span className="text-sm">View Quote</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold">{fmt(totalEst)}</span>
              <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
        </div>
      )}

      {/* ── Quote Drawer ───────────────────────────────────────────────────────── */}
      {drawerOpen && (
        <QuoteDrawer
          items={quoteItems}
          onClose={() => setDrawerOpen(false)}
          onRemove={handleRemove}
          onUpdateTier={handleUpdateTier}
          onUpdateCases={handleUpdateCases}
        />
      )}
    </Layout>
  );
}
