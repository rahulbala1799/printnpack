import printedProducts from '../data/products';
import { PLAIN_PRODUCTS } from '../data/plain-products';
import {
  getPlainMerchantOfferId,
  getPrintedMerchantOfferId,
} from './merchant-offer-id';

/**
 * Must match the store code on the Ashbourne Business Profile linked in
 * Merchant Center. Google rejects every row when this does not match.
 */
export const LOCAL_STORE_CODE = 'ashbourne';

function appendInventoryRows(lines, seen, products, getOfferId) {
  for (const product of products) {
    if (product?.hidden) continue;
    const id = getOfferId(product);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    lines.push(`${LOCAL_STORE_CODE}\t${id}\tin_stock`);
  }
}

/**
 * Local inventory for Ashbourne: plain packaging with photos, plus printed
 * catalog products (packaging, banners, napkins, clothing, and stands).
 */
export function buildLocalInventoryTsv(
  plainProducts = PLAIN_PRODUCTS,
  printed = printedProducts
) {
  const lines = ['store_code\tid\tavailability'];
  const seen = new Set();
  appendInventoryRows(lines, seen, plainProducts, getPlainMerchantOfferId);
  appendInventoryRows(lines, seen, printed, getPrintedMerchantOfferId);
  return `${lines.join('\n')}\n`;
}
