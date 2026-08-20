import React, { useState } from 'react';
import Image from 'next/image';
import {
  PREMIUM_LEAFLET_MATERIALS,
  PREMIUM_LEAFLET_SIZES,
  PREMIUM_LEAFLET_PRINTING,
  DEFAULT_PREMIUM_LEAFLET_CONFIG,
  getPremiumLeafletMaterial,
  getPremiumLeafletSize,
  getPremiumLeafletPrinting,
  formatPremiumLeafletMaterialLabel,
} from '../../data/premium-leaflets-options';
import PremiumLeafletQuoteModal from './PremiumLeafletQuoteModal';

function InfoIcon({ title }) {
  return (
    <button
      type="button"
      title={title || 'More information'}
      className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-violet-500 text-white text-[10px] font-bold leading-none hover:bg-violet-600 transition-colors"
      aria-label="More information"
    >
      i
    </button>
  );
}

function MaterialSwatch({ variant }) {
  const styles = {
    'metallic-gold': 'bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-500',
    'metallic-silver': 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400',
    'metallic-white': 'bg-gradient-to-br from-white via-slate-100 to-slate-200',
    'pearl-marble': 'bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300',
    'sulfate-cardboard': 'bg-gradient-to-br from-stone-50 via-white to-stone-100',
    pvc: 'bg-gradient-to-br from-sky-50 via-white to-sky-100',
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${styles[variant] || styles['sulfate-cardboard']}`}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            variant === 'pearl-marble'
              ? 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.9) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(200,200,200,0.5) 0%, transparent 35%)'
              : variant === 'pvc'
                ? 'radial-gradient(circle at 30% 40%, rgba(147,197,253,0.35) 0%, transparent 45%), radial-gradient(circle at 65% 70%, rgba(147,197,253,0.25) 0%, transparent 40%)'
                : 'none',
        }}
      />
      <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-white/20 border-t border-l border-white/40 rounded-tl-2xl shadow-inner" />
      {variant === 'sulfate-cardboard' && (
        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-white/80 border border-stone-200 flex items-center justify-center text-[8px] text-stone-500">
          ✎
        </div>
      )}
    </div>
  );
}

function SizeDiagram({ width, height }) {
  const maxW = 72;
  const maxH = 96;
  const scale = Math.min(maxW / width, maxH / height);
  const w = Math.round(width * scale);
  const h = Math.round(height * scale);

  return (
    <div className="flex items-center justify-center h-24 px-2">
      <div className="relative w-[88px] h-[104px]">
        <div className="absolute inset-0 border border-dashed border-stone-300 rounded-sm bg-stone-50" />
        <div
          className="absolute bottom-2 left-2 border-2 border-stone-700 bg-white shadow-sm"
          style={{ width: `${w}px`, height: `${h}px` }}
        />
      </div>
    </div>
  );
}

function PrintingIcon({ sides }) {
  if (sides === 'single') {
    return (
      <div className="flex items-center justify-center h-24">
        <div className="relative w-16 h-20 border-2 border-stone-700 rounded-sm bg-white flex items-center justify-center">
          <span className="text-2xl font-light text-stone-400">1</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-24 gap-1">
      <div className="relative w-14 h-[4.5rem] border-2 border-stone-700 rounded-sm bg-white flex items-center justify-center z-10">
        <span className="text-xl font-light text-stone-400">1</span>
      </div>
      <div className="relative w-14 h-[4.5rem] border-2 border-stone-300 rounded-sm bg-stone-50 flex items-center justify-center -ml-3 mt-2">
        <span className="text-xl font-light text-stone-300">2</span>
      </div>
    </div>
  );
}

function SectionHeader({ step, title, value, info }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
        {step}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-stone-900">
            {title}
            {value && (
              <span className="font-normal text-stone-500">: {value}</span>
            )}
          </h3>
          {info && <InfoIcon title={info} />}
        </div>
      </div>
    </div>
  );
}

function MaterialPreview({ material }) {
  if (!material) return null;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-stone-100 bg-stone-50">
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider">Material preview</p>
        <p className="text-sm font-semibold text-stone-900 mt-0.5">{formatPremiumLeafletMaterialLabel(material)}</p>
      </div>
      <div className="relative aspect-[4/3] bg-stone-100">
        {material.image ? (
          <Image
            key={material.id}
            src={material.image}
            alt={material.previewAlt || material.name}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 1024px) 100vw, 400px"
            unoptimized={process.env.NODE_ENV === 'production'}
          />
        ) : (
          <div className="absolute inset-0">
            <MaterialSwatch variant={material.variant} />
            <div className="absolute inset-0 flex items-center justify-center bg-stone-900/5 px-6 text-center">
              <p className="text-sm text-stone-500">Preview image coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ConfigSummary({ config, showMaterialImage = false }) {
  const material = getPremiumLeafletMaterial(config.materialId);
  const size = getPremiumLeafletSize(config.sizeId);
  const printing = getPremiumLeafletPrinting(config.printingId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  return (
    <div className="space-y-4">
      {showMaterialImage && material?.image && (
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
          <Image
            key={material.id}
            src={material.image}
            alt={material.previewAlt || material.name}
            fill
            className="object-cover"
            sizes="280px"
            unoptimized={process.env.NODE_ENV === 'production'}
          />
        </div>
      )}
      <dl className="space-y-3 text-sm">
      <div>
        <dt className="text-violet-200/80 text-xs uppercase tracking-wider mb-1">Material</dt>
        <dd className="text-white font-medium">{formatPremiumLeafletMaterialLabel(material)}</dd>
      </div>
      <div>
        <dt className="text-violet-200/80 text-xs uppercase tracking-wider mb-1">Size</dt>
        <dd className="text-white font-medium">{size?.label} — {size?.dimensions}</dd>
      </div>
      <div>
        <dt className="text-violet-200/80 text-xs uppercase tracking-wider mb-1">Printing</dt>
        <dd className="text-white font-medium">{printing?.name}</dd>
      </div>
      <div>
        <dt className="text-violet-200/80 text-xs uppercase tracking-wider mb-1">Quantity</dt>
        <dd className="text-white font-medium">{quantity}</dd>
      </div>
    </dl>
    </div>
  );
}

export default function PremiumLeafletConfigurator() {
  const [config, setConfig] = useState(DEFAULT_PREMIUM_LEAFLET_CONFIG);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedMaterial = getPremiumLeafletMaterial(config.materialId);
  const selectedSize = getPremiumLeafletSize(config.sizeId);
  const selectedPrinting = getPremiumLeafletPrinting(config.printingId);

  const updateConfig = (patch) => {
    setConfig((prev) => ({ ...prev, ...patch }));
  };

  const openQuoteModal = () => {
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleModalClose = (result) => {
    setModalOpen(false);
    if (result?.submitted) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const selectedCardClass = 'ring-2 ring-violet-600 border-violet-600 shadow-md';
  const cardClass = 'border-stone-200 bg-white hover:border-violet-300 hover:shadow-sm';

  return (
    <>
      <div className="rounded-2xl border border-stone-200 bg-stone-100/80 p-4 sm:p-6 lg:p-8">
        <div className="grid xl:grid-cols-[1fr_280px] gap-8 items-start">
          <div className="space-y-10">
            {/* Material */}
            <section>
              <SectionHeader
                step={1}
                title="Material"
                value={formatPremiumLeafletMaterialLabel(selectedMaterial)}
                info="Special material flyer stocks"
              />

              {/* Live preview — updates when material is selected */}
              <div className="mb-6 lg:hidden">
                <MaterialPreview material={selectedMaterial} />
              </div>

              <div className="grid lg:grid-cols-[1fr_300px] gap-6 items-start">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PREMIUM_LEAFLET_MATERIALS.map((material) => {
                    const selected = config.materialId === material.id;
                    return (
                      <button
                        key={material.id}
                        type="button"
                        onClick={() => updateConfig({ materialId: material.id })}
                        className={`relative flex flex-col rounded-xl border overflow-hidden text-left transition-all ${selected ? selectedCardClass : cardClass}`}
                      >
                        <div className="h-28 w-full relative">
                          {material.image ? (
                            <Image
                              src={material.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="160px"
                              unoptimized={process.env.NODE_ENV === 'production'}
                            />
                          ) : (
                            <MaterialSwatch variant={material.variant} />
                          )}
                        </div>
                        <div className="p-3 border-t border-stone-100">
                          <p className="text-sm font-semibold text-stone-900 leading-snug">{material.name}</p>
                          <p className="text-xs text-stone-500 mt-0.5">{material.gsm}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="hidden lg:block sticky top-6">
                  <MaterialPreview material={selectedMaterial} />
                </div>
              </div>
            </section>

            {/* Size */}
            <section>
              <SectionHeader
                step={2}
                title="Size"
                value={`${selectedSize?.label}: ${selectedSize?.dimensions}`}
                info="Leaflet dimensions in millimetres"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {PREMIUM_LEAFLET_SIZES.map((size) => {
                  const selected = config.sizeId === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => updateConfig({ sizeId: size.id })}
                      className={`relative flex flex-col rounded-xl border overflow-hidden text-center transition-all ${selected ? selectedCardClass : cardClass}`}
                    >
                      <SizeDiagram width={size.width} height={size.height} />
                      <div className={`p-3 border-t border-stone-100 ${size.recommended ? 'pb-9' : ''}`}>
                        <p className="text-sm font-semibold text-stone-900">{size.label}</p>
                        <p className="text-[11px] text-stone-500 mt-0.5 leading-tight">{size.dimensions}</p>
                      </div>
                      {size.recommended && (
                        <div className="absolute bottom-0 left-0 right-0 bg-violet-600 text-white text-[11px] font-semibold text-center py-1.5">
                          Recommended
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Printing */}
            <section>
              <SectionHeader
                step={3}
                title="Printing options"
                value={selectedPrinting?.name}
              />
              <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
                {PREMIUM_LEAFLET_PRINTING.map((option) => {
                  const selected = config.printingId === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => updateConfig({ printingId: option.id })}
                      className={`relative flex flex-col rounded-xl border overflow-hidden text-center transition-all ${selected ? selectedCardClass : cardClass}`}
                    >
                      <PrintingIcon sides={option.id === 'single-sided' ? 'single' : 'double'} />
                      <div className="p-3 border-t border-stone-100">
                        <p className="text-sm font-semibold text-stone-900">{option.name}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Quantity */}
            <section>
              <SectionHeader step={4} title="Quantity" value={String(config.quantity)} />
              <input
                id="premium-leaflet-quantity"
                type="number"
                min="1"
                value={config.quantity}
                onChange={(e) => updateConfig({ quantity: e.target.value })}
                className="w-36 rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </section>
          </div>

          {/* Desktop summary */}
          <aside className="hidden xl:block sticky top-6">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-violet-700 to-indigo-800">
              <div className="px-5 py-4 border-b border-white/10">
                <h3 className="text-white font-semibold">Your quote builder</h3>
                <p className="text-violet-200 text-xs mt-0.5">Selections update as you choose options</p>
              </div>
              <div className="p-5">
                <ConfigSummary config={config} showMaterialImage />
              </div>
              <div className="px-5 pb-5 space-y-3">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full rounded-xl bg-white text-violet-700 font-semibold py-3 hover:bg-violet-50 transition-colors"
                >
                  Request Quote
                </button>
                {submitted && (
                  <p className="text-xs text-emerald-200 bg-emerald-900/30 border border-emerald-400/30 rounded-lg px-3 py-2 text-center">
                    Quote request sent — we&apos;ll be in touch shortly.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-stone-200 bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <button
          type="button"
          onClick={openQuoteModal}
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3.5 hover:from-violet-700 hover:to-indigo-700 transition-colors"
        >
          Request Quote
        </button>
        {submitted && (
          <p className="mt-2 text-xs text-emerald-700 text-center">Quote request sent.</p>
        )}
      </div>

      {/* Desktop bottom bar */}
      <div className="hidden xl:flex mt-6 items-center justify-between gap-4 rounded-2xl border border-violet-100 bg-violet-50/50 px-6 py-4">
        <div className="min-w-0">
          <p className="font-semibold text-stone-900">Ready to request a quote?</p>
          <p className="text-sm text-stone-500 truncate mt-0.5">
            {formatPremiumLeafletMaterialLabel(selectedMaterial)} · {selectedSize?.label} · {selectedPrinting?.name} · {config.quantity} qty
          </p>
        </div>
        <button
          type="button"
          onClick={openQuoteModal}
          className="flex-shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-8 py-3 hover:from-violet-700 hover:to-indigo-700 transition-colors"
        >
          Request Quote
        </button>
      </div>

      <div className="xl:hidden h-20" aria-hidden="true" />

      <PremiumLeafletQuoteModal isOpen={modalOpen} onClose={handleModalClose} config={config} />
    </>
  );
}
