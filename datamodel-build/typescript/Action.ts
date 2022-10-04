import { Organization,Person } from "./Organization,Person";
import { dateTime,time } from "./dateTime,time";
import { ActionStatusType } from "./ActionStatusType";
import { Thing } from "./Thing";
import { PostalAddress,string,Place,VirtualLocation } from "./PostalAddress,string,Place,VirtualLocation";
import { EntryPoint } from "./EntryPoint";


export class Action extends Thing {
  agent: Organization,Person;
  startTime: dateTime,time;
  actionStatus: ActionStatusType;
  provider: Organization,Person;
  result: Thing;
  location: PostalAddress,string,Place,VirtualLocation;
  object: Thing;
  target: EntryPoint;
  endTime: dateTime,time;
  participant: Organization,Person;
  instrument: Thing;
  error: Thing;


}
