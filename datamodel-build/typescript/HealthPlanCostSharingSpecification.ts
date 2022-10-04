import { PriceSpecification } from "./PriceSpecification";


export class HealthPlanCostSharingSpecification extends Intangible {
  healthPlanCoinsuranceRate: number;
  healthPlanCoinsuranceOption: string;
  healthPlanPharmacyCategory: string;
  healthPlanCopay: PriceSpecification;
  healthPlanCopayOption: string;


}
