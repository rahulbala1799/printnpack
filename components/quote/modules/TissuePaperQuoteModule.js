import React, { useMemo, useState } from 'react';
import { isLightColour, formatEuro } from '../../../data/clothing-pricing';
import {
  LUXURY_TISSUE_CASE_PRICE,
  LUXURY_TISSUE_COLOURS,
  LUXURY_TISSUE_SHEETS,
  buildTissueQuoteLine,
  tissueCasePrice,
  tissueDiscountLabel,
  tissueLineTotal,
} from '../../../data/luxury-tissue-paper';
import { cn } from '../../../lib/cn';
import QuantityField from '../QuantityField';
import QuoteOptionField from '../QuoteOptionField';

export default function TissuePaperQuoteModule({ existing, onSave }) {
  const initialColour =
    LUXURY_TISSUE_COLOURS.find((colour) => colour.id === existing?.options?.colourId) ||
    LUXURY_TISSUE_COLOURS[0];

  const [colour, setColour] = useState(initialColour);
  const [qty, setQty] = useState(existing?.qty || 1);

  const unit = useMemo(() => tissueCasePrice(qty), [qty]);
  const total = useMemo(() => tissueLineTotal(qty), [qty]);
  const discount = tissueDiscountLabel(qty);

  return (
    <div className="space-y-6">
      <QuoteOptionField label="Colour">
        <div className="flex max-w-sm flex-wrap justify-center gap-2">
          {LUXURY_TISSUE_COLOURS.map((item) => {
            const selected = colour?.id === item.id;
            const light = isLightColour(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setColour(item)}
                className="flex w-14 flex-col items-center gap-1"
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

      <QuoteOptionField label="Cases">
        <QuantityField value={qty} min={1} onCommit={setQty} />
        <p className="mt-2 text-xs text-stone-500">
          {LUXURY_TISSUE_SHEETS} sheets per case · {formatEuro(LUXURY_TISSUE_CASE_PRICE)} + VAT
        </p>
      </QuoteOptionField>

      <div className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-600">
        {discount ? (
          <p className="font-medium text-emerald-700">{discount} applied on {qty} cases.</p>
        ) : (
          <p>5+ cases: 10% off. 10+ cases: 20% off.</p>
        )}
        <p className="mt-1 text-xs text-stone-500">Prices exclude VAT.</p>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-xs text-stone-500">Per case</p>
            <p className="text-xl font-bold text-stone-900">{formatEuro(unit)}</p>
          </div>
          <div>
            <p className="text-xs text-stone-500">Line total</p>
            <p className="text-xl font-bold text-stone-900">{formatEuro(total)}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onSave(buildTissueQuoteLine({ colour, qty }))}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {existing ? 'Update quote' : 'Add to quote'}
        </button>
      </div>
    </div>
  );
}
