import products from '../../data/products';
import { HEADER_CATEGORIES } from '../../data/header-nav';
import { PRODUCT_STARTING_PRICES } from '../schema';
import { PUBLIC_PAGE_PATHS } from '../../data/chat-page-index';
import printRange from '../../data/printcom-range.json';
import { beachFlagFromPrice } from '../../data/beach-flags';
import { inhakerFromPrice } from '../../data/inhaker-stands';
import { ledFrameFromPrice } from '../../data/led-frames';
import { popupWallFromPrice } from '../../data/popup-walls';

function clip(value, max) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);
}

function euro(amount) {
  const value = typeof amount === 'function' ? amount() : amount;
  const number = Number(value);
  if (!Number.isFinite(number)) return '';
  return `From €${number.toFixed(2)} ex VAT, Ireland delivery included`;
}

const CONFIGURED = {
  '/pop-up-walls-ireland': `Pop-up display stand. Straight or curved. Sizes from 151 × 224 cm up to the wider straight walls. Full stand or fabric only, print on the front or both sides, optional LED lighting, optional blockout, foot plate in silver, white, or black. ${euro(popupWallFromPrice)}`,
  '/beach-flags-ireland': `Beach and feather flags. Shapes: straight, slanted, hollow, round, square, drop. Sizes S, M, and L. Kits: flag only, flag and pole, or flag, pole and bag. Each kit is priced on the page. 110 gsm flag cloth or 115 gsm longlife. ${euro(beachFlagFromPrice)} The from-price is flag only.`,
  '/inhaker-stands-ireland': `Exhibition wall panels that hook between posts. Panel sizes 88 × 195 cm, 88 × 247.5 cm, and 88 × 300 cm. Re-board or Forex, printed on the front or both sides. The price is the printed panel. Posts and foot plates are not included. ${euro(inhakerFromPrice)}`,
  '/freestanding-led-frames-ireland': `Freestanding LED frame. Sizes 80 × 200 cm, 150 × 200 cm, and 200 × 200 cm. Frame colour, depth, and base (flat feet or wheels) are chosen on the page. The frame is supplied unprinted. ${euro(ledFrameFromPrice)}`,
};

const PRINT_PAGE_BY_SKU = {
  'popup-wall': '/pop-up-walls-ireland',
  beachflags: '/beach-flags-ireland',
  'inhaker-stand': '/inhaker-stands-ireland',
  'free-standing-led-frames': '/freestanding-led-frames-ireland',
};

function priceFor(url, fallback) {
  const path = String(url || '').replace(/^\//, '').split('#')[0];
  if (PRODUCT_STARTING_PRICES[path]) return `From €${PRODUCT_STARTING_PRICES[path]}`;
  return clip(fallback, 80);
}

function buildEntries() {
  const byUrl = new Map();

  for (const product of products) {
    if (product.hidden || !product.url) continue;
    byUrl.set(product.url, {
      name: product.name,
      url: product.url,
      category: product.category || '',
      price: priceFor(product.url, product.price),
      description: clip(product.description, 420),
      features: (product.features || []).slice(0, 5).map((feature) => clip(feature, 140)),
      leadTime: clip(product.leadTime, 80),
      moq: product.moq || null,
    });
  }

  for (const category of HEADER_CATEGORIES) {
    const links = [{ name: category.name, href: category.href, summary: category.summary }, ...(category.products || [])];
    for (const link of links) {
      if (!link.href || byUrl.has(link.href)) continue;
      byUrl.set(link.href, {
        name: link.name,
        url: link.href,
        category: category.name,
        price: priceFor(link.href, ''),
        description: clip(link.summary || category.summary, 200),
        features: [],
        leadTime: '',
        moq: null,
      });
    }
  }

  for (const path of PUBLIC_PAGE_PATHS) {
    if (byUrl.has(path)) continue;
    const slug = path.split('/').filter(Boolean).pop() || 'home';
    byUrl.set(path, {
      name: slug.replace(/-/g, ' '),
      url: path,
      category: path.startsWith('/blog') ? 'Guide' : 'Page',
      price: priceFor(path, ''),
      description: '',
      features: [],
      leadTime: '',
      moq: null,
    });
  }

  return [...byUrl.values()];
}

const ENTRIES = buildEntries();

const PRINT_RANGE = printRange
  .filter((item) => item && item.name && item.sku)
  .map((item) => ({
    sku: String(item.sku),
    name: String(item.name),
    url: PRINT_PAGE_BY_SKU[item.sku] || '',
  }));

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'for', 'you', 'your', 'we', 'our', 'do', 'can',
  'how', 'much', 'what', 'with', 'from', 'price', 'prices', 'quote', 'quotes',
  'print', 'printed', 'printing', 'custom', 'ireland', 'please', 'need', 'want', 'about',
]);

