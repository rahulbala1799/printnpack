import { getPlainProductSlug } from './plain-product-urls';

/** Google Merchant offer ids are limited to 50 characters. */
export const MERCHANT_OFFER_ID_MAX = 50;

/**
 * The id Merchant Center already uses for a plain-packaging product.
 * Short page slugs are the offer id. Longer slugs are over the 50-character
 * limit, and those products are listed under their product code instead.
 */
export function getMerchantOfferId(product) {
  const slug = getPlainProductSlug(product);
  if (slug.length <= MERCHANT_OFFER_ID_MAX) return slug;
  const code = String(product?.code || product?.id || '').trim();
  if (code && code.length <= MERCHANT_OFFER_ID_MAX) return code;
  return '';
}
