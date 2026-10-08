import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/soup-containers-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Soup+Containers';
const PRODUCT_HREF = '/plain-packaging/8oz-spiritpak-soup-container-20x25-10977';
const HERO_IMAGE = '/images/plain-packaging/10984485.webp';
const EIGHT_IMAGE = '/images/plain-packaging/10977.webp';
const TWELVE_IMAGE = '/images/plain-packaging/10984482.webp';
const LID_PAPER_IMAGE = '/images/plain-packaging/10984483.webp';
const LID_PLASTIC_IMAGE = '/images/plain-packaging/10984484.webp';
const LARGE_IMAGE = '/images/plain-packaging/10984488.webp';
const COMBI_IMAGE = '/images/plain-packaging/10984492.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Soup Containers Ireland: 8–32oz Sizes, Lids & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain soup containers in Ireland — Spiritpak sizes from 8oz to 32oz, paper vs plastic lids, combi packs, compostable options, and nationwide delivery from Ashbourne for cafés and takeaways.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy soup containers wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Spiritpak and compostable soup containers by the case under Soup Containers — sizes from 8oz to 32oz with matching paper, plastic or CPLA lids — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What soup container sizes are available wholesale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spiritpak soup containers are stocked in 8oz, 12oz, 16oz, 26oz and 32oz, typically packed 20×25 per case. Matching paper and plastic lids share sizes (8/12oz, 16oz, 26/32oz). Combi packs of cup plus lid are also available in 8oz, 12oz, 16oz and 32oz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose paper or plastic lids for soup containers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paper lids suit many Irish takeaway soups and pair with Spiritpak cups in separate or combi cases. Plastic lids give a firmer seal for delivery and thicker broths. Match the lid size group to the cup — 8/12oz lids, 16oz lids, or 26/32oz lids — and confirm the live case on each product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are compostable soup containers available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Soup Containers category includes white Greenspirit compostable soup containers in 8oz, 12oz and 16oz with matching CPLA lids, plus white PLA soup containers with CPLA lids. Check each product page for case packs and four-tier volume pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver soup containers to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Soup Containers to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Soup Containers Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '8oz Spiritpak soup container',
    dims: '8oz cup',
    pack: '20 × 25 per case',
    use: 'Sides, kids portions, light lunch soups',
  },
  {
    size: '12oz Spiritpak soup container',
    dims: '12oz cup',
    pack: '20 × 25 per case',
    use: 'Standard café takeaway soup',
  },
  {
    size: '16oz Spiritpak soup container',
    dims: '16oz cup',
    pack: '20 × 25 per case',
    use: 'Hearty bowls, chowder, delivery mains',
  },
  {
    size: '26oz Spiritpak soup container',
    dims: '26oz cup',
    pack: '20 × 25 per case',
    use: 'Sharing portions and large broths',
  },
  {
    size: '32oz Spiritpak soup container',
    dims: '32oz cup',
    pack: '20 × 25 per case',
    use: 'Catering, family takeaway, bulk broth',
  },
  {
    size: '8/12oz paper or plastic lids',
    dims: 'Fits 8oz & 12oz',
    pack: '20 × 25 per case',
    use: 'Match lid material to delivery vs counter',
  },
  {
    size: 'Cup + lid combi packs',
    dims: '8oz–32oz options',
    pack: '250 or 10 × 25 per case',
    use: 'One SKU for cup and lid restocking',
  },
];

