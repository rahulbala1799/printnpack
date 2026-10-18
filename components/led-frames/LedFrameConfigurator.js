import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import QuantityField from '../quote/QuantityField';
import {
  LED_FRAME_BASES,
  LED_FRAME_COLORS,
  LED_FRAME_DEPTHS,
  LED_FRAME_EXAMPLE_CAPTION,
  LED_FRAME_PHOTOS,
  LED_FRAME_SIZES,
  ledFramePreview,
  normalizeLedFrame,
  priceLedFrame,
} from '../../data/led-frames';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

function withPhoto(options) {
  return options.map((option) => ({
    ...option,
    image: option.photo ? LED_FRAME_PHOTOS[option.photo]?.src : null,
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

function Choice({ label, options, value, onChange, align }) {
  return (
    <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
      <legend className="mb-2 text-sm font-semibold text-stone-900">{label}</legend>
      <div className={cn('flex flex-wrap gap-1.5', align === 'center' && 'justify-center')}>
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

function OptionField({ label, options, value, onChange, align }) {
  const pictured = options.every((option) => option.image);
  if (pictured) {
    return <PictureChoice label={label} options={options} value={value} onChange={onChange} />;
  }
  return <Choice label={label} options={options} value={value} onChange={onChange} align={align} />;
}

export default function LedFrameConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
  showPreview = true,
  previewClassName,
}) {
  const [values, setValues] = useState(() => normalizeLedFrame(initial || {}));
  const [focus, setFocus] = useState(initial?.focus || null);

  const set = (patch, nextFocus) => {
    setValues((prev) => normalizeLedFrame({ ...prev, ...patch }));
    if (nextFocus) setFocus(nextFocus);
  };

  const priced = useMemo(() => priceLedFrame(values), [values]);
  const preview = useMemo(() => ledFramePreview({ ...values, focus }), [values, focus]);
  const colorOptions = useMemo(
    () => LED_FRAME_COLORS.map((option) => ({
      ...option,
      image: (option.id === 'aluminum' ? LED_FRAME_PHOTOS[values.sizeId] : LED_FRAME_PHOTOS[option.photo])?.src,
    })),
    [values.sizeId]
  );

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
          <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg bg-stone-100 sm:h-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview.src} alt={preview.alt} className="max-h-full max-w-full object-contain" />
          </div>
          <figcaption className="mt-1 text-xs text-stone-500">
            {LED_FRAME_EXAMPLE_CAPTION}
          </figcaption>
        </figure>
      )}
      <OptionField
        label="Size"
        options={withPhoto(LED_FRAME_SIZES)}
        value={values.sizeId}
        onChange={(sizeId) => set({ sizeId }, 'size')}
        align={align}
      />
      <OptionField
        label="Frame depth"
        options={LED_FRAME_DEPTHS}
        value={values.depth}
        onChange={(depth) => set({ depth })}
        align={align}
      />
      <p className={cn('text-xs text-stone-500', align === 'center' && 'text-center')}>
        Both depths are double-sided and edge-lit. The light is bright white, 6500K.
      </p>
      <OptionField
        label="Frame colour"
        options={colorOptions}
        value={values.color}
        onChange={(color) => set({ color }, 'color')}
        align={align}
      />
      <OptionField
        label="Base"
        options={withPhoto(LED_FRAME_BASES)}
        value={values.base}
        onChange={(base) => set({ base }, 'base')}
        align={align}
      />
      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-2 text-sm font-semibold text-stone-900">Quantity</legend>
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <QuantityField value={values.qty} min={1} onCommit={(qty) => set({ qty })} />
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
            ex VAT, delivery to Ireland included
            {priced.qty > 1 ? ` · ${euro(priced.unitPrice)} each` : ''}
          </p>
          <button
            type="submit"
            disabled={!priced}
            className="mt-2 w-full rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 lg:w-auto"
          >
            {submitLabel}
          </button>
        </div>
      )}
    </form>
  );
}
