import { WarrantyPromise } from "./WarrantyPromise";
import { Person,Organization } from "./Person,Organization";


export class SellAction extends TradeAction {
  warrantyPromise: WarrantyPromise;
  buyer: Person,Organization;


}