export default function SoupContainersIrelandSizesBuyingGuide() {
  const title = 'Soup Containers Ireland: 8–32oz Sizes, Lids & Wholesale Buying Guide';
  const description =
    'Buy soup containers in Ireland with confidence — Spiritpak sizes from 8oz to 32oz, paper vs plastic lids, combi packs, compostable options, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="soup containers ireland, soup cups wholesale ireland, spiritpak soup containers dublin, takeaway soup containers cork, paper lids soup ireland, compostable soup containers galway, wholesale soup pots ashbourne, 16oz soup container ireland, soup soup packaging ireland, plain soup containers wholesale ireland"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
          content="Soup containers Ireland — 16oz Spiritpak soup cup wholesale for cafés"
        />
        <meta property="article:published_time" content="2026-10-08" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO_IMAGE}`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
          <span className="text-slate-900">Soup Containers Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">8 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Soup Containers Ireland: 8–32oz Sizes, Lids &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Soup containers Ireland — 16oz Spiritpak soup cup for Dublin takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={EIGHT_IMAGE}
                alt="8oz Spiritpak soup container Ireland — wholesale soup cup Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={TWELVE_IMAGE}
                alt="12oz Spiritpak soup container Ireland — café takeaway soup pot Galway"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Soup is a high-frequency Irish takeaway line — lunch specials in Dublin, chowder in Cork,
            broths and curries that leave the kitchen hotter than a coffee. The wrong cup size or a
            lid that does not match the rim means spills, remakes and wasted stock. Plain wholesale
            soup containers fix that with case packs you can restock without artwork delays.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers <strong>soup containers in Ireland</strong> as plain catering stock —
            Spiritpak sizes from 8oz to 32oz, paper versus plastic lids, cup-and-lid combi packs,
            compostable options in the same category, and how{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              PrintNPack&apos;s Soup Containers
            </Link>{' '}
            range works with tiered pricing and delivery from Ashbourne.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Why Irish cafés buy plain soup containers by the case
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Plain soup cups are warehouse stock: order by the case, no print proof, no brand MOQ. That
            matters when a Galway deli sells out of 12oz lunch pots midweek or an Ashbourne café needs
            lids before a weekend soup special. Branding can sit on a sticker, sleeve or carrier — the
            cup only has to hold heat and travel safely.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack holds Spiritpak soup containers alongside matching lids and combi packs in Soup
            Containers. Orders ship nationwide; local buyers can collect from Ashbourne, Co. Meath.
            For a wider view of bulk catering lines, see our{' '}
            <Link href="/blog/plain-packaging-wholesale-ireland" className="text-blue-600 hover:underline">
              plain packaging wholesale Ireland
            </Link>{' '}
            guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Soup container sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Start with the size your menu sells most — usually 12oz or 16oz for café lunch — then add
            8oz for sides and 26oz or 32oz for sharing or catering. Use the table below, then confirm
            live case tiers on each product page.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Product</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size / format</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.dims}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 bg-slate-50 not-prose">
            <Image
              src={LARGE_IMAGE}
              alt="32oz Spiritpak soup container Ireland — large wholesale soup pot Ashbourne"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Spiritpak 8oz to 32oz — picking the right cup
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The core line is <strong>Spiritpak soup containers</strong> in{' '}
            <strong>8oz, 12oz, 16oz, 26oz and 32oz</strong>, each packed <strong>20 × 25 per case</strong>{' '}
            (500 cups). The{' '}
            <Link href={PRODUCT_HREF} className="text-blue-600 hover:underline">
              8oz Spiritpak soup container
            </Link>{' '}
            suits light portions and kids sides; <strong>12oz</strong> is the everyday café takeaway;
            <strong> 16oz</strong> covers chowder and thicker lunch bowls; <strong>26oz</strong> and{' '}
            <strong>32oz</strong> handle sharing pots and catering broths.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Dublin and Cork kitchens often keep 12oz and 16oz as standing stock, then add 8oz when sides
            outsell mains. Match cup volume to ladle size so staff do not overfill and weaken the lid
            seal on delivery runs.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Paper lids, plastic lids and combi packs
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Lids are sold to match cup groups: <strong>8/12oz</strong>, <strong>16oz</strong>, and{' '}
            <strong>26/32oz</strong>, in paper or plastic, typically <strong>20 × 25 per case</strong>.
            Paper lids are a common counter choice; plastic lids give a firmer feel for bagged delivery
            and chunky soups. Always buy the lid size that matches the cups you stock — mixing groups
            is the fastest way to strand inventory.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Prefer one SKU for restock? Combi packs bundle cup and lid — for example the{' '}
            <strong>8oz white Spiritpak soup container &amp; plastic lid combi (250)</strong>, 12oz and
            16oz combis with paper or plastic lids (250), and a <strong>32oz paper-lid combi</strong>{' '}
            (10 × 25). Combis reduce the chance of running out of lids while cups still sit on the shelf.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical starter mix is one case of 12oz cups, one of 16oz cups, matching lids for each
            size group, or two combi cases if you want fewer lines to manage.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={LID_PAPER_IMAGE}
                alt="Paper lids for soup containers Ireland — 8/12oz Spiritpak lids wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={LID_PLASTIC_IMAGE}
                alt="Plastic lids for soup containers Ireland — 8/12oz Spiritpak lids Cork wholesale"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Compostable soup containers in the same category
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Beside Spiritpak, Soup Containers includes <strong>white Greenspirit compostable soup
            containers</strong> in 8oz, 12oz and 16oz (20 × 25) with <strong>90mm and 115mm CPLA
            lids</strong>, plus white PLA soup containers and CPLA lids in related case packs. Use these
            when your sustainability story sits on the cup itself — and pair them with the matching
            compostable lid, not a Spiritpak plastic lid.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For the wider eco takeaway range — hot cups, kraft trays and rPET cold cups — see our{' '}
            <Link href="/blog/greenspirit-eco-packaging-ireland" className="text-blue-600 hover:underline">
              Greenspirit eco packaging Ireland
            </Link>{' '}
            overview. Spiritpak remains the workhorse when cost-per-serve and fast restock matter most.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most Spiritpak cups and lids pack <strong>20 × 25 per case</strong>; many combis pack{' '}
            <strong>250</strong> (or 10 × 25 for the 32oz paper-lid combi). All use{' '}
            <strong>four-tier volume pricing</strong> — more cases lower the price per case. There is
            no custom-print MOQ on these plain lines.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Soup Containers
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site café often starts on 1–3 cases of 12oz; multi-site groups consolidate
            cups and lids into higher tiers on one Ashbourne order.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-48 mb-8 bg-slate-50 not-prose">
            <Image
              src={COMBI_IMAGE}
              alt="Soup container combi pack Ireland — 8oz Spiritpak cup and plastic lid wholesale"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside soup containers
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link href="/blog/kraft-carriers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Kraft carriers
              </Link>{' '}
              — when soup leaves with a sandwich or drink
            </li>
            <li>
              <Link href="/blog/rpet-hinged-salad-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                rPET hinged salad containers
              </Link>{' '}
              for cold lunch sides beside hot soup
            </li>
            <li>
              <Link href="/blog/biobox-containers-ireland-sizes-buying-guide" className="text-blue-600 hover:underline">
                Biobox containers
              </Link>{' '}
              for curries, stews and mains that need a rectangular meal box
            </li>
            <li>
              <Link href="/blog/coffee-cups-ireland-guide" className="text-blue-600 hover:underline">
                Hot coffee cups
              </Link>{' '}
              if your counter runs soup and hot drinks on the same shift
            </li>
            <li>
              Wooden cutlery and napkins from plain packaging for spoon-in spoons and wipe-downs
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing cups, lids, carriers and salad pots on one dispatch keeps Dublin and nationwide
            kitchens stocked before lunch peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain soup
            container orders move quickly because they are warehouse stock, not made-to-print jobs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these soup lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order soup containers in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest ladle sizes — 8oz sides, 12oz lunch, 16oz bowls or 32oz catering</li>
            <li>Choose Spiritpak cups or compostable cups, then match paper, plastic or CPLA lids</li>
            <li>Decide separate cases versus cup-and-lid combi packs</li>
            <li>Add carriers, salad pots or Biobox if one delivery can cover the full lunch line</li>
            <li>Order by the case on Soup Containers — watch the volume tiers</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock soup containers?</p>
            <p className="text-slate-400 text-sm mb-4">
              Spiritpak 8–32oz cups, matching lids and combi packs with tiered wholesale pricing —
              delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Soup Containers Ireland →
              </Link>
              <Link
                href={PRODUCT_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 8oz Spiritpak Cup
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
                q: 'Where can I buy soup containers wholesale in Ireland?',
                a: 'PrintNPack stocks plain Spiritpak and compostable soup containers by the case under Soup Containers — sizes from 8oz to 32oz with matching lids — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What soup container sizes are available wholesale?',
                a: 'Spiritpak soup containers are stocked in 8oz, 12oz, 16oz, 26oz and 32oz, typically 20×25 per case. Matching paper and plastic lids share size groups (8/12oz, 16oz, 26/32oz), with combi packs also available.',
              },
              {
                q: 'Should I choose paper or plastic lids for soup containers?',
                a: 'Paper lids suit many counter takeaways; plastic lids give a firmer seal for delivery. Match the lid size group to the cup and confirm the live case on each product page.',
              },
              {
                q: 'Are compostable soup containers available in Ireland?',
                a: 'Yes. Soup Containers includes Greenspirit compostable cups in 8oz, 12oz and 16oz with CPLA lids, plus PLA soup containers with CPLA lids — all with four-tier volume pricing.',
              },
              {
                q: 'Do you deliver soup containers to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Soup Containers to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/plain-packaging-wholesale-ireland',
              src: '/images/products/food-container.png',
              title: 'Plain Packaging Wholesale Ireland: How to Buy Catering Supplies in Bulk',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12, Kraft vs White & Wholesale Buying Guide',
            },
            {
              href: '/blog/kraft-carriers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/180021.webp',
              title: 'Kraft Carriers Ireland: Small–XL Internal Handle Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/greenspirit-eco-packaging-ireland',
              src: '/images/plain-packaging/100103.webp',
              title: 'Greenspirit Eco Packaging Ireland: Compostable Cups, Cutlery & Nationwide Delivery',
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
