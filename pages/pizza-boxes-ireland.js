import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import { PLAIN_PRODUCTS, getPlainProductPath, getPlainProductPathById } from '../data/plain-products';
import PackagingIcon, { isPlaceholderImage } from '../components/PackagingIcon';
import { buildProductListItem } from '../lib/schema';

const PAGE_URL = `${SITE_URL}/pizza-boxes-ireland`;

const wholesaleBoxes = PLAIN_PRODUCTS.filter((p) => p.category === 'Pizza Boxes').sort(
  (a, b) => parseInt(a.name, 10) - parseInt(b.name, 10)
);

const sizeGuide = [
  { size: '7"', use: 'Personal, kids meals, lunch specials' },
  { size: '9"', use: 'Small pizzas, side orders' },
  { size: '10"', use: 'Small–medium takeaway orders' },
  { size: '12"', use: 'Most popular — standard medium pizzas' },
  { size: '14"', use: 'Large pizzas, family sharing' },
  { size: '16"', use: 'Extra-large and family boxes' },
];

const guides = [
  {
    href: '/custom-pizza-boxes-ireland',
    title: 'Custom Printed Pizza Boxes',
    desc: 'Pizza boxes with logo from 500 units.',
  },
  {
    href: '/plain-pizza-boxes-ireland',
    title: 'Plain Pizza Boxes',
    desc: 'Kraft boxes in 100-pack cases.',
  },
  {
    href: '/pizza-boxes-wholesale-ireland',
    title: 'Wholesale Pizza Boxes',
    desc: 'Bulk supply for takeaways & restaurants.',
  },
  {
    href: '/pizza-box-faq-ireland',
    title: 'Pizza Box FAQ',
    desc: 'Instant answers on pricing, printing, sizes & delivery.',
  },
  {
    href: '/blog/pizza-box-sizes-ireland',
    title: 'Pizza Box Sizes Guide',
    desc: 'Which sizes Irish takeaways should stock first.',
  },
  {
    href: '/blog/custom-pizza-box-cost-ireland',
    title: 'Custom Pizza Box Cost Guide',
    desc: 'How pricing works before you request a quote.',
  },
];

const faqs = [
  {
    q: 'Where can I buy pizza boxes in Ireland?',
    a: 'PrintNPack supplies pizza boxes across Ireland — custom printed boxes from 500 units, and plain kraft corrugated boxes for immediate wholesale order. We deliver nationwide to Dublin, Cork, Galway, and all counties.',
  },
  {
    q: 'What is the most popular pizza box size in Ireland?',
    a: 'The 12-inch pizza box is the most popular size for Irish takeaways, followed by 14-inch for large and family orders. Most operators stock 12" and 14" as their core sizes.',
  },
  {
    q: 'Can I get custom printed pizza boxes with my logo?',
    a: 'Yes. Our custom pizza boxes include full-colour CMYK printing, free design support, and MOQ from 500 units. Production takes 5–7 business days after artwork approval.',
  },
  {
    q: 'Do you sell plain pizza boxes for wholesale?',
    a: 'Yes. We stock plain kraft corrugated pizza boxes in 7", 9", 10", 12", 14", and 16" sizes with tiered case pricing and fast delivery across Ireland.',
  },
  {
    q: 'Are your pizza boxes recyclable in Ireland?',
    a: 'Our kraft corrugated pizza boxes are fully recyclable through Irish household and commercial paper recycling streams. Custom printed boxes use food-safe, recyclable board.',
  },
  {
    q: 'Do you deliver pizza boxes to Dublin?',
    a: 'Yes. We deliver pizza boxes to Dublin and the greater Dublin area, as well as Cork, Galway, Limerick, and all counties nationwide. Plain wholesale boxes ship quickly; custom printed boxes take 5–7 business days after artwork approval.',
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
    { '@type': 'ListItem', position: 2, name: 'Pizza Boxes Ireland', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pizza Boxes Ireland',
  description: 'Custom printed and wholesale plain pizza boxes for Irish restaurants and takeaways.',
  itemListElement: [
    buildProductListItem({
      position: 1,
      name: 'Custom Printed Pizza Boxes Ireland',
      url: `${SITE_URL}/custom-pizza-boxes-ireland`,
      price: '0.17',
    }),
    ...wholesaleBoxes.slice(0, 7).map((p, i) => {
      const productUrl = `${SITE_URL}${getPlainProductPath(p)}`;
      return buildProductListItem({
        position: i + 2,
        name: p.name,
        url: productUrl,
        price: p.caseTiers?.[0]?.pricePerCase,
        image:
          p.imageSrc && !isPlaceholderImage(p.imageSrc) ? `${SITE_URL}${p.imageSrc}` : undefined,
      });
    }),
  ],
};

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pizza Boxes Ireland | Custom Printed & Wholesale Supply',
  description:
    'Buy pizza boxes in Ireland — custom printed branded boxes and plain kraft wholesale. All sizes, fast nationwide delivery for restaurants and takeaways.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  about: {
    '@type': 'Thing',
    name: 'Pizza box packaging Ireland',
  },
  dateModified: '2026-06-18',
};

