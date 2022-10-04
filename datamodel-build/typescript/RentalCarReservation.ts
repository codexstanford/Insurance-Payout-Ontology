import { Place } from "./Place";
import { dateTime } from "./dateTime";


export class RentalCarReservation extends Reservation {
  dropoffLocation: Place;
  dropoffTime: dateTime;
  pickupTime: dateTime;
  pickupLocation: Place;


}
