import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { PIZZA_BOX_FAQ_CATEGORIES, PIZZA_BOX_FAQS } from '../data/pizza-box-faq';

const PAGE_URL = `${SITE_URL}/pizza-box-faq-ireland`;

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PIZZA_BOX_FAQS.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Pizza Boxes Ireland', item: `${SITE_URL}/pizza-boxes-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Pizza Box FAQ', item: PAGE_URL },
  ],
};

const webPageLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pizza Box FAQ Ireland — Custom Printing, Sizes, Pricing & Delivery',
  description:
    'Answers to the most common pizza box questions for Irish restaurants and takeaways — pricing, minimum orders, custom printing, sizes, delivery, and eco-friendly options.',
  url: PAGE_URL,
  inLanguage: 'en-IE',
  isPartOf: { '@type': 'WebSite', name: 'PrintNPack Ireland', url: SITE_URL },
  dateModified: '2026-06-20',
};

function normalizeSearch(value) {
  return value.trim().toLowerCase();
}

export default function PizzaBoxFaqIreland() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const title = 'Pizza Box FAQ Ireland | Custom Printing, Sizes, Pricing & Delivery';
  const description =
    'Instant answers to pizza box questions for Irish restaurants — custom printing costs, minimum orders, sizes, artwork, delivery, recyclability, and more. PrintNPack Ireland.';

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);

    return PIZZA_BOX_FAQS.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = [faq.q, faq.subtitle, faq.a, faq.category].join(' ').toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query, activeCategory]);

  const groupedFaqs = useMemo(() => {
    if (activeCategory !== 'all' || query.trim()) {
      return [{ id: 'results', label: query.trim() ? 'Search results' : 'Questions', faqs: filteredFaqs }];
    }

    return PIZZA_BOX_FAQ_CATEGORIES.map((category) => ({
      ...category,
      faqs: filteredFaqs.filter((faq) => faq.category === category.id),
    })).filter((group) => group.faqs.length > 0);
  }, [activeCategory, filteredFaqs, query]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="pizza box faq, pizza box printing ireland, custom pizza boxes cost, pizza box minimum order, pizza box sizes ireland, pizza box delivery ireland, branded pizza boxes faq"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${SITE_URL}/images/pizza-boxes/PIZZA_BOX_1.jpg`} />
        <meta property="og:image:alt" content="Pizza box FAQ Ireland — custom printing questions answered" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/pizza-boxes/PIZZA_BOX_1.jpg`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/pizza-boxes-ireland" className="hover:text-gray-700">Pizza Boxes Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">FAQ</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
            Instant answers
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Pizza Box FAQ — Ireland
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
            Everything Irish restaurants and takeaways ask about custom pizza box printing — pricing,
            minimum orders, sizes, artwork, delivery, and sustainability. Can&apos;t find your answer?{' '}
            <Link href="/quote" className="text-blue-600 hover:underline font-medium">Get a free quote</Link>{' '}
            or call{' '}
            <a href="tel:+353894400155" className="text-blue-600 hover:underline font-medium">+353 89 440 0155</a>.
          </p>

          <div className="relative mb-6">
            <label htmlFor="faq-search" className="sr-only">Search pizza box questions</label>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions… e.g. minimum order, sizes, recyclable"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-12 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All questions
            </button>
            {PIZZA_BOX_FAQ_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <p className="text-gray-900 font-semibold mb-2">No matching questions found</p>
              <p className="text-gray-600 text-sm mb-6">
                Try a different search term or browse all categories above.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Ask us directly
              </Link>
            </div>
          ) : (
            <div className="space-y-10">
              {groupedFaqs.map((group) => (
                <div key={group.id}>
                  {!query.trim() && activeCategory === 'all' && (
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-gray-900">{group.label}</h2>
                      {group.description && (
                        <p className="text-sm text-gray-500 mt-1">{group.description}</p>
                      )}
                    </div>
                  )}

                  <div className="space-y-3">
                    {group.faqs.map((faq, index) => (
                      <details
                        key={faq.id}
                        id={faq.id}
                        className="group rounded-xl border border-gray-200 bg-white open:shadow-sm"
                        defaultOpen={!query.trim() && activeCategory === 'all' && index === 0 && group.id === 'pricing-ordering'}
                      >
                        <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 leading-snug">{faq.q}</h3>
                            {faq.subtitle && (
                              <p className="text-sm text-gray-500 mt-1">{faq.subtitle}</p>
                            )}
                          </div>
                          <span className="text-gray-400 group-open:rotate-180 transition-transform mt-1 shrink-0">▼</span>
                        </summary>
                        <div className="px-5 pb-5 border-t border-gray-100">
                          <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                          {faq.link && (
                            <Link
                              href={faq.link.href}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-4"
                            >
                              {faq.link.label}
                              <span aria-hidden="true">→</span>
                            </Link>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our team helps Irish restaurants choose the right pizza box size, print type, and quantity.
            Get a free quote with no obligation — includes free design support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/custom-pizza-boxes-ireland"
              className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Custom Pizza Boxes
            </Link>
            <Link
              href="/plain-packaging?category=Pizza+Boxes"
              className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
            >
              Plain Wholesale Boxes
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related pizza box pages"
        links={[
          { href: '/pizza-boxes-ireland', label: 'Pizza Boxes Ireland', desc: 'Custom & wholesale hub' },
          { href: '/custom-pizza-boxes-ireland', label: 'Custom Printed Boxes', desc: 'Full-colour branding from 500 units' },
          { href: '/blog/pizza-box-sizes-ireland', label: 'Pizza Box Sizes Guide', desc: '7″ to 20″ sizing advice' },
          { href: '/blog/eco-friendly-pizza-box-paper-bags-burger-boxes-ireland', label: 'Eco-Friendly Packaging', desc: 'Recyclable kraft options' },
        ]}
      />
    </Layout>
  );
}
