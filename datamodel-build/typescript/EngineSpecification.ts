import { string,string,QualitativeValue } from "./string,string,QualitativeValue";
import { QuantitativeValue } from "./QuantitativeValue";
import { QualitativeValue,string,string } from "./QualitativeValue,string,string";


export class EngineSpecification extends StructuredValue {
  fuelType: string,string,QualitativeValue;
  torque: QuantitativeValue;
  engineDisplacement: QuantitativeValue;
  enginePower: QuantitativeValue;
  engineType: QualitativeValue,string,string;


}
