import { string,Taxon,string } from "./string,Taxon,string";
import { PropertyValue,string,string } from "./PropertyValue,string,string";
import { DefinedTerm } from "./DefinedTerm";


export class Taxon extends Thing {
  parentTaxon: string,Taxon,string;
  taxonRank: PropertyValue,string,string;
  childTaxon: string,Taxon,string;
  hasDefinedTerm: DefinedTerm;


}
