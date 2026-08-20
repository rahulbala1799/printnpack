import React, { useState } from 'react';
import Image from 'next/image';
import {
  GREASEPROOF_PRODUCT,
  GREASEPROOF_SHEET_SIZES,
  GREASEPROOF_PRINTING,
  DEFAULT_GREASEPROOF_CONFIG,
  GREASEPROOF_MIN_QUANTITY,
  getGreaseproofSize,
  getGreaseproofPrinting,
  formatGreaseproofMaterialLabel,
} from '../../data/greaseproof-sheets-options';
import GreaseproofSheetQuoteModal from './GreaseproofSheetQuoteModal';
import { Card, CardContent } from '../ui/card';
import { cn } from '../../lib/cn';

function ProductPreview({ className = '' }) {
  if (GREASEPROOF_PRODUCT.image) {
    return (
      <div className={cn('relative bg-stone-100', className)}>
        <Image
          src={GREASEPROOF_PRODUCT.image}
          alt={GREASEPROOF_PRODUCT.previewAlt}
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
    <div className={cn('relative flex flex-col items-center justify-center bg-gradient-to-br from-stone-50 via-white to-stone-100 overflow-hidden', className)}>
      <div className="absolute inset-6 rounded-lg border border-dashed border-stone-300 bg-white/80" />
      <span className="relative z-10 text-sm text-stone-500 px-6 text-center">
        Product preview — image coming soon
      </span>
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
    <div className="flex items-center justify-center py-4 px-2 min-h-[88px]">
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

function OptionButton({ selected, onClick, children, className, compact = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
        compact ? 'rounded-lg border' : 'w-full rounded-xl border-2',
        selected
          ? 'border-teal-600 bg-teal-50 shadow-sm ring-1 ring-teal-600'
          : 'border-stone-200 bg-white hover:border-teal-200 hover:bg-stone-50/80',
        className,
      )}
    >
      {children}
    </button>
  );
}

function ConfigSummary({ config, horizontal = false }) {
  const size = getGreaseproofSize(config.sizeId);
  const printing = getGreaseproofPrinting(config.printingId);
  const quantity = Math.max(GREASEPROOF_MIN_QUANTITY, Number(config.quantity) || GREASEPROOF_MIN_QUANTITY);

  const rows = [
    { label: 'Material', value: formatGreaseproofMaterialLabel() },
    { label: 'Size', value: size?.dimensions || size?.label },
    { label: 'Printing', value: printing?.name },
    { label: 'Quantity', value: String(quantity) },
  ];

  if (horizontal) {
    return (
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 flex-1 min-w-0">
        {rows.map(({ label, value }) => (
          <div key={label} className="min-w-0">
            <dt className="text-[10px] font-semibold text-teal-200 uppercase tracking-wider mb-0.5">{label}</dt>
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
  return (
    <Card className="overflow-hidden border-teal-200 bg-gradient-to-r from-teal-700 to-emerald-800 text-white shadow-md">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="flex-1 min-w-0">
            {position === 'top' && (
              <p className="text-[10px] font-semibold text-teal-200 uppercase tracking-wider mb-2">
                Your quote builder
              </p>
            )}
            <ConfigSummary config={config} horizontal />
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full sm:w-auto sm:min-w-[140px] rounded-lg bg-white text-teal-700 font-semibold px-5 py-2.5 text-sm hover:bg-teal-50 transition-colors"
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
      <p className="text-[10px] font-semibold text-teal-600 uppercase tracking-wider mb-0.5">Step {step}</p>
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      {selected && <p className="text-xs text-stone-500 mt-0.5 truncate">{selected}</p>}
    </div>
  );
}

export default function GreaseproofSheetConfigurator() {
  const [config, setConfig] = useState(DEFAULT_GREASEPROOF_CONFIG);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedSize = getGreaseproofSize(config.sizeId);
  const selectedPrinting = getGreaseproofPrinting(config.printingId);

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
          <div className="lg:sticky lg:top-6 order-1">
            <Card className="overflow-hidden h-full">
              <div className="px-4 py-3 border-b border-stone-100 bg-stone-50/80">
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">Product preview</p>
                <p className="text-sm font-medium text-stone-900 mt-0.5 truncate">
                  {formatGreaseproofMaterialLabel()}
                </p>
              </div>
              <ProductPreview className="relative w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[min(72vh,680px)]" />
              <div className="px-4 py-3 border-t border-stone-100 bg-amber-50/80">
                <p className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-semibold">Note:</span> The material is white — background colour printing is not possible.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-7 min-w-0 order-2">
            <section>
              <SectionHeading
                step={1}
                title="Choose size"
                selected={selectedSize?.dimensions}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {GREASEPROOF_SHEET_SIZES.map((size) => {
                  const selected = config.sizeId === size.id;
                  return (
                    <OptionButton
                      key={size.id}
                      selected={selected}
                      compact
                      onClick={() => updateConfig({ sizeId: size.id })}
                      className="w-full overflow-hidden flex flex-col p-0"
                    >
                      <SizeDiagram width={size.width} height={size.height} />
                      <div className="px-2 py-2 border-t border-stone-100 text-center w-full">
                        <p className="font-medium text-stone-900 text-[11px] leading-tight">{size.dimensions}</p>
                      </div>
                      {size.recommended && (
                        <div
                          className={cn(
                            'w-full text-center py-1 text-[10px] font-semibold leading-none',
                            selected ? 'bg-teal-600 text-white' : 'bg-stone-100 text-stone-600',
                          )}
                        >
                          Recommended
                        </div>
                      )}
                    </OptionButton>
                  );
                })}
              </div>
            </section>

            <section>
              <SectionHeading step={2} title="Printing options" selected={selectedPrinting?.name} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {GREASEPROOF_PRINTING.map((option) => {
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

            <section>
              <SectionHeading
                step={3}
                title="Print run"
                selected={`${Math.max(GREASEPROOF_MIN_QUANTITY, Number(config.quantity) || GREASEPROOF_MIN_QUANTITY)} sheets`}
              />
              <p className="text-xs text-stone-500 mb-2">Minimum order: {GREASEPROOF_MIN_QUANTITY} pieces</p>
              <input
                id="greaseproof-quantity"
                type="number"
                min={GREASEPROOF_MIN_QUANTITY}
                step={100}
                value={config.quantity}
                onChange={(e) => updateConfig({ quantity: e.target.value })}
                className="w-full max-w-[140px] rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </section>
          </div>
        </div>

        <QuoteSummaryBar config={config} onRequestQuote={openQuoteModal} submitted={submitted} position="bottom" />
      </div>

      <GreaseproofSheetQuoteModal isOpen={modalOpen} onClose={handleModalClose} config={config} />
    </>
  );
}
