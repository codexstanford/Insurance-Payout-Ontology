import { Review } from "./Review";
import { Audience } from "./Audience";
import { string,string,PhysicalActivityCategory,Thing,CategoryCode } from "./string,string,PhysicalActivityCategory,Thing,CategoryCode";
import { OpeningHoursSpecification } from "./OpeningHoursSpecification";
import { Offer,Demand } from "./Offer,Demand";
import { Thing } from "./Thing";
import { Organization,Person } from "./Organization,Person";
import { string,string } from "./string,string";
import { Person,Organization } from "./Person,Organization";
import { AggregateRating } from "./AggregateRating";
import { Service,Product } from "./Service,Product";
import { ServiceChannel } from "./ServiceChannel";
import { Organization,Brand } from "./Organization,Brand";
import { string,ImageObject } from "./string,ImageObject";
import { GeoShape,AdministrativeArea,Place } from "./GeoShape,AdministrativeArea,Place";
import { GovernmentBenefitsType,string } from "./GovernmentBenefitsType,string";
import { AdministrativeArea,GeoShape,string,Place } from "./AdministrativeArea,GeoShape,string,Place";
import { OfferCatalog } from "./OfferCatalog";


export class Service extends Intangible {
  review: Review;
  award: string;
  serviceAudience: Audience;
  category: string,string,PhysicalActivityCategory,Thing,CategoryCode;
  hoursAvailable: OpeningHoursSpecification;
  audience: Audience;
  offers: Offer,Demand;
  serviceOutput: Thing;
  provider: Organization,Person;
  termsOfService: string,string;
  providerMobility: string;
  broker: Person,Organization;
  aggregateRating: AggregateRating;
  isSimilarTo: Service,Product;
  availableChannel: ServiceChannel;
  slogan: string;
  brand: Organization,Brand;
  logo: string,ImageObject;
  produces: Thing;
  serviceArea: GeoShape,AdministrativeArea,Place;
  serviceType: GovernmentBenefitsType,string;
  areaServed: AdministrativeArea,GeoShape,string,Place;
  isRelatedTo: Service,Product;
  hasOfferCatalog: OfferCatalog;


}
