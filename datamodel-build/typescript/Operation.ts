import { Operable } from "./Operable";
import { OperandEnum } from "./OperandEnum";


export class Operation extends Operable {
  leftHand: Operable;
  operand: OperandEnum;
  rightHand: Operable;


}
