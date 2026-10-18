import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import QuantityField from '../quote/QuantityField';
import {
  INHAKER_EXAMPLE_CAPTION,
  INHAKER_MATERIALS,
  INHAKER_PHOTOS,
  INHAKER_PRINTS,
  INHAKER_SIZES,
  inhakerPreview,
  normalizeInhaker,
  priceInhaker,
} from '../../data/inhaker-stands';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

function withPhoto(options) {
  return options.map((option) => ({
    ...option,
    image: option.photo ? INHAKER_PHOTOS[option.photo]?.src : null,
  }));
}

function PictureChoice({ label, options, value, onChange }) {
  return (
    <fieldset className="border-0 p-0 text-left">
      <legend className="mb-1.5 text-sm font-semibold text-stone-900">{label}</legend>
      <div className={cn('grid gap-1.5', options.length > 2 ? 'grid-cols-3' : 'grid-cols-2')}>
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

export default function InhakerStandConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
  showPreview = true,
  previewClassName,
}) {
  const [values, setValues] = useState(() => normalizeInhaker(initial || {}));
  const [focus, setFocus] = useState(initial?.focus || null);

  const set = (patch, nextFocus) => {
    setValues((prev) => normalizeInhaker({ ...prev, ...patch }));
    if (nextFocus) setFocus(nextFocus);
  };

  const priced = useMemo(() => priceInhaker(values), [values]);
  const preview = useMemo(() => inhakerPreview({ ...values, focus }), [values, focus]);

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
      {showPreview && preview && (
        <figure className={cn('text-left', previewClassName)}>
          <div className="flex h-20 items-center justify-center overflow-hidden rounded-lg bg-stone-100 sm:h-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview.src} alt={preview.alt} className="max-h-full max-w-full object-contain" />
          </div>
          <figcaption className="mt-1 text-xs text-stone-500">{INHAKER_EXAMPLE_CAPTION}</figcaption>
        </figure>
      )}
      <PictureChoice
        label="Panel height"
        options={withPhoto(INHAKER_SIZES)}
        value={values.sizeId}
        onChange={(sizeId) => set({ sizeId }, 'size')}
      />
      <p className={cn('text-xs text-stone-500', align === 'center' && 'text-center')}>
        Every panel is 88 cm wide. The height is the visible area.
      </p>
      <PictureChoice
        label="Material"
        options={withPhoto(INHAKER_MATERIALS)}
        value={values.material}
        onChange={(material) => set({ material }, 'material')}
      />
      <PictureChoice
        label="Print"
        options={withPhoto(INHAKER_PRINTS)}
        value={values.print}
        onChange={(print) => set({ print }, 'print')}
      />
      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-1.5 text-sm font-semibold text-stone-900">Number of panels</legend>
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <QuantityField value={values.qty} min={1} onCommit={(qty) => set({ qty })} />
        </div>
        <p className="mt-1 text-xs text-stone-500">Up to 10 panels in one run. Extra panels hook into the same posts.</p>
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
            {priced.qty > 1 ? ` · ${euro(priced.panelPrice)} each panel` : ''}
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
