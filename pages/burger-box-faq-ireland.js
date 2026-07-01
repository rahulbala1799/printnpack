import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { SITE_URL } from '../lib/site';
import { BURGER_BOX_FAQ_CATEGORIES, BURGER_BOX_FAQS } from '../data/burger-box-faq';

const PAGE_URL = `${SITE_URL}/burger-box-faq-ireland`;
const HERO_IMAGE = '/images/products/bagasse-burger-box/1.png';

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: BURGER_BOX_FAQS.map(({ q, a }) => ({
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
    { '@type': 'ListItem', position: 2, name: 'Burger Boxes Ireland', item: `${SITE_URL}/burger-boxes-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Burger Box FAQ', item: PAGE_URL },
  ],
};

function normalizeSearch(value) {
  return value.trim().toLowerCase();
}

export default function BurgerBoxFaqIreland() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const title = 'Burger Box FAQ Ireland | Plain, Printed & Bagasse Packaging';
  const description =
    'Instant answers to burger box questions — plain wholesale pricing, custom printed bagasse boxes, compostable materials, and delivery across Ireland.';

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);
    return BURGER_BOX_FAQS.filter((faq) => {
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
    return BURGER_BOX_FAQ_CATEGORIES.map((category) => ({
      ...category,
      faqs: filteredFaqs.filter((faq) => faq.category === category.id),
    })).filter((group) => group.faqs.length > 0);
  }, [activeCategory, filteredFaqs, query]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="burger box faq, burger boxes ireland, bagasse burger box, plain burger boxes, printed burger boxes, biodegradable burger boxes, burger boxes wholesale" />
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
            <li><Link href="/burger-boxes-ireland" className="hover:text-gray-700">Burger Boxes Ireland</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">FAQ</li>
          </ol>
        </div>
      </nav>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Detailed FAQ</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">Burger Box FAQ — Ireland</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
            Everything Irish food businesses ask about burger boxes — plain wholesale, printed bagasse,
            compostable materials, and delivery in Ashbourne and Dublin.{' '}
            <Link href="/plain-burger-boxes-ireland" className="text-emerald-600 hover:underline font-medium">Plain burger boxes</Link>{' '}
            or call <a href="tel:+353894157369" className="text-emerald-600 hover:underline font-medium">+353 89 415 7369</a>.
          </p>

          <div className="relative mb-6">
            <label htmlFor="burger-box-faq-search" className="sr-only">Search burger box questions</label>
            <input
              id="burger-box-faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions… e.g. bagasse, plain wholesale, printed logo, compostable"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-12 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => setActiveCategory('all')} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>All questions</button>
            {BURGER_BOX_FAQ_CATEGORIES.map((category) => (
              <button key={category.id} type="button" onClick={() => setActiveCategory(category.id)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{category.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <p className="text-gray-900 font-semibold mb-2">No matching questions found</p>
              <Link href="/plain-burger-boxes-ireland" className="inline-flex items-center bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors mt-4">Ask us directly</Link>
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
                            <Link href={faq.link.href} className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-4">
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
          <p className="text-gray-600 mb-6">Tell us whether you need plain wholesale or printed burger boxes — we help with sizing and pricing.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/plain-burger-boxes-ireland" className="inline-flex items-center bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors">Plain Burger Boxes</Link>
            <Link href="/custom-burger-boxes-ireland" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Custom Printed Boxes</Link>
            <Link href="/blog/burger-boxes-ireland-guide" className="inline-flex items-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors">Burger Boxes Guide</Link>
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related burger box pages"
        links={[
          { href: '/burger-boxes-ireland', label: 'Burger Boxes Ireland', desc: 'Complete burger box hub' },
          { href: '/plain-burger-boxes-ireland', label: 'Plain Burger Boxes', desc: 'Wholesale bagasse & corrugated' },
          { href: '/custom-burger-boxes-ireland', label: 'Custom Printed Boxes', desc: 'Branded bagasse from 500 units' },
          { href: '/eco-bagasse-burger-boxes', label: 'Bagasse Burger Boxes', desc: 'Compostable eco packaging' },
        ]}
      />
    </Layout>
  );
}
