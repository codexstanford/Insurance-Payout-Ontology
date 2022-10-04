import { QuantitativeValue,number } from "./QuantitativeValue,number";
import { Audience } from "./Audience";
import { Rating } from "./Rating";
import { LocationFeatureSpecification } from "./LocationFeatureSpecification";
import { string,Language } from "./string,Language";
import { dateTime,time } from "./dateTime,time";
import { string,boolean } from "./string,boolean";


export class LodgingBusiness extends LocalBusiness {
  numberOfRooms: QuantitativeValue,number;
  audience: Audience;
  starRating: Rating;
  amenityFeature: LocationFeatureSpecification;
  availableLanguage: string,Language;
  checkoutTime: dateTime,time;
  checkinTime: dateTime,time;
  petsAllowed: string,boolean;


}
