import { Trip,Event,Product,AggregateOffer,CreativeWork,MenuItem,Service } from "./Trip,Event,Product,AggregateOffer,CreativeWork,MenuItem,Service";
import { TypeAndQuantityNode } from "./TypeAndQuantityNode";
import { BusinessFunction } from "./BusinessFunction";
import { OfferItemCondition } from "./OfferItemCondition";
import { QuantitativeValue } from "./QuantitativeValue";
import { LoanOrCredit,PaymentMethod } from "./LoanOrCredit,PaymentMethod";
import { WarrantyPromise } from "./WarrantyPromise";
import { Organization,Person } from "./Organization,Person";
import { Place,string,GeoShape } from "./Place,string,GeoShape";
import { DeliveryMethod } from "./DeliveryMethod";
import { dateTime,date } from "./dateTime,date";
import { date,dateTime,time } from "./date,dateTime,time";
import { GeoShape,string,Place } from "./GeoShape,string,Place";
import { PriceSpecification } from "./PriceSpecification";
import { AdministrativeArea,GeoShape,string,Place } from "./AdministrativeArea,GeoShape,string,Place";
import { BusinessEntityType } from "./BusinessEntityType";
import { ItemAvailability } from "./ItemAvailability";
import { time,dateTime,date } from "./time,dateTime,date";
import { Place } from "./Place";


export class Demand extends Intangible {
  gtin12: string;
  itemOffered: Trip,Event,Product,AggregateOffer,CreativeWork,MenuItem,Service;
  mpn: string;
  includesObject: TypeAndQuantityNode;
  businessFunction: BusinessFunction;
  itemCondition: OfferItemCondition;
  gtin: string;
  eligibleQuantity: QuantitativeValue;
  acceptedPaymentMethod: LoanOrCredit,PaymentMethod;
  warranty: WarrantyPromise;
  seller: Organization,Person;
  ineligibleRegion: Place,string,GeoShape;
  deliveryLeadTime: QuantitativeValue;
  availableDeliveryMethod: DeliveryMethod;
  validFrom: dateTime,date;
  availabilityEnds: date,dateTime,time;
  eligibleRegion: GeoShape,string,Place;
  gtin8: string;
  inventoryLevel: QuantitativeValue;
  sku: string;
  advanceBookingRequirement: QuantitativeValue;
  gtin14: string;
  eligibleTransactionVolume: PriceSpecification;
  areaServed: AdministrativeArea,GeoShape,string,Place;
  eligibleCustomerType: BusinessEntityType;
  availability: ItemAvailability;
  gtin13: string;
  validThrough: dateTime,date;
  priceSpecification: PriceSpecification;
  availabilityStarts: time,dateTime,date;
  eligibleDuration: QuantitativeValue;
  availableAtOrFrom: Place;
  serialNumber: string;


}
