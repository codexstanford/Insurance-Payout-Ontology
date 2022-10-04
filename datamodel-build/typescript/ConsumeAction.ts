import { Offer } from "./Offer";
import { ActionAccessSpecification } from "./ActionAccessSpecification";


export class ConsumeAction extends Action {
  expectsAcceptanceOf: Offer;
  actionAccessibilityRequirement: ActionAccessSpecification;


}
