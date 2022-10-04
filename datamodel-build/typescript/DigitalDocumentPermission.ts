import { Person,Audience,ContactPoint,Organization } from "./Person,Audience,ContactPoint,Organization";
import { DigitalDocumentPermissionType } from "./DigitalDocumentPermissionType";


export class DigitalDocumentPermission extends Intangible {
  grantee: Person,Audience,ContactPoint,Organization;
  permissionType: DigitalDocumentPermissionType;


}
