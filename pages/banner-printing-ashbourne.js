import BannerLocalPage from '../components/seo/BannerLocalPage';
import { BANNER_LOCAL_PAGES } from '../data/banner-local';

export default function BannerPrintingAshbourne() {
  return <BannerLocalPage config={BANNER_LOCAL_PAGES.ashbourne} />;
}
