import { number,QuantitativeValue } from "./number,QuantitativeValue";
import { dateTime,time } from "./dateTime,time";


export class FoodEstablishmentReservation extends Reservation {
  partySize: number,QuantitativeValue;
  startTime: dateTime,time;
  endTime: dateTime,time;


}
