import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_WHATSAPP_URL } from '../../lib/site';
import { trackFunnel } from '../../lib/track-funnel';

const PRODUCTS = [
  {
    id: 'bags',
    name: 'Paper bags',
    label: 'Bags',
    points: ['Quick turnaround', 'Low MOQ', 'From 20 bags'],
    line: 'Rope-handle carrier bags printed with your logo, for cafés and shops across Ireland.',
    href: '/twisted-handle-paper-bags-ireland',
    links: [
      { label: 'Flat handle bags', href: '/printed-flat-handle-bags-ireland' },
      { label: 'Twisted handle', href: '/twisted-handle-paper-bags-ireland' },
      { label: 'All paper bags', href: '/paper-bags-ireland' },
    ],
    panel: '#1e4b7a',
    image: '/images/hero/month/paper-bags-harbour.webp',
    thumb: '/images/hero/month/paper-bags-harbour-thumb.webp',
    alt: 'Custom printed paper bags with rope handles, low minimum order, Ireland',
    glow: 'rgba(147, 197, 253, 0.85)',
    glow2: 'rgba(196, 181, 253, 0.7)',
  },
  {
    id: 'napkins',
    name: 'Airlaid napkins',
    label: 'Napkins',
    points: ['Quick turnaround', 'Low MOQ', 'Cloth feel'],
    line: 'Printed airlaid napkins for restaurants, hotels and events.',
    href: '/products/premium-linen-feel-napkins',
    links: [
      { label: 'Cocktail napkins', href: '/products/cocktail-napkins' },
      { label: 'Custom printed napkins', href: '/products/premium-linen-feel-napkins' },
      { label: 'All napkins', href: '/napkins-ireland' },
    ],
    panel: '#1a4550',
    image: '/images/hero/month/airlaid-napkins.webp',
    thumb: '/images/hero/month/airlaid-napkins-thumb.webp',
    alt: 'Custom printed airlaid napkins with a cloth feel, quick turnaround, Ireland',
    glow: 'rgba(186, 230, 253, 0.9)',
    glow2: 'rgba(221, 214, 254, 0.75)',
  },
  {
    id: 'banner',
    name: 'Free standing banners',
    label: 'Banner',
    points: ['Quick turnaround', 'Low MOQ', 'Fabric stand'],
    line: 'Stretch fabric banner stands for exhibitions, shops and receptions.',
    href: '/fabric-banner-stands-ireland',
    links: [
      { label: 'Fabric stands', href: '/fabric-banner-stands-ireland' },
      { label: 'Roll-up banners', href: '/roll-up-banners-ireland' },
      { label: 'All banners', href: '/banners-ireland' },
    ],
    panel: '#243056',
    image: '/images/hero/month/fabric-banner.webp',
    thumb: '/images/hero/month/fabric-banner-thumb.webp',
    alt: 'Free standing stretch fabric banner stand for exhibitions in Ireland',
    glow: 'rgba(125, 211, 252, 0.8)',
    glow2: 'rgba(165, 243, 252, 0.7)',
  },
  {
    id: 'flags',
    name: 'Custom flags',
    label: 'Flags',
    points: ['Quick turnaround', 'Low MOQ', 'From one flag'],
    line: 'Feather flags and pole flags, printed in full colour for cafés, clubs and events.',
    href: '/custom-printed-flags-ireland',
    links: [
      { label: 'Beach flags', href: '/beach-flags-ireland' },
      { label: 'Custom flags', href: '/custom-printed-flags-ireland' },
      { label: 'All flags', href: '/flags-ireland' },
    ],
    panel: '#3a4630',
    image: '/images/hero/month/flags.webp',
    thumb: '/images/hero/month/flags-thumb.webp',
    alt: 'Custom printed feather flag and pole flag, from one flag, Ireland',
    glow: 'rgba(253, 186, 116, 0.75)',
    glow2: 'rgba(153, 246, 228, 0.7)',
  },
  {
    id: 'pizza',
    name: 'Pizza boxes',
    label: 'Pizza boxes',
    points: ['Quick turnaround', 'Low MOQ', 'Your logo'],
    line: 'Kraft pizza boxes printed for takeaways and pizzerias in Ireland.',
    href: '/custom-pizza-boxes-ireland',
    links: [
      { label: 'Pizza boxes', href: '/custom-pizza-boxes-ireland' },
      { label: 'Cake boxes', href: '/custom-cake-boxes-ireland' },
      { label: 'All boxes', href: '/pizza-boxes-ireland' },
    ],
    panel: '#3f3428',
    image: '/images/hero/month/pizza-box.webp',
    thumb: '/images/hero/month/pizza-box-thumb.webp',
    alt: 'Custom printed kraft pizza boxes with your logo, Ireland',
    glow: 'rgba(253, 186, 116, 0.8)',
    glow2: 'rgba(254, 215, 170, 0.75)',
  },
];

