/**
 * Exhibition hall. One page that lists every exhibition stand and states how
 * PrintNPack handles speed, artwork and the show date. Prices come from the
 * product tables. Fabric stands, curved stands and table covers are quoted
 * on their own pages and have no from-price here.
 */

import { beachFlagFromPrice } from './beach-flags';
import { inhakerFromPrice } from './inhaker-stands';
import { ledFrameFromPrice } from './led-frames';
import { popupWallFromPrice } from './popup-walls';
import { zipperFromPrice } from './zipper-walls';

export const EXHIBITION_PATH = '/exhibition-stands-ireland';

export const EXHIBITION_HERO = {
  src: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg',
  alt: 'Fabric banner stand set up as an exhibition media wall',
};

export const EXHIBITION_RELATED = {
  href: EXHIBITION_PATH,
  label: 'Exhibition stands',
  desc: 'Every stand, wall and frame in one hall',
};

const SPEED =
  'PrintNPack prints exhibition stands on a short schedule. Standard production is 3–5 working days after you approve the artwork proof. If the show is sooner, say so on the quote. A faster run is confirmed before anything is printed. It is not assumed.';

const ARTWORK =
  'Full help with the artwork is part of the order. Send a logo, a sketch, or print-ready files. PrintNPack sets the artwork to the size of the stand and sends a proof. Nothing is printed until you approve that proof.';

const DELIVERY =
  'Tell us the show date and the venue. PrintNPack schedules printing and delivery across Ireland so the stand is with you before the doors open. If that date cannot be met, you are told before production starts. The aim is an on-time delivery. A date is not promised until the quote confirms it.';

export const EXHIBITION_SERVICE = {
  speed: { id: 'exhibition-speed', title: 'Fast exhibition printing', text: SPEED },
  artwork: { id: 'exhibition-artwork', title: 'Full help with the artwork', text: ARTWORK },
  delivery: { id: 'exhibition-delivery', title: 'Delivery planned for the show date', text: DELIVERY },
};

function money(amount) {
  if (amount == null || amount === '') return null;
  const number = Number(typeof amount === 'function' ? amount() : amount);
  if (!Number.isFinite(number)) return null;
  return number.toFixed(2);
}

function pricedStand(stand, amount) {
  const price = money(amount);
  return {
    ...stand,
    price,
    priceLabel: price ? `From €${price}` : 'Quoted before print',
    priceNote: price ? 'ex VAT, delivery to Ireland included' : 'Ex VAT. The quote confirms the price and the date.',
  };
}

