import { BroadcastService } from "./BroadcastService";
import { BroadcastFrequencySpecification,string } from "./BroadcastFrequencySpecification,string";
import { string,Language } from "./string,Language";
import { BroadcastChannel } from "./BroadcastChannel";
import { Organization } from "./Organization";
import { Place } from "./Place";


export class BroadcastService extends Service {
  parentService: BroadcastService;
  broadcastDisplayName: string;
  videoFormat: string;
  broadcastTimezone: string;
  broadcastFrequency: BroadcastFrequencySpecification,string;
  callSign: string;
  inLanguage: string,Language;
  hasBroadcastChannel: BroadcastChannel;
  broadcaster: Organization;
  broadcastAffiliateOf: Organization;
  area: Place;


}
