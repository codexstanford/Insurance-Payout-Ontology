import { Person,Organization } from "./Person,Organization";
import { RealEstateAgent } from "./RealEstateAgent";


export class RentAction extends TradeAction {
  landlord: Person,Organization;
  realEstateAgent: RealEstateAgent;


}
