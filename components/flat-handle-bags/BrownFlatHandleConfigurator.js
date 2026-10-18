import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import {
  BROWN_FLAT_HANDLE_QTYS,
  BROWN_FLAT_HANDLE_SIDES,
  BROWN_FLAT_HANDLE_SIZES,
  BROWN_FLAT_HANDLE_WARNING,
  brownFlatHandleDimensions,
  normalizeBrownFlatHandle,
  priceBrownFlatHandle,
} from '../../data/brown-flat-handle-bags';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

function PictureChoice({ label, options, value, onChange }) {
  return (
    <fieldset className="border-0 p-0 text-left">
      <legend className="mb-1.5 text-sm font-semibold text-stone-900">{label}</legend>
      <div className={cn('grid gap-1.5', options.length > 2 ? 'grid-cols-4' : 'grid-cols-2')}>
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                'overflow-hidden rounded-lg border text-left',
                selected ? 'border-stone-900 ring-2 ring-stone-900' : 'border-stone-200 hover:border-stone-400'
              )}
            >
              <span className="flex h-16 items-center justify-center bg-stone-100 p-1 sm:h-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={option.image} alt="" className="max-h-full max-w-full object-contain" />
              </span>
              <span
                className={cn(
                  'block px-1 py-1 text-center text-[11px] font-medium leading-tight',
                  selected ? 'bg-stone-900 text-white' : 'bg-white text-stone-800'
                )}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Choice({ label, options, value, onChange }) {
  return (
    <fieldset className="border-0 p-0 text-left">
      <legend className="mb-2 text-sm font-semibold text-stone-900">{label}</legend>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                'rounded-md border px-2.5 py-1.5 text-xs font-medium',
                selected
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function BrownFlatHandleConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
}) {
  const [values, setValues] = useState(() => normalizeBrownFlatHandle(initial || {}));
  const [focus, setFocus] = useState(initial?.focus || null);

  const set = (patch, nextFocus) => {
    setValues((prev) => normalizeBrownFlatHandle({ ...prev, ...patch }));
    if (nextFocus) setFocus(nextFocus);
  };

  const priced = useMemo(() => priceBrownFlatHandle(values), [values]);

  useEffect(() => {
    if (onChange && priced) onChange({ ...priced, focus });
  }, [onChange, priced, focus]);

  return (
    <form
      className={cn('space-y-3', align === 'center' && 'text-center')}
      onSubmit={(event) => {
        event.preventDefault();
        if (priced) onSubmit({ ...priced, focus });
      }}
    >
      <PictureChoice
        label="Size"
        options={BROWN_FLAT_HANDLE_SIZES.map((size) => ({ id: size.id, label: size.label, image: size.option }))}
        value={values.sizeId}
        onChange={(sizeId) => set({ sizeId }, 'size')}
      />
      {priced && (
        <p className={cn('text-xs text-stone-500', align === 'center' && 'text-center')}>
          {brownFlatHandleDimensions(priced.size)}. At 5,000 bags this size is {euro(priced.size.endDouble)} double-sided.
        </p>
      )}
      <PictureChoice
        label="Print"
        options={BROWN_FLAT_HANDLE_SIDES}
        value={values.sides}
        onChange={(sides) => set({ sides }, 'sides')}
      />
      <Choice
        label="Quantity"
        options={BROWN_FLAT_HANDLE_QTYS.map((qty) => ({ id: qty, label: String(qty) }))}
        value={values.qty}
        onChange={(qty) => set({ qty })}
      />
      {priced && (
        <div
          className={cn(
            'sticky bottom-0 z-10 border-t border-stone-200 bg-white py-3 lg:static lg:border-0 lg:bg-transparent lg:py-0',
            align === 'center' ? 'text-center' : 'text-left'
          )}
        >
          <p className="text-xl font-black uppercase leading-tight tracking-wide text-stone-900 sm:text-2xl">
            {BROWN_FLAT_HANDLE_WARNING}
          </p>
          <p className="mt-3 text-2xl font-bold text-stone-900">{euro(priced.lineTotal)}</p>
          <p className="mt-0.5 text-xs text-stone-500">
            indicative, ex VAT · {euro(priced.unitPrice)} each
          </p>
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 lg:w-auto"
          >
            {submitLabel}
          </button>
        </div>
      )}
    </form>
  );
}
