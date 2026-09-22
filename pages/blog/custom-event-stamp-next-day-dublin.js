import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../../lib/site';

const PAGE_SLUG = 'custom-event-stamp-next-day-dublin';
const PAGE_URL = `${siteUrl}/blog/${PAGE_SLUG}`;
const HERO_IMAGE = '/images/blog/custom-event-stamp/custom-event-stamp-dublin-e-and-j.jpg';
const STAMP_IMAGE = '/images/blog/custom-event-stamp/custom-wooden-event-stamp-dublin.jpg';
const HERO_ALT =
  'Custom event stamp Dublin — wooden handle stamp pressing an E&J wreath monogram onto wedding stationery';
const STAMP_ALT =
  'Wooden custom event stamp made by PrintNPack for next-day delivery in Dublin, with wax-seal envelope and florals';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Custom Event Stamp Made & Delivered the Next Day – A Print n Pack Rush Job',
  description:
    'Need a custom stamp urgently in Dublin? See how Print n Pack created and delivered a personalised event stamp within one day for a last-minute event requirement.',
  image: [`${siteUrl}${HERO_IMAGE}`, `${siteUrl}${STAMP_IMAGE}`],
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-09-16',
  dateModified: '2026-09-16',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can PrintNPack make a custom stamp for the next day in Dublin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, where production schedules allow. PrintNPack recently made a personalised wooden event stamp and delivered it the next day for a last-minute Dublin event. Same-day and next-day express stamps are available when artwork is ready — call with your deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of custom event stamp did you make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A wooden-handled custom rubber stamp with a couple’s monogram — initials inside a leafy wreath — for event stationery, cards, envelopes and other finishing touches. Traditional hand stamps like this are popular for weddings and parties.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I use a custom event stamp for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wedding invitations and envelopes, event stationery, thank-you cards, gift bags and packaging, corporate events, menus and place cards, paper bags and tissue paper, business branding and party favours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I order an urgent custom stamp in Dublin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Send your logo, initials, artwork or even just an idea. PrintNPack is based in Ashbourne, Co. Meath and delivers across Dublin. Call +353 89 415 7369 with your deadline, or request a quote online. We cannot promise every job overnight, but when there is a realistic way to finish it in time, we will try.',
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
    { '@type': 'ListItem', position: 3, name: 'Custom Event Stamp Next Day Dublin', item: PAGE_URL },
  ],
};

const uses = [
  'Wedding invitations and envelopes',
  'Event stationery',
  'Thank-you cards',
  'Gift bags and packaging',
  'Corporate events',
  'Menus and place cards',
  'Paper bags and tissue paper',
  'Business branding',
  'Party favours',
];

