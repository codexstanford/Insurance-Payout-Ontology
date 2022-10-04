import { Duration } from "./Duration";


export class QuantitativeValueDistribution extends StructuredValue {
  percentile75: number;
  median: number;
  percentile10: number;
  percentile25: number;
  percentile90: number;
  duration: Duration;


}
