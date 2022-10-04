import { PriceTypeEnumeration,string } from "./PriceTypeEnumeration,string";
import { string,string } from "./string,string";
import { Duration,QuantitativeValue,number } from "./Duration,QuantitativeValue,number";
import { QuantitativeValue } from "./QuantitativeValue";
import { PriceComponentTypeEnumeration } from "./PriceComponentTypeEnumeration";


export class UnitPriceSpecification extends PriceSpecification {
  priceType: PriceTypeEnumeration,string;
  unitText: string;
  billingIncrement: number;
  unitCode: string,string;
  billingDuration: Duration,QuantitativeValue,number;
  referenceQuantity: QuantitativeValue;
  priceComponentType: PriceComponentTypeEnumeration;
  billingStart: number;


}
