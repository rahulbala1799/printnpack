import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';
import NcrPadConfigurator from '../components/ncr-pads/NcrPadConfigurator';
import RelatedSeoLinks from '../components/seo/RelatedSeoLinks';
import { NCR_PAD_IMAGES, NCR_PAD_PAGE_PATH } from '../data/ncr-pads-options';

const PAGE_URL = `${SITE_URL}${NCR_PAD_PAGE_PATH}`;

const specs = [
  { label: 'Sizes', value: 'A6 (105 x 148 mm), A5 (148 x 210 mm), A4 (210 x 297 mm)' },
  { label: 'Parts', value: '2-part (duplicate) or 3-part (triplicate)' },
  { label: 'Copy sheet colours', value: 'Yellow, blue, pink, green or white (2-part). Yellow and pink, yellow and blue, or blue and pink (3-part)' },
  { label: 'Sets per pad', value: '25, 50 or 100' },
  { label: 'Printing', value: 'Full colour or PMS on the front. Back unprinted or black' },
  { label: 'Copy sheets', value: 'Printed in black' },
  { label: 'Binding', value: 'Upper bound or left bound' },
  { label: 'Numbering', value: 'Available with PMS printing only' },
  { label: 'Writable', value: 'Yes' },
  { label: 'Material options', value: 'No additional material options' },
];

const guidelines = [
  'Send your artwork as a print-ready PDF where possible.',
  'Copy sheets are printed in black, whatever colour the original is printed in.',
  'If your design has a coloured background, it will be printed on the second page in grey.',
  'If you need lines or tables printed, include them in your artwork. We do not add them for you.',
  'Numbering is only available with PMS printing. If you need numbering with full colour (CMYK) print, ask us for a quote.',
  'Leave clear writing space. Pressure is needed to transfer to the copies, so avoid dark or busy areas where people will write.',
];

const steps = [
  { title: 'Choose your specification', body: 'Pick the size, printing, copy colours, sets per pad, binding and numbering above.' },
  { title: 'Ask for a call or email back', body: 'Leave your name, email and phone number. We get your request with the product and options you chose.' },
  { title: 'We confirm price and artwork', body: 'We come back to you with a price and what we need from you for the artwork.' },
  { title: 'Approve and we print', body: 'Once everything is agreed, your NCR pads are printed and delivered.' },
];

const faqs = [
  {
    q: 'What are NCR pads?',
    a: 'NCR pads, also called carbonless duplicate or triplicate books, are invoice and docket books where what you write on the top sheet transfers to the copy sheets underneath, with no carbon paper.',
  },
  {
    q: 'What is the difference between duplicate and triplicate?',
    a: 'Duplicate (2-part) books have an original and one copy sheet. Triplicate (3-part) books have an original and two copy sheets in different colours so each copy is easy to tell apart.',
  },
  {
    q: 'What sizes can I order?',
    a: 'A6, A5 and A4, with 25, 50 or 100 sets per pad. Need something else? Tell us when we call you back.',
  },
  {
    q: 'Can the pads be numbered?',
    a: 'Yes, but only with PMS printing. If you need numbering with full colour (CMYK) print, ask us for a quote.',
  },
  {
    q: 'What colour are the copies printed in?',
    a: 'The copy sheets are printed in black. If your design has a coloured background, it prints on the second page in grey.',
  },
  {
    q: 'Can you print lines or tables on the pad?',
    a: 'Yes, as long as they are included in the artwork you send us.',
  },
  {
    q: 'How do I get a price?',
    a: 'Choose your options, press "Get a call / email back" and leave your name, email and phone number. We will get back to you with a price.',
  },
];

const description =
  'Custom printed NCR pads (invoice and docket books) in duplicate or triplicate. A6, A5 and A4, 25, 50 or 100 sets per pad, PMS or full colour printing, optional numbering. Get a call or email back with a price.';
const title = 'NCR Pads Ireland | Invoice & Docket Books, Duplicate & Triplicate | PrintNPack';

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
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
    { '@type': 'ListItem', position: 3, name: 'NCR Pads', item: PAGE_URL },
  ],
};

const tabs = [
  ['product-info', 'Product info'],
  ['specifications', 'Specifications'],
  ['design-guidelines', 'Design guidelines'],
  ['faqs', "FAQ's"],
  ['ordering-process', 'Ordering process'],
];

export default function NcrPadsIreland() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="ncr pads ireland, invoice books, docket books, duplicate books, triplicate books, carbonless pads, custom ncr books"
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}${NCR_PAD_IMAGES[0].src}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}${NCR_PAD_IMAGES[0].src}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <nav className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-slate-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-slate-700">Products</Link></li>
            <li>/</li>
            <li className="text-slate-800 font-medium">NCR Pads</li>
          </ol>
        </div>
      </nav>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NcrPadConfigurator />
        </div>
      </section>

      <div className="border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-6 overflow-x-auto text-sm font-medium text-slate-600">
            {tabs.map(([id, label]) => (
              <li key={id} className="shrink-0">
                <a href={`#${id}`} className="block py-4 hover:text-slate-900">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section id="product-info" className="py-12 lg:py-16 bg-slate-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Description</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            With printed NCR pads, you can effortlessly replicate handwritten invoices, order details, or client notes across
            multiple copies at once. Say goodbye to tedious manual duplication and embrace consistency and time-saving with
            custom NCR pads. The copy sheets will be printed in black.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Choose from A6, A5, and A4 sizes with 25, 50 or 100 sets. Elevate your brand&apos;s professionalism with personalised
            NCR pads with your logo or design today.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Numbering is only available with PMS printing. If you need numbering with full colour (CMYK) print, ask us for a quote.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong className="text-slate-800">Note:</strong> If your design has a coloured background, it will be printed on the
            second page in grey. If you require lines or tables printed, please include them in your artwork submission.
          </p>
          <ul className="space-y-1 text-slate-700">
            <li>Available with numbering (only with PMS printing)</li>
            <li>Writable</li>
            <li>No additional material options</li>
          </ul>
        </div>
      </section>

      <section id="specifications" className="py-12 lg:py-16 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Product specifications</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                {specs.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="w-1/3 bg-slate-50 px-4 py-3 text-left font-medium text-slate-600 align-top">{row.label}</th>
                    <td className="px-4 py-3 text-slate-900">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="design-guidelines" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Design guidelines</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed">
            {guidelines.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faqs" className="py-12 lg:py-16 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ordering-process" className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ordering process</h2>
          <ol className="space-y-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RelatedSeoLinks
        title="More print"
        links={[
          { href: '/business-cards-ireland', label: 'Business Cards', desc: '85 x 55 mm cards on 350 gsm' },
          { href: '/services/leaflets', label: 'Leaflets', desc: 'Flat leaflet printing' },
          { href: '/printing-ireland', label: 'Printing Services', desc: 'Print across Ireland' },
          { href: '/products', label: 'All Products', desc: 'Print and packaging catalogue' },
        ]}
      />
    </Layout>
  );
}
