import { dateTime } from "./dateTime";
import { PriceSpecification,number,string } from "./PriceSpecification,number,string";
import { Ticket } from "./Ticket";
import { ReservationStatusType } from "./ReservationStatusType";
import { Organization,Person } from "./Organization,Person";
import { Person,Organization } from "./Person,Organization";
import { ProgramMembership } from "./ProgramMembership";
import { Thing } from "./Thing";


export class Reservation extends Intangible {
  modifiedTime: dateTime;
  totalPrice: PriceSpecification,number,string;
  reservedTicket: Ticket;
  reservationStatus: ReservationStatusType;
  provider: Organization,Person;
  broker: Person,Organization;
  bookingTime: dateTime;
  programMembershipUsed: ProgramMembership;
  bookingAgent: Person,Organization;
  priceCurrency: string;
  reservationId: string;
  underName: Organization,Person;
  reservationFor: Thing;


}
