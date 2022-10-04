import { WarrantyPromise } from "./WarrantyPromise";
import { Organization,Person } from "./Organization,Person";
import { Person,Organization } from "./Person,Organization";


export class BuyAction extends TradeAction {
  warrantyPromise: WarrantyPromise;
  seller: Organization,Person;
  vendor: Person,Organization;


}
