import { string,SizeGroupEnumeration } from "./string,SizeGroupEnumeration";
import { QuantitativeValue } from "./QuantitativeValue";
import { string,SizeSystemEnumeration } from "./string,SizeSystemEnumeration";
import { GenderType,string } from "./GenderType,string";


export class SizeSpecification extends QualitativeValue {
  sizeGroup: string,SizeGroupEnumeration;
  suggestedMeasurement: QuantitativeValue;
  suggestedAge: QuantitativeValue;
  hasMeasurement: QuantitativeValue;
  sizeSystem: string,SizeSystemEnumeration;
  suggestedGender: GenderType,string;


}
