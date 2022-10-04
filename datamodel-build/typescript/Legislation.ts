import { Legislation } from "./Legislation";
import { LegalForceStatus } from "./LegalForceStatus";
import { CategoryCode,string } from "./CategoryCode,string";
import { string,AdministrativeArea } from "./string,AdministrativeArea";
import { string,string } from "./string,string";
import { Organization,Person } from "./Organization,Person";
import { AdministrativeArea,string } from "./AdministrativeArea,string";
import { date } from "./date";
import { Person,Organization } from "./Person,Organization";


export class Legislation extends CreativeWork {
  legislationTransposes: Legislation;
  legislationLegalForce: LegalForceStatus;
  legislationType: CategoryCode,string;
  jurisdiction: string,AdministrativeArea;
  legislationIdentifier: string,string;
  legislationChanges: Legislation;
  legislationResponsible: Organization,Person;
  legislationJurisdiction: AdministrativeArea,string;
  legislationDate: date;
  legislationPassedBy: Person,Organization;
  legislationConsolidates: Legislation;
  legislationApplies: Legislation;
  legislationDateVersion: date;


}
