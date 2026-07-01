import BurgerBoxLocalPage from '../components/seo/BurgerBoxLocalPage';
import { BURGER_BOX_LOCAL_PAGES } from '../data/burger-box-local';

export default function BurgerBoxPrintingAshbourne() {
  return <BurgerBoxLocalPage config={BURGER_BOX_LOCAL_PAGES.ashbourne} />;
}
