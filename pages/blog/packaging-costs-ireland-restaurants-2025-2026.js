import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import PizzaPackagingPromo from '../../components/blog/PizzaPackagingPromo';

import { SITE_URL } from '../../lib/site';
const SLUG = 'packaging-costs-ireland-restaurants-2025-2026';
const CANONICAL = `${SITE_URL}/blog/${SLUG}`;
const PUBLISHED = '2026-02-13';
const TITLE = 'Irish Restaurants & Packaging Costs in 2025–2026: What the Data Actually Shows';
const DESCRIPTION =
  'Packaging costs for Irish restaurants peaked +39% above 2019 levels and remain +24% higher today. Here is the full data on what drove the spike, what PPWR means for Irish food businesses, and how operators are cutting cost-per-order.';

const yearData = [
  { year: '2019', revenue: '€8.3bn', volumeIdx: '100', closures: 'baseline', packagingIdx: '100' },
  { year: '2020', revenue: '€5.1bn', volumeIdx: '61', closures: '~620', packagingIdx: '102' },
  { year: '2021', revenue: '€6.9bn', volumeIdx: '83', closures: '~390', packagingIdx: '114' },
  { year: '2022', revenue: '€8.7bn', volumeIdx: '95', closures: '~210', packagingIdx: '139' },
  { year: '2023', revenue: '€9.4bn', volumeIdx: '98', closures: '~280', packagingIdx: '131' },
  { year: '2024', revenue: '€9.9bn', volumeIdx: '97', closures: '~310', packagingIdx: '126' },
  { year: '2025', revenue: '€10.4bn', volumeIdx: '93', closures: '150+ Q1', packagingIdx: '124' },
  { year: '2026F', revenue: '€10.9bn*', volumeIdx: '92*', closures: 'TBD', packagingIdx: '~120*' },
];

const statCards = [
  { value: '€10.4bn', label: 'Irish foodservice market 2025 (nominal)', sub: '+5% y/y but volume -4.5% (CSO)' },
  { value: '150+', label: 'Restaurant closures in Q1 2025 alone', sub: '141 hospitality insolvencies (+50% y/y, PwC)' },
  { value: '+39%', label: 'Peak packaging cost index vs 2019 (2022)', sub: 'Raw materials + container freight shock' },
  { value: '+24%', label: 'Current packaging premium vs 2019 (2025)', sub: 'Costs down from peak but still elevated' },
  { value: '€2.2bn', label: 'Annual food delivery spend in Ireland', sub: '2.9 orders/month, €46.49/month per household' },
  { value: '25–35%', label: 'Platform commission rates (Just Eat / Deliveroo)', sub: 'Leaves ~€9–12 margin on a €35 order' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: TITLE,
      description: DESCRIPTION,
      url: CANONICAL,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      image: `${SITE_URL}/images/pizza-boxes/PIZZA_BOX_3.jpg`,
      author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
      mainEntityOfPage: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: TITLE, item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much have packaging costs increased for Irish restaurants since 2019?',
          acceptedAnswer: { '@type': 'Answer', text: 'Packaging costs peaked at approximately +39% above 2019 levels in 2022 due to container shipping shocks and raw material inflation. By 2025 costs have eased but remain roughly +24% above pre-pandemic baselines — a sustained increase most operators have not fully recovered from.' },
        },
        {
          '@type': 'Question',
          name: 'What is PPWR and how does it affect Irish restaurants?',
          acceptedAnswer: { '@type': 'Answer', text: 'PPWR (Packaging and Packaging Waste Regulation) entered EU force in February 2025, with practical compliance deadlines phasing in through August 2026. It mandates reduced plastic, higher recycled content, and eventually reuse schemes for takeaway packaging. Irish operators need to start switching to compliant eco packaging now to avoid disruption.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best way for Irish restaurants to reduce packaging costs in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'The most effective levers are: (1) SKU rationalisation — cutting packaging lines to fewer sizes that nest and order in bigger volumes; (2) ordering in bulk from Irish wholesalers rather than through kitchen distributors; (3) tracking cost-per-order as a KPI alongside food cost percentage; (4) moving to own-brand or plain packaging where brand equity is low.' },
        },
      ],
    },
  ],
};

