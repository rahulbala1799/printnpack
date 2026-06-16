import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

import { SITE_URL as siteUrl } from '../../lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eco Packaging for Takeaways Ireland: How to Switch to Sustainable Food Packaging',
  description:
    'A practical guide to eco-friendly takeaway packaging in Ireland — bagasse boxes, plain napkins wholesale, paper bags, and how to make the switch without increasing costs.',
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
  datePublished: '2026-02-13',
  dateModified: '2026-02-13',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/eco-packaging-for-takeaways-ireland` },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is bagasse packaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bagasse is the fibrous pulp left over after sugarcane juice is extracted. It is pressed and moulded into food containers, burger boxes, and plates. Bagasse packaging is fully compostable, microwave-safe, and naturally grease-resistant — making it ideal for takeaway food.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy plain napkins wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies plain napkins wholesale across Ireland, including unprinted paper napkins and premium linen-feel napkins in bulk quantities. We offer competitive case pricing with fast nationwide delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is eco-friendly packaging more expensive than standard packaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eco packaging can cost more per unit, but the gap has narrowed significantly. Ordering in bulk, focusing on 2–3 core eco products, and choosing bagasse over bioplastics keeps costs competitive. Many Irish businesses also find that eco packaging improves customer loyalty enough to offset the difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is eco packaging mandatory in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ireland has banned certain single-use plastics under the EU Single-Use Plastics Directive, including plastic plates, cutlery, straws, and expanded polystyrene (EPS) food containers. Switching to eco-friendly alternatives is both legally compliant and commercially beneficial.',
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
    { '@type': 'ListItem', position: 3, name: 'Eco Packaging for Takeaways Ireland', item: `${siteUrl}/blog/eco-packaging-for-takeaways-ireland` },
  ],
};

export default function EcoPackagingTakeawaysIreland() {
  const title = 'Eco Packaging for Takeaways Ireland: How to Switch to Sustainable Food Packaging';
  const description =
    'Irish consumers are choosing businesses that care about the planet. Discover the best eco-friendly food packaging options in Ireland — from bagasse burger boxes to plain napkins wholesale — and how to make the switch affordably.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="eco packaging takeaways ireland, eco-friendly packaging ireland, sustainable food packaging ireland, bagasse packaging ireland, plain napkins wholesale ireland, biodegradable packaging ireland, eco takeaway boxes, green packaging ireland" />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${siteUrl}/blog/eco-packaging-for-takeaways-ireland`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/eco-packaging-for-takeaways-ireland`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}/images/products/bagasse-burger-box/1.png`} />
        <meta property="og:image:alt" content="Eco-friendly bagasse burger boxes Ireland" />
        <meta property="article:published_time" content="2026-02-13" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/products/bagasse-burger-box/1.png`} />

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
          <span className="text-slate-900">Eco Packaging for Takeaways Ireland</span>
        </nav>

        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Sustainability</span>
          <span className="text-slate-400 text-sm">13 Feb 2026 · 7 min read</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Eco Packaging for Takeaways Ireland: How to Switch to Sustainable Food Packaging
        </h1>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image
            src="/images/products/bagasse-burger-box/1.png"
            alt="Eco-friendly bagasse burger boxes Ireland – sustainable takeaway packaging"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Intro */}
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A 2024 Bord Bia survey found that 68% of Irish consumers say sustainability influences
            their food purchasing decisions. For takeaways and restaurants, that is a statistic that
            translates directly into repeat business — or lost trade. The good news is that switching
            to <strong>eco packaging for your takeaway in Ireland</strong> is more affordable and
            practical than it was even two years ago.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers the most practical eco-friendly packaging options available to Irish
            food businesses today — from <strong>bagasse burger boxes</strong> to{' '}
            <strong>plain napkins wholesale</strong> — with honest advice on cost, switching strategy,
            and what to look for when comparing suppliers.
          </p>

          {/* Alert box: legal context */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-amber-800 text-sm font-semibold mb-1">Irish Law Update</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Under the EU Single-Use Plastics Directive (transposed into Irish law in 2021–2022), plastic
              cutlery, plastic straws, expanded polystyrene (EPS) food containers, and plastic plates are
              banned. If your takeaway still uses EPS burger boxes or polystyrene cups, switching to
              compliant packaging is no longer optional.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            The Best Eco-Friendly Takeaway Packaging Options in Ireland
          </h2>

          {/* --- Bagasse --- */}
          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Bagasse Burger Boxes &amp; Food Containers
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Bagasse</strong> is the fibrous pulp left over after sugarcane juice is extracted — a
            by-product that would otherwise be waste. Pressed into moulds, it becomes an excellent
            food container: naturally grease-resistant, microwave-safe to 220°C, and home-compostable
            within 60–90 days.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            For Irish takeaways, bagasse burger boxes are the most popular eco product we sell. They
            perform at least as well as their polystyrene equivalents — and look considerably more
            premium on the customer&apos;s table.
          </p>

          {/* Bagasse image grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { src: '/images/products/bagasse-burger-box/2.png', alt: 'Bagasse burger box open – sustainable food packaging Ireland' },
              { src: '/images/products/bagasse-burger-box/4.png', alt: 'Bagasse takeaway box with food – eco packaging Ireland' },
              { src: '/images/products/bagasse-burger-box/5.png', alt: 'Eco bagasse boxes stacked – wholesale sustainable packaging' },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-xl overflow-hidden h-36">
                <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>

          {/* --- Paper bags --- */}
          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Kraft Paper Bags &amp; SOS Grab Bags
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Paper bags are the most straightforward swap for plastic carrier bags. For Irish takeaways,
            there are three main styles:
          </p>
          <ul className="space-y-3 mb-6 text-slate-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">→</span>
              <span><strong>SOS grab bags</strong> — gusseted paper bags with a flat base, ideal for carrying multiple food containers. The most common takeaway bag format in Ireland.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">→</span>
              <span><strong>Flat handle paper bags</strong> — flat paper handles, smart presentation for deli and café orders.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">→</span>
              <span><strong>Twisted handle bags</strong> — rope-style handles, more premium feel for restaurant collection orders and retail gifting.</span>
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/sos-bags/1.png"
                alt="SOS grab bags Ireland – eco paper takeaway bags wholesale"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/twisted-handle-bags/1.png"
                alt="Twisted handle paper bags Ireland – sustainable packaging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>

          {/* --- Napkins --- */}
          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Plain Napkins Wholesale Ireland
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            One of the most overlooked eco swaps for Irish food businesses is the humble napkin. Plastic-free,
            paper napkins are already the eco-compliant choice — but there is a big difference in quality
            between a thin single-ply napkin and a <strong>premium linen-feel napkin</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Plain napkins wholesale in Ireland</strong> are available in a range of grades:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Best For</th>
                  <th className="text-left px-4 py-3 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single-ply paper', 'Fast food, high-volume takeaways', 'Lowest'],
                  ['2-ply paper', 'Cafés, casual dining, delis', 'Low–Medium'],
                  ['Linen-feel (airlaid)', 'Restaurants, events, premium takeaways', 'Medium'],
                ].map(([type, best, cost], i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-900">{type}</td>
                    <td className="px-4 py-3 text-slate-700">{best}</td>
                    <td className="px-4 py-3 text-slate-600">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/premium-linen-feel-napkins/Napkin Mock 1.jpg"
                alt="Premium linen-feel napkins Ireland – plain napkins wholesale"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/premium-linen-feel-napkins/Napkin Mock 3.jpg"
                alt="Wholesale napkins Ireland – plain unprinted napkins bulk supply"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to Switch Without Blowing Your Budget
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The biggest barrier Irish food businesses cite when considering eco packaging is cost.
            Here is a practical framework for making the switch in stages:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                step: 'Step 1',
                title: 'Audit your current packaging spend',
                desc: 'List every packaging item you currently buy: boxes, bags, napkins, cups, lids, cutlery. Note the monthly spend and supplier. This gives you a baseline to compare like-for-like.',
              },
              {
                step: 'Step 2',
                title: 'Identify the easy swaps first',
                desc: 'Plastic straws → paper straws. Polystyrene cups → kraft paper cups. Plastic cutlery → compostable CPLA cutlery. These swaps are typically low-cost and require no process changes.',
              },
              {
                step: 'Step 3',
                title: 'Switch containers progressively',
                desc: 'Bagasse burger boxes cost a little more per unit than cheap EPS, but buying in bulk closes the gap. Start with your highest-volume container (e.g., burger box or main meal tray) and switch that first.',
              },
              {
                step: 'Step 4',
                title: 'Tell your customers',
                desc: 'Print a small "eco packaging" badge on your menu or add a note to your delivery app listing. Irish consumers actively reward businesses that communicate their sustainability efforts.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.replace('Step ', '')}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to Look for in an Eco Packaging Supplier in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Not all &quot;eco&quot; packaging is created equal. When evaluating suppliers for{' '}
            <strong>sustainable packaging in Ireland</strong>, ask these questions:
          </p>
          <ul className="space-y-3 mb-8 text-slate-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Certifications:</strong> Look for FSC (Forest Stewardship Council) certification on paper products and TÜV or DIN CERTCO certification on compostable items — these confirm the packaging meets genuine compostability standards.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Irish stock vs. imports:</strong> Suppliers with Irish-held stock can fulfil orders in days rather than weeks. This matters when you run low unexpectedly during a busy period.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Minimum order quantities:</strong> Eco packaging is typically cheaper per unit in bulk, but high MOQs can tie up cash flow for smaller businesses. Look for suppliers offering low MOQs on core lines.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <span><strong>Custom printing availability:</strong> If you want branded eco packaging — a custom-printed bagasse box or a paper bag with your logo — confirm your supplier can print on eco materials without requiring massive minimum runs.</span>
            </li>
          </ul>

          {/* Section 4: long-tail keyword section */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Eco Packaging for Specific Irish Food Businesses
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Chipper &amp; traditional takeaway</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            The priority is grease resistance and heat retention. Bagasse trays and boxes are the best
            eco alternative to polystyrene. Pair with a kraft SOS grab bag and paper straws for a fully
            compliant, low-plastic setup.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Café &amp; deli</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Focus on cups, lids, and sandwich packaging. FSC-certified kraft paper bags and
            <strong> plain napkins wholesale</strong> in 2-ply or linen-feel are the most visible eco
            signals to café customers. A branded paper cup makes the biggest difference to customer
            perception.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Pizza takeaway</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pizza boxes are already paper-based, so the eco upgrade is relatively simple: switch from
            bleached white board to unbleached or recycled-content board, and ensure your box is
            printed with water-based inks. Pair with a kraft handle bag for collection orders.
            See our guide on{' '}
            <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline font-medium">
              pizza box sizes in Ireland
            </Link>{' '}
            for more on choosing the right size for your menu.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Restaurant &amp; catering</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Catering operators tend to use high volumes of plain packaging — trays, lids, napkins, and
            containers — where <Link href="/plain-packaging" className="text-blue-600 hover:underline font-medium">
              plain packaging wholesale
            </Link>{' '}
            pricing makes the eco switch affordable even at scale.
            Premium linen-feel napkins are a popular upgrade for sit-down events that want to avoid
            single-use plastic-coated paper alternatives.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is bagasse packaging?',
                a: 'Bagasse is the fibrous pulp left over after sugarcane juice is extracted. It is pressed and moulded into food containers, burger boxes, and plates. Bagasse packaging is fully compostable, microwave-safe, and naturally grease-resistant.',
              },
              {
                q: 'Where can I buy plain napkins wholesale in Ireland?',
                a: 'PrintNPack supplies plain napkins wholesale across Ireland — including unprinted paper napkins and premium linen-feel napkins in bulk quantities, with competitive case pricing and fast nationwide delivery.',
              },
              {
                q: 'Is eco-friendly packaging more expensive than standard packaging?',
                a: 'It can cost marginally more per unit, but the gap has narrowed significantly. Ordering in bulk, choosing bagasse over bioplastics, and focusing on 2–3 core eco products keeps costs competitive. Customer loyalty improvements often offset the price difference.',
              },
              {
                q: 'Is eco packaging mandatory in Ireland?',
                a: 'Ireland has banned certain single-use plastics including plastic plates, cutlery, straws, and expanded polystyrene (EPS) food containers. Switching to eco-friendly alternatives is legally required for many product types.',
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
        <div className="mt-14 bg-green-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to switch to eco-friendly packaging?</h2>
          <p className="text-green-100 mb-6">
            From bagasse burger boxes to plain napkins wholesale — PrintNPack supplies sustainable
            packaging to food businesses across Ireland. Low MOQs, fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/eco-bagasse-burger-boxes"
              className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Bagasse Packaging →
            </Link>
            <Link
              href="/plain-packaging"
              className="bg-green-900 hover:bg-green-950 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Plain Packaging Wholesale
            </Link>
            <Link
              href="/quote"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-green-500"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Related post */}
        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">Related Guide</p>
          <Link href="/blog/pizza-box-sizes-ireland" className="group flex items-start gap-4">
            <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/images/pizza-boxes/PIZZA_BOX_1.jpg"
                alt="Pizza box sizes Ireland guide"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm leading-snug">
                Pizza Box Sizes Ireland: The Complete Guide for Takeaways &amp; Restaurants
              </h3>
              <span className="text-blue-600 text-xs mt-1 inline-block">Read the guide →</span>
            </div>
          </Link>
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
