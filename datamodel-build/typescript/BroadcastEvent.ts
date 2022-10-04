import { Language,string } from "./Language,string";
import { Event } from "./Event";


export class BroadcastEvent extends PublicationEvent {
  subtitleLanguage: Language,string;
  videoFormat: string;
  broadcastOfEvent: Event;
  isLiveBroadcast: boolean;


}
