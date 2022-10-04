import { HealthPlanFormulary } from "./HealthPlanFormulary";
import { ContactPoint } from "./ContactPoint";
import { string,string } from "./string,string";
import { HealthPlanNetwork } from "./HealthPlanNetwork";


export class HealthInsurancePlan extends Intangible {
  includesHealthPlanFormulary: HealthPlanFormulary;
  benefitsSummaryUrl: string;
  healthPlanDrugOption: string;
  healthPlanDrugTier: string;
  healthPlanId: string;
  contactPoint: ContactPoint;
  usesHealthPlanIdStandard: string,string;
  includesHealthPlanNetwork: HealthPlanNetwork;
  healthPlanMarketingUrl: string;


}
