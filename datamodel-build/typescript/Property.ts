import { Class } from "./Class";
import { Enumeration,Class,Property } from "./Enumeration,Class,Property";
import { Property } from "./Property";


export class Property extends Intangible {
  domainIncludes: Class;
  supersededBy: Enumeration,Class,Property;
  rangeIncludes: Class;
  inverseOf: Property;


}
