import { Country } from "./Country";
import { Person } from "./Person";
import { string,string } from "./string,string";
import { Language,string } from "./Language,string";
import { VideoObject } from "./VideoObject";
import { Duration } from "./Duration";
import { Organization } from "./Organization";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class Movie extends CreativeWork {
  countryOfOrigin: Country;
  director: Person;
  titleEIDR: string,string;
  subtitleLanguage: Language,string;
  actor: Person;
  trailer: VideoObject;
  duration: Duration;
  productionCompany: Organization;
  actors: Person;
  musicBy: Person,MusicGroup;
  directors: Person;


}
