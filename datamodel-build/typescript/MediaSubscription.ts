import { Offer } from "./Offer";
import { Organization } from "./Organization";


export class MediaSubscription extends Intangible {
  expectsAcceptanceOf: Offer;
  authenticator: Organization;


}
