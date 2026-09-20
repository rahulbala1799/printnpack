import React from 'react';
import { useQuoteCart } from '../../lib/quote-cart-context';

export default function QuoteCartButton({ className = '' }) {
  const { count, setOpen } = useQuoteCart();

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={`relative inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 ${className}`}
      aria-label="Open quote basket"
    >
      <span className="hidden sm:inline">Quote basket</span>
      <span className="sm:hidden">Quote</span>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[1.15rem] h-5 px-1 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}
