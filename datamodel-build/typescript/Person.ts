import { PersonRelationToPolicyHolderEnum } from "./PersonRelationToPolicyHolderEnum";


export class Person extends Entity {
  relationToPolicyHolder: PersonRelationToPolicyHolderEnum;
  firstName: string;
  lastName: string;
  age: number;


}
