import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import LabelsOnRollConfigurator from '../components/labels/LabelsOnRollConfigurator';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';

const PAGE_URL = `${SITE_URL}/labels-on-a-roll`;
const HERO_IMAGE = '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png';

const galleryImages = [
  {
    src: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png',
    alt: 'Custom round jar labels Ireland — printed product label on a glass jar for shops, cafés and food packaging',
  },
  {
    src: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-dispenser-box-square-round.png',
    alt: 'Labels on a roll Ireland with dispenser box — square and round printed roll labels for retail, promotions and caution stickers',
  },
  {
    src: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-pvc-transparent-cafe-dispenser.webp',
    alt: 'PVC transparent labels on a roll Ireland — branded café stickers in a dispenser box for product and packaging labels',
  },
];

const highlights = [
  'Round, square, rectangle and oval labels from 10 mm to 100 mm',
  'White film, transparent, paper and special appearances',
  'Glossy PP, matt polypropylene and NatureFlex White',
  'Full colour print, optional dispenser box, 40 mm or 76 mm core',
];

const applications = [
  'Jar and bottle product labels',
  'Café, coffee shop and bakery branding',
  'Retail and shop packaging stickers',
  'Promotional and thank-you stickers',
  'Caution, warning and workplace labels',
  'Food and drink packaging labels',
];

const businesses = [
  'Cafés and coffee shops',
  'Pet shops and retail stores',
  'Food producers and packers',
  'Bakeries and delis',
  'Warehouses and workplaces',
  'E-commerce brands across Ireland',
];

const keyBenefits = [
  {
    title: 'Product & jar labels',
    desc: 'Round printed labels for jars, bottles and packed goods — full colour branding for shops and producers in Ireland.',
  },
  {
    title: 'Dispenser boxes',
    desc: 'Labels on a roll with an optional dispenser per roll — square or round stickers ready to peel for retail and workplace use.',
  },
  {
    title: 'PVC & transparent film',
    desc: 'White film or transparent PVC-style labels on a roll for cafés, packaging and branded product stickers.',
  },
];

const specifications = [
  { label: 'Shapes', value: 'Round, square, rectangle, oval' },
  { label: 'Sizes', value: '10, 20, 30, 40, 50, 60, 70, 75, 80, 100 mm' },
  { label: 'Material appearance', value: 'White film, transparent, paper, special' },
  { label: 'Material', value: 'Glossy PP, matt polypropylene, NatureFlex White' },
  { label: 'Printing', value: 'Full colour' },
  { label: 'Dispenser', value: 'No dispenser, or dispenser per roll' },
  { label: 'Roll winding', value: '0°, 90°, 180°, 270°' },
  { label: 'Core diameter', value: '40 mm or 76 mm' },
  { label: 'Delivery', value: 'Nationwide Ireland from Ashbourne, Co. Meath' },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Custom labels on a roll for cafés, shops and food packaging across Dublin city and county' },
  { city: 'Cork & Munster', detail: 'Printed roll labels and dispenser boxes for retailers and producers in Cork, Limerick and Kerry' },
  { city: 'Galway & West', detail: 'Jar labels, product stickers and PVC roll labels for Connacht businesses' },
  { city: 'Nationwide', detail: 'Delivery to every county in Ireland from our Ashbourne print unit' },
];

const seoSections = [
  {
    title: 'Custom Labels on a Roll in Ireland',
    paragraphs: [
      'PrintNPack prints **custom labels on a roll in Ireland** for product packaging, shops, cafés and workplaces. Choose round, square, rectangle or oval labels from 10 mm to 100 mm, then select white film, transparent, paper or special appearance — with glossy PP, matt polypropylene or NatureFlex White.',
      'Orders are produced in Ashbourne, Co. Meath and delivered nationwide. Use the quote builder above to set shape, size, material, dispenser, roll winding and core, then request a quotation for **printed roll labels Ireland**.',
    ],
  },
  {
    title: 'Round Jar Labels & Product Stickers',
    paragraphs: [
      '**Round jar labels** are widely used on glass jars, bottles and packed goods — from food and drink to pet products and retail gifts. Full colour printing puts your shop name, product name or offer on every lid or side panel.',
      'If you need **custom product labels Ireland** for a small batch or an ongoing supply, configure a round or oval size in the builder and tell us how many rolls you need. We also print square and rectangle labels for boxes, bags and bottles.',
    ],
  },
  {
    title: 'Labels on a Roll with Dispenser Boxes',
    paragraphs: [
      'Add a **dispenser per roll** for labels that peel cleanly at the counter, packing bench or warehouse. Dispenser boxes suit promotional stickers, thank-you labels, caution labels and everyday product stickers — square or round, supplied on a roll.',
      'This is the practical format for Irish cafés, retailers and workplaces that apply labels throughout the day. Choose 40 mm or 76 mm core and roll winding to match how you apply the labels.',
    ],
  },
  {
    title: 'PVC, Transparent & White Film Roll Labels',
    paragraphs: [
      '**Transparent labels on a roll** and white film labels are used for café branding, lids, packaging and product stickers where a clean film finish is needed. Glossy PP is the standard eco-friendly polypropylene option; matt polypropylene gives a quieter look; NatureFlex White is the biodegradable face stock.',
      'Search terms such as **PVC labels on a roll Ireland**, **transparent stickers Ireland** and **printed labels Dublin** all point to this product. Configure appearance and material in the builder so the quote matches the film you need.',
    ],
  },
];

