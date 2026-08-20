import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';

const PAGE_URL = `${SITE_URL}/custom-cake-boxes-ireland`;
const HERO_IMAGE = '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-luxury-navy-cupcake-window.jpg';

const galleryImages = [
  {
    src: '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-luxury-navy-cupcake-window.jpg',
    alt: 'Luxury custom cake boxes Ireland — navy cupcake box with rose gold foil logo and clear display window',
  },
  {
    src: '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-burgundy-cupcake-window.jpg',
    alt: 'Custom printed cake boxes Ireland — burgundy patisserie cupcake box with gold foil branding and window panel',
  },
  {
    src: '/images/products/custom-cake-boxes/custom-cake-boxes-ireland-green-cupcake-window.jpg',
    alt: 'Premium cake packaging Ireland — forest green artisan cupcake box with gold foil logo and clear window',
  },
];

const productTypes = [
  'Celebration cakes',
  'Wedding cakes',
  'Cupcakes and muffins',
  'Pastries and desserts',
  'Brownies and cookies',
  'Bakery gift sets',
  'Takeaway and delivery orders',
];

const keyBenefits = [
  {
    title: 'Custom Brand Printing',
    desc: 'Your logo, brand colours, artwork and marketing message on every box.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Food-Safe Materials',
    desc: 'Durable, food-safe boards suitable for direct or indirect contact with bakery products.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Sizes & Styles',
    desc: 'Wide selection of box sizes, styles and board grades for every bakery product.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const optionalFeatures = [
  'Clear display windows',
  'Internal inserts',
  'Handles',
  'Premium finishes',
  'Custom structural designs',
];

const luxuryFinishes = [
  { title: 'Foil Stamping', desc: 'Gold, silver or coloured foil for logos, borders and decorative accents.' },
  { title: 'Embossing & Debossing', desc: 'Raised or pressed detailing that adds tactile depth to your bakery branding.' },
  { title: 'Spot UV', desc: 'Glossy highlights over a matte base to make key design elements stand out.' },
  { title: 'Lamination', desc: 'Matte or gloss lamination for a polished, durable finish on printed artwork.' },
  { title: 'Speciality Boards', desc: 'Textured and speciality boards for a premium patisserie presentation.' },
  { title: 'Window Panels & Inserts', desc: 'Clear display windows and custom inserts to showcase and protect your products.' },
];

const businesses = [
  'Independent bakeries',
  'Home-based cake businesses',
  'Cafés and coffee shops',
  'Patisseries',
  'Restaurants and hotels',
  'Supermarkets and food retailers',
  'Catering and event companies',
  'Online bakery businesses',
];

const seoSections = [
  {
    title: 'Custom Printed Cake Boxes for Your Brand',
    body: 'Turn every order into an opportunity to promote your business with professionally branded cake boxes. Your packaging can be customised with your logo, brand colours, artwork, contact details and marketing message, creating a consistent and memorable experience for your customers. Optional features include clear display windows, internal inserts, handles, premium finishes and custom structural designs.',
  },
  {
    title: 'Food-Safe and Reliable Cake Packaging',
    body: 'Our cake packaging boxes are manufactured using durable, food-safe materials suitable for direct or indirect contact with bakery products. Strong construction helps keep cakes and desserts secure during collection, transport, retail display and delivery. Whether you need lightweight takeaway boxes or sturdy packaging for larger celebration cakes, PrintNPack can produce a solution designed around the weight, dimensions and presentation of your products.',
    link: { href: '/custom-pizza-boxes-ireland', label: 'custom pizza boxes' },
  },
  {
    title: 'Eco-Friendly Cake Box Options',
    body: 'PrintNPack also offers eco-friendly cake packaging, including recyclable boards and responsibly sourced materials. We can help you select packaging that balances sustainability, food safety, durability and visual appeal without compromising your brand presentation.',
    link: { href: '/eco-bagasse-burger-boxes', label: 'eco-friendly food packaging' },
  },
];

const deliveryAreas = [
  { city: 'Dublin', detail: 'Custom cake boxes for bakeries, patisseries and cafés across Dublin' },
  { city: 'Cork & Munster', detail: 'Branded cake packaging for independent bakeries and food retailers in Munster' },
  { city: 'Galway & West', detail: 'Luxury and standard cake boxes for patisseries and catering in Connacht' },
  { city: 'Nationwide', detail: 'Delivery to every county in Ireland from Ashbourne, Co. Meath' },
];

const guides = [
  { href: '/custom-pizza-boxes-ireland', title: 'Custom Pizza Boxes', desc: 'Branded pizza packaging for takeaways and restaurants.' },
  { href: '/luxury-magnetic-closure-boxes-ireland', title: 'Magnetic Closure Boxes', desc: 'Luxury rigid gift boxes with custom printing.' },
  { href: '/custom-printed-tissue-paper-ireland', title: 'Custom Tissue Paper', desc: 'Branded tissue for premium bakery unboxing.' },
];

const faqs = [
  {
    q: 'Where can I order custom cake boxes in Ireland?',
    a: 'PrintNPack supplies custom printed cake boxes to bakeries, patisseries, cafés, home-based cake businesses and food retailers throughout Ireland. Contact us with your product dimensions, branding requirements and quantity for a bespoke quotation — with nationwide delivery from Ashbourne, Co. Meath.',
  },
  {
    q: 'What types of cake boxes can you produce?',
    a: 'We offer a wide selection of box sizes, styles and board grades suitable for celebration cakes, wedding cakes, cupcakes, pastries, brownies, cookies, bakery gift sets and takeaway or delivery orders. Optional features include clear display windows, internal inserts, handles and custom structural designs.',
  },
  {
    q: 'Are your cake boxes food-safe?',
    a: 'Yes. Our cake packaging boxes are manufactured using durable, food-safe materials suitable for direct or indirect contact with bakery products, with strong construction to keep cakes and desserts secure during transport and display.',
  },
  {
    q: 'Do you offer luxury finishes for cake boxes?',
    a: 'Yes. For artisan bakeries and premium patisseries we offer luxury finishes including gold, silver or coloured foil, embossing and debossing, spot UV, matte or gloss lamination, textured boards, clear window panels, custom inserts and premium rigid-box styles.',
  },
  {
    q: 'Do you deliver custom cake boxes nationwide in Ireland?',
    a: 'Yes. PrintNPack delivers bespoke cake packaging to Dublin, Cork, Galway, Limerick and every county in Ireland.',
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
    { '@type': 'ListItem', position: 3, name: 'Custom Cake Boxes', item: PAGE_URL },
  ],
};

const productLd = buildProductLd({
  name: 'Custom Cake Boxes Ireland',
  description:
    'Custom printed cake boxes Ireland — branded bakery packaging for cupcakes, celebration cakes and desserts. Food-safe materials, luxury finishes, nationwide delivery.',
  image: `${SITE_URL}${HERO_IMAGE}`,
  url: PAGE_URL,
});

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Cake Boxes Ireland | Custom Printed Bakery Packaging Dublin',
  description:
    'Custom cake boxes Ireland — branded printed packaging for bakeries, patisseries and cafés. Cupcakes, celebration cakes, luxury finishes. Dublin, Cork, Galway & nationwide delivery.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: { '@type': 'Thing', name: 'Custom cake boxes Ireland' },
  dateModified: '2026-08-20',
};

