import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../layout/Layout';
import { useQuoteCart } from '../../lib/quote-cart-context';
import { WEDDING_PRODUCTS } from '../../data/wedding-products';
import { WEDDING_IMAGES, WEDDING_PAGE_PATH } from '../../data/wedding-printing';
import { WEDDING_REGIONS, weddingAlternateLinks } from '../../data/wedding-regions';
import { PARCEL_RATES, PACKET_RATES, SHIPPING_RATES_CHECKED, ZONE_2_COUNTRIES, ZONE_3_COUNTRIES } from '../../data/shipping-rates';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_URL, SITE_WHATSAPP_URL } from '../../lib/site';
import { display, script, text } from './wedding-fonts';

const GOLD = '#b8975a';

const btnPrimary = 'inline-flex items-center justify-center bg-[#2f3d2d] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-[#faf7f2] transition-colors hover:bg-[#222d21]';
const btnLine = 'inline-flex items-center justify-center border px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-colors';

const ALSO = [
  ['Wedding invitations', 'Invitation cards, save the dates, RSVP and details cards, liners and belly bands.'],
  ['Menus and place cards', 'Menu cards, place cards, order of the day and thank-you cards in matching type.'],
  ['Welcome signs and seating charts', 'Engraved acrylic and wood signs, table numbers, cake toppers and favour tags.'],
  ['Monogram stamps, banners and decals', 'Monogram rubber stamps, roll-up banners, window decals and favour stickers.'],
];

