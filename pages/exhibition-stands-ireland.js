import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { buildProductListItem } from '../lib/schema';
import {
  EXHIBITION_HERO,
  EXHIBITION_PATH,
  EXHIBITION_SERVICE,
  exhibitionCompanions,
  exhibitionFaqs,
  exhibitionHall,
  exhibitionMachineRecord,
  exhibitionStands,
} from '../data/exhibition-stands';

const PAGE_URL = `${SITE_URL}${EXHIBITION_PATH}`;
const HALL = exhibitionHall();
const STANDS = exhibitionStands();
const FAQS = exhibitionFaqs();
const SERVICE = Object.values(EXHIBITION_SERVICE);
const MACHINE = exhibitionMachineRecord(SITE_URL);

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Banners Ireland', item: `${SITE_URL}/banners-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Exhibition stands', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Exhibition stands in Ireland',
  itemListElement: STANDS.map((stand, index) => (
    stand.price
      ? buildProductListItem({
        position: index + 1,
        name: stand.name,
        url: `${SITE_URL}${stand.href}`,
        price: stand.price,
        image: stand.image ? `${SITE_URL}${stand.image}` : undefined,
      })
      : {
        '@type': 'ListItem',
        position: index + 1,
        name: stand.name,
        url: `${SITE_URL}${stand.href}`,
      }
  )),
};

const datasetLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Exhibition stands, service and prices',
  description: `${EXHIBITION_SERVICE.speed.text} ${EXHIBITION_SERVICE.artwork.text} ${EXHIBITION_SERVICE.delivery.text}`,
  url: MACHINE.specificationJsonUrl,
  creator: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
  distribution: [
    { '@type': 'DataDownload', encodingFormat: 'text/plain', contentUrl: MACHINE.specificationUrl },
    { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: MACHINE.specificationJsonUrl },
  ],
};

const speakableLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Exhibition stands in Ireland',
  url: PAGE_URL,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: SERVICE.map((item) => `#${item.id}`),
  },
};

function Stand({ stand }) {
  return (
    <Link
      href={stand.href}
      className="group block text-gray-900 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
    >
      <div className="relative aspect-square bg-white">
        {stand.image ? (
          <Image
            src={stand.image}
            alt={stand.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2"
            unoptimized={process.env.NODE_ENV === 'production'}
          />
        ) : (
          <div className="flex h-full items-end pb-6">
            <p>
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Blank wall</span>
              <strong className="mt-1 block text-xl text-gray-900">Your artwork goes here</strong>
            </p>
          </div>
        )}
      </div>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Stand {stand.stand}</p>
      <h3 className="mt-1 text-xl font-bold text-gray-900 group-hover:text-blue-700">{stand.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{stand.summary}</p>
      <p className="mt-3 text-base font-semibold text-blue-700">{stand.priceLabel}</p>
      <p className="text-xs text-gray-500">{stand.priceNote}</p>
      <p className="mt-2 text-xs text-gray-400">{stand.caption || 'Your own artwork goes on the fabric.'}</p>
    </Link>
  );
}

export default function ExhibitionStandsIreland() {
  const title = 'Exhibition Stands Ireland | Trade Show Displays | PrintNPack';
  const description = 'Exhibition stands in Ireland, printed in Ashbourne. Pop-up walls, zipper walls, rigid panels and fabric stands. Fast production, full artwork help, and delivery planned for your show date.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="exhibition stands Ireland, trade show displays Ireland, exhibition printing Ireland, pop-up display stand Ireland, zipper wall Ireland, exhibition wall Ireland, fabric banner stand, trade show stand Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" type="text/plain" href={MACHINE.specificationUrl} title="Exhibition stands specification" />
        <link rel="alternate" type="application/json" href={MACHINE.specificationJsonUrl} title="Exhibition stands specification" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${EXHIBITION_HERO.src}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/banners-ireland" className="hover:text-gray-700">Banners</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-800 font-medium">Exhibition stands</li>
          </ol>
        </div>
      </nav>

      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Ashbourne · Ireland</p>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Exhibition stands in Ireland</h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Walk the hall. Each stand is a real PrintNPack product: a pop-up wall, a zipper wall, a rigid exhibition panel, a fabric stand, a lit frame or a table cover. Open a stand for its sizes and price.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Printed at Unit 14 Ashbourne Business Centre, Co. Meath, and delivered to every county in Ireland.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/quote" className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">Build a quote</Link>
                <a href="tel:+353894157369" className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:border-blue-600 hover:text-blue-700">Call +353 89 415 7369</a>
              </div>
            </div>
            <figure>
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={EXHIBITION_HERO.src}
                  alt={EXHIBITION_HERO.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-contain"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
              <figcaption className="mt-2 text-sm text-gray-500">Example print. Your own artwork goes on the fabric.</figcaption>
            </figure>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto flex flex-wrap gap-x-6 gap-y-2 px-4 pb-8 sm:px-6 lg:px-8" aria-label="Aisles">
          {HALL.map((aisle) => (
            <a key={aisle.id} href={`#${aisle.id}`} className="text-sm font-semibold text-blue-700 hover:text-blue-800">
              {aisle.name}
            </a>
          ))}
        </nav>
      </header>

      <section className="border-b border-gray-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">How an exhibition order is handled</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {SERVICE.map((item) => (
              <article key={item.id}>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p id={item.id} className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {HALL.map((aisle) => (
        <section key={aisle.id} id={aisle.id} className="scroll-mt-28 border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{aisle.name}</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">{aisle.intro}</p>
            {aisle.id === 'aisle-zipper' ? (
              <p className="mt-3">
                <Link href="/zipper-walls-ireland" className="text-sm font-semibold text-blue-700 hover:text-blue-800">All zipper walls</Link>
              </p>
            ) : null}
            <div className={aisle.stands.length > 4
              ? 'mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
              : 'mt-12 grid gap-x-12 gap-y-16 sm:grid-cols-2'}>
              {aisle.stands.map((stand) => (
                <Stand key={stand.stand} stand={stand} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Exhibition stand questions</h2>
          <dl className="space-y-5">
            {FAQS.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-gray-600">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-gray-500">
            A plain-text copy of this hall, including the service and each from-price, is at{' '}
            <a href={MACHINE.specificationUrl} className="font-medium text-blue-700 underline">the exhibition stands record</a>.
          </p>
        </div>
      </section>

      <section className="bg-white pb-4">
        <div className="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Tell us the show date</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">Send the stand, the size and the artwork you have. We reply with a price, a proof, and whether the date can be met.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">Build a quote</Link>
            <a href="https://wa.me/353894157369" className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:border-blue-600 hover:text-blue-700">WhatsApp your logo</a>
          </div>
        </div>
      </section>

      <RelatedSeoLinks title="Often ordered with a stand" links={exhibitionCompanions()} />
    </Layout>
  );
}
