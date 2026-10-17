import EuLanguagePage from '../../components/seo/EuLanguagePage';
import { getLocalePage, getLocaleStaticPaths } from '../../data/eu-language-pages';

export default function GermanMarketPage({ page }) {
  return <EuLanguagePage page={page} />;
}

export function getStaticPaths() {
  return { paths: getLocaleStaticPaths('de'), fallback: false };
}

export function getStaticProps({ params }) {
  const page = getLocalePage('de', params.slug);
  if (!page) return { notFound: true };
  return { props: { page } };
}
