import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// ─── Data ────────────────────────────────────────────────────────────────────

const heroImages = [
  '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp',
  '/ifa/product/banner/20221019_184310980133_d01bb8_Real-Estate.webp',
  '/ifa/product/banner/20221019_184301869688_fcc9a6_Automobiles.webp',
  '/ifa/product/banner/1666183881.webp',
  '/ifa/product/banner/pvc-banner-media-500x500.webp',
  '/ifa/product/banner/1649557756.webp',
];

const galleryImages = [...heroImages];

const features = [
  { title: 'Premium vinyl material', description: '440gsm and 510gsm PVC vinyl. Indoor and outdoor options.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
  { title: 'UV printing', description: 'Vibrant, fade-resistant UV printing. Up to 1440dpi.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
  { title: 'Custom sizes', description: 'Standard sizes plus custom up to 5m wide. Hems and eyelets standard.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg> },
  { title: 'Wind-slits & mesh', description: 'Wind-slits or mesh vinyl for outdoor longevity.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 002.985-3.545M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: 'Fast turnaround', description: '3–5 days standard. 24–48 hour rush available.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: 'Ireland delivery', description: 'Nationwide delivery. No minimum order.', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
];

const pricingLeft = [
  { size: '50×100 cm', price: 15, w: 50, h: 100 },
  { size: '50×150 cm', price: 19, w: 50, h: 150 },
  { size: '50×200 cm', price: 20, w: 50, h: 200 },
  { size: '50×300 cm', price: 29, w: 50, h: 300 },
  { size: '70×100 cm', price: 18, w: 70, h: 100 },
  { size: '70×150 cm', price: 21, w: 70, h: 150, popular: true },
  { size: '70×200 cm', price: 27, w: 70, h: 200 },
  { size: '70×300 cm', price: 37, w: 70, h: 300 },
  { size: '100×100 cm', price: 20, w: 100, h: 100 },
  { size: '100×150 cm', price: 29, w: 100, h: 150 },
];

const pricingRight = [
  { size: '100×200 cm', price: 36, w: 100, h: 200, popular: true },
  { size: '100×300 cm', price: 48, w: 100, h: 300 },
  { size: '120×150 cm', price: 33, w: 120, h: 150 },
  { size: '120×200 cm', price: 41, w: 120, h: 200 },
  { size: '120×300 cm', price: 55, w: 120, h: 300 },
  { size: '120×400 cm', price: 68, w: 120, h: 400 },
  { size: '150×150 cm', price: 39, w: 150, h: 150 },
  { size: '150×300 cm', price: 65, w: 150, h: 300, popular: true },
  { size: '150×500 cm', price: 98, w: 150, h: 500 },
  { size: '150×600 cm', price: 112, w: 150, h: 600 },
];

const specs = [
  { label: 'Standard materials', value: '440gsm PVC (standard), 510gsm PVC (premium/outdoor)' },
  { label: 'Common sizes', value: "2'×4', 3'×6', 4'×8', 5'×10', custom up to 5m wide" },
  { label: 'Finishing', value: 'Hemmed edges, reinforced eyelets, pole pockets, wind slits' },
  { label: 'Print', value: 'UV-resistant, up to 1440dpi' },
  { label: 'Weather', value: 'Waterproof, UV-resistant, -20°C to +70°C' },
  { label: 'Turnaround', value: '3–5 business days (rush 24–48hr available)' },
  { label: 'Min. order', value: 'No minimum – single banner available' },
  { label: 'Delivery', value: 'Nationwide Ireland' },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const allPricing = [...pricingLeft, ...pricingRight];
const widths = Array.from(new Set(allPricing.map((p) => p.w))).sort((a, b) => a - b);
const heightsByWidth = widths.reduce((acc, w) => {
  acc[w] = allPricing.filter((p) => p.w === w).map((p) => p.h).sort((a, b) => a - b);
  return acc;
}, {});
const findPrice = (w, h) => allPricing.find((p) => p.w === w && p.h === h);

export default function VinylBannersPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const timeoutRef = useRef(null);

  const [pricingOpen, setPricingOpen] = useState(true);
  const [selW, setSelW] = useState(100);
  const [selH, setSelH] = useState(200);
  const currentSize = findPrice(selW, selH);

  const [modalOpen, setModalOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const onWidthChange = (w) => {
    setSelW(w);
    if (!heightsByWidth[w].includes(selH)) setSelH(heightsByWidth[w][0]);
  };

  const openModalWith = (item) => {
    const base = item || currentSize;
    if (!base) return;
    setOrderItems([{ size: base.size, w: base.w, h: base.h, price: base.price, qty: 1 }]);
    setSubmitStatus('idle');
    setSubmitError('');
    setModalOpen(true);
  };

  const addItemRow = () => {
    const base = currentSize || allPricing[0];
    setOrderItems((prev) => [...prev, { size: base.size, w: base.w, h: base.h, price: base.price, qty: 1 }]);
  };

  const updateItem = (idx, patch) => {
    setOrderItems((prev) => prev.map((it, i) => {
      if (i !== idx) return it;
      const next = { ...it, ...patch };
      if (patch.w !== undefined || patch.h !== undefined) {
        const w = patch.w ?? it.w;
        let h = patch.h ?? it.h;
        if (!heightsByWidth[w].includes(h)) h = heightsByWidth[w][0];
        const found = findPrice(w, h);
        if (found) { next.w = w; next.h = h; next.price = found.price; next.size = found.size; }
      }
      return next;
    }));
  };

  const removeItem = (idx) => setOrderItems((prev) => prev.filter((_, i) => i !== idx));

  const orderTotal = orderItems.reduce((sum, it) => sum + it.price * it.qty, 0);

  const submitOrder = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setSubmitError('Name and phone are required.');
      setSubmitStatus('error');
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      const itemsText = orderItems
        .map((it) => `• ${it.size} × ${it.qty} = €${(it.price * it.qty).toFixed(0)}`)
        .join('\n');
      const message = `Quick order request:\n${itemsText}\n\nIndicative total (excl. VAT): €${orderTotal.toFixed(0)}\n\n${form.message ? `Notes:\n${form.message}` : ''}`.trim();
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message,
          productInterest: 'Vinyl Banners',
          source: 'Vinyl Banners — Quick Order',
          subject: `Vinyl Banners Quick Order — ${orderItems.length} item${orderItems.length > 1 ? 's' : ''}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Submission failed.');
      }
      setSubmitStatus('success');
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong.');
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSubmitStatus('idle');
      setSubmitError('');
      setForm({ name: '', phone: '', email: '', message: '' });
      setOrderItems([]);
    }, 200);
  };

  const goToImage = useCallback((nextIndex) => {
    if (nextIndex === currentImage) return;
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => { setCurrentImage(nextIndex); requestAnimationFrame(() => setIsTransitioning(false)); }, 400);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => goToImage((currentImage + 1) % heroImages.length), 5000);
    return () => { clearInterval(interval); if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentImage, goToImage]);

  const quoteUrl = '/quote?product=Vinyl+Banners';

  return (
    <Layout>
      <Head>
        <title>Vinyl Banners - Indoor & Outdoor Advertising | Print n Pack Ireland</title>
        <meta name="description" content="High-impact vinyl banners for indoor and outdoor advertising. Premium 440gsm/510gsm vinyl, UV printing, custom sizes up to 5m. Ireland delivery." />
        <meta name="keywords" content="vinyl banners, outdoor banners, indoor banners, advertising banners, Ireland, custom print" />
        <meta property="og:title" content="Vinyl Banners - Indoor & Outdoor | Print n Pack Ireland" />
        <meta property="og:description" content="High-impact vinyl banners. Premium material, UV printing, custom sizes. No minimum order." />
        <meta property="og:image" content="https://www.printnpack.ie/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp" />
        <meta property="og:url" content="https://www.printnpack.ie/vinyl-banners" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.printnpack.ie/vinyl-banners" />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-gray-700">Products</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Vinyl Banners</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-3">
                {heroImages.map((img, i) => (
                  <div key={i} className="absolute inset-0" style={{ transition: 'opacity 0.8s ease', opacity: i === currentImage && !isTransitioning ? 1 : 0 }}>
                    <Image src={img} alt={`Vinyl banner ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {heroImages.map((img, i) => (
                  <button key={i} onClick={() => goToImage(i)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-blue-500 ring-1 ring-blue-300' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-blue-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Wide format
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">Vinyl Banners</h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
                High-impact vinyl banners for indoor and outdoor advertising. Premium material, UV printing, custom sizes up to 5m wide. Reinforced hems and eyelets standard.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">3–5 days</div><div className="text-xs text-gray-500">standard</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">No min.</div><div className="text-xs text-gray-500">order</div></div>
                <div className="bg-gray-50 rounded-xl p-3 text-center"><div className="text-lg sm:text-xl font-bold text-gray-900">Ireland</div><div className="text-xs text-gray-500">delivery</div></div>
              </div>

              <div className="mb-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50/40 overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setPricingOpen((v) => !v)}
                  className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 hover:bg-blue-50/60 transition-colors"
                  aria-expanded={pricingOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="text-left min-w-0">
                      <div className="text-sm font-semibold text-gray-900">Get Instant Price</div>
                      <div className="text-xs text-gray-500 truncate">
                        {currentSize ? <>Currently <span className="font-medium text-gray-700">{currentSize.size}</span> — <span className="font-bold text-blue-700">€{currentSize.price}</span></> : 'Pick a size to see the price'}
                      </div>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${pricingOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </button>

                {pricingOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-gray-100">
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Width</span>
                        <span className="text-xs text-gray-400">cm</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {widths.map((w) => (
                          <button
                            key={w}
                            type="button"
                            onClick={() => onWidthChange(w)}
                            className={`min-w-[44px] px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all ${selW === w ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Length</span>
                        <span className="text-xs text-gray-400">cm</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {(heightsByWidth[selW] || []).map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => setSelH(h)}
                            className={`min-w-[52px] px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all ${selH === h ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 bg-white rounded-xl border border-gray-200 px-4 py-3 mb-3">
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500">Your size</div>
                        <div className="font-semibold text-gray-900 tabular-nums">
                          {currentSize ? currentSize.size : '—'}
                          {currentSize?.popular && (
                            <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full border border-amber-200 align-middle">
                              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 tabular-nums leading-none">€{currentSize ? currentSize.price : '—'}</div>
                        <div className="text-[10px] text-gray-400 mt-1">excl. VAT (23%)</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openModalWith()}
                      disabled={!currentSize}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      Quick Order
                    </button>
                  </div>
                )}
              </div>
              <ul className="space-y-2.5 mb-6">
                {['Premium 440gsm/510gsm vinyl', 'Vibrant, fade-resistant UV printing', 'Indoor and outdoor options', 'Custom sizes up to 5m wide', 'Reinforced hems and eyelets', 'Wind-slits for outdoor'].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600"><CheckIcon />{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href={quoteUrl} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-center">Get Custom Quote</Link>
                <a href="tel:+353894400155" className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-6 rounded-xl border border-gray-300 transition-colors text-center">Call +353 89 440 0155</a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Irish Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Choose Our Vinyl Banners?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">High-impact advertising that withstands the elements.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Gallery</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Examples of our vinyl banners.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <button key={i} onClick={() => setLightboxIndex(i)} className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <Image src={img} alt={`Vinyl banner ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={quoteUrl} className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl border border-gray-300 transition-colors">
              Get Your Custom Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2" onClick={() => setLightboxIndex(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
          <div className="relative w-full max-w-3xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[lightboxIndex]} alt={`Vinyl banner ${lightboxIndex + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightboxIndex + 1} / {galleryImages.length}</div>
        </div>
      )}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Technical Specifications</h2>
              <p className="text-gray-500 mb-6">Details for vinyl banners.</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {specs.map((spec, i) => (
                  <div key={spec.label} className={`flex justify-between items-center px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-500 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image src={heroImages[0]} alt="Vinyl banners" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4 border border-blue-200">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
              Transparent pricing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Most Popular Sizes</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Banner printing prices for the most requested sizes. Need a different dimension? We print any custom size up to 5m wide.</p>
            <p className="text-xs text-gray-400 mt-2">All prices exclude VAT (23%). Includes hemmed edges &amp; reinforced eyelets.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {[pricingLeft, pricingRight].map((col, colIdx) => (
              <div key={colIdx} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="grid grid-cols-[1fr_auto] gap-4 px-5 py-3 bg-gradient-to-r from-gray-50 to-blue-50/50 border-b border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Size</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Price</div>
                </div>
                <div className="divide-y divide-gray-100">
                  {col.map((row) => {
                    const maxDim = 600;
                    const widthPct = (row.w / maxDim) * 100;
                    const heightPct = (row.h / maxDim) * 100;
                    return (
                      <button
                        key={row.size}
                        type="button"
                        onClick={() => openModalWith(row)}
                        className={`w-full text-left grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-4 items-center px-4 sm:px-5 py-3.5 hover:bg-blue-50/40 transition-colors group ${row.popular ? 'bg-gradient-to-r from-amber-50/40 to-transparent' : ''}`}
                      >
                        <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <div
                            className={`border-2 rounded-sm transition-colors ${row.popular ? 'border-amber-400 bg-amber-100/60' : 'border-blue-300 bg-blue-50 group-hover:border-blue-500 group-hover:bg-blue-100'}`}
                            style={{ width: `${widthPct}%`, height: `${heightPct}%`, minWidth: '6px', minHeight: '6px' }}
                          />
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-semibold text-gray-900 text-sm sm:text-base tabular-nums">{row.size}</span>
                          {row.popular && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full border border-amber-200">
                              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-base sm:text-lg font-bold text-gray-900 tabular-nums">€{row.price}</span>
                          <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Custom sizes</div>
                <div className="text-xs text-gray-500 leading-relaxed">Any dimension up to 5m wide. Quote in minutes.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Bulk discounts</div>
                <div className="text-xs text-gray-500 leading-relaxed">Ordering 3 or more? Request a tiered quote.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Rush turnaround</div>
                <div className="text-xs text-gray-500 leading-relaxed">24–48hr available on request.</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href={quoteUrl} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
              Get a Custom Size Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order vinyl banners?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get a free quote. We'll help with size, material, and finish.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={quoteUrl} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</Link>
            <a href="tel:+353894400155" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 440 0155</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckIcon /> No obligation</span>
            <span className="flex items-center gap-1.5"><CheckIcon /> Ireland-wide delivery</span>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto" onClick={closeModal}>
          <div
            className="relative w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl my-0 sm:my-8 max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-100 flex-shrink-0">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Quick Order</h3>
                <p className="text-xs text-gray-500">We'll confirm stock and finishing within 1 business hour.</p>
              </div>
              <button type="button" onClick={closeModal} className="text-gray-400 hover:text-gray-600 p-1.5 -mr-1.5 rounded-lg hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {submitStatus === 'success' ? (
              <div className="px-6 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Order request sent</h4>
                <p className="text-sm text-gray-500 mb-6">Thanks {form.name || 'there'} — we'll be in touch on {form.phone} shortly.</p>
                <button type="button" onClick={closeModal} className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors">Close</button>
              </div>
            ) : (
              <form onSubmit={submitOrder} className="flex-1 overflow-y-auto">
                <div className="px-5 py-4 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Items</label>
                    <div className="space-y-2">
                      {orderItems.map((it, idx) => (
                        <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="font-semibold text-gray-900 text-sm">{it.size}</div>
                            <div className="flex items-center gap-3">
                              <div className="text-sm font-bold text-gray-900 tabular-nums">€{(it.price * it.qty).toFixed(0)}</div>
                              {orderItems.length > 1 && (
                                <button type="button" onClick={() => removeItem(idx)} className="text-gray-400 hover:text-red-500 p-1 -mr-1">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <select
                              value={it.w}
                              onChange={(e) => updateItem(idx, { w: Number(e.target.value) })}
                              className="text-sm bg-white border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {widths.map((w) => <option key={w} value={w}>{w} cm</option>)}
                            </select>
                            <select
                              value={it.h}
                              onChange={(e) => updateItem(idx, { h: Number(e.target.value) })}
                              className="text-sm bg-white border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {(heightsByWidth[it.w] || []).map((h) => <option key={h} value={h}>{h} cm</option>)}
                            </select>
                            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
                              <button type="button" onClick={() => updateItem(idx, { qty: Math.max(1, it.qty - 1) })} className="px-2.5 py-1.5 text-gray-500 hover:bg-gray-100">−</button>
                              <input
                                type="number"
                                min="1"
                                value={it.qty}
                                onChange={(e) => updateItem(idx, { qty: Math.max(1, Number(e.target.value) || 1) })}
                                className="w-full text-center text-sm border-0 focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              />
                              <button type="button" onClick={() => updateItem(idx, { qty: it.qty + 1 })} className="px-2.5 py-1.5 text-gray-500 hover:bg-gray-100">+</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button type="button" onClick={addItemRow} className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                      Add another size
                    </button>
                    <div className="mt-3 flex items-center justify-between text-sm bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
                      <span className="text-gray-600">Indicative total</span>
                      <span className="font-bold text-gray-900 tabular-nums">€{orderTotal.toFixed(0)} <span className="text-[10px] font-normal text-gray-500">excl. VAT</span></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="qo-name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Name <span className="text-red-500">*</span></label>
                      <input
                        id="qo-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="qo-phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone <span className="text-red-500">*</span></label>
                      <input
                        id="qo-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                        placeholder="+353 …"
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="qo-email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email <span className="text-gray-400 normal-case font-normal">(optional)</span></label>
                    <input
                      id="qo-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="qo-message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message <span className="text-gray-400 normal-case font-normal">(optional)</span></label>
                    <textarea
                      id="qo-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Other products, finish notes, deadline…"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    />
                  </div>

                  {submitStatus === 'error' && submitError && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{submitError}</div>
                  )}
                </div>

                <div className="px-5 py-4 border-t border-gray-100 bg-gray-50 sticky bottom-0 flex-shrink-0">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Order Request
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2">Prices indicative — final quote confirmed by our team.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
