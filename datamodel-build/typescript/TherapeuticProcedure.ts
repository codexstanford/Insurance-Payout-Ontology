import { MedicalEntity } from "./MedicalEntity";
import { Drug } from "./Drug";
import { DoseSchedule } from "./DoseSchedule";


export class TherapeuticProcedure extends MedicalProcedure {
  adverseOutcome: MedicalEntity;
  drug: Drug;
  doseSchedule: DoseSchedule;


}
