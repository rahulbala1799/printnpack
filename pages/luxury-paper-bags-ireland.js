import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/luxury-paper-bags-ireland`;
const HERO_IMAGE = '/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg';

const galleryImages = [
  {
    src: '/images/products/luxury-paper-bags/luxury-paper-bags-ireland-premium-die-cut.jpg',
    alt: 'Luxury paper bags Ireland – cream die-cut printed carrier bag for boutique and luxury brands',
  },
  {
    src: '/images/products/luxury-paper-bags/luxury-kraft-paper-bags-ireland-custom-printed.jpg',
    alt: 'Custom printed luxury kraft paper bags Ireland – die-cut handle bags for specialty retail',
  },
  {
    src: '/images/products/luxury-paper-bags/luxury-printed-paper-bags-ireland-navy-die-cut.jpg',
    alt: 'Printed luxury paper bags Ireland – navy die-cut bags with built-in handles for Irish brands',
  },
];

const keyBenefits = [
  {
    title: 'Unique Design That Stands Out',
    desc: 'A die-cut, modern silhouette that instantly signals quality — no brand looks the same twice.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'Built for Events & Exhibitions',
    desc: 'Ideal for promotional packaging, trade shows, product launches and brand campaigns nationwide.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M19 21h-2m0 0h-4m4 0v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m0 0H5m2 0h4m0-16h2m-2 4h2m-2 4h2" />
      </svg>
    ),
  },
  {
    title: 'Fully Customisable',
    desc: 'Your branding, colours and print — plus premium finishes like foil, emboss and lamination.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const finishOptions = [
  { title: 'Matte Lamination', desc: 'A soft-touch, non-reflective finish for an understated, premium feel.' },
  { title: 'Gloss Lamination', desc: 'A sleek, reflective finish that makes colours and logos pop.' },
  { title: 'Foil Stamping', desc: 'Gold or silver foil detailing on your logo for a genuine luxury statement.' },
  { title: 'Embossing & Debossing', desc: 'Raised or pressed detailing that adds tactile depth to your branding.' },
  { title: 'Spot UV', desc: 'Glossy highlights over a matte base to make key design elements stand out.' },
  { title: 'Die-Cut Handles', desc: 'Seamless, integrated handles cut directly from the bag — no rope or twist attachments.' },
];

const applications = [
  'Luxury Fashion & Apparel Brands',
  'Boutiques & Concept Stores',
  'Jewellery & Watch Retailers',
  'Beauty & Cosmetics Brands',
  'Hotels & Hospitality',
  'Trade Shows & Exhibitions',
  'Product Launches & Corporate Events',
  'Premium Gifting & Department Stores',
];

const seoSections = [
  {
    title: 'Luxury Die-Cut Paper Bags for Premium Irish Brands',
    body: 'Our die-cut printed luxury paper bags are a sleek, modern option for brands that want something a bit different. With built-in handles and a flawless, clean finish, they are the packaging of choice for luxury retailers, boutiques, exhibitions and premium promotional campaigns right across Ireland.',
  },
  {
    title: 'Pure Luxury Packaging for Fashion, Jewellery & Boutique Retail',
    body: 'From Dublin flagship stores to boutiques in Cork, Galway and Limerick, luxury brands trust die-cut paper bags to turn every purchase into a branded experience. Strong, easy to carry, and available in colours and finishes to match your exact brand identity.',
    link: { href: '/twisted-handle-paper-bags-ireland', label: 'premium twisted handle bags' },
  },
  {
    title: 'A Walking Advert for Trade Shows, Launches & Campaigns',
    body: 'Custom printed luxury paper bags are a great way to turn simple packaging into a walking advertisement for your brand — perfect for trade shows, product launches and nationwide promotional campaigns.',
  },
  {
    title: 'Bespoke Finishes: Foil Stamping, Embossing & Lamination',
    body: 'True luxury is in the detail. Choose matte or gloss lamination, gold or silver foil stamping, embossing, debossing and spot UV to create a genuinely premium unboxing experience for your customers.',
  },
  {
    title: 'Luxury Paper Bags with Logo — Fully Customisable',
    body: 'Every luxury paper bag is fully customised with your branding and print — your logo, brand colours, and messaging, produced with digital CMYK printing from 500 units with no plate fees.',
    link: { href: '/paper-bags-ireland', label: 'paper bags Ireland hub' },
  },
];

const guides = [
  { href: '/paper-bags-ireland', title: 'Paper Bags Ireland', desc: 'Hub for printed, plain and wholesale paper bag options.' },
  { href: '/blog/paper-bags-with-logo-ireland', title: 'Paper Bags with Logo Guide', desc: 'Compare bag styles for your brand.' },
  { href: '/blog/printed-paper-bag-cost-ireland', title: 'Paper Bag Cost Guide', desc: 'How printed paper bag pricing works in Ireland.' },
];

const faqs = [
  {
    q: 'Where can I order luxury paper bags in Ireland for my brand?',
    a: 'PrintNPack supplies luxury die-cut printed paper bags to premium brands, boutiques and retailers all across Ireland — full-colour and foil branding from 500 units, with nationwide delivery from Ashbourne, Co. Meath.',
  },
  {
    q: 'What is the minimum order quantity for luxury paper bags?',
    a: 'Luxury die-cut paper bags start from 500 units.',
  },
  {
    q: 'What luxury finishes are available?',
    a: 'We offer matte and gloss lamination, gold or silver foil stamping, embossing and debossing, and spot UV highlights — often combined for a genuinely premium finish.',
  },
  {
    q: 'What makes die-cut paper bags different from twisted or flat handle bags?',
    a: 'Die-cut bags use an integrated handle cut directly from the bag material for a seamless, minimalist look. Twisted handle bags use rope-style paper handles, and flat handle bags use an economical die-cut loop — die-cut luxury bags are the premium, modern alternative.',
  },
  {
    q: 'How long does production and delivery take?',
    a: 'Production typically takes 10–14 business days after artwork and finish approval, with nationwide delivery across Ireland including Dublin, Cork, Galway and Limerick.',
  },
  {
    q: 'Do you deliver luxury paper bags nationwide in Ireland?',
    a: 'Yes. We deliver to luxury brands, boutiques, hotels and retailers in every county in Ireland from our Ashbourne, Co. Meath production facility.',
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
    { '@type': 'ListItem', position: 3, name: 'Luxury Paper Bags', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Luxury Die-Cut Paper Bags Ireland',
  description:
    'Pure luxury die-cut printed paper bags for premium Irish brands. Built-in handles, bespoke foil and lamination finishes, MOQ from 500 units, nationwide delivery.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
  price: '0.55',
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Luxury Paper Bags Ireland | Premium Die-Cut Carrier Bags',
  description:
    'Luxury paper bags Ireland for premium brands — die-cut printed carrier bags with built-in handles, foil stamping, embossing and lamination finishes. Nationwide delivery from 500 units.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Luxury paper bags Ireland' },
  dateModified: '2026-08-19',
};

export default function LuxuryPaperBagsIreland() {
  const title = 'Luxury Paper Bags Ireland | Premium Die-Cut Carrier Bags for Luxury Brands';
  const description =
    'Luxury paper bags Ireland for premium brands — die-cut printed carrier bags with built-in handles, foil stamping, embossing & lamination. Nationwide delivery, from 500 units.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="luxury paper bags ireland, luxury paper bags, premium paper bags ireland, die cut paper bags ireland, luxury brand packaging ireland, printed luxury carrier bags, boutique paper bags ireland, luxury retail packaging ireland, high end paper bags ireland, bespoke paper bags ireland, foil stamped paper bags"
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
        <meta property="og:image:alt" content="Luxury paper bags Ireland – premium die-cut printed carrier bags for luxury brands" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
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
            <li className="text-gray-800 font-medium">Luxury Paper Bags</li>
          </ol>
        </div>
      </nav>

      {/* Hero — dark luxury treatment */}
      <section className="relative bg-gray-950 border-b border-gray-900 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(217,180,110,0.15),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-[0.2em] mb-4">
                Pure Luxury · Nationwide Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Luxury Paper Bags Ireland — Premium Die-Cut Carrier Bags for Brands That Never Compromise
              </h1>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Our <strong className="text-white">die-cut printed luxury paper bags</strong> are a sleek, modern
                option for brands that want something a bit different. With built-in handles and a clean,
                flawless finish, they&apos;re especially popular for events, exhibitions and promotional
                packaging across Ireland.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Turn simple packaging into a walking advert for your brand — perfect for trade shows,
                product launches and premium campaigns. Strong, easy to carry, and fully customisable in
                colour and finish to match your brand.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-amber-400">Premium</div>
                  <div className="text-xs text-gray-400">bespoke finishes</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">500 units</div>
                  <div className="text-xs text-gray-400">MOQ</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">10–14 days</div>
                  <div className="text-xs text-gray-400">production</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Nationwide</div>
                  <div className="text-xs text-gray-400">Irish delivery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-amber-500 text-gray-950 font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors"
                >
                  Get a Luxury Bag Quote
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
                alt="Luxury paper bags Ireland – premium die-cut printed carrier bags for luxury brands nationwide"
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

      {/* Key benefits */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Key benefits</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Everything a luxury brand needs from its packaging, built into every bag.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {keyBenefits.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl border border-gray-200 p-5">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-amber-400 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
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

      {/* Finishes */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Bespoke luxury finishes</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Combine finishes to create packaging that feels as premium as what&apos;s inside it.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {finishOptions.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-5 hover:border-amber-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Luxury paper bag examples</h2>
          <p className="text-gray-600 mb-8">Premium die-cut handle bags with bespoke finishes for Irish brands.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 bg-slate-50">
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

      {/* Who uses these */}
      <section className="py-12 lg:py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who uses luxury paper bags?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Irish brands across every premium sector choose die-cut luxury paper bags to elevate their
            customer experience.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {applications.map((app) => (
              <div key={app} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-gray-200">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other bag types */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Other paper bag options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/twisted-handle-paper-bags-ireland"
              className="group flex gap-5 bg-slate-50 rounded-2xl border border-gray-200 p-5 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-gray-100">
                <Image
                  src="/images/products/twisted-handle-bags/1.png"
                  alt="Twisted Handle Paper Bags"
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">Twisted Handle Paper Bags</h3>
                <p className="text-sm text-gray-600 mt-1">Premium rope-style handles for boutiques and gift retail.</p>
                <span className="inline-block mt-2 text-sm font-medium text-blue-600">View options →</span>
              </div>
            </Link>
            <Link
              href="/printed-flat-handle-bags-ireland"
              className="group flex gap-5 bg-slate-50 rounded-2xl border border-gray-200 p-5 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white border border-gray-100">
                <Image
                  src="/images/products/flat-handle-bags/1.png"
                  alt="Printed Flat Handle Bags"
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">Printed Flat Handle Bags</h3>
                <p className="text-sm text-gray-600 mt-1">Everyday branded bags for cafés, delis and takeaway.</p>
                <span className="inline-block mt-2 text-sm font-medium text-blue-600">View options →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Luxury paper bag delivery — nationwide across Ireland
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack delivers <strong>luxury paper bags to Dublin</strong>, Cork, Galway, Limerick, and
            every county in Ireland. Based in Ashbourne, Co. Meath, we supply luxury fashion houses,
            boutiques, jewellers and hospitality brands with premium branded packaging from 500 units.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { city: 'Dublin', detail: 'Flagship stores & boutiques across Dublin city and county' },
              { city: 'Cork & Munster', detail: 'Luxury retail and hospitality brands across Munster' },
              { city: 'Galway & West', detail: 'Boutiques and jewellers across Connacht' },
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
                className="group p-5 rounded-xl border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">{guide.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Luxury paper bag FAQs</h2>
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
          { href: '/twisted-handle-paper-bags-ireland', label: 'Twisted Handle Bags', desc: 'Premium retail paper bags' },
          { href: '/printed-flat-handle-bags-ireland', label: 'Printed Flat Handle Bags', desc: 'Takeaway & café logo bags' },
          { href: '/plain-paper-bags-ireland', label: 'Plain Paper Bags', desc: 'Kraft SOS stock cases' },
          { href: '/wholesale-paper-bags-ireland', label: 'Wholesale Paper Bags', desc: 'Bulk case pricing' },
          { href: '/blog/printed-paper-bag-cost-ireland', label: 'Paper Bag Cost Guide', desc: 'Pricing before you quote' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to elevate your brand&apos;s packaging?
          </h2>
          <p className="text-gray-400 mb-6">
            Luxury die-cut paper bags with bespoke finishes, from 500 units, delivered nationwide across
            Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-amber-500 text-gray-950 font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors"
            >
              Get a Luxury Bag Quote
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
