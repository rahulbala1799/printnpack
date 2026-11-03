import products from '../data/products';
import { HEADER_CATEGORIES } from '../data/header-nav';
import {
  PRINTED_BAGASSE_BOXES,
  PRINTED_BAGASSE_PATH,
  printedBagassePath,
} from '../data/printed-bagasse-boxes';

const SKIP_CATALOG_IDS = new Set(['eco-bagasse-burger-boxes']);

function rank(name, term) {
  const value = name.toLowerCase();
  if (value.startsWith(term)) return 0;
  if (value.includes(term)) return 1;
  return 2;
}

/**
 * Printed pages only. Each bagasse size is its own result.
 */
export function searchSite(term) {
  const q = String(term || '').trim().toLowerCase();
  if (q.length < 2) return [];

  const seen = new Set();
  const results = [];

  const push = (item) => {
    if (!item?.href || seen.has(item.href)) return;
    const text = `${item.name} ${item.category || ''} ${item.text || ''}`.toLowerCase();
    if (!text.includes(q)) return;
    seen.add(item.href);
    results.push({
      id: item.id,
      name: item.name,
      category: item.category || '',
      href: item.href,
      image: item.image || '',
      kind: item.kind,
    });
  };

  push({
    id: 'printed-bagasse-hub',
    name: 'Printed bagasse burger and meal boxes',
    category: 'Eight sizes',
    href: PRINTED_BAGASSE_PATH,
    image: PRINTED_BAGASSE_BOXES[0]?.image || '',
    kind: 'Printed',
    text: 'custom printed bagasse burger boxes meal boxes compostable sugarcane logo',
  });

  PRINTED_BAGASSE_BOXES.forEach((box) => {
    push({
      id: box.catalogId,
      name: box.name,
      category: box.size,
      href: printedBagassePath(box),
      image: box.image,
      kind: 'Printed',
      text: `${box.short} ${box.label} ${box.h1} ${box.use} compostable sugarcane burger meal`,
    });
  });

  HEADER_CATEGORIES.forEach((category) => {
    if (category.id === 'plain') return;
    push({
      id: `nav:${category.id}`,
      name: category.name,
      category: 'Printed',
      href: category.href,
      kind: 'Printed',
    });
    category.products.forEach((product) => {
      push({
        id: `nav:${product.href}`,
        name: product.name,
        category: category.name,
        href: product.href,
        kind: 'Printed',
      });
    });
  });

  products.forEach((product) => {
    if (!product || product.hidden || SKIP_CATALOG_IDS.has(product.id) || !product.name) return;
    const href = product.url || `/products/${product.id}`;
    if (href.startsWith('/plain-packaging') || href.startsWith('/plain-')) return;
    push({
      id: `catalog:${product.id}`,
      name: product.name,
      category: product.category || 'Printed',
      href,
      image: product.imageSrc || product.images?.[0] || '',
      kind: 'Printed',
      text: [product.description, ...(product.features || []), ...(product.searchAliases || [])]
        .filter(Boolean)
        .join(' '),
    });
  });

  return results.sort((a, b) => rank(a.name, q) - rank(b.name, q) || a.name.localeCompare(b.name));
}
