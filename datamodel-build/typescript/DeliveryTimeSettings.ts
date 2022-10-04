import { DefinedRegion } from "./DefinedRegion";
import { ShippingDeliveryTime } from "./ShippingDeliveryTime";


export class DeliveryTimeSettings extends StructuredValue {
  shippingDestination: DefinedRegion;
  transitTimeLabel: string;
  isUnlabelledFallback: boolean;
  deliveryTime: ShippingDeliveryTime;


}
