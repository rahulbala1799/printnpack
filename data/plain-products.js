// Plain packaging product data
// 841 tiered products imported from Excel via scripts/import-plain-packaging-from-excel.py
// Do not add manual products here — re-run the import script after Excel updates.
import { TIERED_PLAIN_PRODUCTS, TIERED_CATEGORIES } from './plain-products-tiered';

export const PLAIN_PRODUCTS = TIERED_PLAIN_PRODUCTS;
export const CATEGORIES = ['All', ...TIERED_CATEGORIES];

export function getProductById(id) {
  return PLAIN_PRODUCTS.find(p => p.id === id) || null;
}

export function getRelatedProducts(id) {
  const product = getProductById(id);
  if (!product) return [];
  return PLAIN_PRODUCTS.filter(p => p.id !== id && p.category === product.category).slice(0, 4);
}
