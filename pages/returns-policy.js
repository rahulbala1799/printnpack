import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_URL } from '../lib/site';

const PAGE_URL = `${SITE_URL}/returns-policy`;

const SECTIONS = [
  {
    title: 'All sales are final',
    body: 'Every sale is final. This applies especially to custom and made-to-order products, which are printed or produced for your order. We only consider a return or refund when the product arrives damaged.',
  },
  {
    title: 'Damaged products',
    body: 'If a delivery arrives damaged, open the parcel and photograph the damage as soon as you can. Include clear photos of the product, the outer packaging, and the delivery label. We need those photos within 20 hours of the delivery time. Send them to info@printnpack.ie with your order details so we can review the damage.',
  },
  {
    title: 'Shipping delays',
    body: 'Courier delays and slow transit are outside our control. We do not issue a refund because a delivery is late.',
  },
  {
    title: 'Wrong or updated addresses',
    body: 'An incorrect delivery address takes time to correct, and changing an address after an order is placed also takes time. If a delay comes from a wrong address, or from a request to update the address, that delay is outside our control.',
  },
  {
    title: 'Sample images',
    body: 'Many of our customers are a long way from our workshop in Ashbourne, and we process orders as quickly as we can. We do our best to send sample images that are as close to the finished product as possible, so you can check the job before it is made.',
  },
  {
    title: 'Plain packaging',
    body: 'We do not accept returns of plain packaging unless there is a good reason. We will try to accommodate a request where we can. If the packaging has been opened and the product you ordered was delivered, we cannot accept a return.',
  },
];

const ReturnsPolicyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Returns Policy | PrintNPack</title>
        <meta
          name="description"
          content="PrintNPack returns policy. Sales are final, especially for custom products. Damage must be photographed within 20 hours of delivery. No refunds for courier delays."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Returns Policy | PrintNPack" />
        <meta
          property="og:description"
          content="Sales are final unless a product arrives damaged. Photograph damage within 20 hours of delivery."
        />
        <meta property="og:url" content={PAGE_URL} />
      </Head>

      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Returns policy</h1>
            <p className="text-xl text-blue-100">
              How we handle damaged deliveries, delays, and returns
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded mt-8"></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-10">
              PrintNPack prints and supplies packaging from Ashbourne, Co. Meath. Please read this policy before you order. If something arrives damaged, contact us straight away.
            </p>

            <div className="space-y-8">
              {SECTIONS.map((section, index) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    <span className="text-blue-600 mr-2">{index + 1}.</span>
                    {section.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{section.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Contact us about a delivery</h2>
              <p className="text-gray-700 mb-4">
                Email{' '}
                <a href="mailto:info@printnpack.ie" className="text-blue-600 hover:underline">
                  info@printnpack.ie
                </a>{' '}
                or call{' '}
                <a href={`tel:${SITE_PHONE_TEL}`} className="text-blue-600 hover:underline">
                  {SITE_PHONE_DISPLAY}
                </a>
                . Include your order details and, for damaged goods, the photos taken within 20 hours of delivery.
              </p>
              <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                Go to the contact page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnsPolicyPage;
