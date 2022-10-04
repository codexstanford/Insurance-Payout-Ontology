import { dateTime,time } from "./dateTime,time";
import { PostalAddress,string,Place,VirtualLocation } from "./PostalAddress,string,Place,VirtualLocation";
import { Action } from "./Action";
import { SoftwareApplication,WebSite } from "./SoftwareApplication,WebSite";


export class InteractionCounter extends StructuredValue {
  startTime: dateTime,time;
  userInteractionCount: number;
  location: PostalAddress,string,Place,VirtualLocation;
  interactionType: Action;
  interactionService: SoftwareApplication,WebSite;
  endTime: dateTime,time;


}
