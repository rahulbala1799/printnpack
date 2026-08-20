import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import StageBackdropConfigurator from '../components/stage-backdrops/StageBackdropConfigurator';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import {
  STAGE_BACKDROP_SIZE,
  STAGE_BACKDROP_GALLERY,
  STAGE_BACKDROP_HERO,
} from '../data/stage-backdrop-banners-options';

const PAGE_URL = `${SITE_URL}/stage-backdrop-banners-ireland`;
const HERO_IMAGE = STAGE_BACKDROP_HERO.src;

const highlights = [
  '3m × 3m banners, 6m × 3m, 12m × 4m — or any custom size',
  `Huge banners up to ${STAGE_BACKDROP_SIZE.maxCm} cm / 50 metres per side`,
  'Custom large banners for stages, festivals, conferences and exhibitions',
  'Matte, coated or structured polyester with reinforced rings',
];

const specifications = [
  { label: 'Materials', value: 'Matte polyester, coated polyester, structured polyester' },
  { label: 'Custom size', value: `Any width and height from ${STAGE_BACKDROP_SIZE.minCm} cm to ${STAGE_BACKDROP_SIZE.maxCm} cm (50 m)` },
  { label: 'Popular sizes', value: '3 × 3 m, 3 × 2 m, 4 × 3 m, 6 × 3 m, 8 × 4 m, 10 × 4 m, 12 × 4 m, 20 × 5 m' },
  { label: 'Maximum size', value: '50 m × 50 m (5000 cm × 5000 cm)' },
  { label: 'Finishing', value: 'Rings every 30 cm with reinforcement, or rings in the corners with reinforcement' },
];

const popularSizes = [
  { size: '3m × 3m banner', use: 'Square stage backdrops, photo walls and indoor events' },
  { size: '3m × 2m banner', use: 'Compact stages, conference lecterns and small venues' },
  { size: '4m × 3m banner', use: 'Hotel ballrooms, AGMs and medium conference stages' },
  { size: '6m × 3m banner', use: 'Festival stages, outdoor concerts and exhibition halls' },
  { size: '8m × 4m / 12m × 4m', use: 'Large outdoor stages and extra-wide event backdrops' },
  { size: 'Custom up to 50 m', use: 'Huge banners, building-scale backdrops and oversized installs' },
];

const applications = [
  'Huge outdoor festival stages',
  '3m × 3m and custom large indoor banners',
  'Conference and AGM backdrops',
  'Theatre and concert stages',
  'Exhibition stands and trade shows',
  'Wedding and event photo walls',
];

const deliveryAreas = [
  { city: 'Dublin', detail: '3m × 3m banners, huge stage backdrops and custom large banners across Dublin' },
  { city: 'Cork & Munster', detail: 'Large banner printing for festivals, stages and conferences in Cork, Limerick and Kerry' },
  { city: 'Galway & West', detail: 'Custom oversized banners and stage backdrops for events in Connacht' },
  { city: 'Nationwide', detail: 'Delivery to every county in Ireland from Ashbourne, Co. Meath' },
];

