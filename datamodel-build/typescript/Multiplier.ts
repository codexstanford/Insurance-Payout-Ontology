import { MultiplierTimeEnum } from "./MultiplierTimeEnum";
import { MultiplierPersonEnum } from "./MultiplierPersonEnum";
import { MultiplierOccurenceEnum } from "./MultiplierOccurenceEnum";
import { MultiplierInsuredObjectEnum } from "./MultiplierInsuredObjectEnum";
import { List } from "./List";


export class Multiplier {
  time: MultiplierTimeEnum;
  person: MultiplierPersonEnum;
  occurence: MultiplierOccurenceEnum;
  insuredObject: MultiplierInsuredObjectEnum;
  other: List;


}
