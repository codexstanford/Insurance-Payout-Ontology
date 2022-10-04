import { Accommodation } from "./Accommodation";
import { QuantitativeValue,number } from "./QuantitativeValue,number";
import { QuantitativeValue } from "./QuantitativeValue";
import { LocationFeatureSpecification } from "./LocationFeatureSpecification";
import { number,QuantitativeValue } from "./number,QuantitativeValue";
import { string,boolean } from "./string,boolean";
import { ImageObject,string } from "./ImageObject,string";


export class FloorPlan extends Intangible {
  isPlanForApartment: Accommodation;
  numberOfBathroomsTotal: number;
  numberOfRooms: QuantitativeValue,number;
  numberOfAccommodationUnits: QuantitativeValue;
  numberOfAvailableAccommodationUnits: QuantitativeValue;
  amenityFeature: LocationFeatureSpecification;
  numberOfBedrooms: number,QuantitativeValue;
  numberOfPartialBathrooms: number;
  floorSize: QuantitativeValue;
  numberOfFullBathrooms: number;
  petsAllowed: string,boolean;
  layoutImage: ImageObject,string;


}
