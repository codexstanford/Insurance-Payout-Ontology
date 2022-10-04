import { QuantitativeValue,number } from "./QuantitativeValue,number";
import { BedDetails,string,BedType } from "./BedDetails,string,BedType";
import { QuantitativeValue } from "./QuantitativeValue";


export class Suite extends Accommodation {
  numberOfRooms: QuantitativeValue,number;
  bed: BedDetails,string,BedType;
  occupancy: QuantitativeValue;


}
