import { Person } from "./Person";
import { VideoObject } from "./VideoObject";
import { CreativeWork } from "./CreativeWork";
import { GameServer } from "./GameServer";
import { GamePlayMode } from "./GamePlayMode";
import { string,string,Thing } from "./string,string,Thing";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class VideoGame extends SoftwareApplication,Game {
  director: Person;
  actor: Person;
  trailer: VideoObject;
  gameEdition: string;
  cheatCode: CreativeWork;
  gameServer: GameServer;
  gameTip: CreativeWork;
  actors: Person;
  playMode: GamePlayMode;
  gamePlatform: string,string,Thing;
  musicBy: Person,MusicGroup;
  directors: Person;


}
