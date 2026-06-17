import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import PizzaPackagingPromo from '../../components/blog/PizzaPackagingPromo';

import { SITE_URL as siteUrl } from '../../lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "EU Packaging Regulation Ireland 2026: What the PPWR Means for Irish Food Businesses",
  description:
    'The EU Packaging and Packaging Waste Regulation (PPWR) takes direct effect across Ireland on 12 August 2026. This guide explains the PFAS ban, recyclability rules, EPR obligations, and how Irish restaurants, takeaways, and retailers can prepare with PPWR-compliant packaging now.',
  image: `${siteUrl}/images/products/bagasse-burger-box/1.png`,
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
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteUrl}/blog/eu-ppwr-packaging-regulation-ireland-2026`,
  },
  keywords:
    'EU packaging regulation Ireland 2026, PPWR Ireland, packaging compliance Ireland, PFAS-free packaging Ireland, eco packaging Ireland, sustainable food packaging Ireland, Repak compliance, recyclable packaging Ireland',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When does the EU PPWR packaging regulation come into effect in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EU Packaging and Packaging Waste Regulation (PPWR, Regulation EU 2025/40) becomes directly applicable across Ireland on 12 August 2026. Unlike older directives, it does not require Irish national transposition — it automatically becomes law on that date. All businesses placing packaging on the Irish market must comply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the PPWR ban on PFAS in food packaging mean for Irish businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From 12 August 2026, food-contact packaging sold or used in Ireland must not contain PFAS (per- and polyfluoroalkyl substances) above specified limits. PFAS have been widely used in grease-resistant coatings on pizza box liners, burger boxes, and paper bags. Irish businesses must switch to PFAS-free alternatives — such as bagasse, uncoated kraft board, or aqueous-coated paper — before the deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the PPWR apply to small businesses and restaurants in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The PPWR applies to any business that places packaging on the EU market, regardless of size. Requirements around recyclable packaging design, PFAS bans, and packaging minimisation apply to all operators. Extended Producer Responsibility (EPR) obligations through Repak apply to businesses placing 10+ tonnes of packaging on the market annually with €1M+ turnover, but smaller businesses must still use compliant packaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PFAS-free food packaging and where can I buy it in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PFAS-free food packaging uses natural or aqueous coatings instead of fluorinated chemical treatments to achieve grease resistance. Options include bagasse (sugarcane fibre) containers, uncoated kraft paperboard, and aqueous-coated food trays. PrintNPack supplies PFAS-free bagasse burger boxes, pizza boxes, and paper bags to Irish restaurants and takeaways, with low minimum orders from 100 units.',
      },
    },
    {
      '@type': 'Question',
      name: 'What packaging must be recyclable under the PPWR by 2030?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the PPWR, all packaging placed on the EU market must be designed for material recycling by January 2030. Packaging will be graded A–E based on recyclability performance, and only grades A–C will be permitted from 2030. From 2038, only grades A and B will be allowed. Businesses should begin switching to mono-material, recyclable packaging now to avoid last-minute compliance costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the PPWR affect Repak EPR fees for Irish businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the PPWR, Extended Producer Responsibility (EPR) eco-fees will be increasingly modulated based on packaging recyclability. Businesses using harder-to-recycle packaging formats will pay higher fees. Irish businesses registered with Repak should audit their packaging portfolio for recyclability grades and prioritise switching to compliant materials to reduce their EPR cost exposure.',
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
      name: 'EU PPWR Packaging Regulation Ireland 2026',
      item: `${siteUrl}/blog/eu-ppwr-packaging-regulation-ireland-2026`,
    },
  ],
};

const timeline = [
  {
    date: '12 August 2026',
    items: [
      'PPWR becomes directly applicable across all EU member states including Ireland',
      'PFAS ban in food-contact packaging takes effect',
      'Packaging minimisation rules enforced (max 40% empty space for e-commerce)',
      'Reuse systems must be operational in relevant sectors',
    ],
  },
  {
    date: '2028',
    items: [
      'Harmonised recycling labelling symbols required on all packaging sold in the EU',
      'Digital product passports (QR codes) rollout begins — linking to material and recyclability data',
    ],
  },
  {
    date: 'January 2030',
    items: [
      'All packaging must achieve recyclability grades A–C minimum',
      'Minimum recycled plastic content targets take effect',
      'Beverage operators must offer 10% of products in reusable packaging formats',
    ],
  },
  {
    date: 'January 2035',
    items: [
      'Packaging recyclability must be demonstrated at scale through actual collection and processing infrastructure',
    ],
  },
  {
    date: 'January 2038',
    items: [
      'Only grades A and B recyclability packaging permitted — all lower-performing formats phased out',
    ],
  },
];

const products = [
  {
    src: '/images/products/bagasse-burger-box/1.png',
    alt: 'Bagasse burger boxes Ireland – PFAS-free compostable food packaging',
    name: 'Bagasse Burger Boxes',
    desc: 'Sugarcane fibre, fully compostable, naturally grease-resistant. PFAS-free and PPWR-ready.',
    href: '/eco-bagasse-burger-boxes',
    badge: 'Compostable',
    badgeColour: 'green',
  },
  {
    src: '/images/pizza-boxes/PIZZA_BOX_1.jpg',
    alt: 'Custom pizza boxes Ireland – PFAS-free recyclable corrugated board',
    name: 'Custom Pizza Boxes',
    desc: 'Food-safe corrugated board with no PFAS chemical treatments. Custom print from 500 units.',
    href: '/custom-pizza-boxes-ireland',
    badge: 'PFAS-Free',
    badgeColour: 'blue',
  },
  {
    src: '/images/products/flat-handle-bags/1.png',
    alt: 'Flat handle paper bags Ireland – branded eco packaging',
    name: 'Flat Handle Paper Bags',
    desc: 'Sustainably sourced kraft paper, eco-friendly inks, fully recyclable. From MOQ 500.',
    href: '/products',
    badge: 'Recyclable',
    badgeColour: 'blue',
  },
  {
    src: '/images/products/sos-bags/1.png',
    alt: 'SOS grab bags Ireland – recyclable takeaway paper bags wholesale',
    name: 'SOS Grab Bags',
    desc: 'Flat-base gusseted bags for takeaway orders. Kraft paper, recyclable, custom print available.',
    href: '/products',
    badge: 'Recyclable',
    badgeColour: 'blue',
  },
];

const wholesaleProducts = [
  {
    src: '/images/plain-packaging/120091.webp',
    alt: 'Corrugated burger clamshell Ireland – wholesale recyclable food packaging',
    name: 'Corrugated Burger Clamshell',
    price: '€24.00 / case',
    badge: 'Recyclable',
  },
  {
    src: '/images/plain-packaging/120139.webp',
    alt: 'Compostable food tray Ireland – bagasse wholesale packaging',
    name: 'Compostable Food Tray',
    price: '€34.70 / case',
    badge: 'Compostable',
  },
  {
    src: '/images/plain-packaging/120075.webp',
    alt: 'Kraft bowls 900ml Ireland – wholesale eco food packaging',
    name: '900ml Kraft Bowls',
    price: '€34.77 / case',
    badge: 'Recyclable',
  },
  {
    src: '/images/plain-packaging/100102.webp',
    alt: 'Aqueous double-wall hot cups Ireland – PFAS-free wholesale',
    name: 'Aqueous DW Hot Cups',
    price: '€29.76 / case',
    badge: 'PFAS-Free',
  },
];

const badgeColours = {
  green: 'bg-green-50 text-green-700',
  blue: 'bg-blue-50 text-blue-700',
};

export default function PPWRPackagingRegulationIreland2026() {
  const title =
    'EU Packaging Regulation Ireland 2026: What the PPWR Means for Irish Food Businesses';
  const description =
    'The EU Packaging and Packaging Waste Regulation (PPWR) hits Ireland on 12 August 2026. Learn what PFAS bans, recyclability mandates, and EPR changes mean for Irish restaurants, takeaways, and retailers — and how to get compliant packaging now.';
  const canonicalUrl = `${siteUrl}/blog/eu-ppwr-packaging-regulation-ireland-2026`;
  const ogImage = `${siteUrl}/images/products/bagasse-burger-box/1.png`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="EU packaging regulation Ireland 2026, PPWR Ireland, PPWR compliance Ireland, packaging regulation Ireland August 2026, PFAS ban food packaging Ireland, PFAS-free packaging Ireland, eco packaging Ireland, recyclable food packaging Ireland, sustainable takeaway packaging Ireland, Repak EPR Ireland, custom pizza boxes Ireland, bagasse burger boxes Ireland, paper bags wholesale Ireland, food packaging compliance Ireland, packaging waste regulation Ireland, packaging rules Ireland 2026"
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
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content="PPWR-compliant bagasse food packaging Ireland – PrintNPack"
        />
        <meta property="article:published_time" content="2026-02-20" />
        <meta property="article:modified_time" content="2026-02-20" />
        <meta property="article:section" content="Compliance Guide" />
        <meta
          property="article:tag"
          content="PPWR, Packaging Regulation, Ireland, Eco Packaging, PFAS, Repak"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">EU PPWR Packaging Regulation Ireland 2026</span>
        </nav>

        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
            Compliance Guide
          </span>
          <span className="text-slate-400 text-sm">20 Feb 2026 · 9 min read</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          EU Packaging Regulation Ireland 2026: What the PPWR Means for Irish Food Businesses
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          The Packaging and Packaging Waste Regulation (PPWR) is the biggest overhaul of food
          packaging compliance in three decades. On <strong>12 August 2026</strong> it becomes law
          across Ireland automatically — no Irish transposition required. Here is what every
          restaurant, takeaway, retailer, and e-commerce business needs to know, and how to act now.
        </p>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-10 border border-slate-100">
          <Image
            src="/images/products/bagasse-burger-box/1.png"
            alt="PPWR-compliant bagasse burger boxes Ireland – PFAS-free eco food packaging from PrintNPack"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-slate max-w-none">

          {/* Urgency callout */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="text-red-800 text-sm font-semibold mb-1">
              Deadline: 12 August 2026 — Less Than 6 Months Away
            </p>
            <p className="text-red-700 text-sm leading-relaxed">
              The PPWR (Regulation EU 2025/40) entered into force on 11 February 2025. Its main
              provisions apply from 12 August 2026. Unlike the 1994 Directive it replaces, this is
              a <strong>regulation</strong> — it takes direct effect in Irish law without any
              national legislation required.
            </p>
          </div>

          {/* What is the PPWR */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What Is the PPWR and Why Does It Matter for Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The <strong>EU Packaging and Packaging Waste Regulation</strong> (PPWR, Regulation EU
            2025/40) replaces the original 1994 Packaging and Packaging Waste Directive. Formally
            adopted by the European Council in December 2024 and published on 22 January 2025, it
            sets out binding rules on packaging design, recyclability, chemical safety, and waste
            reduction across all EU member states.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            For Irish food businesses — from a single-location chipper in Mullingar to a national
            restaurant group — the regulation directly governs the pizza boxes your customers carry
            home, the paper bags your barista hands across the counter, the burger boxes your kitchen
            stacks by the grill, and the cups your coffee machines fill every morning.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Repak, Ireland&apos;s Extended Producer Responsibility (EPR) body, has published
            guidance for Irish businesses and is actively advising producers on how to prepare. The
            window to act is closing fast.
          </p>

          {/* Key stat */}
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 text-4xl font-bold text-green-400">Aug 2026</div>
            <div>
              <p className="font-semibold text-white mb-1">The most important date in Irish packaging compliance</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                PFAS banned from food packaging. Packaging minimisation rules enforced.
                Recyclability obligations begin. And unlike a directive, there is no waiting for
                Dáil legislation — it becomes Irish law automatically on that date.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            The PPWR Timeline for Irish Businesses
          </h2>
          <div className="space-y-0 mb-8">
            {timeline.map(({ date, items }, i) => (
              <div key={date} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 border-2 border-white ring-2 ${
                      i === 0 ? 'bg-red-600 ring-red-600' : 'bg-green-600 ring-green-600'
                    }`}
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 bg-slate-200 flex-1 mt-1" />
                  )}
                </div>
                <div className="pb-8">
                  <p
                    className={`text-sm font-bold uppercase tracking-wide mb-2 ${
                      i === 0 ? 'text-red-600' : 'text-green-700'
                    }`}
                  >
                    {date}
                  </p>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="text-slate-700 text-sm leading-relaxed flex gap-2">
                        <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* PFAS ban */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The PFAS Ban: The Change Irish Food Businesses Must Act on Now
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The most pressing August 2026 obligation for Irish food operators is the{' '}
            <strong>ban on PFAS in food-contact packaging</strong>. Per- and polyfluorinated alkyl
            substances — commonly known as &quot;forever chemicals&quot; — have been widely used in
            coatings that make food packaging grease-resistant. If you are currently using pizza box
            liners, burger boxes, or paper food bags with a fluorinated coating, those products will
            be non-compliant from August.
          </p>

          {/* PFAS product image */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              {
                src: '/images/products/bagasse-burger-box/2.png',
                alt: 'Bagasse burger box open – naturally grease-resistant PFAS-free food packaging Ireland',
              },
              {
                src: '/images/products/bagasse-burger-box/4.png',
                alt: 'Eco bagasse takeaway box with food – sustainable PFAS-free packaging Ireland',
              },
              {
                src: '/images/products/bagasse-burger-box/5.png',
                alt: 'Bagasse food containers stacked – wholesale eco packaging Ireland',
              },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-xl overflow-hidden h-36">
                <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs text-center mb-8">
            Bagasse burger boxes from PrintNPack — naturally grease-resistant without PFAS chemical
            coatings. Fully compostable within 90 days.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-amber-800 text-sm font-semibold mb-2">
              Action Required Before August 2026
            </p>
            <ul className="space-y-2 text-amber-700 text-sm">
              <li className="flex gap-2">
                <span className="font-bold">1.</span>
                <span>
                  Contact your current packaging supplier and request written confirmation that your
                  food-contact packaging is PFAS-free. Ask for a declaration of compliance.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2.</span>
                <span>
                  If confirmation is not available, assume PFAS are present and begin sourcing
                  alternatives immediately. Lead times are already extending across Irish suppliers.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">3.</span>
                <span>
                  Switch to PFAS-free materials: bagasse food containers, uncoated kraft paperboard,
                  or aqueous-coated trays are the most commercially viable alternatives.
                </span>
              </li>
            </ul>
          </div>

          {/* Recyclability */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Recyclability Is No Longer Optional — It Is a Design Requirement
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            By January 2030, all packaging placed on the Irish and EU market must be designed for
            material recycling. The PPWR creates a graded recyclability framework (A–E), where only
            grades A–C will be permitted from 2030, and only A–B from 2038.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Recyclability grades will be determined by the packaging&apos;s material composition,
            whether it can be effectively sorted, and whether actual recycling infrastructure exists
            at scale. Multi-material packaging with inseparable layers — such as plastic-lined paper
            cups or metallised films — will score poorly unless the layers can be mechanically
            separated.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Businesses switching to{' '}
            <strong>mono-material packaging</strong> (pure paper, pure cardboard, pure recycled
            plastic) now are making decisions that will remain compliant through the entire PPWR
            schedule. Businesses that delay risk expensive reformulations under time pressure.
          </p>

          {/* Packaging minimisation */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Packaging Minimisation: No More Oversized Boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The PPWR introduces enforceable minimisation standards. For e-commerce packaging, the
            empty space ratio must not exceed 40% — meaning the internal volume of your box must
            be used by at least 60% product. For food service packaging, minimisation principles
            require that packaging not be meaningfully larger than the product it contains.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            The practical implication for Irish businesses: audit your packaging sizes. If you are
            using a 12-inch pizza box for a 9-inch pizza, or shipping a small gift item in a box
            twice its size, those choices will attract regulatory scrutiny and higher Repak fees
            under the eco-modulated EPR system.
          </p>

          {/* EPR */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Repak & EPR Fees: The Financial Consequence of Non-Compliance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ireland&apos;s EPR scheme operates through Repak. Businesses placing 10 or more tonnes
            of packaging on the Irish market annually, with a turnover of €1 million or more, are
            obligated to register with Repak and pay eco-fees based on the weight and type of
            packaging they use.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Under the PPWR, eco-fees will be progressively <strong>modulated by recyclability
            grade</strong>. Packaging that scores A or B will attract lower fees; packaging that
            scores D or E will attract substantially higher fees — and will ultimately be prohibited
            altogether. The financial incentive to switch to compliant packaging compounds every
            year.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Recyclability Grade</th>
                  <th className="text-left px-4 py-3 font-semibold">Examples</th>
                  <th className="text-left px-4 py-3 font-semibold">Status from 2030</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['A — Excellent', 'Mono-material paper bags, kraft pizza boxes, bagasse containers', 'Permitted · Lowest EPR fees'],
                  ['B — Good', 'Corrugated cardboard, most paper food trays, glass bottles', 'Permitted · Low EPR fees'],
                  ['C — Adequate', 'Some multi-layer paper, certain plastic formats', 'Permitted 2030–2038 · Higher fees'],
                  ['D — Poor', 'Laminated multi-material packaging, metallised film', 'Prohibited from 2038'],
                  ['E — Not recyclable', 'Mixed plastics, EPS food containers (already banned)', 'Prohibited from 2030'],
                ].map(([grade, examples, status], i) => (
                  <tr key={grade} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">{grade}</td>
                    <td className="px-4 py-3 text-slate-700">{examples}</td>
                    <td className="px-4 py-3 text-slate-600">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Product showcase — custom */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            PPWR-Ready Packaging Available Now from PrintNPack
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Every product in the PrintNPack range is designed with the incoming regulatory
            requirements in mind. Whether you need custom-printed packaging for your restaurant brand
            or plain wholesale packaging for your catering operation, our range covers the key
            compliance bases.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {products.map(({ src, alt, name, desc, href, badge, badgeColour }) => (
              <Link
                key={name}
                href={href}
                className="block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {name}
                    </h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeColours[badgeColour]}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Paper bags cross-section image */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/products/flat-handle-bags/2.png"
                alt="Flat handle branded paper bags Ireland – custom printing available, eco-friendly recyclable"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/products/sos-bags/2.png"
                alt="SOS grab bags wholesale Ireland – kraft paper takeaway bags, fully recyclable"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>
          <p className="text-slate-500 text-xs text-center mb-8">
            Custom flat handle bags (left) and plain SOS grab bags (right) — both FSC-certified
            kraft paper, fully recyclable, available with or without custom printing.
          </p>

          {/* Why PrintNPack */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish Businesses Choose PrintNPack for PPWR-Compliant Packaging
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                icon: '🌿',
                title: 'Eco-friendly materials as standard',
                desc: 'From bagasse and kraft to FSC-certified corrugated board, our materials are selected to meet or exceed PPWR recyclability and chemical safety requirements. Every product in our custom range is PFAS-free.',
              },
              {
                icon: '📦',
                title: 'Low minimum orders — from 100 units',
                desc: 'You do not need to commit to large runs to get custom, PPWR-compliant packaging. Whether you are a single-location restaurant or a growing group, we keep minimum orders low so the switch is affordable at any scale.',
              },
              {
                icon: '🚚',
                title: 'Weekly delivery service across Ireland',
                desc: 'The only Irish packaging supplier with a dedicated weekly delivery run — so you are never stockpiling mountains of packaging. Order what you need, when you need it, on a predictable schedule.',
              },
              {
                icon: '⚡',
                title: 'Fast turnaround, same-day dispatch',
                desc: 'Same-day dispatch available on plain packaging lines. Custom printed orders ship in 5–14 business days. As August 2026 approaches and demand surges, businesses that order early will have the advantage.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 text-2xl mt-0.5">{icon}</div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wholesale section */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain Packaging Wholesale — 736+ Products Ready to Ship
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Not every business needs custom printing. Our plain packaging wholesale range covers
            over 736 products — food trays, burger clamshells, kraft bowls, hot cups, lids, napkins,
            cutlery, and more — all available in case quantities at competitive wholesale pricing,
            with nationwide delivery across Ireland.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
            {wholesaleProducts.map(({ src, alt, name, price, badge }) => (
              <div key={name} className="bg-white rounded-xl border border-slate-200 overflow-hidden text-center p-3">
                <div className="relative h-28 w-full mb-3 rounded-lg overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-contain" sizes="25vw" />
                </div>
                <p className="font-semibold text-slate-900 text-xs mb-1 leading-snug">{name}</p>
                <p className="text-green-700 text-xs font-medium mb-1.5">{price}</p>
                <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mb-8 mt-4">
            <Link
              href="/plain-packaging"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Browse all 736+ wholesale products →
            </Link>
          </div>

          {/* 5-step checklist */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            5-Step PPWR Compliance Checklist for Irish Businesses
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Whether you run a Dublin takeaway or a Galway gift shop, here is a practical
            preparation framework for the August 2026 deadline:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                step: '01',
                title: 'Audit every piece of packaging you currently use',
                desc: 'List all boxes, bags, cups, lids, wraps, and labels. Note the material, supplier, and any known coatings. Include e-commerce and secondary packaging as well as consumer-facing food packaging.',
              },
              {
                step: '02',
                title: 'Request PFAS declarations from your suppliers',
                desc: 'Ask for written PFAS-free declarations on all food-contact packaging. If your supplier cannot provide this, begin sourcing alternatives immediately. Do not assume compliance without documentation.',
              },
              {
                step: '03',
                title: 'Identify packaging with recyclability grades D or E',
                desc: 'Multi-layer laminated packaging, metallised films, and mixed-material containers are likely to score D or E. Flag these for replacement before 2030 — and ideally before 2026 if they also contain PFAS.',
              },
              {
                step: '04',
                title: 'Right-size your packaging formats',
                desc: 'Review whether your current box or bag sizes leave more than 40% empty space. For e-commerce in particular, right-sizing is now a legal requirement. Smaller, snugger packaging also reduces your Repak eco-fees.',
              },
              {
                step: '05',
                title: 'Place compliant packaging orders before the summer',
                desc: 'Every Irish packaging supplier will face a wave of last-minute orders in May–July 2026. Lock in your compliant supply chain now. PrintNPack has stock and production capacity available — but that will not last as the deadline approaches.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{step}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pizza box image — to target pizza box keywords */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_3.jpg"
                alt="Custom pizza boxes Ireland – PFAS-free recyclable corrugated board, PPWR compliant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_5.jpg"
                alt="Branded pizza boxes Ireland – food-safe ink printing, eco-friendly packaging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>
          <p className="text-slate-500 text-xs text-center mb-8">
            Custom pizza boxes from PrintNPack — corrugated board, food-safe inks, PFAS-free.
            Available from 500 units with your branding.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            Frequently Asked Questions: EU Packaging Regulation Ireland 2026
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'When does the EU PPWR packaging regulation come into effect in Ireland?',
                a: 'The PPWR becomes directly applicable across Ireland on 12 August 2026. As a regulation (not a directive), it requires no Irish national legislation — it automatically becomes law on that date for all businesses placing packaging on the Irish market.',
              },
              {
                q: 'What does the PFAS ban mean for my food packaging?',
                a: 'From August 2026, food-contact packaging must not contain PFAS above specified concentration limits. PFAS-treated grease-resistant coatings on pizza box liners, burger boxes, and paper bags will be non-compliant. You must switch to PFAS-free alternatives such as bagasse containers, uncoated kraft board, or aqueous-coated paper.',
              },
              {
                q: 'Does the PPWR apply to small restaurants and takeaways in Ireland?',
                a: 'Yes. The PPWR applies to all businesses placing packaging on the EU market. The PFAS ban, recyclability requirements, and packaging minimisation rules apply regardless of business size. EPR obligations through Repak apply to businesses placing 10+ tonnes of packaging on the market annually with €1M+ turnover.',
              },
              {
                q: 'What is PFAS-free food packaging?',
                a: 'PFAS-free food packaging achieves grease resistance without fluorinated chemical coatings. The most common alternatives are bagasse (sugarcane fibre) containers, which are naturally grease-resistant; uncoated kraft paperboard; and aqueous-coated trays. PrintNPack supplies PFAS-free packaging across Ireland.',
              },
              {
                q: 'How will the PPWR affect my Repak EPR fees?',
                a: 'Repak eco-fees will be progressively modulated by packaging recyclability grade. Businesses using packaging that scores A or B recyclability will pay lower fees; harder-to-recycle packaging will attract higher fees. Switching to recyclable, mono-material packaging now reduces both regulatory risk and ongoing EPR cost.',
              },
              {
                q: 'Where can I buy PPWR-compliant packaging in Ireland?',
                a: 'PrintNPack supplies PPWR-ready packaging across Ireland — including PFAS-free bagasse burger boxes, recyclable pizza boxes, kraft paper bags, and 736+ wholesale plain packaging products. Custom printing is available from low minimum orders. Get a free quote at printnpack.ie/quote.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-green-600 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

        </div>

        <PizzaPackagingPromo />

        {/* CTA */}
        <div className="mt-14 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Get PPWR-Compliant Packaging Before August 2026
          </h2>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
            From PFAS-free bagasse burger boxes to custom pizza boxes and paper bags with your
            logo — PrintNPack supplies sustainable, compliant packaging to food businesses across
            all of Ireland. Free design consultation included.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/eco-bagasse-burger-boxes"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Bagasse Packaging
            </Link>
            <Link
              href="/plain-packaging"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Plain Packaging Wholesale
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-slate-400 text-xs leading-relaxed border-t border-slate-200 pt-6">
          This article is for informational purposes only and does not constitute legal or regulatory
          advice. For authoritative compliance guidance, consult the{' '}
          <a
            href="https://repak.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Repak PPWR guidance
          </a>{' '}
          or a qualified regulatory advisor. Regulation EU 2025/40 is the primary legal text.
          Provisions and dates are subject to implementing acts and delegated acts issued by the
          European Commission.
        </p>

        {/* Related posts */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {[
            {
              href: '/blog/eco-packaging-for-takeaways-ireland',
              img: '/images/products/bagasse-burger-box/1.png',
              imgAlt: 'Eco packaging for takeaways Ireland',
              title: 'Eco Packaging for Takeaways Ireland: How to Switch to Sustainable Food Packaging',
            },
            {
              href: '/blog/eps-polystyrene-packaging-ireland-legal-2025',
              img: '/images/products/bagasse-burger-box/3.png',
              imgAlt: 'EPS polystyrene packaging Ireland legal guide',
              title: 'EPS in Ireland: What Is Banned, What Is Still Legal, and What Changes by 2030',
            },
          ].map(({ href, img, imgAlt, title: postTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={img} alt={imgAlt} fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Related Guide
                </p>
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm leading-snug">
                  {postTitle}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to blog */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">
            ← Back to all guides
          </Link>
        </div>

      </main>
    </Layout>
  );
}
