import { DrugPregnancyCategory } from "./DrugPregnancyCategory";
import { DrugLegalStatus,string,MedicalEnumeration } from "./DrugLegalStatus,string,MedicalEnumeration";
import { Drug } from "./Drug";
import { MaximumDoseSchedule } from "./MaximumDoseSchedule";
import { string,string } from "./string,string";
import { DrugPrescriptionStatus,string } from "./DrugPrescriptionStatus,string";
import { DrugClass } from "./DrugClass";
import { HealthInsurancePlan } from "./HealthInsurancePlan";
import { Organization } from "./Organization";
import { DoseSchedule } from "./DoseSchedule";
import { DrugStrength } from "./DrugStrength";


export class Drug extends Substance {
  pregnancyCategory: DrugPregnancyCategory;
  overdosage: string;
  legalStatus: DrugLegalStatus,string,MedicalEnumeration;
  mechanismOfAction: string;
  clinicalPharmacology: string;
  rxcui: string;
  interactingDrug: Drug;
  dosageForm: string;
  labelDetails: string;
  maximumIntake: MaximumDoseSchedule;
  activeIngredient: string;
  relatedDrug: Drug;
  administrationRoute: string;
  drugUnit: string;
  foodWarning: string;
  warning: string,string;
  prescriptionStatus: DrugPrescriptionStatus,string;
  proprietaryName: string;
  drugClass: DrugClass;
  prescribingInfo: string;
  includedInHealthInsurancePlan: HealthInsurancePlan;
  nonProprietaryName: string;
  manufacturer: Organization;
  isProprietary: boolean;
  clincalPharmacology: string;
  isAvailableGenerically: boolean;
  breastfeedingWarning: string;
  pregnancyWarning: string;
  alcoholWarning: string;
  doseSchedule: DoseSchedule;
  availableStrength: DrugStrength;


}
