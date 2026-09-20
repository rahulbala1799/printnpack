import React, { useMemo, useState } from 'react';
import {
  CLOTHING_SIZES,
  GARMENT_PRICING,
  MIN_QTY,
  PRINT_COMBOS,
  colourRangesForGarment,
  formatEuro,
  isLightColour,
  pricePerPiece,
} from '../../../data/clothing-pricing';
import { clothingProducts } from '../../../data/clothing-products';
import { buildClothingQuoteLine } from '../../../data/quote-modules';
import { cn } from '../../../lib/cn';
import QuantityField from '../QuantityField';
import QuoteOptionField, { quoteControlClass } from '../QuoteOptionField';

export default function ClothingQuoteModule({ catalogItem, existing, onSave }) {
  const product = clothingProducts.find((item) => item.id === catalogItem.id);
  const pricing = product ? GARMENT_PRICING[product.pricingKey] : null;
  const ranges = product ? colourRangesForGarment(product.pricingKey) : [];

  const initialColour =
    ranges.flatMap((group) => group.colours).find((colour) => colour.id === existing?.options?.colourId) ||
    ranges[0]?.colours[0] ||
    null;

  const [colour, setColour] = useState(initialColour);
  const [size, setSize] = useState(existing?.options?.size || 'M');
  const [qty, setQty] = useState(existing?.qty || MIN_QTY);
  const [comboId, setComboId] = useState(existing?.options?.printId || 'chest');

  const combo = PRINT_COMBOS.find((item) => item.id === comboId) || PRINT_COMBOS[0];
  const unit = useMemo(
    () => (pricing ? pricePerPiece(pricing.base, combo.areas, qty) : null),
    [pricing, combo.areas, qty]
  );

  if (!product || !pricing) {
    return <p className="text-sm text-stone-500">This clothing product is not configured yet.</p>;
  }

  return (
    <div className="space-y-6">
      {ranges.map((group) => (
        <QuoteOptionField key={group.range} label={`Colour · ${group.range}`}>
          <div className="flex max-w-sm flex-wrap justify-center gap-2">
            {group.colours.map((item) => {
              const selected = colour?.id === item.id;
              const light = isLightColour(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setColour(item)}
                  className="flex w-12 flex-col items-center gap-1"
                  aria-pressed={selected}
                >
                  <span
                    className={cn(
                      'h-8 w-8 rounded-full border',
                      selected ? 'border-stone-900 ring-2 ring-blue-600 ring-offset-2' : light ? 'border-stone-300' : 'border-black/10'
                    )}
                    style={{ backgroundColor: item.hex }}
                  />
                  <span className={cn('text-center text-[10px] leading-tight', selected ? 'font-semibold text-stone-900' : 'text-stone-500')}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </QuoteOptionField>
      ))}

      <QuoteOptionField label="Size">
        <div className="flex flex-wrap justify-center gap-1.5">
          {CLOTHING_SIZES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSize(item)}
              className={cn(
                'h-8 min-w-[2.25rem] rounded-md border px-2 text-xs font-medium',
                size === item ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-700'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </QuoteOptionField>

      <div className="flex flex-wrap items-start justify-center gap-6">
        <QuoteOptionField label="Quantity">
          <QuantityField value={qty} min={MIN_QTY} onCommit={setQty} />
        </QuoteOptionField>
        <QuoteOptionField label="Print">
          <select
            value={comboId}
            onChange={(e) => setComboId(e.target.value)}
            className={cn(quoteControlClass, 'w-[13.5rem]')}
          >
            {PRINT_COMBOS.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </QuoteOptionField>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3">
        <div className="text-center">
          <p className="text-xs text-stone-500">Per piece</p>
          <p className="text-xl font-bold text-stone-900">{formatEuro(unit)}</p>
        </div>
        <button
          type="button"
          onClick={() => onSave(buildClothingQuoteLine(product, { colour, size, qty, combo }))}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {existing ? 'Update quote' : 'Add to quote'}
        </button>
      </div>
    </div>
  );
}
