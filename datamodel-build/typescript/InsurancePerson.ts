import { PersonRelationToPolicyHolderEnum } from "./PersonRelationToPolicyHolderEnum";


export class InsurancePerson extends Person {
  relationToPolicyHolder: PersonRelationToPolicyHolderEnum;
  firstName: string;
  lastName: string;
  age: number;


}
