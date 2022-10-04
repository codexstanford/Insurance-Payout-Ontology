import { QuantitativeValue,number } from "./QuantitativeValue,number";
import { QuantitativeValue,Duration } from "./QuantitativeValue,Duration";
import { LocationFeatureSpecification } from "./LocationFeatureSpecification";
import { number,QuantitativeValue } from "./number,QuantitativeValue";
import { QuantitativeValue } from "./QuantitativeValue";
import { FloorPlan } from "./FloorPlan";
import { string,boolean } from "./string,boolean";


export class Accommodation extends Place {
  floorLevel: string;
  numberOfBathroomsTotal: number;
  numberOfRooms: QuantitativeValue,number;
  leaseLength: QuantitativeValue,Duration;
  yearBuilt: number;
  accommodationCategory: string;
  amenityFeature: LocationFeatureSpecification;
  tourBookingPage: string;
  numberOfBedrooms: number,QuantitativeValue;
  numberOfPartialBathrooms: number;
  floorSize: QuantitativeValue;
  accommodationFloorPlan: FloorPlan;
  numberOfFullBathrooms: number;
  permittedUsage: string;
  petsAllowed: string,boolean;


}
