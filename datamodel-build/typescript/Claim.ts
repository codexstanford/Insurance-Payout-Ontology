import { Person,Organization } from "./Person,Organization";
import { CreativeWork } from "./CreativeWork";


export class Claim extends CreativeWork {
  claimInterpreter: Person,Organization;
  firstAppearance: CreativeWork;
  appearance: CreativeWork;


}
