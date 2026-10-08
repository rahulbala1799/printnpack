import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { useQuoteCart } from '../lib/quote-cart-context';
import { WEDDING_PRODUCTS } from '../data/wedding-products';
import { weddingAlternateLinks } from '../data/wedding-regions';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_URL, SITE_WHATSAPP_URL } from '../lib/site';
import {
  WEDDING_COLLECTIONS,
  WEDDING_DESCRIPTION,
  WEDDING_FAQS,
  WEDDING_IMAGES,
  WEDDING_KEYWORDS,
  WEDDING_PAGE_PATH,
  WEDDING_TITLE,
} from '../data/wedding-printing';
import { display, script, text } from '../components/wedding/wedding-fonts';
import { useWeddingPageView } from '../components/wedding/useWeddingPageView';

const PAGE_URL = `${SITE_URL}${WEDDING_PAGE_PATH}`;

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Wedding Printing Ireland', item: PAGE_URL },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: WEDDING_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding printing solutions in Ireland',
  itemListElement: WEDDING_COLLECTIONS.flatMap((collection) => collection.items).map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.title,
    url: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`,
  })),
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Printing Ireland',
  serviceType: 'Wedding printing',
  description: WEDDING_DESCRIPTION,
  url: PAGE_URL,
  areaServed: { '@type': 'Country', name: 'Ireland' },
  provider: {
    '@type': 'PrintShop',
    name: 'PrintNPack Ireland',
    url: SITE_URL,
    telephone: SITE_PHONE_TEL,
    email: 'info@printnpack.ie',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 14 Ashbourne Business Centre',
      addressLocality: 'Ashbourne',
      addressRegion: 'Co. Meath',
      postalCode: 'A84 KV57',
      addressCountry: 'IE',
    },
  },
};

const GOLD = '#b8975a';

const COUNTIES = [
  'Dublin', 'Meath', 'Kildare', 'Wicklow', 'Louth', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Kerry',
  'Mayo', 'Donegal', 'Wexford', 'Kilkenny', 'Sligo', 'Clare',
];

const OTHER_CATEGORIES = [
  {
    id: 'invitations',
    eyebrow: 'The invitation',
    title: 'Wedding invitations & stationery',
    image: 'invitation',
    position: 'left center',
    items: ['Invitation cards', 'Save the dates', 'RSVP & details cards', 'Liners & belly bands'],
    label: 'Wedding invitations',
  },
  {
    id: 'table',
    eyebrow: 'The table',
    title: 'Menus, place cards & order of the day',
    image: 'table',
    position: 'center',
    items: ['Menu cards', 'Place cards', 'Order of the day', 'Thank-you cards'],
    label: 'Wedding menus and place cards',
  },
  {
    id: 'signs',
    eyebrow: 'The entrance',
    title: 'Welcome signs & seating charts',
    image: 'venue',
    position: 'left center',
    zoom: 'origin-[22%_50%] scale-[1.45]',
    items: ['Welcome signs', 'Seating charts', 'Table numbers', 'Cake toppers'],
    label: 'Wedding welcome signs and seating charts',
  },
  {
    id: 'venue',
    eyebrow: 'The finishing touches',
    title: 'Banners, decals, stamps & stickers',
    image: 'venue',
    position: 'right center',
    zoom: 'origin-[88%_35%] scale-[1.9]',
    items: ['Roll-up banners', 'Window decals', 'Monogram stamps', 'Favour stickers'],
    label: 'Wedding banners, decals and stamps',
  },
];

function Img({ image, className = '', sizes = '(max-width: 1024px) 100vw, 50vw', eager = false, style }) {
  return (
    <img
      src={image.web}
      srcSet={image.thumb ? `${image.thumb} 480w, ${image.web} 1024w` : undefined}
      sizes={image.thumb ? sizes : undefined}
      alt={image.alt || ''}
      width={image.width || 1024}
      height={image.height || 682}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  );
}

function Ornament({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true" style={{ color: GOLD }}>
      <span className="h-px w-10" style={{ background: light ? '#d9c398' : GOLD }} />
      <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 0.6 7.1 4.9 11.4 6 7.1 7.1 6 11.4 4.9 7.1 0.6 6 4.9 4.9Z" />
      </svg>
      <span className="h-px w-10" style={{ background: light ? '#d9c398' : GOLD }} />
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.32em] ${light ? 'text-[#d9c398]' : 'text-[#8a7240]'}`}>
      {children}
    </p>
  );
}

