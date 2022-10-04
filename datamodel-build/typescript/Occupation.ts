import { MonetaryAmountDistribution,MonetaryAmount,number } from "./MonetaryAmountDistribution,MonetaryAmount,number";
import { AdministrativeArea } from "./AdministrativeArea";
import { string,OccupationalExperienceRequirements } from "./string,OccupationalExperienceRequirements";
import { EducationalOccupationalCredential,string } from "./EducationalOccupationalCredential,string";
import { string,DefinedTerm } from "./string,DefinedTerm";
import { string,EducationalOccupationalCredential } from "./string,EducationalOccupationalCredential";
import { CategoryCode,string } from "./CategoryCode,string";


export class Occupation extends Intangible {
  estimatedSalary: MonetaryAmountDistribution,MonetaryAmount,number;
  responsibilities: string;
  occupationLocation: AdministrativeArea;
  experienceRequirements: string,OccupationalExperienceRequirements;
  educationRequirements: EducationalOccupationalCredential,string;
  skills: string,DefinedTerm;
  qualifications: string,EducationalOccupationalCredential;
  occupationalCategory: CategoryCode,string;


}
