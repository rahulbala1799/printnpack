import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { SITE_URL as siteUrl } from '../../lib/site';

const PAGE_URL = `${siteUrl}/blog/printing-ashbourne-guide`;

const HERO_IMAGE = '/ifa/product/Poster/single_poster.jpg';

const faqs = [
  {
    q: 'Where can I get printing done in Ashbourne?',
    a: 'You can get local printing done at PrintNPack, based at Unit 14 Ashbourne Business Centre. PrintNPack supplies posters, certificates, flyers, stickers, business cards, banners, signs, menus, rubber stamps and packaging.',
  },
  {
    q: 'Do you offer poster printing in Ashbourne?',
    a: 'Yes. PrintNPack offers poster printing for local businesses, events, schools, clubs and community groups. Common sizes include A4, A3, A2, A1 and A0 depending on the artwork and requirement.',
  },
  {
    q: 'Can I print certificates near Ashbourne?',
    a: 'Yes. PrintNPack can print certificates for schools, clubs, awards, training events and business presentations. For best results, send a print-ready PDF with names, dates and details checked carefully.',
  },
  {
    q: 'Do you print flyers and leaflets for local businesses?',
    a: 'Yes. Flyers, leaflets, menus and promotional handouts can be printed for restaurants, takeaways, salons, gyms, shops, tradespeople and other local businesses.',
  },
  {
    q: 'Can I order business cards in Ashbourne?',
    a: 'Yes. PrintNPack can print business cards, appointment cards, loyalty cards and QR code cards for local businesses and individuals.',
  },
  {
    q: 'Do you print stickers and labels?',
    a: 'Yes. PrintNPack prints stickers and labels for packaging, products, windows, events and branding. Vinyl stickers are available for more durable applications.',
  },
  {
    q: 'Do you offer same-day printing?',
    a: 'Some simple printing jobs may be available with fast or same-day turnaround depending on the file, material, quantity and workload. It is best to contact PrintNPack with the artwork and deadline before ordering.',
  },
  {
    q: 'Where is PrintNPack located?',
    a: 'PrintNPack is located at Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57.',
  },
  {
    q: 'Do you deliver outside Ashbourne?',
    a: 'Yes. PrintNPack serves Ashbourne and nearby areas such as Ratoath, Swords, Blanchardstown, Navan, Dublin and Meath, with nationwide delivery available for many print and packaging orders.',
  },
  {
    q: 'What file format should I send for printing?',
    a: 'A print-ready PDF is usually best. Make sure the design is the correct size, images are high-resolution, text is checked, and bleed is added where required.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Printing in Ashbourne: Local Print Services for Businesses, Events and Everyday Jobs',
  description:
    'Looking for printing in Ashbourne? PrintNPack prints posters, certificates, flyers, stickers, business cards, banners, menus and more from Unit 14 Ashbourne Business Centre.',
  image: `${siteUrl}${HERO_IMAGE}`,
  author: { '@type': 'Organization', name: 'PrintNPack Ireland', url: siteUrl },
  publisher: {
    '@type': 'Organization',
    name: 'PrintNPack Ireland',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
  },
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
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

export default function PrintingAshbourneGuide() {
  const title = 'Printing in Ashbourne Guide | Artwork Tips & What to Print Locally';
  const description =
    'A practical guide to printing in Ashbourne — what you can print locally, how to prepare artwork, fast turnaround tips, and when to collect from Unit 14 Ashbourne Business Centre.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="printing Ashbourne, print shop Ashbourne, poster printing Ashbourne, flyer printing Ashbourne, certificate printing Ashbourne, business card printing Ashbourne, stickers Ashbourne, printing near me"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${siteUrl}${HERO_IMAGE}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span>/</span>
          <span className="text-slate-900">Printing Ashbourne Guide</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Local Print Guide</span>
          <span className="text-slate-400 text-sm">23 Jun 2026 · 10 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
          Printing in Ashbourne: Local Print Services for Businesses, Events and Everyday Jobs
        </h1>

        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 mb-8 border border-slate-100 bg-slate-100">
          <Image
            src={HERO_IMAGE}
            alt="Poster printing in Ashbourne at PrintNPack"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="rounded-xl bg-blue-50 border border-blue-100 p-6 mb-8 not-prose">
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Ready to order? Visit our{' '}
            <Link href="/printing-ashbourne" className="text-blue-600 hover:underline font-semibold">
              printing Ashbourne
            </Link>{' '}
            service page to request a quote, call, or send artwork — or see{' '}
            <Link href="/printing-ireland" className="text-blue-600 hover:underline font-semibold">
              printing across Ireland
            </Link>{' '}
            for nationwide delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/printing-ashbourne" className="inline-flex items-center bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm">
              Order Printing Ashbourne
            </Link>
            <Link href="/quote" className="inline-flex items-center bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors text-sm">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Looking for <strong>printing in Ashbourne</strong> can feel simple until the job suddenly becomes urgent. You
            need certificates for an awards night, posters for an event, menus for a takeaway, stickers for packaging,
            business cards for a meeting, or a banner that has to be ready before the weekend. That is where having a
            local <strong>print shop in Ashbourne</strong> matters.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            PrintNPack is based at Unit 14 Ashbourne Business Centre and supplies practical print and packaging services
            for local businesses, events, schools, clubs and everyday customers around Ashbourne, Meath and Dublin.
            Whether you need a small one-off print job or regular business printing, the goal is the same: clear advice,
            good print quality, fair pricing and a fast turnaround where possible.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This guide explains what you can print locally in Ashbourne, which products are most useful for businesses,
            what to prepare before ordering, and how to get the best result from your artwork.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Can You Print Locally in Ashbourne?</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            A good local printing service should cover both everyday jobs and business materials. At PrintNPack, the most
            common requests include posters, flyers, leaflets, certificates, business cards, stickers, labels, banners,
            roll-up banners, rubber stamps, menus, signs and packaging. Some jobs are simple, like printing a certificate
            or poster. Others need more setup, such as custom stickers, packaging, foamex boards or large event signage.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Poster Printing in Ashbourne</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link href="/posters" className="text-blue-600 hover:underline font-medium">Poster printing</Link> is one of
            the most common local print needs. Posters are used for events, shop promotions, school notices, community
            announcements, restaurant offers, concerts, classes, clubs and sports activities. Depending on the artwork and
            quantity, posters can be printed in standard sizes such as A4, A3, A2, A1 and A0.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For best results, send your poster artwork as a high-resolution PDF. If your poster includes photos, logos or
            sponsor graphics, make sure they are sharp and not pulled from a low-quality screenshot. A poster may look fine
            on a phone screen but print blurry at A1 or A0 size if the file is too small.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Certificate Printing Near Ashbourne</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Certificate printing is useful for schools, training providers, sports clubs, dance schools, community groups,
            awards nights and workplace recognition. Certificates usually work best on thicker paper or card, especially
            when they are being presented at an event or framed afterwards.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If you need <strong>certificate printing near Ashbourne</strong>, it helps to supply a PDF with the names
            already inserted, or a clean template if the names need to be added later. For batches of certificates, keep
            spelling, titles and dates consistent before sending the final file for print.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Flyer and Leaflet Printing for Local Businesses</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link href="/services/leaflets" className="text-blue-600 hover:underline font-medium">
              Flyer and leaflet printing
            </Link>{' '}
            still works well for local businesses because they are physical, direct and easy to distribute. Restaurants use
            takeaway menus, gyms use promotion flyers, salons use price lists, tradespeople use service leaflets, and event
            organisers use handouts to promote ticket sales.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            The most popular leaflet formats are A5, A4 and folded menus. A5 is usually the most practical for handouts
            because it is compact and cost-effective. A4 gives more space for menus, service lists and detailed offers.
            Folded leaflets are useful when you need a more premium feel or want to separate information into panels.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Business Card Printing in Ashbourne</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Business cards are still useful for trades, consultants, restaurants, barbers, salons, accountants, estate agents,
            repair services and local salespeople. A business card does not need to be complicated. The best ones are clear,
            readable and easy to act on.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Include your name, business name, phone number, email, website and QR code if relevant. Avoid cramming too much
            text onto the card. If someone cannot read it quickly, it is not doing its job.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Sticker and Label Printing</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link href="/vinyl-stickers" className="text-blue-600 hover:underline font-medium">Custom vinyl stickers</Link>{' '}
            are useful for packaging, product labels, jars, bottles, takeaway bags, boxes, envelopes, shop windows, laptops,
            events and promotional giveaways. Vinyl stickers are a strong option when you need a durable finish, especially
            for windows, outdoor use or surfaces that may get handled frequently.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For product labels and packaging stickers, think about the surface before ordering. A sticker going onto a paper
            bag has different needs from one going onto a bottle, window, food container or vehicle. If you are unsure,
            describe the use clearly before ordering so the right material can be recommended.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Banners, Roll-Up Banners and Event Signage</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Banners are ideal for events, festivals, sports clubs, charity fundraisers, openings, outdoor promotions and
            shopfront visibility.{' '}
            <Link href="/roll-up-banners" className="text-blue-600 hover:underline font-medium">Roll-up banners</Link> are
            useful for exhibitions, reception areas, pop-ups, trade shows and indoor events because they are portable and
            reusable.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            When ordering banner printing in Ashbourne or nearby areas, confirm the final size, where it will be used,
            whether it needs eyelets, and whether the design will be viewed close-up or from a distance. Large-format
            designs need bold text, strong contrast and fewer tiny details.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Foamex Boards, Correx Boards and Rigid Signs</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Rigid boards are useful when a poster is not strong enough.{' '}
            <Link href="/foamex-boards" className="text-blue-600 hover:underline font-medium">Foamex boards</Link> are
            often used indoors for displays, presentations, menus, directional signs, price boards and professional event
            signage. Correx boards are lightweight and popular for temporary outdoor signage, site signs, election-style
            boards, directional boards and community events.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            If the board will be used outside, mention that before printing. Outdoor signs may need different material,
            finishing or fixing options compared with indoor display boards.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Rubber Stamps for Companies and Offices</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <Link href="/rubber-stamps" className="text-blue-600 hover:underline font-medium">Rubber stamps</Link> are
            useful for offices, accountants, schools, shops, warehouses, restaurants and small businesses. Common stamp
            types include company stamps, address stamps, paid stamps, received stamps, approved stamps, loyalty card stamps
            and invoice stamps.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For company stamps, double-check the company name, registration number, address and VAT details before ordering.
            A stamp is used repeatedly, so small spelling mistakes become annoying very quickly.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Printing for Ashbourne Businesses</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Local businesses usually need more than one type of print. A takeaway may need menus, posters, stickers,
            packaging and outdoor banners. A salon may need price lists, appointment cards, window decals and gift vouchers.
            A gym may need flyers, membership forms, wall graphics and event posters. A school or club may need certificates,
            signs, tickets, banners and programmes.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            This is why working with a local print shop can be easier than ordering everything separately online. You can
            explain the full job, match materials properly, and avoid ordering the wrong size or finish. Local printing also
            helps when something needs to be collected quickly or corrected before an event.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Fast Turnaround and Same-Day Printing</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Some printing jobs may be available with fast or same-day turnaround depending on the file, material, quantity
            and current workload. Simple document prints, certificates, small posters or urgent event materials are often
            easier to turn around quickly than custom packaging or complex large-format work.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            The best way to speed up an order is to send print-ready artwork. A print-ready PDF should have the correct
            size, clear text, high-resolution images and bleed where required. If artwork needs design changes, resizing,
            cleaning or file conversion, the job may take longer.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to Prepare Your Artwork Before Sending It to Print</h2>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li>Send a PDF where possible, especially for posters, flyers, menus, certificates and business cards.</li>
            <li>Use high-resolution images. Avoid screenshots, compressed WhatsApp images or tiny logos pulled from websites.</li>
            <li>Check spelling, phone numbers, dates, prices and QR codes before sending the final file.</li>
            <li>Add bleed if the design goes to the edge of the page. A common print bleed is 3mm.</li>
            <li>Keep important text away from the edge so it does not get trimmed.</li>
            <li>For large-format printing, use bold text and simple layouts that can be read from a distance.</li>
            <li>For stickers and labels, explain the surface and use: indoor, outdoor, packaging, window, bottle, vehicle or wall.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Collection and Delivery</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            PrintNPack is located at Unit 14 Ashbourne Business Centre, making it convenient for customers in Ashbourne and
            nearby areas. Depending on the order, collection may be suitable for local customers, while delivery can be
            arranged for jobs going to Meath, Dublin and other parts of Ireland.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            For urgent jobs, collection is often the fastest option. For larger packaging or signage orders, delivery may be
            more practical. Always confirm the deadline when{' '}
            <Link href="/quote" className="text-blue-600 hover:underline font-medium">requesting a print quote</Link> so the
            turnaround can be checked before production. You can also{' '}
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">
              contact PrintNPack in Ashbourne
            </Link>{' '}
            directly with your artwork and deadline.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Areas Served Near Ashbourne</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            PrintNPack serves customers in Ashbourne and surrounding areas including Ratoath, Swords, Finglas,
            Blanchardstown, Clonee, Dunboyne, Navan, Dublin, Meath and nearby towns. Many customers also order from outside
            the local area when they need packaging, banners, stickers, signs or business printing delivered nationwide.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Choose a Local Print Shop Instead of Ordering Online?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Online print websites can be useful for standard products, but local printing has advantages when you need
            advice, quick collection, file checking or a practical recommendation. If you are unsure whether to print on
            card, paper, vinyl, foamex, correx or banner material, a local printer can guide you before you waste money on
            the wrong product.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Local printing is also useful when the job is connected to a real deadline: an opening night, school event,
            business launch, wedding, sports match, restaurant promotion or trade show. When time matters, being able to
            speak to someone nearby is valuable.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Local Printing Jobs</h2>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Printing need</th>
                  <th className="text-left px-4 py-3 font-semibold">Common use</th>
                  <th className="text-left px-4 py-3 font-semibold">Useful tip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3">Posters</td>
                  <td className="px-4 py-3">Events, shops, schools, promotions</td>
                  <td className="px-4 py-3">Use high-resolution artwork for A1 and A0.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3">Certificates</td>
                  <td className="px-4 py-3">Awards, training, schools, clubs</td>
                  <td className="px-4 py-3">Use thicker paper for a premium feel.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Flyers and leaflets</td>
                  <td className="px-4 py-3">Menus, offers, launches, local marketing</td>
                  <td className="px-4 py-3">A5 is practical for handouts.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3">Business cards</td>
                  <td className="px-4 py-3">Networking, trades, appointments</td>
                  <td className="px-4 py-3">Keep the design readable and include a QR code if useful.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Stickers and labels</td>
                  <td className="px-4 py-3">Packaging, products, windows, branding</td>
                  <td className="px-4 py-3">Match the material to the surface.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3">Banners</td>
                  <td className="px-4 py-3">Outdoor events, shops, clubs</td>
                  <td className="px-4 py-3">Use bold text and strong contrast.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Roll-up banners</td>
                  <td className="px-4 py-3">Trade shows, receptions, pop-ups</td>
                  <td className="px-4 py-3">Best for reusable indoor display.</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3">Rubber stamps</td>
                  <td className="px-4 py-3">Offices, accounts, schools, warehouses</td>
                  <td className="px-4 py-3">Proofread company details carefully.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Foamex and correx boards</td>
                  <td className="px-4 py-3">Signs, displays, directions</td>
                  <td className="px-4 py-3">Choose indoor or outdoor material based on use.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-8">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-l-4 border-blue-600 pl-5">
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-blue-50 border border-blue-100 p-6 not-prose">
            <h3 className="font-bold text-slate-900 mb-2">Get a Printing Quote in Ashbourne</h3>
            <p className="text-slate-700 text-sm mb-4">
              Need something printed locally? Contact PrintNPack with your artwork, size, quantity and deadline. The more
              detail you provide, the faster and more accurate your quote will be. If you are not sure what material or size
              you need, explain where the print will be used and the team can recommend a suitable option.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Request a Print Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors text-sm"
              >
                Contact PrintNPack
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <Link href="/blog" className="text-slate-500 hover:text-slate-700 text-sm font-medium">
            ← Back to all articles
          </Link>
        </div>
      </main>
    </Layout>
  );
}
