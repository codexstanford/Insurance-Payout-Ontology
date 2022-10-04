import { string,string } from "./string,string";
import { QuantitativeValue } from "./QuantitativeValue";
import { Duration } from "./Duration";
import { string,Thing } from "./string,Thing";
import { number,MonetaryAmount } from "./number,MonetaryAmount";
import { RepaymentSpecification } from "./RepaymentSpecification";


export class LoanOrCredit extends FinancialProduct {
  renegotiableLoan: boolean;
  loanType: string,string;
  recourseLoan: boolean;
  loanTerm: QuantitativeValue;
  gracePeriod: Duration;
  requiredCollateral: string,Thing;
  currency: string;
  amount: number,MonetaryAmount;
  loanRepaymentForm: RepaymentSpecification;


}