const seoSections = [
  {
    title: 'Huge Banners & Custom Large Banners Ireland',
    paragraphs: [
      'Searching for a **3m × 3m banner**, a **large banner**, a **custom large banner** or a **huge banner in Ireland**? PrintNPack prints oversized polyester stage backdrop banners from **10 cm up to 50 metres (5000 cm)** on each side. That covers a 3 metre square backdrop, a 6 × 3 m festival wall, a 12 × 4 m outdoor stage, or a custom size typed into the quote builder.',
      'This is the product page for **large format banners in Ireland** when a standard vinyl banner or 2 m roll-up is too small. Enter width and height in centimetres — we quote the exact size you need, up to the **50 m maximum**.',
    ],
  },
  {
    title: '3m × 3m Banners and Other Popular Stage Sizes',
    paragraphs: [
      'A **3m x 3m banner** (300 × 300 cm) is one of the most requested indoor stage and photo-wall sizes in Ireland. It is a standard option in the quote builder, along with 3 × 2 m, 4 × 3 m, 6 × 3 m, 8 × 4 m, 10 × 4 m, 12 × 4 m and 20 × 5 m. Click a size to fill the width and height boxes, or type any other measurement within the min and max limits.',
      'If you need **4m x 3m banners**, **6m x 3m banners**, **8 metre banners** or a one-off custom large banner for a Dublin, Cork or Galway venue, use the same form. Every size is printed on matte, coated or structured polyester with reinforced rings.',
    ],
  },
  {
    title: 'Maximum Size: 50 Metre / 5000 cm Banners',
    paragraphs: [
      'The **maximum banner size we quote on this page is 5000 cm × 5000 cm (50 m × 50 m)**. Width and height are set independently, so a long outdoor backdrop (for example 20 m wide × 5 m high) is as valid as a square **3m × 3m banner**. The quote builder will not accept sizes below 10 cm or above 50 m.',
      'That maximum is aimed at **huge banners**, festival stages, extra-wide conference walls and other oversized installs that typical high-street banner printers cannot cover. If your search was “large banners Ireland”, “oversized banners Ireland” or “custom size banners Ireland”, this page is the right place to request a quotation.',
    ],
  },
  {
    title: 'Large Stage Backdrop Printing — Dublin, Cork, Galway & Nationwide',
    paragraphs: [
      'PrintNPack supplies **stage backdrop banners Ireland**-wide from Ashbourne, Co. Meath. Choose matte polyester, coated polyester or structured polyester, then finishing with **rings in the corners** or **rings every 30 cm**, both with reinforcement for truss or wall hanging.',
      'We deliver **large banners to Dublin, Cork, Galway, Limerick** and every county. Use the gallery below for examples of outdoor festival stages, indoor conference backdrops and night concert banners — then configure your own size in the quote builder.',
    ],
  },
];

const faqs = [
  {
    q: 'Where can I buy a 3m x 3m banner in Ireland?',
    a: 'PrintNPack prints 3m × 3m banners (300 × 300 cm) and any custom large banner up to 50 m per side. Select 3 × 3 m in the quote builder on this page, or type 300 cm × 300 cm, then request a quotation. Delivery is nationwide from Ashbourne, Co. Meath.',
  },
  {
    q: 'Do you print huge banners and custom large banners in Ireland?',
    a: 'Yes. This page is for huge banners, oversized stage backdrops and custom large banners. Minimum size is 10 cm. Maximum size is 5000 cm (50 m) width and 5000 cm (50 m) height. Enter any size in between.',
  },
  {
    q: 'What is the maximum banner size you can print?',
    a: 'Up to 50 metres by 50 metres (5000 cm × 5000 cm). Popular large sizes include 3m × 3m, 6m × 3m, 8m × 4m, 12m × 4m and 20m × 5m.',
  },
  {
    q: 'Can I order a large banner in a custom size, not a standard size?',
    a: 'Yes. Type width and height in centimetres. Standard sizes only fill the boxes for convenience — any custom size within 10 cm to 50 m is accepted.',
  },
  {
    q: 'What materials are used for large stage backdrop banners?',
    a: 'Matte polyester, coated polyester and structured polyester, with rings every 30 cm or in the corners, both with reinforcement.',
  },
  {
    q: 'Do you deliver large banners to Dublin, Cork and Galway?',
    a: 'Yes. PrintNPack delivers custom large banners and stage backdrops to Dublin, Cork, Galway, Limerick and every county in Ireland.',
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

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Stage Backdrop Banners', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Large Banners Ireland | 3m x 3m & Custom Huge Stage Backdrops',
  description:
    'Custom large banners Ireland up to 50 m. 3m x 3m banners, huge stage backdrops and oversized polyester banners. Dublin, Cork, Galway & nationwide.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '3m x 3m Banners & Huge Custom Large Banners Ireland | Stage Backdrops',
  description:
    'Order 3m x 3m banners, huge banners and custom large banners in Ireland. Sizes from 10 cm to 50 m. Stage backdrop printing Dublin, Cork, Galway & nationwide.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Custom large banners Ireland' },
  dateModified: '2026-08-20',
};

