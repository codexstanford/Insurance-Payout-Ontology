import { MedicalTherapy } from "./MedicalTherapy";
import { MedicalCondition } from "./MedicalCondition";
import { AnatomicalStructure } from "./AnatomicalStructure";
import { AnatomicalStructure,AnatomicalSystem } from "./AnatomicalStructure,AnatomicalSystem";


export class AnatomicalSystem extends MedicalEntity {
  relatedTherapy: MedicalTherapy;
  relatedCondition: MedicalCondition;
  relatedStructure: AnatomicalStructure;
  associatedPathophysiology: string;
  comprisedOf: AnatomicalStructure,AnatomicalSystem;


}
