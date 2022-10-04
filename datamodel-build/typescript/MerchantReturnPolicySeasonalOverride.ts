import { MerchantReturnEnumeration } from "./MerchantReturnEnumeration";
import { dateTime,date } from "./dateTime,date";
import { date,dateTime } from "./date,dateTime";
import { dateTime,number,date } from "./dateTime,number,date";


export class MerchantReturnPolicySeasonalOverride extends Intangible {
  returnPolicyCategory: MerchantReturnEnumeration;
  startDate: dateTime,date;
  endDate: date,dateTime;
  merchantReturnDays: dateTime,number,date;


}
