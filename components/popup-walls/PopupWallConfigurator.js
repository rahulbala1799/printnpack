import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import QuantityField from '../quote/QuantityField';
import {
  POPUP_WALL_PHOTOS,
  POPUP_WALL_SIZES,
  normalizePopupWall,
  popupWallPreview,
  pricePopupWall,
} from '../../data/popup-walls';

const PRINTS = [
  { id: 'front', label: 'Front only' },
  { id: 'both', label: 'Front and back' },
];
const FEET = [
  { id: 'none', label: 'None' },
  { id: 'silver', label: 'Silver' },
  { id: 'white', label: 'White' },
  { id: 'black', label: 'Black' },
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
                <img src={option.image} alt="" className="h-full w-full object-cover" />
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

export default function PopupWallConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
  showPreview = true,
  previewClassName,
}) {
  const [values, setValues] = useState(() => normalizePopupWall(initial || {}));

  const set = (patch) => {
    setValues((prev) => normalizePopupWall({ ...prev, ...patch }));
  };

  const priced = useMemo(() => pricePopupWall(values), [values]);
  const preview = useMemo(() => popupWallPreview(values), [values]);
  const sizes = POPUP_WALL_SIZES.filter((size) => size.shape === values.shape);
  const showBothSides = values.shape === 'straight';
  const showBlockout = values.light === 'none' && values.print === 'front';
  const showFoot = values.kit === 'set';
  const standPhoto = values.shape === 'curved' ? POPUP_WALL_PHOTOS.curved : POPUP_WALL_PHOTOS.straight;

  useEffect(() => {
    if (onChange && priced) onChange(priced);
  }, [onChange, priced]);

  return (
    <form
      className={cn('space-y-5', align === 'center' && 'text-center')}
      onSubmit={(event) => {
        event.preventDefault();
        if (priced) onSubmit(priced);
      }}
    >
      {showPreview && (
        <figure className={cn('text-left', previewClassName)}>
          <div className="overflow-hidden rounded-xl bg-stone-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview.src} alt={preview.alt} className="aspect-[4/3] w-full object-cover" />
          </div>
          <figcaption className="mt-1.5 text-xs text-stone-500">
            Example print. Your own artwork goes on the fabric.
          </figcaption>
        </figure>
      )}
      <PictureChoice
        label="Shape"
        options={[
          { id: 'straight', label: 'Straight', image: POPUP_WALL_PHOTOS.straight.src },
          { id: 'curved', label: 'Curved', image: POPUP_WALL_PHOTOS.curved.src },
        ]}
        value={values.shape}
        onChange={(shape) => set({ shape })}
      />
      <Choice
        label="Size"
        options={sizes.map((size) => ({ id: size.id, label: size.label }))}
        value={values.sizeId}
        onChange={(sizeId) => set({ sizeId })}
        align={align}
      />
      <p className={cn('text-xs text-stone-500', align === 'center' && 'text-center')}>
        {values.shape === 'curved'
          ? 'The curved wall is 57 cm deep, and printed on the front only.'
          : 'Straight walls are 36 cm deep.'}
      </p>
      <PictureChoice
        label="What you need"
        options={[
          { id: 'set', label: 'Full stand', image: standPhoto.src },
          { id: 'fabric', label: 'Fabric only', image: POPUP_WALL_PHOTOS.fabric.src },
        ]}
        value={values.kit}
        onChange={(kit) => set({ kit })}
      />
      {showBothSides && (
        <Choice label="Print" options={PRINTS} value={values.print} onChange={(print) => set({ print })} align={align} />
      )}
      <PictureChoice
        label="Lighting"
        options={[
          { id: 'none', label: 'None', image: POPUP_WALL_PHOTOS.straight.src },
          { id: 'led', label: 'LED', image: POPUP_WALL_PHOTOS.led.src },
        ]}
        value={values.light}
        onChange={(light) => set({ light })}
      />
      {(showFoot || showBlockout) && (
        <div className="space-y-4 rounded-xl border border-stone-200 bg-stone-50 p-3">
          <p className={cn('text-xs font-semibold uppercase tracking-wide text-stone-400', align === 'center' && 'text-center')}>
            Extras
          </p>
          {showFoot && (
            <Choice label="Foot plate" options={FEET} value={values.foot} onChange={(foot) => set({ foot })} align={align} />
          )}
          {showBlockout && (
            <Choice
              label="Blockout cloth"
              options={[{ id: 'no', label: 'No' }, { id: 'yes', label: 'Yes' }]}
              value={values.blockout}
              onChange={(blockout) => set({ blockout })}
              align={align}
            />
          )}
        </div>
      )}
      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-2 text-sm font-semibold text-stone-900">Quantity</legend>
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <QuantityField value={values.qty} min={1} onCommit={(qty) => set({ qty })} />
        </div>
      </fieldset>
      {priced && (
        <div className={align === 'center' ? 'text-center' : 'text-left'}>
          <p className="text-2xl font-bold text-stone-900">{euro(priced.lineTotal)}</p>
          <p className="mt-1 text-xs text-stone-500">
            ex VAT, delivery to Ireland included
            {priced.qty > 1 ? ` · ${euro(priced.unitPrice)} each` : ''}
          </p>
        </div>
      )}
      <button
        type="submit"
        disabled={!priced}
        className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {submitLabel}
      </button>
    </form>
  );
}
