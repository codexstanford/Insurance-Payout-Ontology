import { AnatomicalSystem,AnatomicalStructure } from "./AnatomicalSystem,AnatomicalStructure";
import { AnatomicalStructure } from "./AnatomicalStructure";
import { Vessel } from "./Vessel";


export class Vein extends Vessel {
  regionDrained: AnatomicalSystem,AnatomicalStructure;
  tributary: AnatomicalStructure;
  drainsTo: Vessel;


}
