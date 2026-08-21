import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import GreaseproofSheetConfigurator from '../components/greaseproof/GreaseproofSheetConfigurator';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { GREASEPROOF_MIN_QUANTITY } from '../data/greaseproof-sheets-options';

const PAGE_URL = `${SITE_URL}/greaseproof-sheets-ireland`;
const HERO_IMAGE = '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg';

const galleryImages = [
  {
    src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-branded-burger-wrap.jpg',
    alt: 'Custom printed greaseproof sheets Ireland — branded burger wrap with logo on white 45 gsm greaseproof paper for takeaways',
  },
  {
    src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-bakery-tray-liner.jpg',
    alt: 'Printed greaseproof paper Ireland — branded bakery tray liner with pastries on custom greaseproof sheets for cafés and patisseries',
  },
  {
    src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-burger-tray-liner.png',
    alt: 'Printed greaseproof paper Ireland — custom pattern greaseproof sheet lining a burger tray in a restaurant',
  },
  {
    src: '/images/products/greaseproof-sheets/greaseproof-sheets-ireland-sandwich-wrap.png',
    alt: 'Branded greaseproof paper Ireland — custom printed sandwich wrap sheets for delis and bakeries',
  },
];

const highlights = [
  'Food grade white greaseproof paper — 45 gsm',
  'Food safe inks in 1, 2 or full colour digital printing',
  'Microwaveable — resistant to heat and cold temperatures',
  'Various sizes for wrapping, fast food trays and plates',
];

const applications = [
  'Sandwich and deli wrapping',
  'Burger and fast food tray liners',
  'Bakery pastries and baked goods',
  'Takeaway and delivery orders',
  'Restaurant plate liners',
  'Food truck and street food service',
];

const businesses = [
  'Takeaways and fast food outlets',
  'Restaurants and gastropubs',
  'Bakeries and patisseries',
  'Delis and sandwich shops',
  'Cafés and coffee shops',
  'Catering and event companies',
  'Hotels and hospitality',
  'Food trucks and street food vendors',
];

const keyBenefits = [
  {
    title: 'Custom Logo Printing',
    desc: 'Print your logo and branding with food safe inks in 1, 2 or full colour.',
  },
  {
    title: 'Food Grade Material',
    desc: 'White 45 gsm greaseproof paper — microwaveable and resistant to heat or cold.',
  },
  {
    title: 'Multiple Sizes',
    desc: 'Square, rectangular and tray sizes for wrapping, lining and plating food.',
  },
];

const specifications = [
  { label: 'Material', value: 'White Greaseproof Paper' },
  { label: 'Thickness', value: '45 gsm' },
  { label: 'Printing Technique', value: 'Full colour digital | 1 or 2 colour PMS' },
  { label: 'Min. order quantity', value: `${GREASEPROOF_MIN_QUANTITY} pieces` },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Custom printed greaseproof sheets for takeaways, restaurants and bakeries across Dublin' },
  { city: 'Cork & Munster', detail: 'Branded greaseproof paper for food service businesses in Cork, Limerick and Kerry' },
  { city: 'Galway & West', detail: 'Printed greaseproof sheets for cafés, delis and catering in Connacht' },
  { city: 'Nationwide', detail: 'Delivery to every county in Ireland from Ashbourne, Co. Meath' },
];

