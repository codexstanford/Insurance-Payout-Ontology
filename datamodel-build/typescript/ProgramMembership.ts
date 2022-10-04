import { number,QuantitativeValue } from "./number,QuantitativeValue";
import { Organization,Person } from "./Organization,Person";
import { Organization } from "./Organization";
import { Person,Organization } from "./Person,Organization";


export class ProgramMembership extends Intangible {
  membershipPointsEarned: number,QuantitativeValue;
  member: Organization,Person;
  membershipNumber: string;
  hostingOrganization: Organization;
  programName: string;
  members: Person,Organization;


}
