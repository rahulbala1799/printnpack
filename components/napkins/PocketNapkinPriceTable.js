import React from 'react';
import { POCKET_NAPKIN_PRICE_ROWS, formatPocketEuro } from '../../data/pocket-napkins';

export default function PocketNapkinPriceTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-sm">
      <table className="min-w-full text-left text-sm">
        <caption className="border-b border-slate-200 bg-slate-950 px-4 py-4 text-left text-white">
          <span className="block text-base font-semibold">Pocket napkin prices, ex VAT</span>
          <span className="mt-1 block text-sm font-normal text-slate-300">
            The order total is the price. It is the 10 × 10 cm cocktail napkin total plus 10%.
          </span>
        </caption>
        <thead className="bg-slate-100 text-slate-900">
          <tr>
            <th className="px-4 py-3 font-semibold">Quantity</th>
            <th className="px-4 py-3 font-semibold">Cocktail napkin total</th>
            <th className="px-4 py-3 font-semibold">Pocket napkin total</th>
            <th className="px-4 py-3 font-semibold">Pocket price each</th>
          </tr>
        </thead>
        <tbody>
          {POCKET_NAPKIN_PRICE_ROWS.map((row, index) => (
            <tr key={row.qty} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <td className="px-4 py-3 font-semibold text-slate-950">{row.qty.toLocaleString('en-IE')}</td>
              <td className="px-4 py-3 text-slate-600">{formatPocketEuro(row.cocktailTotal)}</td>
              <td className="px-4 py-3 text-base font-bold text-slate-950">{formatPocketEuro(row.total)}</td>
              <td className="px-4 py-3 text-slate-800">{formatPocketEuro(row.unit)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
