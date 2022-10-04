import { number,string } from "./number,string";
import { Person } from "./Person";
import { VideoObject } from "./VideoObject";
import { CreativeWorkSeries } from "./CreativeWorkSeries";
import { Duration } from "./Duration";
import { CreativeWorkSeason } from "./CreativeWorkSeason";
import { Organization } from "./Organization";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class Episode extends CreativeWork {
  episodeNumber: number,string;
  director: Person;
  actor: Person;
  trailer: VideoObject;
  partOfSeries: CreativeWorkSeries;
  duration: Duration;
  partOfSeason: CreativeWorkSeason;
  productionCompany: Organization;
  actors: Person;
  musicBy: Person,MusicGroup;
  directors: Person;


}
