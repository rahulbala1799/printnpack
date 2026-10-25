import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../lib/cn';
import {
  RIBBON_COLOURS,
  RIBBON_CUT_LENGTHS,
  RIBBON_CUT_PIECES,
  RIBBON_ENDS,
  RIBBON_PRINTS,
  RIBBON_ROLL_METRES,
  RIBBON_WIDTHS,
  RIBBON_WIDTH_GUIDE,
  normalizeRibbon,
  priceRibbon,
  ribbonWidthNote,
} from '../../data/ribbons';

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

function Choice({ label, hint, options, value, onChange, align }) {
  return (
    <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
      <legend className="mb-1 text-sm font-semibold text-stone-900">{label}</legend>
      {hint ? <p className={cn('mb-2 text-xs text-stone-500', align === 'center' && 'text-center')}>{hint}</p> : null}
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

export default function RibbonConfigurator({
  initial,
  onSubmit,
  onChange,
  submitLabel = 'Add to quote',
  align = 'start',
  showPreview = true,
}) {
  const [values, setValues] = useState(() => normalizeRibbon(initial || {}));

  const set = (patch) => {
    setValues((prev) => normalizeRibbon({ ...prev, ...patch }));
  };

  const priced = useMemo(() => priceRibbon(values), [values]);
  const prints = RIBBON_PRINTS.filter((print) => values.form === 'cut' || values.amount >= 300 || print.id === '00' || print.id === '10');
  const amounts = values.form === 'roll' ? RIBBON_ROLL_METRES : RIBBON_CUT_PIECES;
  const width = RIBBON_WIDTHS.find((item) => item.id === values.width);

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
      {showPreview && priced ? (
        <figure className={align === 'center' ? 'text-center' : 'text-left'}>
          {priced.colourImage ? (
            <img
              src={priced.colourImage}
              alt={priced.colourImageAlt}
              className="w-full rounded-xl border border-stone-200"
            />
          ) : (
            <div
              className="flex h-28 items-center justify-center rounded-xl border border-stone-200"
              style={{ background: priced.colourHex }}
              role="img"
              aria-label={`${priced.colourLabel} satin`}
            >
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-900">
                {priced.colourLabel} satin
              </span>
            </div>
          )}
          <figcaption className="mt-1.5 text-xs text-stone-500">
            {priced.colourImage
              ? `${priced.colourLabel} satin. The name on the ribbon is a sample. The pieces in front have a notched end.`
              : `${priced.colourLabel} satin. This colour has no photo yet. Your own artwork is printed on the satin.`}
          </figcaption>
        </figure>
      ) : null}

      <Choice
        label="What you are buying"
        hint={values.form === 'roll'
          ? 'One continuous length, wound 100 metres to a roll. You cut the bows yourself.'
          : 'Pieces already cut to one length, ready to tie onto a bag, a box or a gift.'}
        options={[
          { id: 'roll', label: 'A roll' },
          { id: 'cut', label: 'Cut pieces' },
        ]}
        value={values.form}
        onChange={(form) => set({ form })}
        align={align}
      />

      <Choice
        label="Width"
        hint={width ? `${width.label} is ${width.hint.charAt(0).toLowerCase()}${width.hint.slice(1)}.` : ''}
        options={RIBBON_WIDTHS.map((item) => ({ id: item.id, label: item.label }))}
        value={values.width}
        onChange={(widthId) => set({ width: widthId })}
        align={align}
      />
      <figure className={align === 'center' ? 'text-center' : 'text-left'}>
        <img
          src={RIBBON_WIDTH_GUIDE.src}
          alt={RIBBON_WIDTH_GUIDE.alt}
          className="w-full rounded-xl border border-stone-200"
        />
        <figcaption className="mt-1.5 text-xs text-stone-500">
          {ribbonWidthNote(values.width)} Same length in the picture.
        </figcaption>
      </figure>

      <fieldset className={cn('border-0 p-0', align === 'center' ? 'text-center' : 'text-left')}>
        <legend className="mb-1 text-sm font-semibold text-stone-900">Ribbon colour</legend>
        <p className={cn('mb-2 text-xs text-stone-500', align === 'center' && 'text-center')}>
          {priced ? priced.colourLabel : 'White'}. The colour of the satin does not change the price.
        </p>
        <div className={cn('flex flex-wrap gap-2', align === 'center' && 'justify-center')}>
          {RIBBON_COLOURS.map((colour) => {
            const selected = colour.id === values.colour;
            return (
              <button
                key={colour.id}
                type="button"
                aria-label={colour.label}
                aria-pressed={selected}
                title={colour.label}
                onClick={() => set({ colour: colour.id })}
                className={cn(
                  'h-8 w-8 rounded-full border',
                  selected ? 'border-stone-900 ring-2 ring-stone-900 ring-offset-2' : 'border-stone-300'
                )}
                style={{ background: colour.hex }}
              />
            );
          })}
        </div>
      </fieldset>

      <Choice
        label="Your logo"
        hint={values.form === 'roll' && values.amount < 300
          ? '2, 3 and 4 colours start at 300 metres.'
          : 'No logo is plain satin. 1 to 4 colours is your logo, printed on the ribbon.'}
        options={prints}
        value={values.print}
        onChange={(print) => set({ print })}
        align={align}
      />

      {values.form === 'cut' ? (
        <>
          <Choice
            label="Length of each piece"
            hint="How long each cut piece is."
            options={RIBBON_CUT_LENGTHS}
            value={values.length}
            onChange={(length) => set({ length })}
            align={align}
          />
          <Choice
            label="End of each piece"
            hint="Straight is a flat end. Diagonal is a slanted end. Notch is a V cut. The end does not change the price."
            options={RIBBON_ENDS}
            value={values.end}
            onChange={(end) => set({ end })}
            align={align}
          />
        </>
      ) : null}

      <Choice
        label={values.form === 'roll' ? 'How many metres' : 'How many pieces'}
        hint={values.form === 'roll'
          ? '100 metres is one roll. 300 metres is three rolls.'
          : 'The smallest order of cut pieces is 300.'}
        options={amounts.map((amount) => ({ id: String(amount), label: String(amount) }))}
        value={String(values.amount)}
        onChange={(amount) => set({ amount: Number(amount) })}
        align={align}
      />

      {priced ? (
        <div className={align === 'center' ? 'text-center' : 'text-left'}>
          <p className="text-2xl font-bold text-stone-900">{euro(priced.lineTotal)}</p>
          <p className="mt-1 text-sm text-stone-700">{priced.summary}</p>
          <p className="mt-1 text-xs text-stone-500">
            ex VAT, delivery to Ireland included
            {values.form === 'roll' ? ` · ${euro(priced.each)} a metre` : ` · ${euro(priced.each)} each`}
          </p>
        </div>
      ) : null}

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
