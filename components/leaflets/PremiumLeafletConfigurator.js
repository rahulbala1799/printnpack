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
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/cn';

function MaterialSwatch({ variant }) {
  const styles = {
    'metallic-gold': 'bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-500',
    'metallic-silver': 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400',
    'metallic-white': 'bg-gradient-to-br from-white via-slate-100 to-slate-200',
    'pearl-marble': 'bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300',
    'sulfate-cardboard': 'bg-gradient-to-br from-stone-50 via-white to-stone-100',
    pvc: 'bg-gradient-to-br from-sky-50 via-white to-sky-100',
  };

  return <div className={cn('w-full h-full', styles[variant] || styles['sulfate-cardboard'])} />;
}

function MaterialImage({ material, priority = false, className = '' }) {
  if (!material?.image) {
    return (
      <div className={cn('relative flex items-center justify-center bg-stone-100 overflow-hidden', className)}>
        <div className="absolute inset-0">
          <MaterialSwatch variant={material?.variant} />
        </div>
        <span className="relative z-10 text-sm text-stone-500 px-4 text-center">Preview coming soon</span>
      </div>
    );
  }

  return (
    <div className={cn('relative bg-stone-100', className)}>
      <Image
        key={material.id}
        src={material.image}
        alt={material.previewAlt || material.name}
        fill
        priority={priority}
        className="object-contain p-4 sm:p-6"
        sizes="(max-width: 1024px) 100vw, 50vw"
        unoptimized={process.env.NODE_ENV === 'production'}
      />
    </div>
  );
}

function OptionButton({ selected, onClick, children, className, compact = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
        compact ? 'rounded-lg border' : 'w-full rounded-xl border-2',
        selected
          ? 'border-violet-600 bg-violet-50 shadow-sm ring-1 ring-violet-600'
          : 'border-stone-200 bg-white hover:border-violet-200 hover:bg-stone-50/80',
        className,
      )}
    >
      {children}
    </button>
  );
}

