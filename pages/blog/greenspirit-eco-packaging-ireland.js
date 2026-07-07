import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import PizzaPackagingPromo from '../../components/blog/PizzaPackagingPromo';
import { getPlainProductPathById } from '../../data/plain-products';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_SLUG = 'greenspirit-eco-packaging-ireland';
const canonicalUrl = `${siteUrl}/blog/${PAGE_SLUG}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Plain Wholesale Delivery',
  description:
    'PrintNPack supplies Greenspirit compostable and eco-friendly packaging across Ireland — aqueous hot cups, bagasse lids, wooden cutlery, greaseproof sheets and 50+ sustainable SKUs. Plain wholesale case pricing with nationwide delivery.',
  image: `${siteUrl}/images/plain-packaging/100103.webp`,
  author: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    url: siteUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-07-07',
  dateModified: '2026-07-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  keywords:
    'Greenspirit packaging Ireland, Greenspirit eco packaging, compostable packaging Ireland, eco friendly packaging Ireland, plain packaging Ireland delivery, compostable hot cups Ireland, Greenspirit hot cups, wooden cutlery Ireland wholesale, eco friendly takeaway packaging Ireland, sustainable food packaging Ireland',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Greenspirit packaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greenspirit is a range of eco-focused foodservice packaging including PFAS-free aqueous-coated hot cups, bagasse compostable lids, FSC wooden cutlery, bamboo stirrers, compostable greaseproof sheets, kraft paper food trays and recyclable rPET cold cups. PrintNPack stocks the full Greenspirit plain wholesale range for Irish cafes, restaurants and caterers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy Greenspirit compostable cups in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack Ireland supplies Greenspirit aqueous-coated double wall hot cups in 8oz, 10oz, 12oz and 16oz, plus matching bagasse and aqueous paper lids. Order by the case online with tiered wholesale pricing and nationwide delivery to Dublin, Cork, Galway and all counties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does PrintNPack deliver eco packaging all over Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers plain packaging and Greenspirit eco products nationwide across Ireland — from our base in Ashbourne, Co. Meath to restaurants, cafes, hotels, delis and caterers in every county. Case-based wholesale orders ship with fast nationwide delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Greenspirit packaging fully compostable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Greenspirit lines are compostable or home-compostable, including aqueous-coated hot cups, bagasse lids, wooden cutlery, bamboo stirrers, compostable greaseproof sheets and pulp cup carriers. rPET cold cups and juice cups in the Greenspirit range are recyclable rather than compostable. Always match the cup to the correct compostable or recyclable lid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I order plain Greenspirit packaging in bulk without custom printing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All Greenspirit products are available as plain wholesale stock in our 736+ product plain packaging catalog. No print MOQ — order by the case with tiered pricing (1–3, 4–6, 7–9 and 10+ cases). Browse the full range at printnpack.ie/plain-packaging or request a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why switch to Greenspirit eco packaging in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Irish food businesses are moving away from PFAS-lined cups, EPS containers and single-use plastic cutlery under EU and Irish law. Greenspirit gives you a credible sustainability story — compostable cups and lids, wooden cutlery and kraft trays — without sacrificing heat performance or presentation. Sourcing from an Irish supplier means faster restock and nationwide delivery.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Greenspirit Eco Packaging Ireland',
      item: canonicalUrl,
    },
  ],
};

const greenspiritCategories = [
  {
    title: 'Compostable hot cups & lids',
    body: 'Greenspirit aqueous-coated double wall cups are PFAS-free and designed for hot coffee, tea and soup service. Pair them with matching bagasse lids (80mm for 8oz, 90mm for 12/16oz) or aqueous paper sip lids for a fully compostable cup system.',
    links: [
      { id: '100102', label: '8oz aqueous hot cups' },
      { id: '100103', label: '12oz aqueous hot cups' },
      { id: '100104', label: '16oz aqueous hot cups' },
      { id: '100154', label: '80mm bagasse lids' },
      { id: '100155', label: '90mm bagasse lids' },
    ],
    hub: { href: '/hot-cups-ireland', label: 'Hot cups hub →' },
  },
  {
    title: 'Wooden cutlery & bamboo stirrers',
    body: 'Plastic cutlery is restricted under Irish single-use plastics rules. Greenspirit wooden knives, forks, dessert spoons, teaspoons and chip forks are FSC-sourced and compostable — ideal for takeaways, festivals and deli counters.',
    links: [
      { id: '140009', label: 'Wooden knives' },
      { id: '140010', label: 'Wooden forks' },
      { id: '140011', label: 'Wooden dessert spoons' },
      { id: '140013', label: 'Wooden teaspoons' },
      { id: '140080', label: 'Bamboo stirrers 5.5"' },
    ],
    hub: { href: '/plain-packaging', label: 'Browse cutlery →' },
  },
  {
    title: 'Compostable greaseproof & paper plates',
    body: 'Line trays and wrap hot food with Greenspirit compostable greaseproof sheets. White paper plates in 6", 7" and 9" sizes complete an eco-friendly counter service setup for events, canteens and casual dining.',
    links: [
      { id: '1081427', label: 'Compostable greaseproof sheets' },
      { id: '110025', label: '6" paper plates' },
      { id: '110026', label: '7" paper plates' },
      { id: '110027', label: '9" paper plates' },
    ],
    hub: { href: '/plain-napkins-tableware-ireland', label: 'Napkins & tableware →' },
  },
  {
    title: 'Kraft food trays & cup carriers',
    body: 'Greenspirit kraft paper food trays from ½lb to 3lb are grease-resistant and recyclable — popular for fish & chips, street food and deli counters. Pulp cup carrier trays hold 2 or 4 hot drinks securely for takeaway and delivery.',
    links: [
      { id: '120266', label: '½lb kraft food tray' },
      { id: '120268', label: '2lb kraft food tray' },
      { id: '100315', label: '2-cup pulp carrier tray' },
      { id: '100316', label: '4-cup pulp carrier tray' },
    ],
    hub: { href: '/plain-packaging', label: 'All plain packaging →' },
  },
  {
    title: 'Recyclable rPET cold cups',
    body: 'For smoothies, juices and iced drinks, Greenspirit rPET cold cups and matching dome and flat lids are made from recycled PET and are fully recyclable. A practical swap for conventional plastic cold cups where compostable paper is not required.',
    links: [
      { id: '100237', label: '7/9oz rPET juice cups' },
      { id: '120192', label: '10oz rPET juice cups' },
      { id: '100431', label: '95mm rPET sip lids' },
    ],
    hub: { href: '/hot-cups-ireland', label: 'Cups & lids range →' },
  },
];

const featuredProducts = [
  {
    src: '/images/plain-packaging/100103.webp',
    alt: '12oz Greenspirit aqueous compostable hot cups Ireland wholesale',
    name: '12oz Greenspirit Aqueous Hot Cups',
    price: 'Tiered case pricing',
    badge: 'Compostable',
    href: getPlainProductPathById('100103'),
  },
  {
    src: '/images/plain-packaging/100102.webp',
    alt: '8oz Greenspirit compostable hot cups Ireland – eco coffee cups',
    name: '8oz Greenspirit Aqueous Hot Cups',
    price: 'Tiered case pricing',
    badge: 'PFAS-Free',
    href: getPlainProductPathById('100102'),
  },
  {
    src: '/images/plain-packaging/140009.webp',
    alt: 'Greenspirit wooden knives Ireland – compostable cutlery wholesale',
    name: 'Greenspirit Wooden Knives',
    price: '10×100 per case',
    badge: 'Compostable',
    href: getPlainProductPathById('140009'),
  },
  {
    src: '/images/plain-packaging/100315.webp',
    alt: 'Greenspirit 2-cup pulp carrier tray Ireland – eco takeaway',
    name: '2-Cup Pulp Carrier Tray',
    price: 'Tiered case pricing',
    badge: 'Compostable',
    href: getPlainProductPathById('100315'),
  },
  {
    src: '/images/plain-packaging/100104.webp',
    alt: '16oz Greenspirit compostable hot cups Ireland – eco takeaway cups',
    name: '16oz Greenspirit Aqueous Hot Cups',
    price: 'Tiered case pricing',
    badge: 'Compostable',
    href: getPlainProductPathById('100104'),
  },
  {
    src: '/images/plain-packaging/120266.webp',
    alt: 'Greenspirit kraft paper food tray Ireland – eco takeaway tray',
    name: '½lb Kraft Food Tray',
    price: 'Tiered case pricing',
    badge: 'Recyclable',
    href: getPlainProductPathById('120266'),
  },
];

const deliveryCounties = [
  'Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Kildare', 'Meath',
  'Wicklow', 'Kerry', 'Donegal', 'Mayo', 'Tipperary', 'Clare', 'Wexford',
];

export default function GreenspiritEcoPackagingIreland() {
  const title =
    'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Nationwide Plain Delivery';
  const description =
    'PrintNPack is your Irish supplier for Greenspirit compostable and eco-friendly packaging — aqueous hot cups, bagasse lids, wooden cutlery, greaseproof sheets and 50+ sustainable SKUs. Plain wholesale case pricing with delivery across Ireland.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Greenspirit packaging Ireland, Greenspirit eco packaging, compostable packaging Ireland, eco friendly packaging Ireland, plain packaging Ireland delivery, compostable hot cups Ireland, Greenspirit hot cups, wooden cutlery Ireland wholesale, eco friendly takeaway packaging Ireland, sustainable food packaging Ireland, Greenspirit compostable cups, eco packaging supplier Ireland, plain packaging wholesale Ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}/images/plain-packaging/100103.webp`} />
        <meta
          property="og:image:alt"
          content="Greenspirit compostable hot cups Ireland – eco-friendly wholesale packaging"
        />
        <meta property="article:published_time" content="2026-07-07" />
        <meta property="article:modified_time" content="2026-07-07" />
        <meta property="article:section" content="Sustainability" />
        <meta
          property="article:tag"
          content="Greenspirit, Eco Packaging, Compostable, Ireland, Plain Packaging, Hot Cups"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/plain-packaging/100103.webp`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Greenspirit Eco Packaging Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Sustainability
          </span>
          <span className="text-slate-400 text-sm">7 Jul 2026 · 9 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery &amp; Plain Wholesale Delivery
        </h1>

        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image
            src="/images/plain-packaging/100103.webp"
            alt="Greenspirit compostable aqueous hot cups Ireland – eco-friendly wholesale packaging"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish cafes, coffee shops, delis and caterers are under growing pressure to ditch
            PFAS-lined cups, polystyrene containers and single-use plastic cutlery.{' '}
            <strong>Greenspirit eco packaging</strong> gives food businesses a credible,
            customer-facing sustainability story — compostable hot cups, wooden cutlery, kraft food
            trays and more — without compromising on heat performance or presentation.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>PrintNPack Ireland</strong> stocks 50+ Greenspirit SKUs in our{' '}
            <Link href="/plain-packaging" className="text-green-700 hover:underline">
              plain packaging wholesale
            </Link>{' '}
            range, with tiered case pricing and <strong>nationwide delivery across Ireland</strong>.
            No custom print MOQ — order the eco stock you need today and we ship to Dublin, Cork,
            Galway and every county.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
            <p className="text-green-800 text-sm font-semibold mb-1">Why Greenspirit?</p>
            <p className="text-green-700 text-sm leading-relaxed">
              Greenspirit is one of the most searched eco packaging brands in Irish foodservice.
              The range covers the full takeaway journey — hot drinks, cold juices, food trays,
              cutlery and greaseproof wrap — so you can build a consistent compostable or recyclable
              packaging system from a single Irish supplier.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What Greenspirit Products Does PrintNPack Stock?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            We carry the full Greenspirit plain wholesale line across five core categories. Every
            product is available by the case with tiered pricing — the more cases you order, the
            lower your per-case cost.
          </p>

          {greenspiritCategories.map((cat) => (
            <div key={cat.title} className="mb-8 not-prose">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{cat.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">{cat.body}</p>
              <ul className="space-y-1.5 mb-3">
                {cat.links.map(({ id, label }) => (
                  <li key={id}>
                    <Link
                      href={getPlainProductPathById(id)}
                      className="text-green-700 hover:underline text-sm font-medium"
                    >
                      → {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={cat.hub.href} className="text-sm text-slate-500 hover:text-slate-800">
                {cat.hub.label}
              </Link>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Featured Greenspirit Products — Order Today
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            These are the Greenspirit lines Irish food businesses order most. Click any product to
            see case sizes, tiered pricing and add to your quote.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 not-prose">
          {featuredProducts.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-green-300 hover:shadow-md transition-all"
            >
              <div className="relative h-32 bg-stone-50">
                <Image src={p.src} alt={p.alt} fill className="object-contain p-2" sizes="33vw" />
              </div>
              <div className="p-3">
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                  {p.badge}
                </span>
                <p className="text-sm font-semibold text-slate-900 mt-2 leading-snug group-hover:text-green-700">
                  {p.name}
                </p>
                <p className="text-xs text-slate-500 mt-1">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Compostable vs Recyclable: Know Your Greenspirit Lines
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Not every &ldquo;eco&rdquo; product works the same way. Being clear with staff and
            customers builds trust — and keeps you on the right side of Irish recycling rules.
          </p>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-3">Product type</th>
                  <th className="text-left p-3">End-of-life</th>
                  <th className="text-left p-3">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Aqueous hot cups & bagasse lids', 'Compostable', 'Coffee shops, delis, soup'],
                  ['Wooden cutlery & bamboo stirrers', 'Compostable', 'Takeaway, events, counters'],
                  ['Compostable greaseproof sheets', 'Compostable', 'Wrapping hot food, lining trays'],
                  ['Kraft paper food trays', 'Recyclable', 'Fish & chips, street food'],
                  ['Pulp cup carrier trays', 'Compostable', 'Multi-drink takeaway & delivery'],
                  ['rPET cold cups & lids', 'Recyclable', 'Smoothies, juices, iced drinks'],
                ].map(([type, end, use]) => (
                  <tr key={type} className="bg-white">
                    <td className="p-3 font-medium text-slate-900">{type}</td>
                    <td className="p-3 text-green-700 font-medium">{end}</td>
                    <td className="p-3 text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain Packaging Wholesale — 736+ SKUs, Delivery All Over Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Greenspirit is part of a much larger catalog. PrintNPack&apos;s{' '}
            <Link href="/plain-packaging" className="text-green-700 hover:underline">
              plain packaging wholesale
            </Link>{' '}
            range covers <strong>736+ non-branded products</strong> — hot cups, gloves, pizza boxes,
            refuse sacks, napkins, bagasse meal boxes, foil trays and more. All with the same tiered
            case pricing and nationwide delivery.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Whether you run a single café in Ashbourne or a multi-site catering operation, you can
            mix Greenspirit eco lines with everyday plain stock in one order. No print artwork
            required. No 500-unit MOQ. Just case-based wholesale that ships across Ireland.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 not-prose">
            {deliveryCounties.map((county) => (
              <div
                key={county}
                className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-center text-xs font-medium text-slate-600"
              >
                {county}
              </div>
            ))}
            <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-center text-xs font-semibold text-green-700 col-span-2 sm:col-span-4">
              + all 26 counties — nationwide delivery
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to Build an Eco-Friendly Takeaway Setup
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Switching to Greenspirit does not have to mean replacing everything at once. Most Irish
            food businesses phase in eco packaging over 2–3 order cycles:
          </p>
          <ol className="space-y-4 mb-8 list-none pl-0">
            {[
              {
                step: '1',
                title: 'Start with hot drinks',
                body: 'Swap PE-lined cups for Greenspirit aqueous cups and bagasse lids. This is the highest-visibility change customers notice immediately.',
              },
              {
                step: '2',
                title: 'Replace plastic cutlery',
                body: 'Move to wooden knives, forks and teaspoons. Add bamboo stirrers for coffee service. Compostable and compliant under Irish SUP rules.',
              },
              {
                step: '3',
                title: 'Upgrade food trays & wrap',
                body: 'Switch chip trays and deli packaging to kraft Greenspirit trays and compostable greaseproof sheets.',
              },
              {
                step: '4',
                title: 'Add carriers & cold cups',
                body: 'Pulp cup carriers for multi-drink orders. rPET cold cups for juice and smoothie lines where recyclability is the right story.',
              },
            ].map(({ step, title: stepTitle, body }) => (
              <li key={step} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{stepTitle}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mt-1">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-slate-700 leading-relaxed mb-8">
            For the wider sustainability picture — bagasse burger boxes, kraft pizza boxes and
            recyclable paper bags — see our guides on{' '}
            <Link href="/blog/eco-packaging-for-takeaways-ireland" className="text-green-700 hover:underline">
              eco packaging for takeaways
            </Link>
            ,{' '}
            <Link
              href="/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland"
              className="text-green-700 hover:underline"
            >
              eco-friendly pizza boxes &amp; paper bags
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/eu-ppwr-packaging-regulation-ireland-2026"
              className="text-green-700 hover:underline"
            >
              EU PPWR compliance for Irish food businesses
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 not-prose">
            {faqLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} className="border-l-4 border-green-600 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{name}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <PizzaPackagingPromo />

        <div className="mt-14 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Order Greenspirit Eco Packaging — Delivered Across Ireland
          </h2>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
            Compostable hot cups, wooden cutlery, kraft trays and 736+ plain wholesale products.
            Tiered case pricing, no print MOQ, nationwide delivery from PrintNPack Ireland.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/hot-cups-ireland"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Hot Cups &amp; Lids
            </Link>
            <Link
              href="/plain-packaging"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Plain Packaging Wholesale
            </Link>
          </div>
        </div>

        <p className="mt-8 text-slate-400 text-xs leading-relaxed border-t border-slate-200 pt-6">
          Greenspirit is a third-party eco packaging brand stocked by PrintNPack Ireland. Compostability
          and recyclability claims apply to individual product lines — check product pages for
          certification details. For regulatory compliance (PPWR, Repak), consult{' '}
          <a
            href="https://repak.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Repak
          </a>{' '}
          or a qualified advisor.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 not-prose">
          {[
            {
              href: '/blog/eco-packaging-for-takeaways-ireland',
              title: 'Eco Packaging for Takeaways Ireland',
              desc: 'Bagasse boxes, paper bags and napkins — the full sustainability guide.',
            },
            {
              href: '/blog/plain-packaging-wholesale-ireland',
              title: 'Plain Packaging Wholesale Ireland',
              desc: 'How case pricing works and how to order 736+ SKUs online.',
            },
          ].map(({ href, title: postTitle, desc }) => (
            <Link
              key={href}
              href={href}
              className="block p-5 rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-slate-900 text-sm mb-1">{postTitle}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

        <Link href="/blog" className="inline-block mt-8 text-sm text-slate-500 hover:text-slate-800">
          ← Back to all guides
        </Link>
      </main>
    </Layout>
  );
}
