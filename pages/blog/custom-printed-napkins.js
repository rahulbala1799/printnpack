import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { useQuoteCart } from '../../lib/quote-cart-context';
import { SITE_URL as siteUrl } from '../../lib/site';

const SLUG = 'custom-printed-napkins';
const PAGE_URL = `${siteUrl}/blog/${SLUG}`;
const HERO = '/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.jpg';

const title = 'Custom Printed Napkins | 10×10 cm Cocktail, Wedding and Kraft';
const description =
  'Printed napkins from 50. Cocktail and beverage napkins are 10 × 10 cm closed. Wedding napkins are 20 × 20 cm and 10 × 20 cm, in white airlaid or brown kraft. Tell us the idea and we design it. Printed in Ashbourne and posted across Ireland, the UK and Europe.';

const PRODUCTS = [
  {
    id: 'cocktail-napkins-ireland',
    href: '/cocktail-napkins-ireland',
    quote: 'Quote cocktail napkins',
    page: 'Cocktail napkin page',
  },
  {
    id: 'wedding-napkins-ireland',
    href: '/wedding-napkins-ireland',
    quote: 'Quote wedding napkins',
    page: 'Wedding napkin page',
  },
  {
    id: 'wedding-kraft-napkins-ireland',
    href: '/wedding-kraft-napkins-ireland',
    quote: 'Quote kraft napkins',
    page: 'Kraft napkin page',
  },
];

const faqs = [
  {
    q: 'What size are custom printed cocktail napkins?',
    a: 'Closed, the cocktail napkin is 10 × 10 cm. Open, it is 20 × 40 cm. In the US this size is called a beverage napkin. It is the same white napkin, from 50, for a wedding drinks reception or a restaurant logo.',
  },
  {
    q: 'What size are custom printed wedding napkins?',
    a: 'White airlaid wedding napkins come in 20 × 20 cm for the drinks and 10 × 20 cm for the plate. Brown kraft napkins use the same two sizes. Order from 50.',
  },
  {
    q: 'Can you design the napkin if I only have an idea?',
    a: 'Yes. Send the names, the date, a logo, or a short description such as a wreath, the dog or the venue. We draw it and send a proof before printing.',
  },
  {
    q: 'Do you print brown kraft napkins?',
    a: 'Yes. Kraft wedding napkins are unbleached brown paper, printed with names, a date or a monogram, in 20 × 20 cm and 10 × 20 cm, from 50.',
  },
  {
    q: 'Do you post printed napkins to the UK and Europe?',
    a: 'Yes. Napkins are printed in Ashbourne, Co. Meath. Delivery covers Ireland, England, Scotland, Wales, Northern Ireland and the EU. Delivery to Great Britain starts at €21. Northern Ireland is priced like Ireland, from €9. Goods sent to Great Britain pass through UK customs, and the quote shows the postage before you confirm.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image: `${siteUrl}${HERO}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-10-14',
  dateModified: '2026-10-14',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Custom printed napkins', item: PAGE_URL },
  ],
};

function QuoteButton({ productId, children, dark = true }) {
  const { openBuilder } = useQuoteCart();
  return (
    <button
      type="button"
      onClick={() => openBuilder(productId)}
      className={
        dark
          ? 'inline-flex items-center justify-center bg-slate-900 text-white font-semibold px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors'
          : 'inline-flex items-center justify-center bg-white text-slate-900 font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-colors'
      }
    >
      {children}
    </button>
  );
}

function ProductActions({ id, href, quote, page }) {
  return (
    <div className="mt-5 flex flex-col sm:flex-row gap-3">
      <QuoteButton productId={id}>{quote}</QuoteButton>
      <Link
        href={href}
        className="inline-flex items-center justify-center border border-slate-300 text-slate-800 font-semibold px-5 py-3 rounded-xl hover:border-slate-400 transition-colors"
      >
        {page}
      </Link>
    </div>
  );
}

function NapkinPhoto({ src, alt, caption, width, height }) {
  return (
    <figure>
      <div className="rounded-2xl overflow-hidden bg-[#f3f1eb]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>
      {caption ? <figcaption className="mt-2 text-sm text-slate-500 leading-relaxed">{caption}</figcaption> : null}
    </figure>
  );
}