export default function StageBackdropBannersIreland() {
  const title = '3m x 3m Banners Ireland | Huge & Custom Large Banners up to 50m';
  const description =
    '3m x 3m banners, huge banners and custom large banners Ireland — any size from 10 cm to 50 m. Stage backdrop printing Dublin, Cork, Galway & nationwide. Request a quote.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="3m x 3m banner ireland, 3m x 3m banners, large banners ireland, huge banners ireland, custom large banner ireland, oversized banners ireland, extra large banners dublin, 6m x 3m banner, 50m banner ireland, custom size banners ireland, large format banners ireland, stage backdrop banners ireland, huge stage banner dublin, large banner printing cork, custom banners galway"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Ireland" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-sky-50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Stage Backdrop Banners</li>
          </ol>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 border-b border-sky-900/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sm font-semibold text-sky-300 uppercase tracking-[0.2em] mb-4">
                Huge &amp; custom large banners
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                3m × 3m Banners &amp; Huge Custom Large Banners Ireland
              </h1>
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                Looking for a 3m × 3m banner, a large banner, or a huge custom size up to 50 metres?
                PrintNPack prints oversized polyester stage backdrops for festivals, conferences, theatres
                and events across Ireland. Enter any width and height from 10 cm to 5000 cm.
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-200">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/30 text-sky-200 flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-sky-800/50 shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt={STAGE_BACKDROP_HERO.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-2">Quote builder</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Configure your large banner</h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">
              Select a 3m × 3m banner, another standard size, or type a custom width and height up to 50 m, then request a quotation.
            </p>
          </div>
          <StageBackdropConfigurator />
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Huge banner &amp; stage backdrop examples</h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Custom large banners for outdoor festivals, indoor conferences and night concerts across Ireland.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STAGE_BACKDROP_GALLERY.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <article key={section.title} className="mb-12 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-stone-600 leading-relaxed">
                    {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                      part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={i} className="font-semibold text-stone-800">{part.slice(2, -2)}</strong>
                      ) : (
                        part
                      ),
                    )}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <article className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Popular large banner sizes in Ireland</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {popularSizes.map(({ size, use }) => (
                <div key={size} className="rounded-xl border border-stone-200 bg-stone-50/50 p-4">
                  <h3 className="font-semibold text-stone-900 mb-1">{size}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{use}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Applications</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {applications.map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Product specifications</h2>
            <dl className="divide-y divide-stone-100 rounded-xl border border-stone-200 overflow-hidden">
              {specifications.map(({ label, value }) => (
                <div key={label} className="grid sm:grid-cols-[minmax(0,200px)_1fr] gap-2 sm:gap-4 px-4 py-3 bg-stone-50/50 even:bg-white">
                  <dt className="text-sm font-medium text-stone-500">{label}</dt>
                  <dd className="text-sm font-medium text-stone-900">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Delivery across Ireland</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {deliveryAreas.map(({ city, detail }) => (
                <div key={city} className="rounded-xl border border-stone-200 bg-stone-50/50 p-4">
                  <h3 className="font-semibold text-stone-900 mb-1">{city}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-xl border border-stone-200 bg-stone-50/50 open:bg-white">
                  <summary className="cursor-pointer list-none px-5 py-4 font-medium text-stone-900 flex items-center justify-between gap-4">
                    {q}
                    <span className="text-sky-600 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                  </summary>
                  <p className="px-5 pb-4 text-stone-600 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>

      <RelatedSeoLinks
        title="More large format print"
        links={[
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'Vinyl banners, roll-ups and extra-wide stands' },
          { href: '/vinyl-banners', label: 'Vinyl Banners', desc: 'Printed PVC banners' },
          { href: '/extra-wide-roll-up-banners-ireland', label: 'Extra Wide Roll-Ups', desc: '2 m exhibition backdrops' },
          { href: '/foamex-ireland', label: 'Foamex Boards', desc: 'Rigid display boards' },
        ]}
      />

      <section className="py-14 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Request a quotation</h2>
          <p className="text-stone-300 mb-6 leading-relaxed">
            Contact Print n Pack today for a quotation on 3m × 3m banners, huge banners and custom large banners in Dublin, Cork, Galway and throughout Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-white text-sky-700 font-semibold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
