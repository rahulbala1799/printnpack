import PrintingLocalPage from '../components/seo/PrintingLocalPage';
import { PRINTING_LOCAL_PAGES } from '../data/printing-local';

export default function PrintingDublin() {
  return <PrintingLocalPage config={PRINTING_LOCAL_PAGES.dublin} />;
}
