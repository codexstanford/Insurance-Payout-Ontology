import { Organization,Person } from "./Organization,Person";
import { BroadcastService } from "./BroadcastService";


export class PublicationEvent extends Event {
  publishedBy: Organization,Person;
  free: boolean;
  publishedOn: BroadcastService;


}
