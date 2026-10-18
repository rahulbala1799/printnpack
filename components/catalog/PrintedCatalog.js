import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import products from '../../data/products';

const BESTSELLER_IDS = [
  'custom-pizza-boxes-ireland',
  'twisted-handle-paper-bags',
  'roll-up-banner-stands',
  'premium-leaflets-ireland',
  'custom-printed-flags-ireland',
  'business-cards-ireland',
];

const BANNER = '#123c2e';
const CARD_BG = '#f4f0e6';

const CATEGORY_ORDER = [
  'Food Packaging',
  'Retail Packaging',
  'Eco-Friendly Packaging',
  'Hospitality Products',
  'Branded Items',
  'Banners, Stands and Frames',
  'Flags',
  'Wide Format',
  'Stickers & Labels',
  'Leaflets',
  'Coasters',
  'NCR Books',
  'Apparel',
  'Stamps',
];

function productHref(product) {
  return product.url || `/products/${product.id}`;
}

function categorySlug(category) {
  return String(category).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function searchText(product) {
  return [
    product.name,
    product.category,
    product.description,
    product.price,
    ...(product.features || []),
    ...(product.searchAliases || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function chunk(list, size) {
  const pages = [];
  for (let i = 0; i < list.length; i += size) pages.push(list.slice(i, i + size));
  return pages;
}

function photoFor(items) {
  const photo = items.find((product) => {
    const src = product.imageSrc || '';
    return src && !src.endsWith('.svg') && !src.includes('css-placeholder');
  });
  return (photo || items[0])?.imageSrc || '';
}

function CreamCard({ href, title, image, priority = false }) {
  const imageOk = image && !String(image).includes('css-placeholder');
  return (
    <Link href={href} className="block min-w-0">
      <div className="relative aspect-[5/6] overflow-hidden rounded-2xl" style={{ background: CARD_BG }}>
        {imageOk ? (
          <Image
            src={image}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 768px) 33vw, 16vw"
            className="object-contain p-2.5"
          />
        ) : null}
      </div>
      <p className="mt-2.5 line-clamp-3 text-[15px] font-semibold leading-snug text-neutral-950">{title}</p>
    </Link>
  );
}

function Dots({ count, page }) {
  if (count <= 1) return null;
  return (
    <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={index === page ? 'h-1.5 w-4 rounded-full bg-blue-600' : 'h-1.5 w-1.5 rounded-full bg-neutral-300'}
        />
      ))}
    </div>
  );
}