export default function CustomPrintedNapkins() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom printed napkins, printed napkins, napkin printing, printing on napkins, custom printed cocktail napkins, printed cocktail napkins, custom printed beverage napkins, custom printed wedding napkins, kraft wedding napkins, personalised napkins"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}${HERO}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Custom printed napkins</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Napkin printing</span>
          <span className="text-slate-400 text-sm">14 Oct 2026 · 7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom printed napkins: 10×10 cm cocktail, wedding and kraft
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Printed napkins from 50. You do not need a finished logo file. Send the names, the date, or a short
          description of the idea, and we draw it and send a proof before anything is printed.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
          {PRODUCTS.map((product) => (
            <QuoteButton key={product.id} productId={product.id}>
              {product.quote}
            </QuoteButton>
          ))}
        </div>

        <figure className="mb-12">
          <div className="rounded-2xl overflow-hidden bg-[#f3f1eb]">
            <Image
              src="/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.webp"
              alt="Wedding cocktail napkins printed with a green wreath monogram on a marble bar beside champagne coupes"
              width={1024}
              height={682}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-500">
            A wreath and initials on a 20 × 20 cm napkin, set out for the drinks.
          </figcaption>
        </figure>

        <h2 id="cocktail" className="text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-24">
          Printed cocktail napkins, 10 × 10 cm
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Custom printed cocktail napkins are white, 10 × 10 cm when closed and 20 × 40 cm when open.
          The same size is sold in the US as a beverage napkin. Restaurants, bars and cafés print a logo.
          Weddings print names, a date or a monogram. Keep the type in the middle. A frame or a border
          along the edge often gets cut off, because a napkin is not always cut with a straight edge.
          Order from 50.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 my-8">
          <NapkinPhoto
            src="/images/napkins/cocktail-napkin-salty-cod-ireland.webp"
            alt="Printed cocktail napkin for The Salty Cod fish and chips, white 10 × 10 cm napkin with a blue fish logo"
            caption="Restaurant logo, 10 × 10 cm closed"
            width={1024}
            height={936}
          />
          <NapkinPhoto
            src="/images/napkins/cocktail-napkin-tamarind-lane-ireland.webp"
            alt="Custom printed cocktail napkin for Tamarind Lane Indian Street Kitchen, white napkin with a copper pot logo"
            caption="Café logo, 10 × 10 cm closed"
            width={1024}
            height={936}
          />
        </div>
        <ProductActions {...PRODUCTS[0]} />

        <h2 id="wedding" className="text-2xl font-bold text-slate-900 mt-14 mb-4 scroll-mt-24">
          Custom printed wedding napkins
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          White airlaid wedding napkins take full-colour print. The 20 × 20 cm square is for cocktails,
          canapés and the drinks reception. The 10 × 20 cm napkin sits on the plate. Send the names and
          the date, or ask for a wreath, a portrait, the venue or the dog. We set it up and send a proof.
          Order from 50.
        </p>
        <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-4">20 × 20 cm, for the drinks</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <NapkinPhoto
            src="/images/wedding/wedding-napkin-20x20-airlaid-blue-ireland.webp"
            alt="Personalised wedding napkin, white airlaid 20 × 20 cm, printed in blue with two hearts, names and a date"
            caption="Names and date"
            width={1024}
            height={1024}
          />
          <NapkinPhoto
            src="/images/wedding/wedding-napkin-20x20-airlaid-couple-cartoon-ireland.webp"
            alt="Wedding napkin printed in full colour with a cartoon portrait of the couple, their names and the date"
            caption="Couple portrait"
            width={1024}
            height={1024}
          />
          <NapkinPhoto
            src="/images/wedding/wedding-napkins-20x20-airlaid-bar-ireland.webp"
            alt="Wedding cocktail napkins printed with a green wreath monogram on a marble bar beside champagne coupes"
            caption="Wreath monogram"
            width={1024}
            height={682}
          />
          <NapkinPhoto
            src="/images/wedding/wedding-napkins-20x20-airlaid-ring-security-dog-ireland.webp"
            alt="Wedding napkins printed with a border collie in a bow tie and the line Official Ring Security"
            caption="Pet portrait"
            width={1024}
            height={1024}
          />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mt-10 mb-4">10 × 20 cm, on the plate</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <NapkinPhoto
            src="/images/wedding/wedding-napkin-10x20-airlaid-sage-ireland.webp"
            alt="White airlaid 10 × 20 cm wedding napkin printed with a green laurel wreath, initials and wedding date"
            caption="Initials and date"
            width={1024}
            height={1024}
          />
          <NapkinPhoto
            src="/images/wedding/wedding-napkin-10x20-airlaid-table-ireland.webp"
            alt="Printed wedding napkin on a dinner plate with a burgundy peony and the couple’s names"
            caption="On the plate"
            width={1024}
            height={682}
          />
          <NapkinPhoto
            src="/images/wedding/wedding-napkin-10x20-airlaid-venue-illustration-ireland.webp"
            alt="Wedding napkin printed in burgundy with a line illustration of the wedding venue and the date"
            caption="Venue illustration"
            width={1024}
            height={1024}
          />
          <NapkinPhoto
            src="/images/wedding/wedding-napkin-10x20-airlaid-dog-cartoon-ireland.webp"
            alt="Wedding napkin printed with a golden retriever in a bow tie and the line Milo says I do too"
            caption="Pet portrait"
            width={1024}
            height={1024}
          />
        </div>
        <ProductActions {...PRODUCTS[1]} />

        <h2 id="kraft" className="text-2xl font-bold text-slate-900 mt-14 mb-4 scroll-mt-24">
          Brown kraft wedding napkins
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Kraft napkins are unbleached brown paper, printed with names, a date, a monogram or a wreath.
          Couples also look for these as eco-friendly and recycled wedding napkins. The paper is unbleached,
          and the napkin can be recycled with paper after the day. Sizes are the same as the white napkins:
          20 × 20 cm for the drinks and 10 × 20 cm for the plate. Order from 50.
        </p>
        <div className="max-w-sm my-8">
          <NapkinPhoto
            src="/images/wedding/wedding-napkin-20x20-kraft-ar-ireland.webp"
            alt="Brown kraft wedding napkin printed with an A and R monogram wreath and the date 24 August 2027"
            caption="Monogram and date, 20 × 20 cm kraft"
            width={1000}
            height={1000}
          />
        </div>
        <ProductActions {...PRODUCTS[2]} />

        <h2 id="printing" className="text-2xl font-bold text-slate-900 mt-14 mb-4 scroll-mt-24">
          Napkin printing: what to send
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Printing on napkins starts with a message, not a design file. Tell us which napkin, how many,
          and the idea. A restaurant sends a logo. A wedding can send two names and a date, or a line
          such as “a sage wreath and our initials” or “the dog in a bow tie”. We draw it, you approve
          the proof, then we print. All three napkins start at 50.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Restaurant napkins in 10 × 10 cm cocktail, 10 × 20, 12 × 20, 15 × 20 and 20 × 20 cm start from 25 on the{' '}
          <Link href="/products/premium-linen-feel-napkins" className="text-amber-700 hover:underline font-medium">
            printed napkins quote builder
          </Link>
          . This page is the short run: cocktail, wedding and kraft.
        </p>

        <h2 id="delivery" className="text-2xl font-bold text-slate-900 mt-14 mb-4 scroll-mt-24">
          Posted to Ireland, the UK and Europe
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The napkins are printed in Ashbourne, Co. Meath. Collect them locally, or we deliver across
          Ireland and post to England, Scotland, Wales, Northern Ireland and the EU. Delivery to Great
          Britain starts at €21. Northern Ireland is priced like Ireland, from €9. Goods sent from
          Ireland to Great Britain pass through UK customs. The quote shows the postage before you confirm.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Wedding orders for the UK are on the{' '}
          <Link href="/wedding-printing-uk" className="text-amber-700 hover:underline font-medium">UK wedding printing page</Link>.
          EU orders are on the{' '}
          <Link href="/wedding-printing-europe" className="text-amber-700 hover:underline font-medium">Europe wedding printing page</Link>.
          The full napkin range is on{' '}
          <Link href="/napkins-ireland" className="text-amber-700 hover:underline font-medium">Napkins Ireland</Link>.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-14 mb-4">Questions</h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-2">Quote a napkin</h2>
          <p className="text-slate-300 mb-5">
            Pick the napkin. The quote builder opens with that product, so you can choose the size and the quantity.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {PRODUCTS.map((product) => (
              <QuoteButton key={product.id} productId={product.id} dark={false}>
                {product.quote}
              </QuoteButton>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
