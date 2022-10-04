import { MonetaryAmount } from "./MonetaryAmount";
import { number,MonetaryAmount } from "./number,MonetaryAmount";


export class RepaymentSpecification extends StructuredValue {
  numberOfLoanPayments: number;
  earlyPrepaymentPenalty: MonetaryAmount;
  loanPaymentAmount: MonetaryAmount;
  loanPaymentFrequency: number;
  downPayment: number,MonetaryAmount;


}
