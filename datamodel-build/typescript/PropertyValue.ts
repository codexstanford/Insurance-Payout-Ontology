import { Enumeration,DefinedTerm,string,MeasurementTypeEnumeration,QualitativeValue,StructuredValue,PropertyValue,QuantitativeValue } from "./Enumeration,DefinedTerm,string,MeasurementTypeEnumeration,QualitativeValue,StructuredValue,PropertyValue,QuantitativeValue";
import { string,string } from "./string,string";
import { string,number,StructuredValue,boolean } from "./string,number,StructuredValue,boolean";


export class PropertyValue extends StructuredValue {
  valueReference: Enumeration,DefinedTerm,string,MeasurementTypeEnumeration,QualitativeValue,StructuredValue,PropertyValue,QuantitativeValue;
  propertyID: string,string;
  maxValue: number;
  unitText: string;
  measurementTechnique: string,string;
  minValue: number;
  value: string,number,StructuredValue,boolean;
  unitCode: string,string;


}
