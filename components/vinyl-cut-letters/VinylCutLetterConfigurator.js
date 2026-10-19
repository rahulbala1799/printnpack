import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/cn';
import QuantityField from '../quote/QuantityField';
import {
  VINYL_LETTER_CAPTION,
  VINYL_LETTER_CONTOUR_PRESETS,
  VINYL_LETTER_MAX_CONTOURS,
  VINYL_LETTER_MAX_COPIES,
  VINYL_LETTER_MAX_HEIGHT_MM,
  VINYL_LETTER_MAX_WIDTH_MM,
  VINYL_LETTER_MATERIALS,
  VINYL_LETTER_MIN_MM,
  VINYL_LETTER_PATH,
  VINYL_LETTER_PRESETS,
  formatCm,
  formatVinylLetterArea,
  formatVinylLetterSize,
  normalizeVinylLetters,
  priceVinylLetters,
} from '../../data/vinyl-cut-letters';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

export function VinylLetterPreview({ widthMm, heightMm, swatch, large = false, className }) {
  const widthPct = (widthMm / VINYL_LETTER_MAX_WIDTH_MM) * 100;
  const heightPct = (heightMm / VINYL_LETTER_MAX_HEIGHT_MM) * 100;

  return (
    <figure className={cn('text-left', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200',
          large ? 'h-64 sm:h-80' : 'h-28 sm:h-36'
        )}
        role="img"
        aria-label={formatVinylLetterSize(widthMm, heightMm)}
      >
        <div
          className="absolute bottom-0 left-0 flex items-center justify-center overflow-hidden"
          style={{
            width: `${widthPct}%`,
            height: `${heightPct}%`,
            background: swatch,
            boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.35)',
          }}
        >
          <span className={cn('font-serif font-bold text-white mix-blend-difference', large ? 'text-5xl' : 'text-2xl')}>Aa</span>
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-stone-500">{VINYL_LETTER_CAPTION}</figcaption>
    </figure>
  );
}

function Chip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'rounded-lg border px-2.5 py-1.5 text-xs font-medium',
        selected ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-800 hover:border-stone-400'
      )}
    >
      {children}
    </button>
  );
}

function DimensionField({ label, value, min, max, onCommit }) {
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  const commit = () => {
    const parsed = Number(String(draft).replace(',', '.'));
    if (!Number.isFinite(parsed)) {
      setDraft(value);
      return;
    }
    onCommit(parsed);
  };

  return (
    <label className="block text-left">
      <span className="mb-1 block text-xs font-medium text-stone-600">{label}</span>
      <span className="flex items-center rounded-lg border border-stone-200 bg-white focus-within:border-stone-900">
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step="0.1"
          value={draft}
          aria-label={label}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={commit}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              commit();
            }
          }}
          className="w-full bg-transparent px-2 py-1.5 text-sm text-stone-900 outline-none"
        />
        <span className="pr-2 text-xs text-stone-500">cm</span>
      </span>
    </label>
  );
}

