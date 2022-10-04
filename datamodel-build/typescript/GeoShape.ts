import { Country,string } from "./Country,string";
import { string,PostalAddress } from "./string,PostalAddress";
import { string,number } from "./string,number";


export class GeoShape extends StructuredValue {
  addressCountry: Country,string;
  circle: string;
  line: string;
  polygon: string;
  address: string,PostalAddress;
  postalCode: string;
  elevation: string,number;
  box: string;


}
