/**
 * Zipper wall quotes. Print.com sku zipper-walls, sampled 21 Oct 2026.
 * salesPrice already includes the membership discount.
 * Customer price = print cost × ZIPPER_MARKUP, plus Ireland delivery at the carrier rate.
 * Delivery is DHG Connect to IE A84 KV57, and it is charged per wall.
 * Copies scale linearly. Confirmed at 2 copies for the 300 cm curved vertical
 * full set, the same wall as fabric only, and the 70 cm pillar full set.
 * Pillars reject a back print. Every other shape here allows front and back.
 * Prices are ex VAT. Every shape here has example prints.
 * The print choice uses a shared diagram so front and back is clear, except the arch, which uses its own photos.
 */

export const ZIPPER_MARKUP = 1.45;

export const ZIPPER_PRINT_PHOTOS = {
  front: {
    src: '/images/banners/zipper-walls/print-front-only.svg',
    alt: 'Cloth printed on the front. The back is plain.',
  },
  both: {
    src: '/images/banners/zipper-walls/print-front-and-back.svg',
    alt: 'Cloth printed on the front and the back.',
  },
};

/** Example prints. Oval is the curved arch. Square is the portal with straight sides. */
export const ARCH_OVAL_PHOTOS = {
  front: {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-oval-front-only.jpg',
    alt: 'Oval fabric exhibition arch printed on the front, with a plain inside',
  },
  both: {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-oval-front-and-back.jpg',
    alt: 'Oval fabric exhibition arch printed on the outside and the inside',
  },
};

export const ARCH_SQUARE_PHOTOS = {
  front: {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-square-front-only.jpg',
    alt: 'Square fabric exhibition arch printed on the front, with a plain inside',
  },
  both: {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-square-front-and-back.jpg',
    alt: 'Square fabric exhibition arch printed on the front and the inside',
  },
};

export const ARCH_ZIPPER_PHOTOS = ARCH_OVAL_PHOTOS;

const ARCH_OVAL_GALLERY = [
  ARCH_OVAL_PHOTOS.front,
  {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-oval-front-only-purple.jpg',
    alt: 'Oval fabric exhibition arch with a printed front and a plain white inside',
  },
  ARCH_OVAL_PHOTOS.both,
  {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-oval-front-and-back-tech.jpg',
    alt: 'Oval fabric exhibition arch with a different print on the front and the inside',
  },
];

const ARCH_SQUARE_GALLERY = [
  ARCH_SQUARE_PHOTOS.front,
  {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-square-front-only-purple.jpg',
    alt: 'Square fabric exhibition arch with a printed front and a plain white inside',
  },
  ARCH_SQUARE_PHOTOS.both,
  {
    src: '/images/banners/zipper-walls/arch-zipper-wall-ireland-square-front-and-back-green.jpg',
    alt: 'Square fabric exhibition arch printed in one colour on the front and the inside',
  },
];

export const ARCH_ZIPPER_GALLERY = [...ARCH_OVAL_GALLERY, ...ARCH_SQUARE_GALLERY];

/** Each photo shows the 2 m pillar and the 3 m pillar together. They are example prints, not a size selector. */
export const PILLAR_GALLERY = [
  {
    src: '/images/banners/zipper-walls/exhibition-pillar-ireland-technology.jpg',
    alt: 'Printed fabric exhibition pillars, a 2 m pillar beside a 3 m pillar',
  },
  {
    src: '/images/banners/zipper-walls/exhibition-pillar-ireland-botanical.jpg',
    alt: 'Leaf-print fabric exhibition pillars, the shorter pillar beside the taller one',
  },
  {
    src: '/images/banners/zipper-walls/exhibition-pillar-ireland-coffee.jpg',
    alt: 'Coffee-print fabric exhibition pillars, a 2 m pillar beside a 3 m pillar',
  },
  {
    src: '/images/banners/zipper-walls/exhibition-pillar-ireland-healthcare.jpg',
    alt: 'Healthcare-print fabric exhibition pillars, the shorter pillar beside the taller one',
  },
];

/** Example prints of one U wall. They do not split the deep and shallow sizes, or front-only and both sides. */
export const U_WALL_GALLERY = [
  {
    src: '/images/banners/zipper-walls/u-zipper-wall-ireland-technology.jpg',
    alt: 'U-shaped fabric exhibition wall with a printed back and returns',
  },
  {
    src: '/images/banners/zipper-walls/u-zipper-wall-ireland-botanical.jpg',
    alt: 'Leaf-print U-shaped fabric exhibition wall',
  },
  {
    src: '/images/banners/zipper-walls/u-zipper-wall-ireland-coffee.jpg',
    alt: 'Coffee-print U-shaped fabric exhibition wall',
  },
  {
    src: '/images/banners/zipper-walls/u-zipper-wall-ireland-healthcare.jpg',
    alt: 'Healthcare-print U-shaped fabric exhibition wall',
  },
];

/** Example prints of one wide curve on a foot. They do not split the 300 to 600 cm widths, or front-only and both sides. */
export const CURVED_HORIZONTAL_GALLERY = [
  {
    src: '/images/banners/zipper-walls/curved-horizontal-zipper-wall-ireland-technology.jpg',
    alt: 'Wide curved fabric zipper wall on a foot, with a printed graphic',
  },
  {
    src: '/images/banners/zipper-walls/curved-horizontal-zipper-wall-ireland-botanical.jpg',
    alt: 'Leaf-print wide curved fabric zipper wall on a foot',
  },
  {
    src: '/images/banners/zipper-walls/curved-horizontal-zipper-wall-ireland-coffee.jpg',
    alt: 'Coffee-print wide curved fabric zipper wall on a foot',
  },
  {
    src: '/images/banners/zipper-walls/curved-horizontal-zipper-wall-ireland-healthcare.jpg',
    alt: 'Healthcare-print wide curved fabric zipper wall on a foot',
  },
];

