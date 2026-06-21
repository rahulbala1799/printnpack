import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/business-stamps-ireland-guide`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Business Stamps Ireland: Company Stamps, Invoice Stamps & Logo Stamps Guide',
  description:
    'A practical guide to business stamps in Ireland — company stamps, invoice stamps, address stamps, self-inking vs traditional, and how to order custom rubber stamps for your Irish business.',
  image: `${siteUrl}/images/rubber-stamps/RubberStamp_10.jpg`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-06-21',
  dateModified: '2026-06-21',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a company stamp in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Company stamps are not legally required in Ireland, but they are widely used on invoices, letterheads, delivery notes, and official correspondence. A business stamp adds professionalism and saves time on repetitive paperwork.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a business stamp include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Irish business stamps include company name, address, phone number, and registration number (if applicable). Logo stamps add your brand mark. Invoice stamps may include "Received" or "Paid" text.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a business stamp cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom business stamps in Ireland typically start from €15–€25 for a basic self-inking stamp, with larger company stamps from €20–€40 depending on size and layout complexity.',
      },
    },
  ],
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Business Stamps Ireland Guide', item: PAGE_URL },
  ],
};

export default function BusinessStampsIrelandGuide() {
  const title = 'Business Stamps Ireland: Company Stamps, Invoice Stamps & Logo Stamps Guide';
  const description =
    'Everything Irish businesses need to know about company stamps — what to include, self-inking vs traditional, invoice stamps, logo stamps, and how to order custom rubber stamps with fast turnaround.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="business stamps ireland, company stamp ireland, stamp printing, invoice stamp, company logo stamp, custom business stamp, rubber stamps ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}/images/rubber-stamps/RubberStamp_10.jpg`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Business Stamps Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Print Guide</span>
          <span className="text-slate-400 text-sm">21 Jun 2026 · 7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">{title}</h1>

        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100 bg-slate-100">
          <Image src="/images/rubber-stamps/RubberStamp_10.jpg" alt="Business stamps Ireland — custom company and invoice rubber stamps" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A good <strong>business stamp</strong> saves time on every invoice, letterhead, and delivery note your
            company sends. Irish businesses — from sole traders in Ashbourne to corporate offices in Dublin — use
            company stamps daily for branding, record-keeping, and professional presentation.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Browse our{' '}
            <Link href="/rubber-stamps-ireland" className="text-indigo-600 hover:underline font-medium">rubber stamps Ireland</Link>{' '}
            hub,{' '}
            <Link href="/rubber-stamps" className="text-indigo-600 hover:underline font-medium">order custom stamps</Link>, or
            read the full{' '}
            <Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium">stamp FAQ</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What is a company stamp?</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A company stamp (also called a business stamp or rubber stamp) is a custom-made stamp bearing your
            business details — typically company name, address, phone, and registration number. When pressed onto
            paper, it creates a consistent branded impression without handwriting the same details repeatedly.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Company stamps are <strong>not legally required</strong> in Ireland, but they remain standard practice
            for invoices, receipts, delivery dockets, and official correspondence. Solicitors, accountants, retailers,
            tradespeople, and schools all use them daily.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Types of business stamps</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li><strong>Company detail stamp</strong> — name, address, phone, CRO number</li>
            <li><strong>Logo stamp</strong> — company logo with or without text</li>
            <li><strong>Invoice stamp</strong> — &quot;Received&quot;, &quot;Paid&quot;, or payment details</li>
            <li><strong>Address stamp</strong> — return address for envelopes and packaging</li>
            <li><strong>Signature stamp</strong> — authorised signing for directors and professionals</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Self-inking vs traditional hand stamps</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Self-inking stamps</strong> are the most popular choice for Irish offices. The ink pad is built
            into the mount — press down, lift, and the die re-inks automatically. Clean, fast, and ideal for stamping
            dozens of documents per day.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>Traditional hand stamps</strong> use a wooden handle and separate ink pad. They cost less upfront
            and suit occasional stamping, craft projects, and customers who prefer the classic feel.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How much do business stamps cost?</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li><strong>Basic self-inking business stamp</strong> (2–3 lines): from €15–€25</li>
            <li><strong>Company stamp with logo</strong>: from €20–€35</li>
            <li><strong>Large multi-line company stamp</strong>: from €25–€40</li>
            <li><strong>Signature stamp</strong>: from €18–€35</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to include on your business stamp</h2>
          <p className="text-slate-700 leading-relaxed mb-4">Common layouts for Irish business stamps:</p>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li>Company name (trading as or registered name)</li>
            <li>Full business address</li>
            <li>Phone number and/or email</li>
            <li>Company registration number (if Ltd or DAC)</li>
            <li>VAT number (if VAT registered)</li>
            <li>Company logo (optional but recommended)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to order a business stamp</h2>
          <ol className="list-decimal pl-6 text-slate-700 mb-8 space-y-2">
            <li>Decide stamp type — self-inking or traditional</li>
            <li>List the exact text (and send your logo if including one)</li>
            <li>Choose ink colour — black is standard for business documents</li>
            <li>Request a proof — we show the layout before manufacturing</li>
            <li>Collect from Ashbourne or arrange nationwide delivery</li>
          </ol>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-8 not-prose">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Order your business stamp today</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Same-day and next-day express service available. Based in Ashbourne, Co. Meath — delivering across Dublin and all of Ireland.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/rubber-stamps" className="inline-flex items-center bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
                Order Custom Stamps
              </Link>
              <Link href="/rubber-stamp-printing-ashbourne" className="inline-flex items-center bg-white text-indigo-700 font-semibold px-5 py-2.5 rounded-xl border border-indigo-200 hover:border-indigo-300 transition-colors text-sm">
                Stamp Printing Ashbourne
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Related guides</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li><Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium">Rubber stamp FAQ — 25+ instant answers</Link></li>
            <li><Link href="/rubber-stamp-printing-dublin" className="text-indigo-600 hover:underline font-medium">Stamp printing Dublin</Link></li>
            <li><Link href="/rubber-stamps-ireland" className="text-indigo-600 hover:underline font-medium">Rubber stamps Ireland hub</Link></li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">← Back to all articles</Link>
        </div>
      </main>
    </Layout>
  );
}
