import React from 'react';
import { cn } from '../../lib/cn';
import QuoteProductImage from './QuoteProductImage';

export default function QuoteProductPicker({ items, selectedId, inQuote, onSelect, title }) {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="border-b border-stone-200 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-400">Products</p>
        <p className="mt-0.5 text-sm font-semibold text-stone-900">{title}</p>
      </div>
      <ul className="flex-1 space-y-1 overflow-y-auto px-2 py-2">
        {items.map((item) => {
          const active = selectedId === item.id;
          const already = Boolean(inQuote?.(item.id));
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className={cn(
                  'w-full rounded-xl px-2 py-2 text-left transition',
                  active ? 'bg-blue-50 ring-1 ring-blue-200' : 'hover:bg-stone-50'
                )}
              >
                <div className="flex items-center gap-3">
                  <QuoteProductImage src={item.image} alt={item.name} className="h-14 w-14 shrink-0 rounded-lg" sizes="56px" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className={cn('text-sm leading-snug', active ? 'font-semibold text-stone-900' : 'font-medium text-stone-800')}>
                        {item.name}
                      </span>
                      {already && (
                        <span className="shrink-0 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                          In quote
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[11px] text-stone-400">
                      {item.group}
                      {item.price ? ` · ${item.price}` : ''}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
