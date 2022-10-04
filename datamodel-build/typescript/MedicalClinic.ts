import { MedicalTest,MedicalProcedure,MedicalTherapy } from "./MedicalTest,MedicalProcedure,MedicalTherapy";
import { MedicalSpecialty } from "./MedicalSpecialty";


export class MedicalClinic extends MedicalOrganization,MedicalBusiness {
  availableService: MedicalTest,MedicalProcedure,MedicalTherapy;
  medicalSpecialty: MedicalSpecialty;


}