export function exhibitionHall() {
  return [
    {
      id: 'aisle-back-walls',
      stand: 'A',
      name: 'Aisle A · Back walls',
      intro: 'The wall at the back of the booth. Folding, straight fabric, curved fabric, or a rigid panel.',
      stands: [
        pricedStand({
          stand: 'A1',
          name: 'Pop-up display stands',
          href: '/pop-up-walls-ireland',
          summary: 'A folding exhibition frame with a printed fabric panel. Straight or curved. Full stand or fabric only. Optional LED.',
          image: '/images/banners/popup-walls/popup-wall-straight.jpg',
          imageAlt: 'Pop-up display stand with a printed fabric graphic on a folding frame',
          caption: 'Example print. Your own artwork goes on the fabric.',
        }, popupWallFromPrice),
        pricedStand({
          stand: 'A2',
          name: 'Fabric banner stands',
          href: '/fabric-banner-stands-ireland',
          summary: 'A printed stretch fabric graphic on a straight aluminium frame. Also called a banner with frame. Complete kit or a replacement graphic.',
          image: '/images/banners/fabric-banner-stands/fabric-banner-stand-ireland-exhibition-media-wall.jpg',
          imageAlt: 'Fabric banner stand Ireland — exhibition media wall, stretch fabric on an aluminium frame',
          caption: 'Example print. Your own artwork goes on the fabric.',
        }, null),
        pricedStand({
          stand: 'A3',
          name: 'Curved banner stands',
          href: '/curved-banner-stands-ireland',
          summary: 'A printed stretch fabric on a curved aluminium frame, about 3–5 m wide. This is a different product from the curved zipper wall.',
          image: '/images/banners/curved-banner-stands/curved-banner-stand-ireland-curved-stretch-stand.jpg',
          imageAlt: 'Curved banner stand with printed fabric on a curved frame',
          caption: 'Example print. Your own artwork goes on the fabric.',
        }, null),
        pricedStand({
          stand: 'A4',
          name: 'Exhibition walls',
          href: '/inhaker-stands-ireland',
          summary: 'A rigid printed panel, 88 cm wide, that hooks into posts. Also called an inhaker stand, a display wall or a trade show wall. The price is the panel. Posts and foot plates are not included.',
          image: '/images/banners/inhaker/inhaker-hero.jpg',
          imageAlt: 'Printed exhibition wall panel on posts',
          caption: 'Example print. Your own artwork goes on the panel.',
        }, inhakerFromPrice),
      ],
    },
    {
      id: 'aisle-zipper',
      stand: 'B',
      name: 'Aisle B · Zipper walls',
      intro: 'Stretch cloth that zips onto a 32 mm aluminium frame. The full set includes a carry bag. This range is unlit. It is not a pop-up wall and not a rigid panel.',
      stands: [
        pricedStand({
          stand: 'B1',
          name: 'Arch zipper walls',
          href: '/arch-zipper-walls-ireland',
          summary: 'A square or oval fabric arch for an entrance. Full set with a carry bag, or the cloth only.',
        }, () => zipperFromPrice('arch-zipper-walls-ireland')),
        pricedStand({
          stand: 'B2',
          name: 'Exhibition pillars',
          href: '/exhibition-pillars-ireland',
          summary: 'A fabric zipper pillar, 2 m or 3 m tall, printed on the front. Easy to carry in the bag.',
        }, () => zipperFromPrice('exhibition-pillars-ireland')),
        pricedStand({
          stand: 'B3',
          name: 'U-shaped zipper walls',
          href: '/u-walls-ireland',
          summary: 'A three-sided booth. The cloth wraps the back and both returns.',
        }, () => zipperFromPrice('u-walls-ireland')),
        pricedStand({
          stand: 'B4',
          name: 'Wave zipper walls',
          href: '/wave-walls-ireland',
          summary: 'An S-curve wall. 300 cm or 400 cm wide.',
        }, () => zipperFromPrice('wave-walls-ireland')),
        pricedStand({
          stand: 'B5',
          name: 'Curved vertical zipper walls',
          href: '/curved-vertical-zipper-walls-ireland',
          summary: 'A tall curve that stands on its own feet. 300 cm or 400 cm wide. Not the separate curved banner stand.',
        }, () => zipperFromPrice('curved-vertical-zipper-walls-ireland')),
        pricedStand({
          stand: 'B6',
          name: 'Curved horizontal zipper walls',
          href: '/curved-horizontal-zipper-walls-ireland',
          summary: 'A wide curve, from 300 cm to 600 cm. Full set with a bag, or the cloth only.',
        }, () => zipperFromPrice('curved-horizontal-zipper-walls-ireland')),
      ],
    },
    {
      id: 'aisle-light',
      stand: 'C',
      name: 'Aisle C · Light and the table',
      intro: 'A lit frame for the graphic you already have, and a printed cover for the table at the front of the stand.',
      stands: [
        pricedStand({
          stand: 'C1',
          name: 'Freestanding LED frames',
          href: '/freestanding-led-frames-ireland',
          summary: 'A rigid double-sided lightbox that stands on its own. Supplied unprinted, as a construction kit. Not a pop-up wall and not a fabric banner stand.',
          image: '/images/banners/led-frames/led-frame-80x200.jpg',
          imageAlt: 'Freestanding LED frame, 80 cm wide, supplied unprinted',
          caption: 'Supplied unprinted. You add the graphic.',
        }, ledFrameFromPrice),
        pricedStand({
          stand: 'C2',
          name: 'Custom table covers',
          href: '/custom-table-covers-ireland',
          summary: 'A fitted printed cover for an exhibition or conference table. Standard sizes, or your own up to 1.5 m wide and 6 m long.',
          image: '/images/table-covers/custom-table-cover-ireland.jpg',
          imageAlt: 'Printed exhibition table cover on a display table',
          caption: 'Example print. Your own artwork goes on the cloth.',
        }, null),
      ],
    },
  ];
}

export function exhibitionStands() {
  return exhibitionHall().flatMap((aisle) => aisle.stands.map((stand) => ({ ...stand, aisle: aisle.name })));
}

