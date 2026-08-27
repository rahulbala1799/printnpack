import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import RelatedSeoLinks from '../../components/seo/RelatedSeoLinks';
import { SITE_URL as siteUrl, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../../lib/site';

const slug = 'custom-napkins-uk-ireland-europe';
const PAGE_URL = `${siteUrl}/blog/${slug}`;
const PUBLISHED = '2026-08-27';
const HERO = '/images/blog/custom-napkins/custom-napkins-uk-ireland-restaurant-table.jpg';
const IMG_COCKTAIL = '/images/blog/custom-napkins/custom-cocktail-napkins-bar-uk.jpg';
const IMG_WEDDING = '/images/blog/custom-napkins/custom-wedding-napkins-ireland-uk.jpg';
const IMG_LINEN = '/images/blog/custom-napkins/custom-linen-feel-napkins-hotel-europe.jpg';
const IMG_LOGO_1 = '/images/products/premium-linen-feel-napkins/Napkin Mock 1.jpg';
const IMG_LOGO_3 = '/images/products/premium-linen-feel-napkins/Napkin Mock 3.jpg';
const IMG_LOGO_6 = '/images/products/premium-linen-feel-napkins/Napkin Mock 6.jpg';
const IMG_LOGO_8 = '/images/products/premium-linen-feel-napkins/Napkin Mock 8.jpg';
const IMG_WEDDING_IE = '/images/ifa/heroh/napkin.png';
const IMG_PLAIN = '/images/plain-packaging/160006.webp';

const title = 'Custom Napkins UK, Ireland & Europe | Printed & Personalised Guide';
const description =
  'Custom napkins for restaurants, pubs, hotels and weddings across Ireland, the UK and Europe. Printed logo napkins from €0.05, linen-feel options, sizes, and delivery from Ashbourne.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image: [
    `${siteUrl}${HERO}`,
    `${siteUrl}${IMG_COCKTAIL}`,
    `${siteUrl}${IMG_WEDDING}`,
    `${siteUrl}${IMG_LINEN}`,
    `${siteUrl}${IMG_LOGO_1}`,
  ],
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: 'en-IE',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  about: [
    { '@type': 'Thing', name: 'Custom napkins' },
    { '@type': 'Thing', name: 'Printed napkins' },
    { '@type': 'Thing', name: 'Personalised napkins' },
  ],
  spatialCoverage: [
    { '@type': 'Country', name: 'Ireland' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'AdministrativeArea', name: 'European Union' },
  ],
  keywords:
    'custom napkins, custom napkins UK, custom napkins Ireland, custom printed napkins, personalised napkins UK, branded napkins, cocktail napkins, wedding napkins',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy custom napkins in Ireland and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PrintNPack prints custom napkins in Ashbourne, Co. Meath, Ireland and delivers across Ireland, Northern Ireland, the UK mainland, and EU addresses. Restaurants, pubs, hotels, caterers and wedding planners can order printed logo napkins from 1,000 units.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do custom printed napkins cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom printed paper napkins start from around €0.05 per unit with a 1,000-unit minimum. Premium linen-feel (airlaid) napkins start from around €0.10 per unit. Price depends on size, ply, print colours and quantity. UK and EU courier is quoted on the order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you ship custom napkins to the UK and Europe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack delivers custom napkins nationwide in Ireland, into Northern Ireland, and by courier to the UK and EU. Ireland-to-EU shipments stay inside the single market. UK mainland carriage is confirmed on the quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size custom napkins should restaurants order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most restaurants and cafes use 33cm 2-ply lunch napkins for everyday service. Cocktail napkins (around 24–25cm) suit bars and drinks. Dinner napkins (40cm) are used for hotels, fine dining and weddings. Match the size to the service, not the brand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get personalised wedding napkins delivered in Ireland and the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Personalised wedding napkins with names, dates or a monogram are printed on paper or premium linen-feel stock. Order 3–4 weeks before the event. Delivery covers Ireland, Northern Ireland, the UK and EU venues.',
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
    { '@type': 'ListItem', position: 3, name: 'Custom Napkins UK, Ireland & Europe', item: PAGE_URL },
  ],
};

