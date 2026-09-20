import React, { useEffect } from 'react';
import { cn } from '../../lib/cn';

export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') onOpenChange?.(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-slate-900/45 backdrop-blur-[2px]"
        onClick={() => onOpenChange?.(false)}
      />
      {children}
    </div>
  );
}

export function DialogContent({ className, children, onClose }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(
        'absolute left-2 right-2 top-2 bottom-2 flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-2xl',
        'md:left-1/2 md:right-auto md:top-1/2 md:bottom-auto md:h-[min(880px,calc(100vh-2rem))] md:w-[min(1240px,calc(100vw-1.5rem))] md:max-h-[min(880px,calc(100vh-2rem))] md:-translate-x-1/2 md:-translate-y-1/2',
        className
      )}
    >
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full p-2 text-stone-400 hover:bg-white hover:text-stone-700"
          aria-label="Close"
        >
          ✕
        </button>
      )}
      {children}
    </div>
  );
}

export function DialogHeader({ className, ...props }) {
  return <div className={cn('border-b border-stone-200 bg-white/80 px-5 py-4 pr-12', className)} {...props} />;
}

export function DialogTitle({ className, ...props }) {
  return <h2 className={cn('text-lg font-semibold tracking-tight text-stone-900', className)} {...props} />;
}

export function DialogDescription({ className, ...props }) {
  return <p className={cn('mt-1 text-sm text-stone-500', className)} {...props} />;
}
