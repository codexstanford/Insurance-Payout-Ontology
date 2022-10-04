import { string,string } from "./string,string";
import { CreativeWork } from "./CreativeWork";
import { SoftwareApplication } from "./SoftwareApplication";
import { ImageObject,string } from "./ImageObject,string";
import { DataFeed } from "./DataFeed";


export class SoftwareApplication extends CreativeWork {
  countriesSupported: string;
  installUrl: string;
  operatingSystem: string;
  memoryRequirements: string,string;
  softwareVersion: string;
  storageRequirements: string,string;
  softwareHelp: CreativeWork;
  applicationSubCategory: string,string;
  downloadUrl: string;
  applicationCategory: string,string;
  countriesNotSupported: string;
  softwareRequirements: string,string;
  softwareAddOn: SoftwareApplication;
  applicationSuite: string;
  requirements: string,string;
  permissions: string;
  processorRequirements: string;
  screenshot: ImageObject,string;
  featureList: string,string;
  releaseNotes: string,string;
  supportingData: DataFeed;
  fileSize: string;
  device: string;
  availableOnDevice: string;


}
