import { EUEnergyEfficiencyEnumeration } from "./EUEnergyEfficiencyEnumeration";
import { EnergyEfficiencyEnumeration } from "./EnergyEfficiencyEnumeration";


export class EnergyConsumptionDetails extends Intangible {
  energyEfficiencyScaleMin: EUEnergyEfficiencyEnumeration;
  hasEnergyEfficiencyCategory: EnergyEfficiencyEnumeration;
  energyEfficiencyScaleMax: EUEnergyEfficiencyEnumeration;


}
