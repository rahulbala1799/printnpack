import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import {
  PRINTED_BAGASSE_BOXES,
  PRINTED_BAGASSE_PRINT,
  PRINTED_BAGASSE_QTYS,
  normalizePrintedBagasse,
  pricePrintedBagasse,
} from '../../data/printed-bagasse-boxes';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

export default function PrintedBagasseConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
  lockSize = false,
}) {
  const [values, setValues] = useState(() => normalizePrintedBagasse(initial || {}));

  const set = (patch) => {
    setValues((prev) => normalizePrintedBagasse({ ...prev, ...patch }));
  };

  const priced = useMemo(() => pricePrintedBagasse(values), [values]);

  useEffect(() => {
    if (onChange && priced) onChange(priced);
  }, [onChange, priced]);

  return (
    <form
      className={cn('space-y-4', align === 'center' && 'text-center')}
      onSubmit={(event) => {
        event.preventDefault();
        if (priced) onSubmit(priced);
      }}
    >
      {!lockSize && (
        <fieldset className="border-0 p-0 text-left">
          <legend className="mb-2 text-sm font-semibold text-stone-900">Box</legend>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {PRINTED_BAGASSE_BOXES.map((box) => {
              const selected = box.id === values.sizeId;
              return (
                <button
                  key={box.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => set({ sizeId: box.id })}
                  className={cn(
                    'overflow-hidden rounded-lg border text-left',
                    selected ? 'border-stone-900 ring-2 ring-stone-900' : 'border-stone-200 hover:border-stone-400'
                  )}
                >
                  <span className="flex h-16 items-center justify-center bg-stone-100 p-1 sm:h-20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={box.image} alt="" className="max-h-full max-w-full object-contain" />
                  </span>
                  <span
                    className={cn(
                      'block px-1 py-1 text-center text-[11px] font-medium leading-tight',
                      selected ? 'bg-stone-900 text-white' : 'bg-white text-stone-800'
                    )}
                  >
                    {box.label}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {priced && (
        <p className={cn('text-xs text-stone-500', align === 'center' && 'text-center')}>
          {priced.box.size}. {priced.box.use}. Print is a {PRINTED_BAGASSE_PRINT}.
        </p>
      )}

      <fieldset className="border-0 p-0 text-left">
        <legend className="mb-2 text-sm font-semibold text-stone-900">Quantity</legend>
        <div className="flex flex-wrap gap-1.5">
          {PRINTED_BAGASSE_QTYS.map((qty) => {
            const selected = qty === values.qty;
            return (
              <button
                key={qty}
                type="button"
                aria-pressed={selected}
                onClick={() => set({ qty })}
                className={cn(
                  'rounded-md border px-2.5 py-1.5 text-xs font-medium',
                  selected
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                )}
              >
                {qty.toLocaleString('en-IE')}
              </button>
            );
          })}
        </div>
      </fieldset>

      {priced && (
        <div
          className={cn(
            'sticky bottom-0 z-10 border-t border-stone-200 bg-white py-3 lg:static lg:border-0 lg:bg-transparent lg:py-0',
            align === 'center' ? 'text-center' : 'text-left'
          )}
        >
          <p className="text-2xl font-bold text-stone-900">{euro(priced.lineTotal)}</p>
          <p className="mt-0.5 text-xs text-stone-500">
            ex VAT · {euro(priced.unitPrice)} each · {PRINTED_BAGASSE_PRINT}
          </p>
          <button
            type="submit"
            className="mt-3 w-full rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 lg:w-auto"
          >
            {submitLabel}
          </button>
        </div>
      )}
    </form>
  );
}
