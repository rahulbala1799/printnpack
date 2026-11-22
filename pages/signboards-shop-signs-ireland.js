import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import GenericQuoteModule from '../components/quote/modules/GenericQuoteModule';
import { getQuoteCatalogItem } from '../data/quote-modules';
import {
  SHOP_SIGN_ALIASES,
  SHOP_SIGN_FAQS,
  SHOP_SIGN_ID,
  SHOP_SIGN_IMAGE,
  SHOP_SIGN_PATH,
  SHOP_SIGN_TYPES,
} from '../data/shop-signs';
import { useQuoteCart } from '../lib/quote-cart-context';
import { SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}${SHOP_SIGN_PATH}`;

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SHOP_SIGN_FAQS.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Signboards and shop signs', item: PAGE_URL },
  ],
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Signboards and shop signs',
  serviceType: 'Shop sign printing',
  description:
    'Fascia boards, projecting signs, lightboxes, 3D letters, dibond panels and A-boards for shop fronts in Ireland. Sized to the shop. Quoted after you send the measurements.',
  url: PAGE_URL,
  areaServed: 'Ireland',
  provider: { '@type': 'Organization', name: 'PrintNPack Ireland', url: SITE_URL },
  alternateName: SHOP_SIGN_ALIASES,
};

export default function SignboardsShopSignsIreland() {
  const { addItem } = useQuoteCart();
  const catalogItem = getQuoteCatalogItem(SHOP_SIGN_ID);
  const title = 'Signboards and Shop Signs Ireland | Shopfront Signage | PrintNPack';
  const description =
    'Signboards and shop signs in Ireland. Fascia boards, projecting signs, lightboxes, 3D letters, dibond panels and A-boards. Send the size and we quote it. No price on this page.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="signboards Ireland, shop signs, shopfront signs, fascia signs, projecting signs, lightbox signs, 3D letters, dibond signs, A-boards, shop signage Ireland"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${SHOP_SIGN_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Signboards and shop signs</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Shop fronts · Ireland</p>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Signboards and shop signs
              </h1>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Rigid signs for a shop front: the <strong>fascia</strong> over the door, a <strong>projecting sign</strong>, a <strong>lightbox</strong>, <strong>3D letters</strong>, a <strong>dibond panel</strong>, or an <strong>A-board</strong> on the pavement.
              </p>
              <p className="mb-4 leading-relaxed text-gray-600">
                Send the width and height. There is no price on this page. Each shop front is a different size, so the quote comes back after we see the measurements.
              </p>
              <p className="text-sm text-gray-500">
                Flat vinyl letters for the glass are on{' '}
                <Link href="/vinyl-cut-letters-ireland" className="text-blue-600 hover:underline">vinyl cut letters</Link>.
                A printed PVC sheet is a{' '}
                <Link href="/vinyl-banners" className="text-blue-600 hover:underline">vinyl banner</Link>.
                A priced foamex sheet is on{' '}
                <Link href="/foamex-boards" className="text-blue-600 hover:underline">foamex boards</Link>.
              </p>
              <figure className="mt-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={SHOP_SIGN_IMAGE}
                    alt="Printed rigid signboard"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-gray-500">
                  A rigid printed board. Your shop name, size and fixing are set in the quote.
                </figcaption>
              </figure>
            </div>
            <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-1 text-lg font-bold text-gray-900">Send the size</h2>
              <p className="mb-4 text-sm text-gray-500">
                No prices here. Add a fascia and a projecting sign as two lines if you need both.
              </p>
              {catalogItem && (
                <GenericQuoteModule catalogItem={catalogItem} onSave={addItem} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Names people search</h2>
          <p className="mb-4 max-w-3xl text-sm text-gray-600">
            The same shop-front sign gets a different name depending on who is asking. These all come to this page.
          </p>
          <ul className="flex flex-wrap gap-2">
            {SHOP_SIGN_ALIASES.map((name) => (
              <li key={name} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">What the sign is called</h2>
          <p className="mb-8 max-w-2xl text-gray-600">
            Pick the closest one in the form. The size is what the quote is based on.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SHOP_SIGN_TYPES.filter((type) => type.id !== 'not-sure').map((type) => (
              <article key={type.id} id={type.id} className="scroll-mt-24 rounded-2xl border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">{type.label}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{type.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Shop sign questions</h2>
          <dl className="space-y-5">
            {SHOP_SIGN_FAQS.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-gray-900">{item.q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-gray-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </Layout>
  );
}
