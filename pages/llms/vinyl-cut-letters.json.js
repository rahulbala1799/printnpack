import { vinylLetterMachineRecord } from '../../data/vinyl-cut-letters';
import { SITE_URL } from '../../lib/site';

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.setHeader('X-Robots-Tag', 'index, follow');
  res.write(JSON.stringify(vinylLetterMachineRecord(SITE_URL), null, 2));
  res.end();
  return { props: {} };
}

export default function VinylCutLettersMachineJson() {
  return null;
}
