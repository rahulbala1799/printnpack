import { inhakerMachineText } from '../../data/inhaker-stands';
import { SITE_URL } from '../../lib/site';

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.setHeader('X-Robots-Tag', 'index, follow');
  res.write(inhakerMachineText(SITE_URL));
  res.end();
  return { props: {} };
}

export default function ExhibitionWallsMachineText() {
  return null;
}
