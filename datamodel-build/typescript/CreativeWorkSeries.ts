import { dateTime,date } from "./dateTime,date";
import { date,dateTime } from "./date,dateTime";


export class CreativeWorkSeries extends CreativeWork,Series {
  startDate: dateTime,date;
  endDate: date,dateTime;
  issn: string;


}
