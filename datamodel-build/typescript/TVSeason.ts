import { Country } from "./Country";
import { TVSeries } from "./TVSeries";


export class TVSeason extends CreativeWorkSeason,CreativeWork {
  countryOfOrigin: Country;
  partOfTVSeries: TVSeries;


}
