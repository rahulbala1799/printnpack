import React, { useState } from 'react';
import Image from 'next/image';
import {
  STAGE_BACKDROP_MATERIALS,
  STAGE_BACKDROP_STANDARD_SIZES,
  STAGE_BACKDROP_FINISHING,
  STAGE_BACKDROP_SIZE,
  STAGE_BACKDROP_MIN_QUANTITY,
  DEFAULT_STAGE_BACKDROP_CONFIG,
  getStageBackdropMaterial,
  getStageBackdropFinishing,
  clampStageBackdropSize,
  isValidStageBackdropSize,
  formatStageBackdropSize,
  matchingStandardSizeId,
} from '../../data/stage-backdrop-banners-options';
import StageBackdropQuoteModal from './StageBackdropQuoteModal';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/cn';

function MaterialSwatch({ variant }) {
  const styles = {
    matte: 'bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300',
    coated: 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200',
    structured: 'bg-[radial-gradient(circle_at_30%_20%,#f8fafc,transparent_40%),radial-gradient(circle_at_70%_80%,#e2e8f0,transparent_45%)] bg-stone-100',
  };
  return <div className={cn('w-full h-full', styles[variant] || styles.coated)} />;
}

function ProductPreview({ material, widthCm, heightCm, className = '' }) {
  const w = clampStageBackdropSize(widthCm);
  const h = clampStageBackdropSize(heightCm);
  const aspect = Math.min(2.4, Math.max(0.5, w / h));

  if (material?.image) {
    return (
      <div className={cn('relative bg-stone-100', className)}>
        <Image
          key={material.id}
          src={material.image}
          alt={material.previewAlt || material.name}
          fill
          priority
          className="object-contain p-4 sm:p-6"
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized={process.env.NODE_ENV === 'production'}
        />
      </div>
    );
  }

  return (
    <div className={cn('relative flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden', className)}>
      <div
        className="relative rounded-md border-2 border-slate-800 bg-white shadow-sm"
        style={{ width: `${Math.min(78, aspect * 42)}%`, aspectRatio: `${w} / ${h}`, maxHeight: '70%' }}
      >
        <MaterialSwatch variant={material?.variant} />
      </div>
      <p className="relative z-10 mt-4 text-sm text-stone-500 px-6 text-center">
        {material?.name} · {formatStageBackdropSize(w, h)}
      </p>
      <p className="relative z-10 mt-1 text-xs text-stone-400">Product photo coming soon</p>
    </div>
  );
}

function OptionButton({ selected, onClick, children, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'text-left rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
        selected
          ? 'border-sky-600 bg-sky-50 shadow-sm ring-1 ring-sky-600'
          : 'border-stone-200 bg-white hover:border-sky-200 hover:bg-stone-50/80',
        className,
      )}
    >
      {children}
    </button>
  );
}

