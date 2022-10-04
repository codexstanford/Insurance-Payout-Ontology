import { Person } from "./Person";
import { VideoObject } from "./VideoObject";
import { Organization } from "./Organization";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class MovieSeries extends CreativeWorkSeries {
  director: Person;
  actor: Person;
  trailer: VideoObject;
  productionCompany: Organization;
  actors: Person;
  musicBy: Person,MusicGroup;
  directors: Person;


}