const toc = [
  { id: 'what-are-custom-napkins', label: 'What are custom napkins?' },
  { id: 'sizes', label: 'Sizes: cocktail, lunch, dinner' },
  { id: 'materials', label: 'Paper vs linen-feel' },
  { id: 'restaurants', label: 'Restaurants, pubs & hotels' },
  { id: 'weddings', label: 'Wedding napkins' },
  { id: 'ireland', label: 'Ireland' },
  { id: 'uk', label: 'United Kingdom' },
  { id: 'europe', label: 'Rest of Europe' },
  { id: 'cost', label: 'Pricing' },
  { id: 'order', label: 'How to order' },
];

const sizeRows = [
  { size: 'Cocktail · ~24–25cm', use: 'Bars, aperitivo, canapés, coffee service — the napkin guests actually see under a glass' },
  { size: 'Lunch · 33cm 2-ply', use: 'Cafés, casual restaurants, pubs and takeaways — the European hospitality workhorse' },
  { size: 'Dinner · 40cm', use: 'Hotels, fine dining, wedding breakfasts and banquet service' },
];

function ArticleImage({ src, alt, caption, priority = false, ratio = 'aspect-[4/3]' }) {
  return (
    <figure className="my-8">
      <div className={`relative ${ratio} rounded-2xl overflow-hidden bg-slate-100`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority={priority}
        />
      </div>
      {caption ? <figcaption className="mt-2 text-sm text-slate-500 leading-relaxed">{caption}</figcaption> : null}
    </figure>
  );
}

export default function CustomNapkinsUkIrelandEurope() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom napkins, custom napkins uk, custom napkins ireland, custom printed napkins, personalised napkins uk, personalised napkins ireland, branded napkins, printed napkins europe, cocktail napkins, wedding napkins uk, linen feel napkins, napkin printing ireland"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Ashbourne, Co. Meath, Ireland" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-IE" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-GB" href={PAGE_URL} />
        <link rel="alternate" hrefLang="x-default" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}${HERO}`} />
        <meta property="og:image:alt" content="Custom printed napkins on an Irish restaurant table — branded hospitality napkins for the UK and Europe" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="article:published_time" content={PUBLISHED} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <article className="bg-white">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            <span>/</span>
            <span className="text-slate-900">Custom Napkins UK, Ireland &amp; Europe</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Hospitality Guide</span>
            <span className="text-slate-400 text-sm">27 Aug 2026 · 12 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Custom Napkins for Ireland, the UK and Europe
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Searching for <strong>custom napkins</strong> from Dublin, London, Belfast or anywhere in Europe?
            This guide covers printed logo napkins, personalised wedding napkins, sizes, materials, pricing and
            how PrintNPack ships from Ashbourne, Co. Meath to Ireland, the United Kingdom and the EU.
          </p>

          <ArticleImage
            src={HERO}
            alt="Custom napkins UK and Ireland — branded restaurant napkins on a dining table"
            caption="Custom printed napkins put a logo in front of every guest — restaurants, pubs and hotels across Ireland, the UK and Europe."
            priority
            ratio="aspect-[3/2]"
          />

          <nav aria-label="On this page" className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-10">
            <p className="text-sm font-semibold text-slate-900 mb-3">On this page</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-amber-700 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-slate max-w-none">
            <h2 id="what-are-custom-napkins" className="text-2xl font-bold text-gray-900 mt-4 mb-4 scroll-mt-24">
              What are custom napkins?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Custom napkins</strong> (also searched as custom printed napkins, branded napkins, or
              personalised napkins) are paper or airlaid napkins printed with a logo, name, monogram or event
              design. Restaurants use them for everyday branding. Hotels use linen-feel stock for a cloth look.
              Wedding planners print names and dates. The napkin is the one piece of print every guest touches.
            </p>
            <p className="text-gray-600 leading-relaxed">
              PrintNPack prints them in Ireland and delivers across the island, into the UK, and to EU addresses
              on request. If you already know the spec you need, start with{' '}
              <Link href="/products/printed-napkins" className="text-amber-600 hover:underline">printed napkins</Link>
              {' '}or{' '}
              <Link href="/products/premium-linen-feel-napkins" className="text-amber-600 hover:underline">premium linen-feel napkins</Link>.
            </p>

            <h2 id="sizes" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              Custom napkin sizes: cocktail, lunch and dinner
            </h2>
            <p className="text-gray-600 leading-relaxed">
              European hospitality uses centimetre sizes. UK buyers often search the same products as cocktail,
              luncheon and dinner napkins. Choose the size for the service, then print the brand on it.
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeRows.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.size}</td>
                      <td className="px-4 py-3 text-gray-600">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Unsure? Most Irish and UK cafés start with a <strong>33cm 2-ply lunch napkin</strong> and add cocktail
              napkins for the bar. Hotels and weddings step up to 40cm dinner or linen-feel. More size detail sits
              in our{' '}
              <Link href="/blog/personalised-napkins-ireland-guide" className="text-amber-600 hover:underline">
                personalised napkins Ireland guide
              </Link>
              {' '}and the{' '}
              <Link href="/napkin-faq-ireland" className="text-amber-600 hover:underline">napkin FAQ</Link>.
            </p>
          </div>

          <ArticleImage
            src={IMG_COCKTAIL}
            alt="Custom cocktail napkins UK — printed bar napkins under a gin cocktail"
            caption="Cocktail napkins are the highest-visibility custom napkin in pubs and hotel bars — London, Dublin, Edinburgh and beyond."
          />

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <figure>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={IMG_PLAIN}
                  alt="33cm 2-ply lunch napkins wholesale Ireland — Logic8 white 4-fold pack"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, 336px"
                />
              </div>
              <figcaption className="mt-2 text-sm text-slate-500">
                33cm 2-ply lunch napkins — the standard European café size, also sold plain wholesale.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={IMG_LOGO_6}
                  alt="Custom printed lunch napkins with restaurant logo for cafes in Ireland and the UK"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 336px"
                />
              </div>
              <figcaption className="mt-2 text-sm text-slate-500">
                The same lunch size, printed — logo on every cover for dine-in service.
              </figcaption>
            </figure>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 id="materials" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              Paper napkins vs linen-feel (airlaid) napkins
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Printed paper napkins</strong> are the economical choice for high-volume restaurants,
              takeaways and pubs. A one- or two-colour logo holds well, unit cost stays low, and 2-ply is enough
              for everyday service. They start from around €0.05 per unit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Linen-feel napkins</strong> use airlaid paper with a cloth-like texture. They are thicker,
              more absorbent, and photograph like fabric — which is why hotels from Dublin to Amsterdam specify
              them for restaurants and events. They start from around €0.10 per unit.{' '}
              <Link href="/products/premium-linen-feel-napkins" className="text-amber-600 hover:underline">
                View linen-feel napkins
              </Link>
              .
            </p>
          </div>

          <ArticleImage
            src={IMG_LINEN}
            alt="Premium linen-feel custom napkins for hotels in Europe — airlaid cloth-like dinner napkins"
            caption="Airlaid linen-feel napkins for hotels and fine dining — a cloth look without laundry, used across Ireland, the UK and Europe."
          />

          <div className="prose prose-slate max-w-none">
            <h2 id="restaurants" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              Custom printed napkins for restaurants, pubs and hotels
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A branded napkin is cheap media. It sits on the table, under a pint, and in a takeaway bag. Irish
              and UK operators typically print:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Restaurant or pub logo on 33cm lunch napkins for dine-in</li>
              <li>Cocktail napkins for bar service and hotel lounges</li>
              <li>Simple one-colour marks for high-volume pizza and burger sites</li>
              <li>Full-colour artwork for openings, festivals and seasonal menus</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Minimum order is typically 1,000. Many venues keep{' '}
              <Link href="/plain-napkins-tableware-ireland" className="text-amber-600 hover:underline">
                plain wholesale napkins
              </Link>
              {' '}for back-of-house and printed stock for the floor.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
            {[
              { src: IMG_LOGO_1, alt: 'Custom pizza restaurant napkins with printed logo — branded paper napkins Ireland and UK' },
              { src: IMG_LOGO_3, alt: 'Custom printed napkins for restaurants — full colour logo on white lunch napkin' },
              { src: IMG_LOGO_8, alt: 'Branded custom napkins for hospitality — restaurant logo print on embossed paper' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 224px" />
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 id="weddings" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              Personalised wedding napkins in Ireland and the UK
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Couples searching for personalised napkins (the UK and Irish spelling) usually want names, a date,
              or a monogram on dinner or cocktail stock. Linen-feel is the usual choice because it looks like
              cloth in photographs. Paper is fine for larger guest lists and bar stations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Order 3–4 weeks before the wedding: artwork proof, 5–10 business days of production, then delivery
              to the venue — whether that is a Co. Meath hotel, a Waterford reception, a Belfast hall, or a UK
              country house. Cocktail napkins for the drinks reception; dinner size for the meal.
            </p>
          </div>

          <ArticleImage
            src={IMG_WEDDING}
            alt="Personalised wedding napkins Ireland and UK — monogram linen-feel napkins on a hotel table"
            caption="Personalised wedding napkins for Irish and UK receptions — names or a monogram on linen-feel dinner stock."
          />

          <figure className="my-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
              <Image
                src={IMG_WEDDING_IE}
                alt="Personalised wedding napkins printed in Ireland — couple names, date and Waterford venue"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <figcaption className="mt-2 text-sm text-slate-500">
              Full-colour wedding napkin print — names, date and venue. Printed in Ireland, delivered nationwide and to the UK.
            </figcaption>
          </figure>

          <div className="prose prose-slate max-w-none">
            <h2 id="ireland" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              Custom napkins in Ireland
            </h2>
            <p className="text-gray-600 leading-relaxed">
              PrintNPack is based in <strong>Ashbourne, Co. Meath</strong>. We print custom napkins for restaurants,
              cafés, hotels, caterers and events across Dublin, Cork, Galway, Limerick, Waterford and every Irish
              county. Weekly scheduled delivery is available for hospitality accounts. Local collection is available
              from the Ashbourne unit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Start at the{' '}
              <Link href="/napkins-ireland" className="text-amber-600 hover:underline">Napkins Ireland hub</Link>
              , or go straight to{' '}
              <Link href="/napkin-printing-dublin" className="text-amber-600 hover:underline">napkin printing Dublin</Link>
              {' '}or{' '}
              <Link href="/napkin-printing-ashbourne" className="text-amber-600 hover:underline">napkin printing Ashbourne</Link>.
            </p>

            <h2 id="uk" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              Custom napkins in the UK
            </h2>
            <p className="text-gray-600 leading-relaxed">
              UK searchers looking for custom napkins, personalised napkins, or printed napkins can order from
              the same Irish print unit. <strong>Northern Ireland</strong> is a regular route — Belfast, Derry,
              Newry, Lisburn and BT postcodes. <strong>UK mainland</strong> courier (England, Scotland, Wales) is
              quoted per order. Napkins are light, so carriage is usually modest compared with bulky display print.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Typical UK orders: London and Manchester restaurants, Edinburgh hotels, Cardiff and Birmingham
              events, and wedding venues that want personalised napkins without a huge UK print-run minimum.
              Artwork is the same process — PDF, PNG or AI, proof before press, then ship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              After Brexit, UK delivery is a courier job rather than an EU internal move. We confirm carriage and
              paperwork on the quote so there are no surprises at the door.
            </p>

            <h2 id="europe" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              Custom napkins across Europe
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ireland is in the EU, so napkin shipments to France, Germany, the Netherlands, Belgium, Spain, Italy
              and other member states stay inside the single market. EU courier is quoted before production.
              Paper and airlaid napkins are a practical branded item to ship: compact cartons, no bulky stands,
              and a product every hotel and restaurant already buys.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For food businesses, paper napkins also sit on the right side of the{' '}
              <Link href="/blog/eu-ppwr-packaging-regulation-ireland-2026" className="text-amber-600 hover:underline">
                EU Packaging and Packaging Waste Regulation (PPWR)
              </Link>
              {' '}conversation — fibre-based, widely collected, and a straightforward swap for operators tidying
              their tabletop packaging.
            </p>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              How much do custom napkins cost?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Indicative Ireland pricing. UK and EU landed cost adds quoted courier:
            </p>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">From</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">Printed paper napkins</td>
                    <td className="px-4 py-3 text-gray-600">€0.05 / unit</td>
                    <td className="px-4 py-3 text-gray-600">1,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Premium linen-feel napkins</td>
                    <td className="px-4 py-3 text-gray-600">€0.10 / unit</td>
                    <td className="px-4 py-3 text-gray-600">1,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">Plain wholesale napkins</td>
                    <td className="px-4 py-3 text-gray-600">€0.03 / unit</td>
                    <td className="px-4 py-3 text-gray-600">Case packs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Final price depends on size, ply, print colours and quantity. Larger runs drop the unit cost.
              Send artwork and a delivery postcode for a firm quote.
            </p>

            <h2 id="order" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
              How to order custom napkins
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 space-y-2">
              <li>Choose printed paper, linen-feel, or plain wholesale</li>
              <li>Pick size — cocktail, lunch (33cm), or dinner (40cm)</li>
              <li>Send your logo as PDF, PNG, AI or EPS</li>
              <li>Approve the proof</li>
              <li>Receive Ireland delivery, Ashbourne collection, or quoted UK / EU courier</li>
            </ol>
            <p className="text-gray-600 leading-relaxed mt-4">
              Production is typically 5–7 business days for printed paper and 7–10 for linen-feel after artwork
              approval. Call{' '}
              <a href={`tel:${SITE_PHONE_TEL}`} className="text-amber-600 hover:underline">{SITE_PHONE_DISPLAY}</a>
              {' '}or use the{' '}
              <Link href="/quote" className="text-amber-600 hover:underline">quote form</Link>.
            </p>
          </div>

          <section className="mt-12 space-y-4" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-gray-900">Custom napkins — common questions</h2>
            {faqLd.mainEntity.map((item) => (
              <details key={item.name} className="group bg-slate-50 rounded-xl border border-gray-200 p-5 open:shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {item.name}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </section>

          <section className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Order custom napkins for Ireland, the UK or Europe</h2>
            <p className="text-gray-600 mb-4">
              Printed napkins from €0.05. Linen-feel from €0.10. Free quote, artwork support, and delivery from Ashbourne.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products/printed-napkins" className="inline-flex items-center bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors">
                Order printed napkins
              </Link>
              <Link href="/napkins-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                Napkins Ireland hub
              </Link>
              <Link href="/quote" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                Get a quote
              </Link>
            </div>
          </section>
        </main>
      </article>

      <RelatedSeoLinks
        title="Related napkin pages"
        links={[
          { href: '/napkins-ireland', label: 'Napkins Ireland', desc: 'Printed, linen-feel & wholesale hub' },
          { href: '/products/printed-napkins', label: 'Printed Napkins', desc: 'Custom logo napkins from €0.05' },
          { href: '/products/premium-linen-feel-napkins', label: 'Linen-Feel Napkins', desc: 'Airlaid napkins for hotels & weddings' },
          { href: '/blog/personalised-napkins-ireland-guide', label: 'Personalised Napkins Guide', desc: 'Sizes, materials & Irish wedding tips' },
          { href: '/napkin-faq-ireland', label: 'Napkin FAQ', desc: '25+ answers on price, sizes & delivery' },
          { href: '/napkin-printing-dublin', label: 'Napkin Printing Dublin', desc: 'Delivery across Dublin' },
          { href: '/plain-napkins-tableware-ireland', label: 'Plain Napkins Wholesale', desc: 'Unprinted bulk napkins' },
          { href: '/quote', label: 'Request a Quote', desc: 'Ireland, UK & EU delivery' },
        ]}
      />
    </Layout>
  );
}
