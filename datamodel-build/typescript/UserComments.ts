import { CreativeWork } from "./CreativeWork";
import { dateTime,date } from "./dateTime,date";
import { Organization,Person } from "./Organization,Person";


export class UserComments extends UserInteraction {
  replyToUrl: string;
  discusses: CreativeWork;
  commentTime: dateTime,date;
  commentText: string;
  creator: Organization,Person;


}
