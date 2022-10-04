import { string,AlignmentObject,Course } from "./string,AlignmentObject,Course";
import { string,EducationalOccupationalCredential,string } from "./string,EducationalOccupationalCredential,string";
import { number,StructuredValue } from "./number,StructuredValue";
import { EducationalOccupationalCredential,string,string } from "./EducationalOccupationalCredential,string,string";
import { CourseInstance } from "./CourseInstance";


export class Course extends LearningResource,CreativeWork {
  coursePrerequisites: string,AlignmentObject,Course;
  educationalCredentialAwarded: string,EducationalOccupationalCredential,string;
  numberOfCredits: number,StructuredValue;
  occupationalCredentialAwarded: EducationalOccupationalCredential,string,string;
  courseCode: string;
  hasCourseInstance: CourseInstance;


}
