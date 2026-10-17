import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layout/Layout';
import { HreflangLinks, LanguageBar, OgLocaleAlternates } from './LanguageAlternates';
import { SITE_URL } from '../../lib/site';
import { footerLanguageGroups, getAlternates } from '../../data/eu-language-pages';
import { buildCatalogOffer } from '../../lib/schema';

const ACCENTS = {
  blue: {
    eyebrow: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700',
    card: 'hover:border-blue-300',
    title: 'group-hover:text-blue-600',
    link: 'text-blue-600',
    band: 'bg-blue-600',
    soft: 'bg-blue-50',
  },
  amber: {
    eyebrow: 'text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700',
    card: 'hover:border-amber-300',
    title: 'group-hover:text-amber-700',
    link: 'text-amber-700',
    band: 'bg-amber-700',
    soft: 'bg-amber-50',
  },
  orange: {
    eyebrow: 'text-orange-600',
    button: 'bg-orange-600 hover:bg-orange-700',
    card: 'hover:border-orange-300',
    title: 'group-hover:text-orange-700',
    link: 'text-orange-700',
    band: 'bg-orange-600',
    soft: 'bg-orange-50',
  },
  indigo: {
    eyebrow: 'text-indigo-600',
    button: 'bg-indigo-600 hover:bg-indigo-700',
    card: 'hover:border-indigo-300',
    title: 'group-hover:text-indigo-700',
    link: 'text-indigo-700',
    band: 'bg-indigo-600',
    soft: 'bg-indigo-50',
  },
};

