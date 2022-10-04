import { dateTime,date } from "./dateTime,date";
import { date,dateTime } from "./date,dateTime";
import { number,MonetaryAmount } from "./number,MonetaryAmount";


export class DatedMoneySpecification extends StructuredValue {
  startDate: dateTime,date;
  endDate: date,dateTime;
  currency: string;
  amount: number,MonetaryAmount;


}