function Img({ image, className = '', sizes = '(max-width: 1024px) 100vw, 50vw', eager = false }) {
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
    />
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true" style={{ color: GOLD }}>
      <span className="h-px w-10" style={{ background: '#d9c398' }} />
      <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 0.6 7.1 4.9 11.4 6 7.1 7.1 6 11.4 4.9 7.1 0.6 6 4.9 4.9Z" />
      </svg>
      <span className="h-px w-10" style={{ background: '#d9c398' }} />
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.32em] ${light ? 'text-[#d9c398]' : 'text-[#8a7240]'}`}>{children}</p>
  );
}

function RateTable({ caption, columns, rows }) {
  return (
    <div className="overflow-x-auto border border-[#e6dfd0] bg-white">
      <table className="w-full min-w-[420px] text-left text-sm">
        <caption className="border-b border-[#e6dfd0] bg-[#f3ede1] px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.2em] text-[#6e5c2f]">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-[#e6dfd0] text-xs uppercase tracking-wide text-[#6b6a60]">
            <th scope="col" className="px-4 py-2.5 font-semibold">Packed weight</th>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-4 py-2.5 font-semibold">{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#efe9dc]">
          {rows.map((row) => (
            <tr key={row.weight}>
              <th scope="row" className="px-4 py-2.5 font-semibold text-[#2b2a26]">{row.weight}</th>
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-2.5 text-[#3d3c35]">{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DeliveryCosts({ region }) {
  const isUk = region.id === 'uk';
  const parcelColumns = isUk
    ? [{ key: 'gb', label: 'Great Britain' }, { key: 'ie', label: 'Northern Ireland' }]
    : [{ key: 'z2', label: 'Zone 2' }, { key: 'z3', label: 'Zone 3' }];
  const packetColumns = isUk
    ? [{ key: 'gbz2', label: 'Great Britain' }, { key: 'ie', label: 'Northern Ireland' }]
    : [{ key: 'gbz2', label: 'Zone 2' }, { key: 'z3', label: 'Zone 3' }];
  return (
    <section id="delivery" className="scroll-mt-24 bg-[#faf7f2]">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Delivery costs</Eyebrow>
          <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
            Delivery to {region.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#55544b]">
            We post wedding orders with An Post Standard Post. The price depends on the packed weight of your order. Your
            quote confirms the weight and the delivery cost before you pay.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <RateTable caption="Parcel prices" columns={parcelColumns} rows={PARCEL_RATES} />
          <RateTable caption="Small orders up to 2 kg (packet rate)" columns={packetColumns} rows={PACKET_RATES} />
        </div>
        {isUk ? (
          <p className="mt-6 text-center text-sm leading-relaxed text-[#55544b]">
            Northern Ireland costs the same as delivery within Ireland. Orders to Great Britain pass through UK customs,
            so ask us when you quote and we will explain what applies.
          </p>
        ) : (
          <div className="mt-6 grid gap-4 text-sm leading-relaxed text-[#55544b] sm:grid-cols-2">
            <p><strong className="text-[#2b2a26]">Zone 2:</strong> {ZONE_2_COUNTRIES.join(', ')}.</p>
            <p>
              <strong className="text-[#2b2a26]">Zone 3:</strong> most other European destinations, including {ZONE_3_COUNTRIES.join(', ')}.
              Zone 3 parcels over 10 kg are €60 plus €3 for every extra kg. Some destinations, such as Turkey, are in a
              higher zone and are quoted separately.
            </p>
          </div>
        )}
        <p className="mt-6 text-center text-xs text-[#8a8a7e]">
          An Post Standard Post prices from Ireland, in euro, checked {SHIPPING_RATES_CHECKED}. Prices can change.
        </p>
      </div>
    </section>
  );
}

export default function WeddingRegionPage({ regionId }) {
  const region = WEDDING_REGIONS[regionId];
  const { openEnquiry, openBuilder } = useQuoteCart();
  const napkins = WEDDING_PRODUCTS.find((p) => p.id === 'wedding-napkins-ireland');
  const envelopes = WEDDING_PRODUCTS.find((p) => p.id === 'wedding-envelopes-ireland');
  const pageUrl = `${SITE_URL}${region.path}`;
  const other = Object.values(WEDDING_REGIONS).filter((item) => item.id !== region.id);

  const products = [
    {
      product: napkins,
      hero: napkins.gallery[1],
      contain: true,
      h3: `Personalised wedding napkins ${region.id === 'uk' ? 'UK' : 'Europe'}`,
      body: `White airlaid napkins printed in full colour with your names, date, monogram or artwork. 20 × 20 cm or 10 × 20 cm, from ${napkins.minQty} napkins.`,
      specs: ['Airlaid white', 'Full colour', '20 × 20 or 10 × 20 cm'],
    },
    {
      product: envelopes,
      hero: envelopes.gallery[2],
      h3: `Printed wedding envelopes ${region.id === 'uk' ? 'UK' : 'Europe'}`,
      body: `C6, C5 and DL envelopes printed in full colour, with a return address on the flap and guest names and addresses on the front. From ${envelopes.minQty} envelopes.`,
      specs: ['C6, C5 or DL', 'Full colour', 'Guest addressing'],
    },
  ];

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Wedding Printing Ireland', item: `${SITE_URL}${WEDDING_PAGE_PATH}` },
      { '@type': 'ListItem', position: 3, name: `Wedding Printing ${region.short}`, item: pageUrl },
    ],
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: region.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Wedding Printing ${region.short}`,
    serviceType: 'Wedding printing',
    description: region.description,
    url: pageUrl,
    areaServed: region.places.map((name) => ({ '@type': region.id === 'uk' ? 'City' : 'Country', name })),
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

  return (
    <Layout>
      <Head>
        <title>{`${region.title} | Print n Pack`}</title>
        <meta name="description" content={region.description} />
        <meta name="keywords" content={region.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        {weddingAlternateLinks().map(({ hreflang, href }) => (
          <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
        ))}
        <link rel="preload" as="image" href={WEDDING_IMAGES.table.web} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${region.title} | Print n Pack`} />
        <meta property="og:description" content={region.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${SITE_URL}${WEDDING_IMAGES.invitation.src}`} />
        <meta property="og:locale" content={region.id === 'uk' ? 'en_GB' : 'en_IE'} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      </Head>

      <div className={`${text.className} bg-[#faf7f2] text-[#2b2a26]`}>
        <header className="relative isolate overflow-hidden bg-[#1f261e] text-[#faf7f2]">
          <Img image={WEDDING_IMAGES.table} eager sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center]" />
          <div className="absolute inset-0 -z-10 bg-[#141913]/60" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#141913]/60 via-transparent to-[#141913]/70" />
          <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-5 sm:px-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#e6dfd0]">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={WEDDING_PAGE_PATH} className="hover:text-white">Wedding printing</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white">{region.short}</li>
            </ol>
          </nav>
          <div className="mx-auto flex min-h-[520px] max-w-4xl flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[600px] sm:py-24">
            <Ornament />
            <p className={`${script.className} mt-6 text-3xl sm:text-4xl`} style={{ color: '#e3cc9c' }}>{region.script}</p>
            <h1 className={`${display.className} mt-2 text-5xl font-medium leading-[1.02] sm:text-7xl`}>
              {region.h1Lead} <span className="italic">{region.h1Accent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#efe9dc] sm:text-lg">{region.intro}</p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row">
              <button type="button" onClick={() => openBuilder(napkins.id)} className={`${btnPrimary} !bg-[#d9c398] !text-[#2b2a26] hover:!brightness-95`}>
                Quote napkins
              </button>
              <button type="button" onClick={() => openBuilder(envelopes.id)} className={`${btnLine} border-[#e3cc9c] text-[#faf7f2] hover:bg-white/10`}>
                Quote envelopes
              </button>
              <button type="button" onClick={() => openEnquiry(`Wedding printing ${region.short}`)} className={`${btnLine} border-white/40 text-[#faf7f2] hover:bg-white/10`}>
                Message us
              </button>
            </div>
          </div>
        </header>

        <section className="border-b border-[#e6dfd0] bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#e6dfd0] sm:grid-cols-4">
            {region.trust.map(([title, sub]) => (
              <li key={title} className="bg-white px-4 py-5 text-center">
                <p className={`${display.className} text-lg font-semibold text-[#2f3d2d] sm:text-xl`}>{title}</p>
                <p className="mt-0.5 text-xs text-[#6b6a60]">{sub}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Quote online</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
                Personalised wedding printing for {region.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#55544b]">
                Choose a size and quantity, add it to your quote and we come back with a proof, the delivery cost to
                {' '}{region.id === 'uk' ? 'your UK address' : 'your address in the EU'}.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {products.map(({ product, hero, contain, h3, body, specs }) => (
                <article key={product.id} className="group flex flex-col bg-white shadow-[0_1px_0_#e6dfd0]">
                  <Link href={product.path} className="block overflow-hidden bg-[#efe9dc]">
                    <Img
                      image={hero}
                      sizes="(max-width: 768px) 100vw, 560px"
                      className={`aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03] ${contain ? 'bg-[#d3d0c8] object-contain' : 'object-cover'}`}
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className={`${display.className} text-3xl font-medium`}>{h3}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#55544b]">{body}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {specs.map((spec) => (
                        <li key={spec} className="border border-[#e0d6bf] bg-[#faf7f2] px-3 py-1 text-xs font-semibold text-[#6e5c2f]">{spec}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-[#efe9dc] pt-5">
                      <button type="button" onClick={() => openBuilder(product.id)} className={`${btnPrimary} !px-5 !py-3`}>Build a quote</button>
                      <Link href={product.path} className={`${btnLine} !px-5 !py-3 border-[#2f3d2d] text-[#2f3d2d] hover:bg-[#2f3d2d] hover:text-white`}>
                        See all sizes
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3ede1]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Everything for the day</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>
                Wedding stationery and signs for {region.name}
              </h2>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {ALSO.map(([title, desc]) => (
                <li key={title} className="border border-[#e0d6bf] bg-white p-6">
                  <h3 className={`${display.className} text-2xl font-medium`}>{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#55544b]">{desc}</p>
                  <button
                    type="button"
                    onClick={() => openEnquiry(`${title} (${region.short})`)}
                    className="mt-4 border-b border-[#b8975a] pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#2f3d2d] hover:text-[#8a7240]"
                  >
                    Request a quote
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#2f3d2d] text-[#faf7f2]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="text-center">
              <Eyebrow light>How it works</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium sm:text-5xl`}>From your wording to your door</h2>
            </div>
            <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['I', 'Tell us', 'Names, date, venue, quantity and any artwork or a rough layout.'],
                ['II', 'Get a quote', `Size, quantity and delivery to ${region.id === 'uk' ? 'the UK' : 'your country'} confirmed.`],
                ['III', 'Approve the proof', 'You see the layout before anything is printed.'],
                ['IV', 'We print and post', 'Made in Ashbourne, Ireland and sent to your address.'],
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

        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
            <Eyebrow>Where we deliver</Eyebrow>
            <h2 className={`${display.className} mt-3 text-4xl font-medium leading-tight sm:text-5xl`}>{region.placesTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#55544b]">{region.placesText}</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {region.places.map((place) => (
                <li key={place} className="border border-[#e0d6bf] bg-[#faf7f2] px-3 py-1.5 text-xs font-semibold text-[#6e5c2f]">{place}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-[#55544b]">
              Also see wedding printing for{' '}
              <Link href={WEDDING_PAGE_PATH} className="font-semibold text-[#2f3d2d] underline decoration-[#b8975a] underline-offset-4">Ireland</Link>
              {other.map((item) => (
                <React.Fragment key={item.id}>
                  {' and '}
                  <Link href={item.path} className="font-semibold text-[#2f3d2d] underline decoration-[#b8975a] underline-offset-4">{item.name}</Link>
                </React.Fragment>
              ))}
              .
            </p>
          </div>
        </section>

        <DeliveryCosts region={region} />

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="text-center">
              <Eyebrow>Good to know</Eyebrow>
              <h2 className={`${display.className} mt-3 text-4xl font-medium sm:text-5xl`}>Wedding printing {region.short} questions</h2>
            </div>
            <div className="mt-10 divide-y divide-[#e6dfd0] border-y border-[#e6dfd0]">
              {region.faqs.map((faq) => (
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

        <section className="bg-[#1f261e] text-[#faf7f2]">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
            <Ornament />
            <h2 className={`${display.className} mt-6 text-4xl font-medium sm:text-5xl`}>Tell us the date</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#efe9dc]">
              Send us a message and we reply within 1 hour in working hours.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <button type="button" onClick={() => openEnquiry(`Wedding printing ${region.short}`)} className={`${btnPrimary} !bg-[#d9c398] !text-[#2b2a26] hover:!brightness-95`}>
                Message us now
              </button>
              <a href={`tel:${SITE_PHONE_TEL}`} className={`${btnLine} border-[#e3cc9c] text-[#faf7f2] hover:bg-white/10`}>Call {SITE_PHONE_DISPLAY}</a>
              <a href={SITE_WHATSAPP_URL} className={`${btnLine} border-white/40 text-[#faf7f2] hover:bg-white/10`}>WhatsApp</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
