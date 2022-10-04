import { Country,string } from "./Country,string";
import { string,number } from "./string,number";
import { string,PostalAddress } from "./string,PostalAddress";
import { number,string } from "./number,string";


export class GeoCoordinates extends StructuredValue {
  addressCountry: Country,string;
  latitude: string,number;
  address: string,PostalAddress;
  postalCode: string;
  elevation: string,number;
  longitude: number,string;


}
