import { number,boolean } from "./number,boolean";
import { MonetaryAmount,number } from "./MonetaryAmount,number";
import { MonetaryAmount } from "./MonetaryAmount";


export class PaymentCard extends PaymentMethod,FinancialProduct {
  cashBack: number,boolean;
  monthlyMinimumRepaymentAmount: MonetaryAmount,number;
  floorLimit: MonetaryAmount;
  contactlessPayment: boolean;


}
