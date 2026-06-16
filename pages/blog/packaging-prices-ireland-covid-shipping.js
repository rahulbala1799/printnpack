import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

import { SITE_URL as siteUrl } from '../../lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Packaging Prices Have Been All Over the Place — And What Irish Businesses Can Do About It',
  description:
    'A frank look at how COVID-19, China manufacturing dependency, container shipping costs, and raw material inflation drove Irish packaging prices up — and why the shift to sustainable packaging is a smart response.',
  image: `${siteUrl}/images/plain-packaging/100396.webp`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-02-13',
  dateModified: '2026-02-13',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/packaging-prices-ireland-covid-shipping` },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why did packaging prices go up after COVID?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'COVID-19 caused simultaneous factory shutdowns, a surge in e-commerce demand, and a global container shipping crisis. Container freight rates from Asia to Europe rose by 600–800% between 2020 and 2021, with knock-on effects across paper, plastic, and aluminium raw materials. Irish packaging buyers absorbed these increases through 2021 and 2022.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is so much packaging made in China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'China dominates global packaging manufacturing due to lower labour costs, large-scale infrastructure investment, and decades of supply chain development. For commoditised packaging like disposable cups, foil containers, and plastic lids, Chinese factories can produce at a cost that European manufacturers cannot match.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are packaging prices in Ireland coming down?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Container shipping rates fell from their 2021–2022 peak by 2023, and some packaging categories saw modest price reductions. However, energy costs, raw material inflation, and new EU environmental regulations have kept prices elevated compared to pre-COVID levels.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can Irish businesses reduce their packaging costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key strategies include buying in bulk to secure better per-unit pricing, consolidating to fewer suppliers, switching from imported custom items to Irish-stocked standard lines, and transitioning to eco-friendly packaging that qualifies for supplier sustainability incentives.',
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
    { '@type': 'ListItem', position: 3, name: 'Packaging Prices Ireland – COVID, Shipping & Sustainability', item: `${siteUrl}/blog/packaging-prices-ireland-covid-shipping` },
  ],
};

export default function PackagingPricesIreland() {
  const title = 'Why Packaging Prices Have Been All Over the Place — And What Irish Businesses Can Do About It';
  const description =
    'How COVID-19, dependence on Chinese manufacturing, and the global container shipping crisis drove packaging prices up in Ireland — and why the move to sustainable packaging is partly a response to all three.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="packaging prices ireland, why packaging prices increased ireland, container shipping packaging costs, packaging costs after covid ireland, packaging supply chain ireland, sustainable packaging ireland, packaging from china ireland, food packaging costs ireland" />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${siteUrl}/blog/packaging-prices-ireland-covid-shipping`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/packaging-prices-ireland-covid-shipping`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}/images/plain-packaging/100396.webp`} />
        <meta property="og:image:alt" content="Packaging supply costs Ireland – catering supplies wholesale" />
        <meta property="article:published_time" content="2026-02-13" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/plain-packaging/100396.webp`} />

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
          <span className="text-slate-900">Packaging Prices, COVID &amp; Shipping</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">Industry Insight</span>
          <span className="text-slate-400 text-sm">13 Feb 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Why Packaging Prices Have Been All Over the Place — And What Irish Businesses Can Do About It
        </h1>

        {/* Hero image grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-52 col-span-2">
            <Image
              src="/images/plain-packaging/100396.webp"
              alt="Catering packaging wholesale Ireland – supply chain and pricing"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src="/images/plain-packaging/10928.webp"
                alt="Foil containers wholesale Ireland – affected by shipping price increases"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src="/images/plain-packaging/100103.webp"
                alt="Disposable cups Ireland – packaging supply costs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If you run a takeaway, café, or catering business in Ireland, you will have noticed it:
            the price of a case of disposable cups, a bundle of pizza boxes, or a box of napkins
            has not been the same two years running since 2020. Some things went up sharply. Some
            came back down — a little. Others stayed stubbornly high while the ingredients they
            carry somehow got cheaper. It has been confusing, and for many businesses, quietly
            damaging to margins.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This piece explains exactly what happened — and what Irish food businesses can do to
            protect themselves from the next shock.
          </p>

          {/* Section 1: COVID */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The COVID-19 Shock: How a Virus Broke the Packaging Supply Chain
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Before 2020, global packaging supply chains were finely tuned for efficiency. Factories
            in China, Vietnam, and Indonesia ran at high utilisation, producing at low cost for
            customers worldwide. Lean inventory management meant buyers held minimal stock.
            Everything arrived just-in-time.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Then COVID-19 hit, and the system broke in three places at once.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                icon: '🏭',
                title: 'Factory shutdowns in Asia',
                desc: 'Major Chinese manufacturing hubs including Guangdong, Zhejiang, and Jiangsu — home to the largest concentration of disposable packaging factories in the world — faced staggered shutdowns in early 2020. Output fell sharply, and order backlogs built up for months. When factories re-opened, they prioritised their largest customers, leaving smaller European buyers at the back of the queue.',
              },
              {
                icon: '📦',
                title: 'The e-commerce packaging surge',
                desc: 'As retail closed and online shopping exploded, demand for cardboard boxes, bubble wrap, tape, and shipping materials went vertical. Packaging factories that could pivot did so. Food service packaging — cups, trays, foil containers — was deprioritised. Businesses that had been paying the same price for disposable cups for five years suddenly found stock unavailable at any price.',
              },
              {
                icon: '🚢',
                title: 'The container shipping collapse',
                desc: 'This was the critical factor. Global container shipping entered a crisis unlike anything seen in modern logistics. Containers piled up in the wrong ports. Ships were delayed. And as demand for Asian exports surged while supply chain chaos continued, freight rates went into freefall — upwards. A 40-foot container from Shanghai to Northern Europe that cost around €1,500–€2,000 pre-COVID was costing €12,000–€18,000 by late 2021. Some routes hit €20,000.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="text-2xl flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            For Irish packaging buyers, this translated to price increases of 30–80% on many
            standard lines between 2020 and 2022. A case of 500 kraft SOS bags that cost €18
            before COVID was costing €28–€32 by late 2021. Foil containers, which are almost
            entirely sourced from Asia, saw even steeper rises. And because packaging suppliers
            were dealing with the same cost pressures, they had little choice but to pass the
            increases on.
          </p>

          {/* Image break */}
          <div className="grid grid-cols-4 gap-3 my-8">
            {[
              { src: '/images/plain-packaging/100315.webp', alt: 'Cup carriers wholesale Ireland – catering supplies pricing' },
              { src: '/images/plain-packaging/100316.webp', alt: 'Cup trays wholesale Ireland – plain packaging supply' },
              { src: '/images/plain-packaging/109346.webp', alt: 'Foil containers Ireland – price affected by shipping costs' },
              { src: '/images/plain-packaging/109347.webp', alt: 'Food containers wholesale Ireland – packaging costs post COVID' },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-xl overflow-hidden h-28">
                <Image src={src} alt={alt} fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>

          {/* Section 2: China */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The China Problem: Why Irish Packaging Is So Dependent on One Country
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The pandemic exposed something that had been quietly building for decades: Ireland —
            and Europe generally — is deeply dependent on Chinese manufacturing for disposable
            food packaging. Understanding why this happened is key to understanding what comes next.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">How China came to dominate packaging manufacturing</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Through the 1990s and 2000s, Western packaging manufacturers found themselves unable
            to compete with Chinese factories on cost. Labour was dramatically cheaper. The Chinese
            government invested heavily in manufacturing infrastructure — ports, roads, industrial
            zones — and offered favourable tax treatment for export industries. European factories,
            facing higher wages, energy costs, and environmental compliance, closed progressively
            or shifted to premium-only production.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            By 2010, the majority of disposable cups, foil containers, plastic lids, wooden
            cutlery, and many paper-based packaging formats sold in Ireland were either manufactured
            in China directly or from Chinese raw materials processed in third countries. This
            was not a secret — it was just the logical outcome of price-driven procurement.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">The risk nobody priced in</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The efficiency of global just-in-time supply chains left no buffer for disruption.
            When Chinese production slowed, Irish businesses had days of stock rather than weeks.
            The fragility became visible overnight.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            It is worth noting that the dependency on China extends beyond packaging itself.
            The raw materials that go into&nbsp;&quot;European&quot; packaging — pulp for paper cups,
            aluminium for foil containers, resin for plastic lids — are often sourced from or
            processed via Chinese supply chains. A disruption to Chinese manufacturing cascades
            across the entire supply chain, even for nominally European-produced goods.
          </p>

          {/* Section 3: Container shipping */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Container Shipping: The Invisible Price Driver
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most packaging buyers never thought about container shipping until it became the
            dominant story in their cost base. Understanding how it works explains why packaging
            prices respond so violently to shipping events — and why the effects linger long after
            freight rates fall.
          </p>

          <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">Container freight rate timeline (Shanghai → Europe)</h3>
            <div className="space-y-3">
              {[
                { period: 'Pre-2020', rate: '~€1,500–€2,000', context: 'Stable, highly competitive, typical for a mature market' },
                { period: 'H2 2020', rate: '€3,000–€5,000', context: 'First wave — factories re-opening, demand surge begins' },
                { period: 'Q1–Q2 2021', rate: '€8,000–€12,000', context: 'Port congestion, equipment shortages, demand still surging' },
                { period: 'Q3–Q4 2021', rate: '€14,000–€20,000', context: 'Peak of the crisis — some routes over €20,000 per container' },
                { period: '2022', rate: '€6,000–€10,000', context: 'Gradual easing, still 3–4× pre-COVID rates' },
                { period: '2023', rate: '€2,000–€4,000', context: 'Significant fall but not fully back to pre-COVID levels' },
                { period: '2024–2025', rate: '€2,500–€5,000', context: 'Red Sea disruptions and rerouting add new volatility' },
              ].map(({ period, rate, context }) => (
                <div key={period} className="flex items-start gap-4 text-sm">
                  <span className="text-slate-400 w-24 flex-shrink-0 font-mono">{period}</span>
                  <span className="text-white font-semibold w-36 flex-shrink-0">{rate}</span>
                  <span className="text-slate-400">{context}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            The key thing to understand about shipping costs and packaging prices: the effect
            is not instantaneous and not symmetric. When shipping rates rise, packaging prices
            follow within 2–3 months as supplier stock purchased at high freight costs flows
            through. When shipping rates fall, packaging prices take longer to come down — often
            6–12 months — because suppliers are working through stock purchased at higher cost
            and are reluctant to compress margins.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            This means Irish businesses experienced the full pain of the 2021 spike, but only
            captured a fraction of the 2023 fall before new disruptions — including the Red Sea
            shipping rerouting caused by Houthi attacks on vessels in late 2023 and through
            2024 — pushed rates up again.
          </p>

          {/* Image break */}
          <div className="grid grid-cols-3 gap-3 my-8">
            {[
              { src: '/images/plain-packaging/1038700.webp', alt: 'Hot cups wholesale Ireland – supply affected by container shipping' },
              { src: '/images/plain-packaging/103871.webp', alt: 'Paper cups Ireland – pricing impacted by global shipping crisis' },
              { src: '/images/plain-packaging/100431.webp', alt: 'Compostable cups wholesale Ireland – eco packaging pricing' },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-xl overflow-hidden h-36">
                <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>

          {/* Section 4: Raw materials */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Raw Material Inflation: Paper, Aluminium, and the Energy Factor
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Container shipping costs were the headline, but raw material inflation compounded
            the problem. Three materials matter most for Irish food service packaging:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                material: 'Virgin and recycled paper / board',
                detail: 'Paper prices are driven by pulp costs, energy costs (paper mills are energy-intensive), and recycled fibre availability. European paper prices rose 40–60% between 2021 and 2023 as energy costs post-Ukraine invasion surged and supply chains tightened. Pizza boxes, paper cups, and kraft bags were all affected.',
              },
              {
                material: 'Aluminium (foil containers)',
                detail: 'Aluminium is one of the most energy-intensive metals to produce. When European energy prices spiked following the Russia–Ukraine war in 2022, aluminium production costs rose sharply. Combined with supply chain disruption and sanctions on Russian aluminium, foil container prices rose significantly — particularly painful for Indian and Chinese takeaways that use foil containers heavily.',
              },
              {
                material: 'Virgin plastic (lids, cutlery, cups)',
                detail: 'Plastic packaging is derived from petrochemicals. Oil price volatility between 2020 and 2022 fed directly into resin and plastic packaging costs. The EU Single-Use Plastics Directive also began adding compliance costs and reducing the range of cheaper plastic alternatives available to European buyers.',
              },
            ].map(({ material, detail }) => (
              <div key={material} className="bg-white border border-slate-200 rounded-xl p-5">
                <p className="font-semibold text-slate-900 mb-2">{material}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          {/* Section 5: Sustainability response */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Ireland Is Moving Towards Sustainable Packaging — And It Is Not Only About the Environment
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The shift towards <strong>sustainable packaging in Ireland</strong> is accelerating
            for multiple overlapping reasons — environmental values are one part of the picture,
            but supply chain resilience and regulation are equally important drivers.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Regulation: The push you cannot ignore</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The EU Single-Use Plastics Directive banned expanded polystyrene food containers, plastic
            cutlery, plastic straws, and plastic plates across all EU member states — including
            Ireland — from 2022. This was not optional, and it forced an immediate switch for any
            business still using the banned materials.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The EU&apos;s Packaging and Packaging Waste Regulation (PPWR), working through the
            European legislative process, will extend requirements further — including mandatory
            recycled content percentages, reusability targets, and restrictions on certain
            packaging formats. Irish businesses that transition to sustainable alternatives now
            will face lower compliance costs and disruption when these rules arrive.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Supply chain resilience: The case for sourcing closer to home</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            COVID demonstrated the fragility of 12,000km supply chains. Sustainable packaging
            — particularly bagasse, paper-based, and locally produced compostable alternatives
            — often has a shorter, more diversified supply chain than the polystyrene and plastic
            it replaces. European bagasse manufacturing capacity has grown substantially since 2020,
            partly in response to the instability of Chinese supply.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            A shorter supply chain means more predictable lead times, less exposure to container
            shipping volatility, and the ability to hold less buffer stock — a real operational
            benefit for businesses that were burned by the chaos of 2021.
          </p>

          <div className="grid grid-cols-3 gap-3 my-8">
            {[
              { src: '/images/products/bagasse-burger-box/3.png', alt: 'Bagasse packaging Ireland – sustainable alternative to polystyrene' },
              { src: '/images/products/bagasse-burger-box/6.png', alt: 'Eco burger boxes Ireland – shorter supply chain than plastic' },
              { src: '/images/plain-packaging/10360.webp', alt: 'Sustainable catering supplies Ireland – eco packaging options' },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-xl overflow-hidden h-36">
                <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Consumer preference: The Irish market is shifting</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Irish consumer attitudes to packaging have shifted markedly since 2019. Bord Bia
            data consistently shows sustainability rising as a purchasing factor — particularly
            among the 25–45 age group that dominates food delivery app usage. For takeaways
            competing on Deliveroo and Just Eat, packaging is one of the few visible brand
            touchpoints the customer interacts with. A polystyrene burger box signals something
            different than a bagasse box, and Irish consumers are increasingly aware of the
            difference.
          </p>

          {/* Section 6: What to do */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What Irish Businesses Can Do Right Now
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Packaging costs are unlikely to return to pre-2020 levels. The combination of
            higher raw material costs, ongoing regulatory compliance requirements, and a less
            stable shipping environment means Irish food businesses need to build smarter
            packaging strategies rather than waiting for prices to normalise.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                step: '1',
                title: 'Audit what you are actually spending',
                desc: 'Most food businesses have never done a line-by-line packaging audit. Calculate your monthly spend by product, track price changes over 12 months, and identify which lines have risen most. This tells you where to focus negotiation effort.',
              },
              {
                step: '2',
                title: 'Build a strategic stock buffer',
                desc: 'The lesson from 2021 is that holding zero buffer stock is dangerous. For your highest-volume lines — cups, napkins, carry bags — holding 4–6 weeks of stock is cheap insurance against supply disruption or price spikes. The storage cost is almost always less than the cost of an emergency order at spot pricing.',
              },
              {
                step: '3',
                title: 'Consolidate your supplier base',
                desc: 'Buying from 3–4 packaging suppliers gives you diversification — but also fragments your volume and reduces your negotiating leverage with each. Most Irish food businesses are better served by consolidating to one primary supplier with competitive pricing across their full range.',
              },
              {
                step: '4',
                title: 'Transition to eco-friendly where the economics work',
                desc: 'Bagasse burger boxes and paper-based alternatives are competitive with polystyrene equivalents at current pricing — and they eliminate compliance risk. Start with your highest-volume container and switch. The per-unit difference is smaller than most people expect.',
              },
              {
                step: '5',
                title: 'Lock in pricing where you can',
                desc: 'Some suppliers offer forward pricing agreements for businesses committing to volume. If you have predictable usage on a high-volume line, asking for a 6 or 12-month price commitment can protect you from the next shipping event or raw material spike.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Why did packaging prices go up after COVID?',
                a: 'COVID caused factory shutdowns, an e-commerce demand surge, and a global container shipping crisis. Freight rates from Asia to Europe rose 600–800% between 2020 and 2021, with knock-on effects across paper, plastic, and aluminium raw materials.',
              },
              {
                q: 'Why is so much packaging made in China?',
                a: 'China dominates packaging manufacturing due to lower labour costs, large-scale infrastructure investment, and decades of supply chain development. European manufacturers cannot match Chinese factories on cost for commoditised items like disposable cups, foil containers, and plastic lids.',
              },
              {
                q: 'Are packaging prices in Ireland coming down?',
                a: 'Container shipping rates fell from their 2021–2022 peak, and some categories saw modest reductions. However, energy costs, raw material inflation, and new EU environmental regulations have kept prices elevated compared to pre-COVID levels.',
              },
              {
                q: 'How can Irish businesses reduce their packaging costs?',
                a: 'Key strategies include buying in bulk, consolidating suppliers, holding a buffer stock on high-volume lines, switching from imported plastic to locally available eco alternatives, and asking suppliers for forward pricing commitments.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-red-500 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get competitive pricing on packaging for your Irish business</h2>
          <p className="text-slate-400 mb-6">
            Irish-held stock, transparent wholesale pricing, and fast nationwide delivery. No 12-week lead times.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/plain-packaging"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Browse Plain Packaging →
            </Link>
            <Link
              href="/eco-bagasse-burger-boxes"
              className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Eco Packaging Options
            </Link>
            <Link
              href="/quote"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {[
            { href: '/blog/plain-packaging-wholesale-ireland', src: '/images/plain-packaging/100396.webp', title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk' },
            { href: '/blog/eco-packaging-for-takeaways-ireland', src: '/images/products/bagasse-burger-box/1.png', title: 'Eco Packaging for Takeaways Ireland: How to Switch to Sustainable Food Packaging' },
          ].map(({ href, src, title }) => (
            <Link key={href} href={href} className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={title} fill className="object-cover" sizes="64px" />
              </div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{title}</p>
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
