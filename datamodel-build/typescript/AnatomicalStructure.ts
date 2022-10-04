import { AnatomicalStructure } from "./AnatomicalStructure";
import { AnatomicalSystem } from "./AnatomicalSystem";
import { MedicalTherapy } from "./MedicalTherapy";
import { ImageObject } from "./ImageObject";
import { MedicalCondition } from "./MedicalCondition";


export class AnatomicalStructure extends MedicalEntity {
  bodyLocation: string;
  connectedTo: AnatomicalStructure;
  partOfSystem: AnatomicalSystem;
  relatedTherapy: MedicalTherapy;
  diagram: ImageObject;
  relatedCondition: MedicalCondition;
  subStructure: AnatomicalStructure;
  associatedPathophysiology: string;


}
