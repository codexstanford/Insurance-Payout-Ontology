import { dateTime,date } from "./dateTime,date";
import { date,dateTime } from "./date,dateTime";
import { Thing } from "./Thing";


export class DataFeedItem extends Intangible {
  dateDeleted: dateTime,date;
  dateCreated: date,dateTime;
  dateModified: dateTime,date;
  item: Thing;


}
