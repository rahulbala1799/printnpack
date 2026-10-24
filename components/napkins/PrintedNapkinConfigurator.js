import React, { useState } from 'react';
import { buildCatalogQuoteLine, getQuoteCatalogItem } from '../../data/quote-modules';
import {
  LINEN_NAPKIN_FROM,
  NAPKIN_PRICE_TIERS,
  PRINTED_NAPKIN_IMAGES,
  PRINTED_NAPKIN_MIN,
  PRINTED_NAPKIN_PRINT,
  PRINTED_NAPKIN_QTY,
  PRINTED_NAPKIN_SIZES,
  getNapkinLineTotal,
  getNapkinUnitPrice,
} from '../../data/printed-napkins';
import { cn } from '../../lib/cn';
import { useQuoteCart } from '../../lib/quote-cart-context';

export default function PrintedNapkinConfigurator() {
  const { addItem, openBuilder } = useQuoteCart();
  const [sizeId, setSizeId] = useState(PRINTED_NAPKIN_SIZES[0].id);
  const [print, setPrint] = useState(PRINTED_NAPKIN_PRINT[0]);
  const [qty, setQty] = useState(PRINTED_NAPKIN_MIN);
  const [imageIndex, setImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const size = PRINTED_NAPKIN_SIZES.find((item) => item.id === sizeId) || PRINTED_NAPKIN_SIZES[0];
  const quantity = Math.max(PRINTED_NAPKIN_MIN, Number(qty) || PRINTED_NAPKIN_MIN);
  const image = PRINTED_NAPKIN_IMAGES[imageIndex];
  const unitPrice = getNapkinUnitPrice(size.id, quantity);
  const lineTotal = getNapkinLineTotal(size.id, quantity);

  const addToQuote = () => {
    const catalogItem = getQuoteCatalogItem('premium-linen-feel-napkins');
    if (!catalogItem) return;
    addItem(buildCatalogQuoteLine(catalogItem, {
      sizePreset: size.chip,
      print,
      qty: quantity,
    }));
    setAdded(true);
  };

  return (
    <div id="quote-builder" className="scroll-mt-24 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.web} alt={image.alt} width={800} height={800} className="absolute inset-0 h-full w-full object-contain" />
        </div>
        <div className="mt-3 flex gap-2">
          {PRINTED_NAPKIN_IMAGES.map((item, index) => (
            <button
              key={item.web}
              type="button"
              onClick={() => setImageIndex(index)}
              aria-label={item.alt}
              aria-pressed={index === imageIndex}
              className={cn(
                'relative h-16 w-16 overflow-hidden rounded-lg border',
                index === imageIndex ? 'border-slate-900' : 'border-stone-200'
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumb} alt="" width={64} height={64} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-slate-500">{image.caption}</p>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">Napkin printing</p>
        <h1 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">Custom printed napkins</h1>
        <p className="mb-2 text-2xl font-bold text-slate-900">From €{LINEN_NAPKIN_FROM}</p>
        <p className="mb-6 leading-relaxed text-slate-600">
          Custom printed napkins with your logo. Choose 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 or 20 × 20 cm, from {PRINTED_NAPKIN_MIN} napkins. Full colour or 1 colour. The napkins are linen-feel airlaid. Cocktail napkins are the 10 × 10 cm size, cut down from a larger napkin, so they cost a little more per unit. The price per unit drops as the quantity goes up, and we confirm it before printing.
        </p>

        <fieldset className="mb-6">
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Size</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {PRINTED_NAPKIN_SIZES.map((item) => {
              const selected = item.id === sizeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => { setSizeId(item.id); setAdded(false); }}
                  aria-pressed={selected}
                  className={cn(
                    'rounded-xl border px-4 py-3 text-left',
                    selected ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-400'
                  )}
                >
                  <span className="block text-sm font-semibold">{item.name}</span>
                  <span className={cn('mt-1 block text-xs', selected ? 'text-slate-200' : 'text-slate-500')}>{item.detail}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Print</legend>
          <div className="flex flex-wrap gap-2">
            {PRINTED_NAPKIN_PRINT.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => { setPrint(option); setAdded(false); }}
                aria-pressed={print === option}
                className={cn(
                  'rounded-lg border px-4 py-2 text-sm font-semibold',
                  print === option ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Quantity</legend>
          <div className="flex flex-wrap gap-2">
            {PRINTED_NAPKIN_QTY.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => { setQty(value); setAdded(false); }}
                aria-pressed={quantity === value}
                className={cn(
                  'min-w-[4rem] rounded-lg border px-3 py-2 text-sm font-semibold',
                  quantity === value ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                )}
              >
                {value}
              </button>
            ))}
          </div>
          <label className="mt-3 flex items-center gap-3 text-xs text-slate-500" htmlFor="printed-napkin-qty">
            Other amount
            <input
              id="printed-napkin-qty"
              type="number"
              min={PRINTED_NAPKIN_MIN}
              value={qty}
              onChange={(event) => { setQty(event.target.value); setAdded(false); }}
              className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
            />
            <span>from {PRINTED_NAPKIN_MIN}</span>
          </label>
        </fieldset>

        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
          <span className="font-semibold">Tip. </span>
          Keep the logo and the words in the middle. A frame or a shape along the edge often gets cut off, because a napkin is not always cut with a perfectly straight edge.
        </p>

        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Your quote</p>
          <p className="mt-1 text-lg font-semibold">{size.chip} · {quantity} napkins</p>
          <p className="mt-1 text-sm text-slate-300">{print} · €{unitPrice.toFixed(2)} per napkin</p>
          <p className="mt-2 text-2xl font-bold">€{lineTotal.toFixed(2)} <span className="text-sm font-normal text-slate-300">ex VAT</span></p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button type="button" onClick={addToQuote} className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Add to quote
            </button>
            <button type="button" onClick={() => openBuilder('premium-linen-feel-napkins')} className="text-sm font-semibold text-white underline underline-offset-4">
              Open the quote builder
            </button>
          </div>
          {added && <p className="mt-3 text-xs text-slate-300">Added — €{lineTotal.toFixed(2)} ex VAT for {quantity} napkins.</p>}
        </div>
      </div>

      <div className="lg:col-span-2 mt-8">
        <h2 className="mb-4 text-lg font-bold text-slate-900">Napkin prices by quantity (ex VAT)</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900">Quantity</th>
                <th className="px-4 py-3 font-semibold text-slate-900">10 × 10 cm cocktail</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Other sizes</th>
              </tr>
            </thead>
            <tbody>
              {[...NAPKIN_PRICE_TIERS].reverse().map((tier, index) => (
                <tr key={tier.minQty} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-medium text-slate-900">{tier.minQty === 0 ? `${PRINTED_NAPKIN_MIN}+` : `${tier.minQty.toLocaleString()}+`}</td>
                  <td className="px-4 py-3 text-slate-700">€{(Math.round(tier.cocktailCents) / 100).toFixed(2)}</td>
                  <td className="px-4 py-3 text-slate-700">€{(Math.round(tier.standardCents) / 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">Prices are per napkin, ex VAT, for a single print colour or full colour design. Final price is confirmed when artwork is reviewed.</p>
      </div>
    </div>
  );
}
