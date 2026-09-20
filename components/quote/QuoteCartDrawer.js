import React, { useEffect, useState } from 'react';
import { useQuoteCart } from '../../lib/quote-cart-context';
import { formatQuoteMessage, resolveQuoteImage } from '../../data/quote-modules';
import QuantityField from './QuantityField';
import QuoteProductImage from './QuoteProductImage';

const inputClass = 'w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100';

export default function QuoteCartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, clear, subtotal, openBuilder } = useQuoteCart();
  const [step, setStep] = useState('basket');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({ name: '', email: '', phone: '', company: '', notes: '' });

  useEffect(() => {
    if (!open) return;
    setStep('basket');
    setError('');
    setSending(false);
  }, [open]);

  if (!open) return null;

  const submit = async (event) => {
    event.preventDefault();
    if (!items.length) return;
    setSending(true);
    setError('');
    try {
      const message = formatQuoteMessage(items, contact.notes);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          company: contact.company,
          message,
          productInterest: 'Quote basket',
          source: 'Quote cart',
          quoteItems: items.map((item) => ({
            name: item.name,
            code: item.productId,
            moduleId: item.moduleId,
            summary: item.summary,
            qty: item.qty,
            unitPrice: item.unitPrice,
            lineTotal: item.lineTotal,
          })),
          quoteSubtotal: subtotal,
          quoteNotes: contact.notes,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || data.message || 'Could not send quote');
      clear();
      setStep('success');
    } catch (err) {
      setError(err.message || 'Could not send quote');
    } finally {
      setSending(false);
    }
  };

  const title =
    step === 'details' ? 'Your details' : step === 'success' ? 'Quote sent' : `${items.length} product${items.length === 1 ? '' : 's'}`;

  return (
    <div className="fixed inset-0 z-[80]">
      <button type="button" className="absolute inset-0 bg-black/40" aria-label="Close quote basket" onClick={() => setOpen(false)} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Your quote</p>
            <h2 className="text-lg font-bold text-stone-900">{title}</h2>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="p-2 text-stone-500 hover:text-stone-800" aria-label="Close">
            ✕
          </button>
        </div>

        {step === 'success' ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 py-10 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-700">✓</div>
            <p className="text-2xl font-bold text-stone-900">Quote sent</p>
            <p className="mt-3 max-w-xs text-base font-semibold text-blue-700">
              We will get back to you within 2 hours.
            </p>
            <p className="mt-2 max-w-xs text-sm text-stone-500">
              Check your email — we will send pricing and a proof if you need one.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : step === 'details' ? (
          <form onSubmit={submit} className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
              <p className="text-center text-sm text-stone-500">
                We reply to quote requests within <span className="font-semibold text-stone-800">2 hours</span>.
              </p>
              <input required name="name" placeholder="Name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className={inputClass} />
              <input required type="email" name="email" placeholder="Email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className={inputClass} />
              <input name="phone" placeholder="Phone" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className={inputClass} />
              <input name="company" placeholder="Company" value={contact.company} onChange={(e) => setContact({ ...contact, company: e.target.value })} className={inputClass} />
              <textarea name="notes" rows={3} placeholder="Notes or artwork details" value={contact.notes} onChange={(e) => setContact({ ...contact, notes: e.target.value })} className={inputClass} />
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
            <div className="space-y-2 border-t border-stone-200 bg-stone-50 px-5 py-4">
              <button type="submit" disabled={!items.length || sending} className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-blue-300">
                {sending ? 'Sending…' : 'Send quote request'}
              </button>
              <button type="button" onClick={() => setStep('basket')} className="w-full py-2 text-sm font-medium text-stone-500 hover:text-stone-800">
                Back to products
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {items.length === 0 && (
                <p className="text-sm text-stone-500">Your quote is empty. Add products from the quote builder.</p>
              )}

              {items.map((item) => (
                <div key={item.id} className="rounded-xl border border-stone-200 p-3">
                  <div className="flex justify-between gap-3">
                    <div className="flex min-w-0 gap-3">
                      <QuoteProductImage
                        src={resolveQuoteImage(item)}
                        alt={item.name}
                        className="h-20 w-20 shrink-0 rounded-lg"
                        sizes="80px"
                      />
                      <div className="min-w-0">
                        <button type="button" onClick={() => openBuilder(item.productId)} className="text-left font-semibold text-stone-900 hover:text-blue-600">
                          {item.name}
                        </button>
                        {item.summary && <p className="mt-0.5 text-xs text-stone-500">{item.summary}</p>}
                      </div>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id)} className="text-xs text-stone-400 hover:text-red-600">
                      Remove
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs text-stone-500">
                      Qty
                      <QuantityField
                        value={item.qty}
                        min={1}
                        onCommit={(next) => updateQty(item.id, next)}
                        className="w-16"
                      />
                    </label>
                    <p className="text-sm font-semibold text-stone-900">
                      {item.lineTotal != null ? `€${Number(item.lineTotal).toFixed(2)}` : 'On request'}
                    </p>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => openBuilder()}
                className="w-full rounded-xl border border-dashed border-stone-300 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              >
                + Add another product
              </button>
            </div>

            <div className="space-y-3 border-t border-stone-200 bg-stone-50 px-5 py-4">
              {items.length > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Indicative total</span>
                  <span className="font-bold text-stone-900">€{subtotal.toFixed(2)}</span>
                </div>
              )}
              <button
                type="button"
                disabled={!items.length}
                onClick={() => setStep('details')}
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-blue-300"
              >
                Next: your details
              </button>
              <p className="text-center text-xs text-stone-500">We reply within 2 hours</p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
