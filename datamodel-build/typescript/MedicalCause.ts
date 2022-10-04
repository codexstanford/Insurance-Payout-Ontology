import { MedicalEntity } from "./MedicalEntity";


export class MedicalCause extends MedicalEntity {
  causeOf: MedicalEntity;


}
