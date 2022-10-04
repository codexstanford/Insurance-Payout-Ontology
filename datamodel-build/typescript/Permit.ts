import { Duration } from "./Duration";
import { Organization } from "./Organization";
import { date } from "./date";
import { dateTime,date } from "./dateTime,date";
import { Service } from "./Service";
import { AdministrativeArea } from "./AdministrativeArea";
import { Audience } from "./Audience";


export class Permit extends Intangible {
  validFor: Duration;
  issuedBy: Organization;
  validUntil: date;
  validFrom: dateTime,date;
  issuedThrough: Service;
  validIn: AdministrativeArea;
  permitAudience: Audience;


}
