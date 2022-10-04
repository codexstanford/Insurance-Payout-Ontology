import { BankOrCreditUnion,string } from "./BankOrCreditUnion,string";
import { number,MonetaryAmount } from "./number,MonetaryAmount";


export class MoneyTransfer extends TransferAction {
  beneficiaryBank: BankOrCreditUnion,string;
  amount: number,MonetaryAmount;


}
