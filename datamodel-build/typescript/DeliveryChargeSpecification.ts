import { Place,string,GeoShape } from "./Place,string,GeoShape";
import { GeoShape,string,Place } from "./GeoShape,string,Place";
import { AdministrativeArea,GeoShape,string,Place } from "./AdministrativeArea,GeoShape,string,Place";
import { DeliveryMethod } from "./DeliveryMethod";


export class DeliveryChargeSpecification extends PriceSpecification {
  ineligibleRegion: Place,string,GeoShape;
  eligibleRegion: GeoShape,string,Place;
  areaServed: AdministrativeArea,GeoShape,string,Place;
  appliesToDeliveryMethod: DeliveryMethod;


}
