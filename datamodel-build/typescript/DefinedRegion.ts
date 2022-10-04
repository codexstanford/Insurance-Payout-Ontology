import { Country,string } from "./Country,string";
import { PostalCodeRangeSpecification } from "./PostalCodeRangeSpecification";


export class DefinedRegion extends StructuredValue {
  addressCountry: Country,string;
  addressRegion: string;
  postalCodeRange: PostalCodeRangeSpecification;
  postalCodePrefix: string;
  postalCode: string;


}
