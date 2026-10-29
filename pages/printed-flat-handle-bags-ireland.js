import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';
import { getQuoteCatalogItem } from '../data/quote-modules';
import {
  BROWN_FLAT_HANDLE_EXAMPLES,
  BROWN_FLAT_HANDLE_HERO,
  BROWN_FLAT_HANDLE_SIZES,
  BROWN_FLAT_HANDLE_WARNING,
  brownFlatHandleDimensions,
  brownFlatHandleFromPrice,
  brownFlatHandlePreview,
  buildBrownFlatHandleQuoteLine,
} from '../data/brown-flat-handle-bags';
import BrownFlatHandleConfigurator from '../components/flat-handle-bags/BrownFlatHandleConfigurator';

const PAGE_URL = `${SITE_URL}/printed-flat-handle-bags-ireland`;

const FROM_PRICE = brownFlatHandleFromPrice().toFixed(2);

const sizes = BROWN_FLAT_HANDLE_SIZES.map((size) => ({
  size: size.label,
  dimensions: brownFlatHandleDimensions(size),
  use: size.use,
}));

const galleryImages = [BROWN_FLAT_HANDLE_HERO, ...BROWN_FLAT_HANDLE_EXAMPLES];

const relatedBags = [
  {
    href: '/luxury-paper-bags-ireland',
    title: 'Luxury Paper Bags',
    desc: 'Die-cut premium bags with bespoke finishes for luxury brands.',
    image: '/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg',
  },
  {
    href: '/twisted-handle-paper-bags-ireland',
    title: 'Twisted Handle Paper Bags',
    desc: 'Premium rope-style handles for boutiques and gift retail.',
    image: '/images/products/twisted-handle-bags/1.png',
  },
  {
    href: '/plain-paper-bags-ireland',
    title: 'Plain Paper Bags',
    desc: 'Wholesale unprinted kraft SOS bags for high-volume takeaway.',
    image: '/images/products/flat-handle-bags/6.png',
  },
];

const seoSections = [
  {
    title: 'Printed Flat Handle Bags for Cafés, Delis and Takeaway',
    body: 'Flat handle paper bags are the practical branded carrier for Irish food businesses — die-cut paper loops on brown kraft, in four sizes for pastries, deli portions and takeaway orders.',
  },
  {
    title: 'Logo Paper Bags from 25 Bags',
    body: 'Digital CMYK printing puts your logo on brown kraft paper with no plate fees. Small, Medium, Large and XL start from 25 bags. The price in the builder is indicative and changes with ink use.',
  },
  {
    title: 'Flat Handle vs Twisted Handle Paper Bags',
    body: 'Flat handles suit economical takeaway and food service. Twisted handles suit premium retail and gift presentation — compare both on our paper bags hub.',
    link: { href: '/twisted-handle-paper-bags-ireland', label: 'twisted handle bags' },
  },
  {
    title: 'Plain Stock Bags for Everyday Use',
    body: 'When you need unprinted kraft SOS bags by the case, plain paper bags Ireland offers tiered case pricing with fast online ordering.',
    link: { href: '/plain-paper-bags-ireland', label: 'plain paper bags' },
  },
  {
    title: 'Wholesale Printed and Plain Paper Bags',
    body: 'Busy takeaways and retailers reorder cases with tiered pricing or plan larger custom print runs from 25 bags upward.',
    link: { href: '/wholesale-paper-bags-ireland', label: 'wholesale paper bags' },
  },
];

const guides = [
  {
    href: '/blog/kerala-cafe-printed-paper-bags-dublin',
    title: 'Kerala Cafe Case Study',
    desc: '1,000 branded paper bags printed for a Dublin café.',
  },
  {
    href: '/blog/paper-bags-with-logo-ireland',
    title: 'Paper Bags with Logo Guide',
    desc: 'Flat vs twisted vs SOS — which bag style suits your business.',
  },
  {
    href: '/blog/printed-paper-bag-cost-ireland',
    title: 'Paper Bag Cost Guide',
    desc: 'How printed paper bag pricing works in Ireland.',
  },
];

