import { Organization,Person } from "./Organization,Person";
import { number,MonetaryAmount } from "./number,MonetaryAmount";


export class MonetaryGrant extends Grant {
  funder: Organization,Person;
  amount: number,MonetaryAmount;


}