/** Example prints of one curve that stands on its feet. They do not split the 300 cm and 400 cm sizes, or front-only and both sides. */
export const CURVED_VERTICAL_GALLERY = [
  {
    src: '/images/banners/zipper-walls/curved-vertical-zipper-wall-ireland-technology.jpg',
    alt: 'Curved fabric zipper wall with feet and a printed graphic',
  },
  {
    src: '/images/banners/zipper-walls/curved-vertical-zipper-wall-ireland-botanical.jpg',
    alt: 'Leaf-print curved fabric zipper wall with feet',
  },
  {
    src: '/images/banners/zipper-walls/curved-vertical-zipper-wall-ireland-coffee.jpg',
    alt: 'Coffee-print curved fabric zipper wall with feet',
  },
  {
    src: '/images/banners/zipper-walls/curved-vertical-zipper-wall-ireland-healthcare.jpg',
    alt: 'Healthcare-print curved fabric zipper wall with feet',
  },
];

/** Example prints of one S-curve wave. They do not split the shallow and deep sizes, or front-only and both sides. */
export const WAVE_GALLERY = [
  {
    src: '/images/banners/zipper-walls/wave-zipper-wall-ireland-technology.jpg',
    alt: 'S-curve fabric wave wall with a printed graphic',
  },
  {
    src: '/images/banners/zipper-walls/wave-zipper-wall-ireland-botanical.jpg',
    alt: 'Leaf-print S-curve fabric wave wall',
  },
  {
    src: '/images/banners/zipper-walls/wave-zipper-wall-ireland-coffee.jpg',
    alt: 'Coffee-print S-curve fabric wave wall',
  },
  {
    src: '/images/banners/zipper-walls/wave-zipper-wall-ireland-healthcare.jpg',
    alt: 'Healthcare-print S-curve fabric wave wall',
  },
];
export const ZIPPER_HUB_PATH = '/zipper-walls-ireland';
export const ZIPPER_EXAMPLE_CAPTION = 'Example print. Your own artwork goes on the fabric.';

const MATERIAL = '210 gsm stretch cloth, 90% polyamide and 10% spandex, dye sublimation';

/** Print.com salesPrice for one wall. Key: size api | kit | print */
const PRINT_COST = {
  '300_x_230_cm_bow|set|front': 353.91,
  '300_x_230_cm_bow|set|both': 421.32,
  '300_x_230_cm_bow|fabric|front': 220.61,
  '300_x_230_cm_bow|fabric|both': 288.02,
  '400_x_230_cm_bow|set|front': 460.21,
  '400_x_230_cm_bow|set|both': 549.7,
  '400_x_230_cm_bow|fabric|front': 292.95,
  '400_x_230_cm_bow|fabric|both': 382.43,
  '686_x_229_cm_ribbon_a|set|front': 833.86,
  '686_x_229_cm_ribbon_a|set|both': 1029.19,
  '686_x_229_cm_ribbon_a|fabric|front': 639.43,
  '686_x_229_cm_ribbon_a|fabric|both': 834.76,
  '486_x_223_cm_ribbon_b|set|front': 634.38,
  '486_x_223_cm_ribbon_b|set|both': 781.02,
  '486_x_223_cm_ribbon_b|fabric|front': 480.03,
  '486_x_223_cm_ribbon_b|fabric|both': 626.68,
  '708_x_100_cm_arch_square|set|front': 549.36,
  '708_x_100_cm_arch_square|set|both': 640.4,
  '708_x_100_cm_arch_square|fabric|front': 298.01,
  '708_x_100_cm_arch_square|fabric|both': 389.05,
  '6120_x_100_cm_arch_bow|set|front': 480.32,
  '6120_x_100_cm_arch_bow|set|both': 555.62,
  '6120_x_100_cm_arch_bow|fabric|front': 246.5,
  '6120_x_100_cm_arch_bow|fabric|both': 321.8,
  '300_x_230_cm_curve|set|front': 329.39,
  '300_x_230_cm_curve|set|both': 394.89,
  '300_x_230_cm_curve|fabric|front': 214.45,
  '300_x_230_cm_curve|fabric|both': 279.96,
  '400_x_230_cm_curve|set|front': 426.24,
  '400_x_230_cm_curve|set|both': 513.99,
  '400_x_230_cm_curve|fabric|front': 287.24,
  '400_x_230_cm_curve|fabric|both': 375,
  '500_x_230_cm_curve|set|front': 544.12,
  '500_x_230_cm_curve|set|both': 648.94,
  '500_x_230_cm_curve|fabric|front': 343.12,
  '500_x_230_cm_curve|fabric|both': 447.95,
  '600_x_230_cm_curve|set|front': 684.43,
  '600_x_230_cm_curve|set|both': 820.44,
  '600_x_230_cm_curve|fabric|front': 445.2,
  '600_x_230_cm_curve|fabric|both': 581.2,
  '240_x_200_cm_pillar|set|front': 358.07,
  '240_x_200_cm_pillar|fabric|front': 180.39,
  '320_x_300_cm_pillar_b|set|front': 517.03,
  '320_x_300_cm_pillar_b|fabric|front': 303.11,
  '300_x_230_cm_wave|set|front': 354.44,
  '300_x_230_cm_wave|set|both': 426.56,
  '300_x_230_cm_wave|fabric|front': 236.1,
  '300_x_230_cm_wave|fabric|both': 308.22,
  '400_x_230_cm_wave|set|front': 497.44,
  '400_x_230_cm_wave|set|both': 604.61,
  '400_x_230_cm_wave|fabric|front': 350.81,
  '400_x_230_cm_wave|fabric|both': 457.99,
};

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

