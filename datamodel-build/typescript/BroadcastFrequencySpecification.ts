import { QualitativeValue,string } from "./QualitativeValue,string";
import { number,QuantitativeValue } from "./number,QuantitativeValue";


export class BroadcastFrequencySpecification extends Intangible {
  broadcastSubChannel: string;
  broadcastSignalModulation: QualitativeValue,string;
  broadcastFrequencyValue: number,QuantitativeValue;


}
