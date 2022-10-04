import { Duration } from "./Duration";
import { string,DefinedTerm,string } from "./string,DefinedTerm,string";
import { Organization } from "./Organization";
import { AdministrativeArea } from "./AdministrativeArea";


export class EducationalOccupationalCredential extends CreativeWork {
  validFor: Duration;
  educationalLevel: string,DefinedTerm,string;
  credentialCategory: string,DefinedTerm,string;
  recognizedBy: Organization;
  competencyRequired: string,DefinedTerm,string;
  validIn: AdministrativeArea;


}
