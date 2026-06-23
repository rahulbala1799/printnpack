import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const guides = [
  {
    href: '/pizza-boxes-ireland',
    title: 'Pizza Boxes Ireland',
    description: 'Custom printed & wholesale plain boxes — Ireland\'s complete pizza box hub.',
    image: '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    cta: 'Browse pizza boxes',
  },
  {
    href: '/printed-flat-handle-bags-ireland',
    title: 'Printed Flat Handle Bags',
    description: 'Custom logo paper bags from 500 units — kraft & white, three sizes, nationwide delivery.',
    image: '/images/products/flat-handle-bags/1.png',
    cta: 'View printed bags',
  },
  {
    href: '/custom-pizza-boxes-ireland',
    title: 'Custom Printed Pizza Boxes',
    description: 'Full-colour branded boxes, MOQ from 500, 5–7 day production, nationwide delivery.',
    image: '/images/pizza-boxes/PIZZA_BOX_5.jpg',
    cta: 'View custom options',
  },
  {
    href: '/pizza-box-faq-ireland',
    title: 'Pizza Box FAQ',
    description: 'Instant answers on pricing, printing, sizes & delivery.',
    image: '/images/pizza-boxes/PIZZA_BOX_2.jpg',
    cta: 'Browse FAQ',
  },
  {
    href: '/blog/pizza-box-sizes-ireland',
    title: 'Pizza Box Sizes Guide',
    description: '7″ vs 12″ vs 14″ — which sizes Irish takeaways should stock first.',
    image: '/images/pizza-boxes/PIZZA_BOX_3.jpg',
    cta: 'Read the guide',
  },
  {
    href: '/banners-ireland',
    title: 'Banners Ireland',
    description: 'Custom PVC & roll-up banner printing — Ashbourne, Dublin & Meath.',
    image: '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp',
    cta: 'Browse banners',
  },
  {
    href: '/banner-faq-ireland',
    title: 'Banner FAQ',
    description: 'Instant answers on pricing, materials, artwork & delivery.',
    image: '/ifa/product/banner/pvc-banner-media-500x500.webp',
    cta: 'Browse FAQ',
  },
  {
    href: '/blog/banner-sizes-ireland',
    title: 'Banner Sizes Guide',
    description: '2×4, 3×6, 4×8 PVC & roll-up dimensions — which size to order.',
    image: '/ifa/product/banner/1666183881.webp',
    cta: 'Read the guide',
  },
  {
    href: '/blog/banner-printing-ireland-guide',
    title: 'Banner Printing Guide',
    description: 'Cost, materials, turnaround & design tips for Irish businesses.',
    image: '/ifa/product/banner/20221019_184310980133_d01bb8_Real-Estate.webp',
    cta: 'Read the guide',
  },
  {
    href: '/vinyl-banners',
    title: 'Printed Banners Ireland',
    description: 'Vinyl banners for outdoor advertising & events — custom sizes, UV print.',
    image: '/ifa/product/banner/20221019_184306722822_e66498_Promo-banner.webp',
    cta: 'View banners',
  },
  {
    href: '/roll-up-banners',
    title: 'Pull Up Banners Meath',
    description: 'Portable roll up banners for trade shows — based in Ashbourne, Co. Meath.',
    image: '/ifa/product/rollup/1.png',
    cta: 'View roll ups',
  },
  {
    href: '/vinyl-stickers',
    title: 'Custom Vinyl Stickers',
    description: 'Stickers & decals for windows, vehicles, and retail across Ireland.',
    image: '/ifa/product/vinylstk/Window_Sticker_2_01041803202404.png.webp',
    cta: 'View stickers',
  },
  {
    href: '/services/leaflets',
    title: 'Leaflets Ireland',
    description: 'Flat leaflet printing & design for Irish businesses.',
    image: '/ifa/product/leaflet/leaflet-hero.jpg',
    cta: 'View leaflets',
  },
  {
    href: '/blog/trade-show-banners-decals-ireland',
    title: 'Custom Decals Ireland',
    description: 'Window, vehicle & retail decals — plus trade show banner guide.',
    image: '/ifa/product/vinylstk/carstk.webp',
    cta: 'Read guide',
  },
  {
    href: '/rubber-stamps-ireland',
    title: 'Rubber Stamps Ireland',
    description: 'Business stamps, signature stamps & company logo stamps — same-day service.',
    image: '/images/rubber-stamps/RubberStamp_10.jpg',
    cta: 'Browse stamps',
  },
  {
    href: '/rubber-stamp-faq-ireland',
    title: 'Rubber Stamp FAQ',
    description: 'Instant answers on pricing, types, turnaround & delivery.',
    image: '/images/rubber-stamps/Rubberstam_6.jpg',
    cta: 'Browse FAQ',
  },
  {
    href: '/blog/business-stamps-ireland-guide',
    title: 'Business Stamps Guide',
    description: 'Company stamps, invoice stamps & logo stamps for Irish businesses.',
    image: '/images/rubber-stamps/RubberStamp_11.jpg',
    cta: 'Read the guide',
  },
  {
    href: '/blog/printing-ashbourne-guide',
    title: 'Printing Ashbourne Guide',
    description: 'Local print shop for posters, flyers, stickers, certificates & business cards.',
    image: '/ifa/product/Poster/single_poster.jpg',
    cta: 'Read the guide',
  },
];

export default function PackagingGuides() {
  return (
    <section className="py-8 sm:py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Products &amp; print guides
          </h2>
          <p className="mt-1 text-sm sm:text-base text-gray-500">
            Packaging, banners, stickers, leaflets &amp; more for Irish businesses
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex gap-4 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{guide.description}</p>
                <span className="inline-block mt-2 text-sm font-medium text-blue-600">
                  {guide.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
