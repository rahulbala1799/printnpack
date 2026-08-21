import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import FlagConfigurator from '../components/flags/FlagConfigurator';

const PAGE_URL = `${SITE_URL}/custom-printed-flags-ireland`;
const HERO_IMAGE = '/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg';

const galleryImages = [
  {
    src: '/images/products/custom-printed-flags/custom-printed-flags-ireland-gaa-club.jpg',
    alt: 'Custom printed GAA club flag Ireland — full-colour sublimation flag flying at a sports pitch',
  },
  {
    src: '/images/products/custom-printed-flags/custom-printed-flags-ireland-cricket-club.jpg',
    alt: 'Custom printed cricket club flag Ireland — branded sports flag on a white flagpole',
  },
];

const keyBenefits = [
  'Custom printed in any size',
  'Full-colour, single-sided sublimation printing',
  'Approximately 95% show-through on the reverse',
  'Durable and suitable for outdoor use',
  'Standard and recycled polyester options available',
  'Multiple finishing options, including eyelets and pole sleeves',
  'Washable at temperatures up to 30°C',
  'Available to order from one flag',
  'Suitable for businesses, clubs, sports teams and events',
  'Delivery available throughout Ireland',
];

const applications = [
  'GAA Clubs & Sports Teams',
  'Cricket & Rugby Clubs',
  'Schools & Colleges',
  'Community Organisations',
  'Businesses & Retail',
  'Festivals & Events',
  'Promotional Displays',
  'Corporate Branding',
];

const specifications = [
  { label: 'Material', value: 'Polyester 110gsm, recycled polyester 110gsm or mesh polyester 115gsm' },
  { label: 'Printing', value: 'Single-sided, full colour' },
  { label: 'Printing method', value: 'Dye sublimation' },
  { label: 'Transparency', value: 'Approximately 95% show-through' },
  { label: 'Quantity', value: 'Available from one piece' },
  { label: 'Finishing options', value: 'Eyelets, reinforced edges, pole sleeves and outrigger tunnels' },
  { label: 'Washing instructions', value: 'Machine wash at a maximum of 30°C; do not tumble dry' },
  { label: 'Outdoor use', value: 'Suitable for rain and demanding weather conditions; take indoors during very strong winds' },
];

const seoSections = [
  {
    title: 'Custom Printed Flags for Irish Businesses, Clubs & Events',
    body: 'Make your business, club or event stand out with high-quality custom printed flags from PrintNPack Ireland. Designed in any size and printed in vibrant full colour, our personalised flags are ideal for businesses, GAA clubs, cricket clubs, schools, community organisations, festivals, sporting events and promotional displays.',
  },
  {
    title: 'Durable Polyester Flags with Vibrant Sublimation Printing',
    body: 'Our standard flags are made from durable 110gsm polyester, with recycled polyester and mesh options also available. Each flag is printed using high-quality sublimation printing for bright, long-lasting colours. The material offers approximately 95% show-through, allowing your design to remain visible from the reverse side.',
    link: { href: '/banners-ireland', label: 'banners Ireland' },
  },
  {
    title: 'Flexible Sizes, Finishes & Low Minimum Orders',
    body: 'Choose from a range of sizes, shapes and finishing options, including reinforced edges, eyelets and pole sleeves. Flags can be ordered from just one piece, making them suitable for individual clubs and small businesses as well as larger promotional campaigns. For oversized flags, multiple printed sections can be professionally stitched together to create a bespoke solution.',
  },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Custom flags for businesses, GAA clubs and events across Dublin' },
  { city: 'Cork & Munster', detail: 'Printed sports and promotional flags for clubs in Munster' },
  { city: 'Galway & West', detail: 'Personalised flags for community organisations in Connacht' },
  { city: 'Nationwide', detail: 'Delivery to every county in Ireland from Ashbourne, Co. Meath' },
];