function ConfigSummary({ config, horizontal = false }) {
  const material = getStageBackdropMaterial(config.materialId);
  const finishing = getStageBackdropFinishing(config.finishingId);
  const quantity = Math.max(STAGE_BACKDROP_MIN_QUANTITY, Number(config.quantity) || STAGE_BACKDROP_MIN_QUANTITY);

  const rows = [
    { label: 'Material', value: material?.name },
    { label: 'Size', value: formatStageBackdropSize(config.widthCm, config.heightCm) },
    { label: 'Finishing', value: finishing?.name },
    { label: 'Quantity', value: String(quantity) },
  ];

  if (horizontal) {
    return (
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 flex-1 min-w-0">
        {rows.map(({ label, value }) => (
          <div key={label} className="min-w-0">
            <dt className="text-[10px] font-semibold text-sky-200 uppercase tracking-wider mb-0.5">{label}</dt>
            <dd className="text-sm font-medium text-white leading-snug truncate" title={value}>{value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return null;
}

function QuoteSummaryBar({ config, onRequestQuote, submitted, position = 'top' }) {
  return (
    <Card className="overflow-hidden border-sky-200 bg-gradient-to-r from-sky-700 to-blue-800 text-white shadow-md">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="flex-1 min-w-0">
            {position === 'top' && (
              <p className="text-[10px] font-semibold text-sky-200 uppercase tracking-wider mb-2">
                Your quote builder
              </p>
            )}
            <ConfigSummary config={config} horizontal />
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full sm:w-auto sm:min-w-[140px] rounded-lg bg-white text-sky-700 font-semibold px-5 py-2.5 text-sm hover:bg-sky-50 transition-colors"
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
      <p className="text-[10px] font-semibold text-sky-600 uppercase tracking-wider mb-0.5">Step {step}</p>
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      {selected && <p className="text-xs text-stone-500 mt-0.5 truncate">{selected}</p>}
    </div>
  );
}

function SizeField({ id, label, value, onChange, onBlur, invalid }) {
  return (
    <label htmlFor={id} className="block min-w-0 flex-1">
      <span className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">{label}</span>
      <input
        id={id}
        type="number"
        min={STAGE_BACKDROP_SIZE.minCm}
        max={STAGE_BACKDROP_SIZE.maxCm}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={cn(
          'w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2',
          invalid
            ? 'border-red-400 focus:ring-red-400 focus:border-red-400'
            : 'border-stone-300 focus:ring-sky-500 focus:border-sky-500',
        )}
      />
    </label>
  );
}

export default function StageBackdropConfigurator() {
  const [config, setConfig] = useState(DEFAULT_STAGE_BACKDROP_CONFIG);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedMaterial = getStageBackdropMaterial(config.materialId);
  const selectedFinishing = getStageBackdropFinishing(config.finishingId);
  const activeStandardId = matchingStandardSizeId(config.widthCm, config.heightCm);
  const widthInvalid = !isValidStageBackdropSize(config.widthCm);
  const heightInvalid = !isValidStageBackdropSize(config.heightCm);

  const updateConfig = (patch) => {
    setConfig((prev) => ({ ...prev, ...patch }));
  };

  const applyStandardSize = (size) => {
    updateConfig({ widthCm: size.width, heightCm: size.height });
  };

  const openQuoteModal = () => {
    if (widthInvalid || heightInvalid) return;
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
          <div className="lg:sticky lg:top-6 order-1">
            <Card className="overflow-hidden h-full">
              <div className="px-4 py-3 border-b border-stone-100 bg-stone-50/80">
                <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider">Banner preview</p>
                <p className="text-sm font-medium text-stone-900 mt-0.5 truncate">
                  {selectedMaterial?.name} · {formatStageBackdropSize(config.widthCm, config.heightCm)}
                </p>
              </div>
              <ProductPreview
                material={selectedMaterial}
                widthCm={config.widthCm}
                heightCm={config.heightCm}
                className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[min(72vh,680px)]"
              />
            </Card>
          </div>

          <div className="space-y-7 min-w-0 order-2">
            <section>
              <SectionHeading step={1} title="Material" selected={selectedMaterial?.name} />
              <div className="grid grid-cols-3 gap-2">
                {STAGE_BACKDROP_MATERIALS.map((material) => {
                  const selected = config.materialId === material.id;
                  return (
                    <OptionButton
                      key={material.id}
                      selected={selected}
                      onClick={() => updateConfig({ materialId: material.id })}
                      className="overflow-hidden"
                    >
                      <div className="relative aspect-square bg-stone-100">
                        {material.image ? (
                          <Image
                            src={material.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="120px"
                            unoptimized={process.env.NODE_ENV === 'production'}
                          />
                        ) : (
                          <MaterialSwatch variant={material.variant} />
                        )}
                      </div>
                      <p className="px-2 py-2 text-[11px] font-medium text-stone-900 leading-tight text-center">
                        {material.name}
                      </p>
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            <section>
              <SectionHeading
                step={2}
                title="Size"
                selected={formatStageBackdropSize(config.widthCm, config.heightCm)}
              />
              <p className="text-xs text-stone-500 mb-3">
                Enter width and height in centimetres. Min {STAGE_BACKDROP_SIZE.minCm} cm · Max {STAGE_BACKDROP_SIZE.maxCm} cm (50 m).
              </p>
              <div className="flex items-end gap-2">
                <SizeField
                  id="stage-backdrop-width"
                  label="Width (cm)"
                  value={config.widthCm}
                  invalid={widthInvalid}
                  onChange={(e) => updateConfig({ widthCm: e.target.value })}
                  onBlur={(e) => updateConfig({ widthCm: clampStageBackdropSize(e.target.value) })}
                />
                <span className="pb-3 text-stone-400 font-medium">×</span>
                <SizeField
                  id="stage-backdrop-height"
                  label="Height (cm)"
                  value={config.heightCm}
                  invalid={heightInvalid}
                  onChange={(e) => updateConfig({ heightCm: e.target.value })}
                  onBlur={(e) => updateConfig({ heightCm: clampStageBackdropSize(e.target.value) })}
                />
              </div>
              {(widthInvalid || heightInvalid) && (
                <p className="mt-2 text-xs text-red-600">
                  Size must be between {STAGE_BACKDROP_SIZE.minCm} cm and {STAGE_BACKDROP_SIZE.maxCm} cm.
                </p>
              )}

              <p className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider mt-4 mb-2">
                Or choose a standard size
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {STAGE_BACKDROP_STANDARD_SIZES.map((size) => {
                  const selected = activeStandardId === size.id;
                  return (
                    <OptionButton
                      key={size.id}
                      selected={selected}
                      onClick={() => applyStandardSize(size)}
                      className="w-full overflow-hidden px-2.5 py-2"
                    >
                      <span className="font-medium text-stone-900 text-xs">{size.label}</span>
                      <span className="block text-[10px] text-stone-500 mt-0.5">
                        {size.width} × {size.height} cm
                      </span>
                      {size.recommended && (
                        <span className="inline-block mt-1 rounded bg-sky-100 text-sky-700 text-[9px] font-semibold leading-none px-1 py-0.5">
                          Popular
                        </span>
                      )}
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            <section>
              <SectionHeading
                step={3}
                title="Quantity"
                selected={`${Math.max(STAGE_BACKDROP_MIN_QUANTITY, Number(config.quantity) || STAGE_BACKDROP_MIN_QUANTITY)} banner${Number(config.quantity) === 1 ? '' : 's'}`}
              />
              <input
                id="stage-backdrop-quantity"
                type="number"
                min={STAGE_BACKDROP_MIN_QUANTITY}
                value={config.quantity}
                onChange={(e) => updateConfig({ quantity: e.target.value })}
                className="w-full max-w-[140px] rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </section>

            <section>
              <SectionHeading step={4} title="Finishing" selected={selectedFinishing?.name} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {STAGE_BACKDROP_FINISHING.map((option) => {
                  const selected = config.finishingId === option.id;
                  return (
                    <OptionButton
                      key={option.id}
                      selected={selected}
                      onClick={() => updateConfig({ finishingId: option.id })}
                      className="px-3 py-3"
                    >
                      <p className="font-medium text-stone-900 text-xs leading-snug">{option.name}</p>
                    </OptionButton>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        <QuoteSummaryBar config={config} onRequestQuote={openQuoteModal} submitted={submitted} position="bottom" />
      </div>

      <StageBackdropQuoteModal isOpen={modalOpen} onClose={handleModalClose} config={config} />
    </>
  );
}
