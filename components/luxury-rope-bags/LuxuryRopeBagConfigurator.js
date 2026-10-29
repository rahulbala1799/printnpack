import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import {
  ROPE_BAG_CORDS,
  ROPE_BAG_LAMINATIONS,
  ROPE_BAG_LENGTHS,
  ROPE_BAG_PAPERS,
  ROPE_BAG_PRINTS,
  ROPE_BAG_QUANTITIES,
  ROPE_BAG_RIBBONS,
  ROPE_BAG_SIZES,
  ROPE_BAG_SPOTS,
  normalizeRopeBag,
  priceRopeBag,
  ropeBagFinishChoices,
  ropeBagPreview,
} from '../../data/luxury-rope-handle-bags';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

function Choice({ label, hint, options, value, onChange, align }) {
  return (
    <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
      <legend className="mb-2 text-sm font-semibold text-stone-900">{label}</legend>
      {hint ? <p className="mb-2 text-xs text-stone-500">{hint}</p> : null}
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
                'rounded-md border px-2.5 py-1.5 text-left text-xs font-medium',
                selected
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
              )}
            >
              <span className="block">{option.label}</span>
              {option.detail ? (
                <span className={cn('block font-normal', selected ? 'text-stone-200' : 'text-stone-500')}>
                  {option.detail}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function LuxuryRopeBagConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
  showPreview = true,
  previewClassName,
}) {
  const [values, setValues] = useState(() => normalizeRopeBag(initial || {}));

  const set = (patch) => {
    setValues((prev) => normalizeRopeBag({ ...prev, ...patch }));
  };

  const priced = useMemo(() => priceRopeBag(values), [values]);
  const finishes = useMemo(() => ropeBagFinishChoices(values), [values]);
  const preview = useMemo(() => ropeBagPreview(values), [values]);

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
      {showPreview && preview ? (
        <figure className={cn('text-left', previewClassName)}>
          <div className="overflow-hidden rounded-xl bg-stone-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview.src} alt={preview.alt} className="aspect-[4/3] w-full object-cover" />
          </div>
          <figcaption className="mt-1.5 text-xs text-stone-500">
            Example print. Your own artwork goes on the bag.
          </figcaption>
        </figure>
      ) : null}

      <Choice
        label="Size"
        hint="Width × depth × height."
        options={ROPE_BAG_SIZES.map((size) => ({
          id: size.id,
          label: size.label,
          detail: size.shape,
        }))}
        value={values.sizeId}
        onChange={(sizeId) => set({ sizeId })}
        align={align}
      />

      <Choice
        label="Print"
        hint="Your logo or artwork. An unprinted bag is not available."
        options={ROPE_BAG_PRINTS}
        value={values.print}
        onChange={(print) => set({ print })}
        align={align}
      />

      <Choice
        label="Rope length"
        hint="The cotton rope is the handle."
        options={ROPE_BAG_LENGTHS}
        value={values.cordLength}
        onChange={(cordLength) => set({ cordLength })}
        align={align}
      />

      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-1 text-sm font-semibold text-stone-900">Rope colour</legend>
        <p className="mb-2 text-xs text-stone-500">
          {priced ? priced.cordLabel : 'Black'}. The colour of the rope does not change the price.
        </p>
        <div className={cn('flex flex-wrap gap-1.5', align === 'center' && 'justify-center')}>
          {ROPE_BAG_CORDS.map((cord) => {
            const selected = cord.id === values.cord;
            return (
              <button
                key={cord.id}
                type="button"
                aria-label={cord.label}
                aria-pressed={selected}
                title={cord.label}
                onClick={() => set({ cord: cord.id })}
                className={cn(
                  'h-7 w-7 rounded-full border',
                  selected ? 'border-stone-900 ring-2 ring-stone-900 ring-offset-2' : 'border-stone-300'
                )}
                style={{ background: cord.hex }}
              />
            );
          })}
        </div>
      </fieldset>

      <Choice
        label="Paper"
        hint="Both are 170gsm white kraft. FSC is the same price."
        options={ROPE_BAG_PAPERS}
        value={values.paper}
        onChange={(paper) => set({ paper })}
        align={align}
      />

      <Choice
        label="Lamination"
        hint="Gloss and matt are the same price."
        options={finishes.lamination}
        value={values.lamination}
        onChange={(lamination) => set({ lamination })}
        align={align}
      />

      <Choice
        label="Special finish"
        hint="Gold foil and silver foil are the same price."
        options={finishes.spots}
        value={values.spot}
        onChange={(spot) => set({ spot })}
        align={align}
      />

      <Choice
        label="Closing ribbons"
        hint="A ribbon glued on so the bag can be tied shut. This is not the handle. The picture shows the bow. White and black are the same price."
        options={ROPE_BAG_RIBBONS}
        value={values.ribbons}
        onChange={(ribbons) => set({ ribbons })}
        align={align}
      />

      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-2 text-sm font-semibold text-stone-900">Quantity</legend>
        <div className={cn('grid grid-cols-4 gap-1.5 sm:grid-cols-6', align === 'center' && 'mx-auto')}>
          {ROPE_BAG_QUANTITIES.map((qty) => {
            const selected = qty === values.qty;
            return (
              <button
                key={qty}
                type="button"
                aria-pressed={selected}
                onClick={() => set({ qty })}
                className={cn(
                  'rounded-md border px-1 py-1.5 text-xs font-medium tabular-nums',
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
        <div className={align === 'center' ? 'text-center' : 'text-left'}>
          <p className="text-2xl font-bold text-stone-900">{euro(priced.lineTotal)}</p>
          <p className="mt-1 text-xs text-stone-500">
            ex VAT, delivery to Ireland included
            {priced.qty > 1 ? ` · ${euro(priced.each)} each` : ''}
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
