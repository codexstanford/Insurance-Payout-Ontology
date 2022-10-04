import { dateTime } from "./dateTime";
import { Product,Service } from "./Product,Service";
import { Organization,Person } from "./Organization,Person";


export class OwnershipInfo extends StructuredValue {
  ownedFrom: dateTime;
  typeOfGood: Product,Service;
  acquiredFrom: Organization,Person;
  ownedThrough: dateTime;


}
