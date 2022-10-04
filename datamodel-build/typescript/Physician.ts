import { MedicalTest,MedicalProcedure,MedicalTherapy } from "./MedicalTest,MedicalProcedure,MedicalTherapy";
import { MedicalSpecialty } from "./MedicalSpecialty";
import { Hospital } from "./Hospital";


export class Physician extends MedicalOrganization,MedicalBusiness {
  availableService: MedicalTest,MedicalProcedure,MedicalTherapy;
  medicalSpecialty: MedicalSpecialty;
  hospitalAffiliation: Hospital;


}
