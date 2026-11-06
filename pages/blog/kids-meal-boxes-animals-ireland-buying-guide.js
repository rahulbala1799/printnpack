import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/kids-meal-boxes-animals-ireland-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Kids+Meal+Boxes';
const PRODUCT_HREF = '/plain-packaging/kids-meal-box-animals-400-12066516';
const NESTED_HREF = '/plain-packaging?category=Nested+Boxes';
const BIOBOX_HREF = '/plain-packaging?category=Biobox';

const HERO_IMAGE = '/images/plain-packaging/12066516.webp';
const NESTED_IMAGE = '/images/plain-packaging/120225.webp';
const BIOBOX_IMAGE = '/images/plain-packaging/120090.webp';
const CLAMSHELL_IMAGE = '/images/plain-packaging/120091.webp';
const CUTLERY_IMAGE = '/images/plain-packaging/140046.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Kids Meal Boxes Ireland: Animals Range Wholesale Buying Guide',
  description:
    'A practical buying guide to Animals kids meal boxes in Ireland — 400 per case, themed children’s takeaway cartons, plain wholesale vs biobox and nested kraft, and nationwide delivery from Ashbourne for family restaurants and takeaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-11-06',
  dateModified: '2026-11-06',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy kids meal boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks the Animals kids meal box (code 12066516) under Kids Meal Boxes — 400 cartons per case with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Animals kids meal box pack size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Animals kids meal box ships 400 boxes per case. It is sold as plain wholesale stock under the Kids Meal Boxes category with four-tier volume pricing on the product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Animals kids meal boxes custom printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Animals line is warehouse stock with a ready animal-themed design — not a custom-print job. There is no artwork proof or print MOQ. Order by the case when you need dedicated children’s packaging without a branding lead time.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use kids meal boxes instead of biobox or nested kraft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose Animals kids meal boxes when the children’s menu should look distinct from adult mains. Use nested kraft for shallow wraps and sandwiches, and biobox for taller everyday meal footprints that are not themed for kids.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver kids meal boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Kids Meal Boxes to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Kids Meal Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const compareRows = [
  {
    format: 'Animals kids meal box',
    code: '12066516',
    pack: '400 per case',
    use: 'Themed children’s menus and family takeaway deals',
  },
  {
    format: 'Nested kraft (Small)',
    code: '120225',
    pack: '6 × 50 (300)',
    use: 'Compact sides and kids portions without a themed carton',
  },
  {
    format: 'Biobox No.1',
    code: '—',
    pack: '9 × 50',
    use: 'Taller compact kraft meals and sides on adult or kids menus',
  },
  {
    format: 'Corrugated clamshell',
    code: '—',
    pack: 'Varies by size',
    use: 'Hinged deeper meals when the dish needs height, not theming',
  },
];

