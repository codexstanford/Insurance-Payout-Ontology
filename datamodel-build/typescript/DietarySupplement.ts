import { RecommendedDoseSchedule } from "./RecommendedDoseSchedule";
import { DrugLegalStatus,string,MedicalEnumeration } from "./DrugLegalStatus,string,MedicalEnumeration";
import { MaximumDoseSchedule } from "./MaximumDoseSchedule";
import { Organization } from "./Organization";


export class DietarySupplement extends Substance {
  targetPopulation: string;
  recommendedIntake: RecommendedDoseSchedule;
  legalStatus: DrugLegalStatus,string,MedicalEnumeration;
  mechanismOfAction: string;
  maximumIntake: MaximumDoseSchedule;
  activeIngredient: string;
  proprietaryName: string;
  nonProprietaryName: string;
  manufacturer: Organization;
  isProprietary: boolean;
  safetyConsideration: string;


}
