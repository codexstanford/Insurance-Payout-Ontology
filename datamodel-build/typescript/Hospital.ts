import { MedicalTest,MedicalProcedure,MedicalTherapy } from "./MedicalTest,MedicalProcedure,MedicalTherapy";
import { Dataset,CDCPMDRecord } from "./Dataset,CDCPMDRecord";
import { MedicalSpecialty } from "./MedicalSpecialty";


export class Hospital extends MedicalOrganization,EmergencyService,CivicStructure {
  availableService: MedicalTest,MedicalProcedure,MedicalTherapy;
  healthcareReportingData: Dataset,CDCPMDRecord;
  medicalSpecialty: MedicalSpecialty;


}
