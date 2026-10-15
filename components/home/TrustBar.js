import React from 'react';
import Image from 'next/image';

const steps = [
  {
    title: 'Send an enquiry',
    description: 'Tell us the product, quantity and when you need it.',
    image: '/images/process/enquiry.webp',
    alt: 'Customer sending a print enquiry for bags, leaflets and a banner',
  },
  {
    title: 'Quote in 2 hours',
    description: 'A clear price, usually the same morning.',
    image: '/images/process/quote.webp',
    alt: 'Support specialist replying to a quote with a two-hour turnaround',
    highlight: true,
  },
  {
    title: 'Design with us',
    description: 'We help with the artwork and the packaging.',
    image: '/images/process/design.webp',
    alt: 'Designers working together on custom packaging artwork',
  },
  {
    title: 'Approve the quote',
    description: 'You confirm the price before anything is printed.',
    image: '/images/process/approve.webp',
    alt: 'Customer approving a clear quote in euro on a tablet',
  },
  {
    title: 'Printed for you',
    description: 'Wide-format and packaging, made in Ashbourne.',
    image: '/images/process/print.webp',
    alt: 'Wide-format printer producing a colourful banner',
  },
];

const TrustBar = () => (
  <section className="border-y border-slate-100 bg-white py-8 sm:py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:overflow-visible sm:pb-0">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className={`flex w-[11.5rem] shrink-0 snap-start flex-col rounded-3xl px-3 py-4 text-center sm:w-auto ${
              step.highlight ? 'bg-blue-50 ring-1 ring-blue-100' : 'bg-slate-50/80'
            }`}
          >
            <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${step.highlight ? 'text-blue-700' : 'text-slate-400'}`}>
              {String(index + 1).padStart(2, '0')}
            </p>
            <div className="relative mx-auto mt-1 h-28 w-full sm:h-32">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="180px"
                className="object-contain"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
