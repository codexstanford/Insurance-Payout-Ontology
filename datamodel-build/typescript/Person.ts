import { PersonRelationToPolicyHolderEnum } from "./PersonRelationToPolicyHolderEnum";


export class Person extends RiskObject {
  relationToPolicyHolder: PersonRelationToPolicyHolderEnum;
  firstName: string;
  lastName: string;
  age: number;


}
