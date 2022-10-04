import { QualitativeValue,string } from "./QualitativeValue,string";


export class FlightReservation extends Reservation {
  passengerPriorityStatus: QualitativeValue,string;
  boardingGroup: string;
  securityScreening: string;
  passengerSequenceNumber: string;


}
