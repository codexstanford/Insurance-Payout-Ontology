import { Grant } from "./Grant";
import { Gene } from "./Gene";
import { BioChemEntity } from "./BioChemEntity";
import { string,DefinedTerm,string,Taxon } from "./string,DefinedTerm,string,Taxon";
import { PropertyValue,string,DefinedTerm } from "./PropertyValue,string,DefinedTerm";
import { PropertyValue,DefinedTerm,string } from "./PropertyValue,DefinedTerm,string";
import { string,PropertyValue,MedicalCondition } from "./string,PropertyValue,MedicalCondition";
import { string,PropertyValue,string } from "./string,PropertyValue,string";
import { DefinedTerm } from "./DefinedTerm";


export class BioChemEntity extends Thing {
  funding: Grant;
  isEncodedByBioChemEntity: Gene;
  isPartOfBioChemEntity: BioChemEntity;
  taxonomicRange: string,DefinedTerm,string,Taxon;
  isInvolvedInBiologicalProcess: PropertyValue,string,DefinedTerm;
  isLocatedInSubcellularLocation: PropertyValue,DefinedTerm,string;
  associatedDisease: string,PropertyValue,MedicalCondition;
  hasMolecularFunction: PropertyValue,DefinedTerm,string;
  hasBioChemEntityPart: BioChemEntity;
  bioChemInteraction: BioChemEntity;
  hasRepresentation: string,PropertyValue,string;
  bioChemSimilarity: BioChemEntity;
  biologicalRole: DefinedTerm;


}
