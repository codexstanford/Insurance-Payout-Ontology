import { OpeningHoursSpecification } from "./OpeningHoursSpecification";
import { dateTime,date } from "./dateTime,date";


export class LocationFeatureSpecification extends PropertyValue {
  hoursAvailable: OpeningHoursSpecification;
  validFrom: dateTime,date;
  validThrough: dateTime,date;


}
