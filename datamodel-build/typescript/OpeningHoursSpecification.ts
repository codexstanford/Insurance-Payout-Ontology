import { time } from "./time";
import { DayOfWeek } from "./DayOfWeek";
import { dateTime,date } from "./dateTime,date";


export class OpeningHoursSpecification extends StructuredValue {
  closes: time;
  dayOfWeek: DayOfWeek;
  validFrom: dateTime,date;
  opens: time;
  validThrough: dateTime,date;


}