const faqs = [
  {
    q: 'Where can I order custom printed flags in Ireland?',
    a: 'PrintNPack supplies custom printed flags to businesses, GAA clubs, cricket clubs, schools and events throughout Ireland. Configure your size, material and finishing online or contact us for a bespoke quotation — with nationwide delivery from Ashbourne, Co. Meath.',
  },
  {
    q: 'What is the minimum order quantity for custom flags?',
    a: 'Flags can be ordered from just one piece, making them suitable for individual clubs, schools and small businesses as well as larger promotional campaigns.',
  },
  {
    q: 'What materials are available?',
    a: 'Our flags are available in polyester 110gsm, recycled polyester 110gsm and mesh polyester 115gsm. Each is printed using dye sublimation for vibrant, long-lasting full-colour results with approximately 95% show-through on the reverse.',
  },
  {
    q: 'What finishing options can I choose?',
    a: 'Choose from eyelets, reinforced edges, pole sleeves, outrigger tunnels, cord and loop, white or black hooks, and various ring reinforcement options to suit your flagpole setup.',
  },
  {
    q: 'Is the flagpole included?',
    a: 'No. The flagpole is not included. We supply the custom printed flag only — select your finishing option to match your existing pole or mounting hardware.',
  },
  {
    q: 'Do you deliver custom flags nationwide in Ireland?',
    a: 'Yes. PrintNPack delivers custom printed flags to Dublin, Cork, Galway, Limerick and every county in Ireland.',
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
    { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: `${SITE_URL}/banners-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Custom Printed Flags', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Custom Printed Flags Ireland',
  description:
    'Custom printed flags Ireland — full-colour sublimation flags for GAA clubs, businesses and events. Polyester & mesh options, order from 1 flag, nationwide delivery.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Printed Flags Ireland | Personalised Flags for Clubs & Businesses',
  description:
    'Custom printed flags Ireland — vibrant full-colour flags for GAA clubs, businesses, schools & events. Sublimation printing, order from 1 flag, Dublin & nationwide delivery.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Custom printed flags Ireland' },
  dateModified: '2026-08-19',
};

export default function CustomPrintedFlagsIreland() {
  const title = 'Custom Printed Flags Ireland | Personalised Flags for Clubs & Businesses';
  const description =
    'Custom printed flags Ireland — vibrant full-colour flags for GAA clubs, businesses, schools & events. Sublimation printing, order from 1 flag, Dublin & nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed flags ireland, personalised flags ireland, branded flags dublin, gaa club flags ireland, sports flags ireland, promotional flags ireland, sublimation flags ireland, custom flags ireland, printed flags ireland, festival flags ireland, business flags ireland, polyester flags ireland, flag printing ireland"
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
        <meta property="og:image:alt" content="Custom printed GAA club flag Ireland — full-colour sublimation sports flag" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-slate-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/banners-ireland" className="hover:text-slate-700">Banners Ireland</Link></li>
            <li>/</li>
            <li className="text-slate-800 font-medium">Custom Printed Flags</li>
          </ol>
        </div>
      </nav>

      {/* Quote builder */}
      <section id="configure" className="py-12 lg:py-16 bg-stone-50 scroll-mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Quote builder</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Select size, material &amp; finishing</h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Choose your flag size, quantity, material and finishing options below, then request a quotation
              for your custom printed flag.
            </p>
          </div>
          <FlagConfigurator />
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-[0.2em] mb-4">
                Wide Format · Order from 1 Flag
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Custom Printed Flags Ireland — Vibrant Full-Colour Flags for Clubs, Businesses &amp; Events
              </h1>
              <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                Make your business, club or event stand out with high-quality{' '}
                <strong className="text-white">custom printed flags from PrintNPack Ireland</strong>. Designed in any
                size and printed in vibrant full colour, our personalised flags are ideal for businesses, GAA clubs,
                cricket clubs, schools, community organisations, festivals, sporting events and promotional displays.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Durable 110gsm polyester with sublimation printing, approximately 95% show-through, and finishing
                options including eyelets and pole sleeves. Available from just one flag with delivery throughout Ireland.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-blue-400">From 1 flag</div>
                  <div className="text-xs text-slate-400">no large MOQ</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Sublimation</div>
                  <div className="text-xs text-slate-400">full colour</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">95%</div>
                  <div className="text-xs text-slate-400">show-through</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Nationwide</div>
                  <div className="text-xs text-slate-400">Irish delivery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#configure"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  Configure Your Flag
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={HERO_IMAGE}
                alt="Custom printed GAA club flag Ireland — full-colour sublimation flag at a sports pitch"
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

      {/* SEO content */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {seoSections.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed">
                {section.body}
                {section.link && (
                  <>
                    {' '}
                    <Link href={section.link.href} className="text-blue-700 hover:underline font-medium">
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Custom flag examples</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Full-colour sublimation printed flags for GAA clubs, cricket clubs, businesses and community organisations across Ireland.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
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
      <section className="py-12 lg:py-16 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Key benefits</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Premium custom flags with vibrant sublimation printing — built for outdoor use across Ireland.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {keyBenefits.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Product specifications</h2>
          <p className="text-slate-600 mb-8">Technical details for our custom printed flags.</p>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <tbody>
                {specifications.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <th className="text-left font-semibold text-slate-900 px-5 py-4 w-1/3 align-top border-b border-slate-100">
                      {row.label}
                    </th>
                    <td className="text-slate-600 px-5 py-4 border-b border-slate-100 leading-relaxed">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            <strong>Please note:</strong> The flagpole is not included.
          </div>
        </div>
      </section>

      {/* Who uses */}
      <section className="py-12 lg:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who orders custom printed flags?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            From GAA clubs and cricket teams to festivals and corporate events — custom flags make your brand impossible to miss.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {applications.map((app) => (
              <div key={app} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Custom flag delivery — nationwide across Ireland
          </h2>
          <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack delivers <strong>custom printed flags to Dublin</strong>, Cork, Galway, Limerick, and every
            county in Ireland. Based in Ashbourne, Co. Meath, we supply GAA clubs, sports teams, schools, businesses
            and event organisers with vibrant full-colour flags.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryAreas.map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-900 mb-1">{city}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Custom printed flags — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More wide format printing"
        links={[
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'PVC banners, roll-ups and wide format hub' },
          { href: '/vinyl-banners', label: 'Vinyl Banners', desc: 'Outdoor PVC banner printing' },
          { href: '/roll-up-banners', label: 'Roll Up Banners', desc: 'Portable trade show displays' },
          { href: '/foamex-ireland', label: 'Foamex Boards', desc: 'Rigid display boards for retail' },
          { href: '/posters', label: 'Custom Posters', desc: 'Poster printing Ireland' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Order custom flags in Ireland
          </h2>
          <p className="text-slate-400 mb-6">
            Contact PrintNPack today for pricing or request a quotation for a bespoke size — custom printed flags for
            your business, sports club, school or upcoming event, delivered throughout Ireland.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="#configure"
              className="inline-flex items-center bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
            >
              Configure Your Flag
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