export const ZIPPER_FAMILIES = [
  {
    id: 'curved-vertical-zipper-walls-ireland',
    path: '/curved-vertical-zipper-walls-ireland',
    name: 'Curved Vertical Zipper Walls',
    linkLabel: 'Curved vertical zipper walls',
    linkDesc: 'Curve with feet, 300 or 400 cm wide',
    h1: 'Curved vertical zipper walls with feet',
    title: 'Curved Vertical Zipper Walls Ireland | With Feet | PrintNPack',
    defaultSizeId: 'bow-300',
    bothSides: true,
    shapes: [],
    keywords: 'curved vertical zipper wall, zipper wall with feet, zipper wall with standards, bow zipper wall, portable curved display wall Ireland, easy to transport zipper wall',
    searchAliases: [
      'curved vertical zipper wall',
      'zipper wall with feet',
      'zipper wall with standards',
      'bow zipper wall',
      'vertical curve display',
      'portable curved zipper wall',
    ],
    lead: 'A curved vertical zipper wall stands on its own feet. The printed stretch cloth zips onto a 32 mm aluminium frame, and the full set includes a carry bag.',
    body: 'People also search zipper wall with feet, zipper wall with standards and bow zipper wall. Two sizes: 300 × 230 × 81 cm and 400 × 230 × 85 cm. The third number is the depth. Print the outside only, or both faces of the cloth. Order the full set, or the fabric alone if the frame is already yours.',
    what: 'It is a tall curve held up by feet, also called standards. The graphic is a stretch cloth that zips over a 32 mm aluminium frame. It is the display people ask for as a zipper wall with feet or a bow zipper wall.',
    transport: 'The full set includes a carry bag. The frame comes apart and the cloth folds, so the wall is easy to transport between venues and easy to store after the show.',
    sizes: [
      { id: 'bow-300', api: '300_x_230_cm_bow', label: '300 × 230 × 81 cm', widthCm: 300, heightCm: 230, depthCm: 81, delivery: 13.692 },
      { id: 'bow-400', api: '400_x_230_cm_bow', label: '400 × 230 × 85 cm', widthCm: 400, heightCm: 230, depthCm: 85, delivery: 13.692 },
    ],
    alternateNames: [
      'Curved vertical zipper wall',
      'Zipper wall with feet',
      'Zipper wall with standards',
      'Bow zipper wall',
      'Vertical curve display',
      'Portable curved zipper wall',
    ],
    applications: ['Exhibition curves', 'Reception backdrops', 'Photo walls that read from the side'],
  },
  {
    id: 'u-walls-ireland',
    path: '/u-walls-ireland',
    name: 'U-Shaped Zipper Walls',
    linkLabel: 'U-shaped zipper walls',
    linkDesc: 'Three-sided booth, 250 cm or 149 cm deep',
    h1: 'U-shaped zipper walls in Ireland',
    title: 'U-Shaped Zipper Walls Ireland | U Wall Display | PrintNPack',
    defaultSizeId: 'u-149',
    bothSides: true,
    shapes: [],
    keywords: 'U wall, U-shaped zipper wall, U-shaped exhibition stand, U-shaped backdrop, three-sided display wall Ireland, booth wall, easy to transport U wall',
    searchAliases: [
      'U wall',
      'U-shaped zipper wall',
      'U-shaped exhibition stand',
      'U-shaped backdrop',
      'three-sided display',
      'booth zipper wall',
    ],
    lead: 'A U wall wraps a small booth. The back and both returns are one printed cloth, zipped onto a 32 mm aluminium frame, and the full set packs into a carry bag.',
    body: 'People also search U-shaped exhibition stand, U-shaped backdrop and three-sided display. The deep U is 300 × 228 × 250 cm. The shallower U is 298 × 228 × 149 cm. Width × height × depth. Print the outside, or both faces so the inside of the booth carries a graphic too.',
    what: 'It is a three-sided zipper wall. The cloth turns the corner so the brand is on the back wall and on both returns. People ask for it as a U wall, a U-shaped exhibition stand or a U-shaped backdrop.',
    transport: 'Both U walls pack into the carry bag that comes with the full set. The deeper wall takes more floor space when it is up, and the same bag when it is down, so it stays easy to transport.',
    sizes: [
      { id: 'u-250', api: '686_x_229_cm_ribbon_a', label: '300 × 228 × 250 cm', widthCm: 300, heightCm: 228, depthCm: 250, delivery: 13.692 },
      { id: 'u-149', api: '486_x_223_cm_ribbon_b', label: '298 × 228 × 149 cm', widthCm: 298, heightCm: 228, depthCm: 149, delivery: 15.744 },
    ],
    alternateNames: [
      'U wall',
      'U-shaped zipper wall',
      'U-shaped exhibition stand',
      'U-shaped backdrop',
      'Three-sided display wall',
      'Booth zipper wall',
    ],
    applications: ['Small exhibition booths', 'Sampling stands', 'Three-sided backdrops'],
  },
  {
    id: 'arch-zipper-walls-ireland',
    path: '/arch-zipper-walls-ireland',
    name: 'Arch Zipper Walls',
    linkLabel: 'Arch zipper walls',
    linkDesc: 'Square arch or oval arch',
    h1: 'Arch zipper walls in Ireland',
    title: 'Arch Zipper Walls Ireland | Square and Oval Fabric Arch | PrintNPack',
    defaultSizeId: 'arch-oval',
    bothSides: true,
    shapes: [
      { id: 'square', label: 'Arch square' },
      { id: 'oval', label: 'Arch oval' },
    ],
    keywords: 'arch zipper wall, fabric arch, exhibition arch, entrance arch, square arch display, oval arch backdrop, portable arch Ireland, event arch, easy to transport arch',
    searchAliases: [
      'arch zipper wall',
      'fabric arch',
      'exhibition arch',
      'entrance arch',
      'square arch',
      'oval arch',
      'event arch',
      'portable arch',
    ],
    lead: 'An arch zipper wall is a fabric arch people walk under or stand in front of. The cloth zips onto a 32 mm aluminium frame, and the full set includes a carry bag.',
    body: 'Choose a square arch, 240 × 240 × 100 cm, or an oval arch, 270 × 230 × 100 cm. People also search fabric arch, exhibition arch, entrance arch and event arch. Print the front, or the front and the back. It packs down, so the arch is easy to transport to the next venue.',
    what: 'It is a freestanding fabric arch. The square arch is 240 cm wide and 240 cm tall. The oval arch is 270 cm wide and 230 cm tall. Both are 100 cm deep. The printed cloth zips onto the frame.',
    transport: 'The arch is built to move. The full set is the cloth, the frame and a carry bag. One person can take it from a shop launch to a wedding entrance or an exhibition aisle.',
    sizes: [
      { id: 'arch-square', shapeId: 'square', api: '708_x_100_cm_arch_square', label: '240 × 240 × 100 cm', widthCm: 240, heightCm: 240, depthCm: 100, delivery: 13.692 },
      { id: 'arch-oval', shapeId: 'oval', api: '6120_x_100_cm_arch_bow', label: '270 × 230 × 100 cm', widthCm: 270, heightCm: 230, depthCm: 100, delivery: 13.692 },
    ],
    alternateNames: [
      'Arch zipper wall',
      'Fabric arch',
      'Exhibition arch',
      'Entrance arch',
      'Square arch display',
      'Oval arch backdrop',
      'Event arch',
      'Portable arch',
    ],
    applications: ['Entrances and photo arches', 'Weddings and launches', 'Exhibition aisles'],
  },
  {
    id: 'curved-horizontal-zipper-walls-ireland',
    path: '/curved-horizontal-zipper-walls-ireland',
    name: 'Curved Horizontal Zipper Walls',
    linkLabel: 'Curved horizontal zipper walls',
    linkDesc: '300 to 600 cm wide, zipper frame and bag',
    h1: 'Curved horizontal zipper walls in Ireland',
    title: 'Curved Horizontal Zipper Walls Ireland | PrintNPack',
    defaultSizeId: 'curve-300',
    bothSides: true,
    shapes: [],
    keywords: 'curved horizontal zipper wall, curved zipper wall, horizontal curve display, concave zipper wall Ireland, portable curved wall, easy to transport curve',
    searchAliases: [
      'curved horizontal zipper wall',
      'curved zipper wall',
      'horizontal curve display',
      'concave zipper wall',
      'portable curved zipper wall',
    ],
    lead: 'A curved horizontal zipper wall bends across its width. The printed cloth zips onto a 32 mm aluminium frame, and the full set includes a carry bag.',
    body: 'Four widths: 300 × 230 × 60 cm, 400 × 230 × 80 cm, 500 × 230 × 100 cm and 600 × 230 × 120 cm. The wall gets deeper as it gets wider. Print the front, or both faces of the cloth. This is the zipper-wall curve, with a price that includes delivery to Ireland.',
    what: 'It is a wide zipper wall with a horizontal curve. The cloth zips over the frame. Widths run from 3 m to 6 m, all 230 cm tall. People search it as a curved zipper wall or a horizontal curve display.',
    transport: 'Each width packs into the carry bag supplied with the full set. A 6 m wall takes the same kind of bag as the 3 m wall, so a wide curve stays easy to transport.',
    sizes: [
      { id: 'curve-300', api: '300_x_230_cm_curve', label: '300 × 230 × 60 cm', widthCm: 300, heightCm: 230, depthCm: 60, delivery: 13.692 },
      { id: 'curve-400', api: '400_x_230_cm_curve', label: '400 × 230 × 80 cm', widthCm: 400, heightCm: 230, depthCm: 80, delivery: 15.744 },
      { id: 'curve-500', api: '500_x_230_cm_curve', label: '500 × 230 × 100 cm', widthCm: 500, heightCm: 230, depthCm: 100, delivery: 15.744 },
      { id: 'curve-600', api: '600_x_230_cm_curve', label: '600 × 230 × 120 cm', widthCm: 600, heightCm: 230, depthCm: 120, delivery: 15.744 },
    ],
    alternateNames: [
      'Curved horizontal zipper wall',
      'Curved zipper wall',
      'Horizontal curve display',
      'Concave zipper wall',
      'Portable curved wall',
    ],
    applications: ['Exhibition back walls', 'Conference curves', 'Retail launches'],
  },
  {
    id: 'exhibition-pillars-ireland',
    path: '/exhibition-pillars-ireland',
    name: 'Exhibition Pillars',
    linkLabel: 'Exhibition pillars',
    linkDesc: 'Fabric zipper pillar, 2 m or 3 m tall',
    h1: 'Fabric exhibition pillars in Ireland',
    title: 'Exhibition Pillars Ireland | Fabric Zipper Pillar | PrintNPack',
    defaultSizeId: 'pillar-70',
    bothSides: false,
    shapes: [],
    keywords: 'exhibition pillar, fabric pillar, zipper pillar, display pillar, branded column, exhibition totem, portable pillar Ireland, easy to transport pillar',
    searchAliases: [
      'exhibition pillar',
      'fabric pillar',
      'zipper pillar',
      'display pillar',
      'branded column',
      'exhibition totem',
      'portable pillar',
    ],
    lead: 'An exhibition pillar is a fabric column. The printed cloth zips around a 32 mm aluminium frame, and the full set includes a carry bag, so the pillar is easy to transport.',
    body: 'Two sizes: 70 × 200 × 50 cm, and a taller 80 × 300 × 80 cm. Width × height × depth. People also search fabric pillar, zipper pillar, display pillar, branded column and exhibition totem. The print is on the front face of the cloth. A back print is not available on a pillar.',
    what: 'It is a freestanding fabric pillar, also called a zipper pillar, a display pillar or an exhibition totem. The short pillar is 2 m tall. The tall pillar is 3 m tall. The cloth zips onto the frame.',
    transport: 'A pillar is the easiest zipper display to carry. The full set is the cloth, the frame and a bag. It stands on its own and packs down after the event.',
    sizes: [
      { id: 'pillar-70', api: '240_x_200_cm_pillar', label: '70 × 200 × 50 cm', widthCm: 70, heightCm: 200, depthCm: 50, delivery: 13.692 },
      { id: 'pillar-80', api: '320_x_300_cm_pillar_b', label: '80 × 300 × 80 cm', widthCm: 80, heightCm: 300, depthCm: 80, delivery: 15.744 },
    ],
    alternateNames: [
      'Exhibition pillar',
      'Fabric pillar',
      'Zipper pillar',
      'Display pillar',
      'Branded column',
      'Exhibition totem',
      'Portable pillar',
    ],
    applications: ['Aisles and entrances', 'Retail columns', 'Wayfinding at events'],
  },
  {
    id: 'wave-walls-ireland',
    path: '/wave-walls-ireland',
    name: 'Wave Zipper Walls',
    linkLabel: 'Wave zipper walls',
    linkDesc: 'S-curve wall, 64 cm or 126 cm deep',
    h1: 'Wave zipper walls in Ireland',
    title: 'Wave Zipper Walls Ireland | Wave Display Stand | PrintNPack',
    defaultSizeId: 'wave-300',
    bothSides: true,
    shapes: [],
    keywords: 'wave zipper wall, wave wall, wave display stand, serpentine backdrop, S-curve display wall Ireland, portable wave wall, easy to transport wave',
    searchAliases: [
      'wave zipper wall',
      'wave wall',
      'wave display stand',
      'serpentine backdrop',
      'S-curve display',
      'portable wave wall',
    ],
    lead: 'A wave zipper wall is an S-curve. The printed cloth zips onto a 32 mm aluminium frame, and the full set includes a carry bag.',
    body: 'The shallow wave is 300 × 230 × 64 cm. The deep wave is 400 × 230 × 126 cm. People also search wave wall, wave display stand, serpentine backdrop and S-curve display. Print the front, or both faces of the cloth. It packs into the bag, so a wave wall is easy to transport.',
    what: 'It is a zipper wall with a wave in the plan view. The 64 cm wave is a gentle curve. The 126 cm wave is a stronger S. The cloth zips over the frame.',
    transport: 'The full set includes the carry bag. The wave packs flat into that bag, which is why exhibitors pick it when the stand has to move every week.',
    sizes: [
      { id: 'wave-300', api: '300_x_230_cm_wave', label: '300 × 230 × 64 cm', widthCm: 300, heightCm: 230, depthCm: 64, delivery: 13.692 },
      { id: 'wave-400', api: '400_x_230_cm_wave', label: '400 × 230 × 126 cm', widthCm: 400, heightCm: 230, depthCm: 126, delivery: 15.744 },
    ],
    alternateNames: [
      'Wave zipper wall',
      'Wave wall',
      'Wave display stand',
      'Serpentine backdrop',
      'S-curve display wall',
      'Portable wave wall',
    ],
    applications: ['Exhibition backdrops', 'Photo waves', 'Retail feature walls'],
  },
];