export default function PizzaBoxesIreland() {
  const title = 'Pizza Boxes Ireland | Plain, Printed & Custom Pizza Boxes';
  const description =
    'Buy pizza boxes in Ireland — custom printed boxes with logo from 500 units, plain kraft wholesale in 100-pack cases, and bulk supply for takeaways. Fast delivery nationwide.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="pizza boxes ireland, pizza box ireland, pizza box supplier ireland, custom pizza boxes, wholesale pizza boxes, pizza boxes dublin, pizza box printing, takeaway pizza boxes, corrugated pizza boxes ireland, branded pizza boxes"
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
        <meta property="og:image" content={`${SITE_URL}/images/pizza-boxes/PIZZA_BOX_1.jpg`} />
        <meta property="og:image:alt" content="Pizza boxes Ireland – custom printed and wholesale supply" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/pizza-boxes/PIZZA_BOX_1.jpg`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Pizza Boxes Ireland</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                Ireland&apos;s Pizza Box Supplier
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Pizza Boxes Ireland
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you need <strong>custom printed pizza boxes</strong> with your logo or{' '}
                <strong>plain kraft pizza boxes</strong> for wholesale, PrintNPack is Ireland&apos;s
                go-to supplier for restaurants, pizzerias, and takeaways. All standard sizes, fast
                nationwide delivery, and competitive pricing.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">From €0.17</div>
                  <div className="text-xs text-gray-500">per box</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">500+ units</div>
                  <div className="text-xs text-gray-500">custom MOQ</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center">
                  <div className="text-sm font-bold text-gray-900">Nationwide</div>
                  <div className="text-xs text-gray-500">delivery</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/custom-pizza-boxes-ireland"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Custom Printed Boxes
                </Link>
                <Link
                  href="/plain-pizza-boxes-ireland"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Plain Pizza Boxes
                </Link>
                <Link
                  href="/pizza-boxes-wholesale-ireland"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Wholesale Bulk
                </Link>
                <Link
                  href="/pizza-box-faq-ireland"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium px-2 py-3 transition-colors text-sm"
                >
                  Pizza box FAQ →
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_1.jpg"
                alt="Pizza boxes Ireland – custom printed and wholesale corrugated pizza box supply"
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

      {/* Two paths */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Choose your pizza box option
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Branded custom print, plain kraft case packs, or wholesale bulk supply — each page covers a different buying path.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/custom-pizza-boxes-ireland"
              className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                <Image
                  src="/images/pizza-boxes/PIZZA_BOX_5.jpg"
                  alt="Custom printed pizza boxes Ireland with logo branding"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="400px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                Custom Printed — Pizza Boxes with Logo
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Personalised pizza boxes with full-colour logo print. MOQ from 500 units, free design
                service, 5–7 day production. Sizes 7&quot; to 20&quot;.
              </p>
              <span className="text-blue-600 font-semibold text-sm">View custom printed →</span>
            </Link>

            <Link
              href="/plain-pizza-boxes-ireland"
              className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-orange-300 hover:shadow-lg transition-all"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                <Image
                  src="/images/pizza-boxes/PIZZA_BOX_7.jpg"
                  alt="Plain kraft pizza boxes Ireland – 100 pack case quantities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="400px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                Plain Kraft Pizza Boxes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Brown kraft corrugated boxes in case quantities — typically 100 per case on popular sizes.
                Order online with tiered case pricing.
              </p>
              <span className="text-orange-600 font-semibold text-sm">View plain boxes →</span>
            </Link>

            <Link
              href="/pizza-boxes-wholesale-ireland"
              className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-slate-400 hover:shadow-lg transition-all"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-5 bg-slate-100 flex items-center justify-center">
                <Image
                  src="/images/pizza-boxes/PIZZA_BOX_3.jpg"
                  alt="Wholesale pizza boxes Ireland – bulk takeaway supply"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="400px"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors mb-2">
                Wholesale Pizza Boxes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Bulk plain and custom printed supply for busy takeaways, pizzerias and restaurant groups.
                Tiered case pricing and nationwide delivery.
              </p>
              <span className="text-slate-700 font-semibold text-sm">View wholesale →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Size guide */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Pizza box sizes for Irish takeaways
              </h2>
              <p className="text-gray-600 mb-6">
                The right pizza box size keeps food secure during delivery and reduces waste. Most Irish
                takeaways stock 12&quot; and 14&quot; as their core sizes. Read our{' '}
                <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline font-medium">
                  complete pizza box sizes guide
                </Link>{' '}
                for detailed advice.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-900">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {sizeGuide.map((row) => (
                      <tr key={row.size}>
                        <td className="px-4 py-3 font-medium text-gray-900">{row.size}</td>
                        <td className="px-4 py-3 text-gray-600">{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_3.jpg"
                alt="Pizza box sizes Ireland – 7 inch to 16 inch corrugated boxes for takeaways"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale products */}
      {wholesaleBoxes.length > 0 && (
        <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Wholesale plain pizza boxes
            </h2>
            <p className="text-gray-600 mb-8">
              Order kraft corrugated pizza boxes online with tiered case pricing.{' '}
              <Link href="/plain-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
                View plain pizza boxes Ireland
              </Link>
              {' '}or{' '}
              <Link href="/plain-packaging?category=Pizza+Boxes" className="text-blue-600 hover:underline font-medium">
                browse all case SKUs
              </Link>
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {wholesaleBoxes.map((product) => (
                <Link
                  key={product.id}
                  href={getPlainProductPath(product)}
                  className="group bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-square mb-3 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                    {isPlaceholderImage(product.imageSrc) ? (
                      <PackagingIcon category={product.category} className="w-full h-full" />
                    ) : (
                      <Image
                        src={product.imageSrc}
                        alt={`${product.name} – wholesale pizza box Ireland`}
                        fill
                        className="object-contain p-2"
                        sizes="200px"
                        unoptimized={process.env.NODE_ENV === 'production'}
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Corrugated · Wholesale Ireland</p>
                  <span className="inline-block mt-3 text-xs font-medium text-blue-600">View product →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Delivery across Ireland */}
      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Pizza box delivery across Ireland
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            PrintNPack supplies <strong>pizza boxes in Dublin</strong>, Cork, Galway, Limerick, Waterford,
            and nationwide. Based in Ashbourne, Co. Meath, we deliver to restaurants, pizzerias, and
            takeaways across all 26 counties — whether you need a single case of plain 12&quot; boxes or a
            full custom print run with your branding.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { city: 'Dublin', detail: 'Same-week delivery to Dublin city & county' },
              { city: 'Cork & Munster', detail: 'Regular supply to Cork, Limerick & Kerry' },
              { city: 'Galway & West', detail: 'Wholesale boxes to Connacht takeaways' },
              { city: 'Nationwide', detail: 'All counties — Leinster, Ulster & beyond' },
            ].map(({ city, detail }) => (
              <div key={city} className="rounded-xl border border-gray-200 bg-slate-50 p-5">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Pizza box guides &amp; resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Pizza box FAQs
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Quick answers to the most common questions.{' '}
                <Link href="/pizza-box-faq-ireland" className="text-blue-600 hover:underline font-medium">
                  View all 30+ questions
                </Link>
              </p>
            </div>
            <Link
              href="/pizza-box-faq-ireland"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-xl border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm shrink-0"
            >
              Full FAQ hub →
            </Link>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-gray-200 p-5 open:shadow-sm"
              >
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
            Ready to order pizza boxes?
          </h2>
          <p className="text-blue-100 mb-6">
            Custom printed from 500 units, or plain wholesale with fast Ireland delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/custom-pizza-boxes-ireland"
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get a Custom Quote
            </Link>
            <Link
              href="/quote"
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
