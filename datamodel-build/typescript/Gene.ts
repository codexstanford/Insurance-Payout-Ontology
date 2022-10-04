import { Gene } from "./Gene";
import { BioChemEntity } from "./BioChemEntity";
import { AnatomicalStructure,BioChemEntity,DefinedTerm,AnatomicalSystem } from "./AnatomicalStructure,BioChemEntity,DefinedTerm,AnatomicalSystem";


export class Gene extends BioChemEntity {
  alternativeOf: Gene;
  hasBioPolymerSequence: string;
  encodesBioChemEntity: BioChemEntity;
  expressedIn: AnatomicalStructure,BioChemEntity,DefinedTerm,AnatomicalSystem;


}
