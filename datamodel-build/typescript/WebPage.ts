import { date } from "./date";
import { Specialty } from "./Specialty";
import { ImageObject } from "./ImageObject";
import { Organization,Person } from "./Organization,Person";
import { WebPageElement } from "./WebPageElement";
import { string,SpeakableSpecification } from "./string,SpeakableSpecification";
import { BreadcrumbList,string } from "./BreadcrumbList,string";


export class WebPage extends CreativeWork {
  lastReviewed: date;
  specialty: Specialty;
  primaryImageOfPage: ImageObject;
  significantLink: string;
  reviewedBy: Organization,Person;
  mainContentOfPage: WebPageElement;
  relatedLink: string;
  speakable: string,SpeakableSpecification;
  breadcrumb: BreadcrumbList,string;
  significantLinks: string;


}
