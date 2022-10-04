import { UnitPriceSpecification } from "./UnitPriceSpecification";
import { number,MonetaryAmount } from "./number,MonetaryAmount";


export class ExchangeRateSpecification extends StructuredValue {
  currentExchangeRate: UnitPriceSpecification;
  exchangeRateSpread: number,MonetaryAmount;
  currency: string;


}
