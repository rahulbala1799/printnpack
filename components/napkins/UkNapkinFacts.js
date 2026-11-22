import React from 'react';
import {
  UK_DELIVERY_BANDS,
  UK_DELIVERY_TIME,
  UK_PRODUCTION_TIME,
} from '../../data/napkin-uk';

export default function UkNapkinFacts({
  moq,
  sizes = [],
  priceNote,
  material = 'High quality linen-feel airlaid',
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h2 className="text-xl font-bold text-slate-950">Low minimum. {material}.</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        The minimum order is {moq} napkins. Smaller bespoke runs are welcome. This is not a 1,000-unit minimum.
        Prices on this page are indicative, in GBP, ex VAT. UK delivery is charged on top.
      </p>
      {priceNote && <p className="mt-2 text-sm leading-relaxed text-slate-700">{priceNote}</p>}

      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sizes</dt>
          <dd className="mt-1 text-sm text-slate-800">{sizes.join(', ')}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Minimum</dt>
          <dd className="mt-1 text-sm text-slate-800">{moq} napkins</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Production</dt>
          <dd className="mt-1 text-sm text-slate-800">{UK_PRODUCTION_TIME}.</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">UK delivery time</dt>
          <dd className="mt-1 text-sm text-slate-800">{UK_DELIVERY_TIME}</dd>
        </div>
      </dl>

      <h3 className="mt-6 text-sm font-semibold text-slate-950">UK delivery charges</h3>
      <p className="mt-1 text-xs text-slate-500">Indicative postage. The quote confirms the charge for your order. Napkin prices do not include it.</p>
      <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <tbody>
            {UK_DELIVERY_BANDS.map((band) => (
              <tr key={band.label} className="border-t border-slate-100 first:border-t-0">
                <th className="px-3 py-2 text-left font-medium text-slate-700">{band.label}</th>
                <td className="px-3 py-2 text-right font-semibold text-slate-950">{band.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">
        Printed in Ashbourne, Ireland, then posted to the UK. Goods sent to Great Britain pass through UK customs.
        Orders under 2 kg may qualify for a cheaper packet rate.
      </p>
    </section>
  );
}
