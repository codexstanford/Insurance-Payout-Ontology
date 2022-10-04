import { MedicalEntity } from "./MedicalEntity";
import { MedicalRiskFactor } from "./MedicalRiskFactor";


export class MedicalRiskEstimator extends MedicalEntity {
  estimatesRiskOf: MedicalEntity;
  includedRiskFactor: MedicalRiskFactor;


}
