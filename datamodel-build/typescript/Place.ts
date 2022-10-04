import { Review } from "./Review";
import { Place,GeospatialGeometry } from "./Place,GeospatialGeometry";
import { Place } from "./Place";
import { DefinedTerm,string,string } from "./DefinedTerm,string,string";
import { GeospatialGeometry,Place } from "./GeospatialGeometry,Place";
import { string,number } from "./string,number";
import { AggregateRating } from "./AggregateRating";
import { string,PostalAddress } from "./string,PostalAddress";
import { LocationFeatureSpecification } from "./LocationFeatureSpecification";
import { ImageObject,Photograph } from "./ImageObject,Photograph";
import { string,ImageObject } from "./string,ImageObject";
import { PropertyValue } from "./PropertyValue";
import { OpeningHoursSpecification } from "./OpeningHoursSpecification";
import { Photograph,ImageObject } from "./Photograph,ImageObject";
import { string,Map } from "./string,Map";
import { number,string } from "./number,string";
import { GeoCoordinates,GeoShape } from "./GeoCoordinates,GeoShape";
import { Event } from "./Event";


export class Place extends Thing {
  telephone: string;
  review: Review;
  maps: string;
  geoContains: Place,GeospatialGeometry;
  maximumAttendeeCapacity: number;
  containsPlace: Place;
  smokingAllowed: boolean;
  globalLocationNumber: string;
  keywords: DefinedTerm,string,string;
  geoIntersects: GeospatialGeometry,Place;
  latitude: string,number;
  geoTouches: Place,GeospatialGeometry;
  geoCoveredBy: Place,GeospatialGeometry;
  aggregateRating: AggregateRating;
  address: string,PostalAddress;
  geoEquals: Place,GeospatialGeometry;
  map: string;
  publicAccess: boolean;
  geoCrosses: GeospatialGeometry,Place;
  containedInPlace: Place;
  amenityFeature: LocationFeatureSpecification;
  slogan: string;
  photos: ImageObject,Photograph;
  geoCovers: GeospatialGeometry,Place;
  containedIn: Place;
  hasDriveThroughService: boolean;
  logo: string,ImageObject;
  isAccessibleForFree: boolean;
  geoWithin: Place,GeospatialGeometry;
  geoDisjoint: GeospatialGeometry,Place;
  tourBookingPage: string;
  isicV4: string;
  geoOverlaps: GeospatialGeometry,Place;
  branchCode: string;
  additionalProperty: PropertyValue;
  openingHoursSpecification: OpeningHoursSpecification;
  reviews: Review;
  photo: Photograph,ImageObject;
  specialOpeningHoursSpecification: OpeningHoursSpecification;
  hasMap: string,Map;
  longitude: number,string;
  geo: GeoCoordinates,GeoShape;
  events: Event;
  faxNumber: string;
  event: Event;


}
