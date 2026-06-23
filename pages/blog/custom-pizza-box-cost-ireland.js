import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/custom-pizza-box-cost-ireland`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Do Custom Printed Pizza Boxes Cost in Ireland?',
  description:
    'A practical guide to custom printed pizza box pricing in Ireland — what affects cost per unit, typical MOQs, plain vs branded options, and how to get an accurate quote.',
  image: `${siteUrl}/images/pizza-boxes/PIZZA_BOX_5.jpg`,
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
      name: 'How much do custom printed pizza boxes cost in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom printed pizza box pricing depends on size, quantity, print type and artwork. Full-colour CMYK on standard 12 inch boxes often starts from around €0.17 per unit at 500 units, with lower per-unit costs at higher volumes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for custom pizza boxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom printed pizza boxes usually start from 500 units. For smaller quantities, plain kraft pizza boxes are available by the case online.',
      },
    },
  ],
};

export default function CustomPizzaBoxCostIreland() {
  const title = 'How Much Do Custom Printed Pizza Boxes Cost in Ireland?';
  const description =
    'Custom pizza box cost in Ireland explained — per-unit pricing, MOQ from 500 units, what affects print price, and when plain 100-pack boxes are the better option.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="custom pizza box cost, pizza box printing price, printed pizza boxes price, custom printed pizza boxes Ireland, pizza boxes with logo cost" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}/images/pizza-boxes/PIZZA_BOX_5.jpg`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Custom Pizza Box Cost</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Pricing Guide</span>
          <span className="text-slate-400 text-sm">23 Jun 2026 · 5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">{title}</h1>

        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100">
          <Image src="/images/pizza-boxes/PIZZA_BOX_5.jpg" alt="Custom printed pizza boxes Ireland – pricing guide" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <div className="rounded-xl bg-orange-50 border border-orange-100 p-6 mb-8 not-prose">
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Ready to order? Get exact pricing on{' '}
            <Link href="/custom-pizza-boxes-ireland" className="text-orange-700 hover:underline font-semibold">
              custom printed pizza boxes with logo
            </Link>
            , or see{' '}
            <Link href="/plain-pizza-boxes-ireland" className="text-orange-700 hover:underline font-semibold">
              plain pizza boxes in 100-pack cases
            </Link>{' '}
            for smaller stock orders.
          </p>
          <Link href="/quote?product=Custom+Pizza+Boxes" className="inline-flex items-center bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-700 transition-colors text-sm">
            Request a Pizza Box Quote
          </Link>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If you are researching <strong>custom pizza box cost</strong> before committing to branded packaging, the honest answer is: it depends on size, quantity, print coverage and artwork — but most Irish takeaways can plan around a clear starting point.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Typical custom printed pizza box pricing</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Full-colour CMYK printing on standard 12&quot; corrugated pizza boxes often starts from around <strong>€0.17 per unit at 500 units</strong>. Larger print runs (1,000, 2,500, 5,000+) usually reduce the per-box cost. Single-colour print can be more economical if you only need a simple logo.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For line-by-line FAQ answers and volume tiers, see the{' '}
            <Link href="/pizza-box-faq-ireland" className="text-blue-600 hover:underline font-medium">pizza box FAQ</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What affects the price?</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li><strong>Box size</strong> — 12&quot; and 14&quot; are common; larger boxes use more board</li>
            <li><strong>Quantity</strong> — custom print MOQ is usually 500 units; higher volume lowers unit cost</li>
            <li><strong>Print type</strong> — full-colour vs single-colour logo</li>
            <li><strong>Artwork</strong> — complex designs may need more prep; PrintNPack includes design support on many orders</li>
            <li><strong>Delivery</strong> — nationwide delivery is standard; urgency can affect planning</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Custom print vs plain pizza boxes</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Custom <strong>pizza boxes with logo</strong> suit operators who want branded delivery packaging from 500 units. If you only need <strong>100 pizza boxes</strong> or a single case of kraft stock,{' '}
            <Link href="/plain-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">plain pizza boxes</Link>{' '}
            are usually the better fit — order by the case online with tiered pricing. Busy sites reordering weekly should also look at{' '}
            <Link href="/pizza-boxes-wholesale-ireland" className="text-blue-600 hover:underline font-medium">wholesale pizza boxes</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to get an accurate quote</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            Send your logo, preferred sizes (10&quot;, 12&quot;, 14&quot; are popular), estimated quantity and delivery county. Production is typically <strong>5–7 business days</strong> after artwork approval. Use our{' '}
            <Link href="/custom-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">custom printed pizza boxes</Link>{' '}
            page or{' '}
            <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline font-medium">size guide</Link>{' '}
            if you are still deciding dimensions.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">← Back to all articles</Link>
        </div>
      </main>
    </Layout>
  );
}
