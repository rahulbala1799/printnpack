import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

const siteUrl = 'https://printnpack.ie';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Leaflet Printing Ireland: Sizes, Paper Stocks & What Actually Works for Local Marketing',
  description:
    'A complete guide to leaflet printing in Ireland — A6 to A3 sizes, paper weights, folding options, and distribution tips for Irish businesses.',
  image: `${siteUrl}/images/products/a5-leaflet.png`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-02-13',
  dateModified: '2026-02-13',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/leaflet-printing-ireland-guide` },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the most popular leaflet size in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A5 (148mm × 210mm) is the most commonly printed leaflet size for Irish businesses. It is large enough to communicate your offer clearly, small enough to hand out easily, and fits standard letterboxes for door drops.',
      },
    },
    {
      '@type': 'Question',
      name: 'What paper stock should I use for leaflets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most Irish takeaways, restaurants, and local businesses, 130–150gsm gloss or silk coated paper strikes the best balance between cost, durability, and print quality. Premium or high-end brands often step up to 170gsm silk for a more substantial feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many leaflets do I need for a local campaign in Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical local door-drop campaign in an Irish town or suburb requires 2,000–5,000 leaflets to achieve meaningful coverage. For a single estate or village, 500–1,000 leaflets is usually sufficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get leaflets printed in Dublin with fast turnaround?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. PrintNPack offers fast turnaround on leaflet printing with nationwide delivery across Ireland. Orders placed with print-ready artwork are typically dispatched within 2–3 working days.',
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
    { '@type': 'ListItem', position: 3, name: 'Leaflet Printing Ireland Guide', item: `${siteUrl}/blog/leaflet-printing-ireland-guide` },
  ],
};

export default function LeafletPrintingIrelandGuide() {
  const title = 'Leaflet Printing Ireland: Sizes, Paper Stocks & What Actually Works for Local Marketing';
  const description =
    'Everything you need to know about leaflet printing in Ireland — A6 to A3 sizes explained, paper weights compared, folding options, and practical distribution tips for Irish businesses.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="leaflet printing ireland, a5 leaflet printing ireland, flyer printing ireland, flyer printing dublin, leaflet sizes ireland, leaflet printing guide, a6 leaflets ireland, a4 leaflet printing ireland, leaflet design ireland" />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${siteUrl}/blog/leaflet-printing-ireland-guide`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/leaflet-printing-ireland-guide`} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}/images/products/a5-leaflet.png`} />
        <meta property="og:image:alt" content="A5 leaflet printing Ireland" />
        <meta property="article:published_time" content="2026-02-13" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/products/a5-leaflet.png`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Leaflet Printing Ireland Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Print Guide</span>
          <span className="text-slate-400 text-sm">13 Feb 2026 · 7 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Leaflet Printing Ireland: Sizes, Paper Stocks &amp; What Actually Works for Local Marketing
        </h1>

        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72 mb-8 border border-slate-100">
          <Image
            src="/images/products/a5-leaflet.png"
            alt="A5 leaflet printing Ireland – printed flyers for local businesses"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Leaflet printing remains one of the highest-ROI marketing channels for local Irish businesses.
            A well-designed, properly targeted flyer dropped through the right letterboxes costs a fraction
            of digital advertising — and reaches people who never scroll past your Instagram post.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            But the results vary enormously based on three decisions: the size you choose, the paper
            stock you print on, and how you distribute. Get those right and a 5,000-leaflet run can
            fill a restaurant for weeks. Get them wrong and you&apos;ve wasted the spend. This guide covers
            <strong> leaflet printing in Ireland</strong> from start to finish.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Leaflet Sizes in Ireland: Which One Is Right for You?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Leaflets follow standard ISO paper sizes. Here is how each size performs in practice for
            Irish businesses:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Size</th>
                  <th className="text-left px-4 py-3 font-semibold">Dimensions</th>
                  <th className="text-left px-4 py-3 font-semibold">Best For</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['A6', '105 × 148mm', 'Quick-read promos', 'Discount vouchers, café menus, event promos'],
                  ['A5', '148 × 210mm', 'Most common', 'Takeaway menus, local services, door-drops'],
                  ['A4', '210 × 297mm', 'More content', 'Full menus, services lists, estate agents'],
                  ['A3', '297 × 420mm', 'Impact / display', 'Window displays, in-store promotions, events'],
                  ['DL', '99 × 210mm', 'Rack cards / envelopes', 'Brochures, hotel rack cards, event programmes'],
                ].map(([size, dims, best, use], i) => (
                  <tr key={size} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-bold text-slate-900">{size}</td>
                    <td className="px-4 py-3 text-slate-600 font-mono text-xs">{dims}</td>
                    <td className="px-4 py-3 text-slate-700">{best}</td>
                    <td className="px-4 py-3 text-slate-600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>A5 leaflets</strong> are the most popular format for Irish takeaways and local
            businesses. They are compact enough to carry in a bag or slip through a letterbox, but
            large enough to display a menu or offer clearly. If you are only going to print one
            leaflet size, A5 is the right call.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            <strong>A6 leaflets</strong> work extremely well as vouchers or quick-grab inserts —
            including slipping them into pizza boxes or paper bags with orders. The small format
            reads instantly and costs significantly less to print per unit.
          </p>

          {/* Leaflet image grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/a6-leaflet.png"
                alt="A6 leaflet printing Ireland – discount voucher and insert size"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image
                src="/images/products/a4-leaflet.png"
                alt="A4 leaflet printing Ireland – full-size flyer for menus and services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 384px"
              />
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Paper Stocks Explained: What to Print Your Leaflets On
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Paper weight (gsm — grams per square metre) and finish affect how a leaflet feels, how
            long it lasts, and how well the colours reproduce. Here is a practical breakdown for
            <strong> leaflet printing in Ireland</strong>:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                gsm: '90–115gsm',
                label: 'Lightweight / Economy',
                desc: 'Thin, similar to standard office paper. Cost-effective for very high-volume runs where budget is the primary concern. Not recommended for premium brand presentation — feels cheap in the hand.',
                flag: null,
              },
              {
                gsm: '130–150gsm',
                label: 'Standard — most popular',
                desc: 'The sweet spot for most Irish businesses. Feels solid, prints well with sharp colour reproduction, and survives the journey through a letterbox without crumpling. Available in gloss (vivid colours) and silk (less reflective, easier to read).',
                flag: 'recommended',
              },
              {
                gsm: '170gsm',
                label: 'Premium',
                desc: 'Noticeably heavier. Signals quality to the recipient before they have read a word. Popular with restaurants, estate agents, and any brand that wants to communicate premium positioning.',
                flag: null,
              },
              {
                gsm: '350gsm+',
                label: 'Card / flyer',
                desc: 'More business card than leaflet. Used for point-of-sale cards, menu cards placed on tables, and rack cards. Not suitable for letterbox drops.',
                flag: null,
              },
            ].map(({ gsm, label, desc, flag }) => (
              <div key={gsm} className={`rounded-xl p-5 border ${flag === 'recommended' ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-white'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm font-bold text-slate-900">{gsm}</span>
                  <span className="font-semibold text-slate-800">{label}</span>
                  {flag === 'recommended' && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">Most popular</span>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">Gloss vs. Silk finish</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Both gloss and silk are coated finishes that protect the ink and improve colour vibrancy
            compared to uncoated paper. The difference:
          </p>
          <ul className="space-y-2 mb-8 text-slate-700 text-sm">
            <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span><strong>Gloss:</strong> High sheen, colours pop, best for photography-heavy designs like food menus. Can catch light and be harder to read in certain conditions.</span></li>
            <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span><strong>Silk:</strong> Subtle sheen, colours slightly more muted but excellent legibility. Better for text-heavy layouts, estate agents, services.</span></li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Folded Leaflets: When a Flat Sheet Isn&apos;t Enough
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            For businesses with more to say — full menus, service breakdowns, multi-section content —
            a folded leaflet gives you more space without going up to A3. Common folding options:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                name: 'Bi-fold (Half-fold)',
                desc: 'Single fold, creating 4 panels. Popular for menus, service brochures, and event programmes.',
                img: '/ifa/product/leaflet/bifold/a5-half-fold.jpg',
              },
              {
                name: 'Tri-fold (Z or C fold)',
                desc: 'Two folds, creating 6 panels. Classic for takeaway menus and leaflets that need to fit in a DL envelope.',
                img: '/ifa/product/Trifold/Redpixel_3-Fold-Brochure_DL_900x600_03-800x533.jpg',
              },
              {
                name: 'DL (Rack card)',
                desc: '1/3 of A4. Fits standard leaflet racks and display stands. Popular for hospitality and tourism.',
                img: '/ifa/product/leaflet/leaflet/a3-leaflet-1.jpg',
              },
            ].map(({ name, desc, img }) => (
              <div key={name} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="relative h-36">
                  <Image src={img} alt={`${name} leaflet printing Ireland`} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900 text-sm mb-1">{name}</p>
                  <p className="text-slate-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Leaflet Distribution in Ireland: Getting the Most From Your Print Run
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The best-designed leaflet does nothing sitting in a box. Here is how Irish businesses
            get the most out of their print runs:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: 'Door-to-door letterbox drops',
                desc: 'The most targeted option for takeaways and local services. An Post offers geographic targeting through their Direct Mail service, allowing you to select specific postal routes. Aim for a radius of 3–5km for a takeaway, 10–15km for a regional service.',
              },
              {
                title: 'In-box inserts',
                desc: 'Including A6 vouchers or flyers inside pizza boxes or takeaway bags is one of the highest-conversion methods. The customer is already engaged with your brand and likely to act on a first-order discount or loyalty offer.',
              },
              {
                title: 'Counter & reception stacks',
                desc: 'A5 or DL leaflets stacked on a counter convert well in waiting rooms, hotel lobbies, pharmacies, and community centres. Partner with complementary local businesses for free display space.',
              },
              {
                title: 'Event handouts',
                desc: 'Local markets, GAA matches, community fairs. A5 is the most hand-friendly size. Include a QR code linking directly to your ordering page or Instagram.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-2 rounded-full bg-blue-600 mt-1 self-stretch" style={{ minHeight: 16 }} />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            How Many Leaflets Do I Need?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A rough guide to leaflet quantities for common Irish campaign types:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Campaign Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Suggested Quantity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single estate / village door drop', '500 – 1,000'],
                  ['Small town coverage (e.g., Naas, Carlow)', '2,000 – 5,000'],
                  ['Dublin suburb or large town', '5,000 – 10,000'],
                  ['City-wide campaign (Dublin, Cork, Galway)', '10,000 – 25,000+'],
                  ['In-box insert (weekly)', '200 – 500 per week'],
                  ['Counter leaflet stock (quarterly)', '500 – 1,000'],
                ].map(([type, qty], i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 text-slate-700">{type}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 6: design tips */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            5 Design Tips That Improve Leaflet Response Rates
          </h2>
          <ul className="space-y-3 mb-8 text-slate-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span><strong>Lead with the offer, not the logo.</strong> The headline should state the benefit: &quot;Free Garlic Bread with Every Order This Week&quot; beats &quot;Welcome to Mario&apos;s Pizza&quot; every time.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span><strong>Include a clear call to action and phone number in large text.</strong> A surprising number of Irish consumers still prefer to order by phone, particularly older demographics.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span><strong>Add a QR code.</strong> Linking directly to your online ordering page or Google Maps listing removes friction. Print it large enough to scan easily.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span><strong>Use real food photography if you can.</strong> Generic stock images do not convert. A quality photo of your actual dish is far more compelling.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">5.</span>
              <span><strong>Set up your artwork at 3mm bleed with crop marks.</strong> This ensures the print runs to the edge of the leaflet without white borders. If in doubt, ask your printer for an artwork template.</span>
            </li>
          </ul>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is the most popular leaflet size in Ireland?',
                a: 'A5 (148mm × 210mm) is the most commonly printed leaflet size for Irish businesses. It fits standard letterboxes, is easy to hand out, and gives enough space to clearly communicate your offer.',
              },
              {
                q: 'What paper stock should I use for leaflets?',
                a: '130–150gsm gloss or silk coated paper is the most popular choice for Irish businesses. It strikes the right balance between cost, feel, and print quality. Premium brands often step up to 170gsm silk.',
              },
              {
                q: 'How many leaflets do I need for a local campaign in Ireland?',
                a: 'A small estate or village door drop requires 500–1,000 leaflets. A town-wide campaign typically needs 2,000–5,000. City-wide coverage in Dublin, Cork, or Galway requires 10,000+.',
              },
              {
                q: 'Can I get leaflets printed in Dublin with fast turnaround?',
                a: 'Yes. PrintNPack prints leaflets with nationwide delivery across Ireland. Orders with print-ready artwork are typically dispatched within 2–3 working days.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-blue-600 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Print your leaflets with PrintNPack Ireland</h2>
          <p className="text-blue-100 mb-6">
            A5, A6, A4, folded and flat — fast turnaround, sharp colour, delivered nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services/leaflets"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Leaflet Printing →
            </Link>
            <Link
              href="/quote"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">
            ← Back to all guides
          </Link>
        </div>
      </main>
    </Layout>
  );
}
