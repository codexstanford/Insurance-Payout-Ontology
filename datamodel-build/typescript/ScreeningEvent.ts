import { Language,string } from "./Language,string";
import { Movie } from "./Movie";


export class ScreeningEvent extends Event {
  subtitleLanguage: Language,string;
  videoFormat: string;
  workPresented: Movie;


}
