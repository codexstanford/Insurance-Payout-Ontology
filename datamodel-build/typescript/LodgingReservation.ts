import { QualitativeValue,string } from "./QualitativeValue,string";
import { dateTime,time } from "./dateTime,time";
import { number,QuantitativeValue } from "./number,QuantitativeValue";


export class LodgingReservation extends Reservation {
  lodgingUnitType: QualitativeValue,string;
  lodgingUnitDescription: string;
  checkoutTime: dateTime,time;
  numAdults: number,QuantitativeValue;
  checkinTime: dateTime,time;
  numChildren: number,QuantitativeValue;


}