export default function KidsMealBoxesAnimalsIrelandBuyingGuide() {
  const title =
    'Kids Meal Boxes Ireland: Animals Range Wholesale Buying Guide';
  const description =
    'Buy Animals kids meal boxes in Ireland — 400 per case, themed children’s takeaway cartons, plain wholesale vs biobox and nested kraft, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="kids meal boxes ireland, animals kids meal box wholesale ireland, kids takeaway boxes dublin, children meal packaging cork, family restaurant packaging galway, kids meal boxes ashbourne, plain kids food boxes ireland, kids carton wholesale ireland, themed kids packaging ireland, takeaway kids boxes ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}${HERO_IMAGE}`} />
        <meta
          property="og:image:alt"
          content="Kids meal boxes Ireland — Animals range carton wholesale"
        />
        <meta property="article:published_time" content="2026-11-06" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO_IMAGE}`} />

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
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-900">Kids Meal Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">6 Nov 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Kids Meal Boxes Ireland: Animals Range Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Kids meal boxes Ireland — Animals range carton wholesale for Dublin family takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={NESTED_IMAGE}
                alt="Nested kraft takeaway box Ireland — compact plain carton alternative for Cork kids portions"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BIOBOX_IMAGE}
                alt="Biobox containers Ireland — kraft meal box wholesale alternative for Galway kids menus"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Family restaurants, hotel kids clubs and takeaways with a children’s menu need packaging that
            looks different from the adult meal box — without waiting on a custom print job. PrintNPack
            stocks the{' '}
            <Link href={PRODUCT_HREF} className="text-blue-600 hover:underline">
              Animals kids meal box
            </Link>{' '}
            under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Kids Meal Boxes
            </Link>
            , packed <strong>400 per case</strong>, with tiered wholesale pricing and dispatch from
            Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers who the Animals line suits, how it differs from nested kraft, biobox and
            clamshells, how case packs and MOQ work, and what to order alongside for Irish family
            services. For the wider plain range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys Animals kids meal boxes in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Animals kids meal box suits kitchens that sell a dedicated children’s portion — not just
            a smaller adult main in a plain carton. Typical buyers include family restaurants in Dublin
            and Cork, hotel and leisure venues with kids menus, takeaways running Friday family deals,
            café brunch spots packing mini meals for collection, and multi-site groups that want one
            themed kids SKU across branches without managing artwork.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If every children’s order is simply a half portion of an adult dish and you do not need
            themed packaging on the counter, a compact{' '}
            <Link
              href="/blog/nested-kraft-takeaway-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              nested kraft takeaway box
            </Link>{' '}
            or small{' '}
            <Link
              href="/blog/biobox-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              biobox
            </Link>{' '}
            may be enough. Choose Animals when the kids meal is a branded experience for parents —
            themed carton, clear kids line on the menu, and a carton that does not look like leftover
            adult packaging.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Cork sites that run both a weekday lunch trade and a weekend family trade often
            keep Animals cases sealed for Saturday–Sunday and school holidays, while nested kraft covers
            Monday–Friday adult wraps. That split stops the kids carton being burned through on adult
            sides, and it keeps the dry-store plan honest when you reorder from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Animals kids meal box — what you are buying
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Product code <strong>12066516</strong> is listed as{' '}
            <strong>Kids meal box &quot;Animals&quot; (400)</strong> in the Kids Meal Boxes category. It is
            warehouse stock with a ready animal-themed design — sold by the case as plain wholesale, not
            as a made-to-print custom carton. That means no proof cycle and no custom-print minimum: you
            order cases when the Friday family rush empties the dry store.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Each case holds <strong>400 boxes</strong>. Four-tier volume pricing applies on the product
            page — more cases lower the price per case. We do not reprint unit rates here; always check
            the live tier table on{' '}
            <Link href={PRODUCT_HREF} className="text-blue-600 hover:underline">
              the Animals kids meal box product page
            </Link>{' '}
            before you consolidate an Ashbourne order.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Format</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Code</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {compareRows.map((row) => (
                  <tr key={row.format}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.format}</td>
                    <td className="px-4 py-3 text-slate-700">{row.code}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Kids meal boxes vs nested kraft, biobox and clamshells
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Animals kids meal boxes are a dedicated children’s format. Nested kraft boxes are shallow
            rectangular kraft cartons for wraps, toasties and slender mains — useful for compact kids
            portions when theming does not matter, but they look like everyday adult lunch packaging. See
            the{' '}
            <Link
              href="/blog/nested-kraft-takeaway-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              nested kraft sizes guide
            </Link>{' '}
            for Small, Medium and Large footprints under{' '}
            <Link href={NESTED_HREF} className="text-blue-600 hover:underline">
              Nested Boxes
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link
              href="/blog/biobox-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Biobox containers
            </Link>{' '}
            cover taller kraft meal-box footprints. Smaller biobox sizes are often used for sides and
            compact meals — including kids portions — but they remain plain kraft meal packaging, not a
            themed kids carton. Browse{' '}
            <Link href={BIOBOX_HREF} className="text-blue-600 hover:underline">
              Biobox
            </Link>{' '}
            when the dish needs a taller cavity more than a children’s design.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link
              href="/blog/corrugated-clamshell-meal-boxes-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Corrugated clamshell meal boxes
            </Link>{' '}
            fold out as hinged meals for burgers, rice bowls and plated mains that need depth. Use a
            smaller clamshell when the kids dish is a mini burger or plated main that needs a hinged lid;
            use Animals when the packaging itself should signal “kids meal” on the table or in a delivery
            bag.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Many multi-cuisine kitchens in Dublin stock all three formats: Animals for the children’s
            menu, nested kraft for wraps, and biobox or clamshells for adult mains. One Ashbourne order
            can cover the set — the nested kraft guide already notes Kids Meal Boxes as the themed option
            beside those everyday kraft lines.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CLAMSHELL_IMAGE}
                alt="Corrugated clamshell meal boxes Ireland — hinged takeaway carton vs kids meal boxes Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={CUTLERY_IMAGE}
                alt="Wooden cutlery Ireland — kids meal box companions wholesale Cork family restaurants"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale stock vs custom printed packaging
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Animals line is <strong>plain wholesale stock with a ready theme</strong> — not a blank
            kraft carton waiting for your logo, and not a custom-print campaign. You get animal artwork
            already on the box, ordered by the case like other catering supplies. That keeps restocking
            fast for Ashbourne collection or nationwide dispatch.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need your restaurant logo on every kids carton, that is a different project from
            stocking Animals. Most Irish family kitchens pair Animals boxes with branded outer bags,
            stickers or napkins for the brand touch, and keep the kids carton as the themed warehouse
            SKU. Custom outer bags are covered separately in guides such as{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bags
            </Link>{' '}
            and paper-bag cost guides on the blog.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Animals kids meal boxes are sold by the case — <strong>400 boxes</strong> — with{' '}
            <strong>four-tier volume pricing</strong>. There is no custom-print MOQ on this line because
            it is warehouse stock. A single-site family restaurant often starts on 1–3 cases; multi-site
            groups consolidate kids cartons with nested kraft, biobox and cutlery into higher tiers on
            one Ashbourne order.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Kids Meal Boxes
            </Link>
            . We do not reprint one-off euro rates here because case tiering is how wholesale pricing
            works and live pages stay accurate.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside kids meal boxes
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              — kid-friendly forks and sets packed with children’s takeaway
            </li>
            <li>
              <Link
                href="/blog/nested-kraft-takeaway-boxes-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Nested kraft takeaway boxes
              </Link>{' '}
              for adult wraps and compact sides beside the kids line
            </li>
            <li>
              <Link
                href="/blog/biobox-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Biobox containers
              </Link>{' '}
              for taller adult and mixed meal footprints
            </li>
            <li>
              <Link
                href="/blog/portion-pots-ireland-pp-vs-paper-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Portion pots
              </Link>{' '}
              for dips, fruit pots and kids sides
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out of filled kids boxes
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pairing Animals boxes, wooden cutlery and grab bags on one dispatch keeps Dublin and
            nationwide family kitchens ready for weekend lunch peaks.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If the kids meal includes a drink or a cold side that needs a sealed pot, add portion pots
            and cold-cup lids on the same ticket rather than raiding the adult sauce station. Keeping
            kids accessories beside the Animals cases on the make line speeds the pass when two family
            tables fire at once in Galway or Cork.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Animals kids meal
            box orders move as warehouse stock, not made-to-print jobs. Local buyers who can collect often
            combine Kids Meal Boxes with nested kraft, biobox and cutlery on one Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Weekend family services and school-holiday lunch peaks are where kids-carton stockouts show —
            improvised adult boxes on a children’s menu look wrong to parents and slow the pass. Plan case
            counts around your busiest family days, not a quiet midweek average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for Kids Meal Boxes.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order Animals kids meal boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Confirm you need a themed kids carton — not just a smaller adult meal box</li>
            <li>Open the Animals kids meal box (12066516) under Kids Meal Boxes</li>
            <li>Decide whether nested kraft, biobox or clamshells also belong on the same order</li>
            <li>Order by the case — 400 boxes — and watch the volume tiers</li>
            <li>Add wooden cutlery, portion pots or SOS bags if one delivery can cover them</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock Animals kids meal boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              Themed children’s takeaway cartons, 400 per case and tiered wholesale pricing — delivered
              across Ireland from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Kids Meal Boxes →
              </Link>
              <Link
                href={PRODUCT_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View Animals Kids Meal Box
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy kids meal boxes wholesale in Ireland?',
                a: 'PrintNPack stocks the Animals kids meal box (code 12066516) under Kids Meal Boxes — 400 per case with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What pack size is the Animals kids meal box?',
                a: '400 boxes per case. Check the live four-tier volume table on the product page for case pricing.',
              },
              {
                q: 'Are Animals kids meal boxes custom printed?',
                a: 'No. They are warehouse stock with a ready animal theme — no artwork proof and no custom-print MOQ. Brand with stickers, napkins or outer bags if you need your logo.',
              },
              {
                q: 'Should I buy kids meal boxes, nested kraft or biobox?',
                a: 'Use Animals kids meal boxes when the children’s menu should look themed. Use nested kraft for shallow wraps and compact portions without theming, and biobox for taller everyday kraft meal footprints.',
              },
              {
                q: 'Do you deliver kids meal boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Kids Meal Boxes to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-slate-400 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {[
            {
              href: '/blog/nested-kraft-takeaway-boxes-ireland-sizes-buying-guide',
              src: NESTED_IMAGE,
              title: 'Nested Kraft Takeaway Boxes Ireland: Small, Medium & Large Sizes Buying Guide',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: BIOBOX_IMAGE,
              title: 'Biobox Containers Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/corrugated-clamshell-meal-boxes-ireland-sizes-buying-guide',
              src: CLAMSHELL_IMAGE,
              title: 'Corrugated Clamshell Meal Boxes Ireland: Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/wooden-cutlery-ireland-sizes-buying-guide',
              src: CUTLERY_IMAGE,
              title: 'Wooden Cutlery Ireland: Chip Forks, Sets & Wholesale Buying Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <Image src={src} alt={relatedTitle} fill className="object-contain p-1" sizes="64px" />
              </div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {relatedTitle}
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
