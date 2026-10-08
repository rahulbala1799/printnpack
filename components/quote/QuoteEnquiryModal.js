import React, { useEffect, useState } from 'react';
import { Dialog } from '../ui/dialog';
import { QUOTE_CATALOG, getQuoteCategories } from '../../data/quote-modules';
import { useQuoteCart } from '../../lib/quote-cart-context';
import { trackFunnel } from '../../lib/track-funnel';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_WHATSAPP_URL } from '../../lib/site';

const OTHER = '__other';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputClass =
  'w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-base text-stone-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-sm';
const labelClass = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-stone-500';

const EMPTY = { name: '', email: '', product: '', custom: '', message: '' };

/**
 * "Message us, reply within 1 hour" modal. Opened from the quote builder and the
 * quote basket via openEnquiry(productId). Posts to the shared /api/contact endpoint.
 */
export default function QuoteEnquiryModal() {
  const { enquiryOpen, enquiryProductId, closeEnquiry } = useQuoteCart();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [error, setError] = useState('');

  // Reset every time the modal opens, preselecting the product being viewed.
  useEffect(() => {
    if (!enquiryOpen) return;
    const known = enquiryProductId && QUOTE_CATALOG.some((item) => item.id === enquiryProductId);
    if (known || !enquiryProductId) {
      setForm({ ...EMPTY, product: enquiryProductId || '' });
    } else {
      // A free-text label (e.g. "Wedding invitations") opens with "Something else" filled in.
      setForm({ ...EMPTY, product: OTHER, custom: String(enquiryProductId) });
    }
    setStatus('idle');
    setError('');
  }, [enquiryOpen, enquiryProductId]);

  if (!enquiryOpen) return null;

  const set = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const selectedItem = QUOTE_CATALOG.find((item) => item.id === form.product);
  const productLabel = form.product === OTHER ? form.custom.trim() : selectedItem?.name || '';
  const groups = getQuoteCategories().filter((category) => category.id !== 'All');

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    if (!form.name.trim()) return setError('Please add your name.');
    if (!EMAIL_RE.test(form.email.trim())) return setError('Please check your email address.');
    if (!productLabel) return setError('Choose a product or type what you need.');
    if (!form.message.trim()) return setError('Please tell us what you want.');

    setStatus('sending');
    trackFunnel('quote_enquiry', 'send');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          productInterest: productLabel,
          source: 'Quote enquiry',
          subject: `Quick enquiry - ${productLabel}`,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || 'Could not send your message.');
      trackFunnel('quote_enquiry', 'success');
      setStatus('sent');
    } catch (err) {
      setStatus('idle');
      setError(err.message || 'Could not send. Please call or WhatsApp us.');
    }
  };

  return (
    <Dialog open={enquiryOpen} onOpenChange={(next) => !next && closeEnquiry()}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Message us"
        className="absolute inset-x-2 bottom-2 flex max-h-[calc(100dvh-1rem)] flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl md:inset-auto md:left-1/2 md:top-1/2 md:w-[480px] md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <div className="flex items-start justify-between border-b border-stone-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Message us</p>
            <h2 className="text-lg font-bold text-stone-900">We reply within 1 hour</h2>
          </div>
          <button
            type="button"
            onClick={closeEnquiry}
            className="-mr-2 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {status === 'sent' ? (
          <div className="overflow-y-auto px-6 py-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">✓</div>
            <p className="text-xl font-bold text-stone-900">Thank you, {form.name.trim().split(' ')[0]}</p>
            <p className="mx-auto mt-2 max-w-xs text-sm text-stone-600">
              We have your message about <strong>{productLabel}</strong>. We will reply to {form.email.trim()} within 1 hour in working hours.
            </p>
            <button
              type="button"
              onClick={closeEnquiry}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="qe-name" className={labelClass}>Name</label>
                  <input id="qe-name" autoComplete="name" value={form.name} onChange={set('name')} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="qe-email" className={labelClass}>Email</label>
                  <input id="qe-email" type="email" autoComplete="email" value={form.email} onChange={set('email')} className={inputClass} placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="qe-product" className={labelClass}>Product</label>
                <select id="qe-product" value={form.product} onChange={set('product')} className={inputClass}>
                  <option value="">Choose a product</option>
                  {groups.map((category) => (
                    <optgroup key={category.id} label={category.name}>
                      {QUOTE_CATALOG.filter((item) => item.group === category.id).map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </optgroup>
                  ))}
                  <option value={OTHER}>Something else (type it in)</option>
                </select>
                {form.product === OTHER && (
                  <input
                    value={form.custom}
                    onChange={set('custom')}
                    className={`${inputClass} mt-2`}
                    placeholder="What product do you need?"
                    aria-label="Product you need"
                    autoFocus={!form.custom}
                  />
                )}
              </div>

              <div>
                <label htmlFor="qe-message" className={labelClass}>Message</label>
                <textarea
                  id="qe-message"
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  className={inputClass}
                  placeholder="What you want, how many, and when you need it"
                />
              </div>

              {error && <p className="text-sm font-semibold text-red-600" role="alert">{error}</p>}
            </div>

            <div className="space-y-2 border-t border-stone-200 bg-stone-50 px-5 py-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-blue-300"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p className="text-center text-xs text-stone-500">
                Or call{' '}
                <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-blue-600">{SITE_PHONE_DISPLAY}</a>
                {' · '}
                <a href={SITE_WHATSAPP_URL} className="font-semibold text-blue-600">WhatsApp</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </Dialog>
  );
}
