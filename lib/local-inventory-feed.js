import { PLAIN_PRODUCTS } from '../data/plain-products';
import { getMerchantOfferId } from './merchant-offer-id';

/**
 * Must match the store code on the Ashbourne Business Profile linked in
 * Merchant Center. Google rejects every row when this does not match.
 */
export const LOCAL_STORE_CODE = 'ashbourne';

export function buildLocalInventoryTsv(products = PLAIN_PRODUCTS, storeCode = LOCAL_STORE_CODE) {
  const lines = ['store_code\tid\tavailability'];
  const seen = new Set();
  for (const product of products) {
    const id = getMerchantOfferId(product);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    lines.push(`${storeCode}\t${id}\tin_stock`);
  }
  return `${lines.join('\n')}\n`;
}