function words(value) {
  return String(value || '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function mentions(hay, token) {
  if (!hay || !token) return false;
  if (hay.includes(token)) return true;
  const stem = token.endsWith('s') ? token.slice(0, -1) : token;
  return stem.length > 3 && hay.includes(stem);
}

export function lookupSite(query, limit = 3) {
  const tokens = words(query);
  if (!tokens.length) return [];

  return ENTRIES
    .map((entry) => {
      const name = entry.name.toLowerCase();
      const url = entry.url.toLowerCase();
      const hay = `${name} ${url} ${entry.category} ${entry.description} ${entry.price}`.toLowerCase();
      let score = 0;
      for (const token of tokens) {
        if (mentions(name, token)) score += 5;
        if (mentions(url, token)) score += 3;
        if (mentions(hay, token)) score += 1;
      }
      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => {
      const configured = CONFIGURED[entry.url];
      return {
        name: entry.name,
        url: entry.url,
        category: entry.category,
        price: configured || entry.price || 'Quote on request',
        description: entry.description,
        features: entry.features,
        leadTime: entry.leadTime,
        moq: entry.moq,
      };
    });
}

export function searchPrintRange(query, limit = 5) {
  const tokens = words(query);
  if (!tokens.length) return [];

  return PRINT_RANGE
    .map((item) => {
      const name = item.name.toLowerCase();
      const sku = item.sku.toLowerCase();
      let score = 0;
      for (const token of tokens) {
        if (mentions(name, token)) score += 4;
        if (mentions(sku, token)) score += 2;
      }
      return { item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => ({
      name: item.name,
      url: item.url || null,
      price: item.url ? (CONFIGURED[item.url] || 'See the page') : 'No public price. Offer an enquiry.',
    }));
}

function directoryLines() {
  return ENTRIES
    .filter((entry) => entry.category !== 'Guide' && entry.category !== 'Page')
    .map((entry) => {
      const price = CONFIGURED[entry.url] ? CONFIGURED[entry.url] : (entry.price || 'Quote on request');
      return `${entry.name} | ${entry.url} | ${entry.category} | ${price}`;
    })
    .join('\n');
}

let staticPrompt;

function staticKnowledge() {
  if (staticPrompt) return staticPrompt;

  const pages = PUBLIC_PAGE_PATHS.join(' ');

  staticPrompt = `You are the PrintNPack website assistant. PrintNPack prints and supplies packaging from Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57, Ireland. Phone and WhatsApp 089 415 7369. Email info@printnpack.ie. Open Monday to Friday, 9:00 to 18:00. Delivery is across Ireland. UK and EU carriage is confirmed on the quote.

Reply in English unless the customer's latest message is written in another language. Stay under 80 words. Do not write curly braces or placeholders. Link with markdown only to a path in the matches for this message, such as [custom pizza boxes](/custom-pizza-boxes-ireland).

Prices here are approximate starting prices, ex VAT, with Ireland delivery included unless the line says otherwise. When you give a price, call it a guide and say the final price is confirmed after a printed sample. Never invent a price, a minimum order, or a lead time. If the figure is not written here and lookupSite does not return it, say the team will quote it.

For printed packaging — bags, napkins, tissue, pizza boxes, burger boxes, cups, greaseproof sheets, and similar items — always ask the customer to attach their artwork with the paperclip in this chat before treating the price as final. Say the figure is approximate until a sample is printed.

Never mention a supplier, a trade price, a markup, a SKU, or another company. Never say cheapest. The quoteable print list is for matching a request. Never paste or summarise that list. If asked what you print, name the site categories and ask which item they need. If a match has a page, link that page. If it has no public price, offer to send an enquiry.

Plain unprinted packaging is sold by the case from /plain-packaging, including cups, napkins, gloves, refuse sacks, paper bags, pizza boxes, and burger boxes. Printed versions have their own pages.

When the customer wants a price, a callback, artwork advice, or to order, collect their name and email, and a phone number if they offer one, plus product, size, and quantity. When you have a name and an email they actually typed, call submitEnquiry. Say the enquiry was sent only after the tool returns sent: true. If it fails, give the phone number and info@printnpack.ie.

Only link a path that is written in the directory, the Pages list, or the matches for this message. A quoteable print name with no path has no page. Do not link a different product in its place.

Site directory:
${directoryLines()}

Pages:
${pages}

A further print range of about 900 items can be quoted. Matches for the customer's message are listed after the directory. If a match says no page, offer an enquiry and do not borrow another URL.`;

  return staticPrompt;
}

export function retrieveForQuestion(question) {
  const site = lookupSite(question, 4);
  const siteUrls = new Set(site.map((item) => item.url));
  const print = searchPrintRange(question, 4).filter((item) => !item.url || !siteUrls.has(item.url));
  const lines = [];

  if (site.length) {
    lines.push('Matches on the site:');
    for (const item of site) {
      const detail = [item.price, item.description, item.leadTime].filter(Boolean).join(' | ');
      lines.push(`- ${item.name} | ${item.url} | ${detail}`);
    }
  }

  if (print.length) {
    lines.push('Quoteable print matches:');
    for (const item of print) {
      lines.push(item.url
        ? `- ${item.name} | ${item.url} | ${item.price}`
        : `- ${item.name} | no page | quote on request`);
    }
  }

  if (!lines.length) {
    return 'No close match. Use the directory. If the item is not there, offer an enquiry and do not invent a page.';
  }

  return lines.join('\n');
}

export function buildSystemPrompt(page, question) {
  const path = clip(page, 180) || '/';
  return `${staticKnowledge()}\n\nThe customer is on ${path}.\n\n${retrieveForQuestion(question)}`;
}