const KIT_LABEL = { set: 'Full set', fabric: 'Fabric only' };
const PRINT_LABEL = { front: 'Front only', both: 'Front and back' };

export function zipperFamily(familyId) {
  return ZIPPER_FAMILIES.find((family) => family.id === familyId) || null;
}

export function zipperSizesFor(family, shapeId) {
  if (!family) return [];
  if (!family.shapes.length) return family.sizes;
  const shape = family.shapes.some((item) => item.id === shapeId) ? shapeId : family.shapes[0].id;
  return family.sizes.filter((size) => size.shapeId === shape);
}

export function normalizeZipperWall(input = {}) {
  const family = zipperFamily(input.familyId) || ZIPPER_FAMILIES[0];
  const defaultSize = family.sizes.find((size) => size.id === family.defaultSizeId) || family.sizes[0];
  const requestedSize = family.sizes.find((size) => size.id === input.sizeId);
  const explicitShape = family.shapes.some((item) => item.id === input.shapeId) ? input.shapeId : null;
  const shapeId = explicitShape || requestedSize?.shapeId || defaultSize.shapeId || null;
  const sizes = zipperSizesFor(family, shapeId);
  const size = sizes.find((item) => item.id === input.sizeId)
    || sizes.find((item) => item.id === family.defaultSizeId)
    || sizes[0];
  const kit = input.kit === 'fabric' ? 'fabric' : 'set';
  let print = input.print === 'both' ? 'both' : 'front';
  if (!family.bothSides) print = 'front';
  const qty = Math.max(1, Math.round(Number(input.qty) || 1));
  return {
    familyId: family.id,
    shapeId: size.shapeId || shapeId,
    sizeId: size.id,
    kit,
    print,
    qty,
  };
}

