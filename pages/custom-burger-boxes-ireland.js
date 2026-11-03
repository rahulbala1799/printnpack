import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SITE_URL } from '../lib/site';
import { buildProductLd } from '../lib/schema';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { useQuoteCart } from '../lib/quote-cart-context';
import PrintedBagasseConfigurator from '../components/bagasse-boxes/PrintedBagasseConfigurator';
import {
  PRINTED_BAGASSE_BOXES,
  PRINTED_BAGASSE_GALLERY,
  PRINTED_BAGASSE_PATH,
  PRINTED_BAGASSE_PRINT,
  PRINTED_BAGASSE_QTYS,
  buildPrintedBagasseQuoteLine,
  getPrintedBagasseBox,
  printedBagasseFloorPrice,
  printedBagassePath,
  printedBagasseStartPrice,
} from '../data/printed-bagasse-boxes';

const PAGE_URL = `${SITE_URL}${PRINTED_BAGASSE_PATH}`;
const HERO = PRINTED_BAGASSE_GALLERY[0].src;
const START = printedBagasseStartPrice().toFixed(2);
const FLOOR = printedBagasseFloorPrice().toFixed(2);

const faqs = [
  {
    q: 'What is the minimum order for printed bagasse burger boxes?',
    a: 'Printed bagasse boxes start at 100. The quantity steps are 100, 200, 500, 1,000, 2,000, 3,000, 4,000 and 5,000.',
  },
  {
    q: 'How much is a printed 6 inch bagasse burger box?',
    a: 'The 6 inch, 15 × 15 cm box is €0.80 each at 100 boxes, ex VAT, and €0.30 each at 5,000. Print is a CMYK logo. The other seven sizes use that price ladder, adjusted for the cost of the blank box.',
  },
  {
    q: 'Which printed bagasse boxes can I order?',
    a: 'Eight compostable boxes: 6 inch burger (15 × 15 cm), 7 inch rectangle, 6×4 inch lunch, 8×8 inch meal, 8×8 inch with 3 compartments, 9×9 inch meal, and 9×6×2 inch in one or two compartments.',
  },
  {
    q: 'Is the print full colour?',
    a: 'Yes. Every size is printed with a CMYK logo. There is no single-colour option on this range.',
  },
  {
    q: 'Are these burger boxes compostable?',
    a: 'Yes. The boxes are bagasse, made from sugarcane fibre. They are compostable, oil-resistant and used for hot takeaway food.',
  },
  {
    q: 'Do you deliver printed burger boxes across Ireland?',
    a: 'Yes. PrintNPack prints and supplies these boxes from Ashbourne, Co. Meath, and delivers to Dublin, Cork, Galway and every county. Delivery is confirmed on the quote.',
  },
  {
    q: 'Can I buy the same boxes without a logo?',
    a: 'Yes. The same shapes are in plain packaging, sold by the case. Printed prices on this page are for a CMYK logo from 100 boxes.',
  },
];

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
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Burger Boxes Ireland', item: `${SITE_URL}/burger-boxes-ireland` },
    { '@type': 'ListItem', position: 3, name: 'Printed Burger Boxes', item: PAGE_URL },
  ],
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Printed bagasse burger and meal boxes',
  itemListElement: PRINTED_BAGASSE_BOXES.map((box, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: box.name,
    url: `${SITE_URL}${printedBagassePath(box)}`,
  })),
};

const productLd = buildProductLd({
  name: 'Custom Printed Bagasse Burger Boxes Ireland',
  description:
    'Eight compostable bagasse boxes with a CMYK logo. The 6 inch burger box is €0.80 ex VAT at 100 and €0.30 at 5,000.',
  image: `${SITE_URL}${HERO}`,
  url: PAGE_URL,
  lowPrice: FLOOR,
  highPrice: '1.08',
  category: 'Food packaging',
  shipping: { handlingMin: 7, handlingMax: 10, transitMin: 1, transitMax: 3 },
});

function euro(value) {
  return `€${Number(value).toFixed(2)}`;
}

