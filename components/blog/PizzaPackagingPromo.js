import Link from 'next/link';

export default function PizzaPackagingPromo() {
  return (
    <div className="my-10 rounded-xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
      <p className="text-slate-700 text-sm leading-relaxed">
        <strong className="text-slate-900">Custom pizza boxes:</strong> Order{' '}
        <Link href="/custom-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
          branded pizza boxes in Ireland
        </Link>
        {' '}with full-colour print, food-safe board, sizes 7&quot;–20&quot;, MOQ from 500, and nationwide delivery.{' '}
        <Link href="/blog/pizza-box-sizes-ireland" className="text-blue-600 hover:underline font-medium">
          Compare 7&quot;, 12&quot;, and 14&quot; sizes →
        </Link>
      </p>
    </div>
  );
}