export function priceZipperWall(input) {
  const selection = normalizeZipperWall(input);
  const family = zipperFamily(selection.familyId);
  const size = family.sizes.find((item) => item.id === selection.sizeId);
  const printCost = PRINT_COST[`${size.api}|${selection.kit}|${selection.print}`];
  if (printCost == null) return null;
  const unitPrice = money(printCost * ZIPPER_MARKUP + size.delivery);
  const lineTotal = money(unitPrice * selection.qty);
  return {
    ...selection,
    family,
    size,
    unitCost: printCost,
    delivery: size.delivery,
    unitPrice,
    lineTotal,
    summary: zipperSummary(selection, size),
  };
}

export function zipperShapeOptions(familyId) {
  const family = zipperFamily(familyId);
  if (!family) return [];
  if (familyId !== 'arch-zipper-walls-ireland') return family.shapes;
  return [
    { id: 'square', label: 'Arch square', image: ARCH_SQUARE_PHOTOS.front.src, alt: ARCH_SQUARE_PHOTOS.front.alt },
    { id: 'oval', label: 'Arch oval', image: ARCH_OVAL_PHOTOS.front.src, alt: ARCH_OVAL_PHOTOS.front.alt },
  ];
}

export function zipperPrintPhotos(familyId, shapeId) {
  if (familyId === 'arch-zipper-walls-ireland') {
    return shapeId === 'square' ? ARCH_SQUARE_PHOTOS : ARCH_OVAL_PHOTOS;
  }
  return ZIPPER_PRINT_PHOTOS;
}

