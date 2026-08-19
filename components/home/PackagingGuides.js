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
    href: '/custom-pizza-boxes-ireland',
    title: 'Pizza Boxes with Logo',
    description: 'Custom printed branded boxes from 500 units — personalised for your takeaway.',
    image: '/images/pizza-boxes/PIZZA_BOX_5.jpg',
    cta: 'View custom print',
  },
  {
    href: '/paper-bags-ireland',
    title: 'Paper Bags Ireland',
    description: 'Printed, plain & wholesale paper bags — Ireland\'s complete paper bag hub.',
    image: '/images/products/flat-handle-bags/1.png',
    cta: 'Browse paper bags',
  },
  {
    href: '/printed-flat-handle-bags-ireland',
    title: 'Printed Flat Handle Bags',
    description: 'Custom logo takeaway bags from 500 units — kraft & white, three sizes.',
    image: '/images/products/flat-handle-bags/3.png',
    cta: 'View printed bags',
  },
  {
    href: '/twisted-handle-paper-bags-ireland',
    title: 'Twisted Handle Bags',
    description: 'Premium retail carrier bags with logo — boutiques & gift shops.',
    image: '/images/products/twisted-handle-bags/1.png',
    cta: 'View twisted handle',
  },
  {
    href: '/plain-paper-bags-ireland',
    title: 'Plain Paper Bags',
    description: 'Brown kraft SOS bags in case packs — order online.',
    image: '/images/products/flat-handle-bags/6.png',
    cta: 'View plain bags',
  },
  {
    href: '/wholesale-paper-bags-ireland',
    title: 'Wholesale Paper Bags',
    description: 'Bulk plain & printed supply for retailers & takeaways.',
    image: '/images/products/twisted-handle-bags/2.png',
    cta: 'View wholesale',
  },
  {
    href: '/blog/printed-paper-bag-cost-ireland',
    title: 'Paper Bag Cost Guide',
    description: 'How printed paper bag pricing works in Ireland.',
    image: '/images/products/flat-handle-bags/5.png',
    cta: 'Read the guide',
  },
  {
    href: '/plain-pizza-boxes-ireland',
    title: 'Plain Pizza Boxes',
    description: 'Kraft brown boxes in 100-pack cases — order online.',
    image: '/images/pizza-boxes/PIZZA_BOX_7.jpg',
    cta: 'View plain boxes',
  },
  {
    href: '/pizza-boxes-wholesale-ireland',
    title: 'Wholesale Pizza Boxes',
    description: 'Bulk plain & printed supply for takeaways & restaurants.',
    image: '/images/pizza-boxes/PIZZA_BOX_3.jpg',
    cta: 'View wholesale',
  },
  {
    href: '/blog/custom-pizza-box-cost-ireland',
    title: 'Pizza Box Cost Guide',
    description: 'How custom printed pizza box pricing works in Ireland.',
    image: '/images/pizza-boxes/PIZZA_BOX_5.jpg',
    cta: 'Read the guide',
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
    href: '/extra-wide-roll-up-banners-ireland',
    title: 'Extra Wide Roll Up Banners',
    description: '2m XL roller banners up to 3m high — Ireland, NI, UK & EU delivery.',
    image: '/ifa/product/extra-wide-rollup/hero-standout-3m.jpg',
    cta: 'View extra wide',
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
    href: '/napkins-ireland',
    title: 'Napkins Ireland',
    description: 'Custom printed & linen-feel napkins — restaurants, weddings & catering.',
    image: '/images/hero/napkin.svg',
    cta: 'Browse napkins',
  },
  {
    href: '/napkin-faq-ireland',
    title: 'Napkin FAQ',
    description: 'Instant answers on pricing, sizes, materials & delivery.',
    image: '/images/hero/napkin.svg',
    cta: 'Browse FAQ',
  },
  {
    href: '/blog/personalised-napkins-ireland-guide',
    title: 'Personalised Napkins Guide',
    description: 'Cocktail vs dinner sizes, linen-feel vs paper, wedding napkins.',
    image: '/images/hero/napkin.svg',
    cta: 'Read the guide',
  },
  {
    href: '/foamex-ireland',
    title: 'Foamex Ireland',
    description: 'Custom foamex board printing — exhibitions, retail & indoor signage.',
    image: '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif',
    cta: 'Browse foamex',
  },
  {
    href: '/foamex-faq-ireland',
    title: 'Foamex FAQ',
    description: 'Instant answers on thickness, pricing, printing & delivery.',
    image: '/ifa/product/foamex/foam-board-printing-1000x1000.webp',
    cta: 'Browse FAQ',
  },
  {
    href: '/blog/foamex-boards-ireland-guide',
    title: 'Foamex Boards Guide',
    description: '3mm vs 5mm vs 10mm, sizes, indoor vs outdoor, foamex vs correx.',
    image: '/ifa/product/foamex/sign-boards-1000x1000.webp',
    cta: 'Read the guide',
  },
  {
    href: '/burger-boxes-ireland',
    title: 'Burger Boxes Ireland',
    description: 'Plain wholesale & custom printed bagasse burger boxes for takeaways.',
    image: '/images/products/bagasse-burger-box/1.png',
    cta: 'Browse burger boxes',
  },
  {
    href: '/burger-box-faq-ireland',
    title: 'Burger Box FAQ',
    description: 'Instant answers on pricing, materials, sizes & delivery.',
    image: '/images/products/bagasse-burger-box/2.png',
    cta: 'Browse FAQ',
  },
  {
    href: '/blog/burger-boxes-ireland-guide',
    title: 'Burger Boxes Guide',
    description: 'Plain vs printed, bagasse vs corrugated, and eco options.',
    image: '/images/products/bagasse-burger-box/3.png',
    cta: 'Read the guide',
  },
  {
    href: '/printing-ireland',
    title: 'Printing Ireland',
    description: 'Posters, flyers, stickers, stamps & packaging — nationwide from Ashbourne.',
    image: '/ifa/product/Poster/single_poster.jpg',
    cta: 'View printing',
  },
  {
    href: '/printing-ashbourne',
    title: 'Printing Ashbourne',
    description: 'Local print shop — posters, flyers, certificates & business cards.',
    image: '/ifa/product/leaflet/leaflet-hero.jpg',
    cta: 'View local printing',
  },
  {
    href: '/hot-cups-ireland',
    title: 'Hot Cups & Lids Ireland',
    description: 'Wholesale disposable coffee cups — 8oz to 16oz, compostable & plain.',
    image: '/images/plain-packaging/100070.webp',
    cta: 'Browse hot cups',
  },
  {
    href: '/gloves-ireland',
    title: 'Disposable Gloves Ireland',
    description: 'Nitrile, vinyl & poly gloves for catering — S to XL, case pricing.',
    image: '/images/plain-packaging/170054.webp',
    cta: 'Browse gloves',
  },
  {
    href: '/refuse-sacks-ireland',
    title: 'Refuse Sacks Ireland',
    description: 'Black, clear & Greensack bin bags — wheelie bin & compactor sizes.',
    image: '/images/plain-packaging/150003.webp',
    cta: 'Browse refuse sacks',
  },
  {
    href: '/plain-napkins-tableware-ireland',
    title: 'Plain Napkins & Tableware',
    description: 'Wholesale napkins, placemats, table covers & banquet rolls.',
    image: '/images/hero/napkin.svg',
    cta: 'Browse napkins',
  },
  {
    href: '/biobox-containers-ireland',
    title: 'Biobox Containers',
    description: 'Kraft & white leak-proof takeaway food boxes — No.1 to No.12.',
    image: '/images/ifa/heroh/logos/logo.png',
    cta: 'Browse biobox',
  },
  {
    href: '/plain-packaging',
    title: 'Plain Packaging Wholesale',
    description: '736+ unbranded catering products — cups, gloves, bags & more.',
    image: '/images/ifa/heroh/logos/logo.png',
    cta: 'Browse catalogue',
  },
  {
    href: '/blog/plain-packaging-wholesale-ireland',
    title: 'Wholesale Packaging Guide',
    description: 'How plain packaging case pricing works for Irish businesses.',
    image: '/images/ifa/heroh/logos/logo.png',
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
