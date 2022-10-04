import { OpeningHoursSpecification } from "./OpeningHoursSpecification";
import { ContactPointOption } from "./ContactPointOption";
import { string,Language } from "./string,Language";
import { GeoShape,AdministrativeArea,Place } from "./GeoShape,AdministrativeArea,Place";
import { AdministrativeArea,GeoShape,string,Place } from "./AdministrativeArea,GeoShape,string,Place";
import { string,Product } from "./string,Product";


export class ContactPoint extends StructuredValue {
  telephone: string;
  hoursAvailable: OpeningHoursSpecification;
  email: string;
  contactOption: ContactPointOption;
  availableLanguage: string,Language;
  serviceArea: GeoShape,AdministrativeArea,Place;
  areaServed: AdministrativeArea,GeoShape,string,Place;
  contactType: string;
  productSupported: string,Product;
  faxNumber: string;


}
