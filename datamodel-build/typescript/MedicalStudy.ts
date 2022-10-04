import { MedicalCondition } from "./MedicalCondition";
import { string,EventStatusType,MedicalStudyStatus } from "./string,EventStatusType,MedicalStudyStatus";
import { MedicalEntity } from "./MedicalEntity";
import { AdministrativeArea } from "./AdministrativeArea";
import { Organization,Person } from "./Organization,Person";


export class MedicalStudy extends MedicalEntity {
  healthCondition: MedicalCondition;
  status: string,EventStatusType,MedicalStudyStatus;
  studySubject: MedicalEntity;
  studyLocation: AdministrativeArea;
  sponsor: Organization,Person;


}
