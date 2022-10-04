import { dateTime,date } from "./dateTime,date";
import { dateTime,time } from "./dateTime,time";
import { date,dateTime } from "./date,dateTime";
import { string,Duration } from "./string,Duration";
import { Duration } from "./Duration";
import { DayOfWeek,string } from "./DayOfWeek,string";


export class Schedule extends Intangible {
  scheduleTimezone: string;
  startDate: dateTime,date;
  exceptDate: dateTime,date;
  startTime: dateTime,time;
  repeatCount: number;
  endDate: date,dateTime;
  repeatFrequency: string,Duration;
  duration: Duration;
  byMonthDay: number;
  endTime: dateTime,time;
  byMonth: number;
  byDay: DayOfWeek,string;
  byMonthWeek: number;


}
