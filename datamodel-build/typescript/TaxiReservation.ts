import { number,QuantitativeValue } from "./number,QuantitativeValue";
import { dateTime } from "./dateTime";
import { Place } from "./Place";


export class TaxiReservation extends Reservation {
  partySize: number,QuantitativeValue;
  pickupTime: dateTime;
  pickupLocation: Place;


}
