import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_WHATSAPP_URL } from '../../lib/site';
import { HeroContactModal } from './HomepageHero';

const BG = '/images/wedding/wedding-table-stationery-napkins-ireland.webp';

const items = [
  {
    href: '/wedding-kraft-napkins-ireland',
    title: 'Kraft wedding napkins',
    description:
      'Brown kraft wedding napkins, printed with names, a date or a monogram. Unbleached paper, 20 × 20 cm or 10 × 20 cm, from 50, delivered across Ireland.',
    image: '/images/wedding/wedding-napkin-20x20-kraft-ar-ireland.webp',
    alt: 'Brown kraft wedding napkins printed with a monogram wreath and the date',
    cta: 'View kraft napkins',
  },
  {
    href: '/wedding-coasters-ireland',
    title: 'Wedding coasters',
    description:
      'Round 9 × 9 cm wedding coasters on 8 ply board, printed in full colour with names, a date or a monogram. From 50, for the drinks reception.',
    image: '/images/wedding/wedding-coaster-terracotta-sophie-daniel-ireland.webp',
    alt: 'Round wedding coasters printed with names, a date and a floral wreath',
    cta: 'View coasters',
  },
];

const WeddingShowcase = () => {
  const [open, setOpen] = useState(false);
  const whatsappHref = `${SITE_WHATSAPP_URL}?text=${encodeURIComponent(
    "Hi PrintNPack, I'm interested in kraft wedding napkins and coasters."
  )}`;

  return (
  <section className="relative overflow-hidden">
    <Image
      src={BG}
      alt=""
      fill
      sizes="100vw"
      className="object-cover object-[center_35%]"
      unoptimized={process.env.NODE_ENV === 'production'}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/62 to-slate-950/45" />
    <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Weddings</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Kraft napkins and coasters for the table
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
          Printed wedding napkins and drink coasters for Irish receptions, made in Ashbourne and delivered nationwide.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#f6efe2] px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2c2822] transition hover:bg-white"
          >
            Contact us
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#e7d7b1]/80 px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f6efe2] transition hover:bg-white/10"
          >
            <FaWhatsapp className="h-4 w-4 text-[#d9c398]" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white/95 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.65)] ring-1 ring-white/40 transition hover:-translate-y-0.5 sm:flex-row"
          >
            <span className="relative block h-48 shrink-0 sm:h-auto sm:w-44">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 180px"
                className="object-cover"
                unoptimized={process.env.NODE_ENV === 'production'}
              />
            </span>
            <span className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="text-lg font-semibold text-slate-950">{item.title}</span>
              <span className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950">
                {item.cta}
                <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
    <HeroContactModal
      open={open}
      productName="Kraft wedding napkins and coasters"
      onClose={() => setOpen(false)}
      source="homepage-wedding"
      sourceLabel="Wedding showcase"
      tone="wedding"
    />
  </section>
  );
};

export default WeddingShowcase;