export function zipperGallery(familyId) {
  if (familyId === 'arch-zipper-walls-ireland') return ARCH_ZIPPER_GALLERY;
  if (familyId === 'exhibition-pillars-ireland') return PILLAR_GALLERY;
  if (familyId === 'u-walls-ireland') return U_WALL_GALLERY;
  if (familyId === 'wave-walls-ireland') return WAVE_GALLERY;
  if (familyId === 'curved-vertical-zipper-walls-ireland') return CURVED_VERTICAL_GALLERY;
  if (familyId === 'curved-horizontal-zipper-walls-ireland') return CURVED_HORIZONTAL_GALLERY;
  return [];
}

export function zipperGalleryCaption(familyId) {
  if (familyId === 'exhibition-pillars-ireland') {
    return 'Example print. Your own artwork goes on the fabric. Each photo shows the 2 m pillar beside the 3 m pillar.';
  }
  if (familyId === 'arch-zipper-walls-ireland') {
    return 'Example print. Your own artwork goes on the fabric. Square and oval are shown printed on the front, and printed on the front and the inside.';
  }
  if (familyId === 'u-walls-ireland') {
    return 'Example print. Your own artwork goes on the fabric. The cloth wraps the back and both returns.';
  }
  if (familyId === 'wave-walls-ireland') {
    return 'Example print. Your own artwork goes on the fabric. The wall is an S-curve.';
  }
  if (familyId === 'curved-vertical-zipper-walls-ireland') {
    return 'Example print. Your own artwork goes on the fabric. The wall stands on its feet.';
  }
  if (familyId === 'curved-horizontal-zipper-walls-ireland') {
    return 'Example print. Your own artwork goes on the fabric. The wall bends across its width.';
  }
  return 'Example print. Your own artwork goes on the fabric.';
}

export function zipperPreview(input) {
  const selection = normalizeZipperWall(input);
  if (selection.familyId === 'exhibition-pillars-ireland') return PILLAR_GALLERY[0];
  if (selection.familyId === 'u-walls-ireland') return U_WALL_GALLERY[0];
  if (selection.familyId === 'wave-walls-ireland') return WAVE_GALLERY[0];
  if (selection.familyId === 'curved-vertical-zipper-walls-ireland') return CURVED_VERTICAL_GALLERY[0];
  if (selection.familyId === 'curved-horizontal-zipper-walls-ireland') return CURVED_HORIZONTAL_GALLERY[0];
  if (selection.familyId !== 'arch-zipper-walls-ireland') return null;
  const photos = selection.shapeId === 'square' ? ARCH_SQUARE_PHOTOS : ARCH_OVAL_PHOTOS;
  return selection.print === 'both' ? photos.both : photos.front;
}

export function zipperSummary(selection, size) {
  const parts = [size.label, KIT_LABEL[selection.kit], PRINT_LABEL[selection.print]];
  return parts.join(' · ');
}