export default function PrintedCatalog() {
  const visible = useMemo(() => products.filter((product) => product && !product.hidden && product.name), []);
  const categories = useMemo(() => {
    const counts = new Map();
    for (const product of visible) {
      const category = product.category || 'Other';
      counts.set(category, (counts.get(category) || 0) + 1);
    }
    return [...counts.keys()].sort((a, b) => {
      const ai = CATEGORY_ORDER.indexOf(a);
      const bi = CATEGORY_ORDER.indexOf(b);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi) || a.localeCompare(b);
    }).map((name) => ({ name, count: counts.get(name), slug: categorySlug(name) }));
  }, [visible]);

  const [query, setQuery] = useState('');
  const [categoryPage, setCategoryPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const categoryScroller = useRef(null);

  useEffect(() => {
    const apply = () => {
      const width = window.innerWidth;
      setPerPage(width >= 1024 ? 6 : width >= 768 ? 4 : 3);
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  useEffect(() => {
    setCategoryPage(0);
    if (categoryScroller.current) categoryScroller.current.scrollLeft = 0;
  }, [perPage]);

  const needle = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!needle) return visible;
    return visible.filter((product) => searchText(product).includes(needle));
  }, [visible, needle]);

  const bestsellers = BESTSELLER_IDS.map((id) => visible.find((product) => product.id === id)).filter(Boolean);
  const categoryCards = categories.map((category) => {
    const items = visible.filter((product) => (product.category || 'Other') === category.name);
    return { ...category, image: photoFor(items) };
  });
  const categoryPages = chunk(categoryCards, perPage);

  const onCategoryScroll = () => {
    const node = categoryScroller.current;
    if (!node || node.clientWidth === 0) return;
    setCategoryPage(Math.round(node.scrollLeft / node.clientWidth));
  };

  return (
    <div id="printed-catalog" className="bg-white">
      <div>
        <div className="mx-auto max-w-7xl px-4 pt-3 md:px-8 md:pt-6">
          <label htmlFor="printed-search-mobile" className="sr-only">Search</label>
          <div className="relative md:max-w-xl">
            <input
              id="printed-search-mobile"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              enterKeyHint="search"
              autoComplete="off"
              className="h-11 w-full rounded-lg border border-neutral-300 bg-white pl-3 pr-10 text-base text-neutral-900 outline-none placeholder:text-neutral-400"
            />
            <svg className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path strokeWidth="2" strokeLinecap="round" d="M20 20l-3.5-3.5" />
            </svg>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
          <Link href="/" className="text-sm text-neutral-500">Home</Link>
        </div>

        <div className="px-5 py-8 text-center text-white md:px-10 md:py-16" style={{ background: BANNER }}>
          <h1 className="text-[1.7rem] font-bold leading-tight md:text-5xl">Printed products</h1>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-snug text-white/90 md:mt-4 md:max-w-2xl md:text-lg">
            Pizza boxes, paper bags, banners and leaflets, printed in Ashbourne and delivered across Ireland.
          </p>
        </div>

        {needle ? (
          <div className="mx-auto max-w-7xl px-4 py-5 md:px-8 md:py-8">
            <p className="mb-3 text-sm text-neutral-500" aria-live="polite">
              {matches.length} printed {matches.length === 1 ? 'product' : 'products'} for “{query.trim()}”
            </p>
            {matches.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-neutral-300 px-6 py-12 text-center">
                <p className="font-semibold text-neutral-950">No printed products match that search</p>
                <button type="button" onClick={() => setQuery('')} className="mt-3 text-sm font-semibold text-blue-600">
                  Show all printed products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5 lg:grid-cols-6">
                {matches.map((product) => (
                  <CreamCard key={product.id} href={productHref(product)} title={product.name} image={product.imageSrc} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div
              ref={categoryScroller}
              onScroll={onCategoryScroll}
              className="mx-auto flex max-w-7xl snap-x snap-mandatory overflow-x-auto pt-5 [scrollbar-width:none] md:pt-8 [&::-webkit-scrollbar]:hidden"
            >
              {categoryPages.map((page) => (
                <div key={page[0].slug} className="grid w-full shrink-0 snap-start grid-cols-3 gap-3 px-4 md:grid-cols-4 md:gap-5 md:px-8 lg:grid-cols-6">
                  {page.map((category) => (
                    <CreamCard
                      key={category.slug}
                      href={`#m-print-cat-${category.slug}`}
                      title={category.name}
                      image={category.image}
                    />
                  ))}
                </div>
              ))}
            </div>
            <Dots count={categoryPages.length} page={categoryPage} />

            <section className="mx-auto max-w-7xl px-4 pb-2 pt-8 md:px-8 md:pt-12">
              <h2 className="text-[1.35rem] font-bold text-neutral-950 md:text-3xl">Bestsellers</h2>
              <p className="mt-2 text-[15px] leading-snug text-neutral-600 md:text-base">
                Pizza boxes, bags, banners and leaflets our customers order most.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-5">
                {bestsellers.map((product, index) => (
                  <CreamCard
                    key={product.id}
                    href={productHref(product)}
                    title={product.name}
                    image={product.imageSrc}
                    priority={index < 3}
                  />
                ))}
              </div>
            </section>

            <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 md:space-y-12 md:px-8 md:py-12">
              {categories.map((category) => {
                const items = visible.filter((product) => (product.category || 'Other') === category.name);
                return (
                  <section key={category.slug} id={`m-print-cat-${category.slug}`} className="scroll-mt-28">
                    <h2 className="text-lg font-bold text-neutral-950 md:text-2xl">{category.name}</h2>
                    <div className="mt-3 grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5 lg:grid-cols-6">
                      {items.map((product) => (
                        <CreamCard key={product.id} href={productHref(product)} title={product.name} image={product.imageSrc} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
