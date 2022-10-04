import { MedicalTest } from "./MedicalTest";
import { PhysicalExam } from "./PhysicalExam";


export class MedicalSign extends MedicalSignOrSymptom {
  identifyingTest: MedicalTest;
  identifyingExam: PhysicalExam;


}
