import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PLAIN_PRODUCTS } from '../../data/plain-products';

const categories = [
  {
    name: 'Food Packaging',
    description: 'Pizza boxes, burger boxes, grab bags',
    image: '/images/products/pizza-boxes/white/pizza-box-1000x1000w.webp',
    alt: 'Printed pizza boxes',
    href: '/pizza-boxes-ireland',
    productCount: 3,
  },
  {
    name: 'Retail Packaging',
    description: 'Flat handle, twisted handle & flat bags',
    image: '/images/products/twisted-handle-bags/moss-mist.jpg',
    alt: 'Printed twisted-handle paper bags',
    href: '/printed-flat-handle-bags-ireland',
    productCount: 3,
  },
  {
    name: 'Eco-Friendly',
    description: 'Sustainable bagasse packaging',
    image: '/images/plain-packaging/1206653.webp',
    alt: 'Bagasse burger box',
    href: '/products?group=packaging&category=Eco-Friendly+Packaging',
    productCount: 1,
  },
  {
    name: 'Banners, Stands and Frames',
    description: 'Vinyl, roll-ups, fabric stands',
    image: '/images/hero/month/fabric-banner.webp',
    alt: 'Free-standing fabric banner',
    href: '/products?group=banners-stands-frames',
    productCount: 6,
  },
  {
    name: 'Flags',
    description: 'Beach flags, feather flags and custom flags',
    image: '/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg',
    alt: 'Printed flag flying outdoors',
    href: '/flags-ireland',
    productCount: 2,
  },
  {
    name: 'Wide Format',
    description: 'Posters and boards',
    image: '/images/products/wide-format.png',
    alt: 'Wide format print',
    href: '/products?group=wide-format',
    productCount: 3,
  },
  {
    name: 'Stickers and Labels',
    description: 'Vinyl stickers and labels on a roll',
    image: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png',
    alt: 'Round product label on a jar',
    href: '/products?group=stickers-labels',
    productCount: 2,
  },
  {
    name: 'Leaflets & Flyers',
    description: 'Leaflets, flyers and business cards',
    image: '/images/products/premium-leaflets/premium-leaflets-ireland-metallic-gold.jpg',
    alt: 'Metallic gold printed leaflet',
    href: '/products?group=leaflets',
    productCount: 4,
  },
  {
    name: 'Hospitality',
    description: 'Napkins, cups, gloves & tableware',
    image: '/images/products/premium-linen-feel-napkins/airlaid-kinetic-labs-ireland.jpg',
    alt: 'Printed airlaid napkin',
    href: '/plain-napkins-tableware-ireland',
    productCount: 58,
  },
  {
    name: 'Catering Supplies',
    description: 'Hot cups, gloves, refuse sacks & more',
    image: '/images/products/custom-printed-coffee-cups/branded-coffee-cups-dublin-ireland-matte-black-gold.jpg',
    alt: 'Printed takeaway coffee cup',
    href: '/plain-packaging',
    productCount: PLAIN_PRODUCTS.length,
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Browse by Category
          </h2>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500">
            Find exactly what you need for your business
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div
                className="relative bg-[#f3f4f6]"
                style={{ aspectRatio: '1 / 1' }}
              >
                <div className="absolute inset-3 sm:inset-4">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(max-width: 640px) 42vw, 180px"
                    quality={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="px-3 py-3 sm:px-4 sm:py-4 text-center">
                <h3 className="min-h-[2.5rem] text-sm sm:text-base font-semibold leading-tight text-slate-900">
                  {cat.name}
                </h3>
                <p className="mt-1 min-h-[2.25rem] text-xs sm:text-sm leading-snug text-slate-500">
                  {cat.description}
                </p>
                <p className="mt-2 text-[11px] font-medium text-slate-400">
                  {cat.productCount} {cat.productCount === 1 ? 'product' : 'products'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
