import React, { useState } from 'react';
import { buildCatalogQuoteLine, getQuoteCatalogItem } from '../../data/quote-modules';
import {
  COASTER_BOARD,
  COASTER_IMAGES,
  COASTER_SIDES,
  COASTER_SIZES,
  PRINTED_COASTER_MIN,
  PRINTED_COASTER_QTY,
} from '../../data/coasters-options';
import { cn } from '../../lib/cn';
import { useQuoteCart } from '../../lib/quote-cart-context';

export default function PrintedCoasterConfigurator() {
  const { addItem, openBuilder } = useQuoteCart();
  const first = COASTER_SIZES.find((size) => size.recommended) || COASTER_SIZES[0];
  const [sizeId, setSizeId] = useState(first.id);
  const [sides, setSides] = useState(COASTER_SIDES[0]);
  const [qty, setQty] = useState(PRINTED_COASTER_MIN);
  const [imageIndex, setImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const size = COASTER_SIZES.find((item) => item.id === sizeId) || first;
  const quantity = Math.max(PRINTED_COASTER_MIN, Number(qty) || PRINTED_COASTER_MIN);
  const image = COASTER_IMAGES[imageIndex];

  const addToQuote = () => {
    const catalogItem = getQuoteCatalogItem('printed-coasters-ireland');
    if (!catalogItem) return;
    addItem(buildCatalogQuoteLine(catalogItem, {
      sizePreset: size.chip,
      sides,
      board: COASTER_BOARD,
      colour: 'Full colour',
      qty: quantity,
    }));
    setAdded(true);
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image.web || image.src} alt={image.alt || ''} className="absolute inset-0 h-full w-full object-contain" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-sm font-medium text-stone-400">
              Round 9 × 9 cm coasters
            </div>
          )}
        </div>
        {COASTER_IMAGES.length > 1 && (
          <div className="mt-3 flex gap-2">
            {COASTER_IMAGES.map((item, index) => (
              <button
                key={item.web || item.src}
                type="button"
                onClick={() => setImageIndex(index)}
                className={cn('relative h-16 w-16 overflow-hidden rounded-lg border', index === imageIndex ? 'border-slate-900' : 'border-stone-200')}
                aria-label={item.alt || `Photo ${index + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.thumb || item.web || item.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">Beer mats</p>
        <h1 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">Printed coasters</h1>
        <p className="mb-6 leading-relaxed text-slate-600">
          Round, 9 × 9 cm, on {COASTER_BOARD} board, printed in full colour. Choose one side or both, and a quantity from {PRINTED_COASTER_MIN}.
        </p>

        <fieldset className="mb-6">
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Size</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {COASTER_SIZES.map((item) => {
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
            {COASTER_SIDES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => { setSides(option); setAdded(false); }}
                aria-pressed={sides === option}
                className={cn(
                  'rounded-lg border px-4 py-2 text-sm font-semibold',
                  sides === option ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
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
            {PRINTED_COASTER_QTY.map((value) => (
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
          <label className="mt-3 flex items-center gap-3 text-xs text-slate-500" htmlFor="coaster-qty">
            Other amount
            <input
              id="coaster-qty"
              type="number"
              min={PRINTED_COASTER_MIN}
              value={qty}
              onChange={(event) => { setQty(event.target.value); setAdded(false); }}
              className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
            />
            <span>from {PRINTED_COASTER_MIN}</span>
          </label>
        </fieldset>

        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Your selection</p>
          <p className="mt-1 text-lg font-semibold">{size.name} · {quantity} coasters</p>
          <p className="mt-1 text-sm text-slate-300">{COASTER_BOARD} · Full colour · {sides}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button type="button" onClick={addToQuote} className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Add to quote
            </button>
            <button type="button" onClick={() => openBuilder('printed-coasters-ireland')} className="text-sm font-semibold text-white underline underline-offset-4">
              Open the quote builder
            </button>
          </div>
          {added && <p className="mt-3 text-xs text-slate-300">Added. Open the quote builder to send it.</p>}
        </div>
      </div>
    </div>
  );
}
