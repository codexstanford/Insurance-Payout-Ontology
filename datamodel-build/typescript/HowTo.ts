import { string,QuantitativeValue } from "./string,QuantitativeValue";
import { string,MonetaryAmount } from "./string,MonetaryAmount";
import { HowToSupply,string } from "./HowToSupply,string";
import { HowToStep,HowToSection,string,CreativeWork } from "./HowToStep,HowToSection,string,CreativeWork";
import { Duration } from "./Duration";
import { HowToTool,string } from "./HowToTool,string";
import { ItemList,CreativeWork,string } from "./ItemList,CreativeWork,string";


export class HowTo extends CreativeWork {
  yield: string,QuantitativeValue;
  estimatedCost: string,MonetaryAmount;
  supply: HowToSupply,string;
  step: HowToStep,HowToSection,string,CreativeWork;
  totalTime: Duration;
  tool: HowToTool,string;
  prepTime: Duration;
  steps: ItemList,CreativeWork,string;
  performTime: Duration;


}
