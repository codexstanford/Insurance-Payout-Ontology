import { MedicalEntity } from "./MedicalEntity";
import { string,MedicalContraindication } from "./string,MedicalContraindication";


export class MedicalDevice extends MedicalEntity {
  adverseOutcome: MedicalEntity;
  preOp: string;
  seriousAdverseOutcome: MedicalEntity;
  postOp: string;
  procedure: string;
  contraindication: string,MedicalContraindication;


}