export function exhibitionCompanions() {
  return [
    {
      href: '/roll-up-banners-ireland',
      label: 'Roll-up banners',
      desc: 'Portable banner with a cassette. From €80 ex VAT.',
    },
    {
      href: '/extra-wide-roll-up-banners-ireland',
      label: 'Extra wide roll-ups',
      desc: '200 cm wide indoor roller. From €398.96 ex VAT.',
    },
    {
      href: '/beach-flags-ireland',
      label: 'Beach flags',
      desc: `Outdoor feather flags. From €${money(beachFlagFromPrice)} ex VAT, delivery included.`,
    },
    {
      href: '/stage-backdrop-banners-ireland',
      label: 'Stage backdrop banners',
      desc: 'Large polyester backdrops, up to 50 m. Quoted before print.',
    },
    {
      href: '/flags-ireland',
      label: 'Flags',
      desc: 'Beach flags and custom printed flags.',
    },
    {
      href: '/banners-ireland',
      label: 'Banner printing Ireland',
      desc: 'PVC banners, roll-ups and the wider banner range.',
    },
  ];
}

export function exhibitionFaqs() {
  const service = EXHIBITION_SERVICE;
  return [
    {
      q: 'Where can I order exhibition stands in Ireland?',
      a: 'PrintNPack prints exhibition stands in Ashbourne, Co. Meath and delivers them to every county in Ireland, including Dublin, Cork and Galway. This page is the hall. Each stand links to its own sizes and price.',
    },
    {
      q: 'How fast can you print an exhibition stand?',
      a: service.speed.text,
    },
    {
      q: 'Do you help with the artwork for an exhibition stand?',
      a: service.artwork.text,
    },
    {
      q: 'Will my exhibition stand arrive before the show?',
      a: service.delivery.text,
    },
    {
      q: 'Which exhibition products are on this page?',
      a: 'Pop-up display stands, zipper walls (an arch, a pillar, a U wall, a wave, a curved vertical wall and a curved horizontal wall), rigid exhibition walls, fabric banner stands, curved banner stands, freestanding LED frames and custom table covers. Roll-up banners, flags and stage backdrops are linked underneath. They are often ordered with a stand, and each has its own page.',
    },
    {
      q: 'Is a pop-up wall the same as a zipper wall or an exhibition wall?',
      a: 'No. A pop-up wall is a folding frame with a printed fabric. A zipper wall is a stretch cloth that zips onto a tube frame and packs into a bag. An exhibition wall on this site is a rigid printed panel, also called an inhaker stand. A fabric banner stand is a stretch graphic on a straight aluminium frame. A freestanding LED frame is supplied unprinted.',
    },
  ];
}

export function exhibitionCatalogProduct() {
  const hero = EXHIBITION_HERO;
  return {
    id: 'exhibition-stands-ireland',
    name: 'Exhibition Stands Ireland',
    category: 'Banners, Stands and Frames',
    url: EXHIBITION_PATH,
    searchAliases: [
      'exhibition stands',
      'exhibition stand',
      'trade show display',
      'trade show stands',
      'exhibition printing',
      'exhibition products',
      'trade show stand Ireland',
    ],
    description:
      'Exhibition stands in Ireland, shown as one hall. Pop-up walls, zipper walls, rigid exhibition panels, fabric stands, LED frames and table covers. Fast production after artwork approval, full help with the artwork, and delivery planned around the show date.',
    features: [
      'Every exhibition stand on one page',
      'Standard production is 3–5 working days after the artwork proof is approved',
      'Full help with the artwork, and a proof before printing',
      'Delivery scheduled so the stand arrives before the show',
    ],
    detailedDescription:
      `${SPEED} ${ARTWORK} ${DELIVERY} Printed in Ashbourne, Co. Meath, and delivered across Ireland.`,
    specifications: [
      { name: 'What this page is', value: 'A hall of exhibition stands. Each stand has its own page.' },
      { name: 'Production', value: '3–5 working days after artwork approval. A faster run is confirmed on the quote.' },
      { name: 'Artwork', value: 'Logo, sketch or print-ready files. A proof is sent before printing.' },
      { name: 'Delivery', value: 'Scheduled around the show date. A date is confirmed on the quote.' },
    ],
    images: [hero.src],
    imageSrc: hero.src,
    imageAlts: [hero.alt],
    price: 'See each stand',
    moq: 1,
    leadTime: '3–5 working days after artwork approval',
    applications: ['Trade shows', 'Exhibitions', 'Conferences and launches'],
  };
}

