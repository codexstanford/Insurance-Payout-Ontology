import { TrainStation } from "./TrainStation";


export class TrainTrip extends Trip {
  trainName: string;
  departureStation: TrainStation;
  departurePlatform: string;
  trainNumber: string;
  arrivalPlatform: string;
  arrivalStation: TrainStation;


}
