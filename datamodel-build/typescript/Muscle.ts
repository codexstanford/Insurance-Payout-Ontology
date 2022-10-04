import { AnatomicalStructure } from "./AnatomicalStructure";
import { Muscle } from "./Muscle";
import { Nerve } from "./Nerve";
import { Vessel } from "./Vessel";


export class Muscle extends AnatomicalStructure {
  insertion: AnatomicalStructure;
  antagonist: Muscle;
  nerve: Nerve;
  bloodSupply: Vessel;
  muscleAction: string;


}