const faqs = [
  {
    q: 'Where can I order labels on a roll in Ireland?',
    a: 'PrintNPack prints custom labels on a roll in Ashbourne, Co. Meath and delivers nationwide — including Dublin, Cork, Galway and every county. Configure shape, size and material in the quote builder, then request a quotation.',
  },
  {
    q: 'What label shapes and sizes do you print?',
    a: 'Round, square, rectangle and oval, in 10, 20, 30, 40, 50, 60, 70, 75, 80 and 100 mm. Rectangle and oval use a separate width and height from that list.',
  },
  {
    q: 'Do you supply labels in a dispenser box?',
    a: 'Yes. You can order labels on a roll with no dispenser, or with a dispenser per roll — used for café, retail and workplace labels that need to peel quickly.',
  },
  {
    q: 'Can I get transparent or white film labels?',
    a: 'Yes. Material appearance options are white film, transparent, paper and special, with glossy PP, matt polypropylene or NatureFlex White. Printing is full colour.',
  },
  {
    q: 'Do you deliver custom roll labels across Ireland?',
    a: 'Yes. We deliver printed labels on a roll throughout Ireland from our Ashbourne unit, including Dublin, Cork, Galway, Limerick and nationwide courier.',
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

const productLd = buildProductLd({
  name: 'Custom Labels on a Roll Ireland',
  description:
    'Custom labels on a roll in Ireland — round jar labels, square and oval stickers, PVC transparent film and dispenser boxes. Glossy PP, matt polypropylene and NatureFlex White. Nationwide delivery from Ashbourne.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Labels on a Roll Ireland | Printed Roll Labels Dublin',
  description:
    'Custom labels on a roll in Ireland. Round jar labels, dispenser boxes, PVC and transparent film. Printed in Ashbourne with nationwide delivery.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'Labels on a Roll Ireland', item: PAGE_URL },
  ],
};

export default function LabelsOnARollPage() {
  const title = 'Custom Labels on a Roll Ireland | Printed Roll Labels Dublin';
  const description =
    'Custom labels on a roll in Ireland — round jar labels, square stickers, PVC transparent film and dispenser boxes. 10–100 mm. Glossy PP, matt PP, NatureFlex. Quote from Ashbourne, nationwide delivery.';

  const openQuote = () => {
    if (typeof document !== 'undefined') {
      document.getElementById('quote-builder')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="labels on a roll ireland, custom roll labels ireland, printed labels ireland, jar labels ireland, product labels ireland, pvc labels on a roll, transparent labels ireland, label dispenser ireland, round stickers on a roll, labels dublin, labels ashbourne"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <meta property="og:locale" content="en_IE" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Labels on a Roll Ireland</li>
          </ol>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-stone-950 border-b border-blue-900/40 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-300 uppercase tracking-[0.2em] mb-4">
                Printed roll labels
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Custom Labels on a Roll Ireland
              </h1>
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                Printed labels on a roll for jars, packaging, cafés and workplaces across Ireland. Round, square,
                rectangle or oval — white film, transparent PVC-style film or paper — with optional dispenser boxes.
                Full colour from Ashbourne, delivered nationwide.
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-200">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/30 text-blue-200 flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-blue-800/50 shadow-2xl bg-stone-900">
              <Image
                src={HERO_IMAGE}
                alt="Custom round jar labels Ireland — printed product label on a glass jar"
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
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Quote builder</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Configure your labels on a roll</h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">
              Choose shape, size, material, dispenser, winding and core, then request a quotation for printed roll labels in Ireland.
            </p>
          </div>
          <LabelsOnRollConfigurator />
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Label types we print</h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Round jar labels, dispenser-box roll labels, and PVC transparent café stickers — the formats Irish shops and producers search for.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {keyBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-stone-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{benefit.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Applications</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {applications.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">Who we supply</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {businesses.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
                    <span className="text-blue-600 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                  </summary>
                  <p className="px-5 pb-4 text-stone-600 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related print products"
        links={[
          { href: '/vinyl-stickers', label: 'Vinyl Stickers', desc: 'Die-cut stickers and window decals' },
          { href: '/posters', label: 'Custom Posters', desc: 'A4 to A0 poster printing Ireland' },
          { href: '/printing-ashbourne', label: 'Printing Ashbourne', desc: 'Local collection from Co. Meath' },
          { href: '/printing-ireland', label: 'Printing Ireland', desc: 'Nationwide print and packaging' },
        ]}
      />

      <section className="bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Request a labels on a roll quote</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Configure your roll in the builder, then send the quotation request.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button type="button" onClick={openQuote} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors">Get Free Quote</button>
            <a href="tel:+353894157369" className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold py-3.5 px-8 rounded-xl border border-gray-700 transition-colors">Call +353 89 415 7369</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
