import { string,CreativeWork,ItemList } from "./string,CreativeWork,ItemList";
import { RestrictedDiet } from "./RestrictedDiet";
import { NutritionInformation } from "./NutritionInformation";
import { string,QuantitativeValue } from "./string,QuantitativeValue";
import { Duration } from "./Duration";


export class Recipe extends HowTo {
  recipeInstructions: string,CreativeWork,ItemList;
  ingredients: string;
  recipeCuisine: string;
  suitableForDiet: RestrictedDiet;
  nutrition: NutritionInformation;
  cookingMethod: string;
  recipeIngredient: string;
  recipeYield: string,QuantitativeValue;
  cookTime: Duration;
  recipeCategory: string;


}
