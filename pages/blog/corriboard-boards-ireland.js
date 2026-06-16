import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

import { SITE_URL as siteUrl } from '../../lib/site';
const slug = 'corriboard-boards-ireland';
const heroImage = '/ifa/product/corriboard/corrugated-plastic-signs.jpg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Corriboard (Correx) Boards in Ireland: The Quiet Workhorse of Outdoor Marketing',
  description:
    'Everything Irish businesses need to know about corriboard — what it is, why it works in Irish weather, and where it is used for election signs, estate agent boards, construction signage, events, and retail.',
  image: `${siteUrl}${heroImage}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-02-18',
  dateModified: '2026-02-18',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${slug}` },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is corriboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corriboard (also known as Correx, Corflute, or corrugated plastic) is a twin-wall polypropylene sheet that is lightweight, waterproof, UV resistant, and fully recyclable. It is one of the most widely used outdoor signage materials in Ireland.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do corriboard signs last outdoors in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corriboard is designed for short- to medium-term outdoor use. Properly installed, it handles Irish rain, wind, and UV exposure well, typically lasting anywhere from a few weeks for campaign signage to 6–12 months for semi-permanent site boards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is corriboard waterproof?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Corriboard is made from polypropylene, which is fully waterproof. The twin-wall structure also makes it resistant to deformation when wet, making it an excellent choice for Irish weather conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can corriboard be recycled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Corriboard is made from polypropylene (PP), which is a widely recyclable plastic. Many Irish businesses and councils collect it after election campaigns and large events for recycling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes are available for corriboard boards in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack supplies corriboard in a wide range of sizes — from A4 and A3 point-of-sale boards through to large estate agent and construction site boards. Custom sizes are available on request.',
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
    { '@type': 'ListItem', position: 3, name: 'Corriboard Boards Ireland', item: `${siteUrl}/blog/${slug}` },
  ],
};

const useCases = [
  {
    num: '01',
    title: 'Election Campaign Signs',
    tag: 'Classic use',
    tagColor: 'bg-blue-600 text-white',
    img: '/ifa/product/corriboard/coroplast-yard-signs.jpg',
    desc: "Political parties across Ireland rely heavily on corriboard because it's cheap, weather-resistant, and easy to mount on poles. Election signage is one of the most recognisable uses of the material nationwide.",
    bullets: ['Low unit cost for mass campaigns', 'Survives Irish rain', 'Lightweight for fast deployment', 'Easy to remove after elections'],
  },
  {
    num: '02',
    title: 'Estate Agent & Property Boards',
    tag: 'High volume',
    tagColor: 'bg-purple-600 text-white',
    img: '/ifa/product/corriboard/corrugated-plastic-signs-3.jpg',
    desc: 'Drive through any Irish suburb and you will see corriboard everywhere in property marketing. Estate agents favour it because it is lighter than wood, more consistent in colour, and fully weather resistant.',
    bullets: ['For Sale & To Let boards', 'New development marketing', 'Site boards', 'Lighter and more durable than wood'],
  },
  {
    num: '03',
    title: 'Construction & Site Signage',
    tag: 'Site-tough',
    tagColor: 'bg-slate-700 text-white',
    img: '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets.jpg',
    desc: "Construction companies across Ireland use corriboard for health and safety signage, site information, temporary hoarding graphics, and directional signs. The material's impact and moisture resistance make it suitable for tough site environments.",
    bullets: ['Health & safety signage', 'Site information boards', 'Temporary hoarding graphics', 'Directional signs on site'],
  },
  {
    num: '04',
    title: 'Events, Festivals & Directional Signs',
    tag: 'Seasonal',
    tagColor: 'bg-emerald-600 text-white',
    img: '/ifa/product/corriboard/corrugated-plastic-signs.jpg',
    desc: 'Summer festivals, sports events, and outdoor markets are heavy users of corriboard. Because the boards are lightweight and affordable, event organisers can deploy large quantities without blowing the budget.',
    bullets: ['Parking direction signs', 'Stage and area signage', 'Temporary branding', 'Crowd flow signage'],
  },
  {
    num: '05',
    title: 'Retail Promotions & POS Displays',
    tag: 'In-store',
    tagColor: 'bg-orange-600 text-white',
    img: '/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets-1.jpg',
    desc: "Inside shops, corriboard is widely used for point-of-sale displays, promotional boards, window signage, and temporary offers. Its smooth surface makes it ideal for high-quality printed graphics, which is why retailers keep coming back to it.",
    bullets: ['Point-of-sale displays', 'Promotional boards', 'Window signage', 'Temporary offers'],
  },
];

