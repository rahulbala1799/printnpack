import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { COFFEE_CUP_FAQ_CATEGORIES, COFFEE_CUP_FAQS } from '../data/coffee-cup-faq';

const PAGE_URL = `${SITE_URL}/coffee-cup-faq-ireland`;
const HERO_IMAGE = '/images/plain-packaging/100070.webp';

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: COFFEE_CUP_FAQS.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Coffee Cups Ireland', item: `${SITE_URL}/hot-cups-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Coffee Cup FAQ', item: PAGE_URL },
  ],
};

function normalizeSearch(value) {
  return value.trim().toLowerCase();
}

export default function CoffeeCupFaqIreland() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const title = 'Coffee Cup FAQ Ireland | Plain & Custom Printed Coffee Cups';
  const description =
    'Instant answers to coffee cup questions in Ireland — plain wholesale case pricing, custom printed cups with your logo, sizes, compostable options, and nationwide delivery.';

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);
    return COFFEE_CUP_FAQS.filter((faq) => {
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
    return COFFEE_CUP_FAQ_CATEGORIES.map((category) => ({
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
          content="coffee cup faq ireland, coffee cups ireland, disposable coffee cups cost, custom printed coffee cups faq, plain coffee cups wholesale, compostable coffee cups ireland"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/hot-cups-ireland" className="hover:text-gray-700">Coffee Cups Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">FAQ</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">Detailed FAQ</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">Coffee Cup FAQ — Ireland</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
            Everything Irish cafés and coffee shops ask about coffee cups — plain wholesale case pricing, custom
            printed cups with your logo, sizes, compostable options, and delivery across Ireland and Northern
            Ireland.{' '}
            <Link href="/quote?product=Coffee+Cups" className="text-amber-700 hover:underline font-medium">Get a free quote</Link>{' '}
            or call <a href="tel:+353894157369" className="text-amber-700 hover:underline font-medium">+353 89 415 7369</a>.
          </p>

          <div className="relative mb-6">
            <label htmlFor="coffee-cup-faq-search" className="sr-only">Search coffee cup questions</label>
            <input
              id="coffee-cup-faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions… e.g. case price, logo printing, compostable, sizes"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-12 text-gray-900 placeholder:text-gray-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-100"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setActiveCategory('all')} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-amber-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>All questions</button>
            {COFFEE_CUP_FAQ_CATEGORIES.map((category) => (
              <button key={category.id} type="button" onClick={() => setActiveCategory(category.id)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-amber-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{category.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <p className="text-gray-900 font-semibold mb-2">No matching questions found</p>
              <Link href="/quote?product=Coffee+Cups" className="inline-flex items-center bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-800 transition-colors mt-4">Ask us directly</Link>
            </div>
          ) : (
            <div className="space-y-10">
              {groupedFaqs.map((group) => (
                <div key={group.id}>
                  {!query.trim() && activeCategory === 'all' && (
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-gray-900">{group.label}</h2>
                      {group.description && <p className="text-sm text-gray-500 mt-1">{group.description}</p>}
                    </div>
                  )}
                  <div className="space-y-3">
                    {group.faqs.map((faq, index) => (
                      <details key={faq.id} id={faq.id} className="group rounded-xl border border-gray-200 bg-white open:shadow-sm" defaultOpen={!query.trim() && activeCategory === 'all' && index === 0 && group.id === 'pricing'}>
                        <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 leading-snug">{faq.q}</h3>
                            {faq.subtitle && <p className="text-sm text-gray-500 mt-1">{faq.subtitle}</p>}
                          </div>
                          <span className="text-gray-400 group-open:rotate-180 transition-transform mt-1 shrink-0">▼</span>
                        </summary>
                        <div className="px-5 pb-5 border-t border-gray-100">
                          <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                          {faq.link && (
                            <Link href={faq.link.href} className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 mt-4">
                              {faq.link.label}<span aria-hidden="true">→</span>
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
          <p className="text-gray-600 mb-6">Tell us whether you need plain wholesale or custom printed coffee cups — we help with sizing and pricing.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/hot-cups-ireland" className="inline-flex items-center bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-800 transition-colors">Plain Coffee Cups</Link>
            <Link href="/custom-printed-coffee-cups-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Custom Printed Cups</Link>
            <Link href="/blog/coffee-cups-ireland-guide" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Coffee Cups Guide</Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related coffee cup pages"
        links={[
          { href: '/hot-cups-ireland', label: 'Coffee Cups Ireland', desc: 'Complete disposable coffee cup hub' },
          { href: '/plain-hot-cups-ireland', label: 'Plain Hot Cups', desc: 'White double wall cups by the case' },
          { href: '/custom-printed-coffee-cups-ireland', label: 'Custom Printed Coffee Cups', desc: 'Branded takeaway cups, low MOQ' },
          { href: '/blog/coffee-cups-ireland-guide', label: 'Coffee Cups Buying Guide', desc: 'Plain vs printed, sizes, pricing' },
          { href: '/plain-packaging', label: 'Plain Packaging', desc: 'Wholesale catering supplies' },
        ]}
      />
    </Layout>
  );
}
