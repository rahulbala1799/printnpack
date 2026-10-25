import { ribbonMachineRecord } from '../../data/ribbons';
import { SITE_URL } from '../../lib/site';

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.setHeader('X-Robots-Tag', 'index, follow');
  res.write(JSON.stringify(ribbonMachineRecord(SITE_URL)));
  res.end();
  return { props: {} };
}

export default function PrintedRibbonMachineJson() {
  return null;
}
