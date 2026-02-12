// Plain packaging product data
// 841 tiered products imported from Excel via scripts/import-plain-packaging-from-excel.py
// Do not add manual products here — re-run the import script after Excel updates.
import { TIERED_PLAIN_PRODUCTS, TIERED_CATEGORIES } from './plain-products-tiered';

// Product images in public/images/plain-packaging/ — assign by product code (overrides placeholder logo)
const PLAIN_IMAGE_OVERRIDES = {
  '1206653': '/images/plain-packaging/1206653.webp', // 6" Bagasse Burger Box
  '1206654': '/images/plain-packaging/1206654.webp', // 7" Bagasse Small Rectangle Meal Box
};

function applyImageOverrides(products) {
  return products.map(p => {
    const src = PLAIN_IMAGE_OVERRIDES[p.code];
    if (!src) return p;
    return { ...p, imageSrc: src, images: [src] };
  });
}

export const PLAIN_PRODUCTS = applyImageOverrides(TIERED_PLAIN_PRODUCTS);
export const CATEGORIES = ['All', ...TIERED_CATEGORIES];

export function getProductById(id) {
  return PLAIN_PRODUCTS.find(p => p.id === id) || null;
}

export function getRelatedProducts(id) {
  const product = getProductById(id);
  if (!product) return [];
  return PLAIN_PRODUCTS.filter(p => p.id !== id && p.category === product.category).slice(0, 4);
}
