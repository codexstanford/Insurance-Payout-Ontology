import { Event } from "./Event";
import { EventAttendanceModeEnumeration } from "./EventAttendanceModeEnumeration";
import { Review } from "./Review";
import { Person,Organization } from "./Person,Organization";
import { dateTime,date } from "./dateTime,date";
import { Organization,Person } from "./Organization,Person";
import { Person } from "./Person";
import { Grant } from "./Grant";
import { DefinedTerm,string,string } from "./DefinedTerm,string,string";
import { Audience } from "./Audience";
import { Offer,Demand } from "./Offer,Demand";
import { EventStatusType } from "./EventStatusType";
import { date,dateTime } from "./date,dateTime";
import { AggregateRating } from "./AggregateRating";
import { PostalAddress,string,Place,VirtualLocation } from "./PostalAddress,string,Place,VirtualLocation";
import { Duration } from "./Duration";
import { date } from "./date";
import { CreativeWork } from "./CreativeWork";
import { time,dateTime } from "./time,dateTime";
import { string,Language } from "./string,Language";
import { Thing } from "./Thing";
import { Schedule } from "./Schedule";


export class Event extends Thing {
  superEvent: Event;
  eventAttendanceMode: EventAttendanceModeEnumeration;
  review: Review;
  translator: Person,Organization;
  startDate: dateTime,date;
  composer: Organization,Person;
  maximumAttendeeCapacity: number;
  maximumVirtualAttendeeCapacity: number;
  director: Person;
  funding: Grant;
  keywords: DefinedTerm,string,string;
  audience: Audience;
  offers: Offer,Demand;
  subEvent: Event;
  actor: Person;
  eventStatus: EventStatusType;
  endDate: date,dateTime;
  funder: Organization,Person;
  performer: Organization,Person;
  aggregateRating: AggregateRating;
  typicalAgeRange: string;
  location: PostalAddress,string,Place,VirtualLocation;
  performers: Person,Organization;
  duration: Duration;
  organizer: Person,Organization;
  sponsor: Organization,Person;
  previousStartDate: date;
  isAccessibleForFree: boolean;
  remainingAttendeeCapacity: number;
  subEvents: Event;
  workPerformed: CreativeWork;
  doorTime: time,dateTime;
  inLanguage: string,Language;
  about: Thing;
  recordedIn: CreativeWork;
  maximumPhysicalAttendeeCapacity: number;
  attendee: Person,Organization;
  workFeatured: CreativeWork;
  eventSchedule: Schedule;
  contributor: Organization,Person;
  attendees: Person,Organization;


}
