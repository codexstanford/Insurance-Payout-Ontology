import { DefinedRegion } from "./DefinedRegion";
import { MonetaryAmount } from "./MonetaryAmount";
import { MonetaryAmount,DeliveryChargeSpecification } from "./MonetaryAmount,DeliveryChargeSpecification";


export class ShippingRateSettings extends StructuredValue {
  shippingDestination: DefinedRegion;
  doesNotShip: boolean;
  shippingLabel: string;
  isUnlabelledFallback: boolean;
  shippingRate: MonetaryAmount;
  freeShippingThreshold: MonetaryAmount,DeliveryChargeSpecification;


}
