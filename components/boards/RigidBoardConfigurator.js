import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/cn';
import RigidBoardQuoteModal from './RigidBoardQuoteModal';

const themes = {
  blue: {
    ring: 'focus-visible:ring-blue-500',
    selected: 'border-blue-600 bg-blue-50 shadow-sm ring-1 ring-blue-600',
    idle: 'border-stone-200 bg-white hover:border-blue-200 hover:bg-stone-50/80',
    step: 'text-blue-600',
    bar: 'border-blue-200 bg-gradient-to-r from-blue-700 to-indigo-800',
    dt: 'text-blue-200',
    btn: 'text-blue-700 hover:bg-blue-50',
    input: 'focus:ring-blue-500 focus:border-blue-500',
    chip: 'bg-blue-100 text-blue-700',
  },
  emerald: {
    ring: 'focus-visible:ring-emerald-500',
    selected: 'border-emerald-600 bg-emerald-50 shadow-sm ring-1 ring-emerald-600',
    idle: 'border-stone-200 bg-white hover:border-emerald-200 hover:bg-stone-50/80',
    step: 'text-emerald-600',
    bar: 'border-emerald-200 bg-gradient-to-r from-emerald-700 to-green-800',
    dt: 'text-emerald-200',
    btn: 'text-emerald-700 hover:bg-emerald-50',
    input: 'focus:ring-emerald-500 focus:border-emerald-500',
    chip: 'bg-emerald-100 text-emerald-700',
  },
};

function maxInputMm(limits) {
  return limits.maxMm || limits.maxLongMm;
}

function isValidBoardSize(widthMm, heightMm, limits) {
  const w = Number(widthMm);
  const h = Number(heightMm);
  if (!Number.isFinite(w) || !Number.isFinite(h)) return false;
  if (w < limits.minMm || h < limits.minMm) return false;
  if (limits.maxMm) {
    return w <= limits.maxMm && h <= limits.maxMm;
  }
  const fits = (w <= limits.maxLongMm && h <= limits.maxShortMm) || (w <= limits.maxShortMm && h <= limits.maxLongMm);
  return fits;
}

function clampBoardSize(widthMm, heightMm, limits) {
  let w = Math.round(Number(widthMm));
  let h = Math.round(Number(heightMm));
  const max = maxInputMm(limits);
  if (!Number.isFinite(w)) w = limits.minMm;
  if (!Number.isFinite(h)) h = limits.minMm;
  w = Math.max(limits.minMm, Math.min(max, w));
  h = Math.max(limits.minMm, Math.min(max, h));
  if (!isValidBoardSize(w, h, limits) && limits.maxShortMm) {
    h = Math.min(h, limits.maxShortMm);
  }
  return { widthMm: w, heightMm: h };
}

function matchingStandardId(widthMm, heightMm, sizes) {
  const w = Number(widthMm);
  const h = Number(heightMm);
  return sizes.find((s) => s.width === w && s.height === h)?.id || null;
}

function OptionButton({ selected, onClick, children, className, theme }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'text-left rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        theme.ring,
        selected ? theme.selected : theme.idle,
        className,
      )}
    >
      {children}
    </button>
  );
}

function SectionHeading({ step, title, selected, theme }) {
  return (
    <div className="mb-3">
      <p className={cn('text-[10px] font-semibold uppercase tracking-wider mb-0.5', theme.step)}>Step {step}</p>
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      {selected && <p className="text-xs text-stone-500 mt-0.5 truncate">{selected}</p>}
    </div>
  );
}

