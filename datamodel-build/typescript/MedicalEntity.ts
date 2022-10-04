import { DrugLegalStatus,string,MedicalEnumeration } from "./DrugLegalStatus,string,MedicalEnumeration";
import { Grant } from "./Grant";
import { MedicalStudy } from "./MedicalStudy";
import { MedicalCode } from "./MedicalCode";
import { MedicalGuideline } from "./MedicalGuideline";
import { Organization } from "./Organization";
import { MedicineSystem } from "./MedicineSystem";
import { MedicalSpecialty } from "./MedicalSpecialty";


export class MedicalEntity extends Thing {
  legalStatus: DrugLegalStatus,string,MedicalEnumeration;
  funding: Grant;
  study: MedicalStudy;
  code: MedicalCode;
  guideline: MedicalGuideline;
  recognizingAuthority: Organization;
  medicineSystem: MedicineSystem;
  relevantSpecialty: MedicalSpecialty;


}
