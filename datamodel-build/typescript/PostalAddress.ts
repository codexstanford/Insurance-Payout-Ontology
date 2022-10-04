import { Country,string } from "./Country,string";


export class PostalAddress extends ContactPoint {
  addressCountry: Country,string;
  addressRegion: string;
  addressLocality: string;
  postalCode: string;
  postOfficeBoxNumber: string;
  streetAddress: string;


}
