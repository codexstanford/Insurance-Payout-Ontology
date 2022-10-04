import { DefinedRegion } from "./DefinedRegion";
import { ShippingDeliveryTime } from "./ShippingDeliveryTime";
import { MonetaryAmount } from "./MonetaryAmount";


export class OfferShippingDetails extends StructuredValue {
  shippingDestination: DefinedRegion;
  doesNotShip: boolean;
  shippingSettingsLink: string;
  transitTimeLabel: string;
  shippingLabel: string;
  deliveryTime: ShippingDeliveryTime;
  shippingRate: MonetaryAmount;


}
