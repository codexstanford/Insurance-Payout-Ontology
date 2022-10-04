import { Person,Audience,Organization } from "./Person,Audience,Organization";
import { DeliveryMethod } from "./DeliveryMethod";


export class ReceiveAction extends TransferAction {
  sender: Person,Audience,Organization;
  deliveryMethod: DeliveryMethod;


}
