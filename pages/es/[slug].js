import EuLanguagePage from '../../components/seo/EuLanguagePage';
import { getLocalePage, getLocaleStaticPaths } from '../../data/eu-language-pages';

export default function SpanishMarketPage({ page }) {
  return <EuLanguagePage page={page} />;
}

export function getStaticPaths() {
  return { paths: getLocaleStaticPaths('es'), fallback: false };
}

export function getStaticProps({ params }) {
  const page = getLocalePage('es', params.slug);
  if (!page) return { notFound: true };
  return { props: { page } };
}