export default function CustomEventStampNextDayDublin() {
  const title = 'Custom Event Stamps Dublin | Next-Day Stamp Printing | Print n Pack';
  const description =
    'Need a custom stamp urgently in Dublin? See how Print n Pack created and delivered a personalised event stamp within one day for a last-minute event requirement.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom event stamps dublin, next day stamp printing dublin, urgent rubber stamp ireland, personalised wedding stamp, wooden event stamp, custom rubber stamp dublin, same day stamp printing, print n pack stamps"
        />
        <meta name="author" content="PrintNPack Ireland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="PrintNPack Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:image" content={`${siteUrl}${HERO_IMAGE}`} />
        <meta property="og:image:alt" content={HERO_ALT} />
        <meta property="article:published_time" content="2026-09-16" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${HERO_IMAGE}`} />

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
          <span className="text-slate-900">Next-Day Event Stamp</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-rose-50 text-rose-800 text-xs font-semibold px-3 py-1 rounded-full">Case Study</span>
          <span className="text-slate-400 text-sm">16 Sep 2026 · 5 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Custom Event Stamp Made &amp; Delivered the Next Day – A Print n Pack Rush Job
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Invitations ready. Guests confirmed. Then one last-minute detail: a personalised wooden stamp — needed
          tomorrow. We made it, and we delivered it.
        </p>

        <div className="relative rounded-2xl overflow-hidden mb-8 border border-slate-100 bg-[#f6f0e8]">
          <Image
            src={HERO_IMAGE}
            alt={HERO_ALT}
            width={1448}
            height={1086}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-6 mb-8 not-prose">
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Need a stamp quickly? Custom rubber stamps start from around <strong>€15</strong>, with same-day and
            next-day express when the schedule allows. Start at{' '}
            <Link href="/rubber-stamps-ireland" className="text-indigo-700 hover:underline font-semibold">
              rubber stamps Ireland
            </Link>
            {' '}or{' '}
            <Link href="/rubber-stamps" className="text-indigo-700 hover:underline font-semibold">
              custom rubber stamp
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/rubber-stamps"
              className="inline-flex items-center bg-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
            >
              Order a Custom Stamp
            </Link>
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="inline-flex items-center bg-white text-indigo-700 font-semibold px-5 py-2.5 rounded-xl border border-indigo-200 hover:border-indigo-300 transition-colors text-sm"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">When an event deadline won’t wait</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Events have a funny habit of making everything urgent.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Invitations are ready. Decorations are organised. Guests are confirmed. Then, right at the last
            minute, somebody realises there is one small detail still missing.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            For one of our recent customers, that detail was a <strong>custom event stamp</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            They contacted Print n Pack needing a personalised wooden stamp for their event — and there was one
            rather important catch:
          </p>
          <p className="text-slate-800 font-medium leading-relaxed mb-4">
            They needed it the next day.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            No long lead time. No week to play with. The event was approaching quickly, and the stamp had to be
            ready. So we got to work.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">From request to finished stamp in one day</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Once we received the design and requirements, our team prepared the artwork and moved the stamp
            straight into production.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            The result was a wooden-handled custom stamp they could use across event stationery, cards, packaging
            and other finishing touches. A couple’s monogram — initials inside a soft leafy wreath — that looks
            as considered on an envelope as it does on a place card. And, most importantly, we had it produced
            and delivered in time for their event.
          </p>

          <div className="relative rounded-2xl overflow-hidden mb-8 border border-slate-100 bg-[#f6f0e8] not-prose">
            <Image
              src={STAMP_IMAGE}
              alt={STAMP_ALT}
              width={1448}
              height={1086}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            It might only be a small stamp, but details like this can completely change the feel of event
            stationery. A personalised impression instantly makes something feel more thoughtful and unique.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Whether it is a wedding monogram, company logo, couple’s initials, event date or custom message, a
            stamp can be used again and again throughout an event. That is the quiet magic of it — one little
            tool, and every envelope, bag and thank-you card feels like it belongs together.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">A small detail that makes a big difference</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Custom stamps are particularly useful for:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            {uses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Instead of printing every single item separately, the same stamp can add a personalised finishing
            touch wherever it is needed. And there is something about physically stamping an invitation or
            package that gives it a handmade quality you simply don’t get from standard printing.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you are choosing between a wooden hand stamp like this one and a self-inking office stamp, our{' '}
            <Link href="/blog/business-stamps-ireland-guide" className="text-indigo-600 hover:underline font-medium">
              business stamps guide
            </Link>{' '}
            and{' '}
            <Link href="/rubber-stamp-faq-ireland" className="text-indigo-600 hover:underline font-medium">
              stamp FAQ
            </Link>{' '}
            explain the difference. For weddings and parties, the wooden handle is often the one people fall in
            love with.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Need something printed urgently in Dublin?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This order was a good reminder of something we deal with all the time at Print n Pack:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li>Sometimes you don’t have two weeks.</li>
            <li>Sometimes the event is tomorrow.</li>
            <li>Sometimes somebody forgot to order something.</li>
            <li>Sometimes the design changed at the last minute.</li>
            <li>And sometimes you simply need a printer who will pick up the phone, look at the job and figure out how to get it done.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Where production schedules allow, Print n Pack can help with urgent and short-turnaround printing in
            Dublin, including custom stamps, posters, banners, event signage, invitations, business stationery
            and other event printing. See{' '}
            <Link href="/rubber-stamp-printing-dublin" className="text-indigo-600 hover:underline font-medium">
              stamp printing Dublin
            </Link>
            {' '}or collect locally from{' '}
            <Link href="/rubber-stamp-printing-ashbourne" className="text-indigo-600 hover:underline font-medium">
              Ashbourne
            </Link>
            .
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            We can’t promise that every product can magically appear overnight — but when there’s a realistic way
            of getting your job finished in time, we’ll do our best to make it happen.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Looking for a custom stamp in Dublin?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you’re planning a wedding, party, corporate event or special occasion and would like your own
            personalised rubber stamp or wooden event stamp, get in touch.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Send us your logo, initials, artwork or even just an idea of what you would like. We’ll help you turn
            it into something you can actually stamp.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            And if you’ve just realised you need it tomorrow… well, you certainly wouldn’t be the first.
          </p>

          <div className="bg-slate-900 rounded-xl p-6 mb-8 text-white not-prose">
            <p className="font-semibold mb-1">Need a custom stamp for an event?</p>
            <p className="text-slate-400 text-sm mb-4">
              Wooden event stamps, wedding monograms and business stamps from Ashbourne — including next-day
              express when the schedule allows. Delivered across Dublin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/rubber-stamps"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Order Custom Stamps
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Contact Print n Pack
              </Link>
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Call {SITE_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 not-prose">
            {[
              {
                q: 'Can you make a custom stamp for the next day in Dublin?',
                a: 'Yes, where production schedules allow. This wooden event stamp was made and delivered the next day for a last-minute Dublin event. Call with your deadline and artwork and we will tell you honestly what is possible.',
              },
              {
                q: 'What kind of stamp was this?',
                a: 'A traditional wooden-handled rubber stamp with a couple’s monogram — initials inside a leafy wreath — for invitations, envelopes, cards and other event stationery.',
              },
              {
                q: 'What can I use a custom event stamp for?',
                a: 'Wedding invitations and envelopes, thank-you cards, gift bags, menus, place cards, paper bags, tissue paper, party favours and corporate event stationery.',
              },
              {
                q: 'How do I order an urgent custom stamp?',
                a: `Send your logo, initials or a sketch, and tell us the date you need it. Order online or call ${SITE_PHONE_DISPLAY}. Collection from Ashbourne is often the fastest option for Dublin and Meath.`,
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-rose-400 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {[
            {
              href: '/rubber-stamps',
              src: '/images/rubber-stamps/RubberStamp_10.jpg',
              title: 'Order Custom Rubber Stamps — Business, Signature & Hand Stamps',
            },
            {
              href: '/blog/business-stamps-ireland-guide',
              src: '/images/rubber-stamps/RubberStamp_11.jpg',
              title: 'Business Stamps Ireland | Custom Rubber & Company Stamps from €15',
            },
            {
              href: '/rubber-stamp-printing-dublin',
              src: '/images/rubber-stamps/Rubberstam_6.jpg',
              title: 'Stamp Printing Dublin — Delivery Across the City',
            },
            {
              href: '/rubber-stamp-faq-ireland',
              src: '/images/rubber-stamps/RubberStamp_12.jpg',
              title: 'Rubber Stamp FAQ Ireland — Pricing, Types & Turnaround',
            },
          ].map(({ href, src, title: relatedTitle }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-white">
                <Image src={src} alt={relatedTitle} fill className="object-cover" sizes="64px" />
              </div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                {relatedTitle}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">
            ← Back to all articles
          </Link>
        </div>
      </main>
    </Layout>
  );
}
