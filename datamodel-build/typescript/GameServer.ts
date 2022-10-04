import { GameServerStatus } from "./GameServerStatus";
import { VideoGame } from "./VideoGame";


export class GameServer extends Intangible {
  serverStatus: GameServerStatus;
  game: VideoGame;
  playersOnline: number;


}
