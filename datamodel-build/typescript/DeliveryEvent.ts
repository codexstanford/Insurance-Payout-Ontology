import { dateTime } from "./dateTime";
import { DeliveryMethod } from "./DeliveryMethod";


export class DeliveryEvent extends Event {
  accessCode: string;
  availableThrough: dateTime;
  hasDeliveryMethod: DeliveryMethod;
  availableFrom: dateTime;


}