export function zipperFromPrice(familyId) {
  const family = zipperFamily(familyId);
  return priceZipperWall({
    familyId: family.id,
    sizeId: family.defaultSizeId,
    kit: 'set',
    print: 'front',
    qty: 1,
  }).unitPrice;
}

export function zipperRangeFromPrice() {
  return Math.min(...ZIPPER_FAMILIES.map((family) => zipperFromPrice(family.id)));
}

export function zipperFaqs(familyId) {
  const family = zipperFamily(familyId);
  const from = zipperFromPrice(family.id).toFixed(2);
  const sizeList = family.sizes.map((size) => size.label).join(', ');
  const printAnswer = family.bothSides
    ? 'Front only prints the outside of the cloth. Front and back prints both sides, so the reverse of the cloth carries a graphic as well.'
    : 'A pillar is printed on the front only. Front and back is not available on a pillar.';
  return [
    { q: family.shapes.length ? 'What is an arch zipper wall?' : `What is a ${family.alternateNames[0].toLowerCase()}?`, a: family.what },
    { q: 'Which sizes can I order?', a: `The sizes are ${sizeList}. The three numbers are width × height × depth, in centimetres.` },
    { q: 'Is the frame included?', a: 'Choose Full set for the printed cloth, the 32 mm aluminium frame and the carry bag. Choose Fabric only if you already have that frame and only need a new print.' },
    { q: 'Can it be printed on both sides?', a: printAnswer },
    { q: 'Is it easy to transport?', a: family.transport },
    {
      q: 'How much is delivery in Ireland?',
      a: `The price in the builder includes delivery to Ireland and is ex VAT. A full set printed on the front starts at €${from}. Each wall includes its own delivery, so two walls include two deliveries. PrintNPack is in Ashbourne, Co. Meath, and ships to Dublin, Cork, Galway and every county.`,
    },
  ];
}

export function zipperCatalogProducts() {
  return ZIPPER_FAMILIES.map((family) => {
    const from = zipperFromPrice(family.id).toFixed(2);
    return {
      id: family.id,
      name: `${family.name} Ireland`,
      category: 'Banners, Stands and Frames',
      url: family.path,
      searchAliases: family.searchAliases,
      description: `${family.lead} From €${from} ex VAT, delivery to Ireland included.`,
      features: [
        'Printed stretch cloth that zips onto a 32 mm aluminium frame',
        'Full set with carry bag, or fabric only',
        family.bothSides ? 'Front only, or front and back' : 'Front only',
        `Sizes: ${family.sizes.map((size) => size.label).join('; ')}`,
        'Easy to transport in the carry bag',
        'Delivery to Ireland included, ex VAT',
      ],
      detailedDescription: `${family.what} ${family.body} From €${from} ex VAT for a full set printed on the front, with delivery to Ireland included. Cloth: ${MATERIAL}.`,
      specifications: [
        { name: 'Also called', value: family.alternateNames.join(', ') },
        { name: 'Kit', value: 'Full set (cloth, 32 mm frame and bag) or fabric only' },
        { name: 'Print', value: family.bothSides ? 'Front only, or front and back' : 'Front only' },
        { name: 'Sizes', value: family.sizes.map((size) => size.label).join('; ') },
        { name: 'Cloth', value: MATERIAL },
        { name: 'Minimum order', value: '1' },
        { name: 'Delivery', value: 'Included to Ireland, per wall, ex VAT' },
      ],
      images: zipperGallery(family.id).map((item) => item.src),
      imageAlts: zipperGallery(family.id).map((item) => item.alt),
      imageSrc: zipperGallery(family.id)[0]?.src || '',
      price: `From €${from} ex VAT`,
      moq: 1,
      leadTime: 'Included in the quoted delivery',
      applications: family.applications,
    };
  });
}

export function zipperRelatedLinks(exceptId) {
  return ZIPPER_FAMILIES.filter((family) => family.id !== exceptId).map((family) => ({
    href: family.path,
    label: family.linkLabel,
    desc: family.linkDesc,
  }));
}

export const ZIPPER_NEIGHBOUR_LINKS = [
  { href: '/exhibition-stands-ireland', label: 'Exhibition stands', desc: 'Every stand, wall and frame in one hall' },
  { href: '/zipper-walls-ireland', label: 'All zipper walls', desc: 'Arch, pillar, wave, U and curves' },
  { href: '/pop-up-walls-ireland', label: 'Pop-up display stands', desc: 'Folding pop-up wall' },
  { href: '/fabric-banner-stands-ireland', label: 'Fabric banner stands', desc: 'Straight stretch stand' },
  { href: '/curved-banner-stands-ireland', label: 'Curved banner stands', desc: 'Separate curved stretch quote' },
  { href: '/inhaker-stands-ireland', label: 'Exhibition walls', desc: 'Rigid panels, also called an inhaker stand' },
  { href: '/banners-ireland', label: 'Banner printing Ireland', desc: 'PVC, roll-ups and displays' },
];

export function buildZipperWallQuoteLine(catalogItem, raw) {
  const familyId = catalogItem?.id || raw?.familyId;
  const priced = priceZipperWall({ ...(raw || {}), familyId });
  if (!priced) return null;
  const preview = zipperPreview(priced);
  const gallery = zipperGallery(priced.familyId).map((item) => item.src);
  return {
    moduleId: 'zipper-walls',
    productId: catalogItem?.id || priced.familyId,
    name: catalogItem?.name || priced.family.name,
    href: catalogItem?.href || priced.family.path,
    image: preview?.src || catalogItem?.image || null,
    images: gallery.length ? gallery : (catalogItem?.images || []),
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      familyId: priced.familyId,
      shapeId: priced.shapeId,
      sizeId: priced.sizeId,
      kit: priced.kit,
      print: priced.print,
      qty: priced.qty,
    },
    fingerprint: ['zipper-walls', priced.familyId, priced.sizeId, priced.kit, priced.print].join('|'),
  };
}

