export function trackFunnel(formType, step, extra = {}) {
  if (typeof window === 'undefined') return;
  window.printNpackAnalytics?.trackEvent?.('funnel', {
    formType,
    step,
    ...extra,
  });
}
