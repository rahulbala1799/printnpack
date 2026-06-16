import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

import { SITE_URL as siteUrl } from '../../lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eco Friendly Pizza Box, Paper Bags & Burger Boxes Ireland: Where to Buy Sustainable Takeaway Packaging',
  description:
    'Irish restaurants and takeaways are searching for eco friendly pizza box wholesale Ireland, recyclable paper bags Ireland takeaway, and compostable burger boxes. This guide matches search intent to compliant, cost-effective packaging you can order today.',
  image: `${siteUrl}/images/products/twisted-handle-bags/1.png`,
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
    '@id': `${siteUrl}/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland`,
  },
  keywords:
    'eco friendly pizza box Ireland, eco friendly pizza box wholesale Ireland, recyclable paper bags Ireland takeaway, compostable burger boxes Ireland, eco friendly burger boxes Ireland, sustainable pizza box for takeaway, brown paper takeaway bags with logo, custom branded recyclable paper bags Ireland',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy eco friendly pizza box wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can order eco-friendly, recyclable custom pizza boxes from PrintNPack Ireland. We supply kraft corrugated pizza boxes that are PFAS-free and fully recyclable, with custom printing from 500 units. Ideal for pizzerias in Dublin, Cork, Galway and nationwide who want sustainable takeaway packaging that keeps pizza hot and is clearly recyclable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there recyclable paper bags strong enough for hot food in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack supplies recyclable paper bags including flat handle bags, twisted handle bags, and SOS grab bags made from kraft or recycled paper. Options include grease-proof lining for hot food. They are strong enough for takeaway and delivery, fully recyclable, and available with your logo from 500 units. Suitable for cafes, sandwich shops and takeaways across Ireland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get compostable burger boxes that keep food fresh in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our bagasse burger boxes are made from sugarcane fibre, are fully compostable, and naturally grease-resistant so they keep burgers and hot food fresh. We also stock recyclable corrugated burger clamshells in our plain packaging wholesale range. Both are available for delivery across Ireland with low minimum orders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best eco friendly takeaway packaging for Irish restaurants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best options combine recyclability or compostability with performance: recyclable kraft pizza boxes, bagasse burger boxes, and recyclable paper bags (flat handle, twisted handle, or SOS). Choose an Ireland-based supplier like PrintNPack so you get compliant packaging, clear recycling story for customers, and reliable delivery without large minimums.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy eco friendly paper bags for takeaway in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack Ireland supplies eco friendly paper bags for takeaway including brown paper takeaway bags with logo, custom branded recyclable paper bags, and plain kraft SOS bags in bulk. All are recyclable and suitable for cafes, delis, and food businesses. Custom print from 500 units; plain wholesale options in our 841+ product plain packaging range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are Irish businesses switching to eco friendly packaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recycling rules are tightening, EPR costs are rising, and customers expect greener options. Businesses that offer clearly recyclable or compostable takeaway packaging can reduce fees, meet EU and PPWR requirements, and appeal to sustainability-minded customers. Sourcing from an Irish supplier ensures compliance and fast restock.',
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
      name: 'Eco Friendly Pizza Box Paper Bags Burger Boxes Ireland',
      item: `${siteUrl}/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland`,
    },
  ],
};

const searchIntentTimeline = [
  {
    label: 'Eco friendly pizza box wholesale Ireland',
    items: [
      'Recyclable kraft corrugated board, no PFAS',
      'Custom print from 500 units for pizzerias and takeaways',
      'Keeps pizza hot and is clearly recyclable for customers',
    ],
  },
  {
    label: 'Recyclable paper bags Ireland takeaway',
    items: [
      'Flat handle, twisted handle, and SOS kraft paper bags',
      'Grease-proof lining available for hot food',
      'Custom branded recyclable paper bags Ireland from 500 units',
    ],
  },
  {
    label: 'Compostable burger boxes Ireland',
    items: [
      'Bagasse (sugarcane) boxes — leak-proof, stackable',
      'Recyclable corrugated burger clamshells in plain wholesale range',
      'Suitable for burger joints, food trucks, and fast-casual',
    ],
  },
  {
    label: 'Eco friendly paper carrier bags Ireland',
    items: [
      'Brown paper takeaway bags with logo or plain bulk',
      'FSC-certified kraft, fully recyclable',
      'Local supplier with weekly delivery across Ireland',
    ],
  },
];

