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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Label } from '../ui/label';
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

  return (
    <div className={cn('w-full h-full', styles[variant] || styles['sulfate-cardboard'])} />
  );
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
        className="object-contain p-3"
        sizes="(max-width: 768px) 100vw, 400px"
        unoptimized={process.env.NODE_ENV === 'production'}
      />
    </div>
  );
}

function SizeDiagram({ width, height }) {
  const sheetW = 56;
  const sheetH = 72;
  const scale = Math.min((sheetW - 8) / width, (sheetH - 8) / height);
  const w = Math.max(8, Math.round(width * scale));
  const h = Math.max(8, Math.round(height * scale));

  return (
    <div className="flex items-center justify-center py-5 px-3 min-h-[120px]">
      <div className="relative" style={{ width: sheetW, height: sheetH }}>
        <div className="absolute inset-0 rounded border border-dashed border-stone-300 bg-stone-50" />
        <div
          className="absolute bottom-1.5 left-1.5 rounded-sm border-2 border-stone-800 bg-white shadow-sm"
          style={{ width: w, height: h }}
        />
      </div>
    </div>
  );
}

function PrintingIcon({ sides }) {
  if (sides === 'single') {
    return (
      <div className="flex items-center justify-center py-6 min-h-[100px]">
        <div className="w-14 h-[4.5rem] border-2 border-stone-800 rounded-md bg-white flex items-center justify-center">
          <span className="text-xl font-light text-stone-400">1</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-6 min-h-[100px] gap-1">
      <div className="w-12 h-16 border-2 border-stone-800 rounded-md bg-white flex items-center justify-center z-10">
        <span className="text-lg font-light text-stone-400">1</span>
      </div>
      <div className="w-12 h-16 border-2 border-stone-300 rounded-md bg-stone-50 flex items-center justify-center -ml-2 mt-2">
        <span className="text-lg font-light text-stone-300">2</span>
      </div>
    </div>
  );
}

function OptionButton({ selected, onClick, children, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full rounded-xl border-2 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
        selected
          ? 'border-violet-600 bg-violet-50/40 shadow-sm'
          : 'border-stone-200 bg-white hover:border-violet-200 hover:bg-stone-50/50',
        className,
      )}
    >
      {children}
    </button>
  );
}

