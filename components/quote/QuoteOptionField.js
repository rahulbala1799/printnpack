import React from 'react';
import { cn } from '../../lib/cn';

export default function QuoteOptionField({ label, children, className }) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      {label && <p className="mb-2 text-sm font-semibold text-stone-900">{label}</p>}
      {children}
    </div>
  );
}

export const quoteControlClass =
  'block h-10 min-w-0 rounded-lg border border-stone-300 bg-white px-3 text-sm text-stone-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100';
