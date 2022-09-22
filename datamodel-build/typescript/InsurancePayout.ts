import { PayoutTypeEnum } from "./PayoutTypeEnum";
import { List } from "./List";
import { Multiplier } from "./Multiplier";
import { RiskChain } from "./RiskChain";


export class InsurancePayout {
  payoutType: PayoutTypeEnum;
  amount: List;
  minimalAmount: List;
  multipliers: Multiplier;
  for: RiskChain;
  impactOtherConsumption: boolean;


}
