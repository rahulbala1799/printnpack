import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/noodle-boxes-ireland-sizes-buying-guide`;
const HUB_HREF = '/plain-packaging?category=Noodle+Containers';
const BOX_16_HREF =
  '/plain-packaging/16oz-spiritpak-white-noodle-box-10x50-120058';
const BOX_26_HREF =
  '/plain-packaging/26oz-spiritpak-white-noodle-box-10x50-120059';

const HERO_IMAGE = '/images/plain-packaging/120059.webp';
const SIXTEEN_IMAGE = '/images/plain-packaging/120058.webp';
const SOUP_IMAGE = '/images/plain-packaging/10984485.webp';
const BOWL_IMAGE = '/images/plain-packaging/120074.webp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Noodle Boxes Ireland: 16oz & 26oz Spiritpak Sizes & Wholesale Buying Guide',
  description:
    'A practical buying guide to plain white Spiritpak noodle boxes in Ireland — 16oz and 26oz heat-barrier round-base sizes, 10×50 case packs, and nationwide delivery from Ashbourne for Asian takeaways and noodle counters.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-29',
  dateModified: '2026-10-29',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy noodle boxes wholesale in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack stocks plain Spiritpak white noodle boxes by the case under Noodle Containers — 16oz and 26oz heat-barrier round-base boxes packed 10×50 — with tiered wholesale pricing. Delivery from Ashbourne, Co. Meath to Dublin, Cork, Galway and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What noodle box sizes are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two Spiritpak white heat-barrier round-base sizes are stocked: 16oz (product 120058) and 26oz (product 120059). Both pack 10×50 per case (500 boxes). Choose 16oz for lighter lunch portions and 26oz for fuller noodle, rice or stir-fry mains.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these noodle boxes plain or printed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are plain white wholesale boxes — unprinted Spiritpak stock with fold-over flaps. There is no custom-print MOQ on these lines. Branding usually sits on a grab bag, napkin or sticker rather than on every noodle box.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose noodle boxes vs soup cups or kraft bowls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Noodle boxes suit chopsticks, stir-fries and foods that need a tall round-base carton with fold-over flaps. Soup containers suit broths that need a cup and lid. Round kraft bowls with PET lids suit poke and salad presentation. Many Irish Asian kitchens stock more than one format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you deliver noodle boxes to Dublin, Cork and Galway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers Noodle Containers to Dublin, Cork, Galway and every Irish county from Ashbourne. Local buyers can also collect from Co. Meath.',
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
      name: 'Noodle Boxes Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  {
    size: '16oz Spiritpak white noodle box',
    pack: '10 × 50 per case (500)',
    use: 'Lunch noodles, lighter stir-fries, side rice portions',
  },
  {
    size: '26oz Spiritpak white noodle box',
    pack: '10 × 50 per case (500)',
    use: 'Full noodle mains, large rice boxes, delivery stir-fries',
  },
];

export default function NoodleBoxesIrelandSizesBuyingGuide() {
  const title =
    'Noodle Boxes Ireland: 16oz & 26oz Spiritpak Sizes & Wholesale Buying Guide';
  const description =
    'Buy plain white Spiritpak noodle boxes in Ireland — 16oz and 26oz heat-barrier round-base sizes, 10×50 case packs, and delivery to Dublin, Cork, Galway and nationwide from Ashbourne.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="noodle boxes ireland, spiritpak noodle box wholesale ireland, 16oz noodle box dublin, 26oz noodle box cork, white noodle boxes galway, asian takeaway packaging ireland, heat barrier noodle box ashbourne, plain noodle containers wholesale ireland, round base noodle box ireland, chinese takeaway boxes ireland"
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
          content="Noodle boxes Ireland — 26oz Spiritpak white round-base box wholesale"
        />
        <meta property="article:published_time" content="2026-10-29" />

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
          <span className="text-slate-900">Noodle Boxes Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Wholesale Guide
          </span>
          <span className="text-slate-400 text-sm">29 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Noodle Boxes Ireland: 16oz &amp; 26oz Spiritpak Sizes &amp; Wholesale Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2 bg-slate-50">
            <Image
              src={HERO_IMAGE}
              alt="Noodle boxes Ireland — 26oz Spiritpak white heat-barrier box for Dublin Asian takeaways"
              fill
              className="object-contain p-4"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={SIXTEEN_IMAGE}
                alt="16oz Spiritpak noodle box Ireland — white round-base wholesale for Cork takeaways"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1 bg-slate-50">
              <Image
                src={BOWL_IMAGE}
                alt="Round kraft bowls Ireland — alternative format for Galway noodle and poke counters"
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Chinese, Thai, Japanese and multi-cuisine takeaways across Ireland need a tall carton that
            holds noodles, rice and stir-fries without tipping — and that folds shut for delivery.
            PrintNPack stocks plain <strong>Spiritpak white heat-barrier round-base noodle boxes</strong>{' '}
            in two sizes under{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Noodle Containers
            </Link>
            , with case pricing and dispatch from Ashbourne to Dublin, Cork, Galway and nationwide.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide covers the 16oz and 26oz sizes, how the case packs work, when to choose noodle
            boxes over soup cups or kraft bowls, and how plain wholesale restocking fits Irish Asian
            kitchens. For the wider plain range, see our{' '}
            <Link
              href="/blog/plain-packaging-wholesale-ireland"
              className="text-blue-600 hover:underline"
            >
              plain packaging wholesale Ireland
            </Link>{' '}
            overview.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys noodle boxes in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Noodle Containers category is built for kitchens that portion hot Asian and multi-cuisine
            mains into a fold-flap carton every service. Typical buyers include Chinese and Thai
            takeaways on Dublin and Cork high streets, Japanese and noodle lunch counters in food courts,
            multi-cuisine kitchens that run stir-fries beside curry and pizza, and catering teams packing
            noodle portions for events across Galway and the wider counties.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If your busiest line is broth that needs a sealed lid, start with soup containers instead. If
            the dish sells on visible toppings under a clear lid, look at kraft bowls. Choose noodle boxes
            when the service standard is a white round-base carton with fold-over flaps — the format Irish
            customers already expect for many noodle and rice takeaways.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Spiritpak noodle box sizes at a glance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Both lines are plain white, round-base, fold-flap cartons sold as Spiritpak heat-barrier
            noodle boxes. The round base sits stably on counters and in delivery bags; the tapered body
            and top flaps close without a separate lid SKU. They share the same pack format —{' '}
            <strong>10 × 50 per case (500 boxes)</strong> — so you only need to choose the fill size that
            matches your menu.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Product codes are <strong>120058</strong> for 16oz and <strong>120059</strong> for 26oz —
            useful when reordering from an existing Ashbourne account or matching a previous case label
            on the dry-store shelf.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">Size</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Case pack</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sizeRows.map((row) => (
                  <tr key={row.size}>
                    <td className="px-4 py-3 text-slate-900 font-medium">{row.size}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            16oz vs 26oz — which size should Irish kitchens stock?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_16_HREF} className="text-blue-600 hover:underline">
              16oz Spiritpak white noodle box
            </Link>{' '}
            suits lighter lunch noodles, smaller rice portions and weekday specials where customers do
            not need a full dinner fill. Cork lunch counters and Dublin food-court spots often burn
            16oz faster than 26oz during the day.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The{' '}
            <Link href={BOX_26_HREF} className="text-blue-600 hover:underline">
              26oz Spiritpak white noodle box
            </Link>{' '}
            is the fuller main — large noodle bowls, mixed rice boxes and evening delivery stir-fries.
            Galway and Dublin night kitchens usually keep 26oz as the primary SKU and add 16oz only when
            the menu needs a smaller step.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most Irish operators start with one size they will empty weekly, then add the second when
            portion mixes justify two cartons on the shelf. Holding both without a clear use case ties up
            cash and dry-store space.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A practical stock plan for many single-site takeaways is one open case of the primary size on
            the make line, one sealed spare case in the dry store, and a reorder trigger before Friday
            peaks. Multi-site groups often standardise on 26oz across kitchens so staff training and
            portion scoops stay consistent, then allow 16oz only where a lunch menu truly needs it.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SIXTEEN_IMAGE}
                alt="16oz white noodle box Ireland — Spiritpak heat-barrier carton wholesale Dublin"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={HERO_IMAGE}
                alt="26oz white noodle box Ireland — Spiritpak round-base carton wholesale Cork"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Noodle boxes vs soup cups, kraft bowls and biobox
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Noodle boxes are a fold-flap carton format — chopsticks-friendly, tall, and closed without a
            separate lid SKU. That is different from{' '}
            <Link
              href="/blog/soup-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Spiritpak soup containers
            </Link>
            , which pair cups with paper or plastic lids for broths and wetter soups.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link
              href="/blog/round-kraft-bowls-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Round kraft bowls
            </Link>{' '}
            with PET lids suit poke, salad and presentation where customers see the food through a clear
            lid. Use kraft bowls when the look of the dish sells the order; use noodle boxes when a white
            carton and fold-over flaps are the standard for Asian delivery.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <Link
              href="/blog/biobox-containers-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              Biobox containers
            </Link>{' '}
            cover kraft meal-box footprints for mixed takeaway formats. Many multi-cuisine kitchens in
            Dublin stock noodle boxes for stir-fries, soup cups for broths, and biobox or kraft bowls for
            other lines — one Ashbourne order can cover all three.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={SOUP_IMAGE}
                alt="Soup containers Ireland — Spiritpak cup format wholesale alternative to noodle boxes"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 bg-slate-50">
              <Image
                src={BOWL_IMAGE}
                alt="Round kraft bowl Ireland — PE kraft poke bowl wholesale for Asian lunch menus"
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Plain wholesale vs branded packaging
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These noodle boxes are <strong>plain wholesale</strong> — unprinted white Spiritpak stock
            with no logo. That keeps MOQ at a case and restocking fast for Ashbourne collection or
            nationwide dispatch. Branding usually sits on the outer bag, napkin or sticker rather than on
            every carton.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For everyday Asian delivery, plain noodle boxes plus a branded{' '}
            <Link
              href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
              className="text-blue-600 hover:underline"
            >
              SOS grab bag
            </Link>{' '}
            or kraft carrier is the usual Irish mix. Save custom print budget for high-visibility outer
            packaging, not every lunch carton.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Case packs, MOQ and how pricing works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Noodle boxes are sold by the case with <strong>four-tier volume pricing</strong> — more cases
            lower the price per case. There is no custom-print MOQ on these plain lines. Both 16oz and
            26oz pack <strong>10 × 50 (500 boxes)</strong> per case.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Always check the live tier table on each product in{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              Noodle Containers
            </Link>
            . We do not reprint one-off unit rates here because case tiering is how wholesale pricing
            works. A single-site takeaway often starts on 1–3 cases of 26oz; multi-site groups
            consolidate 16oz and 26oz into higher tiers on one Ashbourne order.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What to order alongside noodle boxes
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
            <li>
              <Link
                href="/blog/soup-containers-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Soup containers
              </Link>{' '}
              for broths and wet sides that need a cup and lid
            </li>
            <li>
              <Link
                href="/blog/round-kraft-bowls-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Round kraft bowls
              </Link>{' '}
              for poke, salad and clear-lid presentation
            </li>
            <li>
              <Link
                href="/blog/wooden-cutlery-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Wooden cutlery
              </Link>{' '}
              — chopsticks and forks packed with noodle deliveries
            </li>
            <li>
              <Link
                href="/blog/sos-grab-bags-ireland-sizes-buying-guide"
                className="text-blue-600 hover:underline"
              >
                SOS grab bags
              </Link>{' '}
              for sealed carry-out of filled noodle boxes
            </li>
            <li>
              <Link
                href="/blog/portion-pots-ireland-pp-vs-paper-buying-guide"
                className="text-blue-600 hover:underline"
              >
                Portion pots
              </Link>{' '}
              for sauces and dips packed beside the main carton
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Pairing noodle boxes, soup cups, cutlery and carriers on one dispatch keeps Dublin and
            nationwide kitchens stocked before Friday and Saturday peaks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is based in Ashbourne, Co. Meath — convenient for Dublin and Meath collections,
            with nationwide dispatch for Cork, Galway, Limerick and every other county. Plain noodle box
            orders move quickly because they are warehouse stock, not made-to-print jobs. Local buyers
            who can collect often combine noodle boxes with soup cups, grab bags and cutlery on one
            Ashbourne pickup.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Weekend Asian takeaway demand in Dublin and Cork is where stockouts hurt most — empty 26oz
            cases on a Saturday night mean improvised packaging and slower packing. Plan case counts
            around your busiest two nights, not a quiet Tuesday average.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe shipping is only confirmed case-by-case on request; this guide focuses on Irish
            wholesale delivery, which is the core service for these Noodle Containers lines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order noodle boxes in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>List your busiest fills — lunch 16oz vs evening 26oz mains</li>
            <li>Confirm the fold-flap carton format suits chopsticks and stir-fries</li>
            <li>Decide whether soup cups or kraft bowls also belong on the same order</li>
            <li>Order by the case on Noodle Containers — watch the volume tiers</li>
            <li>Add grab bags, cutlery or portion pots if one delivery can cover them</li>
            <li>Take nationwide delivery or collect from Ashbourne, Co. Meath</li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to restock noodle boxes?</p>
            <p className="text-slate-400 text-sm mb-4">
              Plain white Spiritpak 16oz and 26oz heat-barrier boxes, 10×50 case packs and tiered
              wholesale pricing — delivered across Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Shop Noodle Containers →
              </Link>
              <Link
                href={BOX_26_HREF}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View 26oz Noodle Box
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
                q: 'Where can I buy noodle boxes wholesale in Ireland?',
                a: 'PrintNPack stocks plain Spiritpak white noodle boxes by the case under Noodle Containers — 16oz and 26oz heat-barrier round-base boxes packed 10×50 — with tiered wholesale pricing from Ashbourne to Dublin, Cork, Galway and nationwide.',
              },
              {
                q: 'What noodle box sizes are available in Ireland?',
                a: 'Two sizes: 16oz (120058) and 26oz (120059). Both are plain white Spiritpak heat-barrier round-base boxes packed 10×50 per case (500).',
              },
              {
                q: 'Are these noodle boxes plain or printed?',
                a: 'Plain white wholesale — unprinted Spiritpak stock with fold-over flaps. No custom-print MOQ. Branding usually sits on a grab bag, napkin or sticker.',
              },
              {
                q: 'When should I choose noodle boxes vs soup cups or kraft bowls?',
                a: 'Use noodle boxes for chopsticks, stir-fries and tall fold-flap cartons. Use soup containers for broths with lids. Use round kraft bowls with PET lids for poke and salad presentation.',
              },
              {
                q: 'Do you deliver noodle boxes to Dublin, Cork and Galway?',
                a: 'Yes. We deliver Noodle Containers to Dublin, Cork, Galway and all Irish counties, with collection available from Ashbourne, Co. Meath.',
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
              href: '/blog/soup-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/10984485.webp',
              title: 'Soup Containers Ireland: 8–32oz Sizes, Lids & Wholesale Buying Guide',
            },
            {
              href: '/blog/round-kraft-bowls-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120074.webp',
              title: 'Round Kraft Bowls Ireland: 750–1300ml Sizes & Wholesale Buying Guide',
            },
            {
              href: '/blog/biobox-containers-ireland-sizes-buying-guide',
              src: '/images/plain-packaging/120090.webp',
              title: 'Biobox Containers Ireland: Sizes No.1–No.12 & Wholesale Buying Guide',
            },
            {
              href: '/blog/sos-grab-bags-ireland-sizes-buying-guide',
              src: '/images/products/sos-bags/1.png',
              title: 'SOS Grab Bags Ireland: Sizes, Plain vs Printed & MOQ Buying Guide',
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
