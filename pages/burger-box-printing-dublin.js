import BurgerBoxLocalPage from '../components/seo/BurgerBoxLocalPage';
import { BURGER_BOX_LOCAL_PAGES } from '../data/burger-box-local';

export default function BurgerBoxPrintingDublin() {
  return <BurgerBoxLocalPage config={BURGER_BOX_LOCAL_PAGES.dublin} />;
}
