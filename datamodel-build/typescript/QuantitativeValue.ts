import { Enumeration,DefinedTerm,string,MeasurementTypeEnumeration,QualitativeValue,StructuredValue,PropertyValue,QuantitativeValue } from "./Enumeration,DefinedTerm,string,MeasurementTypeEnumeration,QualitativeValue,StructuredValue,PropertyValue,QuantitativeValue";
import { string,number,StructuredValue,boolean } from "./string,number,StructuredValue,boolean";
import { string,string } from "./string,string";
import { PropertyValue } from "./PropertyValue";


export class QuantitativeValue extends StructuredValue {
  valueReference: Enumeration,DefinedTerm,string,MeasurementTypeEnumeration,QualitativeValue,StructuredValue,PropertyValue,QuantitativeValue;
  maxValue: number;
  unitText: string;
  minValue: number;
  value: string,number,StructuredValue,boolean;
  unitCode: string,string;
  additionalProperty: PropertyValue;


}
