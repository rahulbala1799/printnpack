export function trackFunnel(formType, step, extra = {}) {
  if (typeof window === 'undefined') return;
  window.printNpackAnalytics?.trackEvent?.('funnel', {
    formType,
    step,
    ...extra,
  });
}

/** True when a product, module, or page path belongs to wedding printing. */
export function isWeddingRef(...parts) {
  return /wedding/i.test(parts.filter((part) => part != null && part !== '').join(' '));
}

export function trackWedding(step, extra = {}) {
  trackFunnel('wedding', step, extra);
}