export function exhibitionAssistantLine() {
  return 'Exhibition stands in Ireland. The hall lists pop-up display stands, zipper walls, rigid exhibition walls, fabric banner stands, curved banner stands, freestanding LED frames and table covers. Each stand has its own page. Fast service: standard production is 3–5 working days after the artwork proof is approved. A faster run is confirmed on the quote, not assumed. Full help with the artwork: a logo, a sketch or print-ready files is enough. PrintNPack sets the artwork to the stand and sends a proof. Nothing is printed until that proof is approved. Delivery: ask for the show date and the venue, schedule so the stand arrives before the event, and say so before production if the date cannot be met. Do not promise a date that is not confirmed on the quote. Do not invent a lead time shorter than 3–5 working days.';
}

export function exhibitionMachineRecord(siteUrl) {
  const pageUrl = `${siteUrl}${EXHIBITION_PATH}`;
  return {
    page: 'Exhibition stands Ireland',
    seller: {
      name: 'PrintNPack',
      address: 'Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57, Ireland',
      phone: '+353 89 415 7369',
      email: 'info@printnpack.ie',
    },
    url: pageUrl,
    specificationUrl: `${siteUrl}/llms/exhibition-stands.txt`,
    specificationJsonUrl: `${siteUrl}/llms/exhibition-stands.json`,
    useThisWhen: [
      'Someone wants exhibition stands, a trade show display, or every exhibition product in one place.',
      'Someone asks how fast an exhibition stand can be printed.',
      'Someone asks if PrintNPack helps with the artwork.',
      'Someone asks whether the stand will arrive before a show.',
    ],
    service: {
      fastService: SPEED,
      artworkHelp: ARTWORK,
      onTimeDelivery: DELIVERY,
    },
    whatThisPageIs: 'A hall of PrintNPack exhibition products. Each stand links to its own page, with that product’s sizes and price. Printed in Ashbourne, Co. Meath, and delivered across Ireland.',
    whatThisPageIsNot: [
      'Not a checkout. The stand page builds the quote.',
      'Not one product. A pop-up wall, a zipper wall, a rigid exhibition panel, a fabric stand and an LED frame are different products.',
    ],
    stands: exhibitionStands().map((stand) => ({
      stand: stand.stand,
      aisle: stand.aisle,
      name: stand.name,
      pageUrl: `${siteUrl}${stand.href}`,
      whatItIs: stand.summary,
      fromPriceExVatEur: stand.price ? Number(stand.price) : null,
      priceNote: stand.priceNote,
    })),
    oftenOrderedWithAStand: exhibitionCompanions().map((item) => ({
      name: item.label,
      pageUrl: `${siteUrl}${item.href}`,
      note: item.desc,
    })),
  };
}

export function exhibitionMachineText(siteUrl) {
  const record = exhibitionMachineRecord(siteUrl);
  const lines = [
    'Exhibition stands from PrintNPack, Ashbourne, Co. Meath, Ireland.',
    `Page: ${record.url}`,
    `Specification JSON: ${record.specificationJsonUrl}`,
    '',
    'Fast service.',
    record.service.fastService,
    '',
    record.service.artworkHelp,
    '',
    'On-time delivery.',
    record.service.onTimeDelivery,
    '',
    'Use this page when:',
    ...record.useThisWhen.map((line) => `- ${line}`),
    '',
    record.whatThisPageIs,
    '',
    'This page is not:',
    ...record.whatThisPageIsNot.map((line) => `- ${line}`),
    '',
    'Stands in the hall:',
  ];

  record.stands.forEach((stand) => {
    lines.push('');
    lines.push(`${stand.stand} ${stand.name}`);
    lines.push(`Aisle: ${stand.aisle}`);
    lines.push(`Page: ${stand.pageUrl}`);
    lines.push(stand.whatItIs);
    lines.push(stand.fromPriceExVatEur == null
      ? `Price: ${stand.priceNote}`
      : `From €${stand.fromPriceExVatEur.toFixed(2)} ${stand.priceNote}`);
  });

  lines.push('');
  lines.push('Often ordered with a stand. These are separate products:');
  record.oftenOrderedWithAStand.forEach((item) => {
    lines.push(`- ${item.name}: ${item.pageUrl} — ${item.note}`);
  });
  lines.push('');
  return lines.join('\n');
}
