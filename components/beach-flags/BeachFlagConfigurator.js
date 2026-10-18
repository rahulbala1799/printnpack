import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import QuantityField from '../quote/QuantityField';
import {
  BEACH_KITS,
  BEACH_MATERIALS,
  BEACH_SHAPES,
  BEACH_SIZES,
  normalizeBeachFlag,
  priceBeachFlag,
} from '../../data/beach-flags';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

function ChipChoice({ label, options, value, onChange }) {
  return (
    <fieldset className="border-0 p-0 text-left">
      <legend className="mb-1.5 text-sm font-semibold text-stone-900">{label}</legend>
      <div className={cn('grid gap-1.5', options.length > 3 ? 'grid-cols-2' : 'grid-cols-1')}>
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                'rounded-lg border px-2.5 py-2 text-left text-sm',
                selected ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-800'
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

export default function BeachFlagConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
}) {
  const [values, setValues] = useState(() => normalizeBeachFlag(initial || {}));
  const set = (patch) => setValues((prev) => normalizeBeachFlag({ ...prev, ...patch }));
  const priced = useMemo(() => priceBeachFlag(values), [values]);
  const sizes = BEACH_SIZES.filter((item) => item.family === priced?.shape.family);

  useEffect(() => {
    if (onChange && priced) onChange(priced);
  }, [onChange, priced]);

  return (
    <form
      className={cn('space-y-3', align === 'center' && 'text-center')}
      onSubmit={(event) => {
        event.preventDefault();
        if (priced) onSubmit(priced);
      }}
    >
      <ChipChoice
        label="Shape"
        options={BEACH_SHAPES}
        value={values.shapeId}
        onChange={(shapeId) => set({ shapeId })}
      />
      <ChipChoice
        label="Size"
        options={sizes}
        value={values.sizeId}
        onChange={(sizeId) => set({ sizeId })}
      />
      <ChipChoice
        label="What is included"
        options={BEACH_KITS}
        value={values.kitId}
        onChange={(kitId) => set({ kitId })}
      />
      <ChipChoice
        label="Cloth"
        options={BEACH_MATERIALS}
        value={values.materialId}
        onChange={(materialId) => set({ materialId })}
      />
      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-1.5 text-sm font-semibold text-stone-900">Number of flags</legend>
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <QuantityField value={values.qty} min={1} onCommit={(qty) => set({ qty })} />
        </div>
        <p className="mt-1 text-xs text-stone-500">Up to 10 flags in one run. They share one delivery.</p>
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
            ex VAT, one delivery to Ireland included
            {priced.qty > 1 ? ` · ${euro(priced.unitPrice)} each` : ''}
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
