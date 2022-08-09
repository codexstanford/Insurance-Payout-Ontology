import { List } from "./List";
import { CompositionOperatorEnum } from "./CompositionOperatorEnum";


export class PayoutScoreComposable extends PayoutScope {
  items: List;
  operator: CompositionOperatorEnum;


}
