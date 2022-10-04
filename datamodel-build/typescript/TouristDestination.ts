import { Audience,string } from "./Audience,string";
import { TouristAttraction } from "./TouristAttraction";


export class TouristDestination extends Place {
  touristType: Audience,string;
  includesAttraction: TouristAttraction;


}
