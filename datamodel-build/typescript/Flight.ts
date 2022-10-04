import { Distance,string } from "./Distance,string";
import { dateTime } from "./dateTime";
import { Vehicle,string } from "./Vehicle,string";
import { Organization,Person } from "./Organization,Person";
import { Airport } from "./Airport";
import { Organization } from "./Organization";
import { string,Duration } from "./string,Duration";
import { BoardingPolicyType } from "./BoardingPolicyType";


export class Flight extends Trip {
  flightDistance: Distance,string;
  webCheckinTime: dateTime;
  aircraft: Vehicle,string;
  seller: Organization,Person;
  arrivalAirport: Airport;
  arrivalTerminal: string;
  departureAirport: Airport;
  arrivalGate: string;
  departureTerminal: string;
  carrier: Organization;
  estimatedFlightDuration: string,Duration;
  departureGate: string;
  flightNumber: string;
  mealService: string;
  boardingPolicy: BoardingPolicyType;


}