export function zipperMachineRecord(siteUrl) {
  return {
    product: 'Zipper wall',
    seller: {
      name: 'PrintNPack',
      address: 'Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57, Ireland',
      phone: '+353 89 415 7369',
      email: 'info@printnpack.ie',
    },
    hubUrl: `${siteUrl}${ZIPPER_HUB_PATH}`,
    specificationUrl: `${siteUrl}/llms/zipper-walls.txt`,
    specificationJsonUrl: `${siteUrl}/llms/zipper-walls.json`,
    useThisWhen: [
      'Someone asks for a zipper wall, a fabric wall that zips onto a frame, or a display that packs into a bag.',
      'Someone asks for an arch, a fabric arch, an entrance arch, a square arch or an oval arch. Send them to the arch page.',
      'Someone asks for a pillar, a column, a totem, a fabric pillar or a display that is easy to carry. Send them to the pillar page.',
      'Someone asks for a U wall, a U-shaped stand or a three-sided booth. Send them to the U wall page.',
      'Someone asks for a wave wall, a serpentine backdrop or an S-curve. Send them to the wave page.',
      'Someone asks for a curved vertical zipper wall with feet. Send them to the curved vertical page.',
      'Someone asks for a curved horizontal zipper wall. Send them to the curved horizontal page.',
    ],
    whatItIs: 'A printed 210 gsm stretch cloth that zips onto a 32 mm aluminium frame. The full set includes the cloth, the frame and a carry bag. Fabric only is the replacement cloth for a frame the customer already owns.',
    whatItIsNot: [
      'Not a folding pop-up display stand',
      'Not a roll-up banner',
      'Not a rigid exhibition panel or inhaker stand',
      'Not an LED zipper wall. This range is unlit',
      'Not the separate curved banner stand quote, which is a different page',
    ],
    cloth: MATERIAL,
    priceRules: {
      currency: 'EUR',
      vat: 'Prices are ex VAT.',
      delivery: 'Ireland delivery is included in each unit price. It is charged per wall. Two walls include two deliveries. The rate is the DHG Connect price to Ashbourne, Co. Meath, sampled per size.',
      quantity: 'The print cost and the delivery both scale linearly. A quantity of 2 is double the quantity of 1.',
      fromPrice: 'The from-price on each page is one full set, printed on the front, in the smallest complete size for that shape. It is not the fabric-only price.',
    },
    shapes: ZIPPER_FAMILIES.map((family) => ({
      name: family.name,
      pageUrl: `${siteUrl}${family.path}`,
      alsoCalled: family.alternateNames,
      whatItIs: family.what,
      bothSides: family.bothSides,
      fromPriceExVatEur: zipperFromPrice(family.id),
      variants: family.sizes.flatMap((size) => {
        const prints = family.bothSides ? ['front', 'both'] : ['front'];
        return ['set', 'fabric'].flatMap((kit) => prints.map((print) => {
          const priced = priceZipperWall({
            familyId: family.id,
            sizeId: size.id,
            kit,
            print,
            qty: 1,
          });
          return {
            size: size.label,
            widthCm: size.widthCm,
            heightCm: size.heightCm,
            depthCm: size.depthCm,
            kit: KIT_LABEL[kit],
            print: PRINT_LABEL[print],
            unitPriceExVatDeliveryIncludedEur: priced.unitPrice,
          };
        }));
      }),
    })),
  };
}

export function zipperMachineText(siteUrl) {
  const record = zipperMachineRecord(siteUrl);
  const lines = [
    'Zipper walls from PrintNPack, Ashbourne, Co. Meath, Ireland.',
    `Hub: ${record.hubUrl}`,
    `Specification JSON: ${record.specificationJsonUrl}`,
    '',
    record.whatItIs,
    '',
    'Use these pages when the question matches:',
    ...record.useThisWhen.map((line) => `- ${line}`),
    '',
    'This range is not:',
    ...record.whatItIsNot.map((line) => `- ${line}`),
    '',
    `Cloth: ${record.cloth}`,
    record.priceRules.vat,
    record.priceRules.delivery,
    record.priceRules.quantity,
    record.priceRules.fromPrice,
    '',
  ];
  record.shapes.forEach((shape) => {
    lines.push(`${shape.name}`);
    lines.push(`Page: ${shape.pageUrl}`);
    lines.push(`Also called: ${shape.alsoCalled.join(', ')}`);
    lines.push(shape.whatItIs);
    lines.push(`From €${shape.fromPriceExVatEur.toFixed(2)} ex VAT, delivery included, for one full set printed on the front.`);
    lines.push(shape.bothSides ? 'Print: front only, or front and back.' : 'Print: front only. Front and back is not sold on this shape.');
    shape.variants.forEach((variant) => {
      lines.push(`- ${variant.size} · ${variant.kit} · ${variant.print} · €${variant.unitPriceExVatDeliveryIncludedEur.toFixed(2)} each, ex VAT, delivery included`);
    });
    lines.push('');
  });
  return lines.join('\n');
}
