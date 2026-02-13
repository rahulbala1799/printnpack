import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const SITE_URL = 'https://printnpack.ie';
const SLUG = 'eps-polystyrene-packaging-ireland-legal-2025';
const CANONICAL = `${SITE_URL}/blog/${SLUG}`;
const PUBLISHED = '2026-02-13';
const TITLE = 'Expanded Polystyrene (EPS) in Ireland: What Is Banned, What Is Still Legal, and What Changes by 2030';
const DESCRIPTION =
  'EPS single-use food containers have been illegal in Ireland since July 2021 — but not all EPS is banned. This guide covers the legal status of polystyrene packaging in Ireland, the fish box exception, recycling reality, and what PPWR means for Irish businesses by 2030.';

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
      image: `${SITE_URL}/images/products/bagasse-burger-box/1.png`,
      author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'PrintNPack Ireland',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
      },
      mainEntityOfPage: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: 'EPS Polystyrene Ireland Legal Status 2025', item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is expanded polystyrene banned in Ireland?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'EPS single-use food and beverage containers for ready-to-eat consumption have been banned in Ireland since 3 July 2021 under the EU Single-Use Plastics Directive. However, EPS used for transport and cold-chain packaging — such as fish boxes and meat trays for raw, unprocessed products — is generally not covered by this ban.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I still use EPS fish boxes in Ireland?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. EU Commission guidance specifically lists fish boxes and meat trays as examples excluded from the SUP Directive\'s "food container" ban, because the food is not intended for immediate consumption and requires further preparation. However, EPS fish boxes are still subject to packaging waste obligations and will face tighter recyclability requirements under PPWR from 2026 to 2030.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I dispose of EPS polystyrene in Ireland?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MyWaste (Ireland\'s official guidance) classifies EPS as general waste for household disposal, while noting it can be recycled when separately collected at civic amenity centres that accept it. Businesses should contract an authorised waste collector for EPS and cannot rely on civic amenity centres, which are typically household-only and may charge.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does PPWR mean for EPS packaging in Ireland?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PPWR (EU Packaging and Packaging Waste Regulation) applies from 12 August 2026 and introduces restrictions on certain single-use plastic packaging formats from 1 January 2030, including HORECA contexts. EPS users must also demonstrate packaging recyclability by 2030. Businesses should begin transitioning to compliant eco packaging now rather than waiting for deadlines.',
          },
        },
      ],
    },
  ],
};

const timelineEvents = [
  { date: 'June 2019', label: 'SUP Directive adopted', detail: 'EU Directive 2019/904 adopted — includes EPS food/beverage container market restrictions', color: 'bg-slate-400' },
  { date: '3 Jul 2021', label: 'Ireland bans EPS containers', detail: 'EPS single-use cups and food/beverage containers banned from the Irish market', color: 'bg-red-500' },
  { date: 'Jan 2023', label: 'EPR litter cost obligations', detail: 'Extended Producer Responsibility litter clean-up cost obligations begin for certain SUP packaging producers', color: 'bg-amber-400' },
  { date: 'Feb 2025', label: 'PPWR enters EU force', detail: 'Regulation (EU) 2025/40 enters into force (20 days after OJ publication)', color: 'bg-blue-400' },
  { date: '12 Aug 2026', label: 'PPWR applies across EU', detail: 'PPWR applies across all Member States — new packaging rules enforceable', color: 'bg-blue-600' },
  { date: '12 Feb 2028', label: 'Reuse option mandatory', detail: 'HORECA must offer consumers an option to obtain takeaway food/drink in reusable packaging', color: 'bg-purple-500' },
  { date: '1 Jan 2030', label: 'Format restrictions & recyclability', detail: 'PPWR restrictions on certain packaging formats (Annex V) bite; recyclability performance grades apply', color: 'bg-red-700' },
];

