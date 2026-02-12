// Plain packaging product data
// 841 tiered products imported from Excel via scripts/import-plain-packaging-from-excel.py
// Do not add manual products here — re-run the import script after Excel updates.
import { TIERED_PLAIN_PRODUCTS, TIERED_CATEGORIES } from './plain-products-tiered';

// Product images in public/images/plain-packaging/ — assign by product code (overrides placeholder logo)
const PLAIN_IMAGE_OVERRIDES = {
  '120075': '/images/plain-packaging/120075.webp',
  '120076': '/images/plain-packaging/120076.webp',
  '1206653': '/images/plain-packaging/1206653.webp',
  '1206654': '/images/plain-packaging/1206654.webp',
  '150003': '/images/plain-packaging/150003.webp',
  '150004': '/images/plain-packaging/150004.webp',
  '160003': '/images/plain-packaging/160003.webp',
  '160006': '/images/plain-packaging/160006.webp',
  '160007': '/images/plain-packaging/160007.webp',
  '160008': '/images/plain-packaging/160008.webp',
  '160009': '/images/plain-packaging/160009.webp',
  'CLSB1300': '/images/plain-packaging/CLSB1300.webp',
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
