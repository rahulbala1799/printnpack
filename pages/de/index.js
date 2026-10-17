import { EuLanguageIndex } from '../../components/seo/EuLanguagePage';
import { getLocaleIndex } from '../../data/eu-language-pages';

export default function GermanIndex({ index }) {
  return <EuLanguageIndex index={index} />;
}

export function getStaticProps() {
  return { props: { index: getLocaleIndex('de') } };
}
