import { dateTime,string } from "./dateTime,string";
import { date,dateTime } from "./date,dateTime";


export class CDCPMDRecord extends StructuredValue {
  cvdNumBedsOcc: number;
  cvdNumICUBedsOcc: number;
  cvdNumVent: number;
  cvdNumC19Died: number;
  cvdNumTotBeds: number;
  cvdFacilityCounty: string;
  cvdNumICUBeds: number;
  cvdCollectionDate: dateTime,string;
  cvdNumC19HOPats: number;
  cvdNumC19OFMechVentPats: number;
  cvdFacilityId: string;
  cvdNumVentUse: number;
  cvdNumBeds: number;
  cvdNumC19MechVentPats: number;
  datePosted: date,dateTime;
  cvdNumC19OverflowPats: number;
  cvdNumC19HospPats: number;


}