export default function CustomBurgerBoxesIreland() {
  const router = useRouter();
  const { addItem } = useQuoteCart();
  const requested = typeof router.query.size === 'string' ? router.query.size : '6-inch';
  const initialBox = getPrintedBagasseBox(requested) || PRINTED_BAGASSE_BOXES[0];
  const [shown, setShown] = useState(initialBox.image);
  const title = 'Custom Printed Burger Boxes Ireland | Bagasse, CMYK Logo';
  const description =
    'Printed bagasse burger boxes in Ireland. Eight compostable sizes, CMYK logo, from 100 boxes. The 6 inch box is €0.80 ex VAT at 100 and €0.30 at 5,000. Nationwide delivery.';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="custom burger boxes Ireland, printed burger boxes, bagasse burger box printing, burger boxes with logo, printed bagasse meal boxes, compostable burger boxes Ireland, branded burger boxes Dublin"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${HERO}`} />
        <meta property="og:locale" content="en_IE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}${HERO}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
        {productLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} /> : null}
      </Head>

      <nav className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/burger-boxes-ireland" className="hover:text-gray-700">Burger Boxes Ireland</Link></li>
            <li>/</li>
            <li className="font-medium text-gray-800">Printed Burger Boxes</li>
          </ol>
        </div>
      </nav>

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Compostable bagasse · CMYK logo
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Printed burger boxes
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Eight bagasse boxes with your logo, printed in Ireland. Orders start at 100.
              The 6 inch burger box is <strong>€{START} each</strong> at 100 and <strong>€0.30 each</strong> at 5,000, ex VAT.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              The other sizes use that same quantity ladder. A dearer blank box costs more to print.
              A cheaper blank box costs less. Print is a {PRINTED_BAGASSE_PRINT} on every size.
            </p>
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-emerald-50">
                <Image src={shown} alt="Printed bagasse burger box with a colour logo" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <figcaption className="mt-2 text-sm text-gray-500">
                Example logos on the clamshell. Your artwork replaces these.
              </figcaption>
            </figure>
          </div>
          <div id="configure" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-1 text-lg font-bold text-gray-900">Build a printed box quote</h2>
            <p className="mb-4 text-sm text-gray-500">Prices are ex VAT. VAT is added on the quote.</p>
            <PrintedBagasseConfigurator
              key={initialBox.id}
              initial={{ sizeId: initialBox.id }}
              onChange={(priced) => setShown(priced.box.image)}
              onSubmit={(priced) => addItem(buildPrintedBagasseQuoteLine(null, priced))}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">Printed burger boxes</h2>
          <p className="mb-8 max-w-3xl text-gray-600">
            Each size has its own page, with both photos and the price at every quantity.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {PRINTED_BAGASSE_BOXES.map((box) => {
              const shots = box.gallery?.length ? box.gallery : [{ src: box.image, alt: box.name }];
              return (
                <Link key={box.id} href={printedBagassePath(box)} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md">
                  <div className={`grid ${shots.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {shots.slice(0, 2).map((shot) => (
                      <div key={shot.src} className="relative aspect-square bg-emerald-50">
                        <Image src={shot.src} alt={shot.alt || box.name} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-emerald-700">{box.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{box.size}. {box.use}.</p>
                    <p className="mt-2 text-sm font-semibold text-gray-900">{euro(box.prices[0])} at 100 · {euro(box.prices[box.prices.length - 1])} at 5,000</p>
                    <p className="text-xs text-gray-500">Ex VAT · {PRINTED_BAGASSE_PRINT}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">Price per box, ex VAT</h2>
          <p className="mb-6 max-w-3xl text-gray-600">
            The 6 inch burger box sets the price. Every other box moves up or down by the difference in the blank box.
            The lowest unit price in the range is €{FLOOR}, on the 7 inch and 6×4 inch boxes at 5,000.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left font-semibold text-gray-900">Qty</th>
                  {PRINTED_BAGASSE_BOXES.map((box) => (
                    <th key={box.id} className="px-3 py-3 text-left font-semibold text-gray-900">{box.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRINTED_BAGASSE_QTYS.map((qty, index) => (
                  <tr key={qty}>
                    <td className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">{qty.toLocaleString('en-IE')}</td>
                    {PRINTED_BAGASSE_BOXES.map((box) => (
                      <td key={box.id} className="whitespace-nowrap px-3 py-2 text-gray-700">{euro(box.prices[index])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Printed bagasse boxes for Irish takeaways</h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            Burger restaurants, cafés, food trucks and caterers use these boxes for hot food that needs a compostable pack and a logo.
            The board is sugarcane fibre. It stands up to grease, and the clamshell closes over the portion.
          </p>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">CMYK logo, from 100 boxes</h2>
          <p className="mb-6 leading-relaxed text-gray-600">
            Print is full-colour CMYK. Send the logo with the quote. Production is usually 7–10 business days after the artwork is approved.
            Smaller runs than 100 are better as plain cases from the wholesale range.
          </p>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Which size to pick</h2>
          <p className="leading-relaxed text-gray-600">
            A standard burger fits the <Link href="/custom-burger-boxes/6-inch-bagasse-burger-box" className="font-medium text-emerald-700 hover:underline">6 inch, 15 × 15 cm box</Link>.
            A gourmet burger or a plated meal needs the <Link href="/custom-burger-boxes/8x8-bagasse-meal-box" className="font-medium text-emerald-700 hover:underline">8×8</Link> or the <Link href="/custom-burger-boxes/9x9-bagasse-meal-box" className="font-medium text-emerald-700 hover:underline">9×9</Link>.
            Sides stay separate in the <Link href="/custom-burger-boxes/8x8-bagasse-3-compartment-box" className="font-medium text-emerald-700 hover:underline">3-compartment 8×8</Link> or the <Link href="/custom-burger-boxes/9x6-bagasse-2-compartment-box" className="font-medium text-emerald-700 hover:underline">2-compartment 1000 ml</Link>.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Example prints</h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {PRINTED_BAGASSE_GALLERY.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-white">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 30vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Printed burger box questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-200 bg-slate-50 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedSeoLinks
        title="Related burger box pages"
        links={[
          { href: '/burger-boxes-ireland', label: 'Burger Boxes Ireland', desc: 'Plain and printed hub' },
          { href: '/plain-burger-boxes-ireland', label: 'Plain Burger Boxes', desc: 'Unprinted cases' },
          { href: '/plain-packaging?category=Bagasse+Meal+Box', label: 'Unprinted bagasse boxes', desc: 'Same shapes, sold by the case' },
          { href: '/burger-box-faq-ireland', label: 'Burger Box FAQ', desc: 'Pricing, sizes and delivery' },
          { href: '/burger-box-printing-dublin', label: 'Burger Boxes Dublin', desc: 'Delivery across Dublin' },
          { href: '/burger-box-printing-ashbourne', label: 'Burger Boxes Ashbourne', desc: 'Local collection in Meath' },
          { href: '/blog/burger-boxes-ireland-guide', label: 'Burger Boxes Guide', desc: 'Plain vs printed' },
          { href: '/llms/printed-bagasse-boxes.txt', label: 'Full price list', desc: 'Every size and quantity' },
        ]}
      />

      <section className="bg-emerald-600 py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Price a printed bagasse box</h2>
          <p className="mb-6 text-emerald-100">
            CMYK logo, from 100 boxes. The 6 inch starts at €{START} ex VAT.
          </p>
          <Link href="#configure" className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
            Build a quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}
