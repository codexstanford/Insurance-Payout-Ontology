import { DataCatalog } from "./DataCatalog";
import { PropertyValue,string } from "./PropertyValue,string";
import { string,string } from "./string,string";
import { dateTime } from "./dateTime";
import { DataDownload } from "./DataDownload";


export class Dataset extends CreativeWork {
  catalog: DataCatalog;
  includedDataCatalog: DataCatalog;
  variableMeasured: PropertyValue,string;
  measurementTechnique: string,string;
  datasetTimeInterval: dateTime;
  distribution: DataDownload;
  issn: string;
  includedInDataCatalog: DataCatalog;


}
