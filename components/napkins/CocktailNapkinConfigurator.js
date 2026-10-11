import React, { useState } from 'react';
import { buildCatalogQuoteLine, getQuoteCatalogItem } from '../../data/quote-modules';
import { cn } from '../../lib/cn';
import { useQuoteCart } from '../../lib/quote-cart-context';

const QTY = [50, 100, 200, 300, 500, 1000];
const MIN_QTY = 50;
const CLOSED = '10 × 10 cm closed';
const OPEN = '20 × 40 cm';

export default function CocktailNapkinConfigurator() {
  const { addItem, openBuilder } = useQuoteCart();
  const [qty, setQty] = useState(MIN_QTY);
  const [added, setAdded] = useState(false);
  const quantity = Math.max(MIN_QTY, Number(qty) || MIN_QTY);

  const addToQuote = () => {
    const catalogItem = getQuoteCatalogItem('cocktail-napkins');
    if (!catalogItem) return;
    addItem(buildCatalogQuoteLine(catalogItem, {
      sizePreset: CLOSED,
      open: OPEN,
      paper: 'White',
      print: 'Custom print',
      qty: quantity,
    }));
    setAdded(true);
  };

  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Build a cocktail napkin quote</h2>
        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          One white cocktail napkin. Closed it is 10 × 10 cm. Open it is 20 × 40 cm. Choose a quantity from 50.
        </p>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Closed size</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{CLOSED}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Open size</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{OPEN}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Paper</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">White</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Print</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Custom print</p>
          </div>
        </div>

        <fieldset className="mb-6">
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Quantity</legend>
          <div className="flex flex-wrap gap-2">
            {QTY.map((value) => (
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
          <label className="mt-3 flex items-center gap-3 text-xs text-slate-500" htmlFor="cocktail-napkin-qty">
            Other amount
            <input
              id="cocktail-napkin-qty"
              type="number"
              min={MIN_QTY}
              value={qty}
              onChange={(event) => { setQty(event.target.value); setAdded(false); }}
              className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
            />
            <span>from {MIN_QTY}</span>
          </label>
        </fieldset>

        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
          <span className="font-semibold">Tip. </span>
          Keep the logo and the words in the middle. A frame, a border or a shape along the edge often gets cut off, because a napkin is not always cut with a perfectly straight edge.
        </p>

        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Your selection</p>
          <p className="mt-1 text-lg font-semibold">{CLOSED} · {quantity} napkins</p>
          <p className="mt-1 text-sm text-slate-300">{OPEN} open · White · Custom print</p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button type="button" onClick={addToQuote} className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Add to quote
            </button>
            <button type="button" onClick={() => openBuilder('cocktail-napkins')} className="text-sm font-semibold text-white underline underline-offset-4">
              Open the quote builder
            </button>
          </div>
          {added && <p className="mt-3 text-xs text-slate-300">Added. We will price the cocktail napkins and confirm delivery.</p>}
        </div>
      </div>
    </section>
  );
}
