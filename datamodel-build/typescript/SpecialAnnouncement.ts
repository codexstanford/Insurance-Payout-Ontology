import { GovernmentService } from "./GovernmentService";
import { string,string,PhysicalActivityCategory,Thing,CategoryCode } from "./string,string,PhysicalActivityCategory,Thing,CategoryCode";
import { Dataset,Observation,WebContent,string } from "./Dataset,Observation,WebContent,string";
import { WebContent,string } from "./WebContent,string";
import { CivicStructure,LocalBusiness } from "./CivicStructure,LocalBusiness";
import { string,WebContent } from "./string,WebContent";
import { date,dateTime } from "./date,dateTime";
import { DataFeed,string } from "./DataFeed,string";


export class SpecialAnnouncement extends CreativeWork {
  governmentBenefitsInfo: GovernmentService;
  category: string,string,PhysicalActivityCategory,Thing,CategoryCode;
  diseaseSpreadStatistics: Dataset,Observation,WebContent,string;
  gettingTestedInfo: WebContent,string;
  announcementLocation: CivicStructure,LocalBusiness;
  travelBans: string,WebContent;
  diseasePreventionInfo: string,WebContent;
  publicTransportClosuresInfo: string,WebContent;
  schoolClosuresInfo: WebContent,string;
  datePosted: date,dateTime;
  newsUpdatesAndGuidelines: string,WebContent;
  quarantineGuidelines: string,WebContent;
  webFeed: DataFeed,string;


}
