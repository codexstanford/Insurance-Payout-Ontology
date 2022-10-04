import { MedicalCondition } from "./MedicalCondition";
import { Drug } from "./Drug";


export class Patient extends MedicalAudience,Person {
  healthCondition: MedicalCondition;
  drug: Drug;
  diagnosis: MedicalCondition;


}
