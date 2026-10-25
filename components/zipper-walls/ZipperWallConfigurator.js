import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import QuantityField from '../quote/QuantityField';
import {
  ZIPPER_PRINT_PHOTOS,
  normalizeZipperWall,
  priceZipperWall,
  zipperFamily,
  zipperSizesFor,
} from '../../data/zipper-walls';

const KITS = [
  { id: 'set', label: 'Full set' },
  { id: 'fabric', label: 'Fabric only' },
];
const PRINTS = [
  { id: 'front', label: 'Front only' },
  { id: 'both', label: 'Front and back' },
];

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

function PictureChoice({ label, options, value, onChange }) {
  return (
    <fieldset className="border-0 p-0 text-left">
      <legend className="mb-2 text-sm font-semibold text-stone-900">{label}</legend>
      <div className="grid grid-cols-2 gap-2">
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
              <span className="block aspect-[4/3] bg-stone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={option.image} alt={option.alt} className="h-full w-full object-cover" />
              </span>
              <span
                className={cn(
                  'block px-2 py-1.5 text-xs font-medium',
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

export default function ZipperWallConfigurator({
  familyId,
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
}) {
  const family = zipperFamily(familyId);
  const [values, setValues] = useState(() => normalizeZipperWall({ ...(initial || {}), familyId }));

  const set = (patch) => {
    setValues((prev) => normalizeZipperWall({ ...prev, ...patch, familyId }));
  };

  const priced = useMemo(() => priceZipperWall(values), [values]);
  const sizes = zipperSizesFor(family, values.shapeId);

  useEffect(() => {
    if (onChange && priced) onChange(priced);
  }, [onChange, priced]);

  if (!family || !priced) return null;

  return (
    <form
      className={cn('space-y-5', align === 'center' && 'text-center')}
      onSubmit={(event) => {
        event.preventDefault();
        if (priced) onSubmit(priced);
      }}
    >
      {family.shapes.length > 0 && (
        <Choice
          label="Shape"
          options={family.shapes}
          value={values.shapeId}
          onChange={(shapeId) => set({ shapeId })}
          align={align}
        />
      )}
      <Choice
        label="Size"
        options={sizes.map((size) => ({ id: size.id, label: size.label }))}
        value={values.sizeId}
        onChange={(sizeId) => set({ sizeId })}
        align={align}
      />
      <p className={cn('text-xs text-stone-500', align === 'center' && 'text-center')}>
        Width × height × depth. This size is {priced.size.depthCm} cm deep.
      </p>
      <Choice
        label="What you need"
        options={KITS}
        value={values.kit}
        onChange={(kit) => set({ kit })}
        align={align}
      />
      {family.bothSides ? (
        <PictureChoice
          label="Print"
          options={PRINTS.map((option) => ({
            ...option,
            image: ZIPPER_PRINT_PHOTOS[option.id].src,
            alt: ZIPPER_PRINT_PHOTOS[option.id].alt,
          }))}
          value={values.print}
          onChange={(print) => set({ print })}
        />
      ) : (
        <p className={cn('text-xs text-stone-500', align === 'center' && 'text-center')}>
          Printed on the front only.
        </p>
      )}
      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-2 text-sm font-semibold text-stone-900">Quantity</legend>
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <QuantityField value={values.qty} min={1} onCommit={(qty) => set({ qty })} />
        </div>
      </fieldset>
      <div className={align === 'center' ? 'text-center' : 'text-left'}>
        <p className="text-2xl font-bold text-stone-900">{euro(priced.lineTotal)}</p>
        <p className="mt-1 text-xs text-stone-500">
          ex VAT, delivery to Ireland included
          {priced.qty > 1 ? ` · ${euro(priced.unitPrice)} each` : ''}
        </p>
      </div>
      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
      >
        {submitLabel}
      </button>
    </form>
  );
}
