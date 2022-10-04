import { Person,ContactPoint,Organization } from "./Person,ContactPoint,Organization";
import { Person,Audience,ContactPoint,Organization } from "./Person,Audience,ContactPoint,Organization";
import { dateTime } from "./dateTime";
import { Person,Organization,ContactPoint } from "./Person,Organization,ContactPoint";
import { CreativeWork } from "./CreativeWork";
import { ContactPoint,Person,Audience,Organization } from "./ContactPoint,Person,Audience,Organization";
import { date,dateTime } from "./date,dateTime";
import { Person,Audience,Organization } from "./Person,Audience,Organization";


export class Message extends CreativeWork {
  bccRecipient: Person,ContactPoint,Organization;
  recipient: Person,Audience,ContactPoint,Organization;
  dateReceived: dateTime;
  ccRecipient: Person,Organization,ContactPoint;
  messageAttachment: CreativeWork;
  toRecipient: ContactPoint,Person,Audience,Organization;
  dateSent: dateTime;
  dateRead: date,dateTime;
  sender: Person,Audience,Organization;


}
