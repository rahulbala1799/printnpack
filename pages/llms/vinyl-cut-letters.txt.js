import { vinylLetterMachineText } from '../../data/vinyl-cut-letters';
import { SITE_URL } from '../../lib/site';

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.setHeader('X-Robots-Tag', 'index, follow');
  res.write(vinylLetterMachineText(SITE_URL));
  res.end();
  return { props: {} };
}

export default function VinylCutLettersMachineText() {
  return null;
}
