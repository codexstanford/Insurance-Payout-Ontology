import { MedicalSignOrSymptom } from "./MedicalSignOrSymptom";
import { MedicalCondition } from "./MedicalCondition";


export class DDxElement extends MedicalIntangible {
  distinguishingSign: MedicalSignOrSymptom;
  diagnosis: MedicalCondition;


}
