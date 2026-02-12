// Plain packaging product data
// 841 tiered products imported from Excel via scripts/import-plain-packaging-from-excel.py
// Do not add manual products here — re-run the import script after Excel updates.
import { TIERED_PLAIN_PRODUCTS, TIERED_CATEGORIES } from './plain-products-tiered';

// Product images in public/images/plain-packaging/ — assign by product code (overrides placeholder logo)
const PLAIN_IMAGE_OVERRIDES = {
  '100070': '/images/plain-packaging/100070.webp',
  '100071': '/images/plain-packaging/100071.webp',
  '100072': '/images/plain-packaging/100072.webp',
  '100102': '/images/plain-packaging/100102.webp',
  '100103': '/images/plain-packaging/100103.webp',
  '100104': '/images/plain-packaging/100104.webp',
  '100253': '/images/plain-packaging/100253.webp',
  '100315': '/images/plain-packaging/100315.webp',
  '100316': '/images/plain-packaging/100316.webp',
  '100396': '/images/plain-packaging/100396.webp',
  '100397': '/images/plain-packaging/100397.webp',
  '101005': '/images/plain-packaging/101005.webp',
  '101006': '/images/plain-packaging/101006.webp',
  '102321': '/images/plain-packaging/102321.webp',
  '102331': '/images/plain-packaging/102331.webp',
  '102332': '/images/plain-packaging/102332.webp',
  '10498': '/images/plain-packaging/10498.webp',
  '10500': '/images/plain-packaging/10500.webp',
  '10501': '/images/plain-packaging/10501.webp',
  '10502': '/images/plain-packaging/10502.webp',
  '105000': '/images/plain-packaging/105000.webp',
  '105001': '/images/plain-packaging/105001.webp',
  '1041501': '/images/plain-packaging/1041501.webp',
  '1041502': '/images/plain-packaging/1041502.webp',
  '1041505': '/images/plain-packaging/1041505.webp',
  '109755': '/images/plain-packaging/109755.webp',
  '109756': '/images/plain-packaging/109756.webp',
  '109758': '/images/plain-packaging/109758.webp',
  '120074': '/images/plain-packaging/120074.webp',
  '120075': '/images/plain-packaging/120075.webp',
  '120076': '/images/plain-packaging/120076.webp',
  '120091': '/images/plain-packaging/120091.webp',
  '120092': '/images/plain-packaging/120092.webp',
  '120093': '/images/plain-packaging/120093.webp',
  '120134': '/images/plain-packaging/120134.webp',
  '120135': '/images/plain-packaging/120135.webp',
  '120136': '/images/plain-packaging/120136.webp',
  '120139': '/images/plain-packaging/120139.webp',
  '120158': '/images/plain-packaging/120158.webp',
  '120257': '/images/plain-packaging/120257.webp',
  '1206653': '/images/plain-packaging/1206653.webp',
  '1206654': '/images/plain-packaging/1206654.webp',
  '1206659': '/images/plain-packaging/1206659.webp',
  '1206660': '/images/plain-packaging/1206660.webp',
  '122090': '/images/plain-packaging/122090.webp',
  '122091': '/images/plain-packaging/122091.webp',
  '140009': '/images/plain-packaging/140009.webp',
  '140010': '/images/plain-packaging/140010.webp',
  '140011': '/images/plain-packaging/140011.webp',
  '140013': '/images/plain-packaging/140013.webp',
  '150003': '/images/plain-packaging/150003.webp',
  '150004': '/images/plain-packaging/150004.webp',
  '160003': '/images/plain-packaging/160003.webp',
  '160006': '/images/plain-packaging/160006.webp',
  '160007': '/images/plain-packaging/160007.webp',
  '160008': '/images/plain-packaging/160008.webp',
  '160009': '/images/plain-packaging/160009.webp',
  '230000': '/images/plain-packaging/230000.webp',
  'CL8BL': '/images/plain-packaging/CL8BL.webp',
  'CL12BL': '/images/plain-packaging/CL12BL.webp',
  'CL12WL': '/images/plain-packaging/CL12WL.webp',
  'CLSB750': '/images/plain-packaging/CLSB750.webp',
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
