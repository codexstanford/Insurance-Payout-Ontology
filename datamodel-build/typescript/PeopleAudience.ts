import { MedicalCondition } from "./MedicalCondition";
import { QuantitativeValue } from "./QuantitativeValue";
import { GenderType,string } from "./GenderType,string";


export class PeopleAudience extends Audience {
  requiredMinAge: number;
  suggestedMaxAge: number;
  healthCondition: MedicalCondition;
  suggestedMeasurement: QuantitativeValue;
  suggestedAge: QuantitativeValue;
  requiredMaxAge: number;
  suggestedMinAge: number;
  requiredGender: string;
  suggestedGender: GenderType,string;


}