export default function PackagingCostsPost() {
  return (
    <Layout>
      <Head>
        <title>{TITLE} | PrintNPack Ireland</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}/images/pizza-boxes/PIZZA_BOX_3.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="Irish restaurant packaging costs 2025-2026" />
        <meta property="article:published_time" content={PUBLISHED} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/pizza-boxes/PIZZA_BOX_3.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-slate-700 truncate">Packaging Costs 2025–2026</span>
        </nav>

        {/* Category + read time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Industry Data
          </span>
          <span className="text-slate-400 text-sm">10 min read</span>
          <span className="text-slate-400 text-sm">·</span>
          <time dateTime={PUBLISHED} className="text-slate-400 text-sm">February 2026</time>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          Irish Restaurants &amp; Packaging Costs in 2025–2026:{' '}
          <span className="text-blue-600">What the Data Actually Shows</span>
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          The Irish foodservice sector is nominally at an all-time high — but closures are accelerating,
          real volumes are down, and packaging costs have never fully unwound from the post-COVID spike.
          Here is the data, in one place, with no spin.
        </p>

        {/* Hero image grid */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          <div className="relative h-64 rounded-2xl overflow-hidden col-span-2 sm:col-span-1">
            <Image
              src="/images/pizza-boxes/PIZZA_BOX_3.jpg"
              alt="Custom pizza boxes Ireland – restaurant packaging costs 2025"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="hidden sm:grid grid-rows-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/plain-packaging/10928.webp"
                alt="Foil containers Ireland – food packaging wholesale"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/plain-packaging/10929.webp"
                alt="Foil takeaway containers Ireland"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>

        {/* ── STAT DASHBOARD ── */}
        <section aria-label="Key statistics" className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Numbers at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statCards.map((s) => (
              <div
                key={s.label}
                className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col gap-1"
              >
                <span className="text-3xl font-extrabold text-blue-400 leading-none">{s.value}</span>
                <span className="text-sm font-semibold text-white mt-1">{s.label}</span>
                <span className="text-xs text-slate-400 leading-snug">{s.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── YEAR BY YEAR TABLE ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Year-by-Year: Irish Foodservice &amp; Packaging Costs (2019–2026)
          </h2>
          <p className="text-slate-500 text-sm mb-5">
            Packaging cost proxy index (2019 = 100) tracks blended price changes across corrugated board,
            polystyrene, plastics, and paper — weighted to a typical Irish takeaway basket. Revenue and
            volume figures: CSO/Fáilte Ireland. Closures: Restaurants Association of Ireland / PwC.
            *2026F = forecast.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">Industry Revenue</th>
                  <th className="px-4 py-3 text-right font-semibold">Volume Index</th>
                  <th className="px-4 py-3 text-right font-semibold">Closures</th>
                  <th className="px-4 py-3 text-right font-semibold">Packaging Cost Index</th>
                </tr>
              </thead>
              <tbody>
                {yearData.map((row, i) => (
                  <tr
                    key={row.year}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.year}</td>
                    <td className="px-4 py-3 text-right text-slate-700">{row.revenue}</td>
                    <td className="px-4 py-3 text-right text-slate-700">{row.volumeIdx}</td>
                    <td className="px-4 py-3 text-right text-slate-700">{row.closures}</td>
                    <td className={`px-4 py-3 text-right font-bold ${
                      parseInt(row.packagingIdx) >= 130 ? 'text-red-600' :
                      parseInt(row.packagingIdx) >= 115 ? 'text-amber-600' :
                      'text-slate-700'
                    }`}>
                      {row.packagingIdx}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Red = severe inflationary pressure. Amber = elevated. Packaging index peaks at 139 in 2022.
          </p>
        </section>

        {/* ── PACKAGING COST INDEX TIMELINE ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            The Packaging Cost Spike: How It Happened
          </h2>

          {/* Visual cost index bar */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Packaging Cost Index vs 2019 Baseline (2019 = 100)
            </p>
            {yearData.slice(0, 7).map((row) => {
              const val = parseInt(row.packagingIdx) || 100;
              const pct = Math.min((val / 145) * 100, 100);
              const barColor = val >= 130 ? 'bg-red-500' : val >= 115 ? 'bg-amber-400' : 'bg-blue-500';
              return (
                <div key={row.year} className="flex items-center gap-3 mb-2">
                  <span className="w-12 text-xs font-semibold text-slate-600 shrink-0">{row.year}</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-5 overflow-hidden">
                    <div
                      className={`${barColor} h-5 rounded-full flex items-center justify-end pr-2 transition-all`}
                      style={{ width: `${pct}%` }}
                    >
                      <span className="text-white text-xs font-bold">{val}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-4 mt-4">
              <span className="flex items-center gap-1.5 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />Normal</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />Elevated</span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500"><span className="w-3 h-3 rounded-full bg-red-500 inline-block" />Severe pressure</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              The shock was not a single event — it was a cascade. <strong>COVID-19 factory shutdowns
              in 2020</strong> reduced global packaging manufacturing capacity just as foodservice
              switched almost entirely to delivery, massively increasing demand for takeaway boxes,
              foil containers, paper bags, and single-use cups.
            </p>
            <p>
              By 2021 demand had rebounded but capacity had not. The second wave hit when{' '}
              <strong>container shipping rates from China</strong> — the origin point for the majority
              of raw packaging materials and finished packaging goods — rose by over 800% between early
              2020 and Q4 2021. A 40ft container that cost $1,800 to ship pre-COVID peaked at over
              $20,000 at the height of the crisis.
            </p>
            <p>
              Simultaneously, <strong>raw material prices surged</strong>: virgin pulp up ~45%, recycled
              paper/board up ~60%, petroleum-derived plastics up ~30%, and aluminium (used in foil
              trays) up ~40% from trough to peak. Irish importers and distributors — who had no
              domestic manufacturing base to insulate them — absorbed or passed on every layer.
            </p>
          </div>
        </section>

        {/* Pizza box image break */}
        <div className="grid grid-cols-3 gap-3 my-12">
          {['PIZZA_BOX_5.jpg', 'PIZZA_BOX_7.jpg', 'PIZZA_BOX_9.jpg'].map((img, i) => (
            <div key={i} className="relative h-44 rounded-xl overflow-hidden">
              <Image
                src={`/images/pizza-boxes/${img}`}
                alt={`Custom pizza box Ireland – packaging cost context ${i + 1}`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        {/* ── COST DRIVER MAP ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Where Your Packaging Cost Actually Comes From
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                stage: 'Raw Materials',
                icon: '🌲',
                items: ['Virgin wood pulp (board, paper)', 'Recycled fibre (corrugated)', 'Aluminium (foil trays)', 'Petroleum derivatives (plastics)', 'Energy costs at mills'],
                color: 'border-green-200 bg-green-50',
                labelColor: 'text-green-700',
              },
              {
                stage: 'Manufacturing & Shipping',
                icon: '🚢',
                items: ['Asia-to-Europe container freight', 'Factory energy costs', 'Currency (USD/EUR)', 'Port congestion surcharges', 'Minimum order quantities'],
                color: 'border-blue-200 bg-blue-50',
                labelColor: 'text-blue-700',
              },
              {
                stage: 'Your Invoice Price',
                icon: '🧾',
                items: ['Irish distributor margin (15–25%)', 'VAT (23% for packaging)', 'Delivery surcharges', 'Kitchen supplier markup', 'Currency hedging pass-through'],
                color: 'border-orange-200 bg-orange-50',
                labelColor: 'text-orange-700',
              },
            ].map((col) => (
              <div key={col.stage} className={`rounded-2xl border p-5 ${col.color}`}>
                <div className="text-2xl mb-2">{col.icon}</div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${col.labelColor}`}>{col.stage}</p>
                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              The typical Irish restaurant buys packaging through a <strong>kitchen distributor</strong> —
              the same company that delivers cooking oil, napkins, and cleaning supplies. This convenience
              comes at a cost: distributor margins on packaging range from 15% to 30% above what a
              dedicated packaging wholesaler charges, and kitchen distributors do not carry the full range
              of sizes, board grades, or print options.
            </p>
            <p>
              Switching even 50% of packaging spend to a specialist Irish packaging supplier can
              realistically cut packaging line costs by 12–20%, with better lead times and no minimum
              order quantity surprises.
            </p>
          </div>
        </section>

        {/* Foil container gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-12">
          {['10928.webp', '10929.webp', '109291.webp', '109292.webp'].map((img, i) => (
            <div key={i} className="relative h-36 rounded-xl overflow-hidden bg-slate-100">
              <Image
                src={`/images/plain-packaging/${img}`}
                alt={`Foil container Ireland – wholesale packaging for restaurants ${i + 1}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 text-center -mt-8 mb-12">
          Foil containers available in plain or custom-branded from PrintNPack Ireland — order from 500 units.
        </p>

        {/* ── PPWR SECTION ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            PPWR &amp; Repak: What Irish Restaurants Need to Know for 2026
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'PPWR entered EU force', value: 'February 2025', icon: '📋', color: 'bg-blue-50 border-blue-200' },
              { label: 'Practical compliance deadline', value: '~August 2026', icon: '⏰', color: 'bg-amber-50 border-amber-200' },
              { label: 'Repak licence renewed', value: 'January 2026 (10 years)', icon: '♻️', color: 'bg-green-50 border-green-200' },
              { label: 'Smurfit WestRock Ireland', value: 'Now world\'s largest paper/board co.', icon: '🏭', color: 'bg-slate-50 border-slate-200' },
            ].map((card) => (
              <div key={card.label} className={`rounded-2xl border p-5 ${card.color} flex items-start gap-4`}>
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{card.label}</p>
                  <p className="text-base font-bold text-slate-900 mt-0.5">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              The <strong>EU Packaging and Packaging Waste Regulation (PPWR)</strong> entered force in
              February 2025. For Irish foodservice operators the most immediate obligations are:
            </p>
            <ul>
              <li>
                <strong>Mandatory recycled content targets</strong> — packaging must hit minimum recycled
                content thresholds by 2030, ramping from 2026. Early-movers who switch now will avoid
                a forced disruptive change later.
              </li>
              <li>
                <strong>Single-use plastic restrictions</strong> — the SUP Directive already bans plates,
                cutlery, straws, and polystyrene cups in Ireland. PPWR extends the scope and tightens
                enforcement, particularly for labelling requirements.
              </li>
              <li>
                <strong>Reuse schemes</strong> — PPWR mandates reuse targets for food and beverage
                packaging in certain service contexts by 2030. Takeaway-first operators are partially
                insulated, but eat-in operations face more significant change.
              </li>
            </ul>
            <p>
              <strong>Repak's 10-year licence</strong>, confirmed in January 2026, gives Ireland a
              stable producer responsibility scheme through 2035. Businesses paying Repak levies can
              expect levy structures to remain broadly stable — but the levy itself is calculated per
              kilogram of packaging placed on market, so reducing overall packaging weight and switching
              to lighter substrates directly reduces your Repak bill.
            </p>
            <p>
              <strong>Smurfit WestRock</strong>'s consolidation (completed 2024) has created the world's
              largest paper and board company with significant Irish roots. For Irish buyers this has
              mixed implications: procurement leverage increases for large buyers, but smaller operators
              may face longer lead times as the combined entity optimises its global order book.
            </p>
          </div>
        </section>

        {/* ── DELIVERY ECONOMICS ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Delivery Economics: Where Packaging Cost Hurts Most
          </h2>

          {/* Delivery stat row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { value: '€2.2bn', label: 'Annual Irish food delivery market', color: 'bg-blue-600' },
              { value: '2.9×', label: 'Average orders per household per month', color: 'bg-slate-700' },
              { value: '€46.49', label: 'Average monthly household delivery spend', color: 'bg-slate-700' },
            ].map((s) => (
              <div key={s.label} className={`${s.color} text-white rounded-2xl p-4 text-center`}>
                <p className="text-2xl sm:text-3xl font-extrabold">{s.value}</p>
                <p className="text-xs mt-1 leading-snug opacity-80">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Economics of a Typical €35 Delivery Order</h3>
            <div className="space-y-2">
              {[
                { label: 'Order value (customer pays)', value: '€35.00', highlight: false },
                { label: 'Platform commission (30%)', value: '−€10.50', highlight: true, neg: true },
                { label: 'Payment processing (~2%)', value: '−€0.70', highlight: false, neg: true },
                { label: 'Food cost (~32%)', value: '−€11.20', highlight: false, neg: true },
                { label: 'Packaging cost (per order avg)', value: '−€1.80', highlight: true, neg: true },
                { label: 'Remaining for labour, rent, profit', value: '≈€10.80', highlight: false },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between text-sm py-1.5 border-b border-slate-700 ${row.highlight ? 'text-red-400 font-semibold' : 'text-slate-300'}`}>
                  <span>{row.label}</span>
                  <span className="font-mono">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Illustrative model. Food cost % varies significantly by cuisine type. Packaging cost based on industry average for a meal with pizza box or foil container + bag + napkin.
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              At €1.80 per delivery order, packaging is a small number — until you realise a busy
              Dublin takeaway doing 150 delivery orders per day is spending <strong>€270/day or €98,550/year
              on packaging for delivery alone</strong>. A 15% reduction in packaging cost through bulk
              ordering and SKU rationalisation saves nearly €15,000 annually. That is not a rounding
              error — that is a part-time salary.
            </p>
          </div>
        </section>

        {/* More pizza box imagery */}
        <div className="grid grid-cols-2 gap-4 my-12">
          <div className="relative h-56 rounded-2xl overflow-hidden">
            <Image
              src="/images/pizza-boxes/PIZZA_BOX_1.jpg"
              alt="Custom branded pizza boxes Ireland – bulk order packaging"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative h-56 rounded-2xl overflow-hidden">
            <Image
              src="/images/pizza-boxes/PIZZA_BOX_11.jpg"
              alt="Restaurant pizza box supplier Ireland"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* ── PRACTICAL ACTIONS ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            5 Practical Actions for Irish Restaurants in 2026
          </h2>

          <div className="space-y-4">
            {[
              {
                n: '01',
                title: 'Conduct a packaging SKU audit',
                body: 'List every packaging item you currently buy, its unit cost, and monthly volume. Most operators discover they are carrying 40–60% more SKUs than they need — duplicate sizes, overlapping products from different suppliers. Consolidating to a tighter range unlocks volume discounts and reduces storage complexity.',
              },
              {
                n: '02',
                title: 'Track cost-per-order as a KPI',
                body: 'Food cost percentage is a standard KPI. Cost-per-delivery-order for packaging is not — but it should be. Divide total monthly packaging spend by total delivery orders. A target of €1.20–1.60/order is achievable for most takeaways; anything above €2.20 warrants an immediate review.',
              },
              {
                n: '03',
                title: 'Buy directly from a packaging specialist, not your kitchen distributor',
                body: 'Kitchen distributors are convenient but expensive for packaging. Specialist packaging suppliers — particularly Irish ones who hold local stock — offer 12–25% lower unit prices, broader specification ranges, and faster delivery. For foil containers, pizza boxes, and paper bags, the savings are particularly significant at volume.',
              },
              {
                n: '04',
                title: 'Start your PPWR transition now, not in August 2026',
                body: 'Switching packaging suppliers disrupts kitchen operations — new sizes, new folding patterns, team retraining. If you wait until August 2026 deadlines are imminent, you will be doing this under pressure and in competition with every other operator in Ireland scrambling simultaneously. Begin your eco packaging specification now.',
              },
              {
                n: '05',
                title: 'Use design to reduce premium packaging dependency',
                body: 'Branded packaging can command a premium perception that justifies cost. But branding doesn\'t have to mean full-print — a branded stamp on a kraft box, a branded sticker on a plain bag, or branded tissue inside a plain SOS bag achieves the customer experience at 30–40% lower packaging cost than full-print short runs.',
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <span className="text-4xl font-extrabold text-blue-100 shrink-0 leading-none mt-1">{step.n}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How much have packaging costs increased for Irish restaurants since 2019?',
                a: 'Packaging costs peaked at approximately +39% above 2019 levels in 2022 due to container shipping shocks and raw material inflation. By 2025 costs have eased but remain roughly +24% above pre-pandemic baselines — a sustained increase most operators have not fully recovered from.',
              },
              {
                q: 'What is PPWR and how does it affect Irish restaurants?',
                a: 'PPWR (Packaging and Packaging Waste Regulation) entered EU force in February 2025, with practical compliance deadlines phasing in through August 2026. It mandates reduced plastic, higher recycled content, and eventually reuse schemes. Irish operators need to start switching to compliant eco packaging now to avoid disruption.',
              },
              {
                q: 'What is the best way for Irish restaurants to reduce packaging costs in 2026?',
                a: 'The most effective levers are: (1) SKU rationalisation — cutting packaging lines to fewer sizes that order in bigger volumes; (2) buying directly from packaging specialists rather than kitchen distributors; (3) tracking cost-per-order as a KPI; (4) moving to plain or stamp-branded packaging where full-print adds cost without proportional customer value.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-slate-900 font-semibold text-sm gap-4 hover:bg-slate-50">
                  {q}
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <PizzaPackagingPromo />

        {/* ── CTA ── */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center mb-14">
          <h2 className="text-2xl font-bold mb-3">Ready to Cut Your Packaging Cost Per Order?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            PrintNPack Ireland supplies pizza boxes, foil containers, paper bags, and eco packaging
            to restaurants across Ireland — no unnecessary middlemen, no minimum order shock.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/pizza-boxes-ireland"
              className="border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Pizza Boxes Ireland
            </Link>
            <Link
              href="/custom-pizza-boxes-ireland"
              className="border border-white/60 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Custom Pizza Boxes
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/packaging-prices-ireland-covid-shipping', label: 'Why Packaging Prices Have Been All Over the Place' },
              { href: '/blog/irish-restaurant-industry-delivery-2025', label: 'Irish Restaurant Industry 2025: Delivery & Commission Costs' },
              { href: '/blog/plain-packaging-wholesale-ireland', label: 'Plain Packaging Wholesale Ireland' },
              { href: '/blog/eco-packaging-for-takeaways-ireland', label: 'Eco Packaging for Irish Takeaways' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>

        <Link href="/blog" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
          ← Back to all guides
        </Link>
      </main>
    </Layout>
  );
}
