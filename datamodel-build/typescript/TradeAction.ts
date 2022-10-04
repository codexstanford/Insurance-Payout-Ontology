import { PriceSpecification } from "./PriceSpecification";
import { number,string } from "./number,string";


export class TradeAction extends Action {
  priceCurrency: string;
  priceSpecification: PriceSpecification;
  price: number,string;


}