const faqs = [
  {
    q: 'Where can I order printed flat handle bags in Ireland?',
    a: 'PrintNPack supplies printed brown flat handle paper bags across Ireland — full-colour CMYK printing with your logo from 25 bags. We deliver nationwide to Dublin, Cork, Galway, and all counties.',
  },
  {
    q: 'What is the minimum order for printed flat handle paper bags?',
    a: 'Printed brown flat handle bags start from 25 bags. Sizes are Small, Medium, Large and XL.',
  },
  {
    q: 'What sizes of flat handle paper bags are available?',
    a: 'Four brown kraft sizes: Small 190 × 80 × 250 mm, Medium 220 × 100 × 250 mm, Large 260 × 140 × 290 mm, and XL 320 × 240 × 320 mm.',
  },
  {
    q: 'Can you print my logo on flat handle paper bags?',
    a: 'Yes. We use digital CMYK printing with no plate fees — your logo, brand colours, and artwork printed directly onto kraft or white paper. Grease-proof lining is available for food applications.',
  },
  {
    q: 'How long does production and delivery take?',
    a: 'Production typically takes 10–14 business days after artwork approval, with nationwide delivery across Ireland. Weekly scheduled delivery is available for repeat orders.',
  },
  {
    q: 'Do you deliver printed paper bags to Dublin?',
    a: 'Yes. We deliver printed flat handle bags to Dublin and the greater Dublin area, as well as Cork, Limerick, Galway, and all counties nationwide.',
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
    { '@type': 'ListItem', position: 2, name: 'Paper Bags Ireland', item: `${SITE_URL}/paper-bags-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Printed Flat Handle Bags', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Printed Flat Handle Paper Bags Ireland',
  description:
    'Brown flat handle printed paper bags for Irish cafés, delis and retailers. Indicative prices from 25 bags. Nationwide delivery.',
  image: `${SITE_URL}/images/products/brown-flat-handle/large.jpg`,
  url: PAGE_URL,
  price: FROM_PRICE,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Printed Flat Handle Bags Ireland | Custom Logo Paper Bags',
  description:
    'Order brown flat handle printed paper bags in Ireland — custom logo printing from 25 bags. Four sizes, indicative prices, nationwide delivery.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Printed flat handle paper bags Ireland' },
  dateModified: '2026-06-18',
};

export default function PrintedFlatHandleBagsIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem('printed-flat-handle-bags-ireland');
  const [shown, setShown] = useState(BROWN_FLAT_HANDLE_HERO);
  const title = 'Brown Flat Handle Printed Bags Ireland | Logo Takeaway Bags';
  const description =
    'Brown flat handle printed paper bags Ireland — custom logo takeaway bags from 25 bags. Four kraft sizes, indicative prices from €' +
    FROM_PRICE +
    ' a bag, delivery to Dublin, Meath and nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="printed flat handle bags, printed flat handle paper bags ireland, flat handle paper bags with logo, custom flat handle bags ireland, printed paper bags ireland, flat handle bags dublin, branded paper bags ireland, custom printed paper bags, takeaway paper bags ireland"
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
        <meta property="og:image" content={`${SITE_URL}/images/products/brown-flat-handle/large.jpg`} />
        <meta property="og:image:alt" content="Printed flat handle paper bags Ireland – custom logo branding" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/products/brown-flat-handle/large.jpg`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} /> : null}
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/paper-bags-ireland" className="hover:text-gray-700">Paper Bags Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Printed Flat Handle Bags</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Custom printed paper bags · Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Brown flat handle printed bags
              </h1>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Brown kraft <strong>flat handle paper bags</strong> with your logo, for cafés, delis and retail.
                Four sizes. Orders from 25 bags.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The large bag is 260 × 140 × 290 mm. At 25 bags it is €1.00 double-sided or €0.80 single-sided.
                At 5,000 bags the small bag is €0.25, the large bag is €0.30, and the XL bag is €0.35, double-sided.
              </p>
              <figure className="hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    key={shown.src}
                    src={shown.src}
                    alt={shown.alt}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {galleryImages.map((item) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setShown(item)}
                      className={`relative aspect-[3/4] overflow-hidden rounded-lg border bg-slate-100 ${
                        shown.src === item.src ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200'
                      }`}
                      aria-label={item.alt}
                    >
                      <Image src={item.src} alt="" fill className="object-contain" sizes="120px" />
                    </button>
                  ))}
                </div>
                <figcaption className="mt-2 text-sm text-gray-500">
                  Example print. Your own artwork goes on the bag.
                </figcaption>
              </figure>
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Build your printed bags</h2>
              <BrownFlatHandleConfigurator
                onChange={(priced) => setShown(brownFlatHandlePreview(priced))}
                onSubmit={(priced) => addItem(buildBrownFlatHandleQuoteLine(catalogItem, priced))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-blue-600 hover:underline font-medium">
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why flat handle */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Why choose printed flat handle bags?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Flat handle bags have a die-cut paper loop — more economical than twisted handles and ideal for
            everyday food service and retail. Every bag leaving your shop carries your brand.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Full-colour logo printing', desc: 'Digital CMYK — no plate fees. Print your logo, brand colours, and messaging on kraft or white paper.' },
              { title: 'Food-safe options', desc: 'Grease-proof lining available for hot food, pastries, and deli items. Recyclable kraft paper.' },
              { title: 'Four brown kraft sizes', desc: 'Small, Medium, Large and XL. The price falls as the quantity steps up, and a larger bag costs more at 5,000.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Flat handle bag sizes
              </h2>
              <p className="text-gray-600 mb-6">
                Medium is the most popular size for Irish cafés and delis. Read our{' '}
                <Link href="/blog/paper-bags-with-logo-ireland" className="text-blue-600 hover:underline font-medium">
                  paper bags with logo guide
                </Link>{' '}
                to compare flat handle, twisted handle, and SOS styles.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900">Dimensions</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {sizes.map((row) => (
                      <tr key={row.size}>
                        <td className="px-4 py-3 font-medium text-gray-900">{row.size}</td>
                        <td className="px-4 py-3 text-gray-600">{row.dimensions}</td>
                        <td className="px-4 py-3 text-gray-600">{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/products/flat-handle-bags/3.png"
                alt="Flat handle paper bag sizes Ireland – small medium large printed bags"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Printed flat handle bag examples
          </h2>
          <p className="text-gray-600 mb-8">Example prints on brown kraft bags with internal flat handles.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 bg-white">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other bag types */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Other paper bag options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBags.map((bag) => (
              <Link
                key={bag.href}
                href={bag.href}
                className="group flex gap-5 bg-slate-50 rounded-2xl border border-gray-200 p-5 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-gray-100">
                  <Image
                    src={bag.image}
                    alt={bag.title}
                    fill
                    className="object-contain p-2"
                    sizes="96px"
                    unoptimized={process.env.NODE_ENV === 'production'}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{bag.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{bag.desc}</p>
                  <span className="inline-block mt-2 text-sm font-medium text-blue-600">View options →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Printed paper bag delivery across Ireland
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack delivers <strong>printed flat handle bags in Dublin</strong>, Cork, Galway, Limerick,
            and nationwide. Based in Ashbourne, Co. Meath, we supply Irish cafés, delis, bakeries, and
            retailers with branded paper bags from 25 bags.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { city: 'Dublin', detail: 'Delivery to Dublin city & county businesses' },
              { city: 'Cork & Munster', detail: 'Cafés, delis & food retail across Munster' },
              { city: 'Galway & West', detail: 'Branded bags for Connacht food businesses' },
              { city: 'Nationwide', detail: 'All 26 counties — weekly delivery available' },
            ].map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900 mb-1">{city}</h3>
                <p className="text-sm text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Paper bag guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Printed flat handle bag FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 p-5 open:shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related paper bag pages"
        links={[
          { href: '/paper-bags-ireland', label: 'Paper Bags Ireland', desc: 'Printed, plain & wholesale hub' },
          { href: '/luxury-paper-bags-ireland', label: 'Luxury Paper Bags', desc: 'Premium die-cut bags for luxury brands' },
          { href: '/luxury-rope-handle-bags-ireland', label: 'Luxury Rope Handle Bags', desc: 'Cotton rope handles, from 250 bags' },
          { href: '/twisted-handle-paper-bags-ireland', label: 'Twisted Handle Bags', desc: 'Premium retail paper bags' },
          { href: '/plain-paper-bags-ireland', label: 'Plain Paper Bags', desc: 'Kraft SOS stock cases' },
          { href: '/wholesale-paper-bags-ireland', label: 'Wholesale Paper Bags', desc: 'Bulk case pricing' },
          { href: '/blog/printed-paper-bag-cost-ireland', label: 'Paper Bag Cost Guide', desc: 'Pricing before you quote' },
          { href: '/blog/kerala-cafe-printed-paper-bags-dublin', label: 'Kerala Cafe Case Study', desc: '1,000 branded bags for a Dublin café' },
          { href: '/rocker-stamps-ireland', label: 'Rocker Stamps', desc: 'Stamp a logo on plain kraft bags' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to order printed flat handle bags?
          </h2>
          <p className="text-blue-100 mb-6">
            Brown kraft bags with your logo, from 25 bags. {BROWN_FLAT_HANDLE_WARNING}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#configure"
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
