import { Person,SportsTeam } from "./Person,SportsTeam";
import { SportsTeam,Person } from "./SportsTeam,Person";
import { string,string } from "./string,string";


export class SportsEvent extends Event {
  homeTeam: Person,SportsTeam;
  awayTeam: SportsTeam,Person;
  competitor: Person,SportsTeam;
  sport: string,string;


}
