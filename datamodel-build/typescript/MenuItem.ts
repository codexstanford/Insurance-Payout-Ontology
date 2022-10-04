import { MenuItem,MenuSection } from "./MenuItem,MenuSection";
import { Offer,Demand } from "./Offer,Demand";
import { RestrictedDiet } from "./RestrictedDiet";
import { NutritionInformation } from "./NutritionInformation";


export class MenuItem extends Intangible {
  menuAddOn: MenuItem,MenuSection;
  offers: Offer,Demand;
  suitableForDiet: RestrictedDiet;
  nutrition: NutritionInformation;


}
