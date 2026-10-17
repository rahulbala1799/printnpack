import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_WHATSAPP_URL } from '../../lib/site';
import { HeroContactModal } from './HomepageHero';

const xxlSizes = [
  { id: 'xl', label: 'XL', detail: '200 cm wide', note: '€398.96', width: 200, popular: true },
  { id: 'xxl', label: 'XXL', detail: '250 cm wide', note: '€418.49', width: 250 },
  { id: 'xxxl', label: 'XXXL', detail: '300 cm wide', note: '€450', width: 300 },
];

const stretchSizes = [
  { id: '250', label: '2.5 m', detail: '250 × 228 cm', note: 'Compact booth', width: 2.5 },
  { id: '300', label: '3 m', detail: '300 × 230 cm', note: 'Standard wall', width: 3, popular: true },
  { id: '400', label: '4 m', detail: '400 × 230 cm', note: 'Wide back wall', width: 4 },
  { id: '500', label: '5 m', detail: '500 × 230 cm', note: 'Media wall', width: 5 },
  { id: '600', label: '6 m', detail: '600 × 230 cm', note: 'Extra wide', width: 6 },
];

function whatsappLink(productName) {
  return `${SITE_WHATSAPP_URL}?text=${encodeURIComponent(
    `Hi PrintNPack, I'm interested in ${productName}.`
  )}`;
}

function ContactActions({ tone, onContact, productName }) {
  const dark = tone === 'dark';
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={onContact}
        className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${
          dark ? 'bg-white text-slate-950 hover:bg-white/90' : 'bg-slate-950 text-white hover:bg-slate-800'
        }`}
      >
        Contact us
      </button>
      <a
        href={whatsappLink(productName)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex h-12 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition ${
          dark
            ? 'border-white/30 text-white hover:bg-white/10'
            : 'border-slate-200 bg-white text-slate-950 hover:border-slate-300'
        }`}
      >
        <FaWhatsapp className={`h-4 w-4 ${dark ? 'text-emerald-300' : 'text-emerald-600'}`} />
        WhatsApp
      </a>
    </div>
  );
}

function Photo({ src, className = 'object-cover object-[72%_center]' }) {
  return (
    <Image src={src} alt="" fill sizes="100vw" quality={70} className={className} />
  );
}

function XxlSection({ onContact }) {
  const [active, setActive] = useState('xl');

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="relative aspect-[2/1] lg:absolute lg:inset-0 lg:aspect-auto">
        <Photo src="/images/home/xxl-rollup-display.webp" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[48%] bg-slate-950 lg:block" />
      <div className="pointer-events-none absolute inset-y-0 left-[44%] hidden w-28 bg-gradient-to-r from-slate-950 to-transparent lg:block" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-10 sm:px-6 lg:min-h-[600px] lg:px-8 lg:py-16">
        <div className="w-full max-w-md">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            Extra wide roll-up banners
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            XXL banners, up to 3 metres wide
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            Two metres high, indoor, wrinkle-free. Pick a width and we print it on a Silver XL stand.
          </p>

          <div className="mt-8 flex items-end gap-3" role="group" aria-label="XXL banner widths">
            {xxlSizes.map((size) => {
              const selected = size.id === active;
              const width = Math.round(100 * (size.width / 300));
              return (
                <button
                  key={size.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(size.id)}
                  className="flex-1 text-left"
                >
                  <span className="flex h-8 items-end">
                    <span
                      className={`block h-6 rounded-sm transition ${selected ? 'bg-white' : 'bg-white/25 hover:bg-white/40'}`}
                      style={{ width: `${width}%` }}
                    />
                  </span>
                  <span className="mt-3 flex items-center gap-1.5">
                    <span className="text-sm font-semibold">{size.label}</span>
                    {size.popular && (
                      <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide">
                        Popular
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-xs text-white/60">{size.detail}</span>
                  <span className={`mt-1 block text-xs font-semibold ${selected ? 'text-white' : 'text-white/80'}`}>
                    {size.note}
                  </span>
                </button>
              );
            })}
          </div>

          <Link href="/extra-wide-roll-up-banners-ireland" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
            View XXL banners
            <Arrow />
          </Link>
          <ContactActions tone="dark" onContact={onContact} productName="XXL roll-up banners" />
        </div>
      </div>
    </section>
  );
}

function StretchSection({ onContact }) {
  const [activeId, setActiveId] = useState('300');
  const active = stretchSizes.find((size) => size.id === activeId) || stretchSizes[1];

  return (
    <section className="relative overflow-hidden bg-[#f6f3ee] text-slate-950">
      <div className="relative aspect-[2/1] lg:absolute lg:inset-0 lg:aspect-auto">
        <Photo src="/images/home/straight-stretch-display.webp" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[52%] bg-[#f6f3ee] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 left-[48%] hidden w-32 bg-gradient-to-r from-[#f6f3ee] to-transparent lg:block" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-10 sm:px-6 lg:min-h-[600px] lg:px-8 lg:py-16">
        <div className="w-full max-w-lg">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            Straight stretch stand
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-none">
            2.5 m to 6 m wide
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-600 sm:text-base">
            A straight fabric wall for receptions, booths and stages. Frame and graphic, or the print on its own.
          </p>

          <div className="mt-8" role="group" aria-label="Stretch stand widths">
            <div className="relative pt-1">
              <span className="absolute left-6 right-6 top-[13px] h-px bg-stone-300" />
              <span
                className="absolute left-6 top-[13px] h-px bg-slate-950"
                style={{ width: `calc((100% - 3rem) * ${stretchSizes.findIndex((size) => size.id === activeId) / (stretchSizes.length - 1)})` }}
              />
              <div className="relative flex justify-between">
                {stretchSizes.map((size) => {
                  const selected = size.id === activeId;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActiveId(size.id)}
                      className="flex w-12 flex-col items-center"
                    >
                      <span
                        className={`h-3.5 w-3.5 rounded-full border-2 transition ${
                          selected ? 'border-slate-950 bg-slate-950 ring-4 ring-slate-950/10' : 'border-stone-300 bg-[#f6f3ee] hover:border-slate-950'
                        }`}
                      />
                      <span className={`mt-3 text-xs font-semibold sm:text-sm ${selected ? 'text-slate-950' : 'text-stone-500'}`}>
                        {size.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="mt-4 text-sm text-stone-700">
              <span className="font-semibold text-slate-950">{active.detail}</span>
              <span className="text-stone-400"> · </span>
              {active.note}
              {active.popular ? ' · Popular' : ''}
            </p>
          </div>

          <Link href="/fabric-banner-stands-ireland" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
            View stretch stands
            <Arrow />
          </Link>
          <ContactActions onContact={onContact} productName="Straight stretch stands" />
        </div>
      </div>
    </section>
  );
}

function ExhibitionSection({ onContact }) {
  return (
    <section className="bg-white">
      <div className="relative h-[220px] sm:h-[340px] lg:h-[420px]">
        <Photo src="/images/home/exhibition-displays.webp" className="object-cover object-center" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 lg:py-14">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Exhibition displays
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Wall and roll-up, ready for the booth
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Use them together or on their own. The stretch wall holds the back of the stand. The roll-up travels with you.
          </p>
          <ContactActions onContact={onContact} productName="Exhibition displays" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/fabric-banner-stands-ireland"
            className="group flex min-h-[180px] flex-col justify-between rounded-3xl bg-slate-950 p-5 text-white transition hover:-translate-y-0.5"
          >
            <span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Stretch stand</span>
              <span className="mt-3 block text-2xl font-semibold">Fabric wall</span>
              <span className="mt-2 block text-sm text-white/70">2.5 m to 6 m wide, about 2.3 m high.</span>
            </span>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
              View stands
              <Arrow />
            </span>
          </Link>
          <Link
            href="/extra-wide-roll-up-banners-ireland"
            className="group flex min-h-[180px] flex-col justify-between rounded-3xl bg-[#f4efe8] p-5 text-slate-950 transition hover:-translate-y-0.5"
          >
            <span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Roll-up banner</span>
              <span className="mt-3 block text-2xl font-semibold">XXL banner</span>
              <span className="mt-2 block text-sm text-stone-600">2 m high, from 2 m to 3 m wide. From €398.96.</span>
            </span>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
              View banners
              <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export default function FeaturedBannerSections() {
  const [contact, setContact] = useState(null);

  return (
    <div>
      <XxlSection onContact={() => setContact({ productName: 'XXL roll-up banners' })} />
      <StretchSection onContact={() => setContact({ productName: 'Straight stretch stands' })} />
      <ExhibitionSection onContact={() => setContact({ productName: 'Exhibition displays' })} />
      <HeroContactModal
        open={Boolean(contact)}
        productName={contact?.productName || ''}
        onClose={() => setContact(null)}
        source="homepage-banner"
        sourceLabel="Homepage banner section"
      />
    </div>
  );
}
