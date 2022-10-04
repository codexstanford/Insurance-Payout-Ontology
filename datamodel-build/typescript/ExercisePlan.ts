import { number,QuantitativeValue } from "./number,QuantitativeValue";
import { QuantitativeValue,string } from "./QuantitativeValue,string";
import { QuantitativeValue,Energy } from "./QuantitativeValue,Energy";
import { Duration,QuantitativeValue } from "./Duration,QuantitativeValue";
import { string,QuantitativeValue } from "./string,QuantitativeValue";


export class ExercisePlan extends CreativeWork,PhysicalActivity {
  repetitions: number,QuantitativeValue;
  intensity: QuantitativeValue,string;
  workload: QuantitativeValue,Energy;
  activityDuration: Duration,QuantitativeValue;
  restPeriods: string,QuantitativeValue;
  activityFrequency: string,QuantitativeValue;
  additionalVariable: string;
  exerciseType: string;


}
