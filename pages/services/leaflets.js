import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { SITE_URL } from '../../lib/site';
import { buildProductLd } from '../../lib/schema';

const PAGE_URL = `${SITE_URL}/services/leaflets`;

const productLd = buildProductLd({
  name: 'Leaflets Ireland',
  description:
    'Professional leaflet printing across Ireland — flat leaflets, folded flyers, and promotional materials on premium paper stocks with fast turnaround and nationwide delivery.',
  image: `${SITE_URL}/images/hero/leaflet.svg`,
  url: PAGE_URL,
  price: '0.05',
});

const pageFaqs = [
  {
    q: 'Where can I get leaflets printed in Ireland?',
    a: 'PrintNPack provides professional leaflet printing across Ireland — flat leaflets, folded flyers, and promotional materials on premium paper stocks with fast turnaround and nationwide delivery.',
  },
  {
    q: 'What is a flat leaflet?',
    a: 'A flat leaflet is a single-sheet printed flyer without folds — ideal for handouts, door drops, and point-of-sale promotions. We print A6, A5, A4, and DL sizes with gloss or matt finishes.',
  },
  {
    q: 'Do you offer leaflet design services?',
    a: 'Yes. Our team can design eye-catching leaflets or print from your supplied artwork. Contact us for a quote on design and printing.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pageFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const LeafletsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Leaflets Ireland | Flat Leaflet Printing &amp; Design | PrintNPack</title>
        <meta name="description" content="Leaflets Ireland — flat leaflet printing, flyer design &amp; promotional materials. Premium paper, fast turnaround, nationwide delivery from PrintNPack." />
        <meta name="keywords" content="leaflets ireland, flat leaflets, leaflet printing ireland, flyer printing ireland, promotional leaflets, business flyers ireland, print leaflets dublin" />
        <meta property="og:title" content="Leaflets Ireland | Flat Leaflet Printing & Design" />
        <meta property="og:description" content="Professional leaflet printing in Ireland. Flat leaflets, folded flyers, design services, fast delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leaflets Ireland — Flat Leaflet Printing &amp; Design</h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional <strong>leaflets Ireland</strong> businesses trust — including <strong>flat leaflets</strong>, folded flyers, and promotional handouts. Eye-catching design, premium printing, and fast nationwide delivery.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="bg-white border border-blue-100 rounded-xl px-4 py-2 text-center shadow-sm">
                <div className="text-sm font-bold text-gray-900">From €0.05</div>
                <div className="text-xs text-gray-500">per leaflet</div>
              </div>
            </div>
            
            <Link 
              href="/quote"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Leaflet Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Professional Design</h3>
                <p className="text-gray-600">Our experienced designers create eye-catching layouts that engage your audience and drive action.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Quality Printing</h3>
                <p className="text-gray-600">High-quality paper stocks and premium inks ensure your leaflets look professional and make a lasting impression.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Fast Turnaround</h3>
                <p className="text-gray-600">Quick printing and delivery services to meet your marketing campaign deadlines.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Flexible Options</h3>
                <p className="text-gray-600">Choose from various sizes, paper types, and finishing options to suit your needs and budget.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leaflet Printing FAQs</h2>
            <div className="space-y-4 mb-12">
              {pageFaqs.map(({ q, a }) => (
                <div key={q} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600">{a}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Contact us today to discuss your leaflet printing needs. We&apos;ll help you create marketing materials that get results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/quote"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request a Quote <FaArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/blog/leaflet-printing-ireland-guide"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  Read Leaflet Printing Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeafletsPage;
