import { MultiplierTimeEnum } from "./MultiplierTimeEnum";
import { MultiplierPersonEnum } from "./MultiplierPersonEnum";
import { MultiplierOccurrenceEnum } from "./MultiplierOccurrenceEnum";
import { MultiplierInsuredObjectEnum } from "./MultiplierInsuredObjectEnum";
import { List } from "./List";


export class Multiplier {
  time: MultiplierTimeEnum;
  person: MultiplierPersonEnum;
  occurrence: MultiplierOccurrenceEnum;
  insuredObject: MultiplierInsuredObjectEnum;
  other: List;


}
