import { MedicalEvidenceLevel } from "./MedicalEvidenceLevel";
import { MedicalEntity } from "./MedicalEntity";
import { date } from "./date";


export class MedicalGuideline extends MedicalEntity {
  evidenceLevel: MedicalEvidenceLevel;
  evidenceOrigin: string;
  guidelineSubject: MedicalEntity;
  guidelineDate: date;


}
