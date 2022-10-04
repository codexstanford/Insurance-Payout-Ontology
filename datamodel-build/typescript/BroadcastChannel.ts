import { string,string } from "./string,string";
import { BroadcastFrequencySpecification,string } from "./BroadcastFrequencySpecification,string";
import { BroadcastService } from "./BroadcastService";
import { CableOrSatelliteService } from "./CableOrSatelliteService";


export class BroadcastChannel extends Intangible {
  genre: string,string;
  broadcastFrequency: BroadcastFrequencySpecification,string;
  providesBroadcastService: BroadcastService;
  broadcastChannelId: string;
  inBroadcastLineup: CableOrSatelliteService;
  broadcastServiceTier: string;


}
