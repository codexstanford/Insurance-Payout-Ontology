import { AdministrativeArea } from "./AdministrativeArea";
import { number,string,QualitativeValue } from "./number,string,QualitativeValue";
import { DrugCostCategory } from "./DrugCostCategory";


export class DrugCost extends MedicalEntity {
  applicableLocation: AdministrativeArea;
  costPerUnit: number,string,QualitativeValue;
  costCategory: DrugCostCategory;
  drugUnit: string;
  costCurrency: string;
  costOrigin: string;


}
