import { Mass } from "./Mass";
import { Energy } from "./Energy";


export class NutritionInformation extends StructuredValue {
  fatContent: Mass;
  servingSize: string;
  proteinContent: Mass;
  calories: Energy;
  sodiumContent: Mass;
  cholesterolContent: Mass;
  sugarContent: Mass;
  carbohydrateContent: Mass;
  transFatContent: Mass;
  fiberContent: Mass;
  unsaturatedFatContent: Mass;
  saturatedFatContent: Mass;


}
