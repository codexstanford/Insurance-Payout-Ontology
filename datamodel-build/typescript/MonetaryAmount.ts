import { dateTime,date } from "./dateTime,date";
import { string,number,StructuredValue,boolean } from "./string,number,StructuredValue,boolean";


export class MonetaryAmount extends StructuredValue {
  maxValue: number;
  minValue: number;
  validFrom: dateTime,date;
  value: string,number,StructuredValue,boolean;
  currency: string;
  validThrough: dateTime,date;


}
