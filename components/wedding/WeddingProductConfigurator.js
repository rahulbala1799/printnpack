import React, { useEffect, useRef, useState } from 'react';
import { buildCatalogQuoteLine, getQuoteCatalogItem } from '../../data/quote-modules';
import { cn } from '../../lib/cn';
import { useQuoteCart } from '../../lib/quote-cart-context';
import { trackWedding } from '../../lib/track-funnel';

function Step({ number, title, children }) {
  return (
    <div className="border-t border-[#d5ddd2] pt-5 first:border-t-0 first:pt-0">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a6a52]">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3d4c3a] text-[11px] text-[#f3f1eb]">
          {number}
        </span>
        {title}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/** One configurator for every wedding product. It reads everything from the product config. */
export default function WeddingProductConfigurator({ product, displayClass = '' }) {
  const { addItem, openBuilder } = useQuoteCart();
  const firstSize = product.sizes.find((size) => size.recommended) || product.sizes[0];
  const [sizeId, setSizeId] = useState(firstSize.id);
  const [imageIndex, setImageIndex] = useState(
    Math.max(0, product.gallery.findIndex((image) => image.sizeId === firstSize.id))
  );
  const [qty, setQty] = useState(product.minQty);
  const [added, setAdded] = useState(false);
  const startedRef = useRef(false);
  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackWedding('start', { productId: product.id, productName: product.name });
  };

  const size = product.sizes.find((item) => item.id === sizeId) || firstSize;
  const image = product.gallery[imageIndex] || product.gallery[0];
  const quantity = Math.max(product.minQty, Number(qty) || product.minQty);
  // Warm the cache for the other photos so switching is instant.
  useEffect(() => {
    const warm = () => product.gallery.forEach((item) => { const img = new window.Image(); img.src = item.web; });
    const id = window.setTimeout(warm, 600);
    return () => window.clearTimeout(id);
  }, [product]);

  const sizeCols = product.sizes.length > 2 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  const pickSize = (id) => {
    markStarted();
    setSizeId(id);
    const match = product.gallery.findIndex((item) => item.sizeId === id);
    if (match >= 0) setImageIndex(match);
    setAdded(false);
  };

  const pickImage = (index) => {
    setImageIndex(index);
    const next = product.gallery[index];
    if (next?.sizeId) setSizeId(next.sizeId);
    setAdded(false);
  };

  const addToQuote = () => {
    markStarted();
    const catalogItem = getQuoteCatalogItem(product.id);
    if (!catalogItem) return;
    const options = { sizePreset: size.chip, qty: quantity };
    product.fixed.forEach((item) => {
      options[item.key] = item.value;
    });
    addItem(buildCatalogQuoteLine(catalogItem, options));
    setAdded(true);
  };

  return (
    <div id="quote-builder" className="scroll-mt-24 grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="min-w-0">
        <div
          className="relative w-full overflow-hidden bg-[#ebe8df]"
          style={{ aspectRatio: product.previewRatio || '1 / 1' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={image.web}
            src={image.web}
            alt={image.alt}
            width={image.width}
            height={image.height}
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain"
          />
          {product.gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => pickImage((imageIndex - 1 + product.gallery.length) % product.gallery.length)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-xl text-[#243028] shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => pickImage((imageIndex + 1) % product.gallery.length)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-xl text-[#243028] shadow hover:bg-white"
              >
                ›
              </button>
              <span className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-xs font-semibold text-[#243028]">
                {imageIndex + 1} / {product.gallery.length}
              </span>
            </>
          )}
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {product.gallery.map((item, index) => (
            <button
              key={item.web}
              type="button"
              onClick={() => pickImage(index)}
              aria-label={item.caption}
              aria-current={index === imageIndex}
              className={cn(
                'relative h-16 w-16 flex-none overflow-hidden bg-[#ebe8df] transition sm:h-[4.5rem] sm:w-[4.5rem]',
                index === imageIndex ? 'ring-2 ring-[#3d4c3a] ring-offset-2 ring-offset-[#f3f1eb]' : 'opacity-70 hover:opacity-100'
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumb} alt="" width="72" height="72" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
        <p className="mt-1 text-sm text-[#5a6a52]">{image.caption}</p>
      </div>

      <div className="space-y-5 bg-white p-5 ring-1 ring-[#d5ddd2] sm:p-6">
        <Step number="1" title={product.sizeLabel}>
          <div className={cn('grid gap-2', sizeCols)}>
            {product.sizes.map((item) => {
              const selected = item.id === sizeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => pickSize(item.id)}
                  aria-pressed={selected}
                  className={cn(
                    'px-4 py-3 text-left transition',
                    selected
                      ? 'bg-[#3d4c3a] text-[#f3f1eb]'
                      : 'bg-[#f7f6f1] text-[#243028] ring-1 ring-[#d5ddd2] hover:ring-[#5a6a52]'
                  )}
                >
                  <span className={`${displayClass} block text-2xl leading-tight`}>{item.name}</span>
                  {item.name !== item.dimensions && (
                    <span className={cn('block text-xs', selected ? 'text-[#d7e2d2]' : 'text-[#5a6a52]')}>{item.dimensions}</span>
                  )}
                  <span className={cn('mt-2 block text-xs leading-relaxed', selected ? 'text-[#e7eee4]' : 'text-[#3d483b]')}>
                    {item.detail}
                  </span>
                  {item.recommended && (
                    <span className={cn('mt-2 block text-[10px] font-semibold uppercase tracking-[0.16em]', selected ? 'text-[#c4a46a]' : 'text-[#8a7240]')}>
                      Most chosen
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Step>

        <Step number="2" title="Quantity">
          <div className="flex flex-wrap gap-2">
            {product.quantities.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  markStarted();
                  setQty(value);
                  setAdded(false);
                }}
                aria-pressed={quantity === value}
                className={cn(
                  'min-w-[3.5rem] px-3 py-2 text-sm font-semibold transition',
                  quantity === value
                    ? 'bg-[#3d4c3a] text-[#f3f1eb]'
                    : 'bg-[#f7f6f1] text-[#243028] ring-1 ring-[#d5ddd2] hover:ring-[#5a6a52]'
                )}
              >
                {value}
              </button>
            ))}
          </div>
          <label className="mt-3 flex items-center gap-3 text-xs text-[#5c6658]" htmlFor={`${product.id}-qty`}>
            Other amount
            <input
              id={`${product.id}-qty`}
              type="number"
              min={product.minQty}
              value={qty}
              onChange={(event) => {
                markStarted();
                setQty(event.target.value);
                setAdded(false);
              }}
              className="w-28 border border-[#d5ddd2] bg-white px-3 py-2 text-sm text-[#243028]"
            />
            <span>from {product.minQty}</span>
          </label>
        </Step>

        <Step number="3" title="Included">
          <ul className="grid gap-2 sm:grid-cols-2">
            {product.fixed.map((item) => (
              <li key={item.key} className="bg-[#f7f6f1] px-4 py-2 ring-1 ring-[#d5ddd2]">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5a6a52]">{item.label}</span>
                <span className="text-sm font-semibold text-[#243028]">{item.value}</span>
              </li>
            ))}
          </ul>
        </Step>

        <div className="bg-[#3d4c3a] p-4 text-[#f3f1eb]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d7e2d2]">Your selection</p>
          <p className={`${displayClass} mt-1 text-2xl leading-tight`}>
            {size.name} · {quantity} {product.unit}
          </p>
          <p className="mt-1 text-xs text-[#d7e2d2]">
            {product.fixed.map((item) => item.value).join(' · ')}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={addToQuote}
              className="bg-[#f3f1eb] px-5 py-3 text-sm font-semibold text-[#3d4c3a] hover:bg-white"
            >
              Add to quote
            </button>
            <button
              type="button"
              onClick={() => openBuilder(product.id)}
              className="text-sm font-semibold text-[#f3f1eb] underline decoration-[#c4a46a] underline-offset-4"
            >
              Open the quote builder
            </button>
          </div>
          {added && (
            <p className="mt-3 text-xs text-[#d7e2d2]">
              Added. Add other wedding print from the Wedding category in the quote builder.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
