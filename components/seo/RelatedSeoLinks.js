import Link from 'next/link';

export default function RelatedSeoLinks({ title = 'Related products & guides', links = [] }) {
  if (!links.length) return null;

  return (
    <section className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{label}</p>
              {desc && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
