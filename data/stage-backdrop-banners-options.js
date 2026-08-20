const IMG = '/images/products/stage-backdrop-banners';

export const STAGE_BACKDROP_SIZE = {
  minCm: 10,
  maxCm: 5000,
  unit: 'cm',
};

export const STAGE_BACKDROP_GALLERY = [
  {
    src: `${IMG}/stage-backdrop-banners-ireland-open-air-festival.png`,
    alt: 'Huge outdoor stage backdrop banner Ireland — large custom printed festival banner on an open-air stage',
  },
  {
    src: `${IMG}/stage-backdrop-banners-ireland-outdoor-truss.png`,
    alt: 'Large custom stage banner Ireland — oversized polyester backdrop on outdoor truss, 3m x 3m and bigger sizes',
  },
  {
    src: `${IMG}/stage-backdrop-banners-ireland-indoor-conference.jpg`,
    alt: 'Indoor conference stage backdrop banner Ireland — custom large banner for hotel ballroom and AGM stages',
  },
  {
    src: `${IMG}/stage-backdrop-banners-ireland-night-concert.jpg`,
    alt: 'Night concert large backdrop banner Ireland — huge printed stage banner with lighting',
  },
  {
    src: `${IMG}/stage-backdrop-banners-ireland-northlight-festival.jpg`,
    alt: 'Festival stage backdrop banner Ireland — extra large custom printed banner for events',
  },
  {
    src: `${IMG}/stage-backdrop-banners-ireland-sunset-festival.jpg`,
    alt: 'Sunset festival large banner Ireland — custom oversized stage backdrop printing Dublin and nationwide',
  },
];

export const STAGE_BACKDROP_HERO = STAGE_BACKDROP_GALLERY[0];

export const STAGE_BACKDROP_MATERIALS = [
  {
    id: 'matte-polyester',
    name: 'Matte polyester',
    variant: 'matte',
    image: STAGE_BACKDROP_GALLERY[2].src,
    previewAlt: STAGE_BACKDROP_GALLERY[2].alt,
  },
  {
    id: 'coated-polyester',
    name: 'Coated polyester',
    variant: 'coated',
    image: STAGE_BACKDROP_GALLERY[0].src,
    previewAlt: STAGE_BACKDROP_GALLERY[0].alt,
  },
  {
    id: 'structured-polyester',
    name: 'Structured polyester',
    variant: 'structured',
    image: STAGE_BACKDROP_GALLERY[3].src,
    previewAlt: STAGE_BACKDROP_GALLERY[3].alt,
  },
];

export const STAGE_BACKDROP_STANDARD_SIZES = [
  { id: '3x2', label: '3 × 2 m', width: 300, height: 200 },
  { id: '3x3', label: '3 × 3 m', width: 300, height: 300, recommended: true },
  { id: '4x3', label: '4 × 3 m', width: 400, height: 300 },
  { id: '6x3', label: '6 × 3 m', width: 600, height: 300 },
  { id: '8x4', label: '8 × 4 m', width: 800, height: 400 },
  { id: '10x4', label: '10 × 4 m', width: 1000, height: 400 },
  { id: '12x4', label: '12 × 4 m', width: 1200, height: 400 },
  { id: '20x5', label: '20 × 5 m', width: 2000, height: 500 },
];

export const DEFAULT_STAGE_BACKDROP_CONFIG = {
  materialId: 'coated-polyester',
  widthCm: 300,
  heightCm: 300,
  finishingId: 'rings-corners',
  quantity: 1,
};

export const STAGE_BACKDROP_FINISHING = [
  {
    id: 'rings-30cm',
    name: 'Rings every 30 cm, with reinforcement',
  },
  {
    id: 'rings-corners',
    name: 'Rings in the corners, with reinforcement',
  },
];

export const STAGE_BACKDROP_MIN_QUANTITY = 1;

export function getStageBackdropMaterial(id) {
  return STAGE_BACKDROP_MATERIALS.find((m) => m.id === id);
}

export function getStageBackdropFinishing(id) {
  return STAGE_BACKDROP_FINISHING.find((f) => f.id === id);
}

export function clampStageBackdropSize(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return STAGE_BACKDROP_SIZE.minCm;
  return Math.min(STAGE_BACKDROP_SIZE.maxCm, Math.max(STAGE_BACKDROP_SIZE.minCm, Math.round(n)));
}

export function isValidStageBackdropSize(value) {
  const n = Number(value);
  return Number.isFinite(n) && n >= STAGE_BACKDROP_SIZE.minCm && n <= STAGE_BACKDROP_SIZE.maxCm;
}

export function formatStageBackdropSize(widthCm, heightCm) {
  const w = clampStageBackdropSize(widthCm);
  const h = clampStageBackdropSize(heightCm);
  const wM = (w / 100).toFixed(w % 100 === 0 ? 0 : 2).replace(/\.00$/, '');
  const hM = (h / 100).toFixed(h % 100 === 0 ? 0 : 2).replace(/\.00$/, '');
  return `${w} × ${h} cm (${wM} × ${hM} m)`;
}

export function matchingStandardSizeId(widthCm, heightCm) {
  const w = Number(widthCm);
  const h = Number(heightCm);
  const match = STAGE_BACKDROP_STANDARD_SIZES.find((s) => s.width === w && s.height === h);
  return match?.id || null;
}

export function formatStageBackdropQuoteSummary(config) {
  const material = getStageBackdropMaterial(config.materialId);
  const finishing = getStageBackdropFinishing(config.finishingId);
  const quantity = Math.max(STAGE_BACKDROP_MIN_QUANTITY, Number(config.quantity) || STAGE_BACKDROP_MIN_QUANTITY);

  const lines = [
    'Large Stage Backdrop Banners Quote Request',
    '',
    '── Banner configuration ──',
    `Material: ${material?.name || config.materialId}`,
    `Size: ${formatStageBackdropSize(config.widthCm, config.heightCm)}`,
    `Size limits: ${STAGE_BACKDROP_SIZE.minCm}–${STAGE_BACKDROP_SIZE.maxCm} cm`,
    `Finishing: ${finishing?.name || config.finishingId}`,
    `Quantity: ${quantity}`,
  ];

  return lines.join('\n');
}
