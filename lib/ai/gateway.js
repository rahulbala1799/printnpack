/**
 * Vercel AI Gateway — use plain "provider/model" strings (AI SDK routes via gateway + OIDC).
 * Auth: VERCEL_OIDC_TOKEN (vercel env pull) or AI_GATEWAY_API_KEY
 * Fallback: GOOGLE_GENERATIVE_AI_API_KEY via @ai-sdk/google direct provider
 */
import { google } from '@ai-sdk/google';

export function isAiConfigured() {
  return Boolean(
    process.env.AI_GATEWAY_API_KEY ||
    process.env.VERCEL_OIDC_TOKEN ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY
  );
}

export function getInvoiceAiModel() {
  return process.env.INVOICE_AI_MODEL || 'google/gemini-2.5-flash';
}

/** Resolve model for generateText — gateway string or direct Google provider. */
export function resolveAiModel() {
  const modelSlug = getInvoiceAiModel();

  if (process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN) {
    return modelSlug;
  }

  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    const modelId = modelSlug.includes('/') ? modelSlug.split('/').pop() : modelSlug;
    return google(modelId);
  }

  return modelSlug;
}

export function getAiConfigError() {
  if (isAiConfigured()) return null;
  return (
    'AI not configured. Add AI_GATEWAY_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY in Vercel env vars, ' +
    'or run: vercel login && vercel env pull .env.local (provisions VERCEL_OIDC_TOKEN)'
  );
}
