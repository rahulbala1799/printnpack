import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/custom-printed-coffee-cups-ireland`;
const HERO_IMAGE = '/images/products/custom-printed-coffee-cups/branded-coffee-cups-dublin-ireland-matte-black-gold.jpg';

const galleryImages = [
  {
    src: '/images/products/custom-printed-coffee-cups/branded-coffee-cups-dublin-ireland-matte-black-gold.jpg',
    alt: 'Branded coffee cups Dublin Ireland — matte black takeaway cup with gold logo print for premium cafés',
  },
  {
    src: '/images/products/custom-printed-coffee-cups/custom-printed-coffee-cups-dublin-ireland-orange.jpg',
    alt: 'Custom printed coffee cups Dublin Ireland — orange branded takeaway cup with full-colour logo',
  },
  {
    src: '/images/products/custom-printed-coffee-cups/printed-takeaway-coffee-cups-dublin-kraft.jpg',
    alt: 'Printed takeaway coffee cups Dublin — kraft paper cup with custom logo for Irish coffee shops',
  },
];

const whyChoose = [
  'Custom printed coffee cups with your logo or artwork',
  'Low minimum order quantities available',
  'Delivery throughout Ireland and Northern Ireland',
  'Multiple cup sizes, styles and finishes',
  'One-colour and full-colour printing options',
  'Premium food-safe materials',
  'Eco-friendly and recyclable options available',
  'Suitable for cafés, restaurants, hotels and events',
  'Short-run promotional and larger-volume orders',
  'Strong, practical cups with reliable heat insulation',
  'Professional branded packaging for takeaway drinks',
];

const businessTypes = [
  'Independent Dublin Cafés',
  'Coffee Shops & Roasteries',
  'Restaurant Groups',
  'Hotels & Hospitality',
  'Mobile Coffee Businesses',
  'Corporate Events & Exhibitions',
  'Pop-up Shops & Seasonal Promotions',
  'Takeaway & Food Service',
];

const seoSections = [
  {
    title: 'Branded Coffee Cups for Every Business',
    body: 'Our custom coffee cups are available in a range of popular sizes, styles and finishes suitable for coffee, tea, hot chocolate and other takeaway drinks. Each cup is produced using food-safe materials and designed to provide reliable heat retention, comfortable handling and dependable everyday performance. Choose from simple one-colour logo printing, premium full-colour designs and a variety of cup finishes to match your branding and budget. Eco-friendly and recyclable coffee cup options are also available for businesses seeking more sustainable packaging solutions.',
  },
  {
    title: 'Low-MOQ Printed Coffee Cups',
    body: 'You do not need to order hundreds of thousands of cups to have your own branded packaging. PrintNPack offers low-MOQ custom coffee cups, making personalised cup printing accessible to smaller cafés, start-ups, pop-up shops, corporate events and seasonal promotions. Low minimum quantities also allow established businesses to test a new design, create limited-edition cups or order promotional packaging for a specific campaign without holding unnecessary stock.',
  },
  {
    title: 'Printed Coffee Cups Across Ireland and Northern Ireland',
    body: 'We supply and deliver branded disposable coffee cups throughout the Republic of Ireland and Northern Ireland, including Dublin, Cork, Galway, Limerick, Waterford, Belfast, Derry, Newry and surrounding areas. Whether you require a small promotional order or ongoing bulk production, we can provide a coffee cup printing solution suited to your design, quantity, budget and delivery requirements.',
    link: { href: '/hot-cups-ireland', label: 'plain disposable coffee cups' },
  },
];

const deliveryAreas = [
  { area: 'Dublin', detail: 'Branded coffee cups for cafés, restaurants and hotels across Dublin city and county' },
  { area: 'Cork & Munster', detail: 'Custom printed takeaway cups for coffee shops and food service in Munster' },
  { area: 'Galway & West', detail: 'Printed coffee cup supply to Connacht cafés and hospitality businesses' },
  { area: 'Northern Ireland', detail: 'Delivery to Belfast, Derry, Newry and across NI' },
];

const guides = [
  { href: '/hot-cups-ireland', title: 'Disposable Coffee Cups Ireland', desc: 'Plain wholesale hot cups and lids by the case.' },
  { href: '/plain-hot-cups-ireland', title: 'Plain Hot Cups Ireland', desc: 'White double wall takeaway cups in stock.' },
  { href: '/plain-packaging', title: 'Plain Packaging', desc: 'Cups, boxes, bags and catering supplies.' },
];

const faqs = [
  {
    q: 'Where can I order branded coffee cups in Dublin and Ireland?',
    a: 'PrintNPack supplies custom printed coffee cups to cafés, coffee shops, restaurants, hotels and events throughout Ireland and Northern Ireland. Send us your logo, preferred cup size and quantity for a tailored quote — with delivery to Dublin, Cork, Galway, Belfast and nationwide.',
  },
  {
    q: 'Do you offer low minimum order quantities for custom coffee cups?',
    a: 'Yes. We offer low-MOQ custom printed coffee cups so smaller cafés, start-ups, pop-up shops and event organisers can order professionally branded takeaway cups without committing to excessively large volumes.',
  },
  {
    q: 'What printing options are available for branded coffee cups?',
    a: 'We offer one-colour logo printing and premium full-colour designs. Cups can be customised with your logo, brand colours, artwork and promotional messaging to match your branding and budget.',
  },
  {
    q: 'What cup sizes and styles can I order?',
    a: 'Our custom coffee cups are available in a range of popular takeaway sizes, styles and finishes suitable for coffee, tea, hot chocolate and other hot drinks — all produced using food-safe materials with reliable heat retention.',
  },
  {
    q: 'Do you deliver branded coffee cups to Northern Ireland?',
    a: 'Yes. We supply and deliver custom printed coffee cups throughout the Republic of Ireland and Northern Ireland, including Belfast, Derry, Newry and surrounding areas.',
  },
  {
    q: 'Are eco-friendly coffee cup options available?',
    a: 'Yes. Eco-friendly and recyclable coffee cup options are available for businesses seeking more sustainable takeaway packaging alongside our standard branded cup range.',
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
    { '@type': 'ListItem', position: 2, name: 'Hot Cups Ireland', item: `${SITE_URL}/hot-cups-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Custom Printed Coffee Cups', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Custom Printed Coffee Cups Ireland',
  description:
    'Custom printed coffee cups for cafés and restaurants in Ireland and Northern Ireland. Low MOQ, logo printing, food-safe materials, nationwide delivery.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Printed Coffee Cups Ireland | Branded Takeaway Cups Dublin & NI',
  description:
    'Branded coffee cups Dublin & Ireland — custom printed takeaway cups with low MOQ for cafés, restaurants and events. Logo printing, food-safe cups, delivery across Ireland and Northern Ireland.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Custom printed coffee cups Ireland' },
  dateModified: '2026-08-19',
};

