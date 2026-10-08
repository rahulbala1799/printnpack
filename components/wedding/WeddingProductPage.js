import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google';
import Layout from '../layout/Layout';
import WeddingProductConfigurator from './WeddingProductConfigurator';
import { WEDDING_PRODUCTS } from '../../data/wedding-products';
import { WEDDING_PAGE_PATH } from '../../data/wedding-printing';
import { buildProductLd } from '../../lib/schema';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_URL, SITE_WHATSAPP_URL } from '../../lib/site';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const text = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

/** The shared layout for every wedding product page. Content comes from the product config. */
export default function WeddingProductPage({ product }) {
  const pageUrl = `${SITE_URL}${product.path}`;
  const title = `${product.metaTitle} | Print n Pack`;
  const heroImage = `${SITE_URL}${product.gallery[0].src}`;
  const introImage = product.gallery[1] || product.gallery[0];
  const others = WEDDING_PRODUCTS.filter((item) => item.id !== product.id);

  const productLd = buildProductLd({
    name: product.metaTitle.split('|')[0].trim(),
    description: product.metaDescription,
    image: heroImage,
    url: pageUrl,
    category: 'Wedding printing',
  });

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Wedding Printing Ireland', item: `${SITE_URL}${WEDDING_PAGE_PATH}` },
      { '@type': 'ListItem', position: 3, name: product.name, item: pageUrl },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:locale" content="en_IE" />
        <link rel="preload" as="image" href={product.gallery[0].web} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div className={`${text.className} bg-[#f3f1eb] text-[#3d483b]`}>
        <nav className="border-b border-[#d5ddd2]">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#5c6658]">
              <li><Link href="/" className="hover:text-[#243028]">Home</Link></li>
              <li>/</li>
              <li><Link href={WEDDING_PAGE_PATH} className="hover:text-[#243028]">Wedding printing</Link></li>
              <li>/</li>
              <li className="font-semibold text-[#243028]">{product.h1}</li>
            </ol>
          </div>
        </nav>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5a6a52]">Wedding printing</p>
          <h1 className={`${display.className} mt-3 max-w-3xl text-4xl leading-tight text-[#243028] sm:text-5xl`}>
            {product.h1}
          </h1>
          <p className={`${display.className} mt-3 max-w-xl text-2xl italic text-[#3f4f3c]`}>{product.tagline}</p>
          <div className="mt-8">
            <WeddingProductConfigurator product={product} displayClass={display.className} />
          </div>
        </section>

        <section className="bg-[#f7f6f1]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
            <div>
              <h2 className={`${display.className} text-4xl text-[#243028]`}>{product.introTitle}</h2>
              <p className="mt-4 leading-relaxed">{product.intro}</p>
              <ul className="mt-6 text-sm">
                {product.sizes.map((size) => (
                  <li key={size.id} className="flex items-baseline justify-between gap-4 border-b border-[#d5ddd2] py-2">
                    <span className={`${display.className} text-2xl text-[#243028]`}>{size.name}</span>
                    <span className="text-[#5a6a52]">
                      {size.name === size.dimensions ? size.detail.split(',')[0].replace(/^The /, '') : size.dimensions}
                    </span>
                  </li>
                ))}
                {product.fixed.map((item) => (
                  <li key={item.key} className="flex items-baseline justify-between gap-4 border-b border-[#d5ddd2] py-2">
                    <span className={`${display.className} text-2xl text-[#243028]`}>{item.label}</span>
                    <span className="text-[#5a6a52]">{item.value}</span>
                  </li>
                ))}
                <li className="flex items-baseline justify-between gap-4 border-b border-[#d5ddd2] py-2">
                  <span className={`${display.className} text-2xl text-[#243028]`}>Minimum</span>
                  <span className="text-[#5a6a52]">{product.minQty} {product.unit}</span>
                </li>
              </ul>
            </div>
            {introImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={introImage.web}
                alt={introImage.alt}
                width={introImage.width}
                height={introImage.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            )}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className={`${display.className} mb-8 text-4xl text-[#243028]`}>{product.galleryTitle}</h2>
          <div className="columns-2 gap-3 sm:gap-4 lg:columns-4">
            {product.gallery.map((image) => (
              <figure key={image.web} className="mb-3 break-inside-avoid sm:mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.web}
                  srcSet={`${image.thumb} 360w, ${image.web} 1024w`}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full bg-[#ebe8df]"
                />
                <figcaption className="mt-2 text-sm text-[#5a6a52]">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bg-[#f7f6f1]">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <h2 className={`${display.className} text-4xl text-[#243028]`}>Questions</h2>
            <div className="mt-8 divide-y divide-[#d5ddd2] border-y border-[#d5ddd2]">
              {product.faqs.map(({ q, a }) => (
                <details key={q} className="group py-4">
                  <summary className="cursor-pointer list-none font-semibold text-[#243028]">{q}</summary>
                  <p className="mt-2 text-sm leading-relaxed">{a}</p>
                </details>
              ))}
            </div>

            <h3 className={`${display.className} mt-12 text-3xl text-[#243028]`}>More for the wedding</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {others.map((item) => (
                <Link key={item.id} href={item.path} className="bg-[#3d4c3a] px-5 py-3 text-sm font-semibold text-[#f3f1eb] hover:bg-[#2c382b]">
                  {item.name}
                </Link>
              ))}
              <Link href={WEDDING_PAGE_PATH} className="border border-[#3d4c3a] px-5 py-3 text-sm font-semibold text-[#3d4c3a]">
                All wedding printing
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${SITE_PHONE_TEL}`} className="border border-[#3d4c3a] px-5 py-3 text-sm font-semibold text-[#3d4c3a]">
                {SITE_PHONE_DISPLAY}
              </a>
              <a href={SITE_WHATSAPP_URL} className="border border-[#3d4c3a] px-5 py-3 text-sm font-semibold text-[#3d4c3a]">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
