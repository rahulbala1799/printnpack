/**
 * Vercel AI Gateway — use plain "provider/model" strings (AI SDK routes via gateway + OIDC).
 * Auth: VERCEL_OIDC_TOKEN (vercel env pull) or AI_GATEWAY_API_KEY
 */

export function isAiConfigured() {
  return Boolean(
    process.env.AI_GATEWAY_API_KEY ||
    process.env.VERCEL_OIDC_TOKEN ||
    process.env.OPENAI_API_KEY
  );
}

export function getInvoiceAiModel() {
  return process.env.INVOICE_AI_MODEL || 'google/gemini-2.5-flash';
}

export function getAiConfigError() {
  if (isAiConfigured()) return null;
  return (
    'AI not configured. Run: vercel login && vercel env pull .env.local ' +
    '(provisions VERCEL_OIDC_TOKEN), or add AI_GATEWAY_API_KEY to .env.local'
  );
}
