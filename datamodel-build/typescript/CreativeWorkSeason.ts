import { dateTime,date } from "./dateTime,date";
import { Person } from "./Person";
import { VideoObject } from "./VideoObject";
import { date,dateTime } from "./date,dateTime";
import { Episode } from "./Episode";
import { CreativeWorkSeries } from "./CreativeWorkSeries";
import { Organization } from "./Organization";
import { string,number } from "./string,number";


export class CreativeWorkSeason extends CreativeWork {
  startDate: dateTime,date;
  director: Person;
  actor: Person;
  trailer: VideoObject;
  endDate: date,dateTime;
  episodes: Episode;
  numberOfEpisodes: number;
  partOfSeries: CreativeWorkSeries;
  productionCompany: Organization;
  seasonNumber: string,number;
  episode: Episode;


}