export default function WeddingPrintingIreland() {
  useWeddingPageView('Wedding Printing Ireland');
  const { openEnquiry, openBuilder } = useQuoteCart();
  const ask = (label) => () => openEnquiry(label || null);
  const napkins = WEDDING_PRODUCTS.find((p) => p.id === 'wedding-napkins-ireland');
  const envelopes = WEDDING_PRODUCTS.find((p) => p.id === 'wedding-envelopes-ireland');
  const featured = [
    { product: napkins, badge: 'Most popular', from: `From ${napkins.minQty} napkins`, specs: ['Airlaid white', 'Full colour', '20 × 20 cm or 10 × 20 cm'], hero: napkins.gallery[1], contain: true },
    { product: envelopes, badge: 'Quote online', from: `From ${envelopes.minQty} envelopes`, specs: ['C6, C5 or DL', 'Full colour print', 'Guest addressing'], hero: envelopes.gallery[2] },
  ];
  const btnPrimary = 'inline-flex items-center justify-center bg-[#2f3d2d] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-[#faf7f2] transition-colors hover:bg-[#222d21]';
  const btnGold = 'inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-[#2b2a26] transition-colors hover:brightness-95';
  const btnLine = 'inline-flex items-center justify-center border px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-colors';

  return (
    <Layout>
      <Head>
        <title>{`${WEDDING_TITLE} | Print n Pack`}</title>
        <meta name="description" content={WEDDING_DESCRIPTION} />
        <meta name="keywords" content={WEDDING_KEYWORDS} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        {weddingAlternateLinks().map(({ hreflang, href }) => (
          <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
        ))}
        <link rel="preload" as="image" href={WEDDING_IMAGES.table.web} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${WEDDING_TITLE} | Print n Pack`} />
        <meta property="og:description" content={WEDDING_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${WEDDING_IMAGES.invitation.src}`} />
        <meta property="og:locale" content="en_IE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${WEDDING_TITLE} | Print n Pack`} />
        <meta name="twitter:description" content={WEDDING_DESCRIPTION} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      </Head>

      <div className={`${text.className} bg-[#faf7f2] text-[#2b2a26]`}>
        {/* HERO */}
        <header className="relative isolate overflow-hidden bg-[#1f261e] text-[#faf7f2]">
          <Img
            image={WEDDING_IMAGES.table}
            eager
            sizes="100vw"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-[#141913]/60" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#141913]/60 via-transparent to-[#141913]/70" />
          <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-5 sm:px-6">
            <ol className="flex items-center gap-2 text-xs text-[#e6dfd0]">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white">Wedding Printing Ireland</li>
            </ol>
          </nav>
          <div className="mx-auto flex min-h-[560px] max-w-4xl flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[640px] sm:py-24">
            <Ornament light />
            <p className={`${script.className} mt-6 text-3xl sm:text-4xl`} style={{ color: '#e3cc9c' }}>
              Wedding stationery &amp; print
            </p>
            <h1 className={`${display.className} mt-2 text-5xl font-medium leading-[1.02] sm:text-7xl`}>
              Wedding Printing <span className="italic">Ireland</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#efe9dc] sm:text-lg">
              Invitations, addressed envelopes, personalised napkins, menus, monogram stamps and welcome signs.
              Designed to match, proofed before print, made in Ashbourne, Co. Meath and delivered across Ireland.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row">
              <Link href="/wedding-napkins-ireland" className={btnGold} style={{ background: '#d9c398' }}>
                Personalised napkins
              </Link>
              <Link href="/wedding-envelopes-ireland" className={`${btnLine} border-[#e3cc9c] text-[#faf7f2] hover:bg-white/10`}>
                Wedding envelopes
              </Link>
              <button type="button" onClick={ask()} className={`${btnLine} border-white/40 text-[#faf7f2] hover:bg-white/10`}>
                Get a wedding quote
              </button>
            </div>
          </div>
        </header>

        {/* TRUST STRIP */}
        <section className="border-b border-[#e6dfd0] bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#e6dfd0] px-0 sm:grid-cols-4">
            {[
              ['Made in Ashbourne', 'Co. Meath print workshop'],
              ['Proof before print', 'You approve every design'],
              ['Delivery to all 32 counties', 'Or collect locally'],
              ['Reply within 1 hour', 'Mon to Fri 9 to 6, Sat 10 to 2'],
            ].map(([title, sub]) => (
              <li key={title} className="bg-white px-4 py-5 text-center">
                <p className={`${display.className} text-lg font-semibold text-[#2f3d2d] sm:text-xl`}>{title}</p>
                <p className="mt-0.5 text-xs text-[#6b6a60]">{sub}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FEATURED PRODUCTS */}
        <section id="collection" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>The wedding collection</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
                Wedding printing you can quote online
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#55544b]">
                Choose a size, set a quantity and send your quote in a couple of minutes. We come back with a proof
                before anything is printed.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {featured.map(({ product, badge, from, specs, hero, contain }) => (
                <article key={product.id} className="group flex flex-col bg-white shadow-[0_1px_0_#e6dfd0]">
                  <Link href={product.path} className="relative block overflow-hidden bg-[#efe9dc]">
                    <Img
                      image={hero}
                      sizes="(max-width: 768px) 100vw, 560px"
                      className={`aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03] ${contain ? 'bg-[#d3d0c8] object-contain' : 'object-cover'}`}
                    />
                    <span className="absolute left-4 top-4 bg-[#2f3d2d] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#faf7f2]">
                      {badge}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className={`${display.className} text-3xl font-medium`}>
                      <Link href={product.path} className="hover:text-[#8a7240]">{product.name}</Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#55544b]">{product.tagline}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {specs.map((spec) => (
                        <li key={spec} className="border border-[#e0d6bf] bg-[#faf7f2] px-3 py-1 text-xs font-semibold text-[#6e5c2f]">
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#efe9dc] pt-5">
                      <p className={`${display.className} text-xl font-semibold text-[#2f3d2d]`}>{from}</p>
                      <div className="ml-auto flex flex-wrap gap-2">
                        <Link href={product.path} className={`${btnPrimary} !px-5 !py-3`}>Choose a size</Link>
                        <button
                          type="button"
                          onClick={() => openBuilder(product.id)}
                          className={`${btnLine} !px-5 !py-3 border-[#2f3d2d] text-[#2f3d2d] hover:bg-[#2f3d2d] hover:text-white`}
                        >
                          Quick quote
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REST OF THE DAY */}
        <section id="the-day" className="scroll-mt-24 bg-[#f3ede1]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Everything for the day</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
                Wedding invitations, signs &amp; table stationery
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#55544b]">
                One printer for the whole day, so the invitation, the menu and the welcome sign share the same type,
                colours and finish. Tell us what you need and we will quote it as one wedding.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {OTHER_CATEGORIES.map((category) => (
                <article key={category.id} className="group relative isolate flex min-h-[380px] flex-col justify-end overflow-hidden bg-[#1f261e] text-[#faf7f2]">
                  <div className={`absolute inset-0 -z-10 overflow-hidden ${category.zoom || ''}`}>
                    <Img
                      image={WEDDING_IMAGES[category.image]}
                      sizes="(max-width: 640px) 100vw, 560px"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ objectPosition: category.position }}
                    />
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141913]/90 via-[#141913]/40 to-transparent" />
                  <div className="p-6 sm:p-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e3cc9c]">{category.eyebrow}</p>
                    <h3 className={`${display.className} mt-2 text-3xl font-medium leading-tight`}>{category.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#efe9dc]">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#e3cc9c]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={ask(category.label)}
                      className="mt-5 inline-flex items-center border-b border-[#e3cc9c] pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#faf7f2] hover:text-[#e3cc9c]"
                    >
                      Request a quote
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NAPKINS SHOWCASE */}
        <section id="napkins" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[napkins.gallery[1], napkins.gallery[4], napkins.gallery[7], napkins.gallery[3]].map((image, index) => (
                <div key={image.web} className={`overflow-hidden bg-[#ebe8df] ${index % 2 ? 'mt-8' : ''}`}>
                  <Img image={image} sizes="(max-width: 1024px) 50vw, 300px" className="aspect-square w-full object-contain" />
                </div>
              ))}
            </div>
            <div>
              <Eyebrow>Personalised napkins</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
                Personalised wedding napkins in Ireland
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#55544b]">
                White airlaid napkins that feel like cloth, printed in full colour. A wreath, a peony, a couple
                portrait, your venue, even the dog in a bow tie: it comes out exactly as designed. Order from 50
                napkins in 20 × 20 cm or 10 × 20 cm, with delivery to Dublin, Cork, Galway and every county.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#3d3c35]">
                {['Names, monogram and date in full colour', 'Square 20 × 20 cm and slim 10 × 20 cm', 'Quantities from 50, 100, 200 and up', 'Proof sent before printing'].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45" style={{ background: GOLD }} />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/wedding-napkins-ireland" className={btnPrimary}>Build your napkin quote</Link>
                <Link href="/napkins-ireland" className={`${btnLine} border-[#2f3d2d] text-[#2f3d2d] hover:bg-[#2f3d2d] hover:text-white`}>
                  Napkin range
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ENVELOPES SHOWCASE */}
        <section id="envelopes" className="scroll-mt-24 bg-[#f3ede1]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
            <div className="order-2 lg:order-1">
              <Eyebrow>Printed envelopes</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
                Wedding envelopes printed &amp; addressed
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#55544b]">
                Colour-printed C6, C5 and DL envelopes with a return address on the flap. We can print every guest&rsquo;s
                name and address, so the invitation suite leaves the workshop ready to post anywhere in Ireland.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#3d3c35]">
                {['C6 (114 × 162 mm), C5 (162 × 229 mm) and DL (110 × 220 mm)', 'Full colour, with a return address on the flap', 'Guest names and addresses printed on the front'].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45" style={{ background: GOLD }} />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/wedding-envelopes-ireland" className={btnPrimary}>Build your envelope quote</Link>
              </div>
            </div>
            <div className="order-1 grid grid-cols-5 gap-3 sm:gap-4 lg:order-2">
              <div className="col-span-3 overflow-hidden bg-[#e7e0cf]">
                <Img image={envelopes.gallery[2]} sizes="(max-width: 1024px) 60vw, 380px" className="h-full min-h-[260px] w-full object-cover" />
              </div>
              <div className="col-span-2 grid gap-3 sm:gap-4">
                <div className="overflow-hidden bg-[#e7e0cf]">
                  <Img image={envelopes.gallery[1]} sizes="(max-width: 1024px) 40vw, 260px" className="h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden bg-[#e7e0cf]">
                  <Img image={envelopes.gallery[0]} sizes="(max-width: 1024px) 40vw, 260px" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#2f3d2d] text-[#faf7f2]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="text-center">
              <Eyebrow light>How it works</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium sm:text-5xl`}>From your wording to your door</h2>
            </div>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['I', 'Tell us', 'Names, date, venue, guest count and any artwork or a rough layout.'],
                ['II', 'Get a quote', 'We confirm size, stock, quantity and the date you need everything by.'],
                ['III', 'Approve the proof', 'You see the layout before anything is printed or engraved.'],
                ['IV', 'We print & deliver', 'Produced in Ashbourne. Collect locally, or delivered across Ireland.'],
              ].map(([step, title, body]) => (
                <li key={step} className="list-none text-center">
                  <p className={`${display.className} text-5xl italic`} style={{ color: '#d9c398' }}>{step}</p>
                  <h3 className={`${display.className} mt-3 text-2xl font-medium`}>{title}</h3>
                  <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-[#d9e0d4]">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* IRELAND */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <Eyebrow>Across Ireland</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
                Wedding printing from Ashbourne, delivered nationwide
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#55544b]">
                Our workshop is at Unit 14, Ashbourne Business Centre, Co. Meath, just off the M2. Couples in Meath
                and Dublin can collect, and we deliver wedding invitations, napkins, stamps, signs and banners to
                every county in Ireland.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {COUNTIES.map((county) => (
                  <li key={county} className="border border-[#e0d6bf] bg-[#faf7f2] px-3 py-1.5 text-xs font-semibold text-[#6e5c2f]">
                    {county}
                  </li>
                ))}
                <li className="px-3 py-1.5 text-xs font-semibold text-[#6b6a60]">and every other county</li>
              </ul>
            </div>
            <ul className="divide-y divide-[#e6dfd0] border-y border-[#e6dfd0] self-center">
              {[
                ['/printing-ashbourne', 'Printing Ashbourne', 'Collect your wedding print from our workshop.'],
                ['/printing-dublin', 'Printing Dublin', 'Wedding printing delivered across Dublin city and county.'],
                ['/printing-ireland', 'Printing Ireland', 'The wider print range, from posters to packaging.'],
                ['/wedding-printing-uk', 'Wedding printing UK', 'Napkins and envelopes posted to England, Scotland, Wales and Northern Ireland.'],
                ['/wedding-printing-europe', 'Wedding printing Europe', 'Delivered across the EU, including destination weddings.'],
              ].map(([href, title, desc]) => (
                <li key={href}>
                  <Link href={href} className="group flex items-center justify-between gap-4 py-5">
                    <span>
                      <span className={`${display.className} block text-2xl font-medium group-hover:text-[#8a7240]`}>{title}</span>
                      <span className="mt-1 block text-sm text-[#55544b]">{desc}</span>
                    </span>
                    <span aria-hidden="true" className="text-xl text-[#8a7240] transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#faf7f2]">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="text-center">
              <Eyebrow>Good to know</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium sm:text-5xl`}>Wedding printing questions</h2>
            </div>
            <div className="mt-10 divide-y divide-[#e6dfd0] border-y border-[#e6dfd0]">
              {WEDDING_FAQS.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-[#2b2a26]">
                    {faq.q}
                    <span className="mt-0.5 text-xl leading-none text-[#8a7240] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#55544b]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden bg-[#1f261e] text-[#faf7f2]">
          <Img image={WEDDING_IMAGES.venue} sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-[#141913]/75" />
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
            <Ornament light />
            <h2 className={`${display.className} mt-6 text-4xl font-medium sm:text-6xl`}>Tell us the date</h2>
            <p className={`${script.className} mt-3 text-3xl sm:text-4xl`} style={{ color: '#e3cc9c' }}>
              and we will take care of the print
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#efe9dc]">
              Send us a message and we reply within 1 hour. We will quote the invitations, the table and the signs as one wedding.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <button type="button" onClick={ask()} className={btnGold} style={{ background: '#d9c398' }}>
                Message us now
              </button>
              <a href={`tel:${SITE_PHONE_TEL}`} className={`${btnLine} border-[#e3cc9c] text-[#faf7f2] hover:bg-white/10`}>
                Call {SITE_PHONE_DISPLAY}
              </a>
              <a href={SITE_WHATSAPP_URL} className={`${btnLine} border-white/40 text-[#faf7f2] hover:bg-white/10`}>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
