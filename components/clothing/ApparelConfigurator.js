import React, { useMemo, useState } from 'react';
import ClothingQuoteForm from '../ClothingQuoteForm';
import {
  CLOTHING_SIZES,
  GARMENT_PRICING,
  MIN_QTY,
  PRINT_COMBOS,
  colourRangesForGarment,
  formatEuro,
  getQtyBand,
  isLightColour,
  pricePerPiece,
} from '../../data/clothing-pricing';

function ColourSwatch({ colour, selected, onSelect }) {
  const light = isLightColour(colour.id);

  return (
    <button
      type="button"
      onClick={() => onSelect(colour)}
      title={colour.name}
      aria-pressed={selected}
      aria-label={colour.name}
      className={`group flex flex-col items-center gap-1.5 w-[4.5rem]`}
    >
      <span
        className={`relative h-11 w-11 rounded-full border transition-shadow ${
          selected
            ? 'ring-2 ring-offset-2 ring-blue-600 border-gray-900'
            : light
              ? 'border-gray-300 hover:border-gray-400'
              : 'border-black/10 hover:border-black/30'
        }`}
        style={{ backgroundColor: colour.hex }}
      >
        {selected && (
          <span className={`absolute inset-0 flex items-center justify-center ${light ? 'text-gray-900' : 'text-white'}`}>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </span>
      <span className={`text-[11px] leading-tight text-center ${selected ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
        {colour.name}
      </span>
    </button>
  );
}

export default function ApparelConfigurator({ product }) {
  const pricing = GARMENT_PRICING[product.pricingKey];
  const colourRanges = colourRangesForGarment(product.pricingKey);

  const [colour, setColour] = useState(colourRanges[0]?.colours[0] || null);
  const [size, setSize] = useState('M');
  const [qty, setQty] = useState(5);
  const [comboId, setComboId] = useState('chest');
  const [quoteOpen, setQuoteOpen] = useState(false);

  const combo = PRINT_COMBOS.find((c) => c.id === comboId) || PRINT_COMBOS[0];
  const band = getQtyBand(qty);
  const unit = useMemo(
    () => pricePerPiece(pricing.base, combo.areas, qty),
    [pricing.base, combo.areas, qty]
  );
  const total = unit != null && qty >= MIN_QTY ? unit * qty : null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Build your order</p>
        <p className="text-sm text-gray-500">Same price for S–3XL. Minimum {MIN_QTY} pieces.</p>
      </div>

      {colourRanges.length > 0 && (
        <div className="space-y-4">
          {colourRanges.map((group) => (
            <fieldset key={group.range}>
              <legend className="text-sm font-semibold text-gray-900 mb-3">
                Colour <span className="font-normal text-gray-400">· {group.range}</span>
              </legend>
              <div className="flex flex-wrap gap-x-2 gap-y-3">
                {group.colours.map((c) => (
                  <ColourSwatch
                    key={c.id}
                    colour={c}
                    selected={colour?.id === c.id}
                    onSelect={setColour}
                  />
                ))}
              </div>
            </fieldset>
          ))}
          <p className="text-sm text-gray-600">
            Selected: <span className="font-medium text-gray-900">{colour?.name}</span>
          </p>
        </div>
      )}

      <div>
        <p className="text-sm font-semibold text-gray-900 mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
          {CLOTHING_SIZES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`min-w-[3rem] px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                size === s
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-gray-900">Quantity</span>
          <input
            type="number"
            min={MIN_QTY}
            step={1}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="mt-1 block text-xs text-gray-400">
            {band ? `Band ${band.label} · 8% off each step` : `Enter ${MIN_QTY} or more`}
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-900">Print coverage</span>
          <select
            value={comboId}
            onChange={(e) => setComboId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {PRINT_COMBOS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-gray-400">
            +€1.50 per extra area after the first
          </span>
        </label>
      </div>

      <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500">Per piece · all sizes</p>
          <p className="text-2xl font-bold text-gray-900">{formatEuro(unit)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Order total</p>
          <p className="text-lg font-semibold text-gray-900">{formatEuro(total)}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setQuoteOpen(true)}
        disabled={unit == null}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3.5 px-6 rounded-xl"
      >
        Request this quote
      </button>

      {quoteOpen && (
        <ClothingQuoteForm
          isOpen={quoteOpen}
          onClose={() => setQuoteOpen(false)}
          productType={pricing.quoteType}
          preset={{
            quantity: qty,
            sizes: [size],
            colors: colour?.name ? [colour.name] : [],
            placements: [combo.label],
          }}
        />
      )}
    </div>
  );
}
