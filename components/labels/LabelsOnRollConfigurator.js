import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/cn';
import LabelsOnRollQuoteModal from './LabelsOnRollQuoteModal';
import {
  DEFAULT_LABEL_ROLL_CONFIG,
  LABEL_APPEARANCES,
  LABEL_CORES,
  LABEL_DISPENSERS,
  LABEL_MATERIALS,
  LABEL_PRINTING,
  LABEL_ROLL_QUOTE_META,
  LABEL_SHAPES,
  LABEL_SIZES_MM,
  LABEL_WINDINGS,
  formatLabelRollQuoteSummary,
  formatLabelSize,
  getLabelAppearance,
  getLabelCore,
  getLabelDispenser,
  getLabelMaterial,
  getLabelPrinting,
  getLabelShape,
  getLabelWinding,
  needsTwoAxes,
} from '../../data/labels-on-a-roll-options';

function Tile({ selected, onClick, children, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'text-left rounded-md border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1',
        selected
          ? 'border-blue-600 bg-blue-50 shadow-sm ring-1 ring-blue-600'
          : 'border-stone-200 bg-white hover:border-blue-200 hover:bg-stone-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

function MiniHeading({ title, selected }) {
  return (
    <div className="flex items-baseline justify-between gap-2 mb-1.5">
      <h3 className="text-xs font-semibold text-stone-900">{title}</h3>
      {selected && <p className="text-[10px] text-stone-500 truncate text-right">{selected}</p>}
    </div>
  );
}

function ShapeIcon({ id, className = 'w-8 h-8' }) {
  const common = 'stroke-current fill-none';
  if (id === 'round') {
    return <svg viewBox="0 0 32 32" className={className} aria-hidden="true"><circle cx="16" cy="16" r="11" className={common} strokeWidth="1.75" /></svg>;
  }
  if (id === 'square') {
    return <svg viewBox="0 0 32 32" className={className} aria-hidden="true"><rect x="7" y="7" width="18" height="18" rx="1" className={common} strokeWidth="1.75" /></svg>;
  }
  if (id === 'rectangle') {
    return <svg viewBox="0 0 32 32" className={className} aria-hidden="true"><rect x="5" y="10" width="22" height="12" rx="1" className={common} strokeWidth="1.75" /></svg>;
  }
  return <svg viewBox="0 0 32 32" className={className} aria-hidden="true"><ellipse cx="16" cy="16" rx="12" ry="8" className={common} strokeWidth="1.75" /></svg>;
}

function WindingIcon({ id }) {
  const letter = id === '180' ? 'V' : id === '0' ? 'A' : id === '90' ? '>' : '<';
  return (
    <svg viewBox="0 0 48 40" className="w-full h-10 text-stone-800" aria-hidden="true">
      <rect x="2" y="8" width="28" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="38" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="38" cy="20" r="2.5" fill="currentColor" />
      <text x="16" y="24" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">{letter}</text>
    </svg>
  );
}

function DispenserIcon({ id }) {
  if (id === 'none') {
    return (
      <svg viewBox="0 0 48 40" className="w-full h-9 text-stone-800" aria-hidden="true">
        <circle cx="24" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="20" r="3" fill="currentColor" />
        <path d="M24 9v-4M13 16l-3-2M35 16l3-2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 40" className="w-full h-9 text-stone-800" aria-hidden="true">
      <rect x="14" y="6" width="20" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M18 30h12" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

const SWATCH = {
  'white-film': 'bg-gradient-to-br from-rose-50 via-white to-stone-100',
  transparent: 'bg-[linear-gradient(45deg,#e7e5e4_25%,transparent_25%),linear-gradient(-45deg,#e7e5e4_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e7e5e4_75%),linear-gradient(-45deg,transparent_75%,#e7e5e4_75%)] bg-[length:10px_10px] bg-[position:0_0,0_5px,5px_-5px,-5px_0] bg-white',
  paper: 'bg-gradient-to-br from-stone-50 via-amber-50 to-stone-200',
  special: 'bg-gradient-to-br from-slate-200 via-zinc-100 to-slate-400',
};

const PREVIEW_IMAGES = {
  jar: {
    src: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png',
    alt: 'Custom round jar labels Ireland — printed product label on a glass jar',
  },
  dispenser: {
    src: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-dispenser-box-square-round.png',
    alt: 'Labels on a roll Ireland with dispenser box — square and round printed roll labels',
  },
  transparent: {
    src: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-pvc-transparent-cafe-dispenser.webp',
    alt: 'PVC transparent labels on a roll Ireland — branded café stickers in a dispenser box',
  },
};

function previewImage(config) {
  if (config.appearanceId === 'transparent') return PREVIEW_IMAGES.transparent;
  if (config.dispenserId === 'per-roll') {
    return config.shapeId === 'round' || config.shapeId === 'oval'
      ? PREVIEW_IMAGES.transparent
      : PREVIEW_IMAGES.dispenser;
  }
  if (config.shapeId === 'square' || config.shapeId === 'rectangle') return PREVIEW_IMAGES.dispenser;
  return PREVIEW_IMAGES.jar;
}

function LabelPreview({ config }) {
  const image = previewImage(config);
  const shape = getLabelShape(config.shapeId);

  return (
    <div className="relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[min(68vh,620px)] bg-stone-100">
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-contain p-3 sm:p-5"
        sizes="(max-width: 1024px) 100vw, 50vw"
        unoptimized={process.env.NODE_ENV === 'production'}
      />
      <p className="absolute bottom-3 left-0 right-0 text-center text-[11px] text-stone-600 px-4 truncate">
        {shape?.name} · {formatLabelSize(config)} · {getLabelAppearance(config.appearanceId)?.name}
      </p>
    </div>
  );
}

function SizeGrid({ value, onChange }) {
  return (
    <div className="grid grid-cols-5 gap-1.5">
      {LABEL_SIZES_MM.map((mm) => {
        const selected = Number(value) === mm;
        return (
          <Tile key={mm} selected={selected} onClick={() => onChange(mm)} className="px-1 py-1.5 text-center">
            <span className="block text-[11px] font-medium text-stone-900 leading-tight">{mm} mm</span>
            {mm === 50 && (
              <span className="block mt-0.5 text-[8px] font-semibold uppercase tracking-wide text-blue-700">Rec.</span>
            )}
          </Tile>
        );
      })}
    </div>
  );
}

export default function LabelsOnRollConfigurator() {
  const [config, setConfig] = useState(DEFAULT_LABEL_ROLL_CONFIG);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const shape = getLabelShape(config.shapeId);
  const appearance = getLabelAppearance(config.appearanceId);
  const material = getLabelMaterial(config.materialId);
  const printing = getLabelPrinting(config.printingId);
  const dispenser = getLabelDispenser(config.dispenserId);
  const winding = getLabelWinding(config.windingId);
  const core = getLabelCore(config.coreId);
  const twoAxes = needsTwoAxes(config.shapeId);
  const quantity = Math.max(1, Number(config.quantity) || 1);

  const updateConfig = (patch) => setConfig((prev) => ({ ...prev, ...patch }));

  const setShape = (shapeId) => {
    updateConfig({
      shapeId,
      heightMm: needsTwoAxes(shapeId) ? config.heightMm : config.widthMm,
    });
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

  const summaryRows = [
    { label: 'Shape', value: shape?.name },
    { label: 'Size', value: formatLabelSize(config) },
    { label: 'Material', value: material?.name },
    { label: 'Rolls', value: String(quantity) },
  ];

  return (
    <>
      <div id="quote-builder" className="space-y-5 scroll-mt-8">
        <Card className="overflow-hidden border-blue-200 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md">
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 flex-1 min-w-0">
                {summaryRows.map(({ label, value }) => (
                  <div key={label} className="min-w-0">
                    <dt className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider mb-0.5">{label}</dt>
                    <dd className="text-sm font-medium text-white leading-snug truncate" title={value}>{value}</dd>
                  </div>
                ))}
              </dl>
              <button
                type="button"
                onClick={openQuoteModal}
                className="w-full sm:w-auto sm:min-w-[140px] rounded-lg bg-white text-blue-700 font-semibold px-5 py-2.5 text-sm hover:bg-blue-50"
              >
                Request Quote
              </button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-5 lg:gap-6 items-start">
          <div className="lg:sticky lg:top-6">
            <Card className="overflow-hidden">
              <div className="px-3 py-2 border-b border-stone-100 bg-stone-50/80">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">Label preview</p>
                <p className="text-sm font-medium text-stone-900 truncate">
                  {shape?.name} · {formatLabelSize(config)}
                </p>
              </div>
              <LabelPreview config={config} />
            </Card>
          </div>

          <div className="space-y-4 min-w-0">
            <section>
              <MiniHeading title="Shape" selected={shape?.name} />
              <div className="grid grid-cols-4 gap-1.5">
                {LABEL_SHAPES.map((item) => (
                  <Tile key={item.id} selected={config.shapeId === item.id} onClick={() => setShape(item.id)} className="px-1 py-2 flex flex-col items-center gap-1">
                    <ShapeIcon id={item.id} className="w-7 h-7 text-stone-800" />
                    <span className="text-[10px] font-medium text-stone-800">{item.name}</span>
                  </Tile>
                ))}
              </div>
            </section>

            <section>
              <MiniHeading title="Size" selected={formatLabelSize(config)} />
              {twoAxes ? (
                <div className="space-y-2">
                  <p className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider">Width</p>
                  <SizeGrid value={config.widthMm} onChange={(widthMm) => updateConfig({ widthMm })} />
                  <p className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider">Height</p>
                  <SizeGrid value={config.heightMm} onChange={(heightMm) => updateConfig({ heightMm })} />
                </div>
              ) : (
                <SizeGrid
                  value={config.widthMm}
                  onChange={(widthMm) => updateConfig({ widthMm, heightMm: widthMm })}
                />
              )}
            </section>

            <div className="grid sm:grid-cols-2 gap-4">
              <section>
                <MiniHeading title="Material appearance" selected={appearance?.name} />
                <div className="grid grid-cols-2 gap-1.5">
                  {LABEL_APPEARANCES.map((item) => (
                    <Tile key={item.id} selected={config.appearanceId === item.id} onClick={() => updateConfig({ appearanceId: item.id })} className="overflow-hidden">
                      <div className={cn('h-10', SWATCH[item.swatch])} />
                      <div className="px-1.5 py-1.5">
                        <p className="text-[11px] font-medium text-stone-900 leading-tight">{item.name}</p>
                        {item.recommended && <p className="text-[9px] font-semibold text-blue-700">Recommended</p>}
                      </div>
                    </Tile>
                  ))}
                </div>
              </section>

              <section>
                <MiniHeading title="Material" selected={material?.name} />
                <div className="grid grid-cols-1 gap-1.5">
                  {LABEL_MATERIALS.map((item) => (
                    <Tile key={item.id} selected={config.materialId === item.id} onClick={() => updateConfig({ materialId: item.id })} className="px-2.5 py-2">
                      <p className="text-[11px] font-medium text-stone-900 leading-tight">{item.name}</p>
                      <p className="text-[10px] text-stone-500 leading-tight mt-0.5">{item.subtitle}</p>
                    </Tile>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <section>
                <MiniHeading title="Printing" selected={printing?.name} />
                <div className="grid grid-cols-1 gap-1.5">
                  {LABEL_PRINTING.map((item) => (
                    <Tile key={item.id} selected={config.printingId === item.id} onClick={() => updateConfig({ printingId: item.id })} className="px-2.5 py-2">
                      <p className="text-[11px] font-medium text-stone-900">{item.name}</p>
                      {item.recommended && <p className="text-[9px] font-semibold text-blue-700">Recommended</p>}
                    </Tile>
                  ))}
                </div>
              </section>
              <section>
                <MiniHeading title="Dispenser" selected={dispenser?.name} />
                <div className="grid grid-cols-2 gap-1.5">
                  {LABEL_DISPENSERS.map((item) => (
                    <Tile key={item.id} selected={config.dispenserId === item.id} onClick={() => updateConfig({ dispenserId: item.id })} className="px-1.5 py-2 text-center">
                      <DispenserIcon id={item.id} />
                      <p className="text-[10px] font-medium text-stone-900 mt-1 leading-tight">{item.name}</p>
                    </Tile>
                  ))}
                </div>
              </section>
            </div>

            <section>
              <MiniHeading title="Roll winding" selected={winding ? `${winding.name} ${winding.angle}` : ''} />
              <div className="grid grid-cols-4 gap-1.5">
                {LABEL_WINDINGS.map((item) => (
                  <Tile key={item.id} selected={config.windingId === item.id} onClick={() => updateConfig({ windingId: item.id })} className="px-1 py-2 text-center">
                    <WindingIcon id={item.id} />
                    <p className="text-[9px] font-medium text-stone-800 mt-1 leading-tight">{item.angle}</p>
                    {item.recommended && <p className="text-[8px] font-semibold text-blue-700">Rec.</p>}
                  </Tile>
                ))}
              </div>
            </section>

            <div className="grid sm:grid-cols-2 gap-4">
              <section>
                <MiniHeading title="Core diameter" selected={core?.name} />
                <div className="grid grid-cols-2 gap-1.5">
                  {LABEL_CORES.map((item) => (
                    <Tile key={item.id} selected={config.coreId === item.id} onClick={() => updateConfig({ coreId: item.id })} className="px-2 py-2 text-center">
                      <p className="text-[11px] font-medium text-stone-900">{item.name}</p>
                      {item.recommended && <p className="text-[9px] font-semibold text-blue-700">Recommended</p>}
                    </Tile>
                  ))}
                </div>
              </section>
              <section>
                <MiniHeading title="Quantity" selected={`${quantity} roll${quantity === 1 ? '' : 's'}`} />
                <input
                  type="number"
                  min={1}
                  value={config.quantity}
                  onChange={(e) => updateConfig({ quantity: e.target.value })}
                  className="w-full max-w-[140px] rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-[10px] text-stone-500 mt-1">Number of rolls</p>
              </section>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden border-blue-200 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md">
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 flex-1 min-w-0">
                {summaryRows.map(({ label, value }) => (
                  <div key={label} className="min-w-0">
                    <dt className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider mb-0.5">{label}</dt>
                    <dd className="text-sm font-medium text-white leading-snug truncate" title={value}>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full sm:w-auto sm:min-w-[140px] rounded-lg bg-white text-blue-700 font-semibold px-5 py-2.5 text-sm hover:bg-blue-50"
                >
                  Request Quote
                </button>
                {submitted && (
                  <p className="mt-1.5 text-xs text-emerald-200 text-center sm:text-right">
                    Quote request sent — we&apos;ll be in touch shortly.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <LabelsOnRollQuoteModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        config={config}
        formatSummary={formatLabelRollQuoteSummary}
        meta={LABEL_ROLL_QUOTE_META}
      />
    </>
  );
}
