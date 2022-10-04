import { BusinessFunction } from "./BusinessFunction";
import { Product,Service } from "./Product,Service";
import { string,string } from "./string,string";


export class TypeAndQuantityNode extends StructuredValue {
  unitText: string;
  businessFunction: BusinessFunction;
  typeOfGood: Product,Service;
  amountOfThisGood: number;
  unitCode: string,string;


}
