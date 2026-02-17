import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';
import ProductSelectModal from '../../../components/staff/ProductSelectModal';

const QUEUE_KEY = 'pnp_visit_queue';

export default function OutboundSalesPage({ printedProducts = [] }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [plainProducts, setPlainProducts] = useState([]);

  // Form state
  const [shopName, setShopName] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [locationStatus, setLocationStatus] = useState('Enter address or tap 📍 for GPS');
  const [metKdm, setMetKdm] = useState('');
  const [interested, setInterest] = useState('');
  const [leafletDropped, setLeafletDropped] = useState('');
  const [visitAt, setVisitAt] = useState('');
  const [notes, setNotes] = useState('');
  const [productsInterestedPlain, setProductsInterestedPlain] = useState([]);
  const [productsInterestedPrinted, setProductsInterestedPrinted] = useState([]);

  // Modals
  const [plainModalOpen, setPlainModalOpen] = useState(false);
  const [printedModalOpen, setPrintedModalOpen] = useState(false);

  // Session & submit
  const [sessionStart] = useState(() => Date.now());
  const [sessionTime, setSessionTime] = useState('00:00');
  const [visits, setVisits] = useState([]);
  const [queue, setQueue] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitLabel, setSubmitLabel] = useState('Log This Visit →');
  const [showAnother, setShowAnother] = useState(false);

  // Fetch plain products (staff API)
  useEffect(() => {
    if (!user) return;
    fetch('/api/staff/plain-products', { credentials: 'include' })
      .then((r) => r.ok ? r.json() : { products: [] })
      .then((data) => setPlainProducts(data.products || []))
      .catch(() => setPlainProducts([]));
  }, [user]);

  // Auth
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
        if (data.user?.role === 'staff' && data.user.must_change_password) {
          router.replace('/staff/change-password');
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

  // Default visit time
  useEffect(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    setVisitAt(now.toISOString().slice(0, 16));
  }, []);

  // Session timer
  useEffect(() => {
    const t = setInterval(() => {
      const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
      const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const s = String(elapsed % 60).padStart(2, '0');
      setSessionTime(`${m}:${s}`);
    }, 1000);
    return () => clearInterval(t);
  }, [sessionStart]);

  // Load queue from localStorage
  useEffect(() => {
    try {
      const q = JSON.parse(typeof window !== 'undefined' && window.localStorage.getItem(QUEUE_KEY) || '[]');
      setQueue(q);
    } catch {}
  }, []);

  const saveQueue = useCallback((q) => {
    setQueue(q);
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    } catch {}
  }, []);

  const getGPS = () => {
    if (!navigator.geolocation) {
      setLocationStatus('⚠ GPS not available on this device');
      return;
    }
    setLocationStatus('Getting your location…');
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        setLat(latitude);
        setLon(longitude);
        try {
          const r = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            { headers: { 'User-Agent': 'PrintNPack-SalesApp/1.0' } }
          );
          const data = await r.json();
          const addr = data.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
          setLocationInput(addr);
          setLocationStatus(`✓ GPS locked — ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        } catch {
          setLocationInput(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          setLocationStatus('✓ GPS locked (address lookup offline)');
        }
      },
      () => {
        setLocationStatus('⚠ Could not get location — enter manually');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const validate = () => {
    if (!shopName.trim()) return { ok: false, msg: 'Enter a shop name' };
    if (!locationInput.trim()) return { ok: false, msg: 'Enter or capture a location' };
    if (!metKdm) return { ok: false, msg: 'Did you meet the owner/KDM?' };
    if (metKdm === 'yes' && !interested) return { ok: false, msg: 'Select an interest level' };
    return { ok: true };
  };

  const buildPayload = () => ({
    idempotencyKey: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `key-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    shopName: shopName.trim(),
    displayAddress: locationInput.trim(),
    latitude: lat,
    longitude: lon,
    metOwnerOrKdm: metKdm === 'yes',
    interested: metKdm === 'yes' ? interested : null,
    leafletOrMaterialDropped: metKdm === 'no' ? (leafletDropped === 'yes') : null,
    visitAt: visitAt,
    notes: notes.trim(),
    productsInterestedPlain: productsInterestedPlain.length ? productsInterestedPlain : null,
    productsInterestedPrinted: productsInterestedPrinted.length ? productsInterestedPrinted : null,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  });

  const submitVisit = async () => {
    if (submitting || submitted) return;
    const v = validate();
    if (!v.ok) {
      setToast({ msg: v.msg, type: 'warning' });
      return;
    }

    const payload = buildPayload();
    setSubmitting(true);
    setSubmitLabel('');

    try {
      const res = await fetch('/api/staff/outbound-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        setVisits((prev) => [{ ...payload, queued: false, id: data.leadId || payload.idempotencyKey }, ...prev]);
        setSubmitting(false);
        setSubmitted(true);
        setSubmitLabel('✓ Visit Logged!');
        setShowAnother(true);
        setToast({ msg: 'Visit logged ✓', type: 'success' });
      } else {
        // Queue and show as queued
        const newQueue = [...queue, payload];
        saveQueue(newQueue);
        setVisits((prev) => [{ ...payload, queued: true }, ...prev]);
        setSubmitting(false);
        setToast({ msg: 'Saved offline — will sync when back online', type: 'warning' });
      }
    } catch {
      const newQueue = [...queue, payload];
      saveQueue(newQueue);
      setVisits((prev) => [{ ...payload, queued: true }, ...prev]);
      setSubmitting(false);
      setToast({ msg: 'Saved offline — will sync when back online', type: 'warning' });
    }
  };

  const resetForm = () => {
    setShopName('');
    setLocationInput('');
    setLat(null);
    setLon(null);
    setLocationStatus('Enter address or tap 📍 for GPS');
    setMetKdm('');
    setInterest('');
    setLeafletDropped('');
    setNotes('');
    setProductsInterestedPlain([]);
    setProductsInterestedPrinted([]);
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    setVisitAt(now.toISOString().slice(0, 16));
    setSubmitted(false);
    setSubmitLabel('Log This Visit →');
    setShowAnother(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const retryQueue = async () => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) return;
    let current = [...queue];
    for (const visit of [...current]) {
      try {
        const res = await fetch('/api/staff/outbound-visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(visit),
        });
        if (res.ok) {
          current = current.filter((v) => v.idempotencyKey !== visit.idempotencyKey);
          saveQueue(current);
          setQueue(current);
        }
      } catch {}
    }
    if (current.length === 0 && queue.length > 0) setToast({ msg: 'All visits synced ✓', type: 'success' });
  };

  const [toast, setToast] = useState({ msg: '', type: '' });
  useEffect(() => {
    if (!toast.msg) return;
    const id = setTimeout(() => setToast({ msg: '', type: '' }), 2500);
    return () => clearTimeout(id);
  }, [toast.msg]);

  const totalVisits = visits.length;
  const interestedCount = visits.filter((v) => v.interested === 'yes').length;
  const followUpCount = visits.filter((v) => v.interested === 'follow-up').length;

  const plainSelectedNames = plainProducts.filter((p) => productsInterestedPlain.includes(p.id)).map((p) => p.name);
  const printedSelectedNames = printedProducts.filter((p) => productsInterestedPrinted.includes(p.id)).map((p) => p.name);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="">
      <Head>
        <title>Outbound Sales — Staff — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="max-w-lg mx-auto pb-28">
        {/* Session badge */}
        <div className="flex justify-end mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {sessionTime}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">
            <div className="text-xl font-semibold text-slate-900">{totalVisits}</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Visited</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">
            <div className="text-xl font-semibold text-emerald-600">{interestedCount}</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Interested</div>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">
            <div className="text-xl font-semibold text-amber-600">{followUpCount}</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Follow-up</div>
          </div>
        </div>

        {/* Offline banner */}
        {typeof navigator !== 'undefined' && !navigator.onLine && (
          <div className="flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-sm text-amber-800 mb-4">
            <span>⚡</span>
            <span>You&apos;re offline — visits will be saved and synced when you&apos;re back.</span>
          </div>
        )}

        {/* Queued banner */}
        {queue.length > 0 && (
          <button
            type="button"
            onClick={retryQueue}
            className="w-full flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-sm text-amber-800 mb-4 text-left"
          >
            <span>🕐</span>
            <span>{queue.length} visit{queue.length !== 1 ? 's' : ''} queued — tap to retry</span>
          </button>
        )}

        {/* Form */}
        <div className="mb-6">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Log a Visit</h2>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-4 mb-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Shop Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="e.g. Joe's Pizza, Main St Café"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  placeholder="Search address or use GPS…"
                  className="flex-1 px-3 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button
                  type="button"
                  onClick={getGPS}
                  className="shrink-0 w-11 h-11 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-lg hover:bg-emerald-50 hover:border-emerald-200"
                  title="Use my location"
                >
                  📍
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-1">{locationStatus}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-4 mb-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Met Owner / Key Decision Maker? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <label className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border cursor-pointer touch-manipulation transition-colors ${metKdm === 'yes' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200'}`}>
                  <input
                    type="radio"
                    name="metKdm"
                    value="yes"
                    checked={metKdm === 'yes'}
                    onChange={() => setMetKdm('yes')}
                    className="sr-only"
                  />
                  <span className={metKdm === 'yes' ? 'text-emerald-600 font-semibold' : 'text-slate-500'}>✓ Yes</span>
                </label>
                <label className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border cursor-pointer touch-manipulation transition-colors ${metKdm === 'no' ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}>
                  <input
                    type="radio"
                    name="metKdm"
                    value="no"
                    checked={metKdm === 'no'}
                    onChange={() => setMetKdm('no')}
                    className="sr-only"
                  />
                  <span className={metKdm === 'no' ? 'text-red-600 font-semibold' : 'text-slate-500'}>✕ No</span>
                </label>
              </div>
            </div>

            {metKdm === 'yes' && (
              <div className="pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  How interested? <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'yes', label: '🔥 Interested' },
                    { value: 'no', label: '✕ Not interested' },
                    { value: 'follow-up', label: '🕐 Follow-up later' },
                  ].map((o) => (
                    <label key={o.value} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border cursor-pointer touch-manipulation text-sm">
                      <input
                        type="radio"
                        name="interest"
                        value={o.value}
                        checked={interested === o.value}
                        onChange={() => setInterest(o.value)}
                        className="sr-only"
                      />
                      <span className={interested === o.value ? 'font-semibold text-slate-900' : 'text-slate-600'}>{o.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {metKdm === 'no' && (
              <div className="pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Leaflet / marketing material dropped?
                </label>
                <div className="flex gap-2">
                  <label className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border cursor-pointer touch-manipulation text-sm">
                    <input
                      type="radio"
                      name="leaflet"
                      value="yes"
                      checked={leafletDropped === 'yes'}
                      onChange={() => setLeafletDropped('yes')}
                      className="sr-only"
                    />
                    <span className={leafletDropped === 'yes' ? 'font-semibold text-slate-900' : 'text-slate-600'}>✓ Yes, dropped</span>
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border cursor-pointer touch-manipulation text-sm">
                    <input
                      type="radio"
                      name="leaflet"
                      value="no"
                      checked={leafletDropped === 'no'}
                      onChange={() => setLeafletDropped('no')}
                      className="sr-only"
                    />
                    <span className={leafletDropped === 'no' ? 'font-semibold text-slate-900' : 'text-slate-600'}>✕ No</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Products interested (optional) */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3 mb-3">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
              Products interested in <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <button
              type="button"
              onClick={() => setPlainModalOpen(true)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-slate-200 text-left hover:bg-slate-50"
            >
              <span className="text-slate-700 font-medium">Plain Packaging</span>
              <span className="text-slate-500 text-sm">
                {productsInterestedPlain.length ? `${productsInterestedPlain.length} selected` : 'Select…'}
              </span>
            </button>
            {plainSelectedNames.length > 0 && (
              <p className="text-xs text-slate-500 truncate" title={plainSelectedNames.join(', ')}>
                {plainSelectedNames.join(', ')}
              </p>
            )}
            <button
              type="button"
              onClick={() => setPrintedModalOpen(true)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-slate-200 text-left hover:bg-slate-50"
            >
              <span className="text-slate-700 font-medium">Printed</span>
              <span className="text-slate-500 text-sm">
                {productsInterestedPrinted.length ? `${productsInterestedPrinted.length} selected` : 'Select…'}
              </span>
            </button>
            {printedSelectedNames.length > 0 && (
              <p className="text-xs text-slate-500 truncate" title={printedSelectedNames.join(', ')}>
                {printedSelectedNames.join(', ')}
              </p>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-4 mb-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Visit Date & Time <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                value={visitAt}
                onChange={(e) => setVisitAt(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Notes <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="e.g. Owner said call next week, left samples…"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Today's visits */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Today&apos;s Visits</h2>
          {visits.length === 0 ? (
            <div className="text-center py-8 rounded-xl border border-dashed border-slate-200 text-slate-500 text-sm">
              <div className="text-2xl mb-2 opacity-50">🗺️</div>
              No visits logged yet today.<br />Get out there!
            </div>
          ) : (
            <ul className="space-y-2">
              {visits.map((v, i) => (
                <li
                  key={v.idempotencyKey || i}
                  className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-base">
                    {v.metOwnerOrKdm ? '🤝' : '📄'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900 truncate">{v.shopName}</p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1">
                      {v.queued && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Queued</span>
                      )}
                      {v.interested === 'yes' && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Interested</span>}
                      {v.interested === 'no' && <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">Not interested</span>}
                      {v.interested === 'follow-up' && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Follow-up</span>}
                      {v.leafletOrMaterialDropped === true && <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">Leaflet left</span>}
                      <span className="text-xs text-slate-500 ml-auto">{v.time}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Submit area */}
      <div className="fixed bottom-0 left-0 right-0 z-10 pt-4 pb-8 px-4 bg-gradient-to-t from-slate-50 to-transparent max-w-lg mx-auto">
        <button
          type="button"
          onClick={submitVisit}
          disabled={submitting}
          className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-center hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            submitLabel || 'Log This Visit →'
          )}
        </button>
        {showAnother && (
          <button
            type="button"
            onClick={resetForm}
            className="w-full mt-2 py-3 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold hover:bg-slate-50"
          >
            + Log Another Visit
          </button>
        )}
      </div>

      {/* Toast */}
      {toast.msg && (
        <div
          className={`fixed bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-lg border text-sm font-semibold shadow-lg ${
            toast.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'
          }`}
        >
          {toast.msg}
        </div>
      )}

      {/* Product modals */}
      <ProductSelectModal
        open={plainModalOpen}
        onClose={() => setPlainModalOpen(false)}
        title="Products interested in (Plain Packaging)"
        products={plainProducts}
        selectedIds={productsInterestedPlain}
        onChange={setProductsInterestedPlain}
      />
      <ProductSelectModal
        open={printedModalOpen}
        onClose={() => setPrintedModalOpen(false)}
        title="Products interested in (Printed)"
        products={printedProducts}
        selectedIds={productsInterestedPrinted}
        onChange={setProductsInterestedPrinted}
      />
    </StaffLayout>
  );
}

export async function getServerSideProps() {
  let printedProducts = [];
  try {
    const mod = require('../../../data/products.js');
    const products = mod.default ?? mod;
    printedProducts = (Array.isArray(products) ? products : []).map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category || '',
    }));
  } catch {
    // ignore
  }
  return {
    props: { printedProducts },
  };
}
