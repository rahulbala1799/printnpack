import PizzaBoxLocalPage from '../components/seo/PizzaBoxLocalPage';
import { PIZZA_BOX_LOCAL_PAGES } from '../data/pizza-box-local';

export default function PizzaBoxPrintingAshbourne() {
  return <PizzaBoxLocalPage config={PIZZA_BOX_LOCAL_PAGES.ashbourne} />;
}
