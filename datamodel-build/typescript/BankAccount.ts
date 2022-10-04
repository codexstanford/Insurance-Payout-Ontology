import { string,string } from "./string,string";
import { MonetaryAmount } from "./MonetaryAmount";


export class BankAccount extends FinancialProduct {
  bankAccountType: string,string;
  accountMinimumInflow: MonetaryAmount;
  accountOverdraftLimit: MonetaryAmount;


}
