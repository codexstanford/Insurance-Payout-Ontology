import { DataType } from "./DataType";
import { StatisticalPopulation } from "./StatisticalPopulation";
import { Property } from "./Property";
import { dateTime } from "./dateTime";
import { QuantitativeValue } from "./QuantitativeValue";


export class Observation extends Intangible {
  measuredValue: DataType;
  observedNode: StatisticalPopulation;
  measuredProperty: Property;
  observationDate: dateTime;
  marginOfError: QuantitativeValue;


}
