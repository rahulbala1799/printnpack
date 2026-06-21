import StampLocalPage from '../components/seo/StampLocalPage';
import { STAMP_LOCAL_PAGES } from '../data/rubber-stamp-local';

export default function RubberStampPrintingDublin() {
  return <StampLocalPage config={STAMP_LOCAL_PAGES.dublin} />;
}
