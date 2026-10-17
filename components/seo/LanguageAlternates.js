import Link from 'next/link';
import { getAlternates } from '../../data/eu-language-pages';

export function HreflangLinks({ cluster }) {
  return getAlternates(cluster).map((link) => (
    <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} />
  ));
}

export function OgLocaleAlternates({ cluster, currentOg }) {
  return getAlternates(cluster)
    .filter((link) => link.og && link.og !== currentOg)
    .map((link) => <meta key={link.og} property="og:locale:alternate" content={link.og} />);
}

const SWITCH_LABEL = { en: 'Language', fr: 'Langue', de: 'Sprache', es: 'Idioma' };

export function LanguageBar({ cluster, locale }) {
  const links = getAlternates(cluster).filter((link) => link.locale !== 'x-default');

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="text-gray-500">{SWITCH_LABEL[locale] || 'Language'}</span>
        {links.map((link) =>
          link.locale === locale ? (
            <span key={link.locale} className="font-semibold text-gray-900">
              {link.label}
            </span>
          ) : (
            <Link key={link.locale} href={link.path} hrefLang={link.hreflang} className="text-blue-700 hover:underline">
              {link.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
