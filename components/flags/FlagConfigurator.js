import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  FLAG_SIZES,
  FLAG_MATERIALS,
  FLAG_FINISHING,
  DEFAULT_FLAG_CONFIG,
  calculateFlagPrice,
  getFlagSize,
  getFlagMaterial,
  getFlagFinishing,
} from '../../data/flag-poles-options';

function InfoIcon({ title }) {
  return (
    <button
      type="button"
      title={title || 'More information'}
      className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] font-bold leading-none hover:bg-blue-600 transition-colors"
      aria-label="More information"
    >
      i
    </button>
  );
}

function RecommendedBadge() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-xs font-semibold text-center py-1.5 rounded-b-lg">
      Recommended
    </div>
  );
}

function EcoBadge() {
  return (
    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm" title="Eco-friendly">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582a1 1 0 01.657.757l1.068 5.285a1 1 0 01-1.514 1.014L10 11.228l-4.165 2.733a1 1 0 01-1.514-1.014l1.068-5.285a1 1 0 01.657-.757L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function OptionImagePlaceholder({ label, variant = 'fabric' }) {
  const bg =
    variant === 'mesh'
      ? 'bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300'
      : 'bg-gradient-to-br from-white via-slate-50 to-slate-200';

  return (
    <div className={`relative w-full h-full ${bg} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: variant === 'mesh'
          ? 'repeating-linear-gradient(45deg, #94a3b8 0, #94a3b8 1px, transparent 0, transparent 50%)'
          : 'repeating-linear-gradient(0deg, #e2e8f0 0, #e2e8f0 1px, transparent 0, transparent 8px)',
        backgroundSize: variant === 'mesh' ? '8px 8px' : '100% 8px',
      }} />
      {label && (
        <span className="relative text-[10px] text-slate-400 font-medium px-2 text-center leading-tight">
          {label}
        </span>
      )}
    </div>
  );
}

function FinishingThumbnail({ optionId }) {
  const variants = {
    'cord-loop': (
      <div className="flex items-end justify-center h-full bg-slate-100 p-2 gap-1">
        <div className="w-1 h-12 bg-slate-400 rounded-full" />
        <div className="w-8 h-6 border-2 border-slate-300 rounded-sm bg-white mb-1" />
        <div className="w-0.5 h-8 bg-amber-700 rounded-full -ml-3 mb-2 rotate-12" />
      </div>
    ),
    'white-hooks': (
      <div className="flex items-end justify-center h-full bg-slate-100 p-2">
        <div className="w-1 h-12 bg-slate-400 rounded-full" />
        <div className="w-3 h-4 bg-white border border-slate-300 rounded-sm -ml-1 mb-6 shadow-sm" />
        <div className="w-10 h-7 border-2 border-slate-300 rounded-sm bg-white mb-1 -ml-1" />
      </div>
    ),
    'black-hooks': (
      <div className="flex items-end justify-center h-full bg-slate-100 p-2">
        <div className="w-1 h-12 bg-slate-400 rounded-full" />
        <div className="w-3 h-4 bg-slate-800 border border-slate-900 rounded-sm -ml-1 mb-6 shadow-sm" />
        <div className="w-10 h-7 border-2 border-slate-300 rounded-sm bg-white mb-1 -ml-1" />
      </div>
    ),
    'tunnel-white': (
      <div className="flex items-end justify-center h-full bg-slate-100 p-2">
        <div className="w-2 h-12 bg-white border border-slate-300 rounded-full" />
        <div className="w-10 h-7 border-2 border-slate-300 rounded-sm bg-white mb-1 -ml-2" />
      </div>
    ),
    'tunnel-black': (
      <div className="flex items-end justify-center h-full bg-slate-100 p-2">
        <div className="w-2 h-12 bg-slate-800 border border-slate-900 rounded-full" />
        <div className="w-10 h-7 border-2 border-slate-300 rounded-sm bg-white mb-1 -ml-2" />
      </div>
    ),
    'no-reinforcement': (
      <div className="flex items-center justify-center h-full bg-slate-100 p-3">
        <div className="w-full h-8 border-2 border-dashed border-slate-300 rounded-sm bg-white" />
      </div>
    ),
    'rings-30cm': (
      <div className="flex items-center justify-center h-full bg-slate-100 p-3">
        <div className="w-full h-8 border-2 border-slate-300 rounded-sm bg-white flex items-center justify-around px-1">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full border-2 border-slate-400 bg-slate-50" />
          ))}
        </div>
      </div>
    ),
    'corner-rings': (
      <div className="flex items-center justify-center h-full bg-slate-100 p-3">
        <div className="relative w-full h-8 border-2 border-slate-300 rounded-sm bg-white">
          <div className="absolute top-0.5 left-0.5 w-2.5 h-2.5 rounded-full border-2 border-slate-400 bg-slate-50" />
          <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full border-2 border-slate-400 bg-slate-50" />
        </div>
      </div>
    ),
  };

  return variants[optionId] || <OptionImagePlaceholder />;
}

function SectionLabel({ children, info }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <h3 className="text-base font-semibold text-slate-900">{children}</h3>
      {info && <InfoIcon title={info} />}
    </div>
  );
}

function formatEuro(value) {
  return `€${Number(value).toFixed(2)}`;
}

export default function FlagConfigurator({ onConfigChange }) {
  const [config, setConfig] = useState(DEFAULT_FLAG_CONFIG);
  const [showCustomSize, setShowCustomSize] = useState(false);
  const [calculated, setCalculated] = useState(false);

  const selectedSize = getFlagSize(config.sizeId);
  const selectedMaterial = getFlagMaterial(config.materialId);
  const selectedFinishing = getFlagFinishing(config.finishingId);

  const pricing = useMemo(
    () => calculateFlagPrice(config),
    [config.materialId, config.finishingId, config.quantity],
  );

  const updateConfig = (patch) => {
    setConfig((prev) => {
      const next = { ...prev, ...patch };
      onConfigChange?.(next);
      return next;
    });
    setCalculated(false);
  };

  const handleCalculate = () => {
    setCalculated(true);
    onConfigChange?.({ ...config, pricing: calculateFlagPrice(config) });
  };

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
      {/* Options panel */}
      <div className="space-y-10">
        {/* Size */}
        <section>
          <SectionLabel info="Flag dimensions in centimetres (width x height)">
            Size: {selectedSize?.label}: {selectedSize?.dimensions}
          </SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {FLAG_SIZES.map((size) => {
              const selected = config.sizeId === size.id;
              return (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => updateConfig({ sizeId: size.id })}
                  className={`rounded-lg border-2 px-3 py-4 text-center transition-all hover:border-blue-300 ${
                    selected
                      ? 'border-blue-500 bg-blue-50/40 shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-semibold text-slate-900">{size.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{size.dimensions}</div>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setShowCustomSize((v) => !v)}
            className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
          >
            Need a custom size? Click here
            <svg
              className={`w-4 h-4 transition-transform ${showCustomSize ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showCustomSize && (
            <div className="mt-3 p-4 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-600">
              Custom sizes available on request — contact us with your required dimensions for a quote.
            </div>
          )}
        </section>

        {/* Quantity */}
        <section>
          <SectionLabel>Quantity</SectionLabel>
          <div className="flex flex-wrap items-end gap-3">
            <div>
              <label htmlFor="flag-quantity" className="block text-xs text-slate-500 mb-1">
                Units
              </label>
              <input
                id="flag-quantity"
                type="number"
                min="1"
                value={config.quantity}
                onChange={(e) => updateConfig({ quantity: e.target.value })}
                className="w-28 rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={handleCalculate}
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              Calculate
            </button>
          </div>
        </section>

        {/* Material */}
        <section>
          <SectionLabel info="Outdoor flag fabric options">
            Material: {selectedMaterial?.name}
          </SectionLabel>
          <div className="grid sm:grid-cols-2 gap-4">
            {FLAG_MATERIALS.map((material) => {
              const selected = config.materialId === material.id;
              return (
                <button
                  key={material.id}
                  type="button"
                  onClick={() => updateConfig({ materialId: material.id })}
                  className={`relative flex rounded-lg border-2 overflow-hidden text-left transition-all hover:border-blue-300 ${
                    selected ? 'border-blue-500 shadow-sm' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="w-28 sm:w-32 flex-shrink-0 h-28 relative">
                    {material.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={material.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <OptionImagePlaceholder
                        label="Image coming soon"
                        variant={material.id === 'longlife' ? 'mesh' : 'fabric'}
                      />
                    )}
                  </div>
                  <div className={`flex-1 p-4 flex flex-col justify-center ${material.recommended ? 'pb-10' : ''}`}>
                    <div className="font-semibold text-slate-900 text-sm leading-snug pr-6">{material.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{material.gsm}</div>
                    <div className="text-sm font-bold text-emerald-600 mt-2">{formatEuro(material.price)}</div>
                  </div>
                  {material.eco && <EcoBadge />}
                  {material.recommended && <RecommendedBadge />}
                </button>
              );
            })}
          </div>
        </section>

        {/* Finishing */}
        <section>
          <SectionLabel info="How the flag attaches to the pole">
            Finishing: {selectedFinishing?.name}
          </SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {FLAG_FINISHING.map((option) => {
              const selected = config.finishingId === option.id;
              const hasAddon = option.addon > 0;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => updateConfig({ finishingId: option.id })}
                  className={`relative flex flex-col rounded-lg border-2 overflow-hidden text-left transition-all hover:border-blue-300 ${
                    selected ? 'border-blue-500 shadow-sm' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="h-24 w-full">
                    {option.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={option.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <FinishingThumbnail optionId={option.id} />
                    )}
                  </div>
                  <div className={`p-2.5 flex-1 flex flex-col justify-between ${option.recommended ? 'pb-9' : ''}`}>
                    <p className="text-xs font-medium text-slate-800 leading-snug">{option.name}</p>
                    {hasAddon && (
                      <p className="text-xs font-bold text-emerald-600 mt-1.5">+ {formatEuro(option.addon)}</p>
                    )}
                  </div>
                  {option.recommended && <RecommendedBadge />}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* Summary sidebar */}
      <aside className="lg:sticky lg:top-6">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="bg-slate-900 px-5 py-4">
            <h3 className="text-white font-semibold">Your configuration</h3>
            <p className="text-slate-400 text-xs mt-0.5">Review before requesting a quote</p>
          </div>
          <div className="p-5 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Size</span>
              <span className="text-slate-900 font-medium text-right">
                {selectedSize?.label} ({selectedSize?.dimensions})
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Quantity</span>
              <span className="text-slate-900 font-medium">{config.quantity} unit{Number(config.quantity) !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Material</span>
              <span className="text-slate-900 font-medium text-right">{selectedMaterial?.name}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Finishing</span>
              <span className="text-slate-900 font-medium text-right">{selectedFinishing?.name}</span>
            </div>

            <div className="border-t border-slate-100 pt-3 mt-3">
              {calculated ? (
                <>
                  <div className="flex justify-between gap-4 mb-1">
                    <span className="text-slate-500">Unit price</span>
                    <span className="text-slate-900 font-medium">{formatEuro(pricing.unitPrice)}</span>
                  </div>
                  <div className="flex justify-between gap-4 items-baseline">
                    <span className="text-slate-700 font-semibold">Estimated total</span>
                    <span className="text-2xl font-bold text-emerald-600">{formatEuro(pricing.total)}</span>
                  </div>
                </>
              ) : (
                <p className="text-xs text-slate-500">
                  Click <strong>Calculate</strong> to see an estimated price based on your selections.
                </p>
              )}
            </div>
          </div>
          <div className="px-5 pb-5">
            <Link
              href="/quote"
              className="block w-full text-center rounded-xl bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
