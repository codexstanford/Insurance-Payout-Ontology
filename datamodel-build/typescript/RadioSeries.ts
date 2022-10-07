import { string,CreativeWorkSeason } from "./string,CreativeWorkSeason";
import { CreativeWorkSeason } from "./CreativeWorkSeason";
import { Person } from "./Person";
import { VideoObject } from "./VideoObject";
import { Episode } from "./Episode";
import { Organization } from "./Organization";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class RadioSeries extends CreativeWorkSeries {
  season: string,CreativeWorkSeason;
  containsSeason: CreativeWorkSeason;
  director: Person;
  actor: Person;
  trailer: VideoObject;
  episodes: Episode;
  numberOfEpisodes: number;
  seasons: CreativeWorkSeason;
  productionCompany: Organization;
  actors: Person;
  numberOfSeasons: number;
  musicBy: Person,MusicGroup;
  episode: Episode;
  directors: Person;


}