const products = [
  {
    src: '/images/pizza-boxes/PIZZA_BOX_2.jpg',
    alt: 'Eco friendly pizza box Ireland – recyclable kraft corrugated custom pizza boxes wholesale',
    name: 'Custom Pizza Boxes',
    desc: 'Recyclable kraft board, PFAS-free. Custom print from 500 units. Keeps pizza hot; ideal for eco friendly pizza box wholesale Ireland.',
    href: '/custom-pizza-boxes-ireland',
    badge: 'Recyclable',
    badgeColour: 'blue',
  },
  {
    src: '/images/products/twisted-handle-bags/1.png',
    alt: 'Recyclable paper bags Ireland takeaway – custom branded paper bags with logo',
    name: 'Twisted Handle Paper Bags',
    desc: 'Kraft or white, recyclable, strong for hot food. Eco friendly paper bags for takeaway in Ireland from 500 units.',
    href: '/products/twisted-handle-paper-bags',
    badge: 'Recyclable',
    badgeColour: 'blue',
  },
  {
    src: '/images/products/bagasse-burger-box/3.png',
    alt: 'Compostable burger boxes Ireland – bagasse eco friendly burger box for takeaway',
    name: 'Bagasse Burger Boxes',
    desc: 'Sugarcane fibre, compostable, leak-proof. Answers “compostable burger box for takeaway” and “eco friendly burger boxes Ireland”.',
    href: '/eco-bagasse-burger-boxes',
    badge: 'Compostable',
    badgeColour: 'green',
  },
  {
    src: '/images/products/sos-bags/5.png',
    alt: 'Recyclable paper bags Ireland – SOS grab bags takeaway wholesale',
    name: 'SOS Grab Bags',
    desc: 'Flat-base gusseted kraft bags. Recyclable paper bags Ireland takeaway; custom print or plain bulk.',
    href: '/products/sos-grab-bags',
    badge: 'Recyclable',
    badgeColour: 'blue',
  },
];

const wholesaleProducts = [
  {
    src: '/images/plain-packaging/100396.webp',
    alt: 'Kraft hot cups wholesale Ireland – eco friendly takeaway cups',
    name: '8oz Kraft Hot Cups',
    price: 'From €26.65 / case',
    badge: 'Recyclable',
    href: '/plain-packaging/100396',
  },
  {
    src: '/images/plain-packaging/10928.webp',
    alt: 'Foil food containers Ireland – recyclable takeaway trays wholesale',
    name: 'Foil Takeaway Trays',
    price: 'Case pricing',
    badge: 'Recyclable',
    href: '/plain-packaging/10928',
  },
  {
    src: '/images/plain-packaging/100103.webp',
    alt: '12oz white hot cups Ireland – aqueous coated eco cups',
    name: '12oz Aqueous Hot Cups',
    price: 'From €21.27 / case',
    badge: 'PFAS-Free',
    href: '/plain-packaging/100103',
  },
  {
    src: '/images/plain-packaging/120074.webp',
    alt: '750ml kraft bowls Ireland – recyclable food containers wholesale',
    name: '750ml Kraft Bowls',
    price: 'From €24.67 / case',
    badge: 'Recyclable',
    href: '/plain-packaging/120074',
  },
];

const badgeColours = {
  green: 'bg-green-50 text-green-700',
  blue: 'bg-blue-50 text-blue-700',
};

