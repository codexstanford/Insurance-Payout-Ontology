import { string,string } from "./string,string";
import { Seat } from "./Seat";
import { PriceSpecification,number,string } from "./PriceSpecification,number,string";
import { Organization } from "./Organization";
import { date,dateTime } from "./date,dateTime";
import { Organization,Person } from "./Organization,Person";


export class Ticket extends Intangible {
  ticketToken: string,string;
  ticketedSeat: Seat;
  totalPrice: PriceSpecification,number,string;
  issuedBy: Organization;
  ticketNumber: string;
  dateIssued: date,dateTime;
  priceCurrency: string;
  underName: Organization,Person;


}
