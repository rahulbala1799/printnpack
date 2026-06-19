import Link from 'next/link';

export default function PaperBagsPromo() {
  return (
    <div className="my-10 rounded-xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
      <p className="text-slate-700 text-sm leading-relaxed">
        <strong className="text-slate-900">Printed flat handle bags Ireland:</strong> Order{' '}
        <Link href="/printed-flat-handle-bags-ireland" className="text-blue-600 hover:underline font-medium">
          custom printed flat handle paper bags
        </Link>
        {' '}with your logo from 500 units.{' '}
        <Link href="/blog/paper-bags-with-logo-ireland" className="text-blue-600 hover:underline font-medium">
          Compare bag styles
        </Link>
        {' '}or{' '}
        <Link href="/quote" className="text-blue-600 hover:underline font-medium">
          get a free quote →
        </Link>
      </p>
    </div>
  );
}
