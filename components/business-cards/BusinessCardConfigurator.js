import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '../../lib/cn';
import BusinessCardQuoteModal from './BusinessCardQuoteModal';
import {
  BUSINESS_CARD_DELIVERY,
  BUSINESS_CARD_GSM,
  BUSINESS_CARD_IMAGES,
  BUSINESS_CARD_SIZE,
  BUSINESS_CARD_TIERS,
  DEFAULT_BUSINESS_CARD_CONFIG,
  getBusinessCardDelivery,
  getBusinessCardTier,
} from '../../data/business-cards-options';

export default function BusinessCardConfigurator() {
  const [config, setConfig] = useState(DEFAULT_BUSINESS_CARD_CONFIG);
  const [imageIndex, setImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tier = getBusinessCardTier(config.qty);
  const delivery = getBusinessCardDelivery(config.deliveryId);
  const activeImage = BUSINESS_CARD_IMAGES[imageIndex] || BUSINESS_CARD_IMAGES[0];

  const openQuote = () => {
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized={process.env.NODE_ENV === 'production'}
            />
          </div>
          <div className="mt-3 flex gap-2">
            {BUSINESS_CARD_IMAGES.map((image, index) => (
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
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Standard card</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Business cards</h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            Finished size is {BUSINESS_CARD_SIZE} on {BUSINESS_CARD_GSM} card. Choose a quantity and where it needs to go, then request a quote.
          </p>

          <dl className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Size</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900">{BUSINESS_CARD_SIZE}</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Stock</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900">{BUSINESS_CARD_GSM}</dd>
            </div>
          </dl>

          <fieldset className="mb-6">
            <legend className="text-sm font-semibold text-slate-900 mb-2">Quantity</legend>
            <div className="grid grid-cols-2 gap-2">
              {BUSINESS_CARD_TIERS.map((option) => {
                const selected = config.qty === option.qty;
                return (
                  <button
                    key={option.qty}
                    type="button"
                    onClick={() => setConfig((prev) => ({ ...prev, qty: option.qty }))}
                    className={cn(
                      'rounded-xl border px-3 py-3 text-left',
                      selected ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-400'
                    )}
                  >
                    <span className="block text-sm font-semibold">{option.qty} cards</span>
                    <span className={cn('block text-sm mt-0.5', selected ? 'text-slate-200' : 'text-slate-500')}>
                      €{option.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <legend className="text-sm font-semibold text-slate-900 mb-2">Delivery</legend>
            <div className="grid sm:grid-cols-2 gap-2">
              {BUSINESS_CARD_DELIVERY.map((option) => {
                const selected = config.deliveryId === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setConfig((prev) => ({ ...prev, deliveryId: option.id }))}
                    className={cn(
                      'rounded-xl border px-3 py-3 text-left',
                      selected ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-400'
                    )}
                  >
                    <span className="block text-sm font-semibold text-slate-900">{option.label}</span>
                    <span className="block text-sm text-slate-500 mt-0.5">{option.detail}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
            <div>
              <p className="text-sm text-slate-500">
                {tier ? `${tier.qty} cards` : 'Select a quantity'} · {delivery.summary}
              </p>
              <p className="text-2xl font-bold text-slate-900">{tier ? `€${tier.price}` : '—'}</p>
            </div>
            <button
              type="button"
              onClick={openQuote}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Request quote
            </button>
          </div>
          {submitted && (
            <p className="mt-3 text-sm text-emerald-700">Quote request sent. We&apos;ll be in touch shortly.</p>
          )}
        </div>
      </div>

      <BusinessCardQuoteModal
        isOpen={modalOpen}
        config={config}
        onClose={(result) => {
          setModalOpen(false);
          if (result?.submitted) {
            setSubmitted(true);
          }
        }}
      />
    </>
  );
}
