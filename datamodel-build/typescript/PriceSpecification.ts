import { QuantitativeValue } from "./QuantitativeValue";
import { dateTime,date } from "./dateTime,date";
import { PriceSpecification } from "./PriceSpecification";
import { number,string } from "./number,string";


export class PriceSpecification extends StructuredValue {
  minPrice: number;
  eligibleQuantity: QuantitativeValue;
  validFrom: dateTime,date;
  maxPrice: number;
  priceCurrency: string;
  valueAddedTaxIncluded: boolean;
  eligibleTransactionVolume: PriceSpecification;
  validThrough: dateTime,date;
  price: number,string;


}
