import { time,dateTime } from "./time,dateTime";
import { Offer,Demand } from "./Offer,Demand";
import { Organization,Person } from "./Organization,Person";
import { Trip } from "./Trip";
import { ItemList,Place } from "./ItemList,Place";


export class Trip extends Intangible {
  arrivalTime: time,dateTime;
  offers: Offer,Demand;
  departureTime: time,dateTime;
  provider: Organization,Person;
  subTrip: Trip;
  itinerary: ItemList,Place;
  partOfTrip: Trip;


}
