import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import {
  ZIPPER_FAMILIES,
  ZIPPER_HUB_PATH,
  ZIPPER_NEIGHBOUR_LINKS,
  zipperFromPrice,
  zipperGallery,
  zipperRangeFromPrice,
} from '../data/zipper-walls';

const PAGE_URL = `${SITE_URL}${ZIPPER_HUB_PATH}`;
const FROM = zipperRangeFromPrice().toFixed(2);

const faqs = [
  {
    q: 'What is a zipper wall?',
    a: 'A zipper wall is a printed stretch cloth that zips onto a 32 mm aluminium frame. The full set includes the cloth, the frame and a carry bag, so it is easy to transport. Fabric only is a new print for a frame you already own.',
  },
  {
    q: 'Which zipper wall shapes do you print?',
    a: 'Arch, square or oval. Exhibition pillar. U-shaped wall. Wave wall. Curved vertical wall with feet. Curved horizontal wall from 3 m to 6 m wide. Each shape has its own page and its own price.',
  },
  {
    q: 'Is a zipper wall the same as a pop-up wall?',
    a: 'No. A pop-up wall is a folding frame. A zipper wall is a stretch cloth zipped over a tube frame, and it packs into a bag.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ZipperWallsIreland() {
  const title = 'Zipper Walls Ireland | Arch, Pillar, Wave and U Wall | PrintNPack';
  const description = `Zipper walls in Ireland from €${FROM} ex VAT, delivery included. Fabric arch, exhibition pillar, U wall, wave wall and curved zipper walls. Easy to transport in a carry bag.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="zipper wall Ireland, fabric arch, exhibition pillar, U wall, wave wall, curved zipper wall, easy to transport display, portable exhibition wall" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Zipper walls</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Zipper walls · Ireland</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Zipper walls in Ireland
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed max-w-3xl">
            A <strong>zipper wall</strong> is a printed stretch cloth that zips onto a 32 mm aluminium frame.
            The full set includes a carry bag, so an arch, a pillar or a wave wall is easy to transport.
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Pick the shape below. Each page has its own sizes and a live price, ex VAT, with delivery to Ireland included.
            From €{FROM}. This range is unlit. It is not a pop-up wall and not a rigid exhibition panel.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Choose a shape</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ZIPPER_FAMILIES.map((family) => {
              const photo = zipperGallery(family.id)[0];
              return (
              <Link key={family.id} href={family.path} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-md transition-all">
                {photo ? (
                  <span className="relative block aspect-square bg-slate-100">
                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                  </span>
                ) : null}
                <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">{family.linkLabel}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{family.linkDesc}</p>
                <p className="text-sm font-semibold text-gray-900 mt-4">From €{zipperFromPrice(family.id).toFixed(2)} ex VAT</p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Zipper wall questions</h2>
          <dl className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-1 text-gray-600 text-sm leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <RelatedSeoLinks
        title="Stands and banners"
        links={ZIPPER_NEIGHBOUR_LINKS.filter((link) => link.href !== ZIPPER_HUB_PATH)}
      />
    </Layout>
  );
}
