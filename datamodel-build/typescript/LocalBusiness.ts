import { Organization } from "./Organization";


export class LocalBusiness extends Organization,Place {
  branchOf: Organization;
  openingHours: string;
  priceRange: string;
  paymentAccepted: string;
  currenciesAccepted: string;


}
