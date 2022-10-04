import { Country } from "./Country";
import { string,string } from "./string,string";
import { Language,string } from "./Language,string";
import { TVSeries } from "./TVSeries";


export class TVEpisode extends Episode {
  countryOfOrigin: Country;
  titleEIDR: string,string;
  subtitleLanguage: Language,string;
  partOfTVSeries: TVSeries;


}
