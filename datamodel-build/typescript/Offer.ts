import { AdultOrientedEnumeration } from "./AdultOrientedEnumeration";
import { Review } from "./Review";
import { Trip,Event,Product,AggregateOffer,CreativeWork,MenuItem,Service } from "./Trip,Event,Product,AggregateOffer,CreativeWork,MenuItem,Service";
import { string,string,PhysicalActivityCategory,Thing,CategoryCode } from "./string,string,PhysicalActivityCategory,Thing,CategoryCode";
import { date } from "./date";
import { OfferShippingDetails } from "./OfferShippingDetails";
import { TypeAndQuantityNode } from "./TypeAndQuantityNode";
import { BusinessFunction } from "./BusinessFunction";
import { OfferItemCondition } from "./OfferItemCondition";
import { QuantitativeValue } from "./QuantitativeValue";
import { LoanOrCredit,PaymentMethod } from "./LoanOrCredit,PaymentMethod";
import { WarrantyPromise } from "./WarrantyPromise";
import { Organization,Person } from "./Organization,Person";
import { Place,string,GeoShape } from "./Place,string,GeoShape";
import { QuantitativeValue,Duration } from "./QuantitativeValue,Duration";
import { AggregateRating } from "./AggregateRating";
import { Person,Organization } from "./Person,Organization";
import { DeliveryMethod } from "./DeliveryMethod";
import { dateTime,date } from "./dateTime,date";
import { date,dateTime,time } from "./date,dateTime,time";
import { GeoShape,string,Place } from "./GeoShape,string,Place";
import { Offer } from "./Offer";
import { MerchantReturnPolicy } from "./MerchantReturnPolicy";
import { PriceSpecification } from "./PriceSpecification";
import { AdministrativeArea,GeoShape,string,Place } from "./AdministrativeArea,GeoShape,string,Place";
import { BusinessEntityType } from "./BusinessEntityType";
import { ItemAvailability } from "./ItemAvailability";
import { number,string } from "./number,string";
import { time,dateTime,date } from "./time,dateTime,date";
import { Place } from "./Place";


export class Offer extends Intangible {
  hasAdultConsideration: AdultOrientedEnumeration;
  gtin12: string;
  review: Review;
  itemOffered: Trip,Event,Product,AggregateOffer,CreativeWork,MenuItem,Service;
  category: string,string,PhysicalActivityCategory,Thing,CategoryCode;
  priceValidUntil: date;
  shippingDetails: OfferShippingDetails;
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
  leaseLength: QuantitativeValue,Duration;
  aggregateRating: AggregateRating;
  offeredBy: Person,Organization;
  deliveryLeadTime: QuantitativeValue;
  availableDeliveryMethod: DeliveryMethod;
  validFrom: dateTime,date;
  availabilityEnds: date,dateTime,time;
  eligibleRegion: GeoShape,string,Place;
  hasMeasurement: QuantitativeValue;
  gtin8: string;
  inventoryLevel: QuantitativeValue;
  sku: string;
  addOn: Offer;
  hasMerchantReturnPolicy: MerchantReturnPolicy;
  advanceBookingRequirement: QuantitativeValue;
  gtin14: string;
  priceCurrency: string;
  eligibleTransactionVolume: PriceSpecification;
  areaServed: AdministrativeArea,GeoShape,string,Place;
  eligibleCustomerType: BusinessEntityType;
  availability: ItemAvailability;
  gtin13: string;
  reviews: Review;
  isFamilyFriendly: boolean;
  validThrough: dateTime,date;
  priceSpecification: PriceSpecification;
  price: number,string;
  availabilityStarts: time,dateTime,date;
  eligibleDuration: QuantitativeValue;
  availableAtOrFrom: Place;
  serialNumber: string;


}