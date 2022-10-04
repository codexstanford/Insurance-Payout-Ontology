import { AdministrativeArea } from "./AdministrativeArea";
import { MaximumDoseSchedule } from "./MaximumDoseSchedule";


export class DrugStrength extends MedicalIntangible {
  availableIn: AdministrativeArea;
  strengthUnit: string;
  maximumIntake: MaximumDoseSchedule;
  activeIngredient: string;
  strengthValue: number;


}