export default function CustomCakeBoxesIreland() {
  const title = 'Custom Cake Boxes Ireland | Custom Printed Bakery Packaging Dublin';
  const description =
    'Custom cake boxes Ireland — branded printed packaging for bakeries, patisseries & cafés. Cupcakes, celebration cakes, luxury finishes. Dublin, Cork, Galway & nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom cake boxes ireland, custom printed cake boxes dublin, cake packaging ireland, branded cake boxes ireland, luxury cake boxes ireland, cupcake boxes ireland, bakery packaging ireland, wedding cake boxes ireland, patisserie boxes ireland, cake box printing ireland, bespoke cake boxes ireland, eco friendly cake boxes ireland, celebration cake boxes ireland, custom bakery boxes ireland"
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
        <meta property="og:image:alt" content="Luxury custom cake boxes Ireland — navy cupcake box with rose gold foil and display window" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      </Head>

      <nav className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <li><Link href="/" className="hover:text-stone-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-stone-700">Products</Link></li>
            <li>/</li>
            <li className="text-stone-800 font-medium">Custom Cake Boxes</li>
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
                Bakery Packaging · Nationwide Ireland
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Custom Cake Boxes Ireland — Branded Bakery Packaging for Every Occasion
              </h1>
              <p className="text-lg text-stone-300 mb-4 leading-relaxed">
                PrintNPack supplies high-quality <strong className="text-white">custom cake boxes in Ireland</strong>,
                helping bakeries, cafés, cake makers and food businesses protect their products while presenting
                their brand professionally.
              </p>
              <p className="text-stone-400 mb-8 leading-relaxed">
                From individual cupcakes and pastries to celebration cakes and premium desserts, our{' '}
                <strong className="text-stone-200">custom printed cake boxes</strong> are made to suit your products,
                branding and practical packaging requirements.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-amber-300">Custom print</div>
                  <div className="text-xs text-stone-400">your branding</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-rose-300">Food-safe</div>
                  <div className="text-xs text-stone-400">materials</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Luxury</div>
                  <div className="text-xs text-stone-400">finishes</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-white">Nationwide</div>
                  <div className="text-xs text-stone-400">Irish delivery</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
                >
                  Get a Cake Box Quote
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
                alt="Luxury custom cake boxes Ireland — navy cupcake box with rose gold foil logo and clear display window"
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
      <section className="py-12 lg:py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Why choose PrintNPack cake boxes?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Protect your products, promote your business and give customers a memorable unboxing experience.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {keyBenefits.map((item) => (
              <div key={item.title} className="bg-amber-50/50 rounded-xl border border-amber-100 p-5">
                <div className="w-10 h-10 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Wide selection of box sizes, styles and board grades',
              'Eco-friendly and recyclable options available',
              'Custom cake boxes throughout Ireland',
            ].map((item) => (
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

      {/* Product types */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Cake boxes for every product</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            We offer packaging solutions suitable for a wide range of bakery products and order types.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {productTypes.map((item) => (
              <div key={item} className="rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm font-medium text-stone-700">
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
            <h3 className="font-bold text-stone-900 mb-3">Optional features</h3>
            <div className="flex flex-wrap gap-2">
              {optionalFeatures.map((feature) => (
                <span key={feature} className="inline-flex items-center rounded-full bg-white border border-amber-200 px-3 py-1 text-sm text-stone-700">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Luxury cake box examples</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            Custom printed cupcake and patisserie boxes with display windows, foil stamping and premium finishes
            for Irish bakeries and food brands.
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
                      View {section.link.label} →
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury finishes */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Luxury cake boxes</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">
            For artisan bakeries, premium patisseries and gifting collections, we offer luxury cake boxes with
            high-end printing and finishing options that transform standard bakery packaging into an attractive,
            premium product customers will be proud to carry or give as a gift.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {luxuryFinishes.map((item) => (
              <div key={item.title} className="rounded-xl border border-stone-200 bg-stone-50 p-5 hover:border-amber-200 hover:shadow-md transition-all">
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses */}
      <section className="py-12 lg:py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Cake boxes for businesses across Ireland</h2>
          <p className="text-stone-400 mb-8 max-w-2xl">
            Our custom bakery packaging is suitable for businesses of all sizes — from short promotional requirements
            to larger production orders, with options to suit different quantities, budgets and turnaround requirements.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {businesses.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-stone-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-12 lg:py-16 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Custom cake box delivery — nationwide across Ireland
          </h2>
          <p className="text-stone-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack delivers <strong>custom printed cake boxes to Dublin</strong>, Cork, Galway, Limerick,
            and every county in Ireland. Based in Ashbourne, Co. Meath, we supply bakeries, patisseries,
            cafés and food retailers with bespoke cake packaging.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryAreas.map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="font-bold text-stone-900 mb-1">{city}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related packaging */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8">Related bakery packaging</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/custom-pizza-boxes-ireland"
              className="group flex gap-5 bg-white rounded-2xl border border-stone-200 p-5 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-stone-50 border border-stone-100">
                <Image
                  src="/images/pizza-boxes/PIZZA_BOX_1.jpg"
                  alt="Custom pizza boxes Ireland"
                  fill
                  className="object-cover"
                  sizes="96px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Custom Pizza Boxes Ireland</h3>
                <p className="text-sm text-stone-600 mt-1">Branded pizza packaging for takeaways and restaurants.</p>
                <span className="inline-block mt-2 text-sm font-medium text-amber-700">View pizza boxes →</span>
              </div>
            </Link>
            <Link
              href="/luxury-magnetic-closure-boxes-ireland"
              className="group flex gap-5 bg-white rounded-2xl border border-stone-200 p-5 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-stone-50 border border-stone-100">
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
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Luxury Magnetic Closure Boxes</h3>
                <p className="text-sm text-stone-600 mt-1">Premium rigid gift boxes for artisan and luxury brands.</p>
                <span className="inline-block mt-2 text-sm font-medium text-amber-700">View luxury boxes →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 lg:py-16 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-xl border border-stone-200 bg-stone-50 p-5 hover:border-amber-200 hover:shadow-sm transition-all group"
              >
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">{guide.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8 text-center">
            Custom cake boxes — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-stone-200 rounded-xl p-5 bg-white">
                <h3 className="font-bold text-stone-900 mb-2">{q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="More packaging for Irish food businesses"
        links={[
          { href: '/custom-pizza-boxes-ireland', label: 'Custom Pizza Boxes', desc: 'Branded pizza packaging for takeaways' },
          { href: '/burger-boxes-ireland', label: 'Burger Boxes', desc: 'Plain and printed bagasse burger boxes' },
          { href: '/custom-printed-coffee-cups-ireland', label: 'Custom Coffee Cups', desc: 'Branded takeaway cups Ireland' },
          { href: '/custom-printed-tissue-paper-ireland', label: 'Custom Tissue Paper', desc: 'Branded tissue for bakery unboxing' },
          { href: '/luxury-paper-bags-ireland', label: 'Luxury Paper Bags', desc: 'Premium carrier bags for patisseries' },
          { href: '/products', label: 'All Products', desc: 'Full print and packaging catalogue' },
        ]}
      />

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Order custom cake boxes from PrintNPack
          </h2>
          <p className="text-stone-400 mb-6">
            Create cake packaging that protects your products, promotes your business and gives customers a
            memorable unboxing experience. Contact PrintNPack today for a quotation on custom printed cake boxes
            in Ireland.
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
