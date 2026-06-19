import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/printed-flat-handle-bags-ireland`;

const sizes = [
  { size: 'Small', dimensions: '8" × 5" × 10"', use: 'Café pastries, small retail items, deli portions' },
  { size: 'Medium', dimensions: '10" × 6" × 12"', use: 'Most popular — standard takeaway and retail orders' },
  { size: 'Large', dimensions: '12" × 7" × 14"', use: 'Larger orders, multi-item retail, catering' },
];

const galleryImages = [
  { src: '/images/products/flat-handle-bags/1.png', alt: 'Printed flat handle paper bags Ireland – custom logo branding' },
  { src: '/images/products/flat-handle-bags/3.png', alt: 'Custom flat handle bags Dublin – branded kraft paper bag' },
  { src: '/images/products/flat-handle-bags/5.png', alt: 'Flat handle paper bags with logo Ireland – full colour print' },
  { src: '/images/products/flat-handle-bags/2.png', alt: 'Printed flat handle takeaway bags Ireland – café and deli' },
];

const relatedBags = [
  {
    href: '/products/twisted-handle-paper-bags',
    title: 'Twisted Handle Paper Bags',
    desc: 'Premium rope-style handles for boutiques and gift retail.',
    image: '/images/products/twisted-handle-bags/1.png',
  },
  {
    href: '/plain-packaging?category=SOS+Bags',
    title: 'Plain SOS Grab Bags',
    desc: 'Wholesale unprinted carry bags for high-volume takeaway.',
    image: '/images/products/flat-handle-bags/6.png',
  },
];

const guides = [
  {
    href: '/blog/paper-bags-with-logo-ireland',
    title: 'Paper Bags with Logo Ireland',
    desc: 'Flat vs twisted vs SOS — which bag style suits your business.',
  },
  {
    href: '/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland',
    title: 'Eco-Friendly Paper Bags',
    desc: 'Recyclable kraft options for sustainable takeaway.',
  },
  {
    href: '/blog/eco-packaging-for-takeaways-ireland',
    title: 'Eco Packaging for Takeaways',
    desc: 'How Irish food businesses switch to greener packaging.',
  },
];

const faqs = [
  {
    q: 'Where can I order printed flat handle bags in Ireland?',
    a: 'PrintNPack supplies printed flat handle paper bags across Ireland — full-colour CMYK printing with your logo from 500 units. We deliver nationwide to Dublin, Cork, Galway, and all counties.',
  },
  {
    q: 'What is the minimum order for printed flat handle paper bags?',
    a: 'Printed flat handle bags start from 500 units. You can mix sizes within the same order — Small, Medium, and Large — to suit your product range.',
  },
  {
    q: 'What sizes of flat handle paper bags are available?',
    a: 'We offer three standard sizes: Small (8"×5"×10"), Medium (10"×6"×12"), and Large (12"×7"×14"). Medium is the most popular for Irish cafés, delis, and takeaway businesses.',
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
    { '@type': 'ListItem', position: 2, name: 'Printed Flat Handle Bags Ireland', item: PAGE_URL },
  ],
};

const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Printed Flat Handle Paper Bags Ireland',
  description:
    'Custom printed flat handle paper bags for Irish retailers, cafés, and food businesses. Digital CMYK logo printing, three sizes, MOQ from 500 units, nationwide delivery.',
  image: `${SITE_URL}/images/products/flat-handle-bags/1.png`,
  brand: { '@type': 'Brand', name: 'PrintNPack Ireland' },
  offers: {
    '@type': 'Offer',
    url: PAGE_URL,
    priceCurrency: 'EUR',
    price: '0.28',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
  },
};

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Printed Flat Handle Bags Ireland | Custom Logo Paper Bags',
  description:
    'Order printed flat handle paper bags in Ireland — custom logo printing from 500 units. Kraft and white bags in three sizes, fast nationwide delivery for cafés, delis & retail.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Printed flat handle paper bags Ireland' },
  dateModified: '2026-06-18',
};

export default function PrintedFlatHandleBagsIreland() {
  const title = 'Printed Flat Handle Bags Ireland | Custom Logo Paper Bags';
  const description =
    'Order printed flat handle paper bags in Ireland — custom logo printing from 500 units. Kraft & white bags in Small, Medium & Large. Fast delivery to Dublin, Cork & nationwide.';

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
        <meta property="og:image" content={`${SITE_URL}/images/products/flat-handle-bags/1.png`} />
        <meta property="og:image:alt" content="Printed flat handle paper bags Ireland – custom logo branding" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/products/flat-handle-bags/1.png`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Printed Flat Handle Bags Ireland</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Custom Printed Paper Bags
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Printed Flat Handle Bags Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Printed flat handle paper bags</strong> with your logo — the practical choice for Irish
                cafés, delis, bakeries, and retail. Digital CMYK printing, three standard sizes, MOQ from 500
                units, and fast nationwide delivery.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">From €0.28</div>
                  <div className="text-xs text-gray-500">per unit</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">500 units</div>
                  <div className="text-xs text-gray-500">MOQ</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">10–14 days</div>
                  <div className="text-xs text-gray-500">production</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+353894400155"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Call +353 89 440 0155
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/products/flat-handle-bags/1.png"
                alt="Printed flat handle paper bags Ireland – custom logo kraft bags for takeaway and retail"
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
              { title: 'Three practical sizes', desc: 'Small, Medium, and Large to match your product range. Mix sizes in one order from 500 units.' },
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
          <p className="text-gray-600 mb-8">Custom logo printing on kraft and white flat handle paper bags.</p>
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
          <div className="grid md:grid-cols-2 gap-6">
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
            retailers with branded paper bags from 500 units.
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

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to order printed flat handle bags?
          </h2>
          <p className="text-blue-100 mb-6">
            Custom logo printing from 500 units. Three sizes, kraft or white, grease-proof lining available.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
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