const vsAlternatives = [
  {
    material: 'Foamex (PVC foam)',
    corriboardWins: 'Much cheaper, recyclable, lighter for large quantities',
    otherWins: 'Smoother surface, more premium finish, better for interior long-term use',
  },
  {
    material: 'Aluminium Composite (ACM)',
    corriboardWins: 'Fraction of the cost, fast to produce, ideal for campaigns',
    otherWins: 'Rigid, long-term, premium — lasts 5–10+ years outdoors',
  },
  {
    material: 'PVC Banner',
    corriboardWins: 'Self-supporting — does not need a frame or mounting system',
    otherWins: 'Better for very large formats, curved surfaces, temporary hanging',
  },
];

export default function CorriboardBoardsIreland() {
  const title = 'Corriboard (Correx) Boards in Ireland: The Quiet Workhorse of Outdoor Marketing';
  const description =
    'Everything Irish businesses need to know about corriboard (Correx) boards — election signs, property boards, site signage, events, and retail displays. Lightweight, waterproof, and built for Irish weather.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="corriboard ireland, correx boards ireland, corrugated plastic signs ireland, corriboard printing ireland, estate agent boards ireland, election signs ireland, site signage ireland, corflute boards ireland, outdoor signs ireland, corriboard dublin"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${siteUrl}/blog/${slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/${slug}`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}${heroImage}`} />
        <meta property="og:image:alt" content="Corriboard (Correx) boards Ireland – PrintNPack" />
        <meta property="article:published_time" content="2026-02-18" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${heroImage}`} />

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
          <span className="text-slate-900">Corriboard Boards Ireland</span>
        </nav>

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Print Guide</span>
          <span className="text-slate-400 text-sm">18 Feb 2026 · 7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Corriboard (Correx) Boards in Ireland: The Quiet Workhorse of Outdoor Marketing
        </h1>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image
            src={heroImage}
            alt="Corriboard correx boards Ireland – outdoor signage printing"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-white text-sm font-medium opacity-90">Corriboard (Correx) boards — printed in Ireland</span>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { stat: 'Waterproof', label: 'twin-wall PP' },
            { stat: '1–3 days', label: 'turnaround' },
            { stat: 'Recyclable', label: 'polypropylene' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-slate-900 text-white rounded-xl p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-300 mb-1">{stat}</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If you have walked down any Irish street during an election, passed a property for sale, or attended
            a summer festival, you have already seen corriboard in action. Known internationally as Correx,
            Corflute, or corrugated plastic, corriboard is one of the most widely used signage materials in
            Ireland — and for good reason.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            It hits the sweet spot between price, durability, and practicality, making it the go-to choice
            for short- to medium-term outdoor marketing. This guide breaks down exactly why businesses across
            Ireland rely so heavily on <strong>corriboard boards</strong>.
          </p>

          {/* ─── SECTION 1: What is it ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What Is Corriboard?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Corriboard is a fluted polypropylene sheet with a twin-wall structure that makes it both
            lightweight and strong. Think of it as the plastic cousin of corrugated cardboard — but waterproof,
            tougher, and significantly longer-lasting.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Material properties</h3>
              <ul className="space-y-2">
                {[
                  'Lightweight twin-wall polypropylene',
                  'Fully waterproof',
                  'UV resistant',
                  'Impact resistant',
                  'Fully recyclable',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-auto">
              <Image
                src="/ifa/product/corriboard/4-x-8-corrugated-plastic-sheets-1.jpg"
                alt="Corriboard corrugated plastic sheet structure Ireland"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>
          </div>

          {/* ─── SECTION 2: Why it works in Ireland ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Corriboard Works So Well in Ireland
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ireland is not exactly gentle on outdoor materials. Between rain, wind, and the famous
            "four seasons in one day," signage needs to survive harsh conditions. Corriboard performs
            exceptionally well here because it is fully waterproof and designed to withstand Irish weather
            when properly installed.
          </p>

          <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-blue-300 mb-4 text-sm uppercase tracking-wide">Key advantages for Irish businesses</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Handles rain and moisture',
                'Lightweight for quick installation',
                'Strong enough for outdoor use',
                'Much cheaper than aluminium or acrylic',
                'Easy to print in full colour',
                'Quick to install and remove',
              ].map((adv) => (
                <div key={adv} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-blue-400 font-bold">✓</span>
                  {adv}
                </div>
              ))}
            </div>
          </div>

          <blockquote className="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl pl-5 pr-6 py-4 my-8">
            <p className="text-slate-800 font-medium leading-relaxed italic">
              "For SMEs watching their marketing budget, corriboard is often the obvious choice —
              it delivers professional full-colour outdoor signage at a fraction of the cost of
              aluminium or acrylic alternatives."
            </p>
          </blockquote>

          {/* ─── SECTION 3: Use cases ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            The Most Common Uses of Corriboard in Ireland
          </h2>

          <div className="space-y-6 mb-10">
            {useCases.map(({ num, title, tag, tagColor, img, desc, bullets }) => (
              <div key={num} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-44 h-48 sm:h-auto flex-shrink-0">
                    <Image
                      src={img}
                      alt={`${title} – corriboard printing Ireland`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 176px"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-mono font-bold px-2 py-1 rounded">
                      {num}
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-bold text-slate-900 text-base">{title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColor}`}>{tag}</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{desc}</p>
                    <ul className="grid grid-cols-2 gap-1">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── SECTION 4: vs alternatives ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Businesses Choose Corriboard Over Alternatives
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Corriboard is not the premium option — and that is exactly its superpower. Smart Irish
            businesses choose material based on the job, and for many marketing applications, corriboard
            is the most efficient choice.
          </p>

          <div className="overflow-x-auto mb-8 rounded-xl border border-slate-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Alternative</th>
                  <th className="text-left px-4 py-3 font-semibold">Corriboard wins when...</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">Other material wins when...</th>
                </tr>
              </thead>
              <tbody>
                {vsAlternatives.map(({ material, corriboardWins, otherWins }, i) => (
                  <tr key={material} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-bold text-slate-900">{material}</td>
                    <td className="px-4 py-3 text-slate-700">{corriboardWins}</td>
                    <td className="px-4 py-3 text-slate-600">{otherWins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ─── Image gallery ─── */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/ifa/product/corriboard/coroplast-yard-signs.jpg"
                alt="Corriboard yard signs Ireland – election and campaign signage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-xs p-2 text-center font-medium">Yard &amp; campaign signs</div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image
                src="/ifa/product/corriboard/corrugated-plastic-signs-3.jpg"
                alt="Corrugated plastic signs Ireland – estate agent and site boards"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-xs p-2 text-center font-medium">Estate agent &amp; site boards</div>
            </div>
          </div>

          {/* ─── Quick spec box ─── */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Corriboard quick-reference
            </h3>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                ['Material', 'Twin-wall polypropylene (PP)'],
                ['Also known as', 'Correx · Corflute · corrugated plastic'],
                ['Thickness', '3mm standard (4mm & 5mm available)'],
                ['Print method', 'Full-colour digital print'],
                ['Waterproof', 'Yes — fully waterproof'],
                ['Recyclable', 'Yes — polypropylene'],
                ['Finish', 'Matt print surface'],
                ['Turnaround', '1–3 working days'],
              ].map(([key, val]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-semibold text-slate-700 min-w-[120px]">{key}:</span>
                  <span className="text-slate-600">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── FAQ ─── */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-10">
            {[
              {
                q: 'What is corriboard?',
                a: 'Corriboard (also called Correx, Corflute, or corrugated plastic) is a twin-wall polypropylene sheet that is lightweight, waterproof, UV resistant, and recyclable. It is one of the most popular outdoor signage materials in Ireland, used for everything from election signs to estate agent boards.',
              },
              {
                q: 'How long do corriboard signs last outdoors in Ireland?',
                a: "Corriboard is designed for short- to medium-term outdoor use. Properly installed, it handles Irish rain, wind, and UV exposure well — typically lasting from a few weeks for campaign signage to 6–12 months for semi-permanent site boards. It won't rot, warp, or absorb water like wood.",
              },
              {
                q: 'Is corriboard the same as Correx?',
                a: "Yes. Correx is a brand name for corrugated polypropylene sheet, in the same way that Hoover became synonymous with vacuum cleaners. Corflute is another common brand name for the same material. In Ireland, 'corriboard' and 'Correx' are used interchangeably.",
              },
              {
                q: 'Can corriboard be recycled after use?',
                a: 'Yes. Corriboard is made from polypropylene (PP), which is widely recyclable. After election campaigns or events, boards can be collected and sent to plastic recycling facilities. Many Irish local authorities have started doing this for election signage.',
              },
              {
                q: 'What sizes are available for corriboard in Ireland?',
                a: 'PrintNPack supplies corriboard in a wide range of sizes — from small A4 and A3 POS boards through to large estate agent and construction site boards. Custom sizes are available. Get in touch or use our quote form for exact dimensions and pricing.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-blue-500 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ─── CTA ─── */}
        <div className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 sm:p-10 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <span className="inline-block bg-blue-500/30 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Corriboard Boards Ireland
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to order your corriboard signs?</h2>
            <p className="text-slate-300 mb-8 max-w-md mx-auto">
              Election signs, estate agent boards, site signage, event direction signs, and retail displays.
              Fast turnaround. Nationwide delivery across Ireland.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/corriboard"
                className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Corriboard →
              </Link>
              <Link
                href="/quote"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold border border-blue-500 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-300">
              {['Fully waterproof', '1–3 day turnaround', 'Delivered nationwide', 'Recyclable material'].map((f) => (
                <span key={f} className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </span>
              ))}
            </div>
          </div>
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
