import { BusStop,BusStation } from "./BusStop,BusStation";
import { BusStation,BusStop } from "./BusStation,BusStop";


export class BusTrip extends Trip {
  departureBusStop: BusStop,BusStation;
  busName: string;
  arrivalBusStop: BusStation,BusStop;
  busNumber: string;


}
