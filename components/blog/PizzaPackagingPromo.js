import Link from 'next/link';

export default function PizzaPackagingPromo() {
  return (
    <div className="my-10 rounded-xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
      <p className="text-slate-700 text-sm leading-relaxed">
        <strong className="text-slate-900">Pizza boxes Ireland:</strong> Browse our{' '}
        <Link href="/pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
          complete pizza box range
        </Link>
        {' '}— custom printed from 500 units or plain wholesale.{' '}
        <Link href="/custom-pizza-boxes-ireland" className="text-blue-600 hover:underline font-medium">
          Get a custom quote
        </Link>
        {' '}or{' '}
        <Link href="/pizza-box-faq-ireland" className="text-blue-600 hover:underline font-medium">
          read the pizza box FAQ →
        </Link>
      </p>
    </div>
  );
}
