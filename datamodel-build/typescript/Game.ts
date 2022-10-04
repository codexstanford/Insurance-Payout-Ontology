import { Thing } from "./Thing";
import { QuantitativeValue } from "./QuantitativeValue";
import { Place,string,PostalAddress } from "./Place,string,PostalAddress";


export class Game extends CreativeWork {
  characterAttribute: Thing;
  gameItem: Thing;
  numberOfPlayers: QuantitativeValue;
  quest: Thing;
  gameLocation: Place,string,PostalAddress;


}
