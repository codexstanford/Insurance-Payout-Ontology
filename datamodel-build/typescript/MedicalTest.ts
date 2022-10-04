import { MedicalCondition } from "./MedicalCondition";
import { Drug } from "./Drug";
import { string,MedicalEnumeration } from "./string,MedicalEnumeration";
import { MedicalSign } from "./MedicalSign";
import { MedicalDevice } from "./MedicalDevice";


export class MedicalTest extends MedicalEntity {
  usedToDiagnose: MedicalCondition;
  affectedBy: Drug;
  normalRange: string,MedicalEnumeration;
  signDetected: MedicalSign;
  usesDevice: MedicalDevice;


}
