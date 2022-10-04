import { string,number } from "./string,number";
import { Offer,Demand } from "./Offer,Demand";


export class AggregateOffer extends Offer {
  highPrice: string,number;
  offers: Offer,Demand;
  lowPrice: string,number;
  offerCount: number;


}
