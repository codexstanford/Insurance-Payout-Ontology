import { PostalAddress } from "./PostalAddress";
import { Product } from "./Product";
import { Organization,Person } from "./Organization,Person";
import { date,dateTime } from "./date,dateTime";
import { DeliveryEvent } from "./DeliveryEvent";
import { Organization } from "./Organization";
import { DeliveryMethod } from "./DeliveryMethod";
import { Order } from "./Order";


export class ParcelDelivery extends Intangible {
  originAddress: PostalAddress;
  trackingNumber: string;
  itemShipped: Product;
  provider: Organization,Person;
  trackingUrl: string;
  deliveryAddress: PostalAddress;
  expectedArrivalUntil: date,dateTime;
  deliveryStatus: DeliveryEvent;
  expectedArrivalFrom: date,dateTime;
  carrier: Organization;
  hasDeliveryMethod: DeliveryMethod;
  partOfOrder: Order;


}