export default function EpsPost() {
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
        <meta property="og:image" content={`${SITE_URL}/images/products/bagasse-burger-box/1.png`} />
        <meta property="og:image:alt" content="Eco alternatives to EPS polystyrene packaging Ireland" />
        <meta property="article:published_time" content={PUBLISHED} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/products/bagasse-burger-box/1.png`} />

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
          <span className="text-slate-700 truncate">EPS Polystyrene Ireland 2025</span>
        </nav>

        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Compliance Guide
          </span>
          <span className="text-slate-400 text-sm">11 min read</span>
          <span className="text-slate-400 text-sm">·</span>
          <time dateTime={PUBLISHED} className="text-slate-400 text-sm">February 2026</time>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          Expanded Polystyrene (EPS) in Ireland:{' '}
          <span className="text-blue-600">What Is Banned, What Is Still Legal, and What Changes by 2030</span>
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          EPS single-use food containers have been illegal in Ireland since July 2021 — but &ldquo;all EPS
          is banned&rdquo; is a myth. The legal picture, recycling reality, and the PPWR rules coming between
          2026 and 2030 are more nuanced than most operators realise.
        </p>

        {/* Hero image grid */}
        <div className="grid grid-cols-3 gap-3 mb-12">
          <div className="relative h-52 rounded-2xl overflow-hidden col-span-2">
            <Image
              src="/images/products/bagasse-burger-box/1.png"
              alt="Bagasse eco burger boxes Ireland – sustainable alternative to EPS polystyrene"
              fill
              className="object-cover"
              sizes="66vw"
              priority
            />
          </div>
          <div className="relative h-52 rounded-2xl overflow-hidden">
            <Image
              src="/images/plain-packaging/10928.webp"
              alt="Foil containers Ireland – EPS-free food packaging alternative"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        </div>

        {/* ── KEY FACTS ── */}
        <section aria-label="Key facts" className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Facts at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { value: '3 Jul 2021', label: 'Ireland banned EPS single-use food & beverage containers', icon: '🚫', color: 'bg-red-600' },
              { value: 'Excluded', label: 'Fish boxes & meat trays for raw products — outside the SUP ban', icon: '🐟', color: 'bg-blue-600' },
              { value: '12 Aug 2026', label: 'PPWR applies — new EU packaging regulation enforceable', icon: '📋', color: 'bg-slate-700' },
              { value: '1 Jan 2030', label: 'PPWR format restrictions & recyclability requirements apply', icon: '⏰', color: 'bg-amber-600' },
            ].map((s) => (
              <div key={s.label} className={`${s.color} text-white rounded-2xl p-5 flex items-start gap-4`}>
                <span className="text-3xl shrink-0">{s.icon}</span>
                <div>
                  <p className="text-xl font-extrabold leading-tight">{s.value}</p>
                  <p className="text-sm opacity-85 mt-1 leading-snug">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT IS BANNED ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What Is Banned vs. What Is Still Legal
          </h2>

          {/* Banned vs Legal split */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🚫</span>
                <h3 className="font-bold text-red-800 text-base">Banned since 3 July 2021</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'EPS food containers for ready-to-eat consumption (clamshells, boxes)',
                  'EPS beverage containers',
                  'EPS cups (including lids)',
                  'Any EPS packaging for food consumed directly from the container',
                  'EPS hot food trays / portion containers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-red-900">
                    <span className="mt-1 shrink-0 text-red-500">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-red-600 mt-4 font-semibold">
                Cannot be placed on the Irish market.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✅</span>
                <h3 className="font-bold text-green-800 text-base">Generally still legal (2026)</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'EPS fish boxes for transporting raw seafood (not ready-to-eat)',
                  'EPS meat trays for raw, unprocessed product',
                  'EPS cold-chain transit packaging (not for direct consumption)',
                  'EPS protective packaging (appliances, electronics)',
                  'EPS insulation/construction uses',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-green-900">
                    <span className="mt-1 shrink-0 text-green-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-green-700 mt-4 font-semibold">
                Still subject to waste obligations and tightening PPWR rules from 2026–2030.
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              The legal test under the EU Single-Use Plastics Directive is about <strong>intended use at
              the point of sale</strong>, not the material itself. &ldquo;Food containers&rdquo; for the purpose of
              the ban are specifically defined as packaging used to contain food <em>intended for immediate
              consumption</em> — typically consumed from the container, ready to eat without further cooking,
              boiling, or heating.
            </p>
            <p>
              EU Commission interpretive guidance (which aids consistent enforcement across Member States)
              explicitly names <strong>fish boxes and meat trays</strong> as examples that fall <em>outside</em>{' '}
              the &ldquo;food container&rdquo; category, because the food they contain is not intended for immediate
              consumption and requires further preparation. This is the &ldquo;fish box exception&rdquo; in practice.
            </p>
            <p>
              Irish government guidance (updated January 2026) confirms this picture: since 3 July 2021,
              EPS single-use cups and food and beverage containers are banned from being placed on the market
              in Ireland. Enforcement sits with the Environmental Protection Agency and local authorities.
            </p>
          </div>
        </section>

        {/* Status comparison table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            EPS Use Cases: Regulatory Status &amp; Disposal Routes (Ireland 2026)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">EPS Use Case</th>
                  <th className="px-4 py-3 text-left font-semibold">Legal Status (Ireland 2026)</th>
                  <th className="px-4 py-3 text-left font-semibold">Disposal Route</th>
                  <th className="px-4 py-3 text-left font-semibold">PPWR Impact by 2030</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    use: 'Single-use cups / ready-to-eat food containers',
                    status: '🚫 Banned since 3 Jul 2021',
                    statusClass: 'text-red-600 font-bold',
                    disposal: 'Should not arise from legal supply',
                    ppwr: 'Prohibition reinforced; broader HORECA single-use restrictions from 2030',
                  },
                  {
                    use: 'Fish boxes / transport boxes for raw unprocessed food',
                    status: '✅ Generally outside SUP ban scope',
                    statusClass: 'text-green-700 font-semibold',
                    disposal: 'Specialist separate collection; compaction/densification required',
                    ppwr: 'Recyclability performance requirements from 2030; documentation burden increases',
                  },
                  {
                    use: 'Protective packaging (appliances, electronics)',
                    status: '✅ Not in SUP food container category',
                    statusClass: 'text-green-700 font-semibold',
                    disposal: 'Clean: some civic amenity sites; general waste otherwise',
                    ppwr: 'PPWR minimisation and recyclability rules apply from 2026–2030',
                  },
                ].map((row, i) => (
                  <tr key={row.use} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.use}</td>
                    <td className={`px-4 py-3 ${row.statusClass}`}>{row.status}</td>
                    <td className="px-4 py-3 text-slate-600">{row.disposal}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ppwr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Eco alternatives image break */}
        <div className="grid grid-cols-3 gap-3 my-12">
          {[
            { src: '/images/products/bagasse-burger-box/2.png', alt: 'Bagasse burger box Ireland – eco alternative to EPS' },
            { src: '/images/products/bagasse-burger-box/3.png', alt: 'Compostable food containers Ireland' },
            { src: '/images/plain-packaging/10929.webp', alt: 'Foil food containers Ireland – EPS alternative' },
          ].map((img) => (
            <div key={img.src} className="relative h-44 rounded-xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 text-center -mt-8 mb-12">
          Bagasse burger boxes and foil containers are compliant, sustainable alternatives to EPS for Irish foodservice businesses.
        </p>

        {/* ── RECYCLING REALITY ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Recycling EPS in Ireland: The Honest Picture
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                label: 'Household',
                icon: '🏠',
                verdict: 'Usually general waste',
                detail: 'MyWaste classifies EPS as general waste. Some civic amenity centres accept clean, separately collected EPS. Do not assume the green bin.',
                color: 'border-amber-200 bg-amber-50',
                labelColor: 'text-amber-800',
              },
              {
                label: 'Civic Amenity Centres',
                icon: '🏛️',
                verdict: 'Variable, household-only',
                detail: 'Acceptance is site-specific. Dublin City Council example: polystyrene accepted (household only, with a charge). Commercial waste refused.',
                color: 'border-orange-200 bg-orange-50',
                labelColor: 'text-orange-800',
              },
              {
                label: 'Business',
                icon: '🏭',
                verdict: 'Specialist collection required',
                detail: 'Must contract an authorised waste collector. Volume justifies compaction/densification. Cannot use civic amenity centres. Contamination is the key constraint.',
                color: 'border-red-200 bg-red-50',
                labelColor: 'text-red-800',
              },
            ].map((col) => (
              <div key={col.label} className={`rounded-2xl border p-5 ${col.color}`}>
                <div className="text-2xl mb-2">{col.icon}</div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${col.labelColor}`}>{col.label}</p>
                <p className="text-sm font-semibold text-slate-800 mb-2">{col.verdict}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{col.detail}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              EPS is technically recyclable — it is a polymer (polystyrene) and can be processed back into
              usable material. The problem is not chemistry but logistics: <strong>EPS is bulky and
              low-density</strong>, which makes transport economics the dominant cost driver. Moving a truck
              full of uncompacted EPS is expensive relative to the value of the material inside it.
            </p>
            <p>
              The Bord Iascaigh Mhara analysis of fish-box EPS waste highlights this clearly: transport
              is often the largest cost in EPS recycling, and for fish boxes specifically, contamination
              (fish residue, ice, salt) can prevent acceptance by &ldquo;clean EPS&rdquo; compacting operations.
              Heat treatment may be required to meet recycler specifications — adding another layer of cost.
            </p>
            <p>
              Irish recycling providers operating in this space (such as Waste Matters Ireland) describe
              systems where EPS is <strong>shredded, heated, compacted into briquettes</strong>, and then
              resold/reused — illustrating that the viable pathway requires investment in densification,
              not just separation. The economic hinge is whether your volume and cleanliness can justify
              the infrastructure.
            </p>
          </div>

          {/* Key recycling truth callout */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 mt-8">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">The core constraint</p>
            <p className="text-white text-base leading-relaxed">
              For most Irish businesses, EPS recycling is economically viable only when:{' '}
              <strong className="text-blue-300">volume is sufficient</strong> to fill collection containers regularly,{' '}
              <strong className="text-blue-300">segregation is clean</strong> (no food contamination for cold-chain streams, or fish/salt residue managed separately),
              and <strong className="text-blue-300">on-site compaction or densification</strong> reduces transport costs to a viable level.
              Without all three, EPS goes to residual waste.
            </p>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            EPS &amp; Packaging Regulation Timeline: 2019 to 2030
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-6">
              {timelineEvents.map((event) => (
                <div key={event.date} className="flex gap-5 items-start">
                  <div className={`shrink-0 w-12 h-12 rounded-full ${event.color} flex items-center justify-center text-white text-xs font-bold text-center leading-tight z-10`}>
                    <span className="px-1">{event.date.split(' ')[0]}<br />{event.date.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex-1">
                    <p className="font-bold text-slate-900 text-sm">{event.label}</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{event.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foil container + pizza box image break */}
        <div className="grid grid-cols-2 gap-4 my-12">
          <div className="relative h-56 rounded-2xl overflow-hidden">
            <Image
              src="/images/plain-packaging/109291.webp"
              alt="Foil containers Ireland – sustainable food packaging alternative to polystyrene EPS"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative h-56 rounded-2xl overflow-hidden">
            <Image
              src="/images/pizza-boxes/PIZZA_BOX_7.jpg"
              alt="Corrugated pizza boxes Ireland – compliant single-use food packaging"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* ── PPWR DETAIL ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What PPWR Changes for EPS Users (2026–2030)
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                date: '12 Aug 2026',
                title: 'PPWR applies across all EU Member States',
                body: 'From this date, PPWR is enforceable across Ireland and the rest of the EU. New harmonised packaging rules come into force covering design, labelling, recyclability documentation, and waste management requirements. The compliance clock starts here.',
                badge: 'bg-blue-600',
              },
              {
                date: '12 Feb 2028',
                title: 'Mandatory reuse option for HORECA takeaway',
                body: 'By this date, businesses in the HORECA sector (hotels, restaurants, cafés, caterers) making takeaway food or beverages available must give consumers an option to receive their order in reusable packaging within an organised re-use system. This does not end single-use packaging — but it begins to institutionalise reusable alternatives.',
                badge: 'bg-purple-600',
              },
              {
                date: '1 Jan 2030',
                title: 'Format restrictions + recyclability performance grades',
                body: 'From 2030, PPWR restricts certain single-use plastic packaging formats in Annex V — including major HORECA uses. Separately, all packaging must meet recyclability performance grades (A, B, or C); packaging graded below C is treated as technically non-recyclable and restricted. This is where EPS users with cold-chain transport formats face a genuine documentation burden: they must prove recyclability within the grading system.',
                badge: 'bg-red-600',
              },
            ].map((step) => (
              <div key={step.date} className="flex gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div>
                  <span className={`inline-block ${step.badge} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                    {step.date}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              The direction of travel under PPWR is clear even where the specific obligations are phased:
              packaging must be demonstrably recyclable, plastic must be reduced or justified, and
              single-use solutions in customer-facing HORECA contexts will face increasing regulatory
              pressure through 2030 and beyond.
            </p>
            <p>
              <strong>Repak&rsquo;s 10-year licence</strong> (confirmed January 2026) gives Ireland a stable
              extended producer responsibility scheme through 2035. Repak levies are calculated per kilogram
              of packaging placed on market — so reducing packaging weight and switching to lighter, more
              recyclable substrates directly reduces your Repak bill, as well as improving your PPWR
              compliance position.
            </p>
          </div>
        </section>

        {/* ── BUSINESS CHECKLIST ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Business Checklist: 7 Actions for Irish Operators
          </h2>
          <div className="space-y-3">
            {[
              {
                n: '01',
                title: 'Audit your current EPS inventory',
                body: 'Separate what is (a) consumer-facing ready-to-eat containers — which are banned — from (b) cold-chain transport EPS, which is generally still legal. Many businesses run both without realising the legal line between them.',
              },
              {
                n: '02',
                title: 'Lock down procurement controls immediately',
                body: 'Irish government guidance is explicit: EPS single-use cups and food/beverage containers have been banned from the market since 3 July 2021. If any supplier is still offering these "as a cheap option", switch supplier now. This is not a grey area.',
              },
              {
                n: '03',
                title: 'Write clean-separation into staff SOPs for EPS waste',
                body: 'EPS is only recyclable when separately collected and clean. Food contamination turns recyclable EPS into residual waste. Create a clear staff procedure: empty, clean, dry EPS goes to the separate stream — contaminated EPS goes to general waste.',
              },
              {
                n: '04',
                title: 'Treat fish-box EPS as a specialist stream, not a standard one',
                body: 'Fish-box EPS has contamination issues (salt, moisture, fish residue) that standard clean-EPS compactors cannot always handle. Get specific guidance from your waste collector about downstream acceptance standards before assuming clean-EPS recycling routes apply.',
              },
              {
                n: '05',
                title: 'Contract an authorised collector — do not rely on civic amenity centres',
                body: 'Civic amenity centres are household-only for polystyrene and may refuse commercial waste or charge. Contract an authorised waste collector with a confirmed downstream destination in writing. This is your compliance evidence.',
              },
              {
                n: '06',
                title: 'Evaluate compaction/densification if your EPS volume is significant',
                body: 'Transport economics are the main barrier to EPS recycling. If you generate enough EPS to fill a collection container regularly, on-site compaction/densification (reducing EPS to briquettes) significantly improves the recycling economics and widens your options for offtakers.',
              },
              {
                n: '07',
                title: 'Start your PPWR documentation now',
                body: 'PPWR applies from 12 August 2026 and introduces recyclability performance requirements and format restrictions from 2030. Begin recording your packaging types, weights, materials, and disposal routes now. Retrospective documentation is harder; current records are your compliance evidence when audits begin.',
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <span className="text-4xl font-extrabold text-blue-100 shrink-0 leading-none mt-1">{step.n}</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eco alternatives gallery */}
        <div className="grid grid-cols-4 gap-3 my-12">
          {[
            { src: '/images/products/bagasse-burger-box/4.png', alt: 'Bagasse eco food box Ireland' },
            { src: '/images/products/bagasse-burger-box/5.png', alt: 'Compostable burger box Ireland' },
            { src: '/images/plain-packaging/109292.webp', alt: 'Foil container Ireland – EPS alternative' },
            { src: '/images/products/flat-handle-bags/1.png', alt: 'Flat handle paper bags Ireland – eco takeaway packaging' },
          ].map((img) => (
            <div key={img.src} className="relative h-32 rounded-xl overflow-hidden bg-slate-100">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 text-center -mt-8 mb-12">
          Compliant alternatives available from PrintNPack Ireland: bagasse boxes, foil containers, and paper bags.
        </p>

        {/* ── FAQ ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is expanded polystyrene banned in Ireland?',
                a: 'EPS single-use food and beverage containers for ready-to-eat consumption have been banned in Ireland since 3 July 2021 under the EU Single-Use Plastics Directive. However, EPS used for transport and cold-chain packaging — such as fish boxes and meat trays for raw, unprocessed products — is generally not covered by this ban.',
              },
              {
                q: 'Can I still use EPS fish boxes in Ireland?',
                a: "Yes. EU Commission guidance specifically lists fish boxes and meat trays as examples excluded from the SUP Directive's 'food container' ban, because the food is not intended for immediate consumption and requires further preparation. However, EPS fish boxes are still subject to packaging waste obligations and will face tighter recyclability requirements under PPWR from 2026 to 2030.",
              },
              {
                q: 'How do I dispose of EPS polystyrene in Ireland?',
                a: "MyWaste (Ireland's official guidance) classifies EPS as general waste for households, while noting it can be recycled when separately collected at civic amenity centres that accept it. Businesses must contract an authorised waste collector for EPS and cannot rely on civic amenity centres, which are typically household-only and may charge.",
              },
              {
                q: 'What does PPWR mean for EPS packaging in Ireland?',
                a: 'PPWR applies from 12 August 2026 and introduces restrictions on certain single-use plastic packaging formats from 1 January 2030, including major HORECA contexts. EPS users must also demonstrate packaging recyclability within performance grades by 2030. Businesses should begin transitioning to compliant eco packaging now.',
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

        {/* ── CTA ── */}
        <div className="bg-green-700 text-white rounded-2xl p-8 text-center mb-14">
          <h2 className="text-2xl font-bold mb-3">Switch to Compliant Eco Packaging Today</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            PrintNPack Ireland stocks bagasse burger boxes, foil containers, paper bags, and compostable
            alternatives to EPS — all SUP-compliant and PPWR-ready. No large minimum orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/eco-bagasse-burger-boxes"
              className="bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
            >
              Browse Eco Packaging
            </Link>
            <Link
              href="/quote"
              className="border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Related posts */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/eco-packaging-for-takeaways-ireland', label: 'Eco Packaging for Irish Takeaways: How to Switch' },
              { href: '/blog/packaging-costs-ireland-restaurants-2025-2026', label: 'Irish Restaurant Packaging Costs 2025–2026: The Data' },
              { href: '/blog/plain-packaging-wholesale-ireland', label: 'Plain Packaging Wholesale Ireland' },
              { href: '/blog/packaging-prices-ireland-covid-shipping', label: 'Why Packaging Prices Have Been All Over the Place' },
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
