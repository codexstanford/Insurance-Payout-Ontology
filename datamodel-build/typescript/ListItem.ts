import { number,string } from "./number,string";
import { ListItem } from "./ListItem";
import { Thing } from "./Thing";


export class ListItem extends Intangible {
  position: number,string;
  nextItem: ListItem;
  item: Thing;
  previousItem: ListItem;


}
