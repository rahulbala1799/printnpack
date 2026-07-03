import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/printed-paper-bag-cost-ireland`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Do Printed Paper Bags Cost in Ireland?',
  description:
    'A practical guide to printed paper bag pricing in Ireland — flat handle vs twisted handle, MOQs, what affects per-unit cost, and when plain stock bags are the better option.',
  image: `${siteUrl}/images/products/flat-handle-bags/1.png`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do printed paper bags cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Printed flat handle paper bags often start from around €0.18 per unit at 500 units. Twisted handle carrier bags typically start from around €0.35 per unit. Final pricing depends on size, ink coverage, bag style and quantity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for printed paper bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom printed flat handle and twisted handle paper bags usually start from 500 units. For smaller stock orders, plain kraft SOS bags are available by the case online.',
      },
    },
  ],
};

export default function PrintedPaperBagCostIreland() {
  const title = 'How Much Do Printed Paper Bags Cost in Ireland?';
  const description =
    'Printed paper bag cost in Ireland explained — flat handle from €0.18/unit, twisted handle from €0.35/unit, MOQ 500, what affects pricing, and when plain case bags are cheaper.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="printed paper bag cost, paper bags with logo price, custom paper bags ireland cost, paper bag printing price, wholesale paper bags price ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}/images/products/flat-handle-bags/1.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Printed Paper Bag Cost</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">Pricing Guide</span>
          <span className="text-slate-400 text-sm">23 Jun 2026 · 5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">{title}</h1>

        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image src="/images/products/flat-handle-bags/1.png" alt="Printed paper bags Ireland – pricing guide" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-6 mb-8 not-prose">
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Ready to order? Get exact pricing on{' '}
            <Link href="/printed-flat-handle-bags-ireland" className="text-emerald-700 hover:underline font-semibold">
              printed flat handle bags
            </Link>
            ,{' '}
            <Link href="/twisted-handle-paper-bags-ireland" className="text-emerald-700 hover:underline font-semibold">
              twisted handle carrier bags
            </Link>
            , or browse{' '}
            <Link href="/plain-paper-bags-ireland" className="text-emerald-700 hover:underline font-semibold">
              plain paper bags by the case
            </Link>
            .
          </p>
          <Link href="/quote" className="inline-flex items-center bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
            Request a Paper Bag Quote
          </Link>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If you are researching <strong>printed paper bag cost</strong> before committing to branded carrier bags, the honest answer is: it depends on bag style, size, print coverage and quantity — but most Irish businesses can plan around clear starting points.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Typical printed paper bag pricing</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>Flat handle paper bags</strong> — economical for cafés, delis and takeaway — often start from around <strong>€0.18 per unit at 500 units</strong>. <strong>Twisted handle carrier bags</strong> — premium retail and gift packaging — typically start from around <strong>€0.35 per unit at 500 units</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Larger runs (1,000, 3,000, 10,000+) usually reduce the per-bag cost. For style comparisons, see our{' '}
            <Link href="/blog/paper-bags-with-logo-ireland" className="text-blue-600 hover:underline font-medium">paper bags with logo guide</Link>{' '}
            or the{' '}
            <Link href="/paper-bags-ireland" className="text-blue-600 hover:underline font-medium">paper bags Ireland hub</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What affects the price?</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li><strong>Bag style</strong> — flat handle vs twisted handle vs SOS plain stock</li>
            <li><strong>Size</strong> — Small, Medium and Large use different amounts of paper</li>
            <li><strong>Quantity</strong> — custom print MOQ is usually 500 units; higher volume lowers unit cost</li>
            <li><strong>Ink coverage</strong> — full-wrap designs use more ink than a centred logo</li>
            <li><strong>Paper colour</strong> — kraft, white or black base can affect material cost</li>
            <li><strong>Delivery</strong> — nationwide delivery is standard from Ashbourne, Co. Meath</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Custom print vs plain paper bags</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Custom <strong>paper bags with logo</strong> suit operators who want branded takeaway or retail packaging from 500 units. If you only need plain kraft SOS bags for everyday use,{' '}
            <Link href="/plain-paper-bags-ireland" className="text-blue-600 hover:underline font-medium">plain paper bags</Link>{' '}
            are usually the better fit — order by the case online. Busy sites reordering regularly should also look at{' '}
            <Link href="/wholesale-paper-bags-ireland" className="text-blue-600 hover:underline font-medium">wholesale paper bags</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to get an accurate quote</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Send your logo, preferred bag style (flat handle or twisted handle), sizes, estimated quantity and delivery county. Production is typically <strong>10–14 business days</strong> after artwork approval. Use our{' '}
            <Link href="/printed-flat-handle-bags-ireland" className="text-blue-600 hover:underline font-medium">printed flat handle bags</Link>{' '}
            or{' '}
            <Link href="/twisted-handle-paper-bags-ireland" className="text-blue-600 hover:underline font-medium">twisted handle bags</Link>{' '}
            pages if you are still deciding on style.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">← Back to all articles</Link>
        </div>
      </main>
    </Layout>
  );
}
