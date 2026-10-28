import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/vinyl-cut-letters-ireland-sizes-buying-guide`;
const HUB_HREF = '/vinyl-cut-letters-ireland';
const HERO_IMAGE = '/images/vinyl-cut-letters/vinyl-lettering-shop-window.jpg';
const TAPE_IMAGE = '/images/vinyl-cut-letters/vinyl-lettering-application-tape.jpg';
const WHITE_IMAGE = '/images/vinyl-cut-letters/vinyl-white-gloss-vs-matt.jpg';
const BLACK_IMAGE = '/images/vinyl-cut-letters/vinyl-black-gloss.jpg';
const GOLD_IMAGE = '/images/vinyl-cut-letters/vinyl-gold-metallic.jpg';
const FROSTED_IMAGE = '/images/vinyl-cut-letters/vinyl-frosted-translucent.jpg';

const FROM_PRICE = '44.72';
const SAMPLE_20X60 = '46.92';
const DELIVERY = '16.95';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Vinyl Cut Letters Ireland: Shop Window Sizes 10–300 cm & Buying Guide',
  description:
    'A practical buying guide to vinyl cut letters in Ireland — shop window sizes from 10×10 cm to 300×120 cm, Oracal 751 colours, gold and frosted film, cut counts, MOQ from 1 and Ireland delivery included from Ashbourne.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy vinyl cut letters for a shop window in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `PrintNPack supplies vinyl cut letters across Ireland from Ashbourne, Co. Meath. Letters arrive kiss-cut on application tape so you can fit a shop name or opening hours yourself. From €${FROM_PRICE} ex VAT for a 10 × 10 cm white gloss letter with one cut, with delivery to Ireland included.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes of vinyl cut letters are available in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Width is 10 to 300 cm and height is 10 to 120 cm. Start from presets such as 10 × 10 cm, 10 × 20 cm, 20 × 60 cm, 60 × 80 cm, 100 × 100 cm or 300 × 120 cm, or set either side to the millimetre on the product page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are vinyl cut letters the same as printed vinyl stickers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Vinyl cut letters are unprinted coloured vinyl — one solid colour cut to shape, supplied on application tape. A full-colour logo or photograph is a printed vinyl sticker. A large printed PVC sheet is a vinyl banner.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for shop window lettering in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimum order is 1 piece. You can order 1 to 20 copies of the same size and vinyl. Extra copies share the one Ireland delivery charge built into the quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is delivery included for vinyl cut letters in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes. Quoted prices are ex VAT and include one delivery to Ireland (about €${DELIVERY} in the quote). PrintNPack ships from Ashbourne to Dublin, Cork, Galway and nationwide.`,
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
      name: 'Vinyl Cut Letters Ireland Buying Guide',
      item: PAGE_URL,
    },
  ],
};

const sizeRows = [
  { size: '10 × 10 cm', use: 'Single letter, logo mark or small door numeral' },
  { size: '10 × 20 cm / 20 × 60 cm', use: 'Opening hours strip or short phone/web line on the door' },
  { size: '60 × 80 cm', use: 'Compact shop name readable from the pavement' },
  { size: '100 × 100 cm', use: 'Larger fascia-style name on a wide window bay' },
  { size: 'Up to 300 × 120 cm', use: 'Long shop name across a full Dublin or Cork frontage' },
];

const vinylRows = [
  {
    group: 'White or black',
    detail: 'Gloss or matt Oracal 751 — same price. Start here for names and hours.',
  },
  {
    group: 'Bright colours',
    detail: 'Red, orange, yellows, greens, blues, pink, ice grey — all the same colour price.',
  },
  {
    group: 'Metallic',
    detail: 'Gold, silver or anthracite metallic — gold-letter look without real gold leaf.',
  },
  {
    group: 'Frosted film',
    detail: 'Frosted (etched look) or denser frosted privacy for tills and treatment rooms.',
  },
];

const buyerRows = [
  {
    buyer: 'Cafés, salons & barbers',
    use: 'Gold or white shop name readable from the street',
  },
  {
    buyer: 'Retail & boutiques',
    use: 'Opening hours, phone number and website on the door',
  },
  {
    buyer: 'Offices & clinics',
    use: 'Frosted privacy bands and reception lettering on glass',
  },
  {
    buyer: 'Hospitality & venues',
    use: 'One-colour brand marks on internal glass partitions',
  },
];

export default function VinylCutLettersIrelandSizesBuyingGuide() {
  const title =
    'Vinyl Cut Letters Ireland: Shop Window Sizes 10–300 cm & Buying Guide';
  const description = `How to buy vinyl cut letters in Ireland — sizes from 10×10 cm to 300×120 cm, white/black/colour/gold/frosted Oracal film, 1–50 cuts, from €${FROM_PRICE} ex VAT with Ireland delivery included from Ashbourne.`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="vinyl cut letters ireland, shop window lettering dublin, cut vinyl letters cork, gold vinyl letters ireland, frosted window film galway, opening hours vinyl ashbourne, oracal shop letters ireland, application tape lettering ireland, self adhesive window letters ireland, vinyl sign letters ireland"
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
          content="Vinyl cut letters Ireland — white shop name on a Dublin café window"
        />
        <meta property="article:published_time" content="2026-10-28" />

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
          <span className="text-slate-900">Vinyl Cut Letters Ireland</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Retail Guide
          </span>
          <span className="text-slate-400 text-sm">28 Oct 2026 · 8 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Vinyl Cut Letters Ireland: Shop Window Sizes 10–300 cm &amp; Buying Guide
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
            <Image
              src={HERO_IMAGE}
              alt="Vinyl cut letters Ireland — white shop name lettering on a café window for Dublin high streets"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 66vw, 512px"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={TAPE_IMAGE}
                alt="Application tape Ireland — OPEN vinyl letters on backing ready for Galway shop fitting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden flex-1">
              <Image
                src={GOLD_IMAGE}
                alt="Gold vinyl letters Ireland — ATELIER metallic shop window lettering for Cork salons"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 256px"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Shop window lettering is often the first thing a customer reads from the pavement — the
            name, the hours, a phone number. This guide explains how to buy{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              vinyl cut letters in Ireland
            </Link>
            : which size fits a door strip versus a full frontage, which Oracal film to pick, how cuts
            and copies affect the quote, and what delivery from Ashbourne includes. Prices below are
            ex VAT from the live configurator — from €{FROM_PRICE} for a 10 × 10 cm white gloss letter
            with one cut, with Ireland delivery included.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            What you get: kiss-cut vinyl on application tape
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Vinyl cut letters are unprinted coloured vinyl. The design is cut from one solid film —
            white, black, a brand colour, gold metallic or frosted — then covered with application
            tape so the words stay lined up as one sheet. You clean the glass, tape the sheet level,
            peel the backing, rub the letters on with a plastic card, then peel the tape away. There
            is no bag of loose characters to line up by hand.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            That is different from a{' '}
            <Link href="/custom-vinyl-stickers-ireland" className="text-blue-600 hover:underline">
              printed vinyl sticker
            </Link>
            , which carries full-colour artwork, and from a large printed PVC{' '}
            <Link href="/vinyl-banners" className="text-blue-600 hover:underline">
              vinyl banner
            </Link>
            . Use cut letters when the job is one colour on glass: a shop name, opening hours or a
            short contact line for Dublin, Cork or Galway premises.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Who buys vinyl cut letters in Ireland?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most orders come from independent shops that want lettering they can fit themselves —
            without waiting for a sign-writer visit — and from offices that need frosted privacy on
            glass partitions.
          </p>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Buyer</th>
                  <th className="py-3 font-semibold text-slate-900">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {buyerRows.map((row) => (
                  <tr key={row.buyer} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.buyer}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Sizes from 10 × 10 cm to 300 × 120 cm
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Width runs from 10 to 300 cm; height from 10 to 120 cm. You can set either side to the
            millimetre, or start from the common presets on the product page.
          </p>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Size</th>
                  <th className="py-3 font-semibold text-slate-900">Best for</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row) => (
                  <tr key={row.size} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.size}
                    </td>
                    <td className="py-3 text-slate-700">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-8">
            A tall word should use the width for the long side, because height stops at 120 cm. A
            20 × 60 cm white piece with four cuts is a typical door strip — about €{SAMPLE_20X60}{' '}
            ex VAT with Ireland delivery included. Measure the glass clear of frames and hinges before
            you quote on the{' '}
            <Link href={HUB_HREF} className="text-blue-600 hover:underline">
              vinyl cut letters Ireland
            </Link>{' '}
            page.
          </p>

          <div className="relative rounded-2xl overflow-hidden h-56 mb-8 not-prose">
            <Image
              src={WHITE_IMAGE}
              alt="White gloss vs matt vinyl letters Ireland — letter A samples for Ashbourne shop window orders"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Which vinyl: white, colour, gold or frosted?
          </h2>
          <div className="overflow-x-auto mb-6 not-prose">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Film group</th>
                  <th className="py-3 font-semibold text-slate-900">When to choose it</th>
                </tr>
              </thead>
              <tbody>
                {vinylRows.map((row) => (
                  <tr key={row.group} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-800 whitespace-nowrap">
                      {row.group}
                    </td>
                    <td className="py-3 text-slate-700">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Coloured films are Oracal 751. White and black (gloss or matt) share one price band;
            bright colours another; gold, silver and anthracite metallic another. Frosted and frosted
            privacy sit lower than the coloured films. The vinyl is one colour and is not printed —
            pick the film that matches the shop brand, not a CMYK proof.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Most Irish shops put letters on the <strong>inside</strong> of the glass so rain stays off
            the vinyl. The wording still has to read correctly from the street, so ask for a mirror
            cut when you send the text.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={BLACK_IMAGE}
                alt="Black gloss vinyl letters Ireland — STUDIO shop window lettering for Dublin studios"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-44">
              <Image
                src={FROSTED_IMAGE}
                alt="Frosted window film Ireland — translucent NOVA logo lettering for Galway clinic glass"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Cuts, copies, MOQ and from-prices
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Count every separate outline as a cut. A solid letter such as I or L is one cut. Letters
            with a hole — O, A, B, P, R — and digits such as 0, 4, 6, 8 and 9 need an extra cut for
            each hole. The maximum is 50 cuts on one piece. Copies run from 1 to 20; extra copies of
            the same piece share one Ireland delivery.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>
              From €{FROM_PRICE} ex VAT — 10 × 10 cm white gloss, one cut, one copy, Ireland delivery
              included
            </li>
            <li>
              About €{SAMPLE_20X60} ex VAT — 20 × 60 cm white, four cuts, one copy (typical hours
              strip)
            </li>
            <li>Minimum order: 1 piece · up to 20 copies per quote</li>
            <li>
              Delivery: one Ireland shipment of €{DELIVERY} included in every quoted line total
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-8">
            Larger sizes, metallic film, more cuts and extra copies raise the line total. Use the live
            configurator on the product page for your exact width, height, film and quantity — do not
            invent catalogue rates from this guide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Cut letters vs stickers, foamex and corriboard
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pair window lettering with other Irish signage only when each job matches the material:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>
              Vinyl cut letters for one-colour glass names and hours — this guide and the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                product page
              </Link>
            </li>
            <li>
              Full-colour logos and vehicle decals — see our{' '}
              <Link
                href="/blog/custom-vinyl-stickers-ireland"
                className="text-blue-600 hover:underline"
              >
                custom vinyl stickers Ireland guide
              </Link>
            </li>
            <li>
              Rigid indoor boards and menu panels —{' '}
              <Link href="/blog/foamex-boards-ireland-guide" className="text-blue-600 hover:underline">
                foamex boards Ireland guide
              </Link>
            </li>
            <li>
              Outdoor corrugated plastic signs —{' '}
              <Link
                href="/blog/corriboard-boards-ireland"
                className="text-blue-600 hover:underline"
              >
                corriboard boards Ireland
              </Link>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Delivery across Ireland from Ashbourne
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Quoted vinyl letter prices include one delivery to Ireland. PrintNPack ships from
            Ashbourne, Co. Meath to Dublin, Cork, Galway, Limerick and every county. That suits
            independent retailers fitting a new shopfront and offices refreshing glass branding
            without a site visit.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            UK or Europe delivery is not assumed in the Ireland-included price — ask when you need a
            quote outside Ireland. Local buyers can also discuss collection from Co. Meath.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How to order vinyl cut letters in Ireland
          </h2>
          <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-8">
            <li>Measure the clear glass and pick width × height (or a preset)</li>
            <li>Choose film: white/black, colour, metallic or frosted</li>
            <li>Count cuts (every outline and every hole) and copies (1–20)</li>
            <li>
              Configure on the{' '}
              <Link href={HUB_HREF} className="text-blue-600 hover:underline">
                vinyl cut letters Ireland
              </Link>{' '}
              page, or request help via the{' '}
              <Link href="/quote" className="text-blue-600 hover:underline">
                free quote form
              </Link>
            </li>
            <li>
              Say if letters go inside the glass (mirror cut), then take Ireland delivery included in
              the price
            </li>
          </ol>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Ready to letter your shop window?</p>
            <p className="text-slate-400 text-sm mb-4">
              Vinyl cut letters from €{FROM_PRICE} ex VAT — sizes 10–300 cm wide, Oracal colours,
              gold and frosted, Ireland delivery included from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={HUB_HREF}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Vinyl Cut Letters Ireland →
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/custom-vinyl-stickers-ireland"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Printed Vinyl Stickers
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Where can I buy vinyl cut letters for a shop window in Ireland?',
                a: `PrintNPack supplies vinyl cut letters across Ireland from Ashbourne, Co. Meath. Letters arrive kiss-cut on application tape so you can fit a shop name or opening hours yourself. From €${FROM_PRICE} ex VAT for a 10 × 10 cm white gloss letter with one cut, with delivery to Ireland included.`,
              },
              {
                q: 'What sizes of vinyl cut letters are available in Ireland?',
                a: 'Width is 10 to 300 cm and height is 10 to 120 cm. Start from presets such as 10 × 10 cm, 10 × 20 cm, 20 × 60 cm, 60 × 80 cm, 100 × 100 cm or 300 × 120 cm, or set either side to the millimetre on the product page.',
              },
              {
                q: 'Are vinyl cut letters the same as printed vinyl stickers?',
                a: 'No. Vinyl cut letters are unprinted coloured vinyl — one solid colour cut to shape, supplied on application tape. A full-colour logo or photograph is a printed vinyl sticker. A large printed PVC sheet is a vinyl banner.',
              },
              {
                q: 'What is the minimum order for shop window lettering in Ireland?',
                a: 'Minimum order is 1 piece. You can order 1 to 20 copies of the same size and vinyl. Extra copies share the one Ireland delivery charge built into the quote.',
              },
              {
                q: 'Is delivery included for vinyl cut letters in Ireland?',
                a: `Yes. Quoted prices are ex VAT and include one delivery to Ireland (about €${DELIVERY} in the quote). PrintNPack ships from Ashbourne to Dublin, Cork, Galway and nationwide.`,
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
              href: '/blog/custom-vinyl-stickers-ireland',
              src: '/ifa/product/vinylstk/Vinyl-Decals-_-Stickers.jpg',
              title: 'Custom Vinyl Stickers Ireland: Materials, Finishes & Uses',
            },
            {
              href: '/blog/foamex-boards-ireland-guide',
              src: '/ifa/product/foamex/3mm-Printed-Foamex-Boards-XL-Displays.avif',
              title: 'Foamex Boards Ireland Guide',
            },
            {
              href: '/blog/corriboard-boards-ireland',
              src: '/ifa/product/corriboard/corrugated-plastic-signs.jpg',
              title: 'Corriboard Boards Ireland',
            },
            {
              href: '/blog/labels-on-a-roll-ireland-buying-guide',
              src: '/images/products/labels-on-a-roll/labels-on-a-roll-ireland-round-jar-product-label.png',
              title: 'Labels on a Roll Ireland Buying Guide',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={relatedTitle} fill className="object-cover" sizes="64px" />
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
