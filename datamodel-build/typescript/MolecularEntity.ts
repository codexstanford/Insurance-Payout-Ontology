import { string,QuantitativeValue } from "./string,QuantitativeValue";
import { DefinedTerm } from "./DefinedTerm";
import { QuantitativeValue,string } from "./QuantitativeValue,string";


export class MolecularEntity extends BioChemEntity {
  inChIKey: string;
  iupacName: string;
  monoisotopicMolecularWeight: string,QuantitativeValue;
  molecularFormula: string;
  potentialUse: DefinedTerm;
  chemicalRole: DefinedTerm;
  molecularWeight: QuantitativeValue,string;
  inChI: string;
  smiles: string;


}