function absolute(path) {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

function pageGraph(page) {
  const url = absolute(page.path);
  const translations = getAlternates(page.cluster)
    .filter((link) => link.locale !== 'x-default' && link.path !== page.path)
    .map((link) => ({
      '@type': 'WebPage',
      url: link.href,
      inLanguage: link.locale === 'en' ? 'en' : link.locale,
      name: link.label,
    }));

  const graph = [
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: page.title,
      headline: page.h1,
      description: page.description,
      inLanguage: page.htmlLang,
      image: `${SITE_URL}${page.hero}`,
      isPartOf: { '@type': 'WebSite', name: 'PrintNPack', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'PrintNPack',
        url: SITE_URL,
        email: page.email,
        telephone: '+353894157369',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Unit 14 Ashbourne Business Centre',
          addressLocality: 'Ashbourne',
          addressRegion: 'Co. Meath',
          postalCode: 'A84 KV57',
          addressCountry: 'IE',
        },
      },
      spatialCoverage: { '@type': 'Country', name: page.country },
      workTranslation: translations,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: page.homeLabel, item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: page.country, item: absolute(`/${page.locale}`) },
        { '@type': 'ListItem', position: 3, name: page.h1, item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      inLanguage: page.htmlLang,
      mainEntity: page.faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];

  const offers = page.products
    .map((product, index) => {
      const offer = product.price ? buildCatalogOffer(product.title, absolute(product.href.split('#')[0]), { price: product.price }) : null;
      if (!offer) return null;
      return { '@type': 'ListItem', position: index + 1, item: offer.itemOffered };
    })
    .filter(Boolean);

  if (offers.length) {
    graph.push({
      '@type': 'ItemList',
      name: page.h1,
      itemListElement: offers,
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

function indexGraph(index) {
  const url = absolute(index.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: index.title,
        headline: index.h1,
        description: index.description,
        inLanguage: index.htmlLang,
        isPartOf: { '@type': 'WebSite', name: 'PrintNPack', url: SITE_URL },
        spatialCoverage: { '@type': 'Country', name: index.country },
      },
      {
        '@type': 'ItemList',
        name: index.h1,
        itemListElement: index.pages.map((item, position) => ({
          '@type': 'ListItem',
          position: position + 1,
          name: item.h1,
          url: absolute(item.href),
        })),
      },
    ],
  };
}

export function EuLanguageIndex({ index }) {
  return (
    <Layout>
      <Head>
        <title>{index.title}</title>
        <meta name="description" content={index.description} />
        <meta name="keywords" content={index.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={absolute(index.path)} />
        <HreflangLinks cluster="index" />
        <meta property="og:locale" content={index.ogLocale} />
        <OgLocaleAlternates cluster="index" currentOg={index.ogLocale} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={index.title} />
        <meta property="og:description" content={index.description} />
        <meta property="og:url" content={absolute(index.path)} />
        <meta property="og:site_name" content="PrintNPack" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(indexGraph(index)) }} />
      </Head>

      <LanguageBar cluster="index" locale={index.locale} />

      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{index.printedIn}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{index.h1}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{index.lead}</p>
        </div>
      </article>

      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {index.pages.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{item.h1}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{item.lead}</p>
            </Link>
          ))}
          <p className="text-sm text-gray-500 leading-relaxed pt-4">{index.orderNote}</p>
          <p className="text-sm text-gray-500">
            <a href={`tel:+353894157369`} className="text-blue-700 hover:underline">{index.phone}</a>
            {' · '}
            <a href={`mailto:${index.email}`} className="text-blue-700 hover:underline">{index.email}</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default function EuLanguagePage({ page }) {
  const accent = ACCENTS[page.accent] || ACCENTS.blue;
  const siblings = (footerLanguageGroups().find((group) => group.href === `/${page.locale}`)?.links || [])
    .filter((link) => link.href !== page.path);

  return (
    <Layout>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={absolute(page.path)} />
        <HreflangLinks cluster={page.cluster} />
        <meta property="og:locale" content={page.ogLocale} />
        <OgLocaleAlternates cluster={page.cluster} currentOg={page.ogLocale} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={absolute(page.path)} />
        <meta property="og:image" content={`${SITE_URL}${page.hero}`} />
        <meta property="og:image:alt" content={page.heroAlt} />
        <meta property="og:site_name" content="PrintNPack" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraph(page)) }} />
      </Head>

      <LanguageBar cluster={page.cluster} locale={page.locale} />

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">{page.homeLabel}</Link></li>
            <li>/</li>
            <li><Link href={`/${page.locale}`} className="hover:text-gray-700">{page.country}</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{page.shortLabel}</li>
          </ol>
        </div>
      </nav>

      <article>
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${accent.eyebrow}`}>{page.eyebrow}</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">{page.h1}</h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{page.lead}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={page.primaryHref} className={`inline-flex items-center font-semibold text-white px-6 py-3 rounded-xl transition-colors ${accent.button}`}>
                    {page.cta}
                  </Link>
                  <Link href={page.secondaryHref} className="inline-flex items-center font-semibold text-gray-800 px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">
                    {page.ctaSecondary}
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">{page.printedIn}</p>
              </div>
              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${accent.soft}`}>
                <Image
                  src={page.hero}
                  alt={page.heroAlt}
                  fill
                  className={page.heroWide ? 'object-cover' : 'object-contain p-6'}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'production'}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{page.rangeHeading}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.products.map((product) => (
                <Link key={product.id} href={product.href} className={`group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all ${accent.card}`}>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${accent.title}`}>{product.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{product.desc}</p>
                  {product.from ? <span className={`font-semibold text-sm ${accent.link}`}>{product.from}</span> : null}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {page.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-gray-600 leading-relaxed mb-3">{paragraph}</p>
                  ))}
                </div>
              ))}
              <p className="text-sm text-gray-500 leading-relaxed">{page.orderNote}</p>
            </div>
            <aside className="bg-slate-50 rounded-2xl border border-gray-200 p-6 h-fit">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{page.factsHeading}</h2>
              <dl className="space-y-3">
                {page.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{fact.label}</dt>
                    <dd className="text-sm text-gray-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="py-12 bg-slate-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{page.relatedHeading}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {siblings.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300">
                  <span className="font-semibold text-gray-900">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{page.faqHeading}</h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.q} className="group bg-slate-50 rounded-xl border border-gray-200 p-5 open:shadow-sm">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                    {faq.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={`py-12 lg:py-16 ${accent.band}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{page.h1}</h2>
            <p className="text-white/90 mb-6">{page.proof}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={page.primaryHref} className="inline-flex items-center bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl">
                {page.cta}
              </Link>
              <a href="tel:+353894157369" className="inline-flex items-center text-white font-semibold px-6 py-3 rounded-xl border border-white/40">
                {page.phone}
              </a>
              <a href={page.whatsapp} className="inline-flex items-center text-white font-semibold px-6 py-3 rounded-xl border border-white/40">
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
