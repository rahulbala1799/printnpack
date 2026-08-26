import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import RelatedSeoLinks from '../../components/seo/RelatedSeoLinks';
import { SITE_URL as siteUrl } from '../../lib/site';

const slug = 'roll-up-banner-printing-ireland';
const PAGE_URL = `${siteUrl}/blog/${slug}`;
const heroImage = '/ifa/product/rollup/2.png';

const faqs = [
  {
    q: 'How much does roll up banner printing cost in Ireland?',
    a: 'Complete roll up banners with a heavy cassette start from €80. Artwork reprints (graphic only, no stand) start from €35. Extra wide XXL banners go up to €450 for 3 m × 2 m. Price depends on width and whether you need rush turnaround.',
  },
  {
    q: 'Where can I get roll up banners printed in Dublin?',
    a: 'PrintNPack prints roll up banners in Ashbourne, Co. Meath and delivers across Dublin city and county — including RDS, the Convention Centre and north Dublin. Collection is available from our Ashbourne unit for Meath and north Dublin customers.',
  },
  {
    q: 'How long does roll up banner printing take?',
    a: 'Standard turnaround is 2–3 business days after you approve the artwork proof. 24–48 hour rush is often available when the PDF is print-ready and we have capacity — call with your event date.',
  },
  {
    q: 'Can I order one roll up banner?',
    a: 'Yes. There is no minimum order. One pull up banner for a single trade show, open day or shop floor is a typical Irish order.',
  },
  {
    q: 'Do you print pull up banners and roller banners as well?',
    a: 'Yes. Pull up banner, roll up banner and roller banner are the same retractable indoor stand. One print job covers all three search terms.',
  },
  {
    q: 'Can I collect roll up banners in Ashbourne?',
    a: 'Yes. Collection is available from Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath (A84 KV57). That is the fastest option for Meath, Ratoath, Dunboyne and north Dublin.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Roll Up Banner Printing Ireland: Cost, Dublin Delivery & Turnaround',
  description:
    'Roll up banner printing in Ireland from €80 with a heavy cassette. Artwork reprints from €35. Dublin delivery, Ashbourne collection, 2–3 day turnaround, and how pull up and roller banners compare.',
  image: `${siteUrl}${heroImage}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'PrintNPack Ireland', logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Roll Up Banner Printing Ireland', item: PAGE_URL },
  ],
};

const priceRows = [
  { item: 'Artwork / graphic reprint', includes: 'Printed panel only — no cassette', from: '€35' },
  { item: 'Standard roll up with heavy cassette', includes: 'Graphic + heavy cassette (850–1200 mm)', from: '€80' },
  { item: 'Extra wide XXL (up to 3 m × 2 m)', includes: 'Large indoor backdrop with stand', from: 'Up to €450' },
  { item: 'Rush 24–48 hour print', includes: 'When artwork is print-ready', from: 'Quoted' },
];

export default function RollUpBannerPrintingIreland() {
  const title = 'Roll Up Banner Printing Ireland | Cost, Dublin Delivery & Turnaround';
  const description =
    'Roll up banner printing Ireland from €80 with a heavy cassette. Artwork reprints from €35. Pull up and roller banners printed in Ashbourne with Dublin delivery, 2–3 day turnaround and no minimum order.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="roll up banner printing ireland, roll up banner printing dublin, pull up banner printing, roller banner printing ireland, how much do roll up banners cost, roll up banners dublin, retractable banner printing ireland"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}${heroImage}`} />
        <meta property="og:image:alt" content="Roll up banner printing Ireland — pull up banner with stand" />
        <meta property="og:locale" content="en_IE" />
        <meta property="article:published_time" content="2026-08-26" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <article className="bg-white">
        <header className="border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-700">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-slate-700">Blog</Link>
              <span>/</span>
              <span className="text-slate-900">Roll Up Banner Printing</span>
            </nav>
            <p className="text-sm font-medium text-orange-600 mb-3">Print Guide</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Roll Up Banner Printing Ireland — Cost, Dublin Delivery &amp; Turnaround
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">{description}</p>
            <p className="text-sm text-slate-400">26 August 2026 · 9 min read</p>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 mb-8 border border-slate-100">
            <Image
              src={heroImage}
              alt="Roll up banner printing Ireland — retractable pull up banner with aluminium stand"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="rounded-xl bg-orange-50 border border-orange-100 p-6 mb-10">
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Need a banner for a date? PrintNPack prints{' '}
              <Link href="/roll-up-banners-ireland" className="text-orange-700 hover:underline font-semibold">
                roll up banners Ireland
              </Link>{' '}
              from €80 with a heavy cassette. Artwork reprints from €35. Dublin delivery or Ashbourne collection.
            </p>
            <Link
              href="/roll-up-banners-ireland"
              className="inline-flex items-center bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-700 transition-colors text-sm"
            >
              Get a roll up banner quote
            </Link>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If you searched <strong>roll up banner printing Ireland</strong> or <strong>roll up banner printing Dublin</strong>,
            you want a printer who can turn a PDF into a stand that works at RDS, a hotel foyer or a shop floor — without a
            500-unit minimum. That is the job. PrintNPack prints in Ashbourne, Co. Meath and ships nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What roll up banner printing includes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A finished order is not just a printed sheet. You get:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li>Full-colour graphic on anti-curl vinyl</li>
            <li>Aluminium cassette stand (economy, standard or premium)</li>
            <li>Carry bag for the next exhibition</li>
            <li>A proof before we print — so the logo and phone number are not in the pole rail</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-6">
            Setup is under a minute: extend the pole, hook the top rail, the cassette tensions the panel. No tools.
            That is why Irish exhibitors still buy pull up banners instead of foamex for every show.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How much does roll up banner printing cost?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Starting prices for Irish orders. Final quotes depend on width, cassette and deadline.
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wide">
              <span>Option</span>
              <span>Included</span>
              <span>From</span>
            </div>
            {priceRows.map((row, i) => (
              <div key={row.item} className={`grid grid-cols-3 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <span className="font-medium text-slate-800 pr-2">{row.item}</span>
                <span className="text-slate-600 pr-2">{row.includes}</span>
                <span className="text-slate-900 font-semibold">{row.from}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            There is no minimum order. One banner for one event is normal. Extra wide XXL stands (up to 3 m × 2 m)
            go up to €450 — see{' '}
            <Link href="/extra-wide-roll-up-banners-ireland" className="text-orange-600 hover:underline font-medium">
              extra wide roll up banners
            </Link>{' '}
            if you need a hall backdrop rather than an 85–120 cm display.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Sizes we print most often</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
            <li><strong>850 × 2000 mm</strong> — reception desks, clinics, tight booths</li>
            <li><strong>1000 × 2000 mm</strong> — default Irish trade show size</li>
            <li><strong>1200 × 2000 mm</strong> — wider foyers and retail</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-6">
            If you are unsure, order 1000 mm. It fits a 3 m shell-scheme stand at RDS or a regional expo without
            looking lost.{' '}
            <Link href="/blog/roll-up-banners-ireland-guide" className="text-orange-600 hover:underline font-medium">
              Size and pull-up vs roller guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Roll up banner printing Dublin — and the rest of Ireland</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We are not a city-centre Dublin shop. Print happens in Ashbourne, 20 minutes from the M50. That is why
            north Dublin, Swords, Blanchardstown and Meath customers often collect. Courier covers Dublin city and
            county, Cork, Galway, Limerick and every Republic county.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            Typical Dublin uses: RDS and Convention Centre exhibitions, hotel conference foyers, retail promotions,
            clinic waiting rooms, university open days. For a local Meath pickup see{' '}
            <Link href="/pull-up-banners-meath" className="text-orange-600 hover:underline font-medium">
              pull up banners Meath
            </Link>{' '}
            or{' '}
            <Link href="/banner-printing-dublin" className="text-orange-600 hover:underline font-medium">
              banner printing Dublin
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pull up banners, roller banners — same print job</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Irish searchers type <strong>pull up banner printing</strong>, <strong>roller banner printing</strong> and{' '}
            <strong>roll up banner printing</strong> for one product. The graphic retracts into the base. If a supplier
            lists three different SKUs with three prices for the same cassette, you are paying for naming, not hardware.
            We print one product under all three names.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Turnaround for Irish event dates</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Clock starts when you approve the proof, not when you first email a logo. Standard is <strong>2–3 business
            days</strong>. Rush 24–48 hours is often possible if the file is a print-ready PDF at final size. Weekend
            exhibitions: send artwork early in the week. We will tell you honestly if the date is too tight rather than
            miss it.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Artwork that survives the cassette</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li>PDF at the final width × 2000 mm (or your custom height)</li>
            <li>150–300 dpi for photos; vectors for logos</li>
            <li>20–30 mm extra graphic at the bottom — it tucks into the roll</li>
            <li>Keep phone numbers and logos out of the top 50 mm (pole rail)</li>
            <li>WhatsApp a logo if that is all you have — we will check it and send a proof</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Indoor roll ups vs outdoor PVC</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Roll up banner printing is for indoors. Wind will wreck a cassette on a fence. For shop fronts, scaffolding
            and GAA grounds order{' '}
            <Link href="/vinyl-banners" className="text-orange-600 hover:underline font-medium">PVC vinyl banners</Link>{' '}
            with hems and eyelets. Many Irish jobs are one of each: a roll up for the stand, PVC for the car park.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Roll up banner printing FAQs</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-xl overflow-hidden bg-white">
                <summary className="cursor-pointer px-4 py-3 bg-slate-50 hover:bg-slate-100 font-semibold text-slate-900 text-sm">
                  {faq.q}
                </summary>
                <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Print a roll up banner for your next date</h2>
            <p className="text-slate-300 mb-6 text-sm sm:text-base">
              From €80 with a heavy cassette. Artwork reprints from €35. Ashbourne print unit. Dublin and nationwide delivery.
            </p>
            <Link
              href="/roll-up-banners-ireland"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Order roll up banners Ireland
            </Link>
          </div>
        </div>
      </article>

      <RelatedSeoLinks
        links={[
          { href: '/roll-up-banners-ireland', label: 'Roll Up Banners Ireland', desc: 'From €80 with heavy cassette' },
          { href: '/blog/roll-up-banners-ireland-guide', label: 'Sizes & pull up vs roller', desc: '850, 1000 and 1200 mm' },
          { href: '/extra-wide-roll-up-banners-ireland', label: 'Extra Wide Roll Ups', desc: 'XXL up to €450 for 3 m × 2 m' },
          { href: '/banner-printing-dublin', label: 'Banner Printing Dublin', desc: 'City and county delivery' },
          { href: '/banners-ireland', label: 'Banners Ireland', desc: 'PVC, roll-up and exhibition' },
          { href: '/vinyl-banners', label: 'PVC Outdoor Banners', desc: 'When a roll up is the wrong product' },
        ]}
      />
    </Layout>
  );
}