function ConfigSummary({ config, horizontal = false }) {
  const material = getPremiumLeafletMaterial(config.materialId);
  const size = getPremiumLeafletSize(config.sizeId);
  const printing = getPremiumLeafletPrinting(config.printingId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  const rows = [
    { label: 'Material', value: formatPremiumLeafletMaterialLabel(material) },
    { label: 'Size', value: `${size?.label} (${size?.dimensions})` },
    { label: 'Printing', value: printing?.name },
    { label: 'Quantity', value: String(quantity) },
  ];

  if (horizontal) {
    return (
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 flex-1 min-w-0">
        {rows.map(({ label, value }) => (
          <div key={label} className="min-w-0">
            <dt className="text-[10px] font-semibold text-violet-200 uppercase tracking-wider mb-0.5">{label}</dt>
            <dd className="text-sm font-medium text-white leading-snug truncate" title={value}>{value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl className="space-y-3">
      {rows.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-0.5">{label}</dt>
          <dd className="text-sm font-medium text-stone-900 leading-snug">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function QuoteSummaryBar({ config, onRequestQuote, submitted, position = 'top' }) {
  const material = getPremiumLeafletMaterial(config.materialId);

  return (
    <Card className="overflow-hidden border-violet-200 bg-gradient-to-r from-violet-700 to-indigo-800 text-white shadow-md">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          {material?.image && (
            <div className="relative hidden sm:block w-12 h-14 flex-shrink-0 rounded-md overflow-hidden bg-white/10 border border-white/20">
              <Image
                key={material.id}
                src={material.image}
                alt=""
                fill
                className="object-contain p-0.5"
                sizes="48px"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {position === 'top' && (
              <p className="text-[10px] font-semibold text-violet-200 uppercase tracking-wider mb-2">
                Your quote builder
              </p>
            )}
            <ConfigSummary config={config} horizontal />
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full sm:w-auto sm:min-w-[140px] rounded-lg bg-white text-violet-700 font-semibold px-5 py-2.5 text-sm hover:bg-violet-50 transition-colors"
            >
              Request Quote
            </button>
            {submitted && position === 'bottom' && (
              <p className="mt-1.5 text-xs text-emerald-200 text-center sm:text-right">
                Quote request sent — we&apos;ll be in touch shortly.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SectionHeading({ step, title, selected }) {
  return (
    <div className="mb-3">
      <p className="text-[10px] font-semibold text-violet-600 uppercase tracking-wider mb-0.5">Step {step}</p>
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      {selected && <p className="text-xs text-stone-500 mt-0.5 truncate">{selected}</p>}
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

  return (
    <>
      <div className="space-y-6">
        <QuoteSummaryBar config={config} onRequestQuote={openQuoteModal} submitted={submitted} position="top" />

        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6 lg:gap-8 items-start">
          {/* Large material preview */}
          <div className="lg:sticky lg:top-6 order-1">
            <Card className="overflow-hidden h-full">
              <div className="px-4 py-3 border-b border-stone-100 bg-stone-50/80">
                <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider">Material preview</p>
                <p className="text-sm font-medium text-stone-900 mt-0.5 truncate">
                  {formatPremiumLeafletMaterialLabel(selectedMaterial)}
                </p>
              </div>
              <MaterialImage
                material={selectedMaterial}
                priority
                className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[min(72vh,680px)]"
              />
            </Card>
          </div>

          {/* Compact selectors */}
          <div className="space-y-7 min-w-0 order-2">
            {/* Materials */}
            <section>
              <SectionHeading
                step={1}
                title="Choose material"
                selected={formatPremiumLeafletMaterialLabel(selectedMaterial)}
              />
              <div className="grid grid-cols-2 gap-2">
                {PREMIUM_LEAFLET_MATERIALS.map((material) => {
                  const selected = config.materialId === material.id;
                  return (
                    <OptionButton
                      key={material.id}
                      selected={selected}
                      compact
                      onClick={() => updateConfig({ materialId: material.id })}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-2 p-2">
                        <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-stone-100">
                          {material.image ? (
                            <Image
                              src={material.image}
                              alt=""
                              fill
                              className="object-contain p-0.5"
                              sizes="48px"
                              unoptimized={process.env.NODE_ENV === 'production'}
                            />
                          ) : (
                            <MaterialSwatch variant={material.variant} />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-stone-900 text-xs leading-tight truncate">{material.name}</p>
                          <p className="text-[10px] text-stone-500 mt-0.5">{material.gsm}</p>
                        </div>
                      </div>
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            {/* Sizes */}
            <section>
              <SectionHeading
                step={2}
                title="Choose size"
                selected={`${selectedSize?.label} — ${selectedSize?.dimensions}`}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PREMIUM_LEAFLET_SIZES.map((size) => {
                  const selected = config.sizeId === size.id;
                  return (
                    <OptionButton
                      key={size.id}
                      selected={selected}
                      compact
                      onClick={() => updateConfig({ sizeId: size.id })}
                      className="w-full overflow-hidden px-2.5 py-2"
                    >
                      <div className="flex items-center gap-1 min-w-0">
                        <span className="font-medium text-stone-900 text-xs truncate">{size.label}</span>
                        {size.recommended && (
                          <span className="shrink-0 rounded bg-violet-100 text-violet-700 text-[9px] font-semibold leading-none px-1 py-0.5">
                            Top
                          </span>
                        )}
                      </div>
                      <span className="block text-[10px] text-stone-500 truncate mt-0.5">{size.dimensions}</span>
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            {/* Printing */}
            <section>
              <SectionHeading step={3} title="Printing" selected={selectedPrinting?.name} />
              <div className="grid grid-cols-2 gap-2">
                {PREMIUM_LEAFLET_PRINTING.map((option) => {
                  const selected = config.printingId === option.id;
                  return (
                    <OptionButton
                      key={option.id}
                      selected={selected}
                      compact
                      onClick={() => updateConfig({ printingId: option.id })}
                      className="px-3 py-2.5 text-center"
                    >
                      <p className="font-medium text-stone-900 text-xs leading-snug">{option.name}</p>
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            {/* Quantity */}
            <section>
              <SectionHeading step={4} title="Quantity" selected={`${config.quantity} leaflets`} />
              <input
                id="premium-leaflet-quantity"
                type="number"
                min="1"
                value={config.quantity}
                onChange={(e) => updateConfig({ quantity: e.target.value })}
                className="w-full max-w-[140px] rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </section>
          </div>
        </div>

        <QuoteSummaryBar config={config} onRequestQuote={openQuoteModal} submitted={submitted} position="bottom" />
      </div>

      <PremiumLeafletQuoteModal isOpen={modalOpen} onClose={handleModalClose} config={config} />
    </>
  );
}
