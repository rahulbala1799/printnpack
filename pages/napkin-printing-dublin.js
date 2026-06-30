import NapkinLocalPage from '../components/seo/NapkinLocalPage';
import { NAPKIN_LOCAL_PAGES } from '../data/napkin-local';

export default function NapkinPrintingDublin() {
  return <NapkinLocalPage config={NAPKIN_LOCAL_PAGES.dublin} />;
}
