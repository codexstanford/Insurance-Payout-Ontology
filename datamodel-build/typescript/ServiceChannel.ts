import { Service } from "./Service";
import { ContactPoint } from "./ContactPoint";
import { PostalAddress } from "./PostalAddress";
import { string,Language } from "./string,Language";
import { Duration } from "./Duration";
import { Place } from "./Place";


export class ServiceChannel extends Intangible {
  providesService: Service;
  serviceSmsNumber: ContactPoint;
  servicePostalAddress: PostalAddress;
  serviceUrl: string;
  servicePhone: ContactPoint;
  availableLanguage: string,Language;
  processingTime: Duration;
  serviceLocation: Place;


}
