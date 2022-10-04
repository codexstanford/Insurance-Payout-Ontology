import { Person } from "./Person";
import { Duration } from "./Duration";


export class Audiobook extends AudioObject,Book {
  readBy: Person;
  duration: Duration;


}
