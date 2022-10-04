import { PaymentMethod } from "./PaymentMethod";
import { DeliveryMethod } from "./DeliveryMethod";


export class PaymentChargeSpecification extends PriceSpecification {
  appliesToPaymentMethod: PaymentMethod;
  appliesToDeliveryMethod: DeliveryMethod;


}
