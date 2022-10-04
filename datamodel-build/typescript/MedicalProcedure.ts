import { MedicalProcedureType } from "./MedicalProcedureType";
import { MedicalEntity,string } from "./MedicalEntity,string";
import { string,EventStatusType,MedicalStudyStatus } from "./string,EventStatusType,MedicalStudyStatus";


export class MedicalProcedure extends MedicalEntity {
  procedureType: MedicalProcedureType;
  preparation: MedicalEntity,string;
  bodyLocation: string;
  status: string,EventStatusType,MedicalStudyStatus;
  howPerformed: string;
  followup: string;


}