export default function VinylCutLetterConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
  showPreview = true,
  previewClassName,
}) {
  const [values, setValues] = useState(() => normalizeVinylLetters(initial || { widthMm: 200, heightMm: 600 }));

  const set = (patch) => setValues((prev) => normalizeVinylLetters({ ...prev, ...patch }));

  const priced = useMemo(() => priceVinylLetters(values), [values]);

  useEffect(() => {
    if (onChange && priced) onChange(priced);
  }, [onChange, priced]);

  const widthCm = formatCm(values.widthMm);
  const heightCm = formatCm(values.heightMm);

  return (
    <form
      className={cn('space-y-4', align === 'center' && 'text-center')}
      onSubmit={(event) => {
        event.preventDefault();
        if (priced) onSubmit(priced);
      }}
    >
      {showPreview && (
        <VinylLetterPreview
          widthMm={values.widthMm}
          heightMm={values.heightMm}
          swatch={priced.material.swatch}
          className={previewClassName}
        />
      )}

      <fieldset className="border-0 p-0 text-left">
        <legend className="mb-1.5 text-sm font-semibold text-stone-900">Common sizes</legend>
        <p className="mb-2 text-xs text-stone-500">Pick a size close to the window, then set the exact centimetres below.</p>
        <div className="flex flex-wrap gap-1.5">
          {VINYL_LETTER_PRESETS.map((preset) => (
            <Chip
              key={preset.id}
              selected={priced.preset?.id === preset.id}
              onClick={() => set({ widthMm: preset.widthCm * 10, heightMm: preset.heightCm * 10 })}
            >
              {preset.label}
            </Chip>
          ))}
        </div>
      </fieldset>

      <fieldset className="border-0 p-0 text-left">
        <legend className="mb-1.5 text-sm font-semibold text-stone-900">Your own size</legend>
        <p className="mb-2 text-xs text-stone-500">Type the centimetres, or use the sliders. Width is the long side.</p>
        <div className="grid grid-cols-2 gap-2">
          <DimensionField
            label="Width"
            value={widthCm}
            min={10}
            max={300}
            onCommit={(cm) => set({ widthMm: Math.round(cm * 10) })}
          />
          <DimensionField
            label="Height"
            value={heightCm}
            min={10}
            max={120}
            onCommit={(cm) => set({ heightMm: Math.round(cm * 10) })}
          />
        </div>
        <label className="mt-2 block">
          <span className="sr-only">Width slider</span>
          <input
            type="range"
            min={VINYL_LETTER_MIN_MM}
            max={VINYL_LETTER_MAX_WIDTH_MM}
            step={10}
            value={values.widthMm}
            onChange={(event) => set({ widthMm: Number(event.target.value) })}
            className="w-full accent-stone-900"
          />
        </label>
        <label className="block">
          <span className="sr-only">Height slider</span>
          <input
            type="range"
            min={VINYL_LETTER_MIN_MM}
            max={VINYL_LETTER_MAX_HEIGHT_MM}
            step={10}
            value={values.heightMm}
            onChange={(event) => set({ heightMm: Number(event.target.value) })}
            className="w-full accent-stone-900"
          />
        </label>
        <p className="mt-1 text-xs text-stone-500">
          {formatVinylLetterSize(values.widthMm, values.heightMm)} · {formatVinylLetterArea(values.widthMm, values.heightMm)}
          . Width 10–300 cm. Height 10–120 cm. The long side goes on the width.
        </p>
      </fieldset>

      <fieldset className="border-0 p-0 text-left">
        <legend className="mb-1.5 text-sm font-semibold text-stone-900">Vinyl colour</legend>
        <div className="grid grid-cols-3 gap-1.5">
          {VINYL_LETTER_MATERIALS.map((option) => {
            const selected = option.id === values.material;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => set({ material: option.id })}
                className={cn(
                  'overflow-hidden rounded-lg border text-left',
                  selected ? 'border-stone-900 ring-2 ring-stone-900' : 'border-stone-200 hover:border-stone-400'
                )}
              >
                <span className="block h-8" style={{ background: option.swatch }} />
                <span
                  className={cn(
                    'block px-1 py-1 text-center text-[10px] font-medium leading-tight',
                    selected ? 'bg-stone-900 text-white' : 'bg-white text-stone-800'
                  )}
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-1 text-xs text-stone-500">{priced.material.label} · {priced.material.film}. One solid colour, not a printed picture. <Link href={`${VINYL_LETTER_PATH}#which-vinyl`} className="underline">Which vinyl?</Link></p>
      </fieldset>

      <fieldset className="border-0 p-0 text-left">
        <legend className="mb-1.5 text-sm font-semibold text-stone-900">Number of cuts</legend>
        <div className="flex flex-wrap gap-1.5">
          {VINYL_LETTER_CONTOUR_PRESETS.map((option) => (
            <Chip
              key={option.id}
              selected={values.contours === option.id}
              onClick={() => set({ contours: option.id })}
            >
              {option.label}
            </Chip>
          ))}
        </div>
        <label className="mt-2 block">
          <span className="sr-only">Exact number of cuts</span>
          <input
            type="range"
            min={1}
            max={VINYL_LETTER_MAX_CONTOURS}
            step={1}
            value={values.contours}
            onChange={(event) => set({ contours: Number(event.target.value) })}
            className="w-full accent-stone-900"
          />
        </label>
        <p className="text-xs text-stone-500">
          {values.contours} {values.contours === 1 ? 'cut' : 'cuts'}. Count every separate shape. The letter I is one. The letter O is two, because of the hole. Up to 50.
        </p>
      </fieldset>

      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-1.5 text-sm font-semibold text-stone-900">Copies</legend>
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <QuantityField value={values.qty} min={1} onCommit={(qty) => set({ qty })} />
        </div>
        <p className="mt-1 text-xs text-stone-500">Up to {VINYL_LETTER_MAX_COPIES} copies of this piece. They ship together.</p>
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
            {priced.qty > 1 ? ` · ${euro(priced.eachGoods)} each` : ''}
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
