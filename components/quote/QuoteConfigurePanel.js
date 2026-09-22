import React, { useEffect, useState } from 'react';
import { resolveQuoteImage } from '../../data/quote-modules';
import ClothingQuoteModule from './modules/ClothingQuoteModule';
import GenericQuoteModule from './modules/GenericQuoteModule';
import QuoteProductImage from './QuoteProductImage';

export default function QuoteConfigurePanel({ selected, existing, onSave }) {
  const gallery = [...new Set(
    (selected?.images?.filter(Boolean)?.length
      ? selected.images.filter(Boolean)
      : [resolveQuoteImage(selected)].filter(Boolean))
  )];
  const [activeSrc, setActiveSrc] = useState(gallery[0] || null);

  useEffect(() => {
    setActiveSrc(gallery[0] || null);
  }, [selected?.id]);

  if (!selected) {
    return (
      <div className="flex h-full items-center justify-center bg-stone-50 px-6 text-center">
        <div>
          <p className="text-base font-semibold text-stone-900">Pick a product</p>
          <p className="mt-1 text-sm text-stone-500">Choose from the list, then set options and add it to this quote.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-stone-50 p-4 text-center sm:p-5">
      <QuoteProductImage
        key={activeSrc || selected.id}
        src={activeSrc || resolveQuoteImage(selected)}
        alt={selected.name}
        className="mx-auto mb-3 w-[min(100%,240px)] rounded-2xl"
        sizes="240px"
      />
      {gallery.length > 1 && (
        <div className="mb-4 flex justify-center gap-2 overflow-x-auto">
          {gallery.slice(0, 6).map((src, index) => {
            const active = src === (activeSrc || gallery[0]);
            return (
              <button
                key={src}
                type="button"
                onClick={() => setActiveSrc(src)}
                aria-label={`View image ${index + 1}`}
                aria-pressed={active}
                className={`shrink-0 rounded-lg ${active ? 'ring-2 ring-blue-500 ring-offset-2' : 'opacity-80 hover:opacity-100'}`}
              >
                <QuoteProductImage src={src} alt="" className="h-14 w-14 max-h-14 max-w-14 shrink-0 rounded-lg" sizes="56px" />
              </button>
            );
          })}
        </div>
      )}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">{selected.group}</p>
        <h3 className="text-xl font-bold text-stone-900">{selected.name}</h3>
        {existing && (
          <p className="mt-1 text-sm text-emerald-700">
            Already in this quote{existing.summary ? ` — ${existing.summary}` : ''}.
          </p>
        )}
      </div>
      {selected.moduleId === 'clothing' ? (
        <ClothingQuoteModule key={selected.id} catalogItem={selected} existing={existing} onSave={onSave} />
      ) : (
        <GenericQuoteModule key={selected.id} catalogItem={selected} existing={existing} onSave={onSave} />
      )}
    </div>
  );
}
