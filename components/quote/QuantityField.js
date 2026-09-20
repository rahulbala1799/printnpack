import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';
import { quoteControlClass } from './QuoteOptionField';

/** Digits-only qty field. Empty while typing; wheel does not change the value. */
export default function QuantityField({ value, min = 1, onCommit, className, 'aria-label': ariaLabel }) {
  const [draft, setDraft] = useState(() => (value == null ? '' : String(value)));

  useEffect(() => {
    setDraft(value == null || value === '' ? '' : String(value));
  }, [value]);

  const commit = (raw) => {
    const parsed = parseInt(raw, 10);
    const next = Number.isFinite(parsed) ? Math.max(min, parsed) : min;
    setDraft(String(next));
    onCommit(next);
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      autoComplete="off"
      aria-label={ariaLabel || 'Quantity'}
      value={draft}
      onChange={(e) => {
        const next = e.target.value.replace(/[^\d]/g, '');
        setDraft(next);
        if (next === '') return;
        const parsed = parseInt(next, 10);
        if (Number.isFinite(parsed)) onCommit(parsed);
      }}
      onBlur={() => commit(draft)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          commit(draft);
        }
      }}
      className={cn(quoteControlClass, 'w-20 text-center tabular-nums', className)}
    />
  );
}
