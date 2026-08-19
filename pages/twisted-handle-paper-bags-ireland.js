import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/twisted-handle-paper-bags-ireland`;

const sizes = [
  { size: 'Small', dimensions: '8" × 4.5" × 10"', use: 'Jewellery, cosmetics, small retail gifts' },
  { size: 'Medium', dimensions: '10" × 5" × 13"', use: 'Most popular — boutiques, fashion, gift retail' },
  { size: 'Large', dimensions: '12" × 6" × 15.5"', use: 'Larger purchases, department stores, events' },
];

const galleryImages = [
  { src: '/images/products/twisted-handle-bags/1.png', alt: 'Twisted handle paper bags Ireland – premium retail carrier bags with logo' },
  { src: '/images/products/twisted-handle-bags/2.png', alt: 'Custom twisted handle paper bags Ireland – boutique branding' },
  { src: '/images/products/twisted-handle-bags/4.png', alt: 'Printed twisted handle bags Ireland – white kraft retail bag' },
  { src: '/images/products/twisted-handle-bags/5.png', alt: 'Branded twisted handle carrier bags Ireland – gift shop packaging' },
];

const seoSections = [
  {
    title: 'Twisted Handle Paper Bags for Retail and Gift Shops',
    body: 'Twisted handle paper carrier bags give boutiques, gift shops and premium retailers a polished shopping experience. Rope-style paper handles and reinforced construction suit fashion, cosmetics, jewellery and branded gifting.',
  },
  {
    title: 'Printed Twisted Handle Bags with Your Logo',
    body: 'Digital CMYK printing puts your logo and brand colours on kraft, white or black paper — no plate fees. Custom twisted handle bags start from 500 units with mixed sizes in one order.',
  },
  {
    title: 'Twisted Handle vs Flat Handle Paper Bags',
    body: 'Twisted handles suit premium retail presentation. Flat handle bags are more economical for everyday café and takeaway use — compare both styles on our paper bags hub.',
    link: { href: '/printed-flat-handle-bags-ireland', label: 'printed flat handle bags' },
  },
  {
    title: 'Wholesale Twisted Handle Carrier Bags',
    body: 'Higher volumes reduce per-unit cost on branded carrier bags. For bulk plain stock alongside custom print, see wholesale paper bags Ireland.',
    link: { href: '/wholesale-paper-bags-ireland', label: 'wholesale paper bags' },
  },
  {
    title: 'Delivery from Ashbourne, Co. Meath — Nationwide',
    body: 'PrintNPack is based in Ashbourne, Co. Meath and delivers twisted handle paper bags across Dublin, Meath and all Irish counties. Production typically takes 10–14 business days after artwork approval.',
  },
];

const faqs = [
  {
    q: 'Where can I order twisted handle paper bags in Ireland?',
    a: 'PrintNPack supplies custom twisted handle paper bags across Ireland — full-colour logo printing from 500 units with nationwide delivery from our base in Ashbourne, Co. Meath.',
  },
  {
    q: 'What is the minimum order for twisted handle paper bags?',
    a: 'Twisted handle paper bags start from 500 units. You can mix Small, Medium and Large sizes within the same order.',
  },
  {
    q: 'How much do twisted handle paper bags cost?',
    a: 'Pricing depends on size, ink coverage and quantity — typically from around €0.35 per unit at 500 units. See our paper bag cost guide for a full breakdown.',
  },
  {
    q: 'Who uses twisted handle paper bags?',
    a: 'Boutiques, gift shops, fashion retailers, cosmetics brands, jewellery stores, museum shops and premium food brands commonly use twisted handle carrier bags.',
  },
  {
    q: 'Do you deliver twisted handle bags to Dublin?',
    a: 'Yes. We deliver across Dublin city and county, as well as Cork, Galway, Limerick and all Irish counties.',
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
    { '@type': 'ListItem', position: 3, name: 'Twisted Handle Paper Bags', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Twisted Handle Paper Bags Ireland',
  description:
    'Premium twisted handle paper carrier bags for Irish boutiques, gift shops and retail. Custom logo printing, three sizes, MOQ from 500 units, nationwide delivery.',
  image: `${SITE_URL}/images/products/twisted-handle-bags/1.png`,
  url: PAGE_URL,
  price: '0.35',
});

export default function TwistedHandlePaperBagsIreland() {
  const title = 'Twisted Handle Paper Bags Ireland | Premium Retail Carrier Bags with Logo';
  const description =
    'Twisted handle paper bags Ireland for boutiques, gift shops and retail. Custom logo printing from 500 units — premium rope-style handles, three sizes, delivery nationwide from Ashbourne, Co. Meath.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="twisted handle paper bags ireland, twisted handle paper bags, paper carrier bags ireland, retail paper bags with logo, boutique paper bags, gift shop bags ireland, branded carrier bags"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/images/products/twisted-handle-bags/1.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/paper-bags-ireland" className="hover:text-gray-700">Paper Bags Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Twisted Handle Paper Bags</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-3">Premium retail packaging</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Twisted Handle Paper Bags Ireland — Premium Retail Carrier Bags with Logo
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Twisted handle paper bags</strong> with your logo — the premium choice for Irish boutiques, gift shops, fashion retail and branded gifting. Rope-style handles, digital CMYK printing, MOQ from 500 units.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">From €0.35</div>
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
                <Link href="/quote" className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors">
                  Get a Free Quote
                </Link>
                <Link href="/blog/paper-bags-with-logo-ireland" className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Compare bag styles
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/products/twisted-handle-bags/1.png" alt="Twisted handle paper bags Ireland – premium retail carrier bags with custom logo" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" unoptimized={process.env.NODE_ENV === 'production'} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
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

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Twisted handle bag sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden max-w-2xl">
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
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Twisted handle bag examples</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 bg-white">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" unoptimized={process.env.NODE_ENV === 'production'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Twisted handle bag FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-slate-50 rounded-xl border border-gray-200 p-5 open:shadow-sm">
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
          { href: '/printed-flat-handle-bags-ireland', label: 'Printed Flat Handle Bags', desc: 'Takeaway & café logo bags' },
          { href: '/plain-paper-bags-ireland', label: 'Plain Paper Bags', desc: 'Kraft SOS stock cases' },
          { href: '/wholesale-paper-bags-ireland', label: 'Wholesale Paper Bags', desc: 'Bulk case pricing' },
          { href: '/blog/printed-paper-bag-cost-ireland', label: 'Paper Bag Cost Guide', desc: 'Pricing before you quote' },
        ]}
      />

      <section className="py-12 lg:py-16 bg-purple-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order twisted handle bags?</h2>
          <p className="text-purple-100 mb-6">Premium retail carrier bags with your logo — from 500 units, three sizes, nationwide delivery.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="inline-flex items-center bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">Get a Free Quote</Link>
            <Link href="/contact" className="inline-flex items-center bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl border border-purple-400 hover:bg-purple-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
