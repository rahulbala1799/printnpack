import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { HUB_FAQS } from '../data/paper-bags-cluster';

const PAGE_URL = `${SITE_URL}/paper-bags-ireland`;
const HERO_IMAGE = '/images/products/flat-handle-bags/1.png';

const childPages = [
  {
    href: '/luxury-paper-bags-ireland',
    title: 'Luxury Paper Bags',
    desc: 'Die-cut premium carrier bags with bespoke finishes for luxury brands.',
    image: '/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg',
    accent: 'amber',
    badge: 'Luxury',
  },
  {
    href: '/printed-flat-handle-bags-ireland',
    title: 'Printed Flat Handle Bags',
    desc: 'Logo takeaway bags for cafés, delis and retail — from 500 units.',
    image: '/images/products/flat-handle-bags/3.png',
    accent: 'blue',
  },
  {
    href: '/twisted-handle-paper-bags-ireland',
    title: 'Twisted Handle Bags',
    desc: 'Premium paper carrier bags for boutiques, gift shops and retail.',
    image: '/images/products/twisted-handle-bags/1.png',
    accent: 'purple',
  },
  {
    href: '/plain-paper-bags-ireland',
    title: 'Plain Paper Bags',
    desc: 'Brown kraft, SOS takeaway bags and stock cases — order online.',
    image: '/images/products/flat-handle-bags/6.png',
    accent: 'emerald',
  },
  {
    href: '/wholesale-paper-bags-ireland',
    title: 'Wholesale Paper Bags',
    desc: 'Bulk plain and printed carrier bags with tiered case pricing.',
    image: '/images/products/twisted-handle-bags/2.png',
    accent: 'slate',
  },
];

const hubSections = [
  { title: 'Luxury Paper Bags for Premium Irish Brands', body: 'Die-cut luxury paper bags with built-in handles and bespoke foil, emboss and lamination finishes give luxury fashion, jewellery and hospitality brands packaging as premium as their product.', link: { href: '/luxury-paper-bags-ireland', label: 'luxury paper bags' } },
  { title: 'Paper Bags with Logo for Irish Businesses', body: 'Custom printed paper bags with your logo turn every takeaway and retail order into brand exposure. Flat handle and twisted handle styles are available from 500 units with nationwide delivery.' },
  { title: 'Printed Paper Bags for Retail, Food and Events', body: 'From café pastries to boutique purchases and event giveaways, printed paper carrier bags keep your business name in customers\' hands after they leave.' },
  { title: 'Flat Handle vs Twisted Handle Paper Bags', body: 'Flat handle bags suit economical takeaway and food service. Twisted handle bags suit premium retail, gift shops and boutiques where presentation matters more.' },
  { title: 'Plain Brown, White and Kraft Paper Bags', body: 'Plain kraft SOS bags, MG food bags and handled carrier bags are available by the case for fast stock orders without a print run.' },
  { title: 'Wholesale Paper Bags and Bulk Case Pricing', body: 'Reorder cases with tiered pricing for busy takeaways and retailers. Custom printed wholesale runs from 500 units scale to 3,000+ for lower per-unit costs.' },
  { title: 'Paper Bags for Cafés, Delis, Bakeries and Takeaways', body: 'Irish food businesses use paper bags daily — grease-proof options, recyclable kraft board and practical handle styles for hot food and retail items.' },
  { title: 'Paper Bags Dublin, Meath and Nationwide Delivery', body: 'PrintNPack is based in Ashbourne, Co. Meath and delivers paper bags across Dublin, Meath and all Irish counties.' },
];

const guides = [
  { href: '/blog/paper-bags-with-logo-ireland', title: 'Paper Bags with Logo Guide', desc: 'Flat vs twisted vs SOS — which style fits your business.' },
  { href: '/blog/printed-paper-bag-cost-ireland', title: 'Paper Bag Cost Guide', desc: 'How printed paper bag pricing works in Ireland.' },
  { href: '/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland', title: 'Eco-Friendly Paper Bags', desc: 'Recyclable kraft options for sustainable takeaway.' },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HUB_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function PaperBagsIreland() {
  const title = 'Paper Bags Ireland | Printed, Plain & Wholesale Paper Bags with Logo';
  const description =
    'Paper bags Ireland for retail, takeaway, cafés and events. Printed paper bags with logo, plain kraft bags, flat handle, twisted handle and wholesale options with delivery nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="paper bags Ireland, paper bags Dublin, paper bags with logo, printed paper bags Ireland, luxury paper bags Ireland, custom paper bags, wholesale paper bags, paper carrier bags, branded paper bags" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Paper Bags Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Ireland&apos;s paper bag supplier</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Paper Bags Ireland — Printed, Plain &amp; Wholesale Bags for Irish Businesses
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong>Paper bags with logo</strong>, plain kraft stock bags and wholesale case pricing for Irish retailers, cafés, delis, takeaways and events. Flat handle, twisted handle and SOS takeaway options with delivery across <strong>Dublin, Meath and nationwide</strong>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">
                  Get Paper Bag Quote
                </Link>
                <Link href="/printed-flat-handle-bags-ireland" className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                  Printed Flat Handle Bags
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src={HERO_IMAGE} alt="Paper bags Ireland – printed and plain kraft carrier bags" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" unoptimized={process.env.NODE_ENV === 'production'} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Choose your paper bag option</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">Each page covers a different buying path — printed, plain stock, or wholesale bulk.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {childPages.map((page) => (
              <Link key={page.href} href={page.href} className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-emerald-200 transition-all">
                {page.badge && (
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-gray-950 px-2 py-0.5 rounded-full">
                    {page.badge}
                  </span>
                )}
                <div className="relative h-40">
                  <Image src={page.image} alt={page.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="300px" unoptimized={process.env.NODE_ENV === 'production'} />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">{page.title}</h3>
                  <p className="text-sm text-gray-600">{page.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {hubSections.map((section) => (
            <div key={section.title} className="mb-8 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-emerald-600 hover:underline font-medium">
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Guides &amp; resources</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-emerald-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{guide.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Paper bag FAQs</h2>
          <div className="space-y-4">
            {HUB_FAQS.map((faq) => (
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

      <section className="py-12 lg:py-16 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to order paper bags?</h2>
          <p className="text-emerald-100 mb-6">Printed, plain or wholesale — tell us your bag style, quantity and delivery county.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="inline-flex items-center bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors">Get a Quote</Link>
            <Link href="/contact" className="inline-flex items-center bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl border border-emerald-400 hover:bg-emerald-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
