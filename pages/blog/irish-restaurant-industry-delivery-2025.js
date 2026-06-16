import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

import { SITE_URL as siteUrl } from '../../lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Irish Restaurant Industry in 2025: Delivery Platforms, Commission Costs & the Models That Are Surviving',
  description:
    'A data-driven look at the state of the Irish restaurant and food delivery market in 2025 — how €9.8bn in foodservice turnover coexists with 600+ closures, why 25–35% platform commissions are squeezing independents, and the business models emerging in response.',
  image: `${siteUrl}/images/pizza-boxes/PIZZA_BOX_3.jpg`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-02-13',
  dateModified: '2026-02-13',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteUrl}/blog/irish-restaurant-industry-delivery-2025`,
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is the Irish foodservice market worth in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ireland\'s out-of-home foodservice market is estimated at €9.8–10.4 billion in 2025, according to Bord Bia and RTÉ reporting. This is the highest on record, though much of the value growth reflects menu price inflation rather than volume increases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do Irish consumers spend on food delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Irish consumers spend an estimated €2.2–2.5 billion annually on takeaways and food delivery. The average consumer orders approximately 2.9 times per month and spends around €46–47 per order.',
      },
    },
    {
      '@type': 'Question',
      name: 'What commission do Just Eat and Deliveroo charge Irish restaurants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major delivery platforms including Just Eat, Deliveroo, and Uber Eats typically charge Irish restaurants 25–35% commission per order. Given that most independent restaurants operate on 3–5% net profit margins, this commission structure makes many delivery orders barely breakeven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are so many Irish restaurants closing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A combination of factors is driving closures: the VAT rate on food returning to 13.5% in September 2023, ingredient cost inflation (beef up 95%, electricity up 96%), labour shortages, and high platform commissions on delivery orders. The Restaurants Association of Ireland reports over 600 food-led business closures in the year following the VAT increase.',
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
      name: 'Irish Restaurant Industry & Delivery 2025',
      item: `${siteUrl}/blog/irish-restaurant-industry-delivery-2025`,
    },
  ],
};

export default function IrishRestaurantIndustry2025() {
  const title =
    'The Irish Restaurant Industry in 2025: Delivery Platforms, Commission Costs & the Models That Are Surviving';
  const description =
    'Ireland\'s foodservice market is worth a record €9.8 billion — yet more than 600 restaurants have closed since the VAT hike. We break down what is really happening: platform commission economics, the shift to delivery, and the business models Irish operators are using to survive.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="irish restaurant industry 2025, food delivery ireland, just eat ireland commission, deliveroo ireland restaurants, irish restaurant closures, takeaway market ireland, cloud kitchen ireland, restaurant costs ireland, food delivery market ireland 2025, irish hospitality industry"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={`${siteUrl}/blog/irish-restaurant-industry-delivery-2025`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/irish-restaurant-industry-delivery-2025`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}/images/pizza-boxes/PIZZA_BOX_3.jpg`} />
        <meta property="og:image:alt" content="Irish restaurant delivery packaging – pizza boxes and takeaway supplies" />
        <meta property="article:published_time" content="2026-02-13" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/pizza-boxes/PIZZA_BOX_3.jpg`} />
        <meta name="twitter:site" content="@printnpack" />

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
          <span className="text-slate-900">Irish Restaurant Industry &amp; Delivery 2025</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Industry Insight</span>
          <span className="text-slate-400 text-sm">13 Feb 2026 · 12 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          The Irish Restaurant Industry in 2025: Delivery Platforms, Commission Costs &amp; the Models That Are Surviving
        </h1>

        {/* Hero image */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-56 col-span-2">
            <Image
              src="/images/pizza-boxes/PIZZA_BOX_3.jpg"
              alt="Custom pizza boxes Ireland – delivery packaging for Irish restaurants"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src="/images/products/sos-bags/4.png"
                alt="Takeaway bags Ireland – SOS grab bags for restaurant delivery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src="/images/products/bagasse-burger-box/2.png"
                alt="Eco packaging Ireland – sustainable food containers for takeaways"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">

          {/* Intro */}
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Irish restaurants are at a strange crossroads. On one hand, Ireland&apos;s out-of-home food
            and hospitality market has never been bigger: Bord Bia estimates the island&apos;s foodservice
            sector is now worth around €9.8–10.4 billion, having grown every year since 2021. On the
            other hand, more than 600 food-led hospitality businesses have shut their doors since the
            VAT rate on food was pushed back up to 13.5%, and costs from ingredients to electricity
            have soared.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            At the centre of this tension is the rise of food delivery. Irish consumers are spending
            an estimated €2.2 billion a year on takeaways and deliveries, ordering roughly three times
            a month and dropping around €46–47 per order. Delivery has become a core part of how
            Ireland eats. Yet the very platforms that enable that convenience are taking 25–35%
            commissions per order in many cases, on top of already rising costs. This post looks at
            what is really happening in the Irish restaurant industry, the business models operators
            are using, and why delivery remains so popular despite a brutal cost squeeze.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The State of the Irish Restaurant Industry
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ireland&apos;s broader foodservice market — everything from cafés and pubs to QSR chains and
            event catering — has bounced back strongly in nominal terms. Bord Bia&apos;s latest Foodservice
            Market Insights shows the out-of-home sector has grown in value every year since 2021 and
            recently passed €9.8 billion in turnover across the Republic and Northern Ireland. A newer
            RTÉ report puts total hospitality and foodservice at about €10.4 billion in 2025, the
            highest on record.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            However, that headline growth hides a lot of pain:
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                label: 'Inflation-driven revenue',
                desc: 'Bord Bia notes that much of the value growth is simply higher menu prices, not big jumps in real volume. Menu prices are up roughly a quarter since 2020.',
              },
              {
                label: 'Input costs have exploded',
                desc: 'The Restaurants Association of Ireland (RAI) Cost of Doing Business data for 2022–2025 shows ingredient costs jumping by double digits: fruit and veg +50%, chicken +35%, beef +95%, pork +35%, with gas up 58% and electricity up 96%.',
              },
              {
                label: 'VAT shock and closures',
                desc: 'When the reduced 9% VAT rate on food ended and the rate moved back to 13.5% in September 2023, closures accelerated. RAI data indicates 612 restaurants, cafés, gastropubs and other food-led businesses closed in the year after the hike, with 35 closures in August 2024 alone.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex-shrink-0 w-2 rounded-full bg-orange-500 self-stretch" style={{ minHeight: 16 }} />
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{label}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed mb-8">
            RTÉ analysis suggests Ireland has roughly 8,000 restaurant enterprises, with more than ten
            closing every week at certain points. This is not a marginal adjustment; it is a structural
            shake-out, skewed heavily towards independents and rural operators, while city-centre and
            chain formats hold up better.
          </p>

          {/* Section 2: How Ireland eats */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How Ireland Is Eating Now: Experience vs Value
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Despite the cost-of-living squeeze, Irish consumers have not abandoned dining out or
            takeaways — they are just more selective. Bord Bia&apos;s foodservice insights highlight that
            consumers remain willing to pay for <strong>&quot;unique or different&quot; experiences</strong>,
            even as they trade down or cut frequency elsewhere:
          </p>
          <ul className="space-y-2 mb-6 text-slate-700 text-sm">
            <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong>Experience-led concepts:</strong> Chef&apos;s-table formats, tasting menus, immersive venues and &quot;occasion&quot; dining are positioned as special experiences that justify higher spend.</span></li>
            <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong>Value-seeking everyday dining:</strong> At the same time, value is non-negotiable for weekday and casual occasions. Operators are leaning into set menus, early-bird offers, and stripped-back menus to keep perception of value strong.</span></li>
            <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong>Advance booking culture:</strong> OpenTable points to increasing advance bookings and &quot;busy lists&quot; for hyped Dublin venues, driven in part by social media virality.</span></li>
          </ul>

          {/* Image break: napkins + branded bags for restaurant context */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/premium-linen-feel-napkins/Napkin Mock 2.jpg"
                alt="Restaurant napkins Ireland – premium linen-feel napkins for dining"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/twisted-handle-bags/twisted-bag-2.jpg"
                alt="Branded paper bags for Irish restaurants – takeaway packaging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>

          {/* Section 3: Delivery boom */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Food Delivery&apos;s Boom in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Deliveroo, Just Eat and Uber Eats were lifelines during the pandemic, and they have not
            gone away. Several data points tell the story:
          </p>

          <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8">
            <h3 className="text-base font-bold mb-4 text-slate-200">Irish Food Delivery by the Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '€2.2bn', label: 'Annual Irish spend on food delivery & takeaways' },
                { stat: '2.9×', label: 'Average orders per month per Irish consumer' },
                { stat: '€46.49', label: 'Average monthly delivery spend per person' },
                { stat: '8,000+', label: 'Restaurant storefronts on delivery platforms (2023)' },
                { stat: '55%', label: 'Just Eat share of digital restaurant listings' },
                { stat: '+7%', label: 'Deliveroo order volume growth in early 2025' },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white">{stat}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            Crucially, it is not just takeaway food anymore. Grocery and retail delivery are growing
            rapidly: Just Eat&apos;s own research found about 23% of Irish consumers used food delivery
            services to order groceries in the previous year, and Deliveroo is now pushing into
            &quot;quick commerce&quot; retail in Ireland, offering non-food items like beauty and DIY products
            with 20–25 minute delivery windows.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            From the consumer perspective, the value proposition is clear: <strong>convenience,
            choice, and speed</strong>, often from a single app, at a time when many people are
            time-poor but still want decent food.
          </p>

          {/* Section 4: Commission squeeze */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The Aggregator Squeeze: Why Costs Are Biting So Hard
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If delivery demand is so robust, why is the industry in crisis? Because the economics
            are lopsided.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-red-900 mb-3">The margin maths that don&apos;t add up</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-slate-700">Typical platform commission per order</span>
                <span className="font-bold text-red-700">25–35%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-slate-700">Typical independent restaurant net margin</span>
                <span className="font-bold text-slate-900">3–5%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-red-200">
                <span className="text-slate-700">VAT rate on food in Ireland (since Sept 2023)</span>
                <span className="font-bold text-slate-900">13.5%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-700">Electricity cost increase since 2020</span>
                <span className="font-bold text-red-700">+96%</span>
              </div>
            </div>
            <p className="text-red-800 text-xs mt-4 italic">
              Sources: RAI Cost of Doing Business data 2022–2025; RTÉ Brainstorm analysis; Flipdish industry reporting.
            </p>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            RTÉ&apos;s analysis describes this as a &quot;commission stranglehold&quot; that has evolved into
            &quot;economic captivity&quot;: restaurants feel unable to leave platforms because consumers
            expect to find them there, but the commission structure makes many orders barely
            breakeven once costs are fully loaded. The platforms become the brand and the
            gatekeeper, while the individual restaurant is just another tile inside the app.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            In 2022, Just Eat increased its commission rate by a further percentage point — pushing
            effective rates to &quot;as much as 30%&quot; for many Irish partners — at exactly the point
            when restaurants were battling VAT rises, labour shortages, and historic inflation.
            Hospitality wages trail the national average by roughly €13 per hour, contributing to
            chronic staffing shortages that compound the pressure further.
          </p>

          {/* Delivery packaging image break */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="relative rounded-xl overflow-hidden h-40">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_7.jpg"
                alt="Custom pizza boxes Ireland – delivery packaging for takeaways"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40">
              <Image
                src="/images/products/flat-handle-bags/2.png"
                alt="Flat handle paper bags Ireland – restaurant and café takeaway bags"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40">
              <Image
                src="/images/products/bagasse-burger-box/4.png"
                alt="Bagasse burger boxes Ireland – eco packaging for food delivery"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Section 5: Business models */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The Models Irish Restaurants Are Using to Survive
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            In response, Irish operators are experimenting — sometimes frantically — with new
            business models and operating setups. A few broad patterns are emerging.
          </p>

          {[
            {
              num: '1',
              title: 'Hybrid dine-in + marketplace delivery',
              content: `For many bricks-and-mortar restaurants, the default model has become: core business is dine-in (plus perhaps walk-in takeaway), with an add-on listing on one or more delivery aggregators to capture incremental revenue.

The logic is straightforward: if Irish consumers are spending billions via the apps and Just Eat alone has 3,600+ partners in Ireland, being absent can feel like leaving money on the table. But many operators respond by having separate menus or higher prices on delivery platforms to offset commissions, restricting which dishes are available for delivery (only higher-margin or travel-well items), and limiting delivery radius or opening hours to concentrate on peak times.`,
            },
            {
              num: '2',
              title: 'Cloud kitchens and delivery-first brands',
              content: `The Irish market has seen a clear rise in cloud kitchens (also called ghost or virtual kitchens) — facilities that cook for delivery only, with no dine-in seats. OpenTable's Irish trends report calls out "the rise of the cloud kitchen" as a major theme.

Key features: lower front-of-house overheads, ability to run multiple "virtual brands" from a single production kitchen (e.g., burgers, wings, and vegan bowls all under different names on the apps), and heavy reliance on aggregators for orders and logistics. But the same commission problem applies — and without higher-margin dine-in trade, cloud kitchens are even more exposed to aggregator economics.`,
            },
            {
              num: '3',
              title: 'Direct online ordering and loyalty plays',
              content: `A growing cohort of Irish restaurants is trying to wean themselves off third-party platforms by pushing direct ordering through their own websites. Critically, most diners do not realise delivery apps can charge restaurants up to 30% per order — an Amarach/Flipdish poll found 77% of Irish consumers were unaware, and over 80% felt the fees were unfair once told. With that knowledge, about 90% said they would consider ordering directly from restaurants instead.

The emerging model: use aggregators as "top of funnel" discovery, actively nudge repeat customers to order direct (flyers in bags, QR codes, loyalty discounts), build first-party customer databases, and offer better prices or extras for direct orders.`,
            },
            {
              num: '4',
              title: 'Smarter operations: data and dynamic pricing',
              content: `OpenTable highlights a broader shift towards data-driven decision-making among Irish restaurants. This includes menu engineering (using sales and margin data to promote high-profit items and prune low performers), dynamic pricing (higher prices at peak times, lower on quiet days — yield management borrowed from airlines), and food waste management through better inventory forecasting.`,
            },
            {
              num: '5',
              title: 'Experience- and locality-focused concepts',
              content: `With consumers still willing to spend on distinctive experiences, many Irish restaurants are doubling down on small plates and sharing formats that encourage social, lingering visits; plant-forward and "better-for-you" menus; global flavours blended with local Irish produce; and explicitly name-checking Irish farms, butchers and artisans on menus — a top Musgrave MarketPlace trend for 2024 — as a point of differentiation that justifies higher prices.`,
            },
          ].map(({ num, title, content }) => (
            <div key={num} className="mb-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-900 mb-3">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {num}
                </span>
                {title}
              </h3>
              {content.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-3 text-sm">
                  {para}
                </p>
              ))}
            </div>
          ))}

          {/* Eco packaging image break */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="relative rounded-xl overflow-hidden h-44">
              <Image
                src="/images/products/bagasse-burger-box/5.png"
                alt="Eco-friendly takeaway packaging Ireland – sustainable restaurant supplies"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-44">
              <Image
                src="/images/products/sos-bags/7.png"
                alt="Plain SOS bags for Irish restaurants – takeaway carry bags wholesale"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>

          {/* Section 6: Why delivery stays popular */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Delivery Stays Popular Despite Rising Costs
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Given the commissions and surcharges, why does delivery usage keep growing in Ireland?
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <p className="font-bold text-slate-900 mb-3 text-sm">Consumer side</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-blue-500">→</span>Long commutes and dual-income households make outsourcing cooking attractive</li>
                <li className="flex gap-2"><span className="text-blue-500">→</span>Delivery apps compress discovery, ordering, and payment into a few taps — &quot;sticky&quot; once embedded</li>
                <li className="flex gap-2"><span className="text-blue-500">→</span>Price increases have been noticeable, but most consumers trim frequency rather than abandon delivery</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-bold text-slate-900 mb-3 text-sm">Restaurant side</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-slate-500">→</span>Just Eat alone controls 55% of digital storefront listings — absence feels too costly</li>
                <li className="flex gap-2"><span className="text-slate-500">→</span>Delivery helped many survive lockdown; lingering sense of it as risk-management</li>
                <li className="flex gap-2"><span className="text-slate-500">→</span>For pizza, chicken, and burgers, delivery is a natural extension now simply digitised</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            The result is a <strong>mutual dependence</strong> that currently favours the platforms
            economically, but is very hard to unwind quickly without hurting revenues.
          </p>

          {/* Section 7: Where next */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Where the Irish Restaurant Industry Goes From Here
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Looking ahead, several themes are likely to shape Ireland&apos;s restaurant and delivery
            landscape over the next few years:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: 'Pressure for policy intervention',
                desc: 'Industry bodies like the RAI are lobbying hard for the restoration of the 9% VAT rate on food. There is also a live debate around whether to regulate delivery platform commissions, mandate better data sharing with restaurants, or support cooperative ordering alternatives.',
              },
              {
                title: 'More sophisticated channel strategies',
                desc: 'The binary "on the apps vs off the apps" frame is being replaced by more nuanced playbooks: use platforms for reach and new customers, build direct channels and loyalty to retain profitable ones, and differentiate menus and pricing by channel to protect margin.',
              },
              {
                title: 'Consolidation and polarisation',
                desc: 'Lower-margin independents in weaker locations are most at risk. Well-capitalised groups, strong "destination" venues, and efficient QSR/fast-casual operators are better placed to survive. Bord Bia already flags an urban–rural divide, with rural businesses facing higher closure rates and slower recovery.',
              },
              {
                title: 'Continued innovation in formats',
                desc: 'Expect more virtual brands, niche cloud kitchens in dense urban areas, and hybrid retail-hospitality concepts — including restaurants selling house-branded products or leveraging quick-commerce partners like Deliveroo\'s new retail vertical.',
              },
              {
                title: 'Consumer education and behaviour shifts',
                desc: 'As more information about aggregator commissions filters into mainstream media and social feeds, a subset of consumers will make a conscious effort to order direct — particularly in communities that value supporting local businesses.',
              },
            ].map(({ title, desc }, i) => (
              <div key={title} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1 text-sm">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Final Takeaway</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Irish restaurant industry is not dying, but it <em>is</em> being reshaped. Demand
            for dining out and delivery remains strong; total market value is at record levels. At
            the same time, a combination of VAT policy, inflated input costs, labour shortages, and
            high platform commissions is wiping out a significant slice of independent operators
            each year.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The models that will survive in Ireland are those that:
          </p>
          <ul className="space-y-2 mb-8 text-slate-700">
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span><span>Treat delivery as one channel among many, not the whole business.</span></li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span><span>Invest in direct ordering, data, and loyalty to claw back margin.</span></li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span><span>Use technology to run leaner operations without losing the human hospitality Irish diners still crave.</span></li>
            <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span><span>Offer experiences and food that feel worth paying for, even in a high-cost environment.</span></li>
          </ul>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How much is the Irish foodservice market worth in 2025?',
                a: 'Ireland\'s out-of-home foodservice market is estimated at €9.8–10.4 billion in 2025, according to Bord Bia and RTÉ reporting. This is the highest on record, though much of the growth reflects menu price inflation rather than volume increases.',
              },
              {
                q: 'How much do Irish consumers spend on food delivery?',
                a: 'Irish consumers spend an estimated €2.2–2.5 billion annually on takeaways and food delivery. The average consumer orders approximately 2.9 times per month and spends around €46–47 per order.',
              },
              {
                q: 'What commission do Just Eat and Deliveroo charge Irish restaurants?',
                a: 'Major platforms typically charge Irish restaurants 25–35% commission per order. Given that most independent restaurants operate on 3–5% net profit margins, this commission structure makes many delivery orders barely breakeven.',
              },
              {
                q: 'Why are so many Irish restaurants closing?',
                a: 'A combination of the VAT rate returning to 13.5% in September 2023, ingredient cost inflation (beef up 95%, electricity up 96%), labour shortages, and high platform commissions. The RAI reports over 600 food-led business closures in the year following the VAT increase.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-orange-400 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packaging CTA — contextually relevant to restaurant operators */}
        <div className="mt-14 bg-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-2">Running a takeaway or restaurant in Ireland?</h2>
          <p className="text-slate-400 text-sm mb-6">
            With margins this tight, packaging is one of the few costs you can actually optimise. We
            supply custom pizza boxes, branded paper bags, eco-friendly containers, and plain packaging
            wholesale to Irish food businesses — with low MOQs and fast nationwide delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/custom-pizza-boxes-ireland"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors text-center"
            >
              Custom Pizza Boxes →
            </Link>
            <Link
              href="/plain-packaging"
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors text-center"
            >
              Plain Packaging Wholesale
            </Link>
            <Link
              href="/quote"
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {[
            {
              href: '/blog/packaging-prices-ireland-covid-shipping',
              src: '/images/plain-packaging/100396.webp',
              title: 'Why Packaging Prices Have Been All Over the Place — And What Irish Businesses Can Do About It',
            },
            {
              href: '/blog/eco-packaging-for-takeaways-ireland',
              src: '/images/products/bagasse-burger-box/1.png',
              title: 'Eco Packaging for Takeaways Ireland: How to Switch to Sustainable Food Packaging',
            },
          ].map(({ href, src, title }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={title} fill className="object-cover" sizes="64px" />
              </div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">
            ← Back to all guides
          </Link>
        </div>
      </main>
    </Layout>
  );
}
