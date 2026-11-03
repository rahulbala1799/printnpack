import PrintedBagasseBoxPage from '../../components/bagasse-boxes/PrintedBagasseBoxPage';
import { PRINTED_BAGASSE_BOXES, getPrintedBagasseBox } from '../../data/printed-bagasse-boxes';

export default function PrintedBagasseSlugPage({ slug }) {
  const box = getPrintedBagasseBox(slug);
  return <PrintedBagasseBoxPage key={slug} box={box} />;
}

export function getStaticPaths() {
  return {
    paths: PRINTED_BAGASSE_BOXES.map((box) => ({ params: { slug: box.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const box = getPrintedBagasseBox(params.slug);
  if (!box) return { notFound: true };
  return { props: { slug: box.slug } };
}
