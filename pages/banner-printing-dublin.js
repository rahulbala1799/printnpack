import BannerLocalPage from '../components/seo/BannerLocalPage';
import { BANNER_LOCAL_PAGES } from '../data/banner-local';

export default function BannerPrintingDublin() {
  return <BannerLocalPage config={BANNER_LOCAL_PAGES.dublin} />;
}
