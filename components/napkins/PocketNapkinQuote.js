import React, { useState } from 'react';
import { buildCatalogQuoteLine, getQuoteCatalogItem } from '../../data/quote-modules';
import {
  POCKET_NAPKIN_DESIGNS,
  POCKET_NAPKIN_MIN,
  POCKET_NAPKIN_PRODUCT_ID,
  POCKET_NAPKIN_QTY,
  formatPocketEuro,
  getPocketNapkinLineTotal,
  getPocketNapkinUnitPrice,
  pocketQuantity,
} from '../../data/pocket-napkins';
import { cn } from '../../lib/cn';
import { useQuoteCart } from '../../lib/quote-cart-context';

export default function PocketNapkinQuote({
  imageIndex: imageIndexProp,
  onImageIndexChange,
}) {
  const { addItem, openBuilder } = useQuoteCart();
  const [qty, setQty] = useState(500);
  const [internalIndex, setInternalIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const imageIndex = imageIndexProp ?? internalIndex;
  const setImageIndex = (index) => {
    if (onImageIndexChange) onImageIndexChange(index);
    else setInternalIndex(index);
  };
  const image = POCKET_NAPKIN_DESIGNS[imageIndex] || POCKET_NAPKIN_DESIGNS[0];
  const quantity = pocketQuantity(qty);
  const lineTotal = getPocketNapkinLineTotal(quantity);
  const unitPrice = getPocketNapkinUnitPrice(quantity);

  const addToQuote = () => {
    const catalogItem = getQuoteCatalogItem(POCKET_NAPKIN_PRODUCT_ID);
    if (!catalogItem) return;
    addItem(buildCatalogQuoteLine(catalogItem, {
      qty: quantity,
      design: image.name,
      image: image.web,
      print: 'Full colour',
    }));
    setAdded(true);
  };

  return (
    <div id="quote-builder" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c398]">Your pocket napkin price</p>
      <p className="mt-2 text-3xl font-semibold">{formatPocketEuro(lineTotal)} <span className="text-base font-normal text-slate-300">ex VAT</span></p>
      <p className="mt-1 text-sm text-slate-300">
        {quantity.toLocaleString('en-IE')} pocket napkins · {formatPocketEuro(unitPrice)} each · {image.name}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {POCKET_NAPKIN_QTY.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => { setQty(value); setAdded(false); }}
            aria-pressed={quantity === value}
            className={cn(
              'min-w-[4.5rem] rounded-lg border px-3 py-2 text-sm font-semibold',
              quantity === value ? 'border-white bg-white text-slate-950' : 'border-white/30 text-white hover:border-white'
            )}
          >
            {value.toLocaleString('en-IE')}
          </button>
        ))}
      </div>
      <label className="mt-4 flex items-center gap-3 text-sm text-slate-300" htmlFor="pocket-napkin-qty">
        Other amount
        <input
          id="pocket-napkin-qty"
          type="number"
          min={POCKET_NAPKIN_MIN}
          value={qty}
          onChange={(event) => { setQty(event.target.value); setAdded(false); }}
          className="w-32 rounded-lg border border-white/20 bg-white px-3 py-2 text-sm text-slate-950"
        />
        <span>from {POCKET_NAPKIN_MIN}</span>
      </label>
      <div className="mt-4 flex gap-2 overflow-x-auto">
        {POCKET_NAPKIN_DESIGNS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => { setImageIndex(index); setAdded(false); }}
            aria-label={item.alt}
            aria-pressed={index === imageIndex}
            className={cn('h-16 w-16 shrink-0 overflow-hidden rounded-lg border', index === imageIndex ? 'border-white' : 'border-white/20')}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.thumb} alt="" width={64} height={64} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="button" onClick={addToQuote} className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">
          Add {quantity.toLocaleString('en-IE')} to quote
        </button>
        <button type="button" onClick={() => openBuilder(POCKET_NAPKIN_PRODUCT_ID)} className="text-sm font-semibold text-white underline underline-offset-4">
          Open the quote builder
        </button>
      </div>
      {added && <p className="mt-3 text-sm text-slate-300">Added — {formatPocketEuro(lineTotal)} ex VAT for {quantity.toLocaleString('en-IE')} pocket napkins.</p>}
    </div>
  );
}