function QuoteSummaryBar({ rows, onRequestQuote, submitted, position, theme }) {
  return (
    <Card className={cn('overflow-hidden text-white shadow-md', theme.bar)}>
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="flex-1 min-w-0">
            {position === 'top' && (
              <p className={cn('text-[10px] font-semibold uppercase tracking-wider mb-2', theme.dt)}>Your quote builder</p>
            )}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 flex-1 min-w-0">
              {rows.map(({ label, value }) => (
                <div key={label} className="min-w-0">
                  <dt className={cn('text-[10px] font-semibold uppercase tracking-wider mb-0.5', theme.dt)}>{label}</dt>
                  <dd className="text-sm font-medium text-white leading-snug truncate" title={value}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onRequestQuote}
              className={cn('w-full sm:w-auto sm:min-w-[140px] rounded-lg bg-white font-semibold px-5 py-2.5 text-sm transition-colors', theme.btn)}
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

export default function RigidBoardConfigurator({
  theme = 'blue',
  productLabel = 'Board',
  thicknesses,
  standardSizes,
  finishingOptions = [],
  sizeLimits,
  defaultConfig,
  getThickness,
  getFinishing,
  formatSummary,
  quoteMeta,
  primaryIdKey = 'thicknessId',
  primaryStepTitle = 'Thickness',
  summaryPrimaryLabel = 'Thickness',
}) {
  const t = themes[theme] || themes.blue;
  const [config, setConfig] = useState(defaultConfig);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const thickness = getThickness(config[primaryIdKey]);
  const finishing = finishingOptions.length ? getFinishing?.(config.finishingId) : null;
  const sizeOk = isValidBoardSize(config.widthMm, config.heightMm, sizeLimits);
  const activeStandardId = matchingStandardId(config.widthMm, config.heightMm, standardSizes);
  const inputMax = maxInputMm(sizeLimits);
  const sizeHelp = sizeLimits.help
    || `Enter width and height in millimetres. Min ${sizeLimits.minMm} mm. Max sheet ${sizeLimits.maxLongMm} × ${sizeLimits.maxShortMm} mm (8ft × 4ft).`;
  const sizeError = sizeLimits.error
    || `Size must fit on an 8ft × 4ft sheet (${sizeLimits.maxLongMm} × ${sizeLimits.maxShortMm} mm).`;

  const updateConfig = (patch) => setConfig((prev) => ({ ...prev, ...patch }));

  const openQuoteModal = () => {
    if (!sizeOk) return;
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
    { label: summaryPrimaryLabel, value: thickness?.name },
    { label: 'Size', value: `${config.widthMm} × ${config.heightMm} mm` },
    ...(finishing ? [{ label: 'Laminate', value: finishing.name }] : []),
    { label: 'Quantity', value: String(Math.max(1, Number(config.quantity) || 1)) },
  ];

  let step = 1;

  return (
    <>
      <div id="quote-builder" className="space-y-6 scroll-mt-8">
        <QuoteSummaryBar rows={summaryRows} onRequestQuote={openQuoteModal} submitted={submitted} position="top" theme={t} />

        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6 lg:gap-8 items-start">
          <div className="lg:sticky lg:top-6 order-1">
            <Card className="overflow-hidden h-full">
              <div className="px-4 py-3 border-b border-stone-100 bg-stone-50/80">
                <p className={cn('text-xs font-semibold uppercase tracking-wider', t.step)}>{productLabel} preview</p>
                <p className="text-sm font-medium text-stone-900 mt-0.5 truncate">
                  {thickness?.name} · {config.widthMm} × {config.heightMm} mm
                </p>
              </div>
              <div className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[min(72vh,680px)] bg-stone-100">
                {thickness?.image ? (
                  <Image
                    key={thickness.id}
                    src={thickness.image}
                    alt={thickness.previewAlt || thickness.name}
                    fill
                    priority
                    className="object-contain p-4 sm:p-6"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized={process.env.NODE_ENV === 'production'}
                  />
                ) : null}
              </div>
            </Card>
          </div>

          <div className="space-y-7 min-w-0 order-2">
            <section>
              <SectionHeading step={step++} title={primaryStepTitle} selected={thickness?.name} theme={t} />
              <div className="grid grid-cols-2 gap-2">
                {thicknesses.map((item) => {
                  const selected = config[primaryIdKey] === item.id;
                  return (
                    <OptionButton
                      key={item.id}
                      selected={selected}
                      theme={t}
                      onClick={() => updateConfig({ [primaryIdKey]: item.id })}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-2 p-2">
                        <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-stone-100">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="48px"
                              unoptimized={process.env.NODE_ENV === 'production'}
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-stone-900 text-xs leading-tight">{item.name}</p>
                          <p className="text-[10px] text-stone-500 mt-0.5">{item.subtitle}</p>
                          {item.recommended && (
                            <span className={cn('inline-block mt-1 rounded text-[9px] font-semibold leading-none px-1 py-0.5', t.chip)}>
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            <section>
              <SectionHeading
                step={step++}
                title="Size"
                selected={`${config.widthMm} × ${config.heightMm} mm`}
                theme={t}
              />
              <p className="text-xs text-stone-500 mb-3">{sizeHelp}</p>
              <div className="flex items-end gap-2">
                <label className="block min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">Width (mm)</span>
                  <input
                    type="number"
                    min={sizeLimits.minMm}
                    max={inputMax}
                    value={config.widthMm}
                    onChange={(e) => updateConfig({ widthMm: e.target.value })}
                    onBlur={(e) => updateConfig(clampBoardSize(e.target.value, config.heightMm, sizeLimits))}
                    className={cn(
                      'w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2',
                      sizeOk ? `border-stone-300 ${t.input}` : 'border-red-400 focus:ring-red-400',
                    )}
                  />
                </label>
                <span className="pb-3 text-stone-400 font-medium">×</span>
                <label className="block min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">Height (mm)</span>
                  <input
                    type="number"
                    min={sizeLimits.minMm}
                    max={inputMax}
                    value={config.heightMm}
                    onChange={(e) => updateConfig({ heightMm: e.target.value })}
                    onBlur={(e) => updateConfig(clampBoardSize(config.widthMm, e.target.value, sizeLimits))}
                    className={cn(
                      'w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2',
                      sizeOk ? `border-stone-300 ${t.input}` : 'border-red-400 focus:ring-red-400',
                    )}
                  />
                </label>
              </div>
              {!sizeOk && (
                <p className="mt-2 text-xs text-red-600">{sizeError}</p>
              )}

              <p className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider mt-4 mb-2">Or choose a standard size</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {standardSizes.map((size) => {
                  const selected = activeStandardId === size.id;
                  return (
                    <OptionButton
                      key={size.id}
                      selected={selected}
                      theme={t}
                      onClick={() => updateConfig({ widthMm: size.width, heightMm: size.height })}
                      className="w-full overflow-hidden px-2.5 py-2"
                    >
                      <span className="font-medium text-stone-900 text-xs">{size.label}</span>
                      <span className="block text-[10px] text-stone-500 mt-0.5">{size.width} × {size.height} mm</span>
                      {size.recommended && (
                        <span className={cn('inline-block mt-1 rounded text-[9px] font-semibold leading-none px-1 py-0.5', t.chip)}>
                          Popular
                        </span>
                      )}
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            {finishingOptions.length > 0 && (
              <section>
                <SectionHeading step={step++} title="Laminate" selected={finishing?.name} theme={t} />
                <div className="grid grid-cols-2 gap-2">
                  {finishingOptions.map((option) => (
                    <OptionButton
                      key={option.id}
                      selected={config.finishingId === option.id}
                      theme={t}
                      onClick={() => updateConfig({ finishingId: option.id })}
                      className="px-3 py-2.5 text-center"
                    >
                      <p className="font-medium text-stone-900 text-xs leading-snug">{option.name}</p>
                    </OptionButton>
                  ))}
                </div>
              </section>
            )}

            <section>
              <SectionHeading
                step={step++}
                title="Quantity"
                selected={`${Math.max(1, Number(config.quantity) || 1)} ${productLabel.toLowerCase()}${Number(config.quantity) === 1 ? '' : 's'}`}
                theme={t}
              />
              <input
                type="number"
                min={1}
                value={config.quantity}
                onChange={(e) => updateConfig({ quantity: e.target.value })}
                className={cn('w-full max-w-[140px] rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2', t.input)}
              />
            </section>
          </div>
        </div>

        <QuoteSummaryBar rows={summaryRows} onRequestQuote={openQuoteModal} submitted={submitted} position="bottom" theme={t} />
      </div>

      <RigidBoardQuoteModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        config={config}
        theme={theme}
        thickness={thickness}
        primaryLabel={summaryPrimaryLabel}
        finishing={finishing}
        formatSummary={formatSummary}
        meta={quoteMeta}
      />
    </>
  );
}
