import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = [
  {
    name: 'Wedding',
    href: '/wedding-printing-ireland',
    image: '/images/wedding/wedding-table-stationery-napkins-ireland.jpg',
    alt: 'Printed wedding napkins and table stationery',
  },
  {
    name: 'Bags',
    href: '/paper-bags-ireland',
    image: '/images/products/brown-flat-handle/hero.jpg',
    alt: 'Brown flat handle paper bags',
  },
  {
    name: 'Boxes',
    href: '/pizza-boxes-ireland',
    image: '/images/hero/month/pizza-box.webp',
    alt: 'Custom printed kraft pizza box',
  },
  {
    name: 'Cups',
    href: '/custom-printed-coffee-cups-ireland',
    image: '/images/products/custom-printed-coffee-cups/branded-coffee-cups-dublin-ireland-matte-black-gold.jpg',
    alt: 'Custom printed takeaway coffee cups',
  },
  {
    name: 'Napkins',
    href: '/napkins-ireland',
    image: '/images/products/premium-linen-feel-napkins/airlaid-kinetic-labs-ireland.jpg',
    alt: 'Printed airlaid napkin',
  },
  {
    name: 'Stickers',
    href: '/vinyl-stickers',
    image: '/ifa/product/vinylstk/Window_Sticker_2_01041803202404.png.webp',
    alt: 'Custom vinyl window sticker',
  },
  {
    name: 'Labels',
    href: '/labels-on-a-roll',
    image: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png',
    alt: 'Round product label on a jar',
  },
  {
    name: 'Banners',
    href: '/banners-ireland',
    image: '/images/hero/month/fabric-banner.webp',
    alt: 'Free standing fabric banner',
  },
  {
    name: 'Exhibition',
    href: '/exhibition-stands-ireland',
    image: '/images/banners/popup-walls/popup-wall-straight.jpg',
    alt: 'Pop-up exhibition display stand',
  },
  {
    name: 'Flags',
    href: '/flags-ireland',
    image: '/images/hero/month/flags.webp',
    alt: 'Custom printed feather flags',
  },
  {
    name: 'Leaflets',
    href: '/premium-leaflets-ireland',
    image: '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-gold.jpg',
    alt: 'Metallic gold printed leaflet',
  },
  {
    name: 'Business cards',
    href: '/business-cards-ireland',
    image: '/images/products/business-cards/business-cards-ireland-stack.jpg',
    alt: 'Stack of printed business cards',
  },
  {
    name: 'Stamps',
    href: '/rubber-stamps-ireland',
    image: '/images/rubber-stamps/RubberStamp_10.jpg',
    alt: 'Custom rubber stamp',
  },
  {
    name: 'Clothing',
    href: '/clothing',
    image: '/images/apparel/custom-polo-shirts-ireland-hospitality-staff.jpg',
    alt: 'Printed polo shirts for hospitality staff',
  },
  {
    name: 'Posters',
    href: '/posters',
    image: '/ifa/product/Poster/single_poster.jpg',
    alt: 'Custom printed poster',
  },
  {
    name: 'Coasters',
    href: '/printed-coasters-ireland',
    image: '/images/coasters/coaster-harbour-bean-ireland.webp',
    alt: 'Printed round drink coaster',
  },
];

function Arrow({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-[5.5rem] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200 bg-white text-neutral-900 shadow-[0_8px_24px_-12px_rgba(28,25,23,0.55)] transition hover:bg-stone-50 sm:top-[6.25rem] ${
        direction === 'next' ? 'right-1 sm:right-2' : 'left-1 sm:left-2'
      }`}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d={direction === 'next' ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
        />
      </svg>
    </button>
  );
}

export default function ExploreCategories() {
  const scroller = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return undefined;

    const update = () => {
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollByPage = (direction) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.75, 240), behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-8 sm:py-10" aria-labelledby="explore-categories-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="explore-categories-heading" className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-[1.65rem]">
          Explore all categories
        </h2>
        <div className="relative mt-5">
          {canPrev && <Arrow direction="prev" label="Previous categories" onClick={() => scrollByPage(-1)} />}
          <div
            ref={scroller}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-1 sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CATEGORIES.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="w-[9.25rem] shrink-0 sm:w-[10.5rem]"
              >
                <div className="aspect-[5/4] overflow-hidden rounded-2xl bg-[#f4f1e8] p-3 sm:p-4">
                  <div className="relative h-full w-full">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="168px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="mt-2.5 text-[13px] font-medium leading-snug text-neutral-800 sm:text-sm">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
          {canNext && <Arrow direction="next" label="Next categories" onClick={() => scrollByPage(1)} />}
        </div>
      </div>
    </section>
  );
}
