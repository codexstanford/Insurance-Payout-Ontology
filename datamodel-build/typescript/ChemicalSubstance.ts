import { DefinedTerm } from "./DefinedTerm";


export class ChemicalSubstance extends BioChemEntity {
  chemicalComposition: string;
  potentialUse: DefinedTerm;
  chemicalRole: DefinedTerm;


}
