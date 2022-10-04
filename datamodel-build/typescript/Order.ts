import { ParcelDelivery } from "./ParcelDelivery";
import { PostalAddress } from "./PostalAddress";
import { Offer } from "./Offer";
import { Organization,Person } from "./Organization,Person";
import { OrderStatus } from "./OrderStatus";
import { Invoice } from "./Invoice";
import { dateTime,date } from "./dateTime,date";
import { Person,Organization } from "./Person,Organization";
import { string,number } from "./string,number";
import { dateTime } from "./dateTime";
import { date,dateTime } from "./date,dateTime";
import { Service,OrderItem,Product } from "./Service,OrderItem,Product";
import { PaymentMethod } from "./PaymentMethod";


export class Order extends Intangible {
  orderDelivery: ParcelDelivery;
  billingAddress: PostalAddress;
  acceptedOffer: Offer;
  merchant: Organization,Person;
  orderStatus: OrderStatus;
  confirmationNumber: string;
  partOfInvoice: Invoice;
  orderNumber: string;
  seller: Organization,Person;
  customer: Organization,Person;
  paymentDueDate: dateTime,date;
  broker: Person,Organization;
  discountCode: string;
  discount: string,number;
  paymentMethodId: string;
  paymentUrl: string;
  discountCurrency: string;
  paymentDue: dateTime;
  orderDate: date,dateTime;
  isGift: boolean;
  orderedItem: Service,OrderItem,Product;
  paymentMethod: PaymentMethod;


}
