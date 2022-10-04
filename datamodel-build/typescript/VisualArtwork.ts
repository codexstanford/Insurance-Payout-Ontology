import { QuantitativeValue,Distance } from "./QuantitativeValue,Distance";
import { Person } from "./Person";
import { Distance,QuantitativeValue } from "./Distance,QuantitativeValue";
import { string,string } from "./string,string";
import { number,string } from "./number,string";


export class VisualArtwork extends CreativeWork {
  width: QuantitativeValue,Distance;
  letterer: Person;
  height: Distance,QuantitativeValue;
  surface: string,string;
  colorist: Person;
  inker: Person;
  artform: string,string;
  artworkSurface: string,string;
  artEdition: number,string;
  depth: Distance,QuantitativeValue;
  penciler: Person;
  artist: Person;
  artMedium: string,string;


}
