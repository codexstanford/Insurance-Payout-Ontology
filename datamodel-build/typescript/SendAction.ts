import { Person,Audience,ContactPoint,Organization } from "./Person,Audience,ContactPoint,Organization";
import { DeliveryMethod } from "./DeliveryMethod";


export class SendAction extends TransferAction {
  recipient: Person,Audience,ContactPoint,Organization;
  deliveryMethod: DeliveryMethod;


}
