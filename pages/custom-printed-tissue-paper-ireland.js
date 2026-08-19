import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/custom-printed-tissue-paper-ireland`;
const HERO_IMAGE = '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg';

const galleryImages = [
  {
    src: '/images/products/custom-printed-tissue-paper/luxury-custom-printed-tissue-paper-black-gold-ireland.jpg',
    alt: 'Luxury custom printed tissue paper Ireland — matte black tissue with repeating gold logo pattern for premium retail packaging',
  },
  {
    src: '/images/products/custom-printed-tissue-paper/custom-printed-tissue-paper-ireland-branded-pattern.jpg',
    alt: 'Custom printed tissue paper Ireland — white branded tissue with bespoke logo pattern for ecommerce and boutique packaging',
  },
];

const keyBenefits = [
  'Custom printed with your logo, pattern or artwork',
  'Creates a premium branded unboxing experience',
  'Lightweight protection for delicate products',
  'Available in a wide range of colours and print styles',
  'Recyclable and eco-friendly options available',
  'Ideal for ecommerce, retail, gifting and luxury packaging',
  'Supplied by PrintNPack throughout Ireland',
];

const applications = [
  'E-commerce & Online Retail',
  'Fashion Boutiques',
  'Jewellery Brands',
  'Cosmetics & Beauty',
  'Gift Shops',
  'Corporate Gifting',
  'Luxury Retail Packaging',
  'Delicate Product Wrapping',
];

const seoSections = [
  {
    title: 'Custom Printed Tissue Paper for Irish Brands',
    body: 'PrintNPack supplies high-quality custom printed tissue paper in Ireland, helping businesses protect their products while creating a polished and memorable unboxing experience. Printed with your logo, pattern or bespoke artwork, branded tissue paper adds a premium finishing touch to every order.',
  },
  {
    title: 'Personalised Tissue Paper for Ecommerce, Retail & Gifting',
    body: 'Our personalised tissue paper is ideal for ecommerce stores, fashion boutiques, jewellery brands, cosmetics, gift shops, corporate gifting and luxury retail packaging. It can be used to wrap clothing, accessories, beauty products, gifts and other delicate items while keeping your packaging consistent with your brand identity.',
    link: { href: '/luxury-magnetic-closure-boxes-ireland', label: 'luxury magnetic closure boxes' },
  },
  {
    title: 'Wide Colour Range & Eco-Friendly Options',
    body: 'Choose from a wide selection of tissue paper colours and custom printing options to create packaging that complements your boxes, bags, stickers and ribbons. Whether you want a simple repeated logo or a fully bespoke pattern, PrintNPack can produce tissue paper tailored to your business. Eco-friendly and recyclable tissue paper options are also available for brands seeking more sustainable packaging solutions.',
    link: { href: '/luxury-paper-bags-ireland', label: 'luxury paper bags' },
  },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Branded tissue paper for ecommerce, boutiques and luxury retail across Dublin' },
  { city: 'Cork & Munster', detail: 'Custom printed tissue for fashion and cosmetics brands in Munster' },
  { city: 'Galway & West', detail: 'Personalised tissue paper supply to Connacht retailers and gift shops' },
  { city: 'Nationwide', detail: 'Delivery to every county in Ireland from Ashbourne, Co. Meath' },
];

const guides = [
  { href: '/luxury-magnetic-closure-boxes-ireland', title: 'Magnetic Closure Boxes', desc: 'Luxury rigid gift boxes with custom printing.' },
  { href: '/luxury-paper-bags-ireland', title: 'Luxury Paper Bags', desc: 'Premium die-cut carrier bags for brands.' },
  { href: '/printed-flat-handle-bags-ireland', title: 'Printed Paper Bags', desc: 'Branded bags for retail and takeaway.' },
];

const faqs = [
  {
    q: 'Where can I order custom printed tissue paper in Ireland?',
    a: 'PrintNPack supplies custom printed tissue paper to ecommerce stores, fashion boutiques, jewellery brands, cosmetics companies and gift shops throughout Ireland. Contact us with your logo, preferred colours and quantity for a personalised quotation — with nationwide delivery from Ashbourne, Co. Meath.',
  },
  {
    q: 'What can branded tissue paper be used for?',
    a: 'Personalised tissue paper is ideal for wrapping clothing, accessories, beauty products, gifts and other delicate items. It adds lightweight protection while creating a premium branded unboxing experience for ecommerce, retail, gifting and luxury packaging.',
  },
  {
    q: 'What printing options are available?',
    a: 'We offer custom printing with your logo, pattern or bespoke artwork — from a simple repeated logo to a fully bespoke pattern. Tissue paper is available in a wide range of colours and print styles to complement your boxes, bags, stickers and ribbons.',
  },
  {
    q: 'Are eco-friendly tissue paper options available?',
    a: 'Yes. Eco-friendly and recyclable tissue paper options are available for brands seeking more sustainable packaging solutions alongside our standard custom printed tissue paper range.',
  },
  {
    q: 'Do you deliver custom tissue paper nationwide in Ireland?',
    a: 'Yes. PrintNPack delivers branded tissue paper to Dublin, Cork, Galway, Limerick and every county in Ireland.',
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
    { '@type': 'ListItem', position: 3, name: 'Custom Printed Tissue Paper', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Custom Printed Tissue Paper Ireland',
  description:
    'Custom printed tissue paper Ireland — branded logo tissue for ecommerce, retail and luxury packaging. Wide colour range, eco-friendly options, nationwide delivery.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Printed Tissue Paper Ireland | Branded Logo Tissue Paper Dublin',
  description:
    'Custom printed tissue paper Ireland — personalised branded tissue for ecommerce, boutiques and luxury retail. Logo printing, eco-friendly options, Dublin & nationwide delivery.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Custom printed tissue paper Ireland' },
  dateModified: '2026-08-19',
};

export default function CustomPrintedTissuePaperIreland() {
  const title = 'Custom Printed Tissue Paper Ireland | Branded Logo Tissue Paper Dublin';
  const description =
    'Custom printed tissue paper Ireland — personalised branded tissue for ecommerce, boutiques & luxury retail. Logo printing, eco-friendly options, Dublin & nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed tissue paper ireland, branded tissue paper dublin, personalised tissue paper ireland, logo tissue paper ireland, luxury tissue paper ireland, printed tissue paper ireland, custom tissue paper dublin, ecommerce packaging tissue ireland, boutique tissue paper ireland, recyclable tissue paper ireland, branded unboxing tissue ireland, tissue paper printing ireland"
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
        <meta property="og:image:alt" content="Luxury custom printed tissue paper Ireland — black tissue with gold logo pattern" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-rose-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Custom Printed Tissue Paper</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-stone-900 border-b border-stone-800 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.14),_transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.08),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-300 uppercase tracking-[0.2em] mb-4">
                Premium Finishing · Nationwide Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Custom Printed Tissue Paper Ireland — Branded Logo Tissue for Luxury Unboxing
              </h1>
              <p className="text-lg text-stone-300 mb-4 leading-relaxed">
                PrintNPack supplies high-quality <strong className="text-white">custom printed tissue paper in Ireland</strong>,
                helping businesses protect their products while creating a polished and memorable unboxing experience.
                Printed with your logo, pattern or bespoke artwork, branded tissue paper adds a premium finishing
                touch to every order.
              </p>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Our personalised tissue paper is ideal for ecommerce stores, fashion boutiques, jewellery brands,
                cosmetics, gift shops, corporate gifting and luxury retail packaging — wrapping clothing, accessories,
                beauty products and gifts while keeping your packaging consistent with your brand identity.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-amber-300">Logo &amp; pattern</div>
                  <div className="text-xs text-stone-400">custom print</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Wide colour</div>
                  <div className="text-xs text-stone-400">range</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Eco-friendly</div>
                  <div className="text-xs text-stone-400">options</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Nationwide</div>
                  <div className="text-xs text-stone-400">Irish delivery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-rose-500 transition-colors"
                >
                  Get a Tissue Paper Quote
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
                alt="Luxury custom printed tissue paper Ireland — matte black tissue with repeating gold logo pattern"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Custom tissue paper examples</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Branded tissue paper with repeating logo patterns and bespoke artwork — from luxury black and gold to
            elegant white and navy for Irish retail brands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-50 shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-12 lg:py-16 bg-rose-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Key benefits</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            A premium finishing touch that protects delicate products and elevates every unboxing moment.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {keyBenefits.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-rose-100 bg-white p-4">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center">
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

      {/* SEO content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">{section.title}</h2>
              <p className="text-stone-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-rose-700 hover:underline font-medium">
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who uses */}
      <section className="py-12 lg:py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who uses branded tissue paper?</h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            From Dublin ecommerce brands to nationwide luxury retailers — custom tissue paper completes your
            packaging presentation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {applications.map((app) => (
              <div key={app} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-stone-200">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-12 lg:py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Custom tissue paper delivery — nationwide across Ireland
          </h2>
          <p className="text-stone-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack delivers <strong>custom printed tissue paper to Dublin</strong>, Cork, Galway, Limerick,
            and every county in Ireland. Based in Ashbourne, Co. Meath, we supply ecommerce brands, boutiques,
            jewellers and gift shops with branded tissue paper tailored to your business.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryAreas.map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-bold text-stone-900 mb-1">{city}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related packaging */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Complete your branded packaging</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/luxury-magnetic-closure-boxes-ireland"
              className="group flex gap-5 bg-stone-50 rounded-2xl border border-stone-200 p-5 hover:border-rose-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-stone-100">
                <Image
                  src="/images/products/luxury-magnetic-closure-boxes/luxury-magnetic-closure-box-ireland-gold-foil.jpg"
                  alt="Luxury magnetic closure boxes Ireland"
                  fill
                  className="object-cover"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 group-hover:text-rose-700 transition-colors">Magnetic Closure Boxes</h3>
                <p className="text-sm text-stone-600 mt-1">Luxury rigid gift boxes with custom logo printing.</p>
                <span className="inline-block mt-2 text-sm font-medium text-rose-700">View magnetic boxes →</span>
              </div>
            </Link>
            <Link
              href="/luxury-paper-bags-ireland"
              className="group flex gap-5 bg-stone-50 rounded-2xl border border-stone-200 p-5 hover:border-rose-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-stone-100">
                <Image
                  src="/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg"
                  alt="Luxury paper bags Ireland"
                  fill
                  className="object-cover"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 group-hover:text-rose-700 transition-colors">Luxury Paper Bags</h3>
                <p className="text-sm text-stone-600 mt-1">Premium die-cut carrier bags for luxury brands.</p>
                <span className="inline-block mt-2 text-sm font-medium text-rose-700">View luxury bags →</span>
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
                className="rounded-xl border border-stone-200 bg-white p-5 hover:border-rose-200 hover:shadow-sm transition-all group"
              >
                <h3 className="font-bold text-stone-900 group-hover:text-rose-700 transition-colors">{guide.title}</h3>
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
            Custom printed tissue paper — FAQs
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
        title="More luxury packaging for Irish brands"
        links={[
          { href: '/luxury-magnetic-closure-boxes-ireland', label: 'Magnetic Closure Boxes', desc: 'Luxury rigid gift boxes' },
          { href: '/luxury-paper-bags-ireland', label: 'Luxury Paper Bags', desc: 'Premium die-cut carrier bags' },
          { href: '/twisted-handle-paper-bags-ireland', label: 'Twisted Handle Bags', desc: 'Premium retail paper bags' },
          { href: '/printed-flat-handle-bags-ireland', label: 'Printed Paper Bags', desc: 'Branded bags for retail' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Enhance your packaging with custom tissue paper
          </h2>
          <p className="text-stone-400 mb-6">
            Contact PrintNPack today for pricing, printing options and a personalised quotation on custom printed
            tissue paper — delivered throughout Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-rose-500 transition-colors"
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