const seoSections = [
  {
    title: 'Custom Printed Greaseproof Paper for Irish Food Businesses',
    paragraphs: [
      'PrintNPack supplies **custom printed greaseproof sheets in Ireland** for takeaways, restaurants, bakeries, delis, cafés and catering companies who want professional branded food wrapping. Our white 45 gsm greaseproof paper is food grade, microwaveable and resistant to both heat and cold temperatures — making it ideal for wrapping sandwiches, lining burger trays, covering fast food orders or dressing plates.',
      'Print your logo with **food safe inks** in 1 colour, 2 colour or full colour digital printing. Whether you run a busy takeaway in Dublin, a bakery in Cork or a restaurant in Galway, custom greaseproof paper helps reinforce your brand every time food leaves your kitchen.',
    ],
  },
  {
    title: 'Greaseproof Sheets for Takeaways, Restaurants & Bakeries',
    paragraphs: [
      'Ideal for takeaways, restaurants, bakeries and more — we offer various sizes for wrapping food, lining fast food trays and plate applications. Greaseproof paper is a practical, cost-effective way to present food professionally while protecting trays, baskets and plates from grease and moisture.',
      'From branded sandwich wraps for delis to repeating logo patterns on burger tray liners, our **printed greaseproof paper** gives Irish food businesses a consistent, recognisable look. Minimum order quantity is 500 pieces — contact us to configure your size, print colours and quantity using the quote builder above.',
    ],
  },
  {
    title: 'Food Safe Printing on White Greaseproof Paper',
    paragraphs: [
      'Our greaseproof sheets are printed using food safe inks suitable for food contact applications. The material is **white greaseproof paper at 45 gsm** — background colour printing is not possible because the stock itself is white. Your artwork prints directly onto the paper in your chosen colours.',
      'Printing options include **full colour digital**, **1 colour PMS** and **2 colour PMS** — giving you flexibility whether you need a simple single-colour logo or a full colour brand pattern across every sheet.',
    ],
  },
  {
    title: 'Greaseproof Paper Sizes & Applications',
    paragraphs: [
      'Choose from a range of sheet sizes including 14 × 14 cm, 15 × 30 cm, 21.5 × 31.5 cm, 30 × 45 cm, 35 × 45 cm and 43 × 31.5 cm. Sizes are suited to sandwich wrapping, burger and chip tray lining, bakery items and general food service. Circle sizes for plates are also available — mention your requirements in the quote request.',
      'Greaseproof paper is widely used across the Irish food service industry for **sandwich wrapping**, **burger tray liners**, **bakery packaging**, **takeaway orders** and **restaurant plating**. If you need a size not listed, contact our team and we will advise on the best option for your product.',
    ],
  },
];

