import { Offer } from "./Offer";
import { string,string,PhysicalActivityCategory,Thing,CategoryCode } from "./string,string,PhysicalActivityCategory,Thing,CategoryCode";
import { Place,string,GeoShape } from "./Place,string,GeoShape";
import { MediaSubscription,boolean } from "./MediaSubscription,boolean";
import { date,dateTime,time } from "./date,dateTime,time";
import { GeoShape,string,Place } from "./GeoShape,string,Place";
import { time,dateTime,date } from "./time,dateTime,date";


export class ActionAccessSpecification extends Intangible {
  expectsAcceptanceOf: Offer;
  category: string,string,PhysicalActivityCategory,Thing,CategoryCode;
  ineligibleRegion: Place,string,GeoShape;
  requiresSubscription: MediaSubscription,boolean;
  availabilityEnds: date,dateTime,time;
  eligibleRegion: GeoShape,string,Place;
  availabilityStarts: time,dateTime,date;


}