export default function CustomPrintedCoffeeCupsIreland() {
  const title = 'Custom Printed Coffee Cups Ireland | Branded Takeaway Cups Dublin & NI';
  const description =
    'Branded coffee cups Dublin & Ireland — custom printed takeaway cups with low MOQ for cafés, restaurants and events. Logo printing, food-safe cups, delivery across Ireland and Northern Ireland.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="branded coffee cups dublin, branded coffee cups ireland, custom printed coffee cups ireland, printed coffee cups dublin, coffee cup printing ireland, personalised coffee cups ireland, takeaway coffee cups ireland, custom coffee cups northern ireland, low moq coffee cups, branded takeaway cups dublin, cafe coffee cups ireland, restaurant coffee cups ireland, disposable coffee cups with logo ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <meta property="og:image:alt" content="Branded coffee cups Dublin Ireland — custom printed matte black takeaway cup with gold logo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/hot-cups-ireland" className="hover:text-stone-700">Hot Cups Ireland</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Custom Printed Coffee Cups</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-stone-950 border-b border-stone-900 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.18),_transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(120,53,15,0.25),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em] mb-4">
                Low MOQ · Ireland &amp; Northern Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Custom Printed Coffee Cups Ireland — Branded Takeaway Cups for Dublin, NI &amp; Nationwide
              </h1>
              <p className="text-lg text-stone-300 mb-4 leading-relaxed">
                PrintNPack supplies high-quality <strong className="text-white">custom printed coffee cups</strong> to
                cafés, coffee shops, restaurants, hotels, events and takeaway businesses throughout Ireland and
                Northern Ireland. With low minimum order quantities available, businesses of every size can order
                professionally branded coffee cups without committing to excessively large volumes.
              </p>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Our bespoke coffee cups can be customised with your logo, brand colours, artwork and promotional
                messaging. Whether you run an independent Dublin café, a growing restaurant group, a mobile coffee
                business or a one-off event, we can help you create printed takeaway cups that make your brand more
                visible with every drink served.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-amber-400">Low MOQ</div>
                  <div className="text-xs text-stone-400">available</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Full colour</div>
                  <div className="text-xs text-stone-400">&amp; one-colour print</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Food safe</div>
                  <div className="text-xs text-stone-400">materials</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">IE &amp; NI</div>
                  <div className="text-xs text-stone-400">nationwide delivery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
                >
                  Get a Coffee Cup Quote
                </Link>
                <a
                  href="tel:+353894157369"
                  className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
                >
                  Call +353 89 415 7369
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={HERO_IMAGE}
                alt="Branded coffee cups Dublin Ireland — custom printed matte black takeaway cup with gold logo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Branded coffee cup examples</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Custom printed takeaway cups for Irish cafés, coffee shops and restaurants — from premium matte finishes
            to vibrant full-colour branding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-50 shadow-sm hover:shadow-md transition-shadow">
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

      {/* SEO content */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">{section.title}</h2>
              <p className="text-stone-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-amber-700 hover:underline font-medium">
                      Browse {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Why choose PrintNPack?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Everything you need for professionally branded takeaway coffee cups — from short promotional runs to
            ongoing supply.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyChoose.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-stone-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses */}
      <section className="py-12 lg:py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who orders branded coffee cups?</h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            From independent Dublin cafés to nationwide restaurant groups — custom printed cups work for every
            takeaway drinks business.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {businessTypes.map((type) => (
              <div key={type} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-stone-200">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Branded coffee cup delivery — Ireland &amp; Northern Ireland
          </h2>
          <p className="text-stone-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack delivers <strong>custom printed coffee cups to Dublin</strong>, Cork, Galway, Limerick,
            Waterford, Belfast, Derry, Newry and every county across Ireland and Northern Ireland. Based in
            Ashbourne, Co. Meath, we supply cafés, restaurants, hotels and events with professionally branded
            takeaway cups.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryAreas.map(({ area, detail }) => (
              <div key={area} className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-bold text-stone-900 mb-1">{area}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other cup options */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Other coffee cup options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/hot-cups-ireland"
              className="group flex gap-5 bg-stone-50 rounded-2xl border border-stone-200 p-5 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-stone-100">
                <Image
                  src="/images/plain-packaging/100070.webp"
                  alt="Disposable coffee cups Ireland"
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Disposable Coffee Cups Ireland</h3>
                <p className="text-sm text-stone-600 mt-1">71 plain hot cup &amp; lid SKUs with wholesale case pricing.</p>
                <span className="inline-block mt-2 text-sm font-medium text-amber-700">Browse hot cups →</span>
              </div>
            </Link>
            <Link
              href="/plain-hot-cups-ireland"
              className="group flex gap-5 bg-stone-50 rounded-2xl border border-stone-200 p-5 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-stone-100">
                <Image
                  src="/images/plain-packaging/100071.webp"
                  alt="Plain hot cups Ireland"
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Plain Hot Cups Ireland</h3>
                <p className="text-sm text-stone-600 mt-1">White double wall takeaway cups ready to ship by the case.</p>
                <span className="inline-block mt-2 text-sm font-medium text-amber-700">View plain cups →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-xl border border-stone-200 bg-white p-5 hover:border-amber-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">{guide.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8 text-center">
            Custom printed coffee cups — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-stone-200 rounded-xl p-5">
                <h3 className="font-bold text-stone-900 mb-2">{q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More packaging for Irish food service"
        links={[
          { href: '/hot-cups-ireland', label: 'Hot Cups & Lids Ireland', desc: 'Plain disposable coffee cups wholesale' },
          { href: '/plain-hot-cups-ireland', label: 'Plain Hot Cups', desc: 'White takeaway coffee cups by the case' },
          { href: '/printed-flat-handle-bags-ireland', label: 'Printed Paper Bags', desc: 'Branded bags for cafés and takeaway' },
          { href: '/custom-pizza-boxes-ireland', label: 'Custom Pizza Boxes', desc: 'Printed food packaging Ireland' },
          { href: '/plain-packaging', label: 'Plain Packaging', desc: 'Wholesale catering supplies' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-stone-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Get a quote for custom coffee cups
          </h2>
          <p className="text-stone-400 mb-6">
            Turn every takeaway drink into an opportunity to promote your business. Send us your logo, preferred cup
            size, required quantity and delivery location — we&apos;ll provide a quotation for your custom printed
            coffee cups with low minimum order quantities and delivery across Ireland and Northern Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
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
