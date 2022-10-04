import { SuperficialAnatomy,AnatomicalStructure } from "./SuperficialAnatomy,AnatomicalStructure";
import { AnatomicalStructure } from "./AnatomicalStructure";
import { BrainStructure } from "./BrainStructure";
import { Muscle } from "./Muscle";


export class Nerve extends AnatomicalStructure {
  sensoryUnit: SuperficialAnatomy,AnatomicalStructure;
  branch: AnatomicalStructure;
  sourcedFrom: BrainStructure;
  nerveMotor: Muscle;


}
