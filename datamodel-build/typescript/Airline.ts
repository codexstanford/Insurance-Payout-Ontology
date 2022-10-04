import { BoardingPolicyType } from "./BoardingPolicyType";


export class Airline extends Organization {
  iataCode: string;
  boardingPolicy: BoardingPolicyType;


}
