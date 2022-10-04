import { Vessel } from "./Vessel";
import { AnatomicalSystem,AnatomicalStructure } from "./AnatomicalSystem,AnatomicalStructure";


export class LymphaticVessel extends Vessel {
  runsTo: Vessel;
  regionDrained: AnatomicalSystem,AnatomicalStructure;
  originatesFrom: Vessel;


}
