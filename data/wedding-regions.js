import { SITE_URL } from '../lib/site';

/**
 * Country landing pages for wedding printing. Each page ranks for the wedding
 * products in its own market (UK, Europe) while the order is still quoted and
 * printed from Ashbourne, Co. Meath. Edit the copy here.
 */

export const WEDDING_ALTERNATES = [
  { hreflang: 'en-ie', path: '/wedding-printing-ireland' },
  { hreflang: 'en-gb', path: '/wedding-printing-uk' },
  { hreflang: 'en', path: '/wedding-printing-europe' },
  { hreflang: 'x-default', path: '/wedding-printing-ireland' },
];

export function weddingAlternateLinks() {
  return WEDDING_ALTERNATES.map(({ hreflang, path }) => ({ hreflang, href: `${SITE_URL}${path}` }));
}

export const WEDDING_REGIONS = {
  uk: {
    id: 'uk',
    path: '/wedding-printing-uk',
    name: 'the UK',
    short: 'UK',
    title: 'Wedding Printing UK | Personalised Napkins & Envelopes, Delivered to the UK',
    h1Lead: 'Wedding Printing',
    h1Accent: 'UK',
    script: 'Delivered to England, Scotland, Wales & Northern Ireland',
    description:
      'Personalised wedding napkins, printed wedding envelopes, invitations and signs for UK weddings. Printed in Ireland, delivered to England, Scotland, Wales and Northern Ireland. Quote online.',
    keywords: [
      'wedding printing uk',
      'personalised wedding napkins uk',
      'custom wedding napkins uk',
      'printed wedding envelopes uk',
      'wedding stationery uk',
      'wedding invitations printing uk',
      'airlaid wedding napkins uk',
      'kraft wedding napkins uk',
      'brown wedding napkins uk',
      'eco-friendly wedding napkins uk',
      'recycled wedding napkins uk',
      'custom kraft napkins uk',
      'personalised napkins england',
      'wedding napkins scotland',
      'wedding printing wales',
      'wedding printing northern ireland',
    ].join(', '),
    intro:
      'Print n Pack prints personalised wedding napkins, printed wedding envelopes, invitations, menus, monogram stamps and welcome signs for couples in the UK. Everything is designed, proofed and printed at our workshop in Ashbourne, Co. Meath, then posted to your door in England, Scotland, Wales or Northern Ireland.',
    places: [
      'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol', 'Newcastle', 'Sheffield',
      'Edinburgh', 'Glasgow', 'Aberdeen', 'Cardiff', 'Swansea', 'Belfast', 'Derry', 'Cambridge',
    ],
    placesTitle: 'Wedding printing delivered across the UK',
    placesText:
      'Order from anywhere in England, Scotland, Wales and Northern Ireland. Delivery to Great Britain starts at €21 and Northern Ireland is priced like Ireland, from €9. See the delivery costs below.',
    trust: [
      ['Printed in Ireland', 'Ashbourne, Co. Meath workshop'],
      ['Proof before print', 'You approve every design'],
      ['Posted to the UK', 'From €21 to Great Britain'],
      ['Reply within 1 hour', 'Mon to Fri 9 to 6, Sat 10 to 2'],
    ],
    faqs: [
      {
        q: 'Do you deliver personalised wedding napkins to the UK?',
        a: 'Yes. Wedding napkins are printed in Ashbourne, Co. Meath and posted to England, Scotland, Wales and Northern Ireland. White airlaid napkins are printed in full colour. Custom kraft napkins are brown paper with names, a date or a monogram. Both are 20 × 20 cm and 10 × 20 cm, from 50 napkins. Delivery to Great Britain starts at €21 and your quote shows the cost for your order.',
      },
      {
        q: 'How much is delivery to the UK?',
        a: 'Delivery to Great Britain is €21 for a parcel up to 2 kg, €23 up to 5 kg, €25 up to 10 kg, €27 up to 15 kg and €30 up to 20 kg. Northern Ireland costs the same as Ireland, from €9. Small orders under 2 kg may qualify for a cheaper packet rate. Your quote shows the cost for your order.',
      },
      {
        q: 'Will I pay customs or import charges on a UK order?',
        a: 'Goods sent from Ireland to Great Britain pass through UK customs. Ask us when you request your quote and we will explain what applies to your order, so it is clear before you confirm.',
      },
      {
        q: 'Can you print wedding envelopes and guest addresses for UK guests?',
        a: 'Yes. We print C6, C5 and DL envelopes in full colour with a return address on the flap, and we can print each guest’s name and address, including UK postcodes. Choose a size and build the quote online.',
      },
      {
        q: 'How early should I order if the wedding is in the UK?',
        a: 'Order once the wording and guest list are settled, and allow time for the proof and for posting to the UK. Tell us your date when you ask for a quote and we will say whether it is realistic.',
      },
      {
        q: 'Where are the products made?',
        a: 'Everything is made at Unit 14, Ashbourne Business Centre, Co. Meath, Ireland, by the same team that prints for Irish weddings.',
      },
      {
        q: 'How do I get a quote for my wedding printing?',
        a: 'Use the quote builder for napkins and envelopes, or send us a message for invitations, signs and stamps. We reply within 1 hour in working hours.',
      },
    ],
  },
  europe: {
    id: 'europe',
    path: '/wedding-printing-europe',
    name: 'Europe',
    short: 'Europe',
    title: 'Wedding Printing Europe | Personalised Napkins & Envelopes Delivered Across the EU',
    h1Lead: 'Wedding Printing',
    h1Accent: 'Europe',
    script: 'Printed in Ireland, delivered across the EU',
    description:
      'Personalised wedding napkins, printed wedding envelopes, invitations and signs for weddings in France, Germany, Spain, Italy and across Europe. Printed in Ireland and delivered within the EU. Quote online.',
    keywords: [
      'wedding printing europe',
      'personalised wedding napkins europe',
      'custom wedding napkins eu',
      'kraft wedding napkins europe',
      'brown wedding napkins europe',
      'eco-friendly wedding napkins europe',
      'recycled wedding napkins europe',
      'custom kraft napkins eu',
      'printed wedding envelopes europe',
      'wedding stationery europe',
      'destination wedding printing',
      'wedding napkins france',
      'wedding napkins germany',
      'wedding napkins spain',
      'wedding napkins italy',
      'wedding napkins netherlands',
      'destination wedding napkins',
    ].join(', '),
    intro:
      'Print n Pack prints personalised wedding napkins, printed wedding envelopes, invitations, menus, monogram stamps and welcome signs for couples marrying in Europe, including destination weddings. Everything is designed, proofed and printed in Ashbourne, Ireland, then delivered to your home or venue in the EU.',
    places: [
      'France', 'Germany', 'Spain', 'Italy', 'Netherlands', 'Belgium', 'Portugal', 'Austria', 'Denmark',
      'Sweden', 'Finland', 'Poland', 'Greece', 'Croatia', 'Malta', 'Luxembourg',
    ],
    placesTitle: 'Wedding printing delivered across the EU',
    placesText:
      'Ireland is in the EU, so wedding orders to EU countries do not go through customs. Delivery starts at €21 to France, Germany, Belgium, the Netherlands and Luxembourg, and from €30 to most other European countries. See the delivery costs below.',
    trust: [
      ['Printed in the EU', 'Ashbourne, Ireland'],
      ['Proof before print', 'You approve every design'],
      ['No customs inside the EU', 'Delivery from €21'],
      ['Reply within 1 hour', 'Mon to Fri 9 to 6, Sat 10 to 2'],
    ],
    faqs: [
      {
        q: 'Do you deliver personalised wedding napkins across Europe?',
        a: 'Yes. Wedding napkins are printed in Ashbourne, Ireland and delivered to EU countries including France, Germany, Spain, Italy and the Netherlands. White airlaid napkins are printed in full colour. Custom kraft napkins are brown paper with names, a date or a monogram. Both are 20 × 20 cm and 10 × 20 cm, from 50 napkins. Delivery starts at €21 and your quote shows the cost for your order.',
      },
      {
        q: 'How much is delivery to Europe?',
        a: 'To France, Germany, Belgium, the Netherlands and Luxembourg (Zone 2), delivery is €21 for a parcel up to 2 kg, €23 up to 5 kg, €25 up to 10 kg, €27 up to 15 kg and €30 up to 20 kg. To most other European countries (Zone 3), including Spain, Portugal, Italy, Austria, Poland, Denmark, Sweden, Finland, Greece, Norway and Switzerland, it is €30 up to 2 kg, €45 up to 5 kg and €60 up to 10 kg. Some destinations, such as Turkey, are in a higher zone. Your quote shows the cost for your order.',
      },
      {
        q: 'Is there customs on orders to EU countries?',
        a: 'No. Ireland and the other EU countries share a customs union, so wedding orders sent within the EU do not go through customs. We confirm any tax that applies when we quote.',
      },
      {
        q: 'Can you print a destination wedding order and send it to the venue?',
        a: 'Yes. Give us the venue or your address and the wedding date, and we quote delivery to that address. Order early enough for the proof and the delivery.',
      },
      {
        q: 'Can you print names with accents and special characters?',
        a: 'Yes. Send the names, date and any text exactly as you want them printed, with accents and special characters included, and we set them in your proof for you to check before we print.',
      },
      {
        q: 'Which languages do you work in?',
        a: 'We work in English. You can send your own wording in another language, and we print it as supplied after you approve the proof.',
      },
      {
        q: 'How do I get a quote for my wedding printing?',
        a: 'Use the quote builder for napkins and envelopes, or send us a message for invitations, signs and stamps. We reply within 1 hour in working hours.',
      },
    ],
  },
};

export function getWeddingRegion(id) {
  return WEDDING_REGIONS[id];
}
