import { MedicalTherapy } from "./MedicalTherapy";
import { AnatomicalSystem,AnatomicalStructure } from "./AnatomicalSystem,AnatomicalStructure";
import { MedicalCondition } from "./MedicalCondition";


export class SuperficialAnatomy extends MedicalEntity {
  relatedTherapy: MedicalTherapy;
  significance: string;
  relatedAnatomy: AnatomicalSystem,AnatomicalStructure;
  relatedCondition: MedicalCondition;
  associatedPathophysiology: string;


}