const faqs = [
  {
    q: 'Where can I order custom printed greaseproof sheets in Ireland?',
    a: 'PrintNPack supplies custom printed greaseproof paper sheets to takeaways, restaurants, bakeries, delis and catering businesses throughout Ireland. Use the quote builder on this page to select your size, printing option and quantity, then request a quotation. We deliver nationwide from Ashbourne, Co. Meath.',
  },
  {
    q: 'What material are your greaseproof sheets made from?',
    a: 'Our greaseproof sheets are made from white greaseproof paper at 45 gsm. The material is food grade, microwaveable and resistant to heat and cold temperatures. Note: the material is white — background colour printing is not possible.',
  },
  {
    q: 'What printing options are available for greaseproof paper?',
    a: 'We offer full colour digital printing, 1 colour PMS and 2 colour PMS — all using food safe inks. Minimum order quantity is 500 pieces.',
  },
  {
    q: 'What sizes of greaseproof sheets do you supply?',
    a: 'We supply greaseproof sheets in sizes including 14 × 14 cm, 15 × 30 cm, 21.5 × 31.5 cm, 30 × 45 cm, 35 × 45 cm and 43 × 31.5 cm. These suit sandwich wrapping, fast food tray lining, bakery items and general food service. Circle sizes for plates are also available on request.',
  },
  {
    q: 'Are greaseproof sheets suitable for takeaways and restaurants?',
    a: 'Yes. Greaseproof paper is ideal for takeaways, restaurants, bakeries, delis, cafés, food trucks and catering. Common uses include wrapping sandwiches, lining burger and chip trays, covering takeaway orders and dressing plates.',
  },
  {
    q: 'Do you deliver printed greaseproof paper nationwide in Ireland?',
    a: 'Yes. PrintNPack delivers custom printed greaseproof sheets to Dublin, Cork, Galway, Limerick, Belfast and every county in Ireland.',
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
    { '@type': 'ListItem', position: 3, name: 'Greaseproof Sheets', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Custom Greaseproof Sheets Ireland',
  description:
    'Custom printed greaseproof paper sheets Ireland — food safe logo printing for takeaways, restaurants and bakeries. White 45 gsm greaseproof paper, 1/2/full colour, nationwide delivery.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Greaseproof Sheets Ireland | Printed Greaseproof Paper Dublin',
  description:
    'Custom printed greaseproof sheets Ireland — branded food wrapping for takeaways, restaurants & bakeries. Food safe inks, 45 gsm white greaseproof paper. Dublin, Cork, Galway & nationwide delivery.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Custom greaseproof sheets Ireland' },
  dateModified: '2026-08-20',
};

export default function GreaseproofSheetsIreland() {
  const title = 'Custom Greaseproof Sheets Ireland | Printed Greaseproof Paper Dublin';
  const description =
    'Custom printed greaseproof sheets Ireland — branded food wrapping for takeaways, restaurants & bakeries. Food safe inks, 45 gsm white paper, 1/2/full colour. Dublin, Cork, Galway & nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="greaseproof sheets ireland, printed greaseproof paper ireland, custom greaseproof sheets dublin, branded greaseproof paper ireland, greaseproof paper printing ireland, food safe greaseproof printing, takeaway greaseproof paper, bakery greaseproof sheets ireland, burger wrap paper ireland, sandwich wrapping paper ireland, greaseproof paper dublin, greaseproof sheets cork, greaseproof paper galway, custom food wrapping ireland, printed food paper ireland"
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

      <nav className="bg-teal-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Greaseproof Sheets</li>
          </ol>
        </div>
      </nav>

      <section className="py-14 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">Quote builder</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Configure your greaseproof sheets</h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">
              Select your size, printing options and quantity, then request a quotation for custom printed greaseproof paper in Ireland.
            </p>
          </div>
          <GreaseproofSheetConfigurator />
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-teal-950 via-emerald-950 to-stone-950 border-b border-teal-900/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.15),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sm font-semibold text-teal-300 uppercase tracking-[0.2em] mb-4">
                Food Packaging Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Custom Greaseproof Sheets Ireland
              </h1>
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                Ideal for takeaways, restaurants, bakeries and more! We have various sizes ideal for wrapping,
                putting on fast food trays or even circle sizes for plates. Print your logo with food safe inks
                in 1, 2 or full colour. Made from food grade paper and resistant to heat or cold temperatures,
                the Greaseproof paper is also microwaveable!
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-200">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal-500/30 text-teal-200 flex items-center justify-center">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-teal-800/50 shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Custom printed greaseproof sheets Ireland — branded white greaseproof paper for takeaways and restaurants"
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
            <p className="mt-6 text-stone-600 leading-relaxed rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
              <span className="font-semibold text-amber-900">Note:</span>{' '}
              The material is white, background colour printing is not possible.
            </p>
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
                    <span className="text-teal-600 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                  </summary>
                  <p className="px-5 pb-4 text-stone-600 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">Branded greaseproof paper examples</h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Custom printed greaseproof sheets for sandwich wraps, burger tray liners and takeaway food presentation across Ireland.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
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
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More packaging products"
        links={[
          { href: '/custom-pizza-boxes-ireland', label: 'Custom Pizza Boxes', desc: 'Branded pizza box printing Ireland' },
          { href: '/custom-cake-boxes-ireland', label: 'Custom Cake Boxes', desc: 'Bakery packaging Ireland' },
          { href: '/burger-boxes-ireland', label: 'Burger Boxes', desc: 'Takeaway burger packaging' },
          { href: '/plain-packaging', label: 'Plain Packaging', desc: 'Wholesale food packaging supplies' },
        ]}
      />

      <section className="py-14 bg-teal-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Request a quotation</h2>
          <p className="text-stone-300 mb-6 leading-relaxed">
            Contact Print n Pack today for a quotation on custom printed greaseproof sheets in Dublin, Cork, Galway and throughout Ireland. Send us your artwork or design brief and our team will help you create branded food wrapping that represents your business.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
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
