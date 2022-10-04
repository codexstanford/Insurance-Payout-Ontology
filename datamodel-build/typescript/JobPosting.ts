import { MonetaryAmountDistribution,MonetaryAmount,number } from "./MonetaryAmountDistribution,MonetaryAmount,number";
import { Place } from "./Place";
import { string,string,DefinedTerm } from "./string,string,DefinedTerm";
import { DefinedTerm,string,string } from "./DefinedTerm,string,string";
import { AdministrativeArea } from "./AdministrativeArea";
import { date,string } from "./date,string";
import { ContactPoint } from "./ContactPoint";
import { Occupation } from "./Occupation";
import { string,OccupationalExperienceRequirements } from "./string,OccupationalExperienceRequirements";
import { string,string } from "./string,string";
import { EducationalOccupationalCredential,string } from "./EducationalOccupationalCredential,string";
import { DefinedTerm,string } from "./DefinedTerm,string";
import { number,PriceSpecification,MonetaryAmount } from "./number,PriceSpecification,MonetaryAmount";
import { date,dateTime } from "./date,dateTime";
import { string,DefinedTerm } from "./string,DefinedTerm";
import { Organization } from "./Organization";
import { dateTime,date } from "./dateTime,date";
import { string,EducationalOccupationalCredential } from "./string,EducationalOccupationalCredential";
import { CategoryCode,string } from "./CategoryCode,string";


export class JobPosting extends Intangible {
  employerOverview: string;
  estimatedSalary: MonetaryAmountDistribution,MonetaryAmount,number;
  jobLocationType: string;
  responsibilities: string;
  jobLocation: Place;
  physicalRequirement: string,string,DefinedTerm;
  incentives: string;
  directApply: boolean;
  sensoryRequirement: DefinedTerm,string,string;
  applicantLocationRequirements: AdministrativeArea;
  workHours: string;
  jobStartDate: date,string;
  employmentType: string;
  specialCommitments: string;
  applicationContact: ContactPoint;
  incentiveCompensation: string;
  relevantOccupation: Occupation;
  totalJobOpenings: number;
  experienceRequirements: string,OccupationalExperienceRequirements;
  jobBenefits: string;
  salaryCurrency: string;
  experienceInPlaceOfEducation: boolean;
  securityClearanceRequirement: string,string;
  eligibilityToWorkRequirement: string;
  educationRequirements: EducationalOccupationalCredential,string;
  benefits: string;
  industry: DefinedTerm,string;
  baseSalary: number,PriceSpecification,MonetaryAmount;
  datePosted: date,dateTime;
  skills: string,DefinedTerm;
  title: string;
  hiringOrganization: Organization;
  jobImmediateStart: boolean;
  validThrough: dateTime,date;
  employmentUnit: Organization;
  qualifications: string,EducationalOccupationalCredential;
  occupationalCategory: CategoryCode,string;


}
