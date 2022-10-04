import { number,QualitativeValue } from "./number,QualitativeValue";


export class DoseSchedule extends MedicalIntangible {
  targetPopulation: string;
  frequency: string;
  doseUnit: string;
  doseValue: number,QualitativeValue;


}
