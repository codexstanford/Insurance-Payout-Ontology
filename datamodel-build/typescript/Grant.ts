import { Organization,Person } from "./Organization,Person";
import { Product,Person,BioChemEntity,Event,MedicalEntity,CreativeWork,Organization } from "./Product,Person,BioChemEntity,Event,MedicalEntity,CreativeWork,Organization";


export class Grant extends Intangible {
  funder: Organization,Person;
  fundedItem: Product,Person,BioChemEntity,Event,MedicalEntity,CreativeWork,Organization;
  sponsor: Organization,Person;


}
