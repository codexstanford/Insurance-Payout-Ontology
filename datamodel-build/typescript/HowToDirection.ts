import { string,MediaObject } from "./string,MediaObject";
import { HowToSupply,string } from "./HowToSupply,string";
import { Duration } from "./Duration";
import { HowToTool,string } from "./HowToTool,string";


export class HowToDirection extends ListItem,CreativeWork {
  afterMedia: string,MediaObject;
  supply: HowToSupply,string;
  duringMedia: string,MediaObject;
  totalTime: Duration;
  beforeMedia: string,MediaObject;
  tool: HowToTool,string;
  prepTime: Duration;
  performTime: Duration;


}
