import { Recipe } from "./Recipe";
import { Place,FoodEstablishment } from "./Place,FoodEstablishment";
import { FoodEvent } from "./FoodEvent";


export class CookAction extends CreateAction {
  recipe: Recipe;
  foodEstablishment: Place,FoodEstablishment;
  foodEvent: FoodEvent;


}
