import { string,CreativeWorkSeason } from "./string,CreativeWorkSeason";
import { CreativeWorkSeason } from "./CreativeWorkSeason";
import { Person } from "./Person";
import { VideoObject } from "./VideoObject";
import { Episode } from "./Episode";
import { Thing } from "./Thing";
import { CreativeWork } from "./CreativeWork";
import { Organization } from "./Organization";
import { GamePlayMode } from "./GamePlayMode";
import { string,string,Thing } from "./string,string,Thing";
import { Person,MusicGroup } from "./Person,MusicGroup";
import { QuantitativeValue } from "./QuantitativeValue";
import { Place,string,PostalAddress } from "./Place,string,PostalAddress";


export class VideoGameSeries extends CreativeWorkSeries {
  season: string,CreativeWorkSeason;
  containsSeason: CreativeWorkSeason;
  director: Person;
  actor: Person;
  trailer: VideoObject;
  episodes: Episode;
  characterAttribute: Thing;
  numberOfEpisodes: number;
  seasons: CreativeWorkSeason;
  cheatCode: CreativeWork;
  gameItem: Thing;
  productionCompany: Organization;
  actors: Person;
  playMode: GamePlayMode;
  gamePlatform: string,string,Thing;
  numberOfSeasons: number;
  musicBy: Person,MusicGroup;
  numberOfPlayers: QuantitativeValue;
  quest: Thing;
  gameLocation: Place,string,PostalAddress;
  episode: Episode;
  directors: Person;


}
