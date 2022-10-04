import { QuantitativeValue,Distance } from "./QuantitativeValue,Distance";
import { Distance,QuantitativeValue } from "./Distance,QuantitativeValue";
import { Place } from "./Place";
import { dateTime,time } from "./dateTime,time";
import { NewsArticle } from "./NewsArticle";
import { Place,string,GeoShape } from "./Place,string,GeoShape";
import { MediaSubscription,boolean } from "./MediaSubscription,boolean";
import { CreativeWork } from "./CreativeWork";
import { Duration } from "./Duration";
import { string,string } from "./string,string";
import { date } from "./date";
import { Organization } from "./Organization";
import { Claim } from "./Claim";


export class MediaObject extends CreativeWork {
  contentSize: string;
  contentUrl: string;
  width: QuantitativeValue,Distance;
  height: Distance,QuantitativeValue;
  regionsAllowed: Place;
  startTime: dateTime,time;
  associatedArticle: NewsArticle;
  ineligibleRegion: Place,string,GeoShape;
  requiresSubscription: MediaSubscription,boolean;
  playerType: string;
  encodesCreativeWork: CreativeWork;
  duration: Duration;
  encodingFormat: string,string;
  uploadDate: date;
  embedUrl: string;
  bitrate: string;
  endTime: dateTime,time;
  productionCompany: Organization;
  sha256: string;
  interpretedAsClaim: Claim;


}
