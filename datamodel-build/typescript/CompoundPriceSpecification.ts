import { UnitPriceSpecification } from "./UnitPriceSpecification";
import { PriceTypeEnumeration,string } from "./PriceTypeEnumeration,string";


export class CompoundPriceSpecification extends PriceSpecification {
  priceComponent: UnitPriceSpecification;
  priceType: PriceTypeEnumeration,string;


}