function ConfigSummary({ config }) {
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

  return (
    <dl className="space-y-4">
      {rows.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">{label}</dt>
          <dd className="text-sm font-medium text-stone-900 leading-snug">{value}</dd>
        </div>
      ))}
    </dl>
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
      <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] xl:grid-cols-[minmax(0,400px)_1fr_minmax(0,280px)] gap-8 lg:gap-10 items-start">
        {/* Sticky material preview */}
        <div className="lg:sticky lg:top-8">
          <Card className="overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Material preview</CardTitle>
              <CardDescription>{formatPremiumLeafletMaterialLabel(selectedMaterial)}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <MaterialImage
                material={selectedMaterial}
                priority
                className="relative aspect-[3/4] w-full rounded-lg overflow-hidden"
              />
            </CardContent>
          </Card>
        </div>

        {/* Options */}
        <div className="space-y-12 min-w-0">
          {/* Materials */}
          <section>
            <div className="mb-5">
              <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1">Step 1</p>
              <h3 className="text-xl font-semibold text-stone-900">Choose material</h3>
              <p className="text-sm text-stone-500 mt-1">Selected: {formatPremiumLeafletMaterialLabel(selectedMaterial)}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PREMIUM_LEAFLET_MATERIALS.map((material) => {
                const selected = config.materialId === material.id;
                return (
                  <OptionButton
                    key={material.id}
                    selected={selected}
                    onClick={() => updateConfig({ materialId: material.id })}
                  >
                    <div className="relative aspect-[4/3] bg-stone-100 rounded-t-[10px] overflow-hidden">
                      {material.image ? (
                        <Image
                          src={material.image}
                          alt=""
                          fill
                          className="object-contain p-2"
                          sizes="200px"
                          unoptimized={process.env.NODE_ENV === 'production'}
                        />
                      ) : (
                        <MaterialSwatch variant={material.variant} />
                      )}
                    </div>
                    <div className="px-4 py-3 border-t border-stone-100">
                      <p className="font-semibold text-stone-900 text-sm">{material.name}</p>
                      <p className="text-xs text-stone-500 mt-0.5">{material.gsm}</p>
                    </div>
                  </OptionButton>
                );
              })}
            </div>
          </section>

          {/* Sizes */}
          <section>
            <div className="mb-5">
              <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1">Step 2</p>
              <h3 className="text-xl font-semibold text-stone-900">Choose size</h3>
              <p className="text-sm text-stone-500 mt-1">Selected: {selectedSize?.label} — {selectedSize?.dimensions}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {PREMIUM_LEAFLET_SIZES.map((size) => {
                const selected = config.sizeId === size.id;
                return (
                  <OptionButton
                    key={size.id}
                    selected={selected}
                    onClick={() => updateConfig({ sizeId: size.id })}
                    className="text-center"
                  >
                    <SizeDiagram width={size.width} height={size.height} />
                    <div className="px-3 pb-4 pt-1 border-t border-stone-100 space-y-1">
                      <p className="font-semibold text-stone-900 text-sm">{size.label}</p>
                      <p className="text-xs text-stone-500">{size.dimensions}</p>
                      {size.recommended && (
                        <Badge className="mt-1">Recommended</Badge>
                      )}
                    </div>
                  </OptionButton>
                );
              })}
            </div>
          </section>

          {/* Printing */}
          <section>
            <div className="mb-5">
              <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1">Step 3</p>
              <h3 className="text-xl font-semibold text-stone-900">Printing options</h3>
              <p className="text-sm text-stone-500 mt-1">Selected: {selectedPrinting?.name}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
              {PREMIUM_LEAFLET_PRINTING.map((option) => {
                const selected = config.printingId === option.id;
                return (
                  <OptionButton
                    key={option.id}
                    selected={selected}
                    onClick={() => updateConfig({ printingId: option.id })}
                    className="text-center"
                  >
                    <PrintingIcon sides={option.id === 'single-sided' ? 'single' : 'double'} />
                    <div className="px-4 pb-4 border-t border-stone-100">
                      <p className="font-semibold text-stone-900 text-sm">{option.name}</p>
                    </div>
                  </OptionButton>
                );
              })}
            </div>
          </section>

          {/* Quantity */}
          <section>
            <div className="mb-5">
              <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1">Step 4</p>
              <h3 className="text-xl font-semibold text-stone-900">Quantity</h3>
            </div>
            <div className="max-w-xs">
              <Label htmlFor="premium-leaflet-quantity" className="mb-2 block">How many leaflets?</Label>
              <input
                id="premium-leaflet-quantity"
                type="number"
                min="1"
                value={config.quantity}
                onChange={(e) => updateConfig({ quantity: e.target.value })}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
          </section>

          {/* Mobile / tablet quote CTA */}
          <div className="xl:hidden">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Your quote</CardTitle>
                <CardDescription>Review your selections before requesting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ConfigSummary config={config} />
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full rounded-lg bg-violet-600 text-white font-semibold py-3 hover:bg-violet-700 transition-colors"
                >
                  Request Quote
                </button>
                {submitted && (
                  <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 text-center">
                    Quote request sent — we&apos;ll be in touch shortly.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Desktop quote sidebar */}
        <aside className="hidden xl:block sticky top-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Your quote builder</CardTitle>
              <CardDescription>Selections update as you choose options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <ConfigSummary config={config} />
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full rounded-lg bg-violet-600 text-white font-semibold py-3 hover:bg-violet-700 transition-colors"
              >
                Request Quote
              </button>
              {submitted && (
                <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 text-center">
                  Quote request sent — we&apos;ll be in touch shortly.
                </p>
              )}
            </CardContent>
          </Card>
        </aside>
      </div>

      <div className="xl:hidden h-4" aria-hidden="true" />

      <PremiumLeafletQuoteModal isOpen={modalOpen} onClose={handleModalClose} config={config} />
    </>
  );
}