export default function EcoFriendlyPizzaBoxPaperBagsBurgerBoxesIreland() {
  const title =
    'Eco Friendly Pizza Box, Paper Bags & Burger Boxes Ireland: Where to Buy Sustainable Takeaway Packaging';
  const description =
    'Irish restaurants and takeaways are searching for eco friendly pizza box wholesale Ireland, recyclable paper bags Ireland takeaway, and compostable burger boxes. This guide matches search intent to compliant packaging you can order today — with product links from both custom and wholesale catalogs.';
  const canonicalUrl = `${siteUrl}/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland`;
  const ogImage = `${siteUrl}/images/products/twisted-handle-bags/1.png`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="eco friendly pizza box Ireland, eco friendly pizza box wholesale Ireland, recyclable paper bags Ireland takeaway, compostable burger boxes Ireland, eco friendly burger boxes Ireland, sustainable pizza box for takeaway, brown paper takeaway bags with logo, custom branded recyclable paper bags Ireland, eco friendly paper bags for takeaway in Ireland, recyclable burger box wholesale, compostable burger box for takeaway, eco friendly paper carrier bags Ireland, recyclable takeaway packaging Ireland, sustainable food packaging Ireland wholesale"
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
          content="Eco friendly paper bags and takeaway packaging Ireland – PrintNPack"
        />
        <meta property="article:published_time" content="2026-02-20" />
        <meta property="article:modified_time" content="2026-02-20" />
        <meta property="article:section" content="Packaging Guide" />
        <meta
          property="article:tag"
          content="Eco Packaging, Pizza Boxes, Paper Bags, Burger Boxes, Ireland, Sustainable Takeaway"
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
          <span className="text-slate-900">Eco Friendly Pizza Box Paper Bags Burger Boxes Ireland</span>
        </nav>

        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
            Packaging Guide
          </span>
          <span className="text-slate-400 text-sm">20 Feb 2026 · 9 min read</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Eco Friendly Pizza Box, Paper Bags &amp; Burger Boxes Ireland: Where to Buy Sustainable Takeaway Packaging
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          In Ireland right now, the hottest conversation in the packaging sector is not about price charts or new machinery — it&apos;s about how to stay <strong>compliant</strong>, <strong>cost-effective</strong> and <strong>environmentally responsible</strong> as recycling rules tighten and customers demand greener options. Restaurants, pizzerias, burger shops and takeaway businesses are all asking: &quot;Where can I buy eco friendly pizza box wholesale in Ireland? Are there recyclable paper bags that are strong enough for hot food? Can I get compostable burger boxes that actually keep the meal fresh?&quot; Those are exactly the kinds of search terms you want your product pages to rank for — and the right range of eco-friendly packaging is the answer they click through to.
        </p>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-10 border border-slate-100">
          <Image
            src="/images/products/twisted-handle-bags/1.png"
            alt="Eco friendly paper bags Ireland – recyclable paper bags for takeaway with logo, PrintNPack"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-slate max-w-none">

          {/* Callout */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="text-red-800 text-sm font-semibold mb-1">
              Search intent in Ireland: eco-friendly, easy to buy, ready to ship
            </p>
            <p className="text-red-700 text-sm leading-relaxed">
              Google search volumes around phrases like &quot;eco friendly pizza box Ireland&quot;, &quot;recyclable paper bags Ireland takeaway&quot; and &quot;compostable burger boxes Ireland&quot; are jumping as owners look for practical, compliant solutions they can buy and start using immediately. Your product catalogue can capture that intent.
            </p>
          </div>

          {/* Irish packaging problem */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The Irish Packaging Problem No One Talks About
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Packaging waste in Ireland keeps growing, and plastic in particular is under intense scrutiny. The EU has set strict recycling targets, and Ireland is struggling to meet them, especially for plastic packaging. This means businesses are now facing higher <strong>extended producer responsibility (EPR)</strong> costs, more complex labelling rules and a growing customer expectation that the takeaway box or paper bag they hand over should be clearly recyclable or compostable.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            At the same time, search volumes around phrases like &quot;eco friendly pizza box Ireland&quot;, &quot;recyclable paper bags Ireland takeaway&quot; and &quot;compostable burger boxes Ireland&quot; are rising as owners look for practical, compliant solutions they can buy and start using immediately.
          </p>

          {/* Key stat */}
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 text-4xl font-bold text-green-400">Three boxes</div>
            <div>
              <p className="font-semibold text-white mb-1">What Irish food businesses want from packaging</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                It must keep food hot and fresh through delivery or takeaway. It needs to be clearly eco-friendly (recyclable, compostable, or recycled content) so they can advertise that on their website and social media. And it should be easy to order and restock from a local or Ireland-based supplier that understands Irish regulations.
              </p>
            </div>
          </div>

          {/* Timeline-style: What they search for */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            What Irish Businesses Are Searching For — And What Matches
          </h2>
          <div className="space-y-0 mb-8">
            {searchIntentTimeline.map(({ label, items }, i) => (
              <div key={label} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 border-2 border-white ring-2 ${
                      i === 0 ? 'bg-red-600 ring-red-600' : 'bg-green-600 ring-green-600'
                    }`}
                  />
                  {i < searchIntentTimeline.length - 1 && (
                    <div className="w-0.5 bg-slate-200 flex-1 mt-1 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-8">
                  <p
                    className={`text-sm font-bold uppercase tracking-wide mb-2 ${
                      i === 0 ? 'text-red-600' : 'text-green-700'
                    }`}
                  >
                    {label}
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

          {/* Why restaurants search */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Restaurants Are Searching for Eco Friendly Takeaway Packaging
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Owners of pizzerias, burger joints and grab-and-go food outlets are actively searching for packaging that ticks three boxes: it must keep food hot and fresh through delivery or takeaway; it needs to be clearly eco-friendly (recyclable, compostable, or made from recycled materials) so they can advertise that on their website and social media; and it should be easy to order and restock from a local or Ireland-based supplier that understands Irish regulations.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            That&apos;s exactly where a strong product catalogue fits in. You can offer <strong>eco friendly pizza box</strong> designs that are either recyclable kraft board or compostable materials. These boxes are ideal for pizzerias in Dublin, Cork, Galway and other cities who want to maintain a hot, leak-resistant pizza while still giving customers a <strong>sustainable takeaway option</strong>. When someone in Ireland types &quot;eco friendly pizza box wholesale Ireland&quot; or &quot;sustainable pizza box for takeaway&quot;, your product page is the kind of result that can capture that intent and convert it into an order.
          </p>

          {/* Product images 3-col */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { src: '/images/pizza-boxes/PIZZA_BOX_4.jpg', alt: 'Eco friendly pizza box Ireland – recyclable custom pizza boxes wholesale' },
              { src: '/images/products/flat-handle-bags/3.png', alt: 'Recyclable paper bags Ireland – flat handle branded takeaway bags' },
              { src: '/images/products/bagasse-burger-box/4.png', alt: 'Compostable burger boxes Ireland – bagasse eco takeaway box' },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-xl overflow-hidden h-36">
                <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs text-center mb-8">
            Eco friendly pizza boxes, recyclable paper bags, and compostable burger boxes — the three categories Irish takeaways search for most.
          </p>

          {/* Recyclable paper bags */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How Recyclable Paper Bags Fit Into the Bigger Picture
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Paper bags are another keyword-rich opportunity. Searches such as &quot;recyclable paper bags Ireland takeaway&quot;, &quot;eco friendly paper carrier bags Ireland&quot; and &quot;brown paper takeaway bags with logo&quot; are common among cafes, sandwich shops and small retailers who want to show commitment to sustainability without sacrificing branding.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Recyclable paper bags can be positioned as the default choice for any business that wants to move away from single-use plastic carriers. Because they are made from kraft or recycled paper, they have a clear recycling story you can push in your blog and on-page copy. Phrases like &quot;eco friendly paper bags for takeaway in Ireland&quot; and &quot;custom branded recyclable paper bags Ireland&quot; will help you rank for both local and national buyers who need to order in bulk but still want a professional look.
          </p>

          {/* Burger boxes */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Burger Boxes That Balance Sustainability and Performance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Burger boxes are another high-intent product category. Operators are searching for &quot;eco friendly burger boxes Ireland&quot;, &quot;compostable burger box for takeaway&quot; and &quot;recyclable burger box wholesale&quot; because standard plastic clamshells are increasingly perceived as outdated and harmful to the environment.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Compostable or recyclable burger boxes can be described as leak-proof, stackable and designed specifically for takeaway and delivery, so they match the exact needs of burger joints, fast-food outlets and food trucks. By highlighting that eco friendly burger boxes are made from renewable or compostable materials and that they can be used without compromising on presentation or freshness, you directly answer the questions those searchers are asking.
          </p>

          {/* Table: search intent vs product */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Search phrase</th>
                  <th className="text-left px-4 py-3 font-semibold">Product that matches</th>
                  <th className="text-left px-4 py-3 font-semibold">Where to buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Eco friendly pizza box Ireland / wholesale', 'Recyclable kraft pizza boxes, custom print', 'Custom pizza boxes'],
                  ['Recyclable paper bags Ireland takeaway', 'Flat handle, twisted handle, SOS kraft bags', 'Paper bags'],
                  ['Compostable burger boxes Ireland', 'Bagasse burger boxes, corrugated clamshells', 'Bagasse / Plain packaging'],
                  ['Brown paper takeaway bags with logo', 'Kraft paper bags with logo, MOQ 500', 'Paper bags'],
                ].map(([phrase, product, where], i) => (
                  <tr key={phrase} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900">{phrase}</td>
                    <td className="px-4 py-3 text-slate-700">{product}</td>
                    <td className="px-4 py-3 text-slate-600">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Product showcase — custom */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Eco-Friendly Packaging Available Now — Custom &amp; Wholesale
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Your product pages already cover the main categories most searched for: <strong>eco friendly pizza box Ireland</strong> for pizzerias; <strong>recyclable paper bags Ireland takeaway</strong> for cafes and sandwich bars; <strong>eco friendly burger boxes Ireland</strong> for burger shops. Below are direct links to products from both our custom-print catalogue and our plain packaging wholesale range.
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

          {/* 2-col image */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/products/twisted-handle-bags/2.png"
                alt="Custom branded recyclable paper bags Ireland – twisted handle bags takeaway"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/products/flat-handle-bags/5.png"
                alt="Brown paper takeaway bags with logo Ireland – eco friendly paper bags"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>
          <p className="text-slate-500 text-xs text-center mb-8">
            Twisted handle and flat handle paper bags — recyclable, custom print or plain, for eco friendly paper bags for takeaway in Ireland.
          </p>

          {/* Why your range */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Your Range Solves the Search-Intent Problem
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                icon: '🌿',
                title: 'Eco-friendly as standard',
                desc: 'From recyclable kraft pizza boxes and paper bags to compostable bagasse burger boxes, the materials are chosen so Irish businesses can say “recyclable” or “compostable” with confidence. That matches what customers and search queries are looking for.',
              },
              {
                icon: '📦',
                title: 'Low minimums — from 500 units',
                desc: 'Eco friendly pizza box wholesale Ireland and custom branded recyclable paper bags Ireland don’t require huge runs. Single-location pizzerias and multi-site operators can both restock without over-ordering.',
              },
              {
                icon: '🚚',
                title: 'Ireland-based supplier',
                desc: 'Fast delivery across Ireland and understanding of Irish regulations (including PPWR and Repak) so businesses get compliant packaging and a clear recycling story without dealing with overseas lead times.',
              },
              {
                icon: '⚡',
                title: 'Ready to ship today',
                desc: 'Plain packaging wholesale (841+ products) and custom print with short lead times. “Give me takeaway packaging that is clearly eco-friendly, easy to buy online, and ready to ship today” — that’s the core search intent, and the catalogue delivers.',
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

          {/* Wholesale section with links */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain Packaging Wholesale — Eco Options with Direct Product Links
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Not every business needs custom printing. Our plain packaging wholesale range includes hundreds of eco-friendly options — kraft cups, aqueous-coated hot cups, foil trays, kraft bowls, and more — all available in case quantities with nationwide delivery across Ireland. Below, four examples with links straight to the product page.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
            {wholesaleProducts.map(({ src, alt, name, price, badge, href }) => (
              <Link
                key={name}
                href={href}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden text-center p-3 hover:shadow-md transition-shadow block"
              >
                <div className="relative h-28 w-full mb-3 rounded-lg overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-contain" sizes="25vw" />
                </div>
                <p className="font-semibold text-slate-900 text-xs mb-1 leading-snug">{name}</p>
                <p className="text-green-700 text-xs font-medium mb-1.5">{price}</p>
                <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mb-8 mt-4">
            <Link
              href="/plain-packaging"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Browse all 841+ wholesale products →
            </Link>
          </div>

          {/* 5-step checklist */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            5-Step Checklist: Capture Eco Packaging Search Intent in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            To rank for “eco friendly pizza box wholesale Ireland”, “recyclable paper bags Ireland takeaway”, and “compostable burger boxes Ireland”, your pages and range need to align with what buyers want:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                step: '01',
                title: 'List the exact phrases your customers search for',
                desc: 'Include eco friendly pizza box Ireland, recyclable paper bags Ireland takeaway, compostable burger boxes Ireland, brown paper takeaway bags with logo, sustainable pizza box for takeaway, and eco friendly paper bags for takeaway in Ireland. Use these in titles, meta, and body copy.',
              },
              {
                step: '02',
                title: 'Match each phrase to a product or category',
                desc: 'Pizza boxes → custom recyclable pizza boxes. Paper bags → flat handle, twisted handle, SOS bags. Burger boxes → bagasse or corrugated clamshells. Add clear product links so one click takes the searcher to the right product.',
              },
              {
                step: '03',
                title: 'Use both custom and wholesale catalogs',
                desc: 'Custom print suits brands that want “paper bags with logo” or “eco friendly pizza box” with their artwork. Wholesale suits bulk buyers who want recyclable or compostable options without print. Link to both so you capture all intents.',
              },
              {
                step: '04',
                title: 'Emphasise recyclable or compostable clearly',
                desc: 'Customers and EPR rules favour packaging that is clearly recyclable or compostable. State it on the product page and in blog copy so search engines and buyers see the match.',
              },
              {
                step: '05',
                title: 'Offer an Ireland-based, easy restock path',
                desc: 'Searchers want “easy to order and restock from a local or Ireland-based supplier”. Highlight low minimums, fast delivery, and clear pricing so the search intent converts into an order.',
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

          {/* Pizza + burger images */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_6.jpg"
                alt="Eco friendly pizza box Ireland – recyclable custom pizza boxes for takeaway"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/images/products/bagasse-burger-box/5.png"
                alt="Compostable burger boxes Ireland – bagasse eco takeaway packaging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>
          <p className="text-slate-500 text-xs text-center mb-8">
            Recyclable pizza boxes and compostable bagasse burger boxes — two of the most searched eco packaging categories in Ireland.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            Frequently Asked Questions: Eco Friendly Packaging Ireland
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Where can I buy eco friendly pizza box wholesale in Ireland?',
                a: 'You can order eco-friendly, recyclable custom pizza boxes from PrintNPack Ireland. We supply kraft corrugated pizza boxes that are PFAS-free and fully recyclable, with custom printing from 500 units — ideal for pizzerias who want sustainable takeaway packaging that keeps pizza hot.',
              },
              {
                q: 'Are there recyclable paper bags strong enough for hot food in Ireland?',
                a: 'Yes. PrintNPack supplies recyclable paper bags including flat handle, twisted handle, and SOS grab bags made from kraft or recycled paper, with grease-proof lining available for hot food. They are strong enough for takeaway and delivery and available with your logo from 500 units.',
              },
              {
                q: 'Can I get compostable burger boxes that keep food fresh in Ireland?',
                a: 'Yes. Our bagasse burger boxes are made from sugarcane fibre, fully compostable, and naturally grease-resistant. We also stock recyclable corrugated burger clamshells in our plain packaging wholesale range. Both are available for delivery across Ireland.',
              },
              {
                q: 'What is the best eco friendly takeaway packaging for Irish restaurants?',
                a: 'The best options combine recyclability or compostability with performance: recyclable kraft pizza boxes, bagasse burger boxes, and recyclable paper bags (flat handle, twisted handle, or SOS). Choose an Ireland-based supplier so you get compliant packaging and reliable delivery.',
              },
              {
                q: 'Where can I buy eco friendly paper bags for takeaway in Ireland?',
                a: 'PrintNPack Ireland supplies eco friendly paper bags for takeaway including brown paper takeaway bags with logo, custom branded recyclable paper bags, and plain kraft SOS bags in bulk. All are recyclable; custom print from 500 units or plain wholesale in our 841+ product range.',
              },
              {
                q: 'Why are Irish businesses switching to eco friendly packaging?',
                a: 'Recycling rules are tightening, EPR costs are rising, and customers expect greener options. Businesses that offer clearly recyclable or compostable takeaway packaging can reduce fees, meet EU and PPWR requirements, and appeal to sustainability-minded customers.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-green-600 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Get Eco Friendly Pizza Boxes, Paper Bags &amp; Burger Boxes in Ireland
          </h2>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
            From recyclable custom pizza boxes and paper bags with your logo to compostable burger boxes and 841+ plain wholesale products — PrintNPack supplies sustainable takeaway packaging to food businesses across Ireland.
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
              Bagasse Burger Boxes
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
          This article is for informational and SEO purposes. For regulatory compliance (e.g. PPWR, Repak), consult{' '}
          <a
            href="https://repak.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Repak
          </a>{' '}
          or a qualified advisor. Product availability and pricing are subject to change.
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
              href: '/blog/plain-packaging-wholesale-ireland',
              img: '/images/plain-packaging/100396.webp',
              imgAlt: 'Plain packaging wholesale Ireland',
              title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
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
