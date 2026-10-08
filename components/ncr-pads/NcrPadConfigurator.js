import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { cn } from '../../lib/cn';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../../lib/site';
import NcrPadPreview from './NcrPadPreview';
import NcrCallbackModal from './NcrCallbackModal';
import {
  DEFAULT_NCR_PAD_CONFIG,
  NCR_PAD_BINDS,
  NCR_PAD_BUNDLES,
  NCR_PAD_COLOURS,
  NCR_PAD_IMAGES,
  NCR_PAD_NUMBERING,
  NCR_PAD_PRINT_OPTIONS,
  NCR_PAD_SIZES,
  numberingAllowed,
  updateNcrConfig,
} from '../../data/ncr-pads-options';

function Group({ legend, note, children, cols = 'grid-cols-2' }) {
  return (
    <fieldset className="mb-6">
      <legend className="text-sm font-semibold text-slate-900">{legend}</legend>
      {note && <p className="text-xs text-slate-500 mt-0.5">{note}</p>}
      <div className={cn('grid gap-2 mt-2', cols)}>{children}</div>
    </fieldset>
  );
}

function Choice({ selected, onClick, label, detail, recommended, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        'relative rounded-xl border px-3 py-2.5 text-left transition-colors',
        selected ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-400',
        disabled && 'opacity-40 cursor-not-allowed hover:border-slate-200'
      )}
    >
      <span className="block text-sm font-semibold leading-snug">{label}</span>
      {detail && <span className={cn('block text-xs mt-0.5', selected ? 'text-slate-300' : 'text-slate-500')}>{detail}</span>}
      {recommended && (
        <span
          className={cn(
            'mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
            selected ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700'
          )}
        >
          Recommended
        </span>
      )}
    </button>
  );
}

export default function NcrPadConfigurator() {
  const [config, setConfig] = useState(DEFAULT_NCR_PAD_CONFIG);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const showingPreview = imageIndex >= NCR_PAD_IMAGES.length;
  const activeImage = NCR_PAD_IMAGES[imageIndex];

  const set = (patch) => setConfig((prev) => updateNcrConfig(prev, patch));
  const canNumber = numberingAllowed(config.printId);

  const closeModal = useCallback((result) => {
    setModalOpen(false);
    if (result?.submitted) setSubmitted(true);
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
            {showingPreview ? (
              <NcrPadPreview
                colourId={config.colourId}
                bindId={config.bindId}
                sizeId={config.sizeId}
                numbered={config.numberingId === 'numbered'}
              />
            ) : (
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            )}
          </div>
          <div className="mt-3 flex gap-2">
            {NCR_PAD_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setImageIndex(index)}
                className={cn(
                  'relative h-16 w-16 overflow-hidden rounded-lg border',
                  index === imageIndex ? 'border-slate-900' : 'border-stone-200'
                )}
                aria-label={`Show image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </button>
            ))}
            <button
              type="button"
              onClick={() => setImageIndex(NCR_PAD_IMAGES.length)}
              className={cn(
                'h-16 rounded-lg border px-3 text-xs font-semibold',
                showingPreview ? 'border-slate-900 bg-slate-900 text-white' : 'border-stone-200 bg-white text-slate-700'
              )}
            >
              Your pad
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-500 text-center">"Your pad" is an illustration that updates as you choose your options.</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Invoice &amp; docket books</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">NCR Pads</h1>
          <p className="text-slate-600 leading-relaxed mb-2">
            Invoice and docket books in duplicate or triplicate, printed with your logo or design. Writable, and the copies are
            printed in black.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Choose your specification, then ask for a call or email back with a price.
          </p>

          <Group legend="Size" cols="grid-cols-2">
            {NCR_PAD_SIZES.map((o) => (
              <Choice
                key={o.id}
                selected={config.sizeId === o.id}
                onClick={() => set({ sizeId: o.id })}
                label={o.label}
                detail={o.detail}
                recommended={o.recommended}
              />
            ))}
          </Group>

          <Group legend="Printing options" cols="sm:grid-cols-2">
            {NCR_PAD_PRINT_OPTIONS.map((o) => (
              <Choice
                key={o.id}
                selected={config.printId === o.id}
                onClick={() => set({ printId: o.id })}
                label={o.label}
                recommended={o.recommended}
              />
            ))}
          </Group>

          <Group legend="Colour" cols="sm:grid-cols-2">
            {NCR_PAD_COLOURS.map((o) => (
              <Choice
                key={o.id}
                selected={config.colourId === o.id}
                onClick={() => set({ colourId: o.id })}
                label={o.label}
                recommended={o.recommended}
              />
            ))}
          </Group>

          <Group legend="Bundles" cols="grid-cols-3">
            {NCR_PAD_BUNDLES.map((o) => (
              <Choice
                key={o.id}
                selected={config.bundleId === o.id}
                onClick={() => set({ bundleId: o.id })}
                label={o.label}
                recommended={o.recommended}
              />
            ))}
          </Group>

          <Group legend="Bind" cols="grid-cols-2">
            {NCR_PAD_BINDS.map((o) => (
              <Choice
                key={o.id}
                selected={config.bindId === o.id}
                onClick={() => set({ bindId: o.id })}
                label={o.label}
                recommended={o.recommended}
              />
            ))}
          </Group>

          <Group
            legend="Finishing"
            note="Numbering is only available with PMS printing."
            cols="grid-cols-2"
          >
            {NCR_PAD_NUMBERING.map((o) => (
              <Choice
                key={o.id}
                selected={config.numberingId === o.id}
                onClick={() => set({ numberingId: o.id })}
                label={o.label}
                disabled={o.id === 'numbered' && !canNumber}
              />
            ))}
          </Group>
          {!canNumber && (
            <p className="-mt-3 mb-6 text-xs text-slate-500">
              Pick a PMS printing option above to unlock numbering. Need numbering with full colour? Ask us on the call.
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">Want a price?</p>
              <p className="text-sm text-slate-500">
                Or call <a className="font-medium text-slate-700 hover:underline" href={`tel:${SITE_PHONE_TEL}`}>{SITE_PHONE_DISPLAY}</a>
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setModalOpen(true);
              }}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Get a call / email back
            </button>
          </div>
          {submitted && (
            <p className="mt-3 text-sm text-emerald-700" role="status">
              Thanks, we have your request and will call or email you back shortly.
            </p>
          )}
        </div>
      </div>

      <NcrCallbackModal isOpen={modalOpen} config={config} onClose={closeModal} />
    </>
  );
}
