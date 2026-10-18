import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroContactModal } from './HomepageHero';

const xxlSizes = [
  { id: 'xl', label: 'XL', detail: '200 cm wide', note: '€398.96', popular: true },
  { id: 'xxl', label: 'XXL', detail: '250 cm wide', note: '€418.49' },
  { id: 'xxxl', label: 'XXXL', detail: '300 cm wide', note: '€450' },
];

const stretchSizes = [
  { id: '250', label: '2.5 m', detail: '250 × 228 cm', note: 'Compact booth' },
  { id: '300', label: '3 m', detail: '300 × 230 cm', note: 'Standard wall', popular: true },
  { id: '400', label: '4 m', detail: '400 × 230 cm', note: 'Wide back wall' },
  { id: '500', label: '5 m', detail: '500 × 230 cm', note: 'Media wall' },
  { id: '600', label: '6 m', detail: '600 × 230 cm', note: 'Extra wide' },
];

const exhibitionChoices = [
  {
    label: 'Fabric wall',
    detail: '2.5 m to 6 m wide',
    href: '/fabric-banner-stands-ireland',
  },
  {
    label: 'XXL banner',
    detail: 'From €398.96',
    href: '/extra-wide-roll-up-banners-ireland',
  },
];

function PanelImage({ src, alt }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#efeae2] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[460px]">
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 92vw, 560px" quality={70} className="object-cover object-[72%_center]" />
    </div>
  );
}

function SplitSection({ imageOnRight, surface = 'cream', eyebrow, title, body, image, alt, children, href, cta, onQuote }) {
  return (
    <section className={surface === 'white' ? 'bg-white' : 'bg-[#f6f3ee]'}>
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16 lg:px-8">
        <div className={imageOnRight ? 'order-1 lg:order-2' : 'order-1'}>
          <PanelImage src={image} alt={alt} />
        </div>
        <div className={imageOnRight ? 'order-2 lg:order-1' : 'order-2'}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-600 sm:text-base">{body}</p>
          <div className="mt-7">{children}</div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={href}
              className="rounded-full bg-neutral-950 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-neutral-800"
            >
              {cta}
            </Link>
            <button
              type="button"
              onClick={onQuote}
              className="rounded-full px-4 py-3 text-[15px] font-semibold text-stone-800 underline-offset-4 hover:underline"
            >
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChoiceButton({ selected, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
        selected ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-800 ring-1 ring-stone-300 hover:ring-stone-400'
      }`}
    >
      {children}
    </button>
  );
}

function XxlSection({ onQuote }) {
  const [activeId, setActiveId] = useState('xl');
  const active = xxlSizes.find((size) => size.id === activeId) || xxlSizes[0];

  return (
    <SplitSection
      imageOnRight
      eyebrow="Extra wide roll-up banners"
      title="XXL banners, up to 3 metres wide"
      body="Two metres high, indoor, wrinkle-free. Pick a width and we print it on a Silver XL stand."
      image="/images/home/xxl-rollup-display.webp"
      alt="Two extra wide roll-up banners standing in a bright room"
      href="/extra-wide-roll-up-banners-ireland"
      cta="View XXL banners"
      onQuote={onQuote}
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="XXL banner widths">
        {xxlSizes.map((size) => (
          <ChoiceButton key={size.id} selected={size.id === activeId} onClick={() => setActiveId(size.id)}>
            {size.label}
            {size.popular ? ' · Popular' : ''}
          </ChoiceButton>
        ))}
      </div>
      <p className="mt-3 text-sm text-stone-700">
        <span className="font-semibold text-neutral-950">{active.detail}</span>
        <span className="text-stone-400"> · </span>
        {active.note}
      </p>
    </SplitSection>
  );
}

function StretchSection({ onQuote }) {
  const [activeId, setActiveId] = useState('300');
  const active = stretchSizes.find((size) => size.id === activeId) || stretchSizes[1];

  return (
    <SplitSection
      surface="white"
      eyebrow="Straight stretch stand"
      title="2.5 m to 6 m wide"
      body="A straight fabric wall for receptions, booths and stages. Frame and graphic, or the print on its own."
      image="/images/home/straight-stretch-display.webp"
      alt="Straight stretch fabric display wall in a bright room"
      href="/fabric-banner-stands-ireland"
      cta="View stretch stands"
      onQuote={onQuote}
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Stretch stand widths">
        {stretchSizes.map((size) => (
          <ChoiceButton key={size.id} selected={size.id === activeId} onClick={() => setActiveId(size.id)}>
            {size.label}
          </ChoiceButton>
        ))}
      </div>
      <p className="mt-3 text-sm text-stone-700">
        <span className="font-semibold text-neutral-950">{active.detail}</span>
        <span className="text-stone-400"> · </span>
        {active.note}
        {active.popular ? ' · Popular' : ''}
      </p>
    </SplitSection>
  );
}

function ExhibitionSection({ onQuote }) {
  return (
    <SplitSection
      imageOnRight
      eyebrow="Exhibition displays"
      title="Wall and roll-up, ready for the booth"
      body="Use them together or on their own. The stretch wall holds the back of the stand. The roll-up travels with you."
      image="/images/home/exhibition-displays.webp"
      alt="A stretch display wall beside an extra wide roll-up banner"
      href="/products?group=banners-stands-frames"
      cta="View displays"
      onQuote={onQuote}
    >
      <div className="flex flex-wrap gap-2">
        {exhibitionChoices.map((choice) => (
          <Link
            key={choice.href}
            href={choice.href}
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 ring-1 ring-stone-300 transition hover:ring-stone-400"
          >
            {choice.label}
            <span className="font-medium text-stone-500"> · {choice.detail}</span>
          </Link>
        ))}
      </div>
    </SplitSection>
  );
}

export default function FeaturedBannerSections() {
  const [contact, setContact] = useState(null);

  return (
    <div>
      <XxlSection onQuote={() => setContact({ productName: 'XXL roll-up banners' })} />
      <StretchSection onQuote={() => setContact({ productName: 'Straight stretch stands' })} />
      <ExhibitionSection onQuote={() => setContact({ productName: 'Exhibition displays' })} />
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
