import { DefinedTerm,string } from "./DefinedTerm,string";
import { string,DefinedTerm,string } from "./string,DefinedTerm,string";
import { string,DefinedTerm } from "./string,DefinedTerm";
import { AlignmentObject } from "./AlignmentObject";


export class LearningResource extends CreativeWork {
  teaches: DefinedTerm,string;
  educationalLevel: string,DefinedTerm,string;
  assesses: string,DefinedTerm;
  educationalUse: DefinedTerm,string;
  educationalAlignment: AlignmentObject;
  competencyRequired: string,DefinedTerm,string;
  learningResourceType: DefinedTerm,string;


}
