import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

import { SITE_URL as siteUrl } from '../../lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pizza Box Sizes Ireland: The Complete Guide for Takeaways & Restaurants',
  description:
    'A complete guide to pizza box sizes available in Ireland — from 7-inch personal boxes to 18-inch family sizes — with tips on choosing the right box for your takeaway.',
  image: `${siteUrl}/images/pizza-boxes/PIZZA_BOX_1.jpg`,
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
  datePublished: '2026-02-12',
  dateModified: '2026-06-17',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/pizza-box-sizes-ireland` },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What sizes do pizza boxes come in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard pizza box sizes in Ireland range from 7 inches (personal) up to 18 inches (large family). The most popular sizes for Irish takeaways are 9", 10", 12", and 14".',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get custom printed pizza boxes in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack offers fully custom printed pizza boxes in Ireland with your logo and branding, with low minimum order quantities and fast nationwide delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I stock 7 inch, 12 inch, or 14 inch pizza boxes for an Irish takeaway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most Irish takeaways, 12 inch is the essential core size for standard medium pizzas. Add 14 inch for large and family orders. Use 7 inch only if you sell personal portions or kids meals — it is not a primary stock size for full-menu pizzerias.',
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
    { '@type': 'ListItem', position: 3, name: 'Pizza Box Sizes Ireland', item: `${siteUrl}/blog/pizza-box-sizes-ireland` },
  ],
};

export default function PizzaBoxSizesIreland() {
  const title = 'Pizza Box Sizes Ireland: The Complete Guide for Takeaways & Restaurants';
  const description =
    'Not sure which pizza box size to order? We break down every standard pizza box size in Ireland — from 7" personal boxes to 18" family sizes — with tips on customisation, material, and ordering.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="pizza box sizes ireland, custom pizza boxes ireland, pizza boxes dublin, custom pizza boxes dublin, pizza packaging ireland, branded pizza boxes, pizza box sizes guide" />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${siteUrl}/blog/pizza-box-sizes-ireland`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/pizza-box-sizes-ireland`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}/images/pizza-boxes/PIZZA_BOX_1.jpg`} />
        <meta property="og:image:alt" content="Custom printed pizza boxes Ireland" />
        <meta property="article:published_time" content="2026-02-12" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/pizza-boxes/PIZZA_BOX_1.jpg`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Pizza Box Sizes Ireland</span>
        </nav>

        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Packaging Guide</span>
          <span className="text-slate-400 text-sm">12 Feb 2026 · 6 min read</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Pizza Box Sizes Ireland: The Complete Guide for Takeaways &amp; Restaurants
        </h1>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image
            src="/images/pizza-boxes/PIZZA_BOX_1.jpg"
            alt="Custom pizza boxes Ireland – printed pizza boxes in various sizes"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Intro */}
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Choosing the right pizza box size seems straightforward — until you realise a 12-inch pizza
            does not always fit neatly in a 12-inch box. Irish takeaways and restaurants lose money every
            month on mismatched boxes: lids that don&apos;t close properly, wasted space on small orders, and
            customers whose first impression of your brand is a battered, bent box.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers every standard <strong>pizza box size available in Ireland</strong>,
            explains what each size is best for, and walks you through the key decisions around material,
            printing, and ordering — whether you&apos;re a single-site chipper in Dublin or a multi-site
            restaurant group shipping nationwide. Ready to order? See our{' '}
            <Link href="/custom-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
              custom pizza boxes Ireland
            </Link>{' '}
            page for printing, MOQ, and delivery details.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Standard Pizza Box Sizes in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pizza boxes are measured by the internal diameter — the size of the pizza that sits inside,
            not the external box dimension. Here is a breakdown of the most common sizes sold to Irish
            takeaways:
          </p>

          {/* Size table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Box Size</th>
                  <th className="text-left px-4 py-3 font-semibold">Best For</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['7"', 'Personal / kids\' pizza', 'Single-serve, meal-deal boxes'],
                  ['9"', 'Small / starter pizza', 'Lunch specials, small takeaway orders'],
                  ['10"', 'Medium personal pizza', 'Most popular for solo diners'],
                  ['12"', 'Standard medium pizza', 'Core stock for most Irish takeaways'],
                  ['14"', 'Large pizza', 'Family takeaway orders, popular at weekends'],
                  ['16"', 'Extra-large pizza', 'Party orders, larger restaurants'],
                  ['18"', 'Family / party pizza', 'Catering, large gatherings'],
                ].map(([size, best, use], i) => (
                  <tr key={size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{size}</td>
                    <td className="px-4 py-3 text-slate-700">{best}</td>
                    <td className="px-4 py-3 text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            The <strong>12-inch pizza box</strong> is by far the most popular for Irish takeaways,
            followed closely by 14-inch for weekend and family orders. If you&apos;re starting out and want
            to stock just two sizes, 12" and 14" will cover the vast majority of orders.
          </p>

          {/* 7 vs 12 vs 14 comparison */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            7&quot; vs 12&quot; vs 14&quot; Pizza Boxes for Irish Takeaways
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Operators often ask whether to stock personal 7&quot; boxes alongside their main run sizes.
            Here is a practical comparison for Irish delivery and collection menus:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Size</th>
                  <th className="text-left px-4 py-3 font-semibold">Best for</th>
                  <th className="text-left px-4 py-3 font-semibold">Stock priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['7"', 'Kids meals, lunch specials, single-slice deals', 'Optional — niche add-on'],
                  ['12"', 'Standard medium pizzas — everyday takeaway orders', 'Essential — order first'],
                  ['14"', 'Large pizzas, family boxes, weekend peaks', 'Essential — pair with 12"'],
                ].map(([size, best, priority], i) => (
                  <tr key={size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{size}</td>
                    <td className="px-4 py-3 text-slate-700">{best}</td>
                    <td className="px-4 py-3 text-slate-600">{priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>Rule of thumb:</strong> if budget or storage is tight, run 12&quot; + 14&quot; only.
            Add 7&quot; when personal portions are a meaningful part of sales. For branded boxes with your
            logo, see{' '}
            <Link href="/custom-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
              custom printed pizza boxes Ireland
            </Link>
            .
          </p>

          {/* Image 2 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_3.jpg"
                alt="Custom branded pizza boxes Dublin – open lid view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_5.jpg"
                alt="Printed pizza boxes Ireland – logo branding on white box"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain vs. Custom Printed Pizza Boxes
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain brown or white pizza boxes are the default choice for budget-conscious operators —
            they cost less per unit and are available in bulk with no setup fees. But there is a strong
            case for <strong>custom printed pizza boxes in Ireland</strong>:
          </p>
          <ul className="space-y-3 mb-6 text-slate-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Brand recall:</strong> Every delivery is a marketing touchpoint. A box with your logo is a reminder sitting on the customer&apos;s counter long after the pizza is gone.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Social media:</strong> Customers photograph their food before eating it. A branded box dramatically increases the chance your restaurant name appears in that photo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Professionalism:</strong> Custom packaging signals quality, which lets you justify higher price points and attract repeat customers.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Differentiation:</strong> In a competitive Irish market — particularly in Dublin, Cork, and Galway — a memorable box sets you apart from the takeaway down the road.</span>
            </li>
          </ul>

          {/* Image 3 */}
          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 border border-slate-100">
            <Image
              src="/images/pizza-boxes/PIZZA_BOX_7.jpg"
              alt="Custom pizza boxes Dublin – branded takeaway packaging"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to Look for in a Custom Pizza Box
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1. Board quality and grease resistance</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The most common failure point for pizza boxes is grease soaking through the base, softening
            the board, and causing the box to sag or collapse. Look for boxes with a grease-resistant
            inner liner and board weight of at least 350gsm for the base.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2. Ventilation holes</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Steam is the enemy of crispy pizza. Boxes with ventilation holes on the sides allow moisture
            to escape during delivery, keeping the crust from going soggy. This is especially important
            for deliveries longer than 10 minutes.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3. Lid strength and closure</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Auto-lock lids (also called crash-lock) hold their shape and can be assembled one-handed
            during a busy service. Tuck-in lids are cheaper but prone to popping open. For branded
            boxes, auto-lock is the better long-term investment.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4. Print quality and colours</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            CMYK full-colour printing gives you rich, photographic imagery on your box — great for
            showing off your food photography or brand aesthetic. If you have a simple 1–2 colour logo,
            spot colour printing is more cost-effective per unit.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to Order Custom Pizza Boxes in Dublin &amp; Across Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ordering <strong>custom pizza boxes in Dublin</strong> or anywhere in Ireland does not have
            to mean committing to a container-load upfront. At PrintNPack, we offer:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Low MOQs', desc: 'Order from 500 custom printed boxes — suited to takeaways scaling branded packaging.' },
              { label: 'Full-colour print', desc: 'CMYK printing across the full box surface — your logo, brand colours, and artwork printed directly on the board.' },
              { label: 'Fast delivery', desc: 'Nationwide delivery across all 32 counties of Ireland, including next-day options.' },
            ].map((item) => (
              <div key={item.label} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="font-bold text-slate-900 mb-2">{item.label}</div>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Image 4 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_9.jpg"
                alt="Pizza box printing Ireland – stacked printed pizza boxes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_11.jpg"
                alt="Custom pizza boxes Ireland – open box ready for delivery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Getting the Best Value Per Unit
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The unit cost of custom pizza boxes drops significantly with volume. A batch of 500 boxes
            will always cost considerably less per box than 100. Here are a few practical tips to
            reduce your per-unit cost:
          </p>
          <ul className="space-y-2 mb-6 list-disc list-inside text-slate-700">
            <li>Order a full pallet run at once — storage costs are usually lower than the reprint setup fees you would pay across multiple small orders.</li>
            <li>Standardise on 2–3 box sizes rather than stocking every size. Most takeaways can serve 90% of orders with just 10" and 14" boxes.</li>
            <li>Use 2-colour spot printing if your logo works well in flat colours — it is significantly cheaper than full CMYK.</li>
            <li>Ask about white-label plain boxes in bulk if you want lower cost for delivery nights and reserve branded boxes for collection orders and events.</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pizza Box Sizes: Quick Summary
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            To recap — if you are setting up a new takeaway in Ireland or reviewing your packaging
            spend, the key points are:
          </p>
          <ul className="space-y-2 mb-8 text-slate-700">
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> <span>Stock 12" and 14" as your core sizes — they cover the majority of Irish orders.</span></li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> <span>Choose 350gsm+ board with grease-resistant liner for quality protection.</span></li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> <span>Invest in custom printing if you are serving more than 200 covers a week — the brand ROI is real.</span></li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> <span>Order in bulk to reduce your per-unit cost — but start small if you are testing a new design.</span></li>
          </ul>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What sizes do pizza boxes come in Ireland?',
                a: 'Standard pizza box sizes in Ireland range from 7 inches (personal) to 18 inches (large family). The most popular sizes for Irish takeaways are 9", 10", 12", and 14".',
              },
              {
                q: 'Can I get custom printed pizza boxes in Ireland?',
                a: 'Yes — PrintNPack prints custom pizza boxes in Ireland with your logo, brand colours, and artwork. We offer low minimum order quantities and fast nationwide delivery.',
              },
              {
                q: 'Should I stock 7 inch, 12 inch, or 14 inch pizza boxes?',
                a: 'Stock 12" and 14" as your core sizes. Add 7" only if you sell personal or kids portions regularly — most full-menu takeaways do not need 7" as primary stock.',
              },
              {
                q: 'What is the best pizza box size for a 12-inch pizza?',
                a: 'A 12-inch pizza fits a 12" box. For toppings-heavy or deep-pan pizzas, some takeaways size up to 13" or 14" to prevent the lid touching the cheese.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-blue-600 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal link CTA */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to order custom pizza boxes?</h2>
          <p className="text-blue-100 mb-6">
            Low MOQs, full-colour printing, and fast delivery across Ireland.
            Get a quote in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/custom-pizza-boxes-ireland"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Custom Pizza Boxes →
            </Link>
            <Link
              href="/quote"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
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
