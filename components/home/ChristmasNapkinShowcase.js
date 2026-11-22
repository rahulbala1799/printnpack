import React from 'react';
import Link from 'next/link';
import {
  POCKET_NAPKIN_DESIGNS,
  POCKET_NAPKIN_PATH,
  POCKET_NAPKIN_PRICE_ROWS,
  formatPocketEuro,
} from '../../data/pocket-napkins';

const featured = POCKET_NAPKIN_DESIGNS.slice(0, 4);
const fiveHundred = POCKET_NAPKIN_PRICE_ROWS.find((row) => row.qty === 500);

export default function ChristmasNapkinShowcase() {
  return (
    <section className="bg-[#14261c] text-[#f6efe2]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d9c398]">Christmas pocket napkins</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Printed pocket napkins for the Christmas table
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
              A folded pocket for the fork and knife, printed with your name. 500 pocket napkins are {formatPocketEuro(fiveHundred.total)} ex VAT, 10% above our cocktail napkins. Printed in Ashbourne.
            </p>
          </div>
          <Link
            href={POCKET_NAPKIN_PATH}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#f6efe2] px-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1c3a2e] transition hover:bg-white"
          >
            See pocket napkin prices
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <Link
              key={item.id}
              href={`${POCKET_NAPKIN_PATH}#quote-builder`}
              className="group overflow-hidden rounded-3xl bg-white text-slate-950 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.65)]"
            >
              <span className="block aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.web} alt={item.alt} width={1100} height={1100} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
              </span>
              <span className="block px-4 py-4">
                <span className="block font-semibold">{item.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-600">{item.blurb}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
