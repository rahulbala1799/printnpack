import React from 'react';
import { cn } from '../../lib/cn';
import QuoteProductImage from './QuoteProductImage';

function CategoryThumb({ category, className, sizes }) {
  const thumbs = category.thumbs?.length ? category.thumbs : [category.image].filter(Boolean);

  if (category.id === 'All' && thumbs.length > 1) {
    return (
      <div className={cn('grid grid-cols-2 overflow-hidden bg-stone-200', className)}>
        {thumbs.slice(0, 4).map((src) => (
          <QuoteProductImage key={src} src={src} alt="" className="h-full w-full" sizes={sizes} />
        ))}
      </div>
    );
  }

  return <QuoteProductImage src={category.image} alt={category.name} className={className} sizes={sizes} />;
}

export default function QuoteCategoryPicker({ categories, selectedId, onSelect, variant = 'sidebar' }) {
  if (variant === 'slice') {
    return (
      <div className="h-full overflow-y-auto bg-stone-50 px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Categories</p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight text-stone-900">What do you need printed?</h3>
        <p className="mt-1 text-sm text-stone-500">Tap a category, then pick the product for this quote.</p>
        <ul className="mt-5 grid grid-cols-2 gap-3">
          {categories.map((category) => {
            const active = selectedId === category.id;
            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => onSelect(category.id)}
                  className={cn(
                    'w-full overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition',
                    active ? 'border-blue-500 ring-2 ring-blue-100' : 'border-stone-200 hover:border-stone-300'
                  )}
                >
                  <CategoryThumb category={category} className="aspect-square w-full" sizes="180px" />
                  <div className="px-3 py-2.5">
                    <p className="truncate text-sm font-semibold text-stone-900">{category.name}</p>
                    <p className="text-[11px] text-stone-400">{category.count} product{category.count === 1 ? '' : 's'}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <nav aria-label="Quote categories" className="flex h-full flex-col bg-slate-950 text-white">
      <div className="border-b border-white/10 px-4 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Browse</p>
        <p className="mt-1 text-sm font-semibold">Categories</p>
      </div>
      <ul className="flex-1 space-y-1 overflow-y-auto p-2">
        {categories.map((category) => {
          const active = selectedId === category.id;
          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => onSelect(category.id)}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition',
                  active ? 'bg-white/10 ring-1 ring-white/15' : 'hover:bg-white/5'
                )}
              >
                <CategoryThumb
                  category={category}
                  className={cn('h-11 w-11 shrink-0 rounded-lg', active && 'ring-2 ring-blue-400')}
                  sizes="44px"
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium leading-snug">{category.name}</span>
                  <span className="block text-[11px] text-slate-400">
                    {category.count} product{category.count === 1 ? '' : 's'}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
