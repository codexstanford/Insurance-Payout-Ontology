import { number,HyperTocEntry } from "./number,HyperTocEntry";
import { Person } from "./Person";
import { Episode } from "./Episode";
import { string,number } from "./string,number";
import { CreativeWorkSeries } from "./CreativeWorkSeries";
import { CreativeWorkSeason } from "./CreativeWorkSeason";
import { Person,MusicGroup } from "./Person,MusicGroup";


export class Clip extends CreativeWork {
  startOffset: number,HyperTocEntry;
  endOffset: number,HyperTocEntry;
  director: Person;
  actor: Person;
  partOfEpisode: Episode;
  clipNumber: string,number;
  partOfSeries: CreativeWorkSeries;
  partOfSeason: CreativeWorkSeason;
  actors: Person;
  musicBy: Person,MusicGroup;
  directors: Person;


}
