import { Amount } from "./Amount";
import { Multiplier } from "./Multiplier";
import { PayoutScope } from "./PayoutScope";


export abstract class InsurancePayout {
  amount: Amount;
  minimalAmount: Amount;
  multipliers: Multiplier;
  isExtra: boolean;
  scope: PayoutScope;


}
