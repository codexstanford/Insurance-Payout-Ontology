import { MedicalSpecialty } from "./MedicalSpecialty";


export class MedicalOrganization extends Organization {
  isAcceptingNewPatients: boolean;
  healthPlanNetworkId: string;
  medicalSpecialty: MedicalSpecialty;


}
