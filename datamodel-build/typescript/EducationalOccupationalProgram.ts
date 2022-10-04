import { AlignmentObject,Course,EducationalOccupationalCredential,string } from "./AlignmentObject,Course,EducationalOccupationalCredential,string";
import { Course } from "./Course";
import { dateTime,date } from "./dateTime,date";
import { MonetaryAmountDistribution } from "./MonetaryAmountDistribution";
import { DayOfWeek } from "./DayOfWeek";
import { Offer,Demand } from "./Offer,Demand";
import { number,StructuredValue } from "./number,StructuredValue";
import { date } from "./date";
import { date,dateTime } from "./date,dateTime";
import { Organization,Person } from "./Organization,Person";
import { string,EducationalOccupationalCredential,string } from "./string,EducationalOccupationalCredential,string";
import { Duration } from "./Duration";
import { EducationalOccupationalCredential,string,string } from "./EducationalOccupationalCredential,string,string";
import { string,string } from "./string,string";
import { string,DefinedTerm } from "./string,DefinedTerm";
import { CategoryCode,string } from "./CategoryCode,string";


export class EducationalOccupationalProgram extends Intangible {
  programPrerequisites: AlignmentObject,Course,EducationalOccupationalCredential,string;
  hasCourse: Course;
  startDate: dateTime,date;
  salaryUponCompletion: MonetaryAmountDistribution;
  termsPerYear: number;
  dayOfWeek: DayOfWeek;
  offers: Offer,Demand;
  typicalCreditsPerTerm: number,StructuredValue;
  applicationStartDate: date;
  timeOfDay: string;
  endDate: date,dateTime;
  provider: Organization,Person;
  trainingSalary: MonetaryAmountDistribution;
  educationalCredentialAwarded: string,EducationalOccupationalCredential,string;
  numberOfCredits: number,StructuredValue;
  timeToComplete: Duration;
  occupationalCredentialAwarded: EducationalOccupationalCredential,string,string;
  termDuration: Duration;
  educationalProgramMode: string,string;
  programType: string,DefinedTerm;
  maximumEnrollment: number;
  financialAidEligible: string,DefinedTerm;
  applicationDeadline: date;
  occupationalCategory: CategoryCode,string;


}
