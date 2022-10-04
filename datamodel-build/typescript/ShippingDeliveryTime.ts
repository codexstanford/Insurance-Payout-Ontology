import { QuantitativeValue } from "./QuantitativeValue";
import { OpeningHoursSpecification } from "./OpeningHoursSpecification";
import { time } from "./time";


export class ShippingDeliveryTime extends StructuredValue {
  transitTime: QuantitativeValue;
  businessDays: OpeningHoursSpecification;
  handlingTime: QuantitativeValue;
  cutoffTime: time;


}