const SLIDE_MS = 6500;
const MOBILE_PANEL = '#1a7f45';

const emptyForm = (products) => ({
  name: '',
  phone: '',
  email: '',
  company: '',
  products: products || '',
  message: '',
});

function validateForm(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  const digits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) errors.phone = 'Number is required';
  else if (digits.length < 7) errors.phone = 'Enter a valid phone number';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center justify-between text-[13px] font-medium text-slate-500">
        <span>
          {label}
          {required ? <span className="text-blue-600"> *</span> : null}
        </span>
        {!required ? <span className="text-[11px] font-normal text-slate-400">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass = (invalid) =>
  `w-full rounded-2xl border bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition focus:bg-white focus:outline-none focus:ring-4 ${
    invalid
      ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100'
      : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/10'
  }`;

export function HeroContactModal({
  open,
  productName,
  onClose,
  source = 'homepage-hero',
  sourceLabel = 'Homepage hero',
  tone = 'default',
}) {
  return (
    <AnimatePresence>
      {open ? (
        <HeroContactPanel
          key="hero-contact"
          productName={productName}
          onClose={onClose}
          source={source}
          sourceLabel={sourceLabel}
          tone={tone}
        />
      ) : null}
    </AnimatePresence>
  );
}

function HeroContactPanel({ productName, onClose, source, sourceLabel, tone }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const startedRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const [view, setView] = useState('choose');
  const [values, setValues] = useState(() => emptyForm(productName));
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    trackFunnel('contact', 'open', { source });
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => dialogRef.current?.focus());
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose, source]);

  const whatsappHref = `${SITE_WHATSAPP_URL}?text=${encodeURIComponent(
    `Hi PrintNPack, I'm interested in ${productName}.`
  )}`;

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackFunnel('contact', 'start', { source });
    }
  };

  const update = (event) => {
    markStarted();
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    setSubmitError('');
    const productInterest = values.products.trim() || productName;
    try {
      trackFunnel('contact', 'send', { source });
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          productInterest,
          message: values.message.trim(),
          source: sourceLabel,
          subject: `${sourceLabel} enquiry — ${productInterest}`,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to send message');
      }
      trackFunnel('contact', 'success', { source });
      setView('sent');
    } catch (error) {
      setSubmitError(error.message || 'Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const rise = reduceMotion
    ? { duration: 0 }
    : { duration: 0.38, ease: [0.22, 1, 0.36, 1] };

  const title =
    view === 'form' ? 'Send a message' : view === 'sent' ? 'Message sent' : 'How should we talk?';
  const subtitle =
    view === 'form'
      ? 'A few details is enough. We’ll come back with a price.'
      : view === 'sent'
        ? 'We’ll be in touch shortly.'
        : 'Tell us what you need. Quotes usually go out within 2 hours.';
  const classic = tone === 'wedding';

  return (
    <motion.div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <motion.button
        type="button"
        aria-label="Close contact dialog"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/45 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={rise}
      />
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        transition={rise}
        className={`relative z-10 flex max-h-[min(94vh,820px)] w-full max-w-[560px] flex-col overflow-hidden rounded-t-[28px] shadow-[0_30px_80px_-24px_rgba(15,23,42,0.55)] outline-none sm:rounded-[28px] ${
          classic ? 'bg-[#faf7f2]' : 'bg-white'
        }`}
      >
        <div className={`pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl ${classic ? 'bg-[#e7d3a1]/80' : 'bg-blue-200/70'}`} />
        <div className={`pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full blur-3xl ${classic ? 'bg-[#f3e6c8]' : 'bg-sky-100'}`} />

        <div className="relative shrink-0 px-5 pb-1 pt-3 sm:px-7 sm:pt-6">
          <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200 sm:hidden" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                classic ? 'bg-[#f3ead6] text-[#8a7240]' : 'bg-blue-50 tracking-[0.14em] text-blue-700'
              }`}>
                {productName}
              </p>
              <h2 id={titleId} className="mt-3 text-[1.65rem] font-semibold tracking-tight text-slate-950">
                {title}
              </h2>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-slate-500">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 overflow-y-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:px-7 sm:pb-7">
          {view === 'choose' && (
            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => setView('form')}
                className={`group relative overflow-hidden rounded-[22px] p-4 text-left text-white shadow-[0_18px_40px_-20px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 sm:p-5 ${
                  classic ? 'bg-[#2f3d2d]' : 'bg-slate-950'
                }`}
              >
                <span className={`pointer-events-none absolute -right-6 -top-10 h-32 w-32 rounded-full blur-2xl ${
                  classic ? 'bg-[#d9c398]/40' : 'bg-blue-500/40 transition group-hover:bg-blue-400/50'
                }`} />
                <span className="relative flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5M6 19l-2 2V6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H6z" />
                    </svg>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold">Send a message</span>
                    <span className="mt-0.5 block text-sm text-white/70">Name, number, email and what you need.</span>
                  </span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-0.5 ${
                    classic ? 'bg-[#f6efe2] text-[#2f3d2d]' : 'bg-white text-slate-950'
                  }`}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </span>
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-[22px] border p-4 text-left transition hover:-translate-y-0.5 sm:p-5 ${
                  classic
                    ? 'border-[#e0d6bf] bg-[#f6efe2] hover:border-[#d9c398]'
                    : 'border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-white hover:border-emerald-300'
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_10px_24px_-12px_rgba(37,211,102,0.9)]">
                  <FaWhatsapp className="h-6 w-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-slate-950">WhatsApp</span>
                  <span className="mt-0.5 block text-sm text-slate-500">We typically reply 24 hrs a day.</span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700 ring-1 ring-emerald-100 transition group-hover:translate-x-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          )}

          {view === 'form' && (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <button
                type="button"
                onClick={() => setView('choose')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-900"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="hero-name" label="Name" required error={errors.name}>
                  <input
                    id="hero-name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={update}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'hero-name-error' : undefined}
                    placeholder="Alex Byrne"
                    className={inputClass(errors.name)}
                  />
                </Field>
                <Field id="hero-phone" label="Number" required error={errors.phone}>
                  <input
                    id="hero-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={values.phone}
                    onChange={update}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'hero-phone-error' : undefined}
                    placeholder="089 000 0000"
                    className={inputClass(errors.phone)}
                  />
                </Field>
                <Field id="hero-email" label="Email" required error={errors.email}>
                  <input
                    id="hero-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'hero-email-error' : undefined}
                    placeholder="you@cafe.ie"
                    className={inputClass(errors.email)}
                  />
                </Field>
                <Field id="hero-company" label="Company">
                  <input
                    id="hero-company"
                    name="company"
                    autoComplete="organization"
                    value={values.company}
                    onChange={update}
                    placeholder="Your café or shop"
                    className={inputClass(false)}
                  />
                </Field>
              </div>

              <Field id="hero-products" label="Products">
                <input
                  id="hero-products"
                  name="products"
                  value={values.products}
                  onChange={update}
                  placeholder="e.g. paper bags, napkins"
                  className={inputClass(false)}
                />
              </Field>

              <Field id="hero-message" label="Message" required error={errors.message}>
                <textarea
                  id="hero-message"
                  name="message"
                  rows={3}
                  value={values.message}
                  onChange={update}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'hero-message-error' : undefined}
                  placeholder="Quantity, sizes, and when you need them."
                  className={`${inputClass(errors.message)} resize-none`}
                />
              </Field>

              {submitError ? (
                <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{submitError}</p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${
                  classic
                    ? 'bg-[#2f3d2d] tracking-[0.04em] hover:bg-[#243024]'
                    : 'bg-blue-600 shadow-[0_16px_36px_-16px_rgba(37,99,235,0.95)] hover:bg-blue-700'
                }`}
              >
                {submitting ? 'Sending…' : 'Send message'}
                {submitting ? null : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
              <p className="text-center text-xs text-slate-400">We only use this to reply about your order.</p>
            </form>
          )}

          {view === 'sent' && (
            <div className="px-2 py-6 text-center">
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-emerald-200/70 blur-md" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
              <p className="text-sm text-slate-500">Quotes usually go out within 2 hours.</p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const HomepageHero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactProduct, setContactProduct] = useState(PRODUCTS[0].name);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]));
  const product = PRODUCTS[index];

  useEffect(() => {
    setLoadedSlides((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
    const nextIndex = (index + 1) % PRODUCTS.length;
    const timer = window.setTimeout(() => {
      setLoadedSlides((prev) => {
        if (prev.has(nextIndex)) return prev;
        const next = new Set(prev);
        next.add(nextIndex);
        return next;
      });
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [index]);

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    if (paused || modalOpen) return undefined;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % PRODUCTS.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [paused, modalOpen, index]);

  const openContact = () => {
    setContactProduct(product.name);
    setModalOpen(true);
  };

  return (
    <>
      <section
        className="relative overflow-hidden border-b border-stone-200 bg-[#f4f3ea]"
        onMouseEnter={() => {
          if (window.matchMedia('(hover: hover)').matches) setPaused(true);
        }}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="grid">
              {PRODUCTS.map((item, itemIndex) => {
                const active = itemIndex === index;
                const Title = active ? 'h1' : 'p';
                return (
                  <div
                    key={item.id}
                    className={`col-start-1 row-start-1 flex flex-col transition-opacity duration-500 ${
                      active ? 'opacity-100' : 'pointer-events-none opacity-0'
                    }`}
                    aria-hidden={!active}
                  >
                    <Title className="text-[2.05rem] font-bold leading-[1.15] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
                      {item.name}
                    </Title>
                    <p className="order-3 mx-auto mt-5 max-w-md text-base font-medium text-neutral-950 lg:text-lg">
                      {item.points.join('. ')}.
                    </p>
                    <p className="order-2 mx-auto mt-3 max-w-[20rem] text-[15px] leading-relaxed text-neutral-800 sm:max-w-md sm:text-base">
                      {item.line}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={openContact}
                  className="rounded-full bg-neutral-950 px-5 py-3 text-[15px] font-semibold text-white"
                >
                  Contact us
                </button>
                <a
                  href={`${SITE_WHATSAPP_URL}?text=${encodeURIComponent(`Hi PrintNPack, I'm interested in ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-950 px-5 py-3 text-[15px] font-semibold text-white"
                >
                  WhatsApp
                </a>
              </div>
              <div className="mt-3 flex justify-center">
                <Link
                  href={product.href}
                  className="rounded-full bg-neutral-950 px-6 py-3 text-[15px] font-semibold text-white"
                >
                  View {product.label.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-8 w-full max-w-5xl">
            {PRODUCTS.map((item, itemIndex) => {
              const active = itemIndex === index;
              return (
                <div
                  key={item.id}
                  className={`${active ? 'relative' : 'absolute inset-0'} transition-opacity duration-700 ${
                    active ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  aria-hidden={!active}
                >
                  <div className="rounded-[1.75rem] px-5 py-8 lg:px-16 lg:py-12" style={{ background: MOBILE_PANEL }}>
                    <div className="relative mx-auto h-[300px] w-full lg:h-[460px]">
                      {loadedSlides.has(itemIndex) && (
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          priority={itemIndex === 0}
                          sizes="(max-width: 1024px) 86vw, 900px"
                          className="object-contain"
                          unoptimized={process.env.NODE_ENV === 'production'}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HeroContactModal open={modalOpen} productName={contactProduct} onClose={closeModal} />
    </>
  );
};

export default HomepageHero;